/* eslint-disable */
// src/feature-module/components/ai/NotificationPageAI.tsx
// AI-Enhanced Notification Page for Symplify Platform

import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  fetchNotifications, 
  markAsRead,
  markAllAsRead,
  dismissNotification 
} from '../../../core/redux/notificationSlice';
import { 
  AnalyzedNotification, 
  NotificationCategory,
  NotificationCriticality 
} from '../../../core/ai/notificationTypes';
import { RootState, AppDispatch } from '../../../core/redux/store';

const CATEGORY_LABELS: Record<NotificationCategory, { label: string; icon: string }> = {
  'clinical-emergency': { label: 'Clinical Emergency', icon: 'ti-alert-octagon' },
  'clinical-urgent': { label: 'Clinical Urgent', icon: 'ti-alert-triangle' },
  'clinical-routine': { label: 'Clinical Routine', icon: 'ti-stethoscope' },
  'administrative-urgent': { label: 'Admin Urgent', icon: 'ti-file-alert' },
  'administrative-routine': { label: 'Admin Routine', icon: 'ti-file-text' },
  'system': { label: 'System', icon: 'ti-settings' },
  'communication': { label: 'Communication', icon: 'ti-message' }
};

const CRITICALITY_COLORS: Record<NotificationCriticality, string> = {
  critical: '#DC2626',
  high: '#F97316',
  medium: '#EAB308',
  low: '#22C55E',
  info: '#3B82F6'
};

type ViewMode = 'grouped' | 'timeline';

export const NotificationPageAI: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { notifications, unreadCount, criticalCount, loading } = useSelector(
    (state: RootState) => state.notifications
  );
  const [viewMode, setViewMode] = useState<ViewMode>('grouped');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(['clinical-emergency', 'clinical-urgent'])
  );

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  // Group notifications by category
  const groupedByCategory = useMemo(() => {
    const groups: Record<NotificationCategory, AnalyzedNotification[]> = {} as any;
    
    notifications.forEach(notification => {
      if (!groups[notification.category]) {
        groups[notification.category] = [];
      }
      groups[notification.category].push(notification);
    });

    return groups;
  }, [notifications]);

  // Statistics
  const stats = useMemo(() => ({
    total: notifications.length,
    unread: unreadCount,
    critical: criticalCount,
    high: notifications.filter(n => n.criticality === 'high' && !n.read).length
  }), [notifications, unreadCount, criticalCount]);

  const handleMarkAllRead = (category?: NotificationCategory) => {
    if (category) {
      groupedByCategory[category]?.forEach(n => dispatch(markAsRead(n.id)));
    } else {
      dispatch(markAllAsRead());
    }
  };

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h ago`;
    return date.toLocaleDateString();
  };

  if (loading && notifications.length === 0) {
    return (
      <div className="page-wrapper">
        <div className="content d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="content notification-page-ai">
        {/* Statistics Cards */}
        <div className="notification-stats">
          <div className="stat-chip" title="Total Notifications">
            <i className="ti ti-bell" />
            <span>{stats.total}</span>
          </div>
          <div className="stat-chip critical" title="Critical">
            <i className="ti ti-alert-octagon" />
            <span>{stats.critical}</span>
          </div>
          <div className="stat-chip high" title="High Priority">
            <i className="ti ti-alert-triangle" />
            <span>{stats.high}</span>
          </div>
          <div className="stat-chip" title="Unread">
            <i className="ti ti-mail" />
            <span>{stats.unread}</span>
          </div>
        </div>

        {notifications.length === 0 ? (
          <div className="card">
            <div className="card-body text-center py-5">
              <i className="ti ti-bell-off fs-1 text-muted mb-3 d-block" />
              <p className="text-muted mb-0">No notifications</p>
            </div>
          </div>
        ) : viewMode === 'grouped' ? (
          /* Grouped View */
          <div className="notification-groups">
            {Object.entries(groupedByCategory).map(([category, items]) => {
              const categoryConfig = CATEGORY_LABELS[category as NotificationCategory];
              const unreadInCategory = items.filter(n => !n.read).length;
              const isExpanded = expandedCategories.has(category);
              
              return (
                <div key={category} className="card mb-3">
                  <div 
                    className="group-header"
                    onClick={() => toggleCategory(category)}
                  >
                    <div className="group-title">
                      <i className={`ti ${categoryConfig.icon} me-2`} />
                      {categoryConfig.label}
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      {unreadInCategory > 0 && (
                        <span className="group-badge">{unreadInCategory} unread</span>
                      )}
                      <button
                        className="btn btn-sm btn-outline-secondary btn-icon-touch"
                        title="Mark Read"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMarkAllRead(category as NotificationCategory);
                        }}
                      >
                        <i className="ti ti-checks" />
                      </button>
                      <i className={`ti ti-chevron-${isExpanded ? 'up' : 'down'}`} />
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="card-body p-0">
                      {items.map(notification => (
                        <div 
                          key={notification.id}
                          className={`notification-item-full ${notification.read ? 'read' : 'unread'} ${notification.criticality}`}
                          onClick={() => dispatch(markAsRead(notification.id))}
                        >
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h6 className="mb-0 fw-semibold">{notification.title}</h6>
                            <span 
                              className="badge"
                              style={{ 
                                backgroundColor: CRITICALITY_COLORS[notification.criticality],
                                fontSize: '10px'
                              }}
                            >
                              {notification.criticality.toUpperCase()}
                            </span>
                          </div>
                          <p className="text-muted mb-2 fs-13">{notification.message}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">
                              <i className="ti ti-user me-1" />
                              {notification.source.name} • {formatTime(notification.timestamp)}
                            </small>
                            <div className="d-flex gap-2">
                              {notification.suggestedActions.slice(0, 2).map(action => {
                                const iconMap: Record<string, string> = {
                                  'respond-now': 'ti-send',
                                  'acknowledge': 'ti-check',
                                  'dismiss': 'ti-x',
                                  'review': 'ti-eye',
                                };
                                const icon = iconMap[action.id] || 'ti-click';
                                return (
                                  <button
                                    key={action.id}
                                    className={`btn btn-sm btn-icon-touch ${action.priority === 'danger' ? 'btn-danger' : 'btn-outline-primary'}`}
                                    title={action.label}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (action.type === 'dismiss') {
                                        dispatch(dismissNotification(notification.id));
                                      }
                                    }}
                                  >
                                    <i className={`ti ${icon}`} />
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          /* Timeline View */
          <div className="card">
            <div className="card-body notification-timeline">
              {notifications.map((notification, index) => (
                <div 
                  key={notification.id}
                  className="timeline-item d-flex gap-3"
                  style={{ borderLeftColor: CRITICALITY_COLORS[notification.criticality] }}
                >
                  <div 
                    className="timeline-dot"
                    style={{ 
                      width: '12px', 
                      height: '12px', 
                      borderRadius: '50%', 
                      backgroundColor: CRITICALITY_COLORS[notification.criticality],
                      flexShrink: 0,
                      marginTop: '4px'
                    }}
                  />
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between">
                      <strong>{notification.title}</strong>
                      <small className="text-muted">{formatTime(notification.timestamp)}</small>
                    </div>
                    <p className="text-muted mb-1 fs-13">{notification.message}</p>
                    <small className="text-muted">
                      <i className="ti ti-user me-1" />
                      {notification.source.name}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationPageAI;
