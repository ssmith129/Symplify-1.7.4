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

// Smart Widget Component - no collapsible functionality
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

  return (
    <div className="card shadow-sm flex-fill w-100">
      {/* Card Header - matches design system */}
      <div className="card-header d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <h5 className="fw-bold mb-0">{widgetTitles[widgetId] || widgetId}</h5>
          {aiRecommended && (
            <span className="badge bg-warning text-dark ms-2 px-2 py-1 fs-10">
              <i className="ti ti-sparkles me-1" />
              AI
            </span>
          )}
        </div>
        {widgetRoutes[widgetId] && (
          <Link
            to={widgetRoutes[widgetId]}
            className="btn fw-normal btn-outline-white"
          >
            View All
          </Link>
        )}
      </div>
      <div className="card-body">
        {getWidgetContent()}
      </div>
    </div>
  );
};

// Patient Acuity Widget
const PatientAcuityWidget: React.FC = () => {
  const acuityData = [
    { level: 'Critical', count: 2, color: '#F44336', bgClass: 'bg-soft-danger' },
    { level: 'Urgent', count: 5, color: '#FF9800', bgClass: 'bg-soft-warning' },
    { level: 'Semi-Urgent', count: 8, color: '#FFC107', bgClass: 'bg-soft-warning' },
    { level: 'Standard', count: 15, color: '#4CAF50', bgClass: 'bg-soft-success' },
    { level: 'Non-Urgent', count: 12, color: '#2196F3', bgClass: 'bg-soft-info' },
  ];

  const totalHighPriority = acuityData.slice(0, 2).reduce((sum, item) => sum + item.count, 0);
  const totalStandard = acuityData.slice(2).reduce((sum, item) => sum + item.count, 0);

  return (
    <div>
      {/* Summary Stats Row - matches Doctors Schedule pattern */}
      <div className="row g-2 mb-4">
        <div className="col d-flex border-end">
          <div className="text-center flex-fill">
            <p className="mb-1">High Priority</p>
            <h3 className="fw-bold mb-0 text-danger">{totalHighPriority}</h3>
          </div>
        </div>
        <div className="col d-flex">
          <div className="text-center flex-fill">
            <p className="mb-1">Standard</p>
            <h3 className="fw-bold mb-0 text-success">{totalStandard}</h3>
          </div>
        </div>
      </div>

      {/* Acuity Breakdown List - scrollable */}
      <div className="overflow-auto" style={{ maxHeight: '200px' }}>
        {acuityData.map((item) => (
          <div
            key={item.level}
            className="d-flex justify-content-between align-items-center mb-3"
          >
            <div className="d-flex align-items-center">
              <span
                className="rounded-circle me-2 flex-shrink-0"
                style={{ width: 8, height: 8, backgroundColor: item.color }}
              />
              <span className="fs-13">{item.level}</span>
            </div>
            <span
              className="badge px-2 py-1 fs-12 fw-medium"
              style={{ backgroundColor: `${item.color}20`, color: item.color }}
            >
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Patient Queue Widget
const PatientQueueWidget: React.FC = () => {
  const queueData = [
    { name: 'Maria Santos', waitTime: '45 min', priority: 1, condition: 'Chest Pain' },
    { name: 'James Wilson', waitTime: '30 min', priority: 2, condition: 'High Fever' },
    { name: 'Emily Chen', waitTime: '20 min', priority: 3, condition: 'Abdominal Pain' },
    { name: 'Robert Johnson', waitTime: '15 min', priority: 4, condition: 'Follow-up' },
  ];

  const getPriorityBadge = (priority: number) => {
    const colors = ['#F44336', '#FF9800', '#FFC107', '#4CAF50', '#2196F3'];
    const labels = ['Critical', 'Urgent', 'Semi-Urgent', 'Standard', 'Non-Urgent'];
    return (
      <span
        className="badge"
        style={{ backgroundColor: colors[priority - 1], color: '#fff' }}
      >
        {labels[priority - 1]}
      </span>
    );
  };

  return (
    <div className="table-responsive" style={{ maxHeight: '280px' }}>
      <table className="table table-sm mb-0">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Wait Time</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {queueData.map((patient, idx) => (
            <tr key={idx}>
              <td>
                <div>
                  <strong>{patient.name}</strong>
                  <div className="text-muted small">{patient.condition}</div>
                </div>
              </td>
              <td>{patient.waitTime}</td>
              <td>{getPriorityBadge(patient.priority)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// AI Insights Widget
const AIInsightsWidget: React.FC = () => {
  const insights = [
    { icon: 'ti-trending-up', text: 'Patient volume expected to increase 15% this afternoon', type: 'info', color: '#2196F3' },
    { icon: 'ti-alert-circle', text: '3 patients showing early signs of deterioration', type: 'warning', color: '#FF9800' },
    { icon: 'ti-calendar', text: 'Optimal scheduling window: 2:00 PM - 4:00 PM', type: 'success', color: '#4CAF50' },
  ];

  return (
    <div>
      <div className="overflow-auto" style={{ maxHeight: '220px' }}>
        {insights.map((insight, idx) => (
          <div
            key={idx}
            className="d-flex align-items-start mb-3"
          >
            <span
              className="avatar avatar-sm rounded-circle me-2 flex-shrink-0 d-flex align-items-center justify-content-center"
              style={{ backgroundColor: `${insight.color}15`, width: 28, height: 28 }}
            >
              <i className={`ti ${insight.icon} fs-14`} style={{ color: insight.color }} />
            </span>
            <span className="fs-13 lh-sm">{insight.text}</span>
          </div>
        ))}
      </div>
      <div className="text-center pt-2 border-top mt-2">
        <span className="text-muted fs-12">
          <i className="ti ti-sparkles me-1" />
          AI-generated insights
        </span>
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

export { SmartWidget, AIDashboardSection, PatientAcuityWidget, PatientQueueWidget, AIInsightsWidget };
export default AIDashboardSection;
