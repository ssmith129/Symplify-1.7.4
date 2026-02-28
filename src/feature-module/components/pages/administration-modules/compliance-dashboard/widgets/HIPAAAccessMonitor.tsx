import { useState } from "react";
import { Link } from "react-router";

interface AccessEvent {
  id: string;
  timestamp: string;
  user: string;
  role: string;
  department: string;
  patient: string;
  dataType: string;
  riskLevel: "critical" | "high" | "medium" | "low";
  reason: string;
  status: "under_review" | "cleared" | "escalated" | "breach_confirmed";
  breakTheGlass: boolean;
  reviewDeadline?: string;
}

interface BreachRiskScore {
  eventId: string;
  score: number;
  factors: { label: string; weight: number }[];
  recordCount: number;
  sensitivityTier: string;
  exposureDuration: string;
}

const RISK_META = {
  critical: { cls: "badge-soft-danger border border-danger text-danger", icon: "ti-alert-octagon", bg: "#FEF2F2" },
  high: { cls: "badge-soft-warning border border-warning text-warning", icon: "ti-alert-triangle", bg: "#FFF7ED" },
  medium: { cls: "badge-soft-primary border border-primary text-primary", icon: "ti-info-circle", bg: "#EFF6FF" },
  low: { cls: "badge-soft-success border border-success text-success", icon: "ti-circle-check", bg: "#F0FDF4" },
};

const STATUS_META: Record<AccessEvent["status"], { label: string; cls: string }> = {
  under_review: { label: "Under Review", cls: "badge-soft-warning border border-warning text-warning" },
  cleared: { label: "Cleared", cls: "badge-soft-success border border-success text-success" },
  escalated: { label: "Escalated", cls: "badge-soft-danger border border-danger text-danger" },
  breach_confirmed: { label: "Breach Confirmed", cls: "badge-soft-danger border border-danger text-danger" },
};

const MOCK_EVENTS: AccessEvent[] = [
  { id: "h1", timestamp: "2026-02-28 14:18:33", user: "M. Thompson", role: "Billing Clerk", department: "Billing", patient: "Patient #2017", dataType: "Psychiatric Notes", riskLevel: "critical", reason: "Accessed psychiatric records outside care assignment", status: "escalated", breakTheGlass: false, reviewDeadline: "2026-03-01 14:18:33" },
  { id: "h2", timestamp: "2026-02-28 13:05:12", user: "J. Garcia", role: "RN", department: "Emergency", patient: "Staff Member", dataType: "Medical Record", riskLevel: "high", reason: "Accessed coworker medical record", status: "under_review", breakTheGlass: false, reviewDeadline: "2026-03-01 13:05:12" },
  { id: "h3", timestamp: "2026-02-28 11:42:00", user: "Dr. R. Kim", role: "Attending", department: "Oncology", patient: "Patient #8841", dataType: "Full Chart", riskLevel: "medium", reason: "Break-the-Glass emergency access — justification pending", status: "under_review", breakTheGlass: true, reviewDeadline: "2026-03-01 11:42:00" },
  { id: "h4", timestamp: "2026-02-28 09:30:15", user: "K. Lawson", role: "HIM Analyst", department: "HIM", patient: "Patient #5520", dataType: "Discharge Summary", riskLevel: "low", reason: "Bulk record export for quality review", status: "cleared", breakTheGlass: false },
  { id: "h5", timestamp: "2026-02-27 22:15:08", user: "L. Nguyen", role: "Registration", department: "Front Desk", patient: "VIP Patient", dataType: "Demographics", riskLevel: "high", reason: "Accessed high-profile patient record outside business hours", status: "under_review", breakTheGlass: false, reviewDeadline: "2026-02-28 22:15:08" },
  { id: "h6", timestamp: "2026-02-27 16:44:30", user: "Dr. S. Chen", role: "Attending", department: "Emergency", patient: "Patient #3301", dataType: "Lab Results", riskLevel: "low", reason: "Routine care access — within assignment", status: "cleared", breakTheGlass: false },
];

const BREACH_SCORES: Record<string, BreachRiskScore> = {
  h1: { eventId: "h1", score: 82, factors: [{ label: "Sensitive data tier", weight: 35 }, { label: "Outside care role", weight: 30 }, { label: "No justification", weight: 17 }], recordCount: 1, sensitivityTier: "Tier 1 — Psychotherapy", exposureDuration: "12 min" },
  h2: { eventId: "h2", score: 68, factors: [{ label: "Coworker record", weight: 30 }, { label: "No treatment relationship", weight: 25 }, { label: "Single record", weight: 13 }], recordCount: 1, sensitivityTier: "Tier 2 — General Medical", exposureDuration: "4 min" },
  h5: { eventId: "h5", score: 71, factors: [{ label: "VIP/celebrity flag", weight: 28 }, { label: "Off-hours access", weight: 22 }, { label: "Non-clinical role", weight: 21 }], recordCount: 1, sensitivityTier: "Tier 2 — Demographics", exposureDuration: "2 min" },
};

const HIPAAAccessMonitor = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterRisk, setFilterRisk] = useState<"all" | AccessEvent["riskLevel"]>("all");

  const filtered = MOCK_EVENTS.filter((e) => filterRisk === "all" || e.riskLevel === filterRisk);

  const stats = {
    critical: MOCK_EVENTS.filter((e) => e.riskLevel === "critical").length,
    high: MOCK_EVENTS.filter((e) => e.riskLevel === "high").length,
    underReview: MOCK_EVENTS.filter((e) => e.status === "under_review").length,
    btg: MOCK_EVENTS.filter((e) => e.breakTheGlass).length,
  };

  return (
    <div className="card shadow-sm flex-fill w-100">
      <div className="card-header d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <h5 className="fw-bold mb-0">HIPAA Access Monitor</h5>
          {stats.critical > 0 && (
            <span className="badge bg-danger rounded-pill">{stats.critical} critical</span>
          )}
        </div>
        <div className="dropdown">
          <Link to="#" className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center" data-bs-toggle="dropdown">
            Last 48 Hours <i className="ti ti-chevron-down ms-1" />
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Last 24 Hours</Link></li>
            <li><Link className="dropdown-item" to="#">Last 48 Hours</Link></li>
            <li><Link className="dropdown-item" to="#">Last 7 Days</Link></li>
            <li><Link className="dropdown-item" to="#">Last 30 Days</Link></li>
          </ul>
        </div>
      </div>
      <div className="card-body p-0">
        {/* Summary Stats */}
        <div className="d-flex gap-2 px-3 pt-3 pb-2">
          {[
            { label: "Critical", value: stats.critical, color: "danger" },
            { label: "High Risk", value: stats.high, color: "warning" },
            { label: "Pending Review", value: stats.underReview, color: "primary" },
            { label: "Break-the-Glass", value: stats.btg, color: "info" },
          ].map((s) => (
            <div key={s.label} className="border rounded-2 p-2 text-center flex-fill">
              <h5 className={`fw-bold mb-0 text-${s.color}`}>{s.value}</h5>
              <small className="text-muted fs-11">{s.label}</small>
            </div>
          ))}
        </div>

        {/* Risk Filters */}
        <div className="d-flex gap-1 px-3 pb-2">
          {(["all", "critical", "high", "medium", "low"] as const).map((level) => (
            <button
              key={level}
              className={`btn btn-sm ${filterRisk === level ? "btn-primary" : "btn-outline-white"}`}
              onClick={() => setFilterRisk(level)}
            >
              {level === "all" ? "All" : level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>

        {/* Events List */}
        <div style={{ maxHeight: 400, overflowY: "auto" }}>
          {filtered.map((event) => {
            const risk = RISK_META[event.riskLevel];
            const st = STATUS_META[event.status];
            const isExpanded = expandedId === event.id;
            const breachScore = BREACH_SCORES[event.id];

            return (
              <div
                key={event.id}
                className={`px-3 py-2 border-bottom ${isExpanded ? "bg-light" : ""}`}
                style={{ cursor: "pointer" }}
                onClick={() => setExpandedId(isExpanded ? null : event.id)}
              >
                <div className="d-flex align-items-start gap-2">
                  <div className="d-flex align-items-center justify-content-center rounded flex-shrink-0" style={{ width: 32, height: 32, backgroundColor: risk.bg, marginTop: 2 }}>
                    <i className={`ti ${risk.icon} fs-14`} style={{ color: event.riskLevel === "critical" ? "#DC2626" : event.riskLevel === "high" ? "#EA580C" : event.riskLevel === "medium" ? "#2563EB" : "#16A34A" }} />
                  </div>
                  <div className="flex-fill min-w-0">
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <p className="mb-0 fw-medium fs-13 text-truncate">{event.reason}</p>
                      <span className={`badge fs-10 py-1 rounded fw-medium flex-shrink-0 ${st.cls}`}>{st.label}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 mt-1 flex-wrap">
                      <small className="text-muted"><i className="ti ti-user fs-11 me-1" />{event.user} ({event.role})</small>
                      <small className="text-muted"><i className="ti ti-clock fs-11 me-1" />{event.timestamp.split(" ")[1]}</small>
                      {event.breakTheGlass && (
                        <span className="badge bg-info-transparent text-info fs-10">
                          <i className="ti ti-shield-exclamation me-1" />BTG
                        </span>
                      )}
                    </div>
                  </div>
                  <i className={`ti ti-chevron-${isExpanded ? "up" : "down"} text-muted flex-shrink-0`} />
                </div>

                {isExpanded && (
                  <div className="mt-2 ms-5">
                    <div className="p-2 border rounded bg-white fs-12 mb-2">
                      <div className="row g-2">
                        <div className="col-6"><span className="text-muted">Patient:</span> <span className="fw-medium">{event.patient}</span></div>
                        <div className="col-6"><span className="text-muted">Data Type:</span> <span className="fw-medium">{event.dataType}</span></div>
                        <div className="col-6"><span className="text-muted">Department:</span> <span className="fw-medium">{event.department}</span></div>
                        {event.reviewDeadline && (
                          <div className="col-6"><span className="text-muted">Review By:</span> <span className="fw-medium text-danger">{event.reviewDeadline.split(" ")[0]}</span></div>
                        )}
                      </div>
                    </div>

                    {breachScore && (
                      <div className="p-2 border rounded fs-12" style={{ backgroundColor: "#FEF2F2" }}>
                        <div className="d-flex align-items-center justify-content-between mb-1">
                          <span className="fw-semibold">
                            <i className="ti ti-shield-lock me-1 text-danger" />Breach Risk Score
                          </span>
                          <span className={`fw-bold fs-14 ${breachScore.score >= 70 ? "text-danger" : "text-warning"}`}>
                            {breachScore.score}/100
                          </span>
                        </div>
                        <div className="progress mb-2" style={{ height: 6 }}>
                          <div
                            className={`progress-bar ${breachScore.score >= 70 ? "bg-danger" : "bg-warning"}`}
                            style={{ width: `${breachScore.score}%` }}
                          />
                        </div>
                        <div className="d-flex gap-3 text-muted">
                          <small>Records: {breachScore.recordCount}</small>
                          <small>Tier: {breachScore.sensitivityTier}</small>
                          <small>Exposure: {breachScore.exposureDuration}</small>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HIPAAAccessMonitor;
