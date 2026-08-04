import React, { useState } from 'react';

import PageHeader from '../../../../../core/common/page-header/PageHeader';

/* ────────────────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────────────────── */

interface Patient {
  id: string; name: string; initials: string; age: number; unit: string;
  room: string; acuity: 'critical'|'high'|'moderate'|'stable'; score: number;
  trend: number[]; dx: string; nurse: string;
}

const PATIENTS: Patient[] = [
  { id:'P-10234', name:'Eleanor Vance', initials:'EV', age:72, unit:'ICU', room:'4-201', acuity:'critical', score:9.2, trend:[7,7.5,8,8.5,9,9.2], dx:'Septic Shock', nurse:'R. Chen' },
  { id:'P-10189', name:'Marcus Webb', initials:'MW', age:58, unit:'ICU', room:'4-203', acuity:'critical', score:8.8, trend:[6,7,7.5,8,8.5,8.8], dx:'STEMI — Post PCI', nurse:'R. Chen' },
  { id:'P-10301', name:'Clara Nguyen', initials:'CN', age:34, unit:'ICU', room:'4-205', acuity:'critical', score:9.5, trend:[8,8.5,9,9.2,9.3,9.5], dx:'ARDS — Ventilated', nurse:'L. Patel' },
  { id:'P-10156', name:'James Hargrove', initials:'JH', age:81, unit:'CCU', room:'3-112', acuity:'critical', score:8.6, trend:[5,6,7,7.5,8,8.6], dx:'CHF Exacerbation', nurse:'M. Torres' },
  { id:'P-10278', name:'Amira Osei', initials:'AO', age:45, unit:'ICU', room:'4-207', acuity:'critical', score:9.0, trend:[8.5,8.7,8.8,8.9,9,9], dx:'DKA — Type 1', nurse:'L. Patel' },
  { id:'P-10342', name:'Robert Liu', initials:'RL', age:67, unit:'CCU', room:'3-108', acuity:'critical', score:8.4, trend:[7.5,7.8,8,8.1,8.3,8.4], dx:'Pulmonary Embolism', nurse:'M. Torres' },
  { id:'P-10098', name:'Diana Reeves', initials:'DR', age:55, unit:'Med-Surg', room:'2-314', acuity:'high', score:7.1, trend:[5,5.5,6,6.5,7,7.1], dx:'Post-op Whipple', nurse:'K. Adams' },
  { id:'P-10145', name:'Thomas Park', initials:'TP', age:63, unit:'Tele', room:'3-405', acuity:'high', score:6.8, trend:[6.5,6.5,6.6,6.7,6.8,6.8], dx:'A-Fib w/ RVR', nurse:'S. Kim' },
  { id:'P-10211', name:'Fatima Al-Rashid', initials:'FA', age:29, unit:'Med-Surg', room:'2-320', acuity:'high', score:7.4, trend:[7,7.1,7.2,7.3,7.3,7.4], dx:'Sickle Cell Crisis', nurse:'K. Adams' },
  { id:'P-10367', name:'William Dyer', initials:'WD', age:77, unit:'CCU', room:'3-110', acuity:'high', score:6.5, trend:[7,7,6.8,6.6,6.5,6.5], dx:'Unstable Angina', nurse:'M. Torres' },
  { id:'P-10401', name:'Grace Kim', initials:'GK', age:41, unit:'Med-Surg', room:'2-308', acuity:'moderate', score:4.8, trend:[5.5,5.2,5,4.9,4.8,4.8], dx:'Appendectomy POD1', nurse:'J. Brooks' },
  { id:'P-10055', name:'Henry Costa', initials:'HC', age:52, unit:'Tele', room:'3-412', acuity:'moderate', score:5.2, trend:[5,5,5.1,5.1,5.2,5.2], dx:'New-onset Diabetes', nurse:'S. Kim' },
  { id:'P-10122', name:'Priya Sharma', initials:'PS', age:38, unit:'Ortho', room:'5-202', acuity:'moderate', score:4.5, trend:[6,5.5,5,4.8,4.5,4.5], dx:'TKR — POD2', nurse:'A. Martinez' },
  { id:'P-10288', name:'Leo Chang', initials:'LC', age:69, unit:'Med-Surg', room:'2-325', acuity:'stable', score:2.3, trend:[3,2.8,2.6,2.5,2.4,2.3], dx:'Pneumonia — Improving', nurse:'J. Brooks' },
  { id:'P-10199', name:'Sarah Bennett', initials:'SB', age:25, unit:'Ortho', room:'5-210', acuity:'stable', score:1.8, trend:[3.5,3,2.5,2.2,2,1.8], dx:'Ankle ORIF — POD3', nurse:'A. Martinez' },
  { id:'P-10333', name:'David Okafor', initials:'DO', age:48, unit:'Tele', room:'3-418', acuity:'stable', score:2.1, trend:[2.5,2.4,2.3,2.2,2.1,2.1], dx:'Observation — Chest Pain', nurse:'S. Kim' },
];

const STATS = [
  { label:'Total Census', value:42, change:'+2 from last shift', dir:'neutral' as const, icon:'ti-users', cls:'total' },
  { label:'Critical', value:6, change:'+1 escalated', dir:'up' as const, icon:'ti-urgent', cls:'critical' },
  { label:'High Priority', value:10, change:'+2 from moderate', dir:'up' as const, icon:'ti-alert-triangle', cls:'high' },
  { label:'Moderate', value:14, change:'-2 to high', dir:'down' as const, icon:'ti-info-circle', cls:'moderate' },
  { label:'Stable', value:12, change:'No change', dir:'neutral' as const, icon:'ti-heart', cls:'stable' },
];

const UNITS = [
  { name:'ICU', critical:5, high:2, moderate:1, stable:0 },
  { name:'CCU', critical:2, high:3, moderate:2, stable:1 },
  { name:'Med-Surg', critical:0, high:3, moderate:5, stable:4 },
  { name:'Tele', critical:0, high:2, moderate:4, stable:3 },
  { name:'Ortho', critical:0, high:0, moderate:2, stable:4 },
];

const ACUITY_COLORS: Record<string, string> = {
  critical: '#dc2626', high: '#ea580c', moderate: '#ca8a04', stable: '#16a34a',
};

/* ────────────────────────────────────────────────────────────
   HELPERS
   ──────────────────────────────────────────────────────────── */

function getTrend(trend: number[]) {
  const last = trend[trend.length - 1];
  const prev = trend[trend.length - 3];
  if (last > prev + 0.3) return { cls: 'text-danger', icon: 'ti-trending-up', text: 'Rising' };
  if (last < prev - 0.3) return { cls: 'text-success', icon: 'ti-trending-down', text: 'Declining' };
  return { cls: 'text-muted', icon: 'ti-minus', text: 'Stable' };
}

/* ────────────────────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────────────────────── */

const PatientAcuity: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState('');

  const maxUnit = Math.max(...UNITS.map(u => u.critical + u.high + u.moderate + u.stable));

  let filtered = PATIENTS;
  if (filter !== 'all') filtered = filtered.filter(p => p.acuity === filter);
  if (search) filtered = filtered.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) || p.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">

        <PageHeader
          title="Patient Acuity Dashboard"
          actions={
            <>
              <span className="pa-live-indicator">
                <span className="pa-live-dot" /> Live — Updated 12s ago
              </span>
              <button className="btn btn-outline-light"><i className="ti ti-filter me-1" />Filters</button>
              <button className="btn btn-outline-light"><i className="ti ti-download me-1" />Export</button>
              <button className="btn btn-primary"><i className="ti ti-refresh me-1" />Refresh</button>
            </>
          }
        />

        {/* ── Stat Cards ── */}
        <div className="row mb-4">
          {STATS.map((s, i) => (
            <div className="col" key={i}>
              <div className={`card pa-stat-card pa-stat-${s.cls}`}>
                <div className="card-body p-3">
                  <div className="pa-stat-icon">
                    <i className={`ti ${s.icon}`} />
                  </div>
                  <p className="pa-stat-label">{s.label}</p>
                  <h2 className="pa-stat-value">{s.value}</h2>
                  <span className={`pa-stat-change pa-stat-change-${s.dir}`}>
                    <i className={`ti ${s.dir === 'up' ? 'ti-arrow-up' : s.dir === 'down' ? 'ti-arrow-down' : 'ti-minus'}`} style={{ fontSize: 12 }} />
                    {s.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Distribution + Ratios ── */}
        <div className="row mb-4">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h5 className="card-title mb-0"><i className="ti ti-chart-bar me-1 text-primary" /> Acuity Distribution by Unit</h5>
              </div>
              <div className="card-body">
                {UNITS.map(u => {
                  const total = u.critical + u.high + u.moderate + u.stable;
                  const pct = (v: number) => `${((v / maxUnit) * 100).toFixed(1)}%`;
                  return (
                    <div className="pa-dist-row" key={u.name}>
                      <span className="pa-dist-label">{u.name}</span>
                      <div className="pa-dist-track">
                        <div className="d-flex h-100">
                          {u.critical > 0 && <div className="pa-dist-fill pa-dist-critical" style={{ width: pct(u.critical) }}>{u.critical}</div>}
                          {u.high > 0 && <div className="pa-dist-fill pa-dist-high" style={{ width: pct(u.high) }}>{u.high}</div>}
                          {u.moderate > 0 && <div className="pa-dist-fill pa-dist-moderate" style={{ width: pct(u.moderate) }}>{u.moderate}</div>}
                          {u.stable > 0 && <div className="pa-dist-fill pa-dist-stable" style={{ width: pct(u.stable) }}>{u.stable}</div>}
                        </div>
                      </div>
                      <span className="pa-dist-count">{total}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* ── Patient Census Table ── */}
        <div className="card">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h5 className="card-title mb-0"><i className="ti ti-list-details me-1 text-primary" /> Patient Census</h5>
            <span className="text-muted fs-12">42 patients across 6 units</span>
          </div>

          {/* Toolbar */}
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 p-3 border-bottom">
            <div className="d-flex gap-2 flex-wrap">
              {['all','critical','high','moderate','stable'].map(f => (
                <button
                  key={f}
                  className={`btn btn-sm ${filter === f ? 'btn-primary' : 'btn-outline-light'}`}
                  onClick={() => setFilter(f)}
                >
                  {f !== 'all' && <span className="pa-filter-dot" style={{ background: ACUITY_COLORS[f] }} />}
                  {f === 'all' ? 'All (42)' : `${f.charAt(0).toUpperCase() + f.slice(1)}`}
                </button>
              ))}
            </div>
            <div className="position-relative">
              <i className="ti ti-search position-absolute" style={{ left: 10, top: '50%', transform: 'translateY(-50%)', color: '#adb5bd', fontSize: 15 }} />
              <input
                type="text"
                className="form-control form-control-sm ps-4"
                placeholder="Search patients..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ width: 220 }}
              />
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Unit</th>
                  <th>Room</th>
                  <th>Acuity</th>
                  <th>Score</th>
                  <th>72h Trend</th>
                  <th>Primary Dx</th>
                  <th>Nurse</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(p => {
                  const t = getTrend(p.trend);
                  const max = Math.max(...p.trend);
                  return (
                    <tr key={p.id}>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <span className="pa-patient-avatar" style={{ background: ACUITY_COLORS[p.acuity] }}>{p.initials}</span>
                          <div>
                            <span className="fw-semibold d-block">{p.name}</span>
                            <small className="text-muted">{p.id} · {p.age}y</small>
                          </div>
                        </div>
                      </td>
                      <td className="fw-semibold">{p.unit}</td>
                      <td>{p.room}</td>
                      <td>
                        <span className={`pa-acuity-badge pa-acuity-${p.acuity}`}>
                          <span className="pa-acuity-dot" /> {p.acuity}
                        </span>
                      </td>
                      <td>
                        <span className="fw-bold fs-15">{p.score}</span>
                        <small className="text-muted">/10</small>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="pa-sparkline">
                            {p.trend.map((v, i) => (
                              <div key={i} className="pa-spark-bar" style={{
                                height: Math.max(4, (v / max) * 28),
                                background: ACUITY_COLORS[p.acuity],
                              }} />
                            ))}
                          </div>
                          <span className={`fw-semibold fs-12 ${t.cls}`}>
                            <i className={`ti ${t.icon}`} style={{ fontSize: 14 }} /> {t.text}
                          </span>
                        </div>
                      </td>
                      <td style={{ maxWidth: 140, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.dx}</td>
                      <td>{p.nurse}</td>
                      <td>
                        <div className="d-flex gap-1">
                          <button className="btn btn-sm btn-outline-light btn-icon" title="View Details"><i className="ti ti-eye" /></button>
                          <button className="btn btn-sm btn-outline-light btn-icon" title="Reassign"><i className="ti ti-switch-horizontal" /></button>
                          <button className="btn btn-sm btn-outline-danger btn-icon" title="Escalate"><i className="ti ti-arrow-up-circle" /></button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="d-flex align-items-center justify-content-between p-3 border-top">
            <span className="text-muted fs-12">Showing 1–{filtered.length} of 42 patients</span>
            <div className="d-flex gap-1">
              {[1,2,3,4,5].map(n => (
                <button key={n} className={`btn btn-sm ${n === 1 ? 'btn-primary' : 'btn-outline-light'}`}>{n}</button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PatientAcuity;
