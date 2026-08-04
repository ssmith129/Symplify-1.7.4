import React, { useState } from 'react';

import PageHeader from '../../../../../core/common/page-header/PageHeader';

/* ────────────────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────────────────── */

interface InsightMetric {
  label: string; value: string; pct: number; color: string; trend: number[];
}

interface Insight {
  id: number; category: string; tag: string; headline: string;
  description: string; metric: InsightMetric; confidence: number;
  time: string; status: 'populated' | 'loading' | 'error' | 'no-data';
  impact: 'critical' | 'high' | 'moderate' | 'stable';
}

const HERO = [
  { label: 'Avg LOS',             value: '4.2d',    change: '-0.3d vs last week', dir: 'down' as const, icon: 'ti-clock',  cls: 'total' },
  { label: 'Bed Occupancy',       value: '87%',     change: '+3% from yesterday', dir: 'up' as const,   icon: 'ti-bed',    cls: 'critical' },
  { label: 'Readmission Rate',    value: '6.8%',    change: '-1.2% this month',   dir: 'down' as const, icon: 'ti-repeat', cls: 'stable' },
  { label: 'Staffing Score',      value: '82/100',  change: 'No change',           dir: 'neutral' as const, icon: 'ti-users', cls: 'moderate' },
  { label: 'Patient Satisfaction', value: '4.6/5',  change: '+0.2 vs Q3',          dir: 'down' as const, icon: 'ti-star',   cls: 'high' },
];

const CATEGORIES = [
  { id: 'all', label: 'All Insights', count: 12 },
  { id: 'operations', label: 'Operations', count: 4, icon: 'ti-settings-2' },
  { id: 'staffing', label: 'Staffing', count: 3, icon: 'ti-users-group' },
  { id: 'patient-flow', label: 'Patient Flow', count: 3, icon: 'ti-arrows-transfer-down' },
  { id: 'quality', label: 'Quality Metrics', count: 2, icon: 'ti-award' },
];

const ACUITY_COLORS: Record<string, string> = {
  critical: '#dc2626', high: '#ea580c', moderate: '#ca8a04', stable: '#16a34a',
};

const INSIGHTS: Insight[] = [
  { id:1, category:'operations', tag:'Operations', headline:'ED Wait Times Exceeding 4-Hour Target', description:'Average emergency department wait time has increased 22% over the past 72 hours, driven by higher acuity admissions and downstream bed availability constraints.',
    metric:{label:'Avg Wait Time',value:'4h 38m',pct:77,color:'var(--clinical-critical)',trend:[55,58,62,68,72,77]}, confidence:4, time:'12 min ago', status:'populated', impact:'critical' },
  { id:2, category:'staffing', tag:'Staffing', headline:'Night Shift RN Shortage — ICU at 67% Coverage', description:'Three upcoming night shifts in the ICU have only 4 of 6 required RN positions filled. Agency nurse requests have been auto-submitted.',
    metric:{label:'Coverage Rate',value:'67%',pct:67,color:'var(--clinical-urgent)',trend:[85,82,78,72,68,67]}, confidence:5, time:'28 min ago', status:'populated', impact:'high' },
  { id:3, category:'patient-flow', tag:'Patient Flow', headline:'Surgical Discharge Bottleneck — 8 Patients Pending', description:'Eight post-surgical patients have met discharge criteria but are awaiting pharmacy reconciliation or transportation. Average delay: 6.2 hours.',
    metric:{label:'Pending Discharges',value:'8',pct:40,color:'var(--clinical-info)',trend:[3,4,5,6,7,8]}, confidence:5, time:'45 min ago', status:'populated', impact:'high' },
  { id:4, category:'quality', tag:'Quality Metrics', headline:'Hand Hygiene Compliance Below Benchmark', description:'ICU and Med-Surg units showing 76% compliance rate against a 90% target. Sensor data indicates peak non-compliance during shift transitions.',
    metric:{label:'Compliance Rate',value:'76%',pct:76,color:'var(--clinical-caution)',trend:[88,85,82,79,77,76]}, confidence:3, time:'1.2h ago', status:'populated', impact:'moderate' },
  { id:5, category:'operations', tag:'Operations', headline:'OR Utilization Gap — Block Time Underused', description:'Operating rooms 3 and 5 have 38% unutilized block time this week. Redistribution could accommodate 4 additional elective cases.',
    metric:{label:'Utilization',value:'62%',pct:62,color:'var(--clinical-caution)',trend:[58,55,60,63,61,62]}, confidence:4, time:'1.5h ago', status:'populated', impact:'moderate' },
  { id:6, category:'staffing', tag:'Staffing', headline:'Overtime Hours Trending Up — Med-Surg', description:'Med-Surg nursing overtime has increased 34% month-over-month. Top contributors: census spikes on Tuesday and Thursday admissions.',
    metric:{label:'OT Hours This Week',value:'142h',pct:85,color:'var(--clinical-critical)',trend:[95,102,118,126,135,142]}, confidence:4, time:'2h ago', status:'populated', impact:'critical' },
  { id:7, category:'patient-flow', tag:'Patient Flow', headline:'Admission-to-Bed Time Improved by 18%', description:'Average time from admission order to bed assignment has decreased from 52 minutes to 43 minutes following the new bed management protocol deployment.',
    metric:{label:'Avg Bed Assignment',value:'43 min',pct:43,color:'var(--clinical-stable)',trend:[52,50,48,46,44,43]}, confidence:5, time:'2.5h ago', status:'populated', impact:'stable' },
  { id:8, category:'operations', tag:'Operations', headline:'Lab Turnaround — STAT Orders Exceeding SLA', description:'12% of STAT lab orders in the past 24 hours exceeded the 60-minute turnaround SLA. Primary delays traced to specimen transport bottleneck.',
    metric:{label:'SLA Breach Rate',value:'12%',pct:12,color:'var(--clinical-urgent)',trend:[5,6,8,9,10,12]}, confidence:3, time:'3h ago', status:'populated', impact:'high' },
  { id:9, category:'quality', tag:'Quality Metrics', headline:'CLABSI Rate Trending Below National Benchmark', description:'Central line-associated bloodstream infection rate has maintained zero events for 47 consecutive days, outperforming the national benchmark by 62%.',
    metric:{label:'Days Without Event',value:'47',pct:94,color:'var(--clinical-stable)',trend:[35,38,41,43,45,47]}, confidence:5, time:'4h ago', status:'populated', impact:'stable' },
  { id:10, category:'patient-flow', tag:'Patient Flow', headline:'Telemetry Bed Availability Forecast', description:'AI models predict 3 telemetry beds will become available in the next 6 hours based on current discharge trajectories and anticipated step-downs.',
    metric:{label:'Predicted Availability',value:'3 beds',pct:30,color:'var(--clinical-info)',trend:[1,1,2,2,3,3]}, confidence:3, time:'5h ago', status:'populated', impact:'moderate' },
  { id:11, category:'staffing', tag:'Staffing', headline:'CNA Certification Expirations — 4 Staff This Month', description:'Four certified nursing assistants have BLS certifications expiring within 30 days. Auto-reminder emails have been queued for HR review.',
    metric:{label:'Expiring Certs',value:'4',pct:20,color:'var(--clinical-caution)',trend:[1,1,2,3,3,4]}, confidence:5, time:'6h ago', status:'populated', impact:'moderate' },
  { id:12, category:'operations', tag:'Operations', headline:'Medication Dispensing Errors — Trending Down', description:'Automated dispensing cabinet errors have decreased 28% since the barcode verification workflow update deployed last Tuesday.',
    metric:{label:'Error Rate',value:'0.8%',pct:8,color:'var(--clinical-stable)',trend:[15,12,10,8,9,8]}, confidence:4, time:'8h ago', status:'populated', impact:'stable' },
];

const CATEGORY_DIST = [
  { name: 'Operations',   critical: 1, high: 1, moderate: 1, stable: 1 },
  { name: 'Staffing',     critical: 1, high: 1, moderate: 1, stable: 0 },
  { name: 'Patient Flow', critical: 0, high: 1, moderate: 1, stable: 1 },
  { name: 'Quality',      critical: 0, high: 0, moderate: 1, stable: 1 },
];

/* ────────────────────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────────────────────── */

const SmartInsights: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [search, setSearch] = useState('');

  let filtered = currentCategory === 'all'
    ? INSIGHTS
    : INSIGHTS.filter(i => i.category === currentCategory);
  if (search) filtered = filtered.filter(i =>
    i.headline.toLowerCase().includes(search.toLowerCase()) || i.tag.toLowerCase().includes(search.toLowerCase())
  );

  const maxDist = Math.max(...CATEGORY_DIST.map(c => c.critical + c.high + c.moderate + c.stable));

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">

        <PageHeader
          title="Smart Insights"
          actions={
            <>
              <span className="pa-live-indicator"><span className="pa-live-dot" /> Auto-refreshing</span>
              <button className="btn btn-outline-light"><i className="ti ti-layout-grid me-1" />Customize</button>
              <button className="btn btn-outline-light"><i className="ti ti-download me-1" />Export</button>
              <button className="btn btn-primary"><i className="ti ti-refresh me-1" />Refresh</button>
            </>
          }
        />

        {/* ── Stat Cards (PA-style) ── */}
        <div className="row mb-4">
          {HERO.map((s, i) => (
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

        {/* ── Distribution + Summary (PA-style paired cards) ── */}
        <div className="row mb-4">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h5 className="card-title mb-0"><i className="ti ti-chart-bar me-1 text-primary" /> Insights by Category</h5>
              </div>
              <div className="card-body">
                {CATEGORY_DIST.map(c => {
                  const total = c.critical + c.high + c.moderate + c.stable;
                  const pct = (v: number) => `${((v / maxDist) * 100).toFixed(1)}%`;
                  return (
                    <div className="pa-dist-row" key={c.name}>
                      <span className="pa-dist-label">{c.name}</span>
                      <div className="pa-dist-track">
                        <div className="d-flex h-100">
                          {c.critical > 0 && <div className="pa-dist-fill pa-dist-critical" style={{ width: pct(c.critical) }}>{c.critical}</div>}
                          {c.high > 0 && <div className="pa-dist-fill pa-dist-high" style={{ width: pct(c.high) }}>{c.high}</div>}
                          {c.moderate > 0 && <div className="pa-dist-fill pa-dist-moderate" style={{ width: pct(c.moderate) }}>{c.moderate}</div>}
                          {c.stable > 0 && <div className="pa-dist-fill pa-dist-stable" style={{ width: pct(c.stable) }}>{c.stable}</div>}
                        </div>
                      </div>
                      <span className="pa-dist-count">{total}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h5 className="card-title mb-0"><i className="ti ti-bulb me-1 text-primary" /> Impact Summary</h5>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  {[
                    { label: 'Critical Impact', count: INSIGHTS.filter(i => i.impact === 'critical').length, status: 'danger' as const, statusText: 'Needs immediate attention', icon: 'ti-alert-triangle' },
                    { label: 'High Impact', count: INSIGHTS.filter(i => i.impact === 'high').length, status: 'caution' as const, statusText: 'Monitor closely', icon: 'ti-alert-circle' },
                    { label: 'Moderate Impact', count: INSIGHTS.filter(i => i.impact === 'moderate').length, status: 'caution' as const, statusText: 'Review when possible', icon: 'ti-info-circle' },
                    { label: 'Positive Trend', count: INSIGHTS.filter(i => i.impact === 'stable').length, status: 'safe' as const, statusText: 'On track', icon: 'ti-circle-check' },
                  ].map(r => (
                    <div className="col-md-6" key={r.label}>
                      <div className="pa-ratio-card">
                        <p className="pa-ratio-unit">{r.label}</p>
                        <h4 className="pa-ratio-value">{r.count} <small>insights</small></h4>
                        <span className={`pa-ratio-status pa-ratio-${r.status}`}>
                          <i className={`ti ${r.icon}`} />
                          {r.statusText}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Insights Table (PA-style) ── */}
        <div className="card">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h5 className="card-title mb-0"><i className="ti ti-bulb me-1 text-primary" /> Insight Feed</h5>
            <span className="text-muted fs-12">{filtered.length} insights across {CATEGORIES.length - 1} categories</span>
          </div>

          {/* Toolbar */}
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 p-3 border-bottom">
            <div className="d-flex gap-2 flex-wrap">
              {CATEGORIES.map(c => (
                <button
                  key={c.id}
                  className={`btn btn-sm ${currentCategory === c.id ? 'btn-primary' : 'btn-outline-light'}`}
                  onClick={() => setCurrentCategory(c.id)}
                >
                  {c.icon && <i className={`ti ${c.icon}`} style={{ fontSize: 13, marginRight: 3 }} />}
                  {c.label}
                </button>
              ))}
            </div>
            <div className="position-relative">
              <i className="ti ti-search position-absolute" style={{ left: 10, top: '50%', transform: 'translateY(-50%)', color: '#adb5bd', fontSize: 15 }} />
              <input
                type="text"
                className="form-control form-control-sm ps-4"
                placeholder="Search insights..."
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
                  <th>Insight</th>
                  <th>Category</th>
                  <th>Impact</th>
                  <th>Key Metric</th>
                  <th>Trend</th>
                  <th>Confidence</th>
                  <th>Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(ins => {
                  const max = Math.max(...ins.metric.trend);
                  return (
                    <tr key={ins.id}>
                      <td style={{ maxWidth: 280 }}>
                        <div className="d-flex align-items-start gap-2">
                          <span className="pca-type-tag pca-type-ai flex-shrink-0" style={{ marginTop: 2 }}>
                            <i className="ti ti-robot" style={{ fontSize: 10 }} /> AI
                          </span>
                          <div>
                            <span className="fw-semibold d-block">{ins.headline}</span>
                            <small className="text-muted si-description" style={{ WebkitLineClamp: 1 }}>{ins.description}</small>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className={`si-category-tag ${
                          ins.category === 'operations' ? 'si-tag-operations' :
                          ins.category === 'staffing' ? 'si-tag-staffing' :
                          ins.category === 'patient-flow' ? 'si-tag-patient-flow' :
                          'si-tag-quality'
                        }`}>{ins.tag}</span>
                      </td>
                      <td>
                        <span className={`pa-acuity-badge pa-acuity-${ins.impact}`}>
                          <span className="pa-acuity-dot" /> {ins.impact}
                        </span>
                      </td>
                      <td>
                        <span className="fw-bold fs-15">{ins.metric.value}</span>
                        <br />
                        <small className="text-muted">{ins.metric.label}</small>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="pa-sparkline">
                            {ins.metric.trend.map((v, i) => (
                              <div key={i} className="pa-spark-bar" style={{
                                height: Math.max(4, (v / max) * 28),
                                background: ins.metric.color,
                              }} />
                            ))}
                          </div>
                          <small className="text-muted fw-semibold">{ins.metric.pct}%</small>
                        </div>
                      </td>
                      <td>
                        <span className="d-flex align-items-center gap-1">
                          <span className="si-conf-dots">
                            {[1,2,3,4,5].map(n => (
                              <span key={n} className={`si-conf-dot ${n <= ins.confidence ? 'filled' : ''}`} />
                            ))}
                          </span>
                          <small className="fw-semibold text-muted">{ins.confidence * 20}%</small>
                        </span>
                      </td>
                      <td><small className="text-muted">{ins.time}</small></td>
                      <td>
                        <div className="d-flex gap-1">
                          <button className="btn btn-sm btn-outline-light btn-icon" title="View Details"><i className="ti ti-eye" /></button>
                          <button className="btn btn-sm btn-outline-light btn-icon" title="Share"><i className="ti ti-share" /></button>
                          <button className="btn btn-sm btn-outline-primary btn-icon" title="Drill Down"><i className="ti ti-arrow-right" /></button>
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
            <span className="text-muted fs-12">Showing 1–{filtered.length} of {INSIGHTS.length} insights</span>
            <div className="d-flex gap-1">
              {[1,2].map(n => (
                <button key={n} className={`btn btn-sm ${n === 1 ? 'btn-primary' : 'btn-outline-light'}`}>{n}</button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SmartInsights;
