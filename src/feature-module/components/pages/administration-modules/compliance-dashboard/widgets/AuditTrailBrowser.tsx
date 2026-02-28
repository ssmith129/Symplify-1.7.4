import { useState } from "react";
import { Link } from "react-router";

interface AuditEntry {
  id: string;
  timestamp: string;
  user: string;
  role: string;
  action: "ai_recommendation" | "manual_override" | "approval" | "access" | "config_change" | "export";
  description: string;
  resource: string;
  outcome: "accepted" | "rejected" | "pending" | "completed" | "flagged";
  ipAddress: string;
}

const ACTION_META: Record<AuditEntry["action"], { icon: string; color: string; label: string }> = {
  ai_recommendation: { icon: "ti-sparkles", color: "warning", label: "AI Recommendation" },
  manual_override: { icon: "ti-edit", color: "danger", label: "Manual Override" },
  approval: { icon: "ti-check", color: "success", label: "Approval" },
  access: { icon: "ti-eye", color: "primary", label: "Access" },
  config_change: { icon: "ti-settings", color: "info", label: "Config Change" },
  export: { icon: "ti-download", color: "secondary", label: "Export" },
};

const OUTCOME_BADGE: Record<AuditEntry["outcome"], string> = {
  accepted: "badge-soft-success border border-success text-success",
  rejected: "badge-soft-danger border border-danger text-danger",
  pending: "badge-soft-warning border border-warning text-warning",
  completed: "badge-soft-primary border border-primary text-primary",
  flagged: "badge-soft-danger border border-danger text-danger",
};

const MOCK_ENTRIES: AuditEntry[] = [
  { id: "a1", timestamp: "2026-02-28 14:32:05", user: "Dr. Sarah Chen", role: "Attending", action: "ai_recommendation", description: "AI suggested medication adjustment for patient #4892", resource: "Patient #4892", outcome: "accepted", ipAddress: "10.0.1.45" },
  { id: "a2", timestamp: "2026-02-28 14:15:22", user: "Admin J. Wilson", role: "Admin", action: "manual_override", description: "Override AI scheduling recommendation — moved surgery from 3pm to 9am", resource: "Schedule #1204", outcome: "completed", ipAddress: "10.0.1.12" },
  { id: "a3", timestamp: "2026-02-28 13:58:11", user: "Dr. Mark Rivera", role: "Attending", action: "access", description: "Accessed PHI for patient outside care assignment", resource: "Patient #2017", outcome: "flagged", ipAddress: "10.0.2.88" },
  { id: "a4", timestamp: "2026-02-28 13:42:00", user: "Nurse L. Park", role: "RN", action: "ai_recommendation", description: "AI flagged abnormal vitals trend — escalation recommended", resource: "Patient #3301", outcome: "accepted", ipAddress: "10.0.3.22" },
  { id: "a5", timestamp: "2026-02-28 12:30:44", user: "Admin P. Patel", role: "Compliance", action: "approval", description: "Approved credential renewal for Dr. Kim", resource: "Credential #CR-882", outcome: "completed", ipAddress: "10.0.1.10" },
  { id: "a6", timestamp: "2026-02-28 11:22:18", user: "Admin J. Wilson", role: "Admin", action: "config_change", description: "Updated SLA threshold from 90% to 92% for Emergency dept", resource: "SLA Config", outcome: "completed", ipAddress: "10.0.1.12" },
  { id: "a7", timestamp: "2026-02-28 10:55:30", user: "Dr. Priya Patel", role: "Attending", action: "manual_override", description: "Rejected AI-suggested discharge plan — extended stay by 48hrs", resource: "Patient #5102", outcome: "rejected", ipAddress: "10.0.2.55" },
  { id: "a8", timestamp: "2026-02-28 10:12:09", user: "Admin P. Patel", role: "Compliance", action: "export", description: "Exported monthly HIPAA compliance report", resource: "Report #RPT-442", outcome: "completed", ipAddress: "10.0.1.10" },
  { id: "a9", timestamp: "2026-02-28 09:45:00", user: "Dr. Amy Nguyen", role: "Attending", action: "ai_recommendation", description: "AI recommended additional lab panel based on symptom pattern", resource: "Patient #6210", outcome: "pending", ipAddress: "10.0.2.71" },
  { id: "a10", timestamp: "2026-02-28 08:30:15", user: "Nurse T. Brooks", role: "RN", action: "access", description: "Viewed medication administration record", resource: "Patient #4892", outcome: "completed", ipAddress: "10.0.3.44" },
];

type FilterAction = AuditEntry["action"] | "all";

const AuditTrailBrowser = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterAction, setFilterAction] = useState<FilterAction>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = MOCK_ENTRIES.filter((e) => {
    const matchesSearch =
      !searchQuery ||
      e.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.resource.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAction = filterAction === "all" || e.action === filterAction;
    return matchesSearch && matchesAction;
  });

  const actionCounts = MOCK_ENTRIES.reduce(
    (acc, e) => {
      acc[e.action] = (acc[e.action] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <div className="card shadow-sm flex-fill w-100">
      <div className="card-header d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <h5 className="fw-bold mb-0">Audit Trail Browser</h5>
          <span className="badge bg-light text-dark border fs-10">{MOCK_ENTRIES.length} entries</span>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-sm btn-outline-white d-inline-flex align-items-center gap-1">
            <i className="ti ti-download fs-14" /> Export
          </button>
          <div className="dropdown">
            <Link
              to="#"
              className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              Retention: 90 Days <i className="ti ti-chevron-down ms-1" />
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="#">30 Days</Link></li>
              <li><Link className="dropdown-item" to="#">90 Days</Link></li>
              <li><Link className="dropdown-item" to="#">1 Year</Link></li>
              <li><Link className="dropdown-item" to="#">All Time</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        {/* Search & Filters */}
        <div className="px-3 pt-3 pb-2">
          <div className="input-group input-group-sm mb-2">
            <span className="input-group-text border-end-0 bg-white">
              <i className="ti ti-search text-muted" />
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search user, action, or resource..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="btn btn-outline-secondary" onClick={() => setSearchQuery("")}>
                <i className="ti ti-x" />
              </button>
            )}
          </div>
          <div className="d-flex gap-1 flex-wrap">
            <button
              className={`btn btn-sm ${filterAction === "all" ? "btn-primary" : "btn-outline-white"}`}
              onClick={() => setFilterAction("all")}
            >
              All
            </button>
            {Object.entries(ACTION_META).map(([key, meta]) => (
              <button
                key={key}
                className={`btn btn-sm d-inline-flex align-items-center gap-1 ${filterAction === key ? `btn-${meta.color}` : "btn-outline-white"}`}
                onClick={() => setFilterAction(key as FilterAction)}
              >
                <i className={`ti ${meta.icon} fs-12`} />
                {meta.label}
                {actionCounts[key] && (
                  <span className="badge bg-white text-dark rounded-pill fs-10 ms-1">
                    {actionCounts[key]}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div style={{ maxHeight: 400, overflowY: "auto" }}>
          {filtered.length === 0 ? (
            <div className="text-center text-muted py-4">
              <i className="ti ti-search-off fs-24 d-block mb-2" />
              No entries match your filters
            </div>
          ) : (
            filtered.map((entry) => {
              const meta = ACTION_META[entry.action];
              const isExpanded = expandedId === entry.id;
              return (
                <div
                  key={entry.id}
                  className={`px-3 py-2 border-bottom ${isExpanded ? "bg-light" : ""}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setExpandedId(isExpanded ? null : entry.id)}
                >
                  <div className="d-flex align-items-start gap-2">
                    <div
                      className={`d-flex align-items-center justify-content-center rounded flex-shrink-0 bg-${meta.color}-transparent`}
                      style={{ width: 32, height: 32, marginTop: 2 }}
                    >
                      <i className={`ti ${meta.icon} text-${meta.color} fs-14`} />
                    </div>
                    <div className="flex-fill min-w-0">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <p className="mb-0 fw-medium fs-13 text-truncate">{entry.description}</p>
                        <span className={`badge fs-10 py-1 rounded fw-medium flex-shrink-0 ${OUTCOME_BADGE[entry.outcome]}`}>
                          {entry.outcome}
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 mt-1">
                        <small className="text-muted">
                          <i className="ti ti-user fs-11 me-1" />{entry.user}
                        </small>
                        <small className="text-muted">
                          <i className="ti ti-clock fs-11 me-1" />{entry.timestamp.split(" ")[1]}
                        </small>
                        <small className="text-muted">{entry.resource}</small>
                      </div>
                    </div>
                    <i className={`ti ti-chevron-${isExpanded ? "up" : "down"} text-muted flex-shrink-0`} />
                  </div>
                  {isExpanded && (
                    <div className="mt-2 ms-5 p-2 border rounded bg-white fs-12">
                      <div className="row g-2">
                        <div className="col-6">
                          <span className="text-muted">User:</span>{" "}
                          <span className="fw-medium">{entry.user}</span> ({entry.role})
                        </div>
                        <div className="col-6">
                          <span className="text-muted">IP:</span>{" "}
                          <span className="fw-medium">{entry.ipAddress}</span>
                        </div>
                        <div className="col-6">
                          <span className="text-muted">Action Type:</span>{" "}
                          <span className={`badge bg-${meta.color}-transparent text-${meta.color} fs-10`}>{meta.label}</span>
                        </div>
                        <div className="col-6">
                          <span className="text-muted">Timestamp:</span>{" "}
                          <span className="fw-medium">{entry.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default AuditTrailBrowser;
