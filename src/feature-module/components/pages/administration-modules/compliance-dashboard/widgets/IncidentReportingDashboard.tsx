import { useState } from "react";
import { Link } from "react-router";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

type SeverityCategory = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I";

interface Incident {
  id: string;
  title: string;
  date: string;
  unit: string;
  shift: string;
  reporter: string;
  severity: SeverityCategory;
  type: "near_miss" | "adverse_event" | "sentinel" | "osha_recordable";
  status: "open" | "investigating" | "rca_in_progress" | "closed" | "reported";
  regulatoryClock?: { agency: string; deadline: string; hoursRemaining: number };
  rcaDeadline?: string;
  rcaDaysRemaining?: number;
}

const SEVERITY_META: Record<SeverityCategory, { label: string; color: string; harm: string }> = {
  A: { label: "A", color: "#93C5FD", harm: "No error" },
  B: { label: "B", color: "#93C5FD", harm: "Error, no harm" },
  C: { label: "C", color: "#FDE68A", harm: "Error, reached patient" },
  D: { label: "D", color: "#FDE68A", harm: "Error, monitoring needed" },
  E: { label: "E", color: "#FDBA74", harm: "Temporary harm" },
  F: { label: "F", color: "#FDBA74", harm: "Temporary harm, extended stay" },
  G: { label: "G", color: "#FCA5A5", harm: "Permanent harm" },
  H: { label: "H", color: "#FCA5A5", harm: "Intervention to sustain life" },
  I: { label: "I", color: "#EF4444", harm: "Death" },
};

const TYPE_META = {
  near_miss: { label: "Near Miss", cls: "badge-soft-warning border border-warning text-warning", icon: "ti-alert-triangle" },
  adverse_event: { label: "Adverse Event", cls: "badge-soft-danger border border-danger text-danger", icon: "ti-urgent" },
  sentinel: { label: "Sentinel Event", cls: "bg-danger text-white", icon: "ti-alert-octagon" },
  osha_recordable: { label: "OSHA Recordable", cls: "badge-soft-primary border border-primary text-primary", icon: "ti-shield" },
};

const STATUS_META: Record<Incident["status"], { label: string; cls: string }> = {
  open: { label: "Open", cls: "badge-soft-warning border border-warning text-warning" },
  investigating: { label: "Investigating", cls: "badge-soft-primary border border-primary text-primary" },
  rca_in_progress: { label: "RCA In Progress", cls: "badge-soft-info border border-info text-info" },
  closed: { label: "Closed", cls: "badge-soft-success border border-success text-success" },
  reported: { label: "Reported", cls: "badge-soft-secondary border border-secondary text-secondary" },
};

const MOCK_INCIDENTS: Incident[] = [
  { id: "i1", title: "Wrong-site procedure near miss — OR 3", date: "2026-02-28 08:15", unit: "Surgery", shift: "Day", reporter: "RN K. Adams", severity: "D", type: "near_miss", status: "investigating" },
  { id: "i2", title: "Retained surgical sponge — post-op imaging", date: "2026-02-27 14:30", unit: "Surgery", shift: "Day", reporter: "Dr. J. Wilson", severity: "E", type: "sentinel", status: "rca_in_progress", regulatoryClock: { agency: "Joint Commission", deadline: "2026-04-13", hoursRemaining: 1080 }, rcaDeadline: "2026-04-13", rcaDaysRemaining: 44 },
  { id: "i3", title: "Medication administration error — wrong dose", date: "2026-02-27 22:10", unit: "Med-Surg", shift: "Night", reporter: "RN L. Park", severity: "C", type: "adverse_event", status: "investigating", regulatoryClock: { agency: "State Health Dept", deadline: "2026-03-02", hoursRemaining: 48 } },
  { id: "i4", title: "Patient fall with minor injury — Room 412", date: "2026-02-27 03:45", unit: "Med-Surg", shift: "Night", reporter: "CNA M. Davis", severity: "E", type: "adverse_event", status: "open", regulatoryClock: { agency: "State Adverse Event", deadline: "2026-03-01", hoursRemaining: 24 } },
  { id: "i5", title: "Needle stick injury — phlebotomy", date: "2026-02-26 10:20", unit: "Lab", shift: "Day", reporter: "Tech S. Reyes", severity: "D", type: "osha_recordable", status: "reported", regulatoryClock: { agency: "OSHA", deadline: "2026-02-27", hoursRemaining: 0 } },
  { id: "i6", title: "Elopement attempt — behavioral health unit", date: "2026-02-26 19:55", unit: "Behavioral Health", shift: "Evening", reporter: "RN T. Brooks", severity: "B", type: "near_miss", status: "closed" },
  { id: "i7", title: "Blood transfusion reaction — ICU bed 8", date: "2026-02-25 11:30", unit: "ICU", shift: "Day", reporter: "RN A. Nguyen", severity: "F", type: "adverse_event", status: "rca_in_progress", rcaDeadline: "2026-04-11", rcaDaysRemaining: 42 },
  { id: "i8", title: "Equipment malfunction — ventilator alarm failure", date: "2026-02-24 06:10", unit: "ICU", shift: "Night", reporter: "RT P. Miller", severity: "C", type: "near_miss", status: "investigating" },
];

const trendChartOptions: ApexOptions = {
  chart: { type: "bar", height: 160, stacked: true, toolbar: { show: false } },
  plotOptions: { bar: { horizontal: false, columnWidth: "55%", borderRadius: 3 } },
  xaxis: { categories: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"], labels: { style: { fontSize: "11px" } } },
  yaxis: { labels: { style: { fontSize: "11px" } } },
  colors: ["#FDE68A", "#FCA5A5", "#EF4444", "#93C5FD"],
  legend: { position: "top", fontSize: "11px" },
  grid: { borderColor: "#f1f1f1", strokeDashArray: 3 },
  tooltip: { shared: true, intersect: false },
};

const trendSeries = [
  { name: "Near Miss", data: [8, 5, 7, 6, 9, 4] },
  { name: "Adverse", data: [3, 4, 2, 5, 3, 2] },
  { name: "Sentinel", data: [0, 1, 0, 0, 1, 0] },
  { name: "OSHA", data: [2, 1, 3, 1, 2, 1] },
];

const IncidentReportingDashboard = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<"all" | Incident["type"]>("all");
  const [showTrends, setShowTrends] = useState(false);

  const filtered = MOCK_INCIDENTS.filter((i) => filterType === "all" || i.type === filterType);

  const stats = {
    open: MOCK_INCIDENTS.filter((i) => i.status === "open" || i.status === "investigating").length,
    sentinel: MOCK_INCIDENTS.filter((i) => i.type === "sentinel").length,
    clocksActive: MOCK_INCIDENTS.filter((i) => i.regulatoryClock && i.regulatoryClock.hoursRemaining > 0).length,
    rcaActive: MOCK_INCIDENTS.filter((i) => i.rcaDaysRemaining !== undefined && i.rcaDaysRemaining > 0).length,
  };

  return (
    <div className="card shadow-sm flex-fill w-100">
      <div className="card-header d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <h5 className="fw-bold mb-0">Incident & Event Reporting</h5>
          {stats.sentinel > 0 && (
            <span className="badge bg-danger rounded-pill">{stats.sentinel} sentinel</span>
          )}
        </div>
        <div className="d-flex gap-2">
          <button
            className={`btn btn-sm ${showTrends ? "btn-primary" : "btn-outline-white"} d-inline-flex align-items-center gap-1`}
            onClick={() => setShowTrends(!showTrends)}
          >
            <i className="ti ti-chart-bar fs-14" /> Trends
          </button>
          <button className="btn btn-sm btn-primary d-inline-flex align-items-center gap-1">
            <i className="ti ti-plus fs-14" /> Report Event
          </button>
        </div>
      </div>
      <div className="card-body p-0">
        {/* Summary Stats */}
        <div className="d-flex gap-2 px-3 pt-3 pb-2">
          {[
            { label: "Open/Active", value: stats.open, color: "warning" },
            { label: "Sentinel", value: stats.sentinel, color: "danger" },
            { label: "Reg. Clocks", value: stats.clocksActive, color: "primary" },
            { label: "Active RCAs", value: stats.rcaActive, color: "info" },
          ].map((s) => (
            <div key={s.label} className="border rounded-2 p-2 text-center flex-fill">
              <h5 className={`fw-bold mb-0 text-${s.color}`}>{s.value}</h5>
              <small className="text-muted fs-11">{s.label}</small>
            </div>
          ))}
        </div>

        {/* Trend Chart */}
        {showTrends && (
          <div className="px-3 pb-2">
            <Chart options={trendChartOptions} series={trendSeries} type="bar" height={160} />
          </div>
        )}

        {/* Type Filters */}
        <div className="d-flex gap-1 px-3 pb-2 flex-wrap">
          <button
            className={`btn btn-sm ${filterType === "all" ? "btn-primary" : "btn-outline-white"}`}
            onClick={() => setFilterType("all")}
          >
            All ({MOCK_INCIDENTS.length})
          </button>
          {(Object.keys(TYPE_META) as Incident["type"][]).map((type) => {
            const meta = TYPE_META[type];
            const count = MOCK_INCIDENTS.filter((i) => i.type === type).length;
            return (
              <button
                key={type}
                className={`btn btn-sm d-inline-flex align-items-center gap-1 ${filterType === type ? "btn-primary" : "btn-outline-white"}`}
                onClick={() => setFilterType(type)}
              >
                <i className={`ti ${meta.icon} fs-12`} />
                {meta.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Incidents List */}
        <div style={{ maxHeight: 380, overflowY: "auto" }}>
          {filtered.map((incident) => {
            const typeMeta = TYPE_META[incident.type];
            const stMeta = STATUS_META[incident.status];
            const sevMeta = SEVERITY_META[incident.severity];
            const isExpanded = expandedId === incident.id;

            return (
              <div
                key={incident.id}
                className={`px-3 py-2 border-bottom ${isExpanded ? "bg-light" : ""}`}
                style={{ cursor: "pointer" }}
                onClick={() => setExpandedId(isExpanded ? null : incident.id)}
              >
                <div className="d-flex align-items-start gap-2">
                  {/* Severity indicator */}
                  <div
                    className="d-flex align-items-center justify-content-center rounded flex-shrink-0 fw-bold fs-11"
                    style={{ width: 28, height: 28, backgroundColor: sevMeta.color, color: "#1F2937", marginTop: 2 }}
                    title={`NCC MERP Category ${incident.severity}: ${sevMeta.harm}`}
                  >
                    {incident.severity}
                  </div>
                  <div className="flex-fill min-w-0">
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <p className="mb-0 fw-medium fs-13 text-truncate">{incident.title}</p>
                      <span className={`badge fs-10 py-1 rounded fw-medium flex-shrink-0 ${stMeta.cls}`}>{stMeta.label}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 mt-1 flex-wrap">
                      <span className={`badge fs-10 py-0 rounded fw-medium ${typeMeta.cls}`}>{typeMeta.label}</span>
                      <small className="text-muted">{incident.unit} &middot; {incident.shift} shift</small>
                      <small className="text-muted">{incident.date.split(" ")[0]}</small>
                    </div>

                    {/* Regulatory Clock Warning */}
                    {incident.regulatoryClock && incident.regulatoryClock.hoursRemaining > 0 && (
                      <div className="mt-1">
                        <small className={`fw-medium ${incident.regulatoryClock.hoursRemaining <= 24 ? "text-danger" : "text-warning"}`}>
                          <i className="ti ti-clock-exclamation me-1" />
                          {incident.regulatoryClock.agency}: {incident.regulatoryClock.hoursRemaining}h remaining
                        </small>
                      </div>
                    )}
                  </div>
                  <i className={`ti ti-chevron-${isExpanded ? "up" : "down"} text-muted flex-shrink-0`} />
                </div>

                {isExpanded && (
                  <div className="mt-2 ms-5">
                    <div className="p-2 border rounded bg-white fs-12 mb-2">
                      <div className="row g-2">
                        <div className="col-6"><span className="text-muted">Reporter:</span> <span className="fw-medium">{incident.reporter}</span></div>
                        <div className="col-6"><span className="text-muted">Date/Time:</span> <span className="fw-medium">{incident.date}</span></div>
                        <div className="col-6"><span className="text-muted">Severity:</span> <span className="fw-medium">Category {incident.severity} — {sevMeta.harm}</span></div>
                        <div className="col-6"><span className="text-muted">Unit:</span> <span className="fw-medium">{incident.unit}</span></div>
                      </div>
                    </div>

                    {/* RCA Timeline */}
                    {incident.rcaDaysRemaining !== undefined && (
                      <div className="p-2 border rounded fs-12" style={{ backgroundColor: "#EFF6FF" }}>
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="fw-semibold">
                            <i className="ti ti-file-analytics me-1 text-primary" />Root Cause Analysis
                          </span>
                          <span className="fw-medium">{incident.rcaDaysRemaining} days remaining</span>
                        </div>
                        <div className="progress mt-1" style={{ height: 6 }}>
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: `${Math.max(0, 100 - (incident.rcaDaysRemaining / 45) * 100)}%` }}
                          />
                        </div>
                        <small className="text-muted">45-day deadline: {incident.rcaDeadline}</small>
                      </div>
                    )}

                    {/* Regulatory Clocks Detail */}
                    {incident.regulatoryClock && (
                      <div className="p-2 border rounded fs-12 mt-2" style={{ backgroundColor: incident.regulatoryClock.hoursRemaining <= 24 ? "#FEF2F2" : "#FFFBEB" }}>
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="fw-semibold">
                            <i className={`ti ti-clock me-1 ${incident.regulatoryClock.hoursRemaining <= 24 ? "text-danger" : "text-warning"}`} />
                            {incident.regulatoryClock.agency} Reporting
                          </span>
                          <span className={`fw-bold ${incident.regulatoryClock.hoursRemaining <= 24 ? "text-danger" : "text-warning"}`}>
                            {incident.regulatoryClock.hoursRemaining <= 0 ? "OVERDUE" : `${incident.regulatoryClock.hoursRemaining}h left`}
                          </span>
                        </div>
                        <small className="text-muted">Deadline: {incident.regulatoryClock.deadline}</small>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* NCC MERP Legend */}
        <div className="d-flex align-items-center gap-2 px-3 py-2 border-top flex-wrap">
          <small className="text-muted fw-semibold">NCC MERP:</small>
          {(["A", "B", "C", "D", "E", "F", "G", "H", "I"] as SeverityCategory[]).map((cat) => (
            <span
              key={cat}
              className="d-inline-flex align-items-center justify-content-center rounded fw-bold"
              style={{ width: 20, height: 20, fontSize: 10, backgroundColor: SEVERITY_META[cat].color, color: "#1F2937" }}
              title={`Category ${cat}: ${SEVERITY_META[cat].harm}`}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncidentReportingDashboard;
