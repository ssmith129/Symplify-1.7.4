import { useState } from "react";
import { Link } from "react-router";

interface Credential {
  id: string;
  provider: string;
  role: string;
  department: string;
  credentialType: string;
  issuer: string;
  expirationDate: string;
  daysRemaining: number;
  status: "active" | "expiring_soon" | "critical" | "expired" | "pending_verification";
  renewalAction: string;
  escalationLevel: number; // 0=provider, 1=dept head, 2=CMO, 3=compliance officer
  verificationStatus?: {
    npdb: "complete" | "pending" | "overdue";
    stateBoard: "complete" | "pending" | "overdue";
    education: "complete" | "pending" | "overdue";
    lastVerified: string;
    nextDue: string;
  };
  schedulingRestricted: boolean;
}

const MOCK_CREDENTIALS: Credential[] = [
  { id: "c1", provider: "Dr. Mark Rivera", role: "Attending", department: "Emergency", credentialType: "Medical License", issuer: "State Medical Board", expirationDate: "2026-03-05", daysRemaining: 5, status: "critical", renewalAction: "Renewal submitted — pending board review", escalationLevel: 2, schedulingRestricted: true, verificationStatus: { npdb: "complete", stateBoard: "pending", education: "complete", lastVerified: "2025-09-15", nextDue: "2026-03-15" } },
  { id: "c2", provider: "Dr. Lisa Park", role: "Resident", department: "Emergency", credentialType: "DEA Registration", issuer: "DEA", expirationDate: "2026-03-15", daysRemaining: 15, status: "expiring_soon", renewalAction: "Renewal application in progress", escalationLevel: 1, schedulingRestricted: false, verificationStatus: { npdb: "complete", stateBoard: "complete", education: "pending", lastVerified: "2025-10-01", nextDue: "2026-04-01" } },
  { id: "c3", provider: "Dr. Robert Kim", role: "Fellow", department: "Oncology", credentialType: "Board Certification", issuer: "ABIM", expirationDate: "2026-04-30", daysRemaining: 61, status: "expiring_soon", renewalAction: "CME credits 80% complete", escalationLevel: 0, schedulingRestricted: false, verificationStatus: { npdb: "complete", stateBoard: "complete", education: "complete", lastVerified: "2025-11-20", nextDue: "2026-05-20" } },
  { id: "c4", provider: "Dr. Amy Nguyen", role: "Attending", department: "Oncology", credentialType: "Malpractice Insurance", issuer: "MedPro Group", expirationDate: "2026-06-15", daysRemaining: 107, status: "active", renewalAction: "Auto-renewal confirmed", escalationLevel: 0, schedulingRestricted: false },
  { id: "c5", provider: "Dr. James Wilson", role: "Chief", department: "Cardiology", credentialType: "Medical License", issuer: "State Medical Board", expirationDate: "2026-08-20", daysRemaining: 173, status: "active", renewalAction: "No action needed", escalationLevel: 0, schedulingRestricted: false, verificationStatus: { npdb: "complete", stateBoard: "complete", education: "complete", lastVerified: "2026-02-20", nextDue: "2026-08-20" } },
  { id: "c6", provider: "Nurse T. Brooks", role: "RN", department: "Med-Surg", credentialType: "RN License", issuer: "State Board of Nursing", expirationDate: "2026-02-25", daysRemaining: -3, status: "expired", renewalAction: "URGENT — Renewal overdue", escalationLevel: 3, schedulingRestricted: true },
  { id: "c7", provider: "Dr. Priya Patel", role: "Attending", department: "Cardiology", credentialType: "ACLS Certification", issuer: "AHA", expirationDate: "2026-03-28", daysRemaining: 28, status: "expiring_soon", renewalAction: "Recertification course scheduled 3/20", escalationLevel: 0, schedulingRestricted: false },
];

const STATUS_CONFIG = {
  expired: { cls: "badge-soft-danger border border-danger text-danger", label: "Expired", priority: 0 },
  critical: { cls: "badge-soft-danger border border-danger text-danger", label: "Critical (<7 days)", priority: 1 },
  expiring_soon: { cls: "badge-soft-warning border border-warning text-warning", label: "Expiring Soon", priority: 2 },
  pending_verification: { cls: "badge-soft-primary border border-primary text-primary", label: "Pending Verification", priority: 3 },
  active: { cls: "badge-soft-success border border-success text-success", label: "Active", priority: 4 },
};

const ESCALATION_LABELS = ["Provider", "Department Head", "CMO", "Compliance Officer"];

const VERIFICATION_ICON: Record<string, { icon: string; color: string }> = {
  complete: { icon: "ti-circle-check", color: "text-success" },
  pending: { icon: "ti-clock", color: "text-warning" },
  overdue: { icon: "ti-alert-triangle", color: "text-danger" },
};

const CredentialTracker = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<"all" | Credential["status"]>("all");

  const sorted = [...MOCK_CREDENTIALS].sort(
    (a, b) => STATUS_CONFIG[a.status].priority - STATUS_CONFIG[b.status].priority
  );
  const filtered = sorted.filter((c) => filterStatus === "all" || c.status === filterStatus);

  const stats = {
    expired: MOCK_CREDENTIALS.filter((c) => c.status === "expired").length,
    critical: MOCK_CREDENTIALS.filter((c) => c.status === "critical").length,
    expiringSoon: MOCK_CREDENTIALS.filter((c) => c.status === "expiring_soon").length,
    restricted: MOCK_CREDENTIALS.filter((c) => c.schedulingRestricted).length,
  };

  return (
    <div className="card shadow-sm flex-fill w-100">
      <div className="card-header d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <h5 className="fw-bold mb-0">Credential & Licensure Tracker</h5>
          {(stats.expired + stats.critical) > 0 && (
            <span className="badge bg-danger rounded-pill">{stats.expired + stats.critical} urgent</span>
          )}
        </div>
        <button className="btn btn-sm btn-outline-white d-inline-flex align-items-center gap-1">
          <i className="ti ti-download fs-14" /> Export
        </button>
      </div>
      <div className="card-body p-0">
        {/* Summary */}
        <div className="d-flex gap-2 px-3 pt-3 pb-2">
          {[
            { label: "Expired", value: stats.expired, color: "danger" },
            { label: "Critical", value: stats.critical, color: "danger" },
            { label: "Expiring", value: stats.expiringSoon, color: "warning" },
            { label: "Restricted", value: stats.restricted, color: "info" },
          ].map((s) => (
            <div key={s.label} className="border rounded-2 p-2 text-center flex-fill">
              <h5 className={`fw-bold mb-0 text-${s.color}`}>{s.value}</h5>
              <small className="text-muted fs-11">{s.label}</small>
            </div>
          ))}
        </div>

        {/* Alert Timeline Legend */}
        <div className="d-flex align-items-center gap-3 px-3 pb-2">
          <small className="text-muted fw-semibold">Alert Timeline:</small>
          {["90d", "60d", "30d", "7d"].map((d, i) => (
            <span key={d} className={`badge fs-10 ${i === 3 ? "bg-danger text-white" : i === 2 ? "bg-warning text-dark" : "bg-light text-dark border"}`}>
              {d}
            </span>
          ))}
        </div>

        {/* Filter */}
        <div className="d-flex gap-1 px-3 pb-2 flex-wrap">
          {(["all", "expired", "critical", "expiring_soon", "active"] as const).map((s) => (
            <button
              key={s}
              className={`btn btn-sm ${filterStatus === s ? "btn-primary" : "btn-outline-white"}`}
              onClick={() => setFilterStatus(s)}
            >
              {s === "all" ? "All" : s === "expiring_soon" ? "Expiring" : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

        {/* Credentials List */}
        <div style={{ maxHeight: 380, overflowY: "auto" }}>
          {filtered.map((cred) => {
            const stCfg = STATUS_CONFIG[cred.status];
            const isExpanded = expandedId === cred.id;
            return (
              <div
                key={cred.id}
                className={`px-3 py-2 border-bottom ${isExpanded ? "bg-light" : ""}`}
                style={{ cursor: "pointer" }}
                onClick={() => setExpandedId(isExpanded ? null : cred.id)}
              >
                <div className="d-flex align-items-start gap-2">
                  <div className="flex-fill min-w-0">
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <div className="d-flex align-items-center gap-2 min-w-0">
                        <span className="fw-medium fs-13 text-truncate">{cred.provider}</span>
                        {cred.schedulingRestricted && (
                          <span className="badge bg-danger-transparent text-danger fs-10 flex-shrink-0">
                            <i className="ti ti-lock me-1" />Restricted
                          </span>
                        )}
                      </div>
                      <span className={`badge fs-10 py-1 rounded fw-medium flex-shrink-0 ${stCfg.cls}`}>
                        {cred.daysRemaining < 0 ? `Expired ${Math.abs(cred.daysRemaining)}d ago` : cred.daysRemaining <= 7 ? `${cred.daysRemaining}d left` : stCfg.label}
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-2 mt-1">
                      <small className="text-muted">{cred.credentialType}</small>
                      <small className="text-muted">&middot; {cred.department}</small>
                      <small className="text-muted">&middot; {cred.issuer}</small>
                    </div>
                    {cred.escalationLevel > 0 && (
                      <div className="mt-1">
                        <small className="text-danger fw-medium fs-11">
                          <i className="ti ti-arrow-up-right me-1" />
                          Escalated to: {ESCALATION_LABELS[cred.escalationLevel]}
                        </small>
                      </div>
                    )}
                  </div>
                  <i className={`ti ti-chevron-${isExpanded ? "up" : "down"} text-muted flex-shrink-0`} />
                </div>

                {isExpanded && (
                  <div className="mt-2 ms-0">
                    <div className="p-2 border rounded bg-white fs-12 mb-2">
                      <div className="row g-2">
                        <div className="col-6"><span className="text-muted">Expiration:</span> <span className="fw-medium">{cred.expirationDate}</span></div>
                        <div className="col-6"><span className="text-muted">Role:</span> <span className="fw-medium">{cred.role}</span></div>
                        <div className="col-12"><span className="text-muted">Renewal Status:</span> <span className="fw-medium">{cred.renewalAction}</span></div>
                      </div>
                    </div>

                    {cred.verificationStatus && (
                      <div className="p-2 border rounded fs-12" style={{ backgroundColor: "#F8FAFC" }}>
                        <h6 className="fw-semibold fs-12 mb-2">
                          <i className="ti ti-shield-check me-1 text-primary" />Primary Source Verification
                        </h6>
                        <div className="d-flex gap-3">
                          {[
                            { label: "NPDB", status: cred.verificationStatus.npdb },
                            { label: "State Board", status: cred.verificationStatus.stateBoard },
                            { label: "Education", status: cred.verificationStatus.education },
                          ].map((v) => {
                            const vi = VERIFICATION_ICON[v.status];
                            return (
                              <div key={v.label} className="d-flex align-items-center gap-1">
                                <i className={`ti ${vi.icon} ${vi.color} fs-14`} />
                                <small>{v.label}</small>
                              </div>
                            );
                          })}
                        </div>
                        <div className="mt-1 text-muted">
                          <small>Last verified: {cred.verificationStatus.lastVerified} &middot; Next due: {cred.verificationStatus.nextDue}</small>
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

export default CredentialTracker;
