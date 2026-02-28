import { useState } from "react";
import { Link } from "react-router";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

type DrillLevel = "facility" | "department" | "provider";

interface FacilityData {
  name: string;
  rate: number;
  trend: number;
  departments: DepartmentData[];
}

interface DepartmentData {
  name: string;
  rate: number;
  trend: number;
  providers: ProviderData[];
}

interface ProviderData {
  name: string;
  role: string;
  rate: number;
  trend: number;
  openItems: number;
}

const MOCK_DATA: FacilityData[] = [
  {
    name: "Main Campus",
    rate: 94.2,
    trend: 1.3,
    departments: [
      {
        name: "Emergency",
        rate: 91.5,
        trend: -0.8,
        providers: [
          { name: "Dr. Sarah Chen", role: "Attending", rate: 96.1, trend: 2.1, openItems: 1 },
          { name: "Dr. Mark Rivera", role: "Attending", rate: 88.3, trend: -1.5, openItems: 4 },
          { name: "Dr. Lisa Park", role: "Resident", rate: 90.2, trend: 0.5, openItems: 2 },
        ],
      },
      {
        name: "Cardiology",
        rate: 97.8,
        trend: 0.4,
        providers: [
          { name: "Dr. James Wilson", role: "Chief", rate: 99.1, trend: 0.2, openItems: 0 },
          { name: "Dr. Priya Patel", role: "Attending", rate: 96.5, trend: 0.6, openItems: 1 },
        ],
      },
      {
        name: "Oncology",
        rate: 93.4,
        trend: 2.0,
        providers: [
          { name: "Dr. Amy Nguyen", role: "Attending", rate: 95.0, trend: 1.8, openItems: 1 },
          { name: "Dr. Robert Kim", role: "Fellow", rate: 91.8, trend: 2.2, openItems: 2 },
        ],
      },
    ],
  },
  {
    name: "West Wing Clinic",
    rate: 96.7,
    trend: 0.5,
    departments: [
      {
        name: "Primary Care",
        rate: 97.2,
        trend: 0.3,
        providers: [
          { name: "Dr. Emily Brooks", role: "Attending", rate: 98.4, trend: 0.7, openItems: 0 },
          { name: "Dr. David Lee", role: "Attending", rate: 96.0, trend: -0.1, openItems: 1 },
        ],
      },
      {
        name: "Pediatrics",
        rate: 96.1,
        trend: 0.8,
        providers: [
          { name: "Dr. Nina Torres", role: "Chief", rate: 97.5, trend: 1.0, openItems: 0 },
        ],
      },
    ],
  },
];

const ALERT_THRESHOLDS = { critical: 85, warning: 90, target: 95 };

function getRateColor(rate: number): string {
  if (rate >= ALERT_THRESHOLDS.target) return "#16A34A";
  if (rate >= ALERT_THRESHOLDS.warning) return "#EA580C";
  return "#DC2626";
}

function getRateBadge(rate: number) {
  if (rate >= ALERT_THRESHOLDS.target)
    return "badge-soft-success border border-success text-success";
  if (rate >= ALERT_THRESHOLDS.warning)
    return "badge-soft-warning border border-warning text-warning";
  return "badge-soft-danger border border-danger text-danger";
}

const trendChartOptions: ApexOptions = {
  chart: { type: "area", height: 120, sparkline: { enabled: true }, toolbar: { show: false } },
  stroke: { curve: "smooth", width: 2 },
  fill: {
    type: "gradient",
    gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.05, stops: [0, 95, 100] },
  },
  colors: ["#2E37A4"],
  tooltip: {
    fixed: { enabled: false },
    x: { show: false },
    y: { title: { formatter: () => "Rate: " } },
    marker: { show: false },
  },
  xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
};

const trendSeries = [{ name: "Compliance", data: [91.2, 92.1, 93.0, 93.8, 94.5, 94.8] }];

const SLAComplianceTracker = () => {
  const [drillLevel, setDrillLevel] = useState<DrillLevel>("facility");
  const [selectedFacility, setSelectedFacility] = useState<FacilityData | null>(null);
  const [selectedDept, setSelectedDept] = useState<DepartmentData | null>(null);

  const overallRate =
    MOCK_DATA.reduce((sum, f) => sum + f.rate, 0) / MOCK_DATA.length;

  const handleFacilityClick = (f: FacilityData) => {
    setSelectedFacility(f);
    setDrillLevel("department");
  };

  const handleDeptClick = (d: DepartmentData) => {
    setSelectedDept(d);
    setDrillLevel("provider");
  };

  const handleBack = () => {
    if (drillLevel === "provider") {
      setSelectedDept(null);
      setDrillLevel("department");
    } else if (drillLevel === "department") {
      setSelectedFacility(null);
      setDrillLevel("facility");
    }
  };

  return (
    <div className="card shadow-sm flex-fill w-100">
      <div className="card-header d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          {drillLevel !== "facility" && (
            <button className="btn btn-sm btn-outline-white px-2" onClick={handleBack}>
              <i className="ti ti-arrow-left" />
            </button>
          )}
          <h5 className="fw-bold mb-0">SLA Compliance Tracker</h5>
          <span className="badge bg-primary-transparent text-primary fs-10">Live</span>
        </div>
        <div className="dropdown">
          <Link
            to="#"
            className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
            data-bs-toggle="dropdown"
          >
            Last 30 Days <i className="ti ti-chevron-down ms-1" />
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Last 7 Days</Link></li>
            <li><Link className="dropdown-item" to="#">Last 30 Days</Link></li>
            <li><Link className="dropdown-item" to="#">Last 90 Days</Link></li>
            <li><Link className="dropdown-item" to="#">Year to Date</Link></li>
          </ul>
        </div>
      </div>
      <div className="card-body">
        {/* Overall Rate + Trend */}
        <div className="d-flex align-items-center gap-3 mb-3">
          <div className="text-center">
            <h2 className="fw-bold mb-0" style={{ color: getRateColor(overallRate) }}>
              {overallRate.toFixed(1)}%
            </h2>
            <small className="text-muted">Overall Rate</small>
          </div>
          <div className="flex-fill" style={{ maxWidth: 200 }}>
            <Chart options={trendChartOptions} series={trendSeries} type="area" height={60} />
          </div>
          <div className="d-flex flex-column gap-1">
            {[
              { label: "Target", value: `${ALERT_THRESHOLDS.target}%`, cls: "text-success" },
              { label: "Warning", value: `${ALERT_THRESHOLDS.warning}%`, cls: "text-warning" },
              { label: "Critical", value: `<${ALERT_THRESHOLDS.critical}%`, cls: "text-danger" },
            ].map((t) => (
              <div key={t.label} className="d-flex align-items-center gap-1">
                <span className={`fw-semibold fs-12 ${t.cls}`}>{t.value}</span>
                <small className="text-muted fs-11">{t.label}</small>
              </div>
            ))}
          </div>
        </div>

        {/* Breadcrumb */}
        <nav className="mb-3">
          <ol className="breadcrumb mb-0 fs-12">
            <li className={`breadcrumb-item ${drillLevel === "facility" ? "active" : ""}`}>
              {drillLevel === "facility" ? (
                "All Facilities"
              ) : (
                <Link to="#" onClick={() => { setSelectedFacility(null); setSelectedDept(null); setDrillLevel("facility"); }}>
                  All Facilities
                </Link>
              )}
            </li>
            {selectedFacility && (
              <li className={`breadcrumb-item ${drillLevel === "department" ? "active" : ""}`}>
                {drillLevel === "department" ? (
                  selectedFacility.name
                ) : (
                  <Link to="#" onClick={() => { setSelectedDept(null); setDrillLevel("department"); }}>
                    {selectedFacility.name}
                  </Link>
                )}
              </li>
            )}
            {selectedDept && (
              <li className="breadcrumb-item active">{selectedDept.name}</li>
            )}
          </ol>
        </nav>

        {/* Drill-down Table */}
        <div className="table-responsive">
          <table className="table table-sm border mb-0">
            <thead className="thead-light">
              <tr>
                <th>
                  {drillLevel === "facility" ? "Facility" : drillLevel === "department" ? "Department" : "Provider"}
                </th>
                <th className="text-center">Compliance</th>
                <th className="text-center">Trend</th>
                {drillLevel === "provider" && <th className="text-center">Open Items</th>}
                <th className="text-end">Status</th>
              </tr>
            </thead>
            <tbody>
              {drillLevel === "facility" &&
                MOCK_DATA.map((f) => (
                  <tr key={f.name} style={{ cursor: "pointer" }} onClick={() => handleFacilityClick(f)}>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <i className="ti ti-building-hospital text-primary" />
                        <span className="fw-medium">{f.name}</span>
                        <i className="ti ti-chevron-right fs-11 text-muted" />
                      </div>
                    </td>
                    <td className="text-center fw-semibold" style={{ color: getRateColor(f.rate) }}>
                      {f.rate}%
                    </td>
                    <td className="text-center">
                      <span className={f.trend >= 0 ? "text-success" : "text-danger"}>
                        <i className={`ti ti-trending-${f.trend >= 0 ? "up" : "down"} me-1`} />
                        {Math.abs(f.trend)}%
                      </span>
                    </td>
                    <td className="text-end">
                      <span className={`badge fs-12 py-1 rounded fw-medium ${getRateBadge(f.rate)}`}>
                        {f.rate >= ALERT_THRESHOLDS.target ? "On Track" : f.rate >= ALERT_THRESHOLDS.warning ? "At Risk" : "Critical"}
                      </span>
                    </td>
                  </tr>
                ))}
              {drillLevel === "department" &&
                selectedFacility?.departments.map((d) => (
                  <tr key={d.name} style={{ cursor: "pointer" }} onClick={() => handleDeptClick(d)}>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <i className="ti ti-stethoscope text-primary" />
                        <span className="fw-medium">{d.name}</span>
                        <i className="ti ti-chevron-right fs-11 text-muted" />
                      </div>
                    </td>
                    <td className="text-center fw-semibold" style={{ color: getRateColor(d.rate) }}>
                      {d.rate}%
                    </td>
                    <td className="text-center">
                      <span className={d.trend >= 0 ? "text-success" : "text-danger"}>
                        <i className={`ti ti-trending-${d.trend >= 0 ? "up" : "down"} me-1`} />
                        {Math.abs(d.trend)}%
                      </span>
                    </td>
                    <td className="text-end">
                      <span className={`badge fs-12 py-1 rounded fw-medium ${getRateBadge(d.rate)}`}>
                        {d.rate >= ALERT_THRESHOLDS.target ? "On Track" : d.rate >= ALERT_THRESHOLDS.warning ? "At Risk" : "Critical"}
                      </span>
                    </td>
                  </tr>
                ))}
              {drillLevel === "provider" &&
                selectedDept?.providers.map((p) => (
                  <tr key={p.name}>
                    <td>
                      <div>
                        <span className="fw-medium">{p.name}</span>
                        <br />
                        <small className="text-muted">{p.role}</small>
                      </div>
                    </td>
                    <td className="text-center fw-semibold" style={{ color: getRateColor(p.rate) }}>
                      {p.rate}%
                    </td>
                    <td className="text-center">
                      <span className={p.trend >= 0 ? "text-success" : "text-danger"}>
                        <i className={`ti ti-trending-${p.trend >= 0 ? "up" : "down"} me-1`} />
                        {Math.abs(p.trend)}%
                      </span>
                    </td>
                    <td className="text-center">
                      {p.openItems > 0 ? (
                        <span className="badge bg-danger rounded-pill">{p.openItems}</span>
                      ) : (
                        <span className="text-success"><i className="ti ti-check" /></span>
                      )}
                    </td>
                    <td className="text-end">
                      <span className={`badge fs-12 py-1 rounded fw-medium ${getRateBadge(p.rate)}`}>
                        {p.rate >= ALERT_THRESHOLDS.target ? "Compliant" : p.rate >= ALERT_THRESHOLDS.warning ? "At Risk" : "Non-Compliant"}
                      </span>
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

export default SLAComplianceTracker;
