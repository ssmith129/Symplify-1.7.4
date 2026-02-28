import { useState } from "react";
import { Link } from "react-router";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

type Timeframe = "daily" | "weekly" | "monthly";

interface ForecastRow {
  label: string;
  actual: number | null;
  predicted: number;
  lower: number;
  upper: number;
  confidence: number;
}

const FORECAST_DATA: Record<Timeframe, ForecastRow[]> = {
  daily: [
    { label: "Mon 3/2", actual: null, predicted: 142, lower: 128, upper: 156, confidence: 88 },
    { label: "Tue 3/3", actual: null, predicted: 158, lower: 140, upper: 176, confidence: 86 },
    { label: "Wed 3/4", actual: null, predicted: 165, lower: 148, upper: 182, confidence: 84 },
    { label: "Thu 3/5", actual: null, predicted: 151, lower: 134, upper: 168, confidence: 85 },
    { label: "Fri 3/6", actual: null, predicted: 139, lower: 122, upper: 156, confidence: 87 },
  ],
  weekly: [
    { label: "Week 10", actual: null, predicted: 745, lower: 690, upper: 800, confidence: 90 },
    { label: "Week 11", actual: null, predicted: 762, lower: 700, upper: 824, confidence: 88 },
    { label: "Week 12", actual: null, predicted: 718, lower: 652, upper: 784, confidence: 85 },
    { label: "Week 13", actual: null, predicted: 790, lower: 720, upper: 860, confidence: 83 },
  ],
  monthly: [
    { label: "Mar 2026", actual: null, predicted: 3180, lower: 2900, upper: 3460, confidence: 82 },
    { label: "Apr 2026", actual: null, predicted: 3350, lower: 3020, upper: 3680, confidence: 78 },
    { label: "May 2026", actual: null, predicted: 3520, lower: 3140, upper: 3900, confidence: 74 },
  ],
};

const HISTORICAL: number[] = [128, 135, 142, 138, 155, 148, 160, 152, 145, 162, 158, 148];
const PREDICTED: number[] = [148, 152, 158, 165, 151, 139, 0, 0, 0, 0, 0, 0];
const UPPER: (number | null)[] = [null, null, null, null, null, null, 156, 176, 182, 168, 156, 0];
const LOWER: (number | null)[] = [null, null, null, null, null, null, 128, 140, 148, 134, 122, 0];

const SCENARIO_PRESETS = [
  { name: "Flu Season Surge", impact: "+22%", color: "danger" },
  { name: "Holiday Staffing", impact: "-15%", color: "warning" },
  { name: "New Wing Opening", impact: "+35%", color: "primary" },
];

const DemandForecasting = () => {
  const [timeframe, setTimeframe] = useState<Timeframe>("daily");
  const [showScenarios, setShowScenarios] = useState(false);

  const chartOptions: ApexOptions = {
    chart: { type: "line", height: 220, toolbar: { show: false }, zoom: { enabled: false } },
    stroke: { width: [2, 2, 1, 1], curve: "smooth", dashArray: [0, 5, 3, 3] },
    colors: ["#2E37A4", "#00D3C7", "#E7E8EB", "#E7E8EB"],
    fill: {
      type: ["solid", "solid", "solid", "solid"],
      opacity: [1, 1, 0.15, 0.15],
    },
    xaxis: {
      categories: ["W-6", "W-5", "W-4", "W-3", "W-2", "W-1", "D+1", "D+2", "D+3", "D+4", "D+5", ""],
      labels: { style: { fontSize: "11px" } },
    },
    yaxis: { labels: { style: { fontSize: "11px" } } },
    legend: { show: true, position: "top", fontSize: "12px" },
    tooltip: { shared: true, intersect: false },
    grid: { borderColor: "#f1f1f1", strokeDashArray: 3 },
  };

  const chartSeries = [
    { name: "Historical", data: HISTORICAL },
    { name: "Predicted", data: PREDICTED.map((v) => v || null) },
    { name: "Upper CI", data: UPPER },
    { name: "Lower CI", data: LOWER },
  ];

  const rows = FORECAST_DATA[timeframe];
  const avgConfidence = Math.round(rows.reduce((s, r) => s + r.confidence, 0) / rows.length);

  return (
    <div className="card shadow-sm flex-fill w-100">
      <div className="card-header d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <h5 className="fw-bold mb-0">Demand Forecasting</h5>
          <span className="badge bg-warning text-dark fs-10">
            <i className="ti ti-sparkles me-1" />AI
          </span>
        </div>
        <div className="d-flex gap-2">
          <button
            className={`btn btn-sm ${showScenarios ? "btn-primary" : "btn-outline-white"}`}
            onClick={() => setShowScenarios(!showScenarios)}
          >
            <i className="ti ti-arrows-split-2 me-1" />Scenarios
          </button>
          <div className="btn-group btn-group-sm">
            {(["daily", "weekly", "monthly"] as Timeframe[]).map((t) => (
              <button
                key={t}
                className={`btn ${timeframe === t ? "btn-primary" : "btn-outline-white"}`}
                onClick={() => setTimeframe(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="card-body">
        {/* Confidence Summary */}
        <div className="d-flex gap-3 mb-3">
          <div className="border rounded-2 p-2 px-3 text-center flex-fill" style={{ backgroundColor: "#EEF2FF" }}>
            <h5 className="fw-bold mb-0 text-primary">{rows[0]?.predicted}</h5>
            <small className="text-muted">Next {timeframe === "daily" ? "Day" : timeframe === "weekly" ? "Week" : "Month"}</small>
          </div>
          <div className="border rounded-2 p-2 px-3 text-center flex-fill" style={{ backgroundColor: avgConfidence >= 85 ? "#F0FDF4" : "#FFFBEB" }}>
            <h5 className={`fw-bold mb-0 ${avgConfidence >= 85 ? "text-success" : "text-warning"}`}>{avgConfidence}%</h5>
            <small className="text-muted">Avg Confidence</small>
          </div>
          <div className="border rounded-2 p-2 px-3 text-center flex-fill">
            <h5 className="fw-bold mb-0">{rows[0]?.lower}–{rows[0]?.upper}</h5>
            <small className="text-muted">95% CI Range</small>
          </div>
        </div>

        {/* Chart */}
        <Chart options={chartOptions} series={chartSeries} type="line" height={200} />

        {/* Scenario Planning */}
        {showScenarios && (
          <div className="mt-3 p-3 border rounded-2" style={{ backgroundColor: "#FAFBFC" }}>
            <h6 className="fw-semibold mb-2 fs-13">
              <i className="ti ti-arrows-split-2 me-1 text-primary" />Scenario Presets
            </h6>
            <div className="d-flex gap-2 flex-wrap">
              {SCENARIO_PRESETS.map((s) => (
                <button key={s.name} className={`btn btn-sm btn-outline-${s.color} d-inline-flex align-items-center gap-1`}>
                  {s.name} <span className="fw-bold">{s.impact}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Forecast Table */}
        <div className="table-responsive mt-3">
          <table className="table table-sm border mb-0">
            <thead className="thead-light">
              <tr>
                <th>Period</th>
                <th className="text-center">Predicted</th>
                <th className="text-center">95% CI</th>
                <th className="text-center">Confidence</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label}>
                  <td className="fw-medium">{r.label}</td>
                  <td className="text-center fw-semibold">{r.predicted}</td>
                  <td className="text-center text-muted fs-12">{r.lower} – {r.upper}</td>
                  <td className="text-center">
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <div className="progress flex-fill" style={{ height: 6, maxWidth: 60 }}>
                        <div
                          className={`progress-bar ${r.confidence >= 85 ? "bg-success" : r.confidence >= 75 ? "bg-warning" : "bg-danger"}`}
                          style={{ width: `${r.confidence}%` }}
                        />
                      </div>
                      <small className="fw-medium">{r.confidence}%</small>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DemandForecasting;
