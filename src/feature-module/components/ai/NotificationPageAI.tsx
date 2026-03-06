/* eslint-disable */
// src/feature-module/components/ai/NotificationPageAI.tsx
// AI-Enhanced Notification Page for Symplify Platform

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  fetchNotifications, 
  markAsRead,
  markAllAsRead,
  dismissNotification,
  acknowledgeNotification
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

// WCAG AAA-compliant criticality colors (darkened for 7:1 contrast)
const CRITICALITY_COLORS: Record<NotificationCriticality, { text: string; bg: string; border: string }> = {
  critical: { text: '#991B1B', bg: 'rgba(153,27,27,0.06)', border: '#DC2626' },
  high:     { text: '#92400E', bg: 'rgba(146,64,14,0.06)', border: '#F97316' },
  medium:   { text: '#854D0E', bg: 'rgba(133,77,14,0.05)', border: '#EAB308' },
  low:      { text: '#166534', bg: 'rgba(22,101,52,0.05)', border: '#22C55E' },
  info:     { text: '#1E40AF', bg: 'rgba(30,64,175,0.05)', border: '#3B82F6' }
};

// Badge shape differentiator for color-blind accessibility
const CRITICALITY_SHAPE: Record<NotificationCriticality, string> = {
  critical: 'ti-alert-octagon',   // octagon = stop/danger
  high:     'ti-alert-triangle',  // triangle = warning
  medium:   'ti-info-circle',     // circle = info
  low:      'ti-circle-check',    // check = ok
  info:     'ti-info-square',     // square = info
};

// Standardized action model per severity tier
const SEVERITY_ACTIONS: Record<NotificationCriticality, { id: string; label: string; icon: string; style: string; type: string }[]> = {
  critical: [
    { id: 'escalate', label: 'Escalate', icon: 'ti-send', style: 'btn-action-danger', type: 'navigate' },
    { id: 'acknowledge', label: 'Acknowledge', icon: 'ti-check', style: 'btn-action-primary', type: 'acknowledge' },
  ],
  high: [
    { id: 'review', label: 'Review', icon: 'ti-eye', style: 'btn-action-warning', type: 'navigate' },
    { id: 'acknowledge', label: 'Acknowledge', icon: 'ti-check', style: 'btn-action-primary', type: 'acknowledge' },
  ],
  medium: [
    { id: 'review', label: 'Review', icon: 'ti-eye', style: 'btn-action-outline', type: 'navigate' },
    { id: 'dismiss', label: 'Dismiss', icon: 'ti-x', style: 'btn-action-muted', type: 'dismiss' },
  ],
  low: [
    { id: 'dismiss', label: 'Dismiss', icon: 'ti-x', style: 'btn-action-muted', type: 'dismiss' },
  ],
  info: [
    { id: 'dismiss', label: 'Dismiss', icon: 'ti-x', style: 'btn-action-muted', type: 'dismiss' },
  ],
};

// Category display order (most urgent first)
const CATEGORY_ORDER: NotificationCategory[] = [
  'clinical-emergency',
  'clinical-urgent',
  'clinical-routine',
  'administrative-urgent',
  'administrative-routine',
  'system',
  'communication',
];

// Filter options with text labels
const FILTER_OPTIONS = [
  { key: 'all',      label: 'All',       icon: 'ti-bell' },
  { key: 'critical', label: 'Critical',  icon: 'ti-alert-octagon' },
  { key: 'high',     label: 'High',      icon: 'ti-alert-triangle' },
  { key: 'unread',   label: 'Unread',    icon: 'ti-mail' },
] as const;

type FilterKey = typeof FILTER_OPTIONS[number]['key'];

export const NotificationPageAI: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { notifications, unreadCount, criticalCount, loading } = useSelector(
    (state: RootState) => state.notifications
  );
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(['clinical-emergency', 'clinical-urgent'])
  );
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [confirmingAck, setConfirmingAck] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  // Apply filters
  const filteredNotifications = useMemo(() => {
    let result = notifications;

    if (activeFilter === 'critical') {
      result = result.filter(n => n.criticality === 'critical');
    } else if (activeFilter === 'high') {
      result = result.filter(n => n.criticality === 'critical' || n.criticality === 'high');
    } else if (activeFilter === 'unread') {
      result = result.filter(n => !n.read);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(n =>
        n.title.toLowerCase().includes(q) ||
        n.message.toLowerCase().includes(q) ||
        n.source.name.toLowerCase().includes(q) ||
        (n.relatedPatientName && n.relatedPatientName.toLowerCase().includes(q))
      );
    }

    return result;
  }, [notifications, activeFilter, searchQuery]);

  // Group notifications by category
  const groupedByCategory = useMemo(() => {
    const groups: Record<string, AnalyzedNotification[]> = {};
    filteredNotifications.forEach(notification => {
      if (!groups[notification.category]) {
        groups[notification.category] = [];
      }
      groups[notification.category].push(notification);
    });
    return groups;
  }, [filteredNotifications]);

  // Full counts (unfiltered) for collapsed section badges
  const fullCategoryCounts = useMemo(() => {
    const counts: Record<string, { total: number; unread: number }> = {};
    CATEGORY_ORDER.forEach(cat => {
      counts[cat] = { total: 0, unread: 0 };
    });
    notifications.forEach(n => {
      if (!counts[n.category]) counts[n.category] = { total: 0, unread: 0 };
      counts[n.category].total++;
      if (!n.read) counts[n.category].unread++;
    });
    return counts;
  }, [notifications]);

  // Statistics
  const stats = useMemo(() => ({
    total: notifications.length,
    unread: unreadCount,
    critical: criticalCount,
    high: notifications.filter(n => n.criticality === 'high' && !n.read).length
  }), [notifications, unreadCount, criticalCount]);

  // Filter counts
  const filterCounts = useMemo(() => ({
    all: notifications.length,
    critical: notifications.filter(n => n.criticality === 'critical').length,
    high: notifications.filter(n => n.criticality === 'critical' || n.criticality === 'high').length,
    unread: unreadCount,
  }), [notifications, unreadCount]);

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

  const handleAction = useCallback((notification: AnalyzedNotification, actionType: string) => {
    if (actionType === 'dismiss') {
      dispatch(dismissNotification(notification.id));
    } else if (actionType === 'acknowledge') {
      // Confirmation step for critical alerts
      if (notification.criticality === 'critical') {
        setConfirmingAck(notification.id);
      } else {
        dispatch(acknowledgeNotification(notification.id));
      }
    } else if (actionType === 'navigate') {
      dispatch(markAsRead(notification.id));
    }
  }, [dispatch]);

  const confirmAcknowledge = useCallback((notifId: string) => {
    dispatch(acknowledgeNotification(notifId));
    setConfirmingAck(null);
  }, [dispatch]);

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);

    // Threshold: >24h switches to absolute date/time (clinical accuracy)
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return date.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const toggleCardExpand = (notifId: string) => {
    setExpandedCard(prev => prev === notifId ? null : notifId);
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
        {/* Header bar with search and mark-all-read */}
        <div className="notif-page-header">
          <div className="notif-search-bar">
            <i className="ti ti-search" />
            <input
              type="text"
              placeholder="Search notifications by title, patient, or source..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              aria-label="Search notifications"
            />
          </div>
          <button
            className="btn-mark-all-read"
            onClick={() => handleMarkAllRead()}
            aria-label="Mark all notifications as read"
          >
            <i className="ti ti-checks" />
            <span>Mark All Read</span>
          </button>
        </div>

        {/* Filter pills with text labels */}
        <div className="notif-filters" role="tablist" aria-label="Notification filters">
          {FILTER_OPTIONS.map(opt => (
            <button
              key={opt.key}
              role="tab"
              aria-selected={activeFilter === opt.key}
              className={`filter-pill ${activeFilter === opt.key ? 'active' : ''} ${opt.key === 'critical' ? 'filter-critical' : ''} ${opt.key === 'high' ? 'filter-high' : ''}`}
              onClick={() => setActiveFilter(opt.key)}
            >
              <i className={`ti ${opt.icon}`} />
              <span className="filter-label">{opt.label}</span>
              <span className="filter-count">{filterCounts[opt.key]}</span>
            </button>
          ))}
        </div>

        {/* Notification groups */}
        {filteredNotifications.length === 0 ? (
          <div className="card">
            <div className="card-body text-center py-5">
              <i className="ti ti-bell-off fs-1 text-muted mb-3 d-block" />
              <p className="text-muted mb-0">
                {searchQuery ? 'No notifications match your search' : 'No notifications'}
              </p>
            </div>
          </div>
        ) : (
          <div className="notification-groups">
            {CATEGORY_ORDER.map(category => {
              const items = groupedByCategory[category];
              const catCounts = fullCategoryCounts[category];
              const categoryConfig = CATEGORY_LABELS[category];
              const isExpanded = expandedCategories.has(category);
              const unreadInCategory = catCounts?.unread || 0;
              const totalInCategory = catCounts?.total || 0;

              // Show section even if empty (with count badge showing 0)
              // But hide if filter is active and no items match
              if (!items && activeFilter !== 'all') return null;

              return (
                <div key={category} className={`notif-section ${!items ? 'empty-section' : ''}`}>
                  <div
                    className="section-header"
                    onClick={() => toggleCategory(category)}
                    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleCategory(category); } }}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    aria-label={`${categoryConfig.label} — ${totalInCategory} alerts, ${unreadInCategory} unread`}
                  >
                    <div className="section-title">
                      <i className={`ti ${categoryConfig.icon}`} />
                      <span>{categoryConfig.label}</span>
                    </div>
                    <div className="section-meta">
                      <span className="section-count-badge" aria-label={`${totalInCategory} total`}>
                        {totalInCategory}
                      </span>
                      {unreadInCategory > 0 && (
                        <span className="section-unread-badge" aria-label={`${unreadInCategory} unread`}>
                          {unreadInCategory} unread
                        </span>
                      )}
                      <button
                        className="section-action-btn"
                        title="Mark all in section as read"
                        aria-label={`Mark all ${categoryConfig.label} as read`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMarkAllRead(category);
                        }}
                      >
                        <i className="ti ti-checks" />
                      </button>
                      <i className={`ti ti-chevron-${isExpanded ? 'up' : 'down'} section-chevron`} />
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="section-body">
                      {!items || items.length === 0 ? (
                        <div className="section-empty-state">
                          <i className="ti ti-check-circle" />
                          <span>No active alerts in this category</span>
                        </div>
                      ) : (
                        items.map(notification => {
                          const colors = CRITICALITY_COLORS[notification.criticality];
                          const shapeIcon = CRITICALITY_SHAPE[notification.criticality];
                          const isCardExpanded = expandedCard === notification.id;
                          const actions = SEVERITY_ACTIONS[notification.criticality];

                          return (
                            <div
                              key={notification.id}
                              className={`notif-card ${notification.read ? 'read' : 'unread'} severity-${notification.criticality} ${isCardExpanded ? 'expanded' : ''}`}
                              style={{
                                borderLeftColor: colors.border,
                                backgroundColor: notification.read ? undefined : colors.bg,
                              }}
                              onClick={() => {
                                toggleCardExpand(notification.id);
                                if (!notification.read) dispatch(markAsRead(notification.id));
                              }}
                              onKeyDown={e => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  toggleCardExpand(notification.id);
                                  if (!notification.read) dispatch(markAsRead(notification.id));
                                }
                              }}
                              role="button"
                              tabIndex={0}
                              aria-expanded={isCardExpanded}
                              aria-label={`${notification.criticality} alert: ${notification.title}`}
                            >
                              {/* Card header row */}
                              <div className="notif-card-header">
                                <h6 className="notif-card-title">{notification.title}</h6>
                                <span
                                  className={`criticality-tag severity-${notification.criticality}`}
                                  style={{ color: colors.text }}
                                >
                                  <i className={`ti ${shapeIcon}`} />
                                  {notification.criticality.toUpperCase()}
                                </span>
                              </div>

                              {/* Card body */}
                              <p className="notif-card-message">{notification.message}</p>

                              {/* Meta row */}
                              <div className="notif-card-meta">
                                <span className="notif-source">
                                  <i className="ti ti-user" />
                                  {notification.source.name}
                                  {notification.source.department && (
                                    <span className="notif-dept"> · {notification.source.department}</span>
                                  )}
                                </span>
                                <span className="notif-time">{formatTime(notification.timestamp)}</span>
                              </div>

                              {/* Action buttons with text labels */}
                              <div className="notif-card-actions" onClick={e => e.stopPropagation()}>
                                {actions.map(action => (
                                  <button
                                    key={action.id}
                                    className={`notif-action-btn ${action.style}`}
                                    onClick={() => handleAction(notification, action.type)}
                                    aria-label={action.label}
                                  >
                                    <i className={`ti ${action.icon}`} />
                                    <span>{action.label}</span>
                                  </button>
                                ))}
                              </div>

                              {/* Expanded detail panel */}
                              {isCardExpanded && (
                                <div className="notif-card-detail">
                                  <div className="detail-grid">
                                    <div className="detail-item">
                                      <span className="detail-label">Source</span>
                                      <span className="detail-value">
                                        {notification.source.name}
                                        {notification.source.department && ` (${notification.source.department})`}
                                      </span>
                                    </div>
                                    {notification.relatedPatientName && (
                                      <div className="detail-item">
                                        <span className="detail-label">Patient</span>
                                        <span className="detail-value">{notification.relatedPatientName}</span>
                                      </div>
                                    )}
                                    <div className="detail-item">
                                      <span className="detail-label">AI Confidence</span>
                                      <span className="detail-value">{notification.confidence}%</span>
                                    </div>
                                    <div className="detail-item">
                                      <span className="detail-label">Keywords</span>
                                      <span className="detail-value detail-keywords">
                                        {notification.keywords.length > 0
                                          ? notification.keywords.map(kw => (
                                              <span key={kw} className="keyword-chip">{kw}</span>
                                            ))
                                          : '—'}
                                      </span>
                                    </div>
                                    <div className="detail-item">
                                      <span className="detail-label">Requires Response</span>
                                      <span className="detail-value">
                                        {notification.requiresResponse ? 'Yes' : 'No'}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* Acknowledge confirmation modal for critical alerts */}
                              {confirmingAck === notification.id && (
                                <div className="ack-confirm-overlay" onClick={e => e.stopPropagation()}>
                                  <div className="ack-confirm-dialog">
                                    <p className="ack-confirm-msg">
                                      <i className="ti ti-alert-triangle" />
                                      Confirm acknowledgment of this <strong>CRITICAL</strong> alert?
                                    </p>
                                    <div className="ack-confirm-actions">
                                      <button
                                        className="btn-confirm-yes"
                                        onClick={() => confirmAcknowledge(notification.id)}
                                      >
                                        <i className="ti ti-check" />
                                        Confirm Acknowledge
                                      </button>
                                      <button
                                        className="btn-confirm-cancel"
                                        onClick={() => setConfirmingAck(null)}
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Action model legend */}
        <div className="action-legend">
          <h6 className="legend-title">
            <i className="ti ti-info-circle" />
            Action Guide by Severity
          </h6>
          <div className="legend-grid">
            <div className="legend-row">
              <span className="legend-severity severity-critical">
                <i className="ti ti-alert-octagon" /> Critical
              </span>
              <span className="legend-desc">Escalate + Acknowledge (with confirmation)</span>
            </div>
            <div className="legend-row">
              <span className="legend-severity severity-high">
                <i className="ti ti-alert-triangle" /> High
              </span>
              <span className="legend-desc">Review + Acknowledge</span>
            </div>
            <div className="legend-row">
              <span className="legend-severity severity-medium">
                <i className="ti ti-info-circle" /> Medium
              </span>
              <span className="legend-desc">Review + Dismiss</span>
            </div>
            <div className="legend-row">
              <span className="legend-severity severity-low">
                <i className="ti ti-circle-check" /> Low / Info
              </span>
              <span className="legend-desc">Dismiss</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPageAI;
