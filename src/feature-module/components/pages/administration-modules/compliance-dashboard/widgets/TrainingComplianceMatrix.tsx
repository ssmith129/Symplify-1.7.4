import { useState } from "react";
import { Link } from "react-router";

interface TrainingRequirement {
  id: string;
  name: string;
  regulation: string;
  recurrence: string;
  recurrenceDays: number;
}

interface DepartmentCompliance {
  department: string;
  totalStaff: number;
  trainings: Record<string, { compliant: number; approaching: number; overdue: number }>;
}

interface StaffTraining {
  staffName: string;
  role: string;
  department: string;
  trainings: Record<string, "compliant" | "approaching" | "overdue" | "not_started">;
  lastIncidentRetrain?: string;
}

const REQUIREMENTS: TrainingRequirement[] = [
  { id: "bbp", name: "Bloodborne Pathogens", regulation: "OSHA 29 CFR 1910.1030", recurrence: "Annual", recurrenceDays: 365 },
  { id: "hipaa", name: "HIPAA Privacy Refresher", regulation: "45 CFR 164", recurrence: "Annual", recurrenceDays: 365 },
  { id: "restraint", name: "Restraint & Seclusion", regulation: "CMS CoP §482.13", recurrence: "Annual", recurrenceDays: 365 },
  { id: "abuse", name: "Abuse Reporting", regulation: "State Mandate", recurrence: "Biennial", recurrenceDays: 730 },
  { id: "fire", name: "Fire Safety / Life Safety", regulation: "TJC EC.02.03.03", recurrence: "Annual", recurrenceDays: 365 },
  { id: "infection", name: "Infection Control", regulation: "CMS CoP §482.42", recurrence: "Annual", recurrenceDays: 365 },
];

const DEPT_DATA: DepartmentCompliance[] = [
  {
    department: "Emergency",
    totalStaff: 42,
    trainings: {
      bbp: { compliant: 38, approaching: 3, overdue: 1 },
      hipaa: { compliant: 40, approaching: 2, overdue: 0 },
      restraint: { compliant: 35, approaching: 4, overdue: 3 },
      abuse: { compliant: 39, approaching: 2, overdue: 1 },
      fire: { compliant: 41, approaching: 1, overdue: 0 },
      infection: { compliant: 37, approaching: 3, overdue: 2 },
    },
  },
  {
    department: "Cardiology",
    totalStaff: 28,
    trainings: {
      bbp: { compliant: 27, approaching: 1, overdue: 0 },
      hipaa: { compliant: 28, approaching: 0, overdue: 0 },
      restraint: { compliant: 25, approaching: 2, overdue: 1 },
      abuse: { compliant: 26, approaching: 1, overdue: 1 },
      fire: { compliant: 28, approaching: 0, overdue: 0 },
      infection: { compliant: 26, approaching: 2, overdue: 0 },
    },
  },
  {
    department: "Oncology",
    totalStaff: 22,
    trainings: {
      bbp: { compliant: 20, approaching: 1, overdue: 1 },
      hipaa: { compliant: 21, approaching: 1, overdue: 0 },
      restraint: { compliant: 18, approaching: 2, overdue: 2 },
      abuse: { compliant: 22, approaching: 0, overdue: 0 },
      fire: { compliant: 22, approaching: 0, overdue: 0 },
      infection: { compliant: 19, approaching: 2, overdue: 1 },
    },
  },
  {
    department: "Med-Surg",
    totalStaff: 55,
    trainings: {
      bbp: { compliant: 48, approaching: 4, overdue: 3 },
      hipaa: { compliant: 50, approaching: 3, overdue: 2 },
      restraint: { compliant: 42, approaching: 6, overdue: 7 },
      abuse: { compliant: 51, approaching: 2, overdue: 2 },
      fire: { compliant: 53, approaching: 1, overdue: 1 },
      infection: { compliant: 45, approaching: 5, overdue: 5 },
    },
  },
  {
    department: "Pediatrics",
    totalStaff: 18,
    trainings: {
      bbp: { compliant: 18, approaching: 0, overdue: 0 },
      hipaa: { compliant: 17, approaching: 1, overdue: 0 },
      restraint: { compliant: 16, approaching: 1, overdue: 1 },
      abuse: { compliant: 18, approaching: 0, overdue: 0 },
      fire: { compliant: 18, approaching: 0, overdue: 0 },
      infection: { compliant: 17, approaching: 1, overdue: 0 },
    },
  },
];

const INCIDENT_TRIGGERS = [
  { staff: "M. Thompson", event: "Needle stick incident", triggered: "Bloodborne Pathogens Refresher", date: "2026-02-26", status: "assigned" },
  { staff: "K. Lawson", event: "PHI misdisclosure", triggered: "HIPAA Privacy Refresher", date: "2026-02-24", status: "in_progress" },
];

function getCellColor(compliant: number, total: number): string {
  const pct = (compliant / total) * 100;
  if (pct >= 95) return "#DCFCE7";
  if (pct >= 85) return "#FEF9C3";
  if (pct >= 70) return "#FED7AA";
  return "#FECACA";
}

function getCellTextColor(compliant: number, total: number): string {
  const pct = (compliant / total) * 100;
  if (pct >= 95) return "#166534";
  if (pct >= 85) return "#854D0E";
  if (pct >= 70) return "#9A3412";
  return "#991B1B";
}

const TrainingComplianceMatrix = () => {
  const [showIncidents, setShowIncidents] = useState(false);

  // Calculate survey-readiness score
  const totalStaff = DEPT_DATA.reduce((s, d) => s + d.totalStaff, 0);
  const totalTrainings = totalStaff * REQUIREMENTS.length;
  const totalCompliant = DEPT_DATA.reduce(
    (s, d) => s + REQUIREMENTS.reduce((rs, r) => rs + (d.trainings[r.id]?.compliant || 0), 0),
    0
  );
  const totalOverdue = DEPT_DATA.reduce(
    (s, d) => s + REQUIREMENTS.reduce((rs, r) => rs + (d.trainings[r.id]?.overdue || 0), 0),
    0
  );
  const surveyReadiness = Math.round((totalCompliant / totalTrainings) * 100);

  return (
    <div className="card shadow-sm flex-fill w-100">
      <div className="card-header d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <h5 className="fw-bold mb-0">Training Compliance Matrix</h5>
          {totalOverdue > 0 && (
            <span className="badge bg-danger rounded-pill">{totalOverdue} overdue</span>
          )}
        </div>
        <div className="d-flex gap-2">
          <button
            className={`btn btn-sm ${showIncidents ? "btn-warning" : "btn-outline-white"} d-inline-flex align-items-center gap-1`}
            onClick={() => setShowIncidents(!showIncidents)}
          >
            <i className="ti ti-alert-triangle fs-14" /> Incident Triggers
            {INCIDENT_TRIGGERS.length > 0 && (
              <span className="badge bg-danger rounded-pill ms-1">{INCIDENT_TRIGGERS.length}</span>
            )}
          </button>
          <Link to="#" className="btn btn-sm btn-outline-white d-inline-flex align-items-center gap-1">
            <i className="ti ti-download fs-14" /> Export
          </Link>
        </div>
      </div>
      <div className="card-body p-0">
        {/* Survey Readiness Score */}
        <div className="d-flex gap-3 px-3 pt-3 pb-2">
          <div className="border rounded-2 p-2 px-3 text-center flex-fill" style={{ backgroundColor: surveyReadiness >= 90 ? "#F0FDF4" : surveyReadiness >= 80 ? "#FFFBEB" : "#FEF2F2" }}>
            <h4 className={`fw-bold mb-0 ${surveyReadiness >= 90 ? "text-success" : surveyReadiness >= 80 ? "text-warning" : "text-danger"}`}>
              {surveyReadiness}%
            </h4>
            <small className="text-muted fs-11">Survey Readiness</small>
          </div>
          <div className="border rounded-2 p-2 px-3 text-center flex-fill">
            <h4 className="fw-bold mb-0">{totalStaff}</h4>
            <small className="text-muted fs-11">Total Staff</small>
          </div>
          <div className="border rounded-2 p-2 px-3 text-center flex-fill">
            <h4 className="fw-bold mb-0 text-success">{totalCompliant}</h4>
            <small className="text-muted fs-11">Compliant</small>
          </div>
          <div className="border rounded-2 p-2 px-3 text-center flex-fill">
            <h4 className="fw-bold mb-0 text-danger">{totalOverdue}</h4>
            <small className="text-muted fs-11">Overdue</small>
          </div>
        </div>

        {/* Incident-Based Retraining */}
        {showIncidents && (
          <div className="mx-3 mb-2 p-2 border rounded-2" style={{ backgroundColor: "#FFFBEB" }}>
            <h6 className="fw-semibold fs-12 mb-2">
              <i className="ti ti-alert-triangle me-1 text-warning" />Incident-Triggered Retraining
            </h6>
            {INCIDENT_TRIGGERS.map((t, i) => (
              <div key={i} className={`d-flex align-items-center justify-content-between py-1 ${i < INCIDENT_TRIGGERS.length - 1 ? "border-bottom" : ""}`}>
                <div>
                  <small className="fw-medium">{t.staff}</small>
                  <small className="text-muted"> — {t.event}</small>
                  <br />
                  <small className="text-muted">Assigned: {t.triggered} ({t.date})</small>
                </div>
                <span className={`badge fs-10 ${t.status === "assigned" ? "badge-soft-warning border border-warning text-warning" : "badge-soft-primary border border-primary text-primary"}`}>
                  {t.status === "assigned" ? "Assigned" : "In Progress"}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Compliance Grid */}
        <div className="table-responsive" style={{ maxHeight: 340, overflowY: "auto" }}>
          <table className="table table-sm border mb-0" style={{ fontSize: "12px" }}>
            <thead className="thead-light" style={{ position: "sticky", top: 0, zIndex: 1 }}>
              <tr>
                <th style={{ minWidth: 120 }}>Department</th>
                <th className="text-center">Staff</th>
                {REQUIREMENTS.map((r) => (
                  <th key={r.id} className="text-center" style={{ minWidth: 80 }} title={`${r.regulation} — ${r.recurrence}`}>
                    <span className="d-block text-truncate" style={{ maxWidth: 80 }}>{r.name.split(" ")[0]}</span>
                    <small className="text-muted fw-normal">{r.recurrence}</small>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DEPT_DATA.map((dept) => (
                <tr key={dept.department}>
                  <td className="fw-medium">{dept.department}</td>
                  <td className="text-center">{dept.totalStaff}</td>
                  {REQUIREMENTS.map((r) => {
                    const data = dept.trainings[r.id];
                    if (!data) return <td key={r.id} className="text-center text-muted">—</td>;
                    const pct = Math.round((data.compliant / dept.totalStaff) * 100);
                    return (
                      <td
                        key={r.id}
                        className="text-center fw-semibold"
                        style={{
                          backgroundColor: getCellColor(data.compliant, dept.totalStaff),
                          color: getCellTextColor(data.compliant, dept.totalStaff),
                        }}
                      >
                        {pct}%
                        {data.overdue > 0 && (
                          <span className="d-block fs-10 text-danger fw-normal">{data.overdue} overdue</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="d-flex align-items-center gap-3 px-3 py-2 border-top">
          <small className="text-muted fw-semibold">Legend:</small>
          {[
            { color: "#DCFCE7", label: "≥95%" },
            { color: "#FEF9C3", label: "85–94%" },
            { color: "#FED7AA", label: "70–84%" },
            { color: "#FECACA", label: "<70%" },
          ].map((l) => (
            <div key={l.label} className="d-flex align-items-center gap-1">
              <span className="d-inline-block rounded" style={{ width: 12, height: 12, backgroundColor: l.color, border: "1px solid #e5e7eb" }} />
              <small className="text-muted">{l.label}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingComplianceMatrix;
