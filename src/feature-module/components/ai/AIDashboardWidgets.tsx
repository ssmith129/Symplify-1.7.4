import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import type { RootState, AppDispatch } from '../../../core/redux/store';
import { loadPersonalizedLayout, recordInteraction, fetchClinicalAlerts } from '../../../core/redux/aiSlice';
import type { UserRole } from '../../../core/ai/types';
import { all_routes } from '../../routes/all_routes';
import ClinicalAlertWidget from './ClinicalAlertWidget';

interface SmartWidgetProps {
  widgetId: string;
  onInteraction?: (widgetId: string, action: string) => void;
  aiRecommended?: boolean;
}

// Smart Widget Component
const SmartWidget: React.FC<SmartWidgetProps> = ({ widgetId, onInteraction, aiRecommended }) => {
  const getWidgetContent = () => {
    switch (widgetId) {
      case 'patientAcuity':
        return <PatientAcuityWidget />;
      case 'patientQueue':
        return <PatientQueueWidget />;
      case 'clinicalAlerts':
        return <ClinicalAlertWidget />;
      case 'aiInsights':
        return <AIInsightsWidget />;
      default:
        return <DefaultWidgetContent widgetId={widgetId} />;
    }
  };

  const widgetTitles: Record<string, string> = {
    patientAcuity: 'Patient Acuity Overview',
    patientQueue: 'Smart Patient Queue',
    clinicalAlerts: 'Predictive Clinical Alerts',
    aiInsights: 'Smart Insights',
    appointmentStats: 'Appointment Statistics',
    revenueChart: 'Revenue Overview',
    staffSchedule: 'Staff Schedule',
    resourceUtilization: 'Resource Utilization',
  };

  const widgetRoutes: Record<string, string> = {
    patientAcuity: all_routes.patients,
    patientQueue: all_routes.patients,
    clinicalAlerts: all_routes.patients,
    aiInsights: all_routes.dashboard,
  };

  // Clinical Alerts uses max height with responsive behavior
  const isFixedHeight = widgetId === 'clinicalAlerts';
  const getCardHeight = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      return 'clamp(400px, 60vh, 620px)';
    }
    return '620px';
  };
  const fixedCardHeight = getCardHeight();

  return (
    <div
      className={`card shadow-sm w-100 ${isFixedHeight ? '' : 'flex-fill'}`}
      style={isFixedHeight ? { height: fixedCardHeight, display: 'flex', flexDirection: 'column' } : undefined}
    >
      <div className="card-header d-flex flex-column flex-sm-row align-items-start align-sm-center justify-content-between flex-shrink-0 gap-2">
        <div className="d-flex align-items-center flex-grow-1 min-w-0">
          <h5 className="fw-bold mb-0 text-truncate">{widgetTitles[widgetId] || widgetId}</h5>
          <span className="badge bg-warning text-dark ms-2 px-2 py-1 fs-10 flex-shrink-0">
            <i className="ti ti-sparkles me-1" />
            <span className="d-none d-sm-inline">AI</span>
            <span className="d-inline d-sm-none">AI</span>
          </span>
        </div>
        {widgetRoutes[widgetId] && (
          <Link
            to={widgetRoutes[widgetId]}
            className="btn fw-normal btn-outline-white flex-shrink-0 align-self-sm-center"
          >
            View All
          </Link>
        )}
      </div>
      <div
        className="card-body"
        style={isFixedHeight ? { flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' } : undefined}
      >
        {getWidgetContent()}
      </div>
    </div>
  );
};

// Enhanced Patient Acuity Widget
const PatientAcuityWidget: React.FC = () => {
  const acuityData = [
    { level: 'Critical', count: 2, color: '#F44336', patients: ['Maria Santos', 'James Wilson'] },
    { level: 'Urgent', count: 5, color: '#FF9800', patients: ['Emily Chen', 'Robert Johnson', 'Lisa Park'] },
    { level: 'Semi-Urgent', count: 8, color: '#FFC107', patients: ['David Lee', 'Anna Kim'] },
    { level: 'Standard', count: 15, color: '#4CAF50', patients: ['Michael Brown', 'Sarah Davis'] },
    { level: 'Non-Urgent', count: 12, color: '#2196F3', patients: ['John Smith', 'Jane Doe'] },
  ];

  const totalPatients = acuityData.reduce((sum, item) => sum + item.count, 0);
  const totalHighPriority = acuityData.slice(0, 2).reduce((sum, item) => sum + item.count, 0);

  return (
    <div>
      {/* Summary Stats Row */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-sm-4">
          <div className="border rounded-2 p-3 text-center" style={{ backgroundColor: '#EEF2FF' }}>
            <h4 className="fw-bold mb-1 text-primary">{totalPatients}</h4>
            <p className="mb-0 fs-12 text-muted">Total Patients</p>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="border rounded-2 p-3 text-center" style={{ backgroundColor: '#FEF2F2' }}>
            <h4 className="fw-bold mb-1 text-danger">{totalHighPriority}</h4>
            <p className="mb-0 fs-12 text-muted">High Priority</p>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="border rounded-2 p-3 text-center" style={{ backgroundColor: '#ECFDF5' }}>
            <h4 className="fw-bold mb-1 text-success">{acuityData[3].count + acuityData[4].count}</h4>
            <p className="mb-0 fs-12 text-muted">Stable</p>
          </div>
        </div>
      </div>

      {/* Acuity Breakdown - Enhanced with progress bars */}
      <div className="overflow-auto" style={{ maxHeight: '420px' }}>
        {acuityData.map((item) => (
          <div
            key={item.level}
            className="p-3 rounded-2 mb-2"
            style={{ border: '1px solid #e5e7eb' }}
          >
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="d-flex align-items-center">
                <span
                  className="rounded-circle me-2 flex-shrink-0"
                  style={{ width: 12, height: 12, backgroundColor: item.color }}
                />
                <span className="fs-14 fw-medium">{item.level}</span>
              </div>
              <span
                className="badge px-3 py-2 fs-13 fw-bold"
                style={{ backgroundColor: `${item.color}20`, color: item.color }}
              >
                {item.count}
              </span>
            </div>
            {/* Progress bar */}
            <div className="progress mb-2" style={{ height: '6px' }}>
              <div
                className="progress-bar"
                style={{ 
                  width: `${(item.count / totalPatients) * 100}%`,
                  backgroundColor: item.color
                }}
              />
            </div>
            {/* Sample patients */}
            <div className="d-flex align-items-center gap-1 flex-wrap">
              {item.patients.slice(0, 2).map((name, idx) => (
                <span key={idx} className="badge bg-light text-dark fs-11 px-2 py-1">
                  {name}
                </span>
              ))}
              {item.count > 2 && (
                <span className="fs-11 text-muted">+{item.count - 2} more</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Enhanced Patient Queue Widget
const PatientQueueWidget: React.FC = () => {
  const queueData = [
    { name: 'Maria Santos', waitTime: '45 min', priority: 1, condition: 'Chest Pain', room: '302' },
    { name: 'James Wilson', waitTime: '30 min', priority: 2, condition: 'High Fever', room: '415' },
    { name: 'Emily Chen', waitTime: '20 min', priority: 3, condition: 'Abdominal Pain', room: '108' },
    { name: 'Robert Johnson', waitTime: '15 min', priority: 4, condition: 'Follow-up', room: '205' },
  ];

  const getPriorityBadge = (priority: number) => {
    const colors = ['#F44336', '#FF9800', '#FFC107', '#4CAF50', '#2196F3'];
    const labels = ['Critical', 'Urgent', 'Semi-Urgent', 'Standard', 'Non-Urgent'];
    return (
      <span
        className="badge px-2 py-1"
        style={{ backgroundColor: colors[priority - 1], color: '#fff' }}
      >
        {labels[priority - 1]}
      </span>
    );
  };

  return (
    <div className="table-responsive" style={{ maxHeight: '320px' }}>
      <table className="table table-sm mb-0">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Room</th>
            <th>Wait Time</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {queueData.map((patient, idx) => (
            <tr key={idx}>
              <td>
                <div>
                  <strong className="fs-14">{patient.name}</strong>
                  <div className="text-muted fs-12">{patient.condition}</div>
                </div>
              </td>
              <td className="fs-13">{patient.room}</td>
              <td className="fs-13">{patient.waitTime}</td>
              <td>{getPriorityBadge(patient.priority)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Enhanced AI Insights Widget
const AIInsightsWidget: React.FC = () => {
  const insights = [
    { 
      icon: 'ti-trending-up', 
      title: 'Patient Volume Forecast',
      text: 'Expected to increase 15% this afternoon based on historical patterns', 
      type: 'info', 
      color: '#2196F3',
      metric: '+15%',
      metricLabel: 'vs. average'
    },
    { 
      icon: 'ti-alert-circle', 
      title: 'Deterioration Risk',
      text: '3 patients showing early signs of deterioration - recommend review', 
      type: 'warning', 
      color: '#FF9800',
      metric: '3',
      metricLabel: 'patients'
    },
    { 
      icon: 'ti-calendar', 
      title: 'Scheduling Optimization',
      text: 'Optimal scheduling window identified: 2:00 PM - 4:00 PM today', 
      type: 'success', 
      color: '#4CAF50',
      metric: '2h',
      metricLabel: 'window'
    },
    { 
      icon: 'ti-clock', 
      title: 'Wait Time Analysis',
      text: 'Average wait time reduced by 12 minutes compared to last week', 
      type: 'success', 
      color: '#4CAF50',
      metric: '-12m',
      metricLabel: 'improved'
    },
    { 
      icon: 'ti-bed', 
      title: 'Bed Availability',
      text: '85% occupancy rate. 6 beds available in general ward', 
      type: 'info', 
      color: '#2196F3',
      metric: '6',
      metricLabel: 'available'
    },
    { 
      icon: 'ti-stethoscope', 
      title: 'Staff Allocation',
      text: 'Consider adding 1 nurse to ICU during peak hours (2PM-6PM)', 
      type: 'warning', 
      color: '#FF9800',
      metric: '+1',
      metricLabel: 'recommended'
    },
  ];

  // Summary metrics
  const urgentInsights = insights.filter(i => i.type === 'warning').length;
  const positiveInsights = insights.filter(i => i.type === 'success').length;

  return (
    <div>
      {/* Summary Stats Row */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-sm-4">
          <div className="border rounded-2 p-3 text-center" style={{ backgroundColor: '#EEF2FF' }}>
            <h4 className="fw-bold mb-1 text-primary">{insights.length}</h4>
            <p className="mb-0 fs-12 text-muted">Total Insights</p>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="border rounded-2 p-3 text-center" style={{ backgroundColor: '#FFFBEB' }}>
            <h4 className="fw-bold mb-1 text-warning">{urgentInsights}</h4>
            <p className="mb-0 fs-12 text-muted">Attention</p>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="border rounded-2 p-3 text-center" style={{ backgroundColor: '#ECFDF5' }}>
            <h4 className="fw-bold mb-1 text-success">{positiveInsights}</h4>
            <p className="mb-0 fs-12 text-muted">Positive</p>
          </div>
        </div>
      </div>

      {/* Insights List - Scrollable */}
      <div className="overflow-auto" style={{ maxHeight: '420px' }}>
        {insights.map((insight, idx) => (
          <div
            key={idx}
            className="d-flex align-items-start p-3 rounded-2 mb-2"
            style={{ 
              border: '1px solid #e5e7eb',
              backgroundColor: `${insight.color}08`
            }}
          >
            <span
              className="avatar avatar-md rounded-circle me-3 flex-shrink-0 d-flex align-items-center justify-content-center"
              style={{ backgroundColor: `${insight.color}15`, width: 44, height: 44 }}
            >
              <i className={`ti ${insight.icon} fs-18`} style={{ color: insight.color }} />
            </span>
            <div className="flex-grow-1">
              <h6 className="fs-14 fw-semibold mb-1">{insight.title}</h6>
              <p className="fs-13 text-muted mb-0 lh-sm">{insight.text}</p>
            </div>
            <div className="text-end flex-shrink-0 ms-2">
              <span 
                className="fs-16 fw-bold d-block"
                style={{ color: insight.color }}
              >
                {insight.metric}
              </span>
              <span className="fs-11 text-muted">{insight.metricLabel}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

// Quick Stats Widget - Combines 4 top stats into one card
const QuickStatsWidget: React.FC = () => {
  const statsData = [
    {
      label: 'Doctors',
      value: '247',
      change: '+95%',
      changeType: 'positive',
      icon: 'ti-stethoscope',
      color: '#2E37A4',
      bgColor: '#EEF2FF'
    },
    {
      label: 'Patients',
      value: '4,178',
      change: '+25%',
      changeType: 'positive',
      icon: 'ti-users',
      color: '#F44336',
      bgColor: '#FEF2F2'
    },
    {
      label: 'Appointments',
      value: '12,178',
      change: '-15%',
      changeType: 'negative',
      icon: 'ti-calendar-event',
      color: '#0EA5E9',
      bgColor: '#F0F9FF'
    },
    {
      label: 'Revenue',
      value: '$55,124',
      change: '+25%',
      changeType: 'positive',
      icon: 'ti-currency-dollar',
      color: '#22C55E',
      bgColor: '#ECFDF5'
    },
  ];

  return (
    <div className="card shadow-sm flex-fill w-100">
      <div className="card-header d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <h5 className="fw-bold mb-0">Quick Stats</h5>
          <span className="badge bg-warning text-dark ms-2 px-2 py-1 fs-10">
            <i className="ti ti-sparkles me-1" />
            AI
          </span>
        </div>
        <span className="fs-12 text-muted">Last 7 days</span>
      </div>
      <div className="card-body">
        {/* Stats List - Scrollable */}
        <div className="overflow-auto" style={{ maxHeight: '520px' }}>
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-2 ${idx < statsData.length - 1 ? 'mb-2' : ''}`}
              style={{
                border: '1px solid #e5e7eb',
                backgroundColor: `${stat.color}08`
              }}
            >
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <span
                    className="avatar avatar-sm rounded-circle me-2 d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: stat.bgColor, width: 36, height: 36 }}
                  >
                    <i className={`ti ${stat.icon} fs-16`} style={{ color: stat.color }} />
                  </span>
                  <span className="fs-14 fw-medium">{stat.label}</span>
                </div>
                <span
                  className={`badge px-2 py-1 fs-11 fw-medium ${
                    stat.changeType === 'positive' ? 'bg-success' : 'bg-danger'
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <div className="d-flex align-items-end justify-content-between">
                <h3 className="fw-bold mb-0" style={{ color: stat.color }}>{stat.value}</h3>
                <span className="fs-12 text-muted">vs last week</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Default Widget Content
const DefaultWidgetContent: React.FC<{ widgetId: string }> = ({ widgetId }) => (
  <div className="text-center py-4 text-muted">
    <i className="ti ti-chart-bar fs-1 mb-2 d-block opacity-50" />
    <p className="mb-0">{widgetId} widget content</p>
  </div>
);

// Main AI Dashboard Section Component
interface AIDashboardSectionProps {
  userRole?: UserRole;
  userId?: string;
}

const AIDashboardSection: React.FC<AIDashboardSectionProps> = ({
  userRole = 'admin',
  userId = 'user-1'
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { personalizedLayout, loading } = useSelector((state: RootState) => state.ai.dashboard);

  useEffect(() => {
    dispatch(loadPersonalizedLayout({ userId, role: userRole }));
    dispatch(fetchClinicalAlerts());
  }, [dispatch, userId, userRole]);

  const handleWidgetInteraction = (widgetId: string, action: string) => {
    dispatch(recordInteraction({
      userId,
      widgetId,
      action: action as 'view' | 'click' | 'expand' | 'collapse' | 'dismiss',
      timestamp: Date.now()
    }));
  };

  // AI-enhanced widgets to show
  const aiWidgets = ['patientAcuity', 'clinicalAlerts', 'aiInsights'];
  const suggestedWidgetIds = personalizedLayout?.aiSuggestions.map(s => s.widgetId) || [];

  return (
    <div className="row mb-4 g-3 g-lg-4">
      {aiWidgets.map((widgetId) => (
        <div key={widgetId} className="col-12 col-md-6 col-lg-4 d-flex">
          <SmartWidget
            widgetId={widgetId}
            onInteraction={handleWidgetInteraction}
            aiRecommended={suggestedWidgetIds.includes(widgetId)}
          />
        </div>
      ))}
    </div>
  );
};

export { SmartWidget, AIDashboardSection, PatientAcuityWidget, PatientQueueWidget, AIInsightsWidget, QuickStatsWidget };
export default AIDashboardSection;
