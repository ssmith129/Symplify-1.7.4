/* eslint-disable */
// src/feature-module/components/ai/NotificationDropdownAI.tsx
// AI-Enhanced Notification Dropdown for Symplify Platform
// Redesigned for continuity with the full Notifications page

import React, { useEffect, useMemo, useState, useRef, useCallback } from 'react';
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
  NotificationCriticality,
  NotificationCategory
} from '../../../core/ai/notificationTypes';
import { RootState, AppDispatch } from '../../../core/redux/store';
import { all_routes } from '../../routes/all_routes';

// Unified color tokens — same as full page (WCAG AAA)
const CRITICALITY_COLORS: Record<NotificationCriticality, { text: string; bg: string; border: string }> = {
  critical: { text: '#991B1B', bg: 'rgba(153,27,27,0.06)', border: '#DC2626' },
  high:     { text: '#92400E', bg: 'rgba(146,64,14,0.06)', border: '#F97316' },
  medium:   { text: '#854D0E', bg: 'rgba(133,77,14,0.05)', border: '#EAB308' },
  low:      { text: '#166534', bg: 'rgba(22,101,52,0.05)', border: '#22C55E' },
  info:     { text: '#1E40AF', bg: 'rgba(30,64,175,0.05)', border: '#3B82F6' },
};

// Unified shape icons for color-blind accessibility — matches full page
const CRITICALITY_SHAPE: Record<NotificationCriticality, string> = {
  critical: 'ti-alert-octagon',
  high:     'ti-alert-triangle',
  medium:   'ti-info-circle',
  low:      'ti-circle-check',
  info:     'ti-info-square',
};

// Unified section labels — matches full page ("Clinical Emergency", not "Critical Alerts")
const CATEGORY_LABELS: Record<NotificationCategory, { label: string; icon: string }> = {
  'clinical-emergency':      { label: 'Clinical Emergency', icon: 'ti-alert-octagon' },
  'clinical-urgent':         { label: 'Clinical Urgent',    icon: 'ti-alert-triangle' },
  'clinical-routine':        { label: 'Clinical Routine',   icon: 'ti-stethoscope' },
  'administrative-urgent':   { label: 'Admin Urgent',       icon: 'ti-file-alert' },
  'administrative-routine':  { label: 'Admin Routine',      icon: 'ti-file-text' },
  'system':                  { label: 'System',             icon: 'ti-settings' },
  'communication':           { label: 'Communication',      icon: 'ti-message' },
};

// Standardized action model per severity — identical to full page
const SEVERITY_ACTIONS: Record<NotificationCriticality, { id: string; label: string; icon: string; style: string; type: string }[]> = {
  critical: [
    { id: 'escalate',    label: 'Escalate',    icon: 'ti-send',  style: 'dd-action-danger',  type: 'navigate' },
    { id: 'acknowledge', label: 'Ack.',        icon: 'ti-check', style: 'dd-action-primary', type: 'acknowledge' },
  ],
  high: [
    { id: 'review',      label: 'Review',      icon: 'ti-eye',   style: 'dd-action-warning', type: 'navigate' },
    { id: 'acknowledge', label: 'Ack.',        icon: 'ti-check', style: 'dd-action-primary', type: 'acknowledge' },
  ],
  medium: [
    { id: 'review',  label: 'Review',  icon: 'ti-eye', style: 'dd-action-outline', type: 'navigate' },
    { id: 'dismiss', label: 'Dismiss', icon: 'ti-x',   style: 'dd-action-muted',   type: 'dismiss' },
  ],
  low: [
    { id: 'dismiss', label: 'Dismiss', icon: 'ti-x', style: 'dd-action-muted', type: 'dismiss' },
  ],
  info: [
    { id: 'dismiss', label: 'Dismiss', icon: 'ti-x', style: 'dd-action-muted', type: 'dismiss' },
  ],
};

// Dropdown filter tabs
const DD_FILTERS = [
  { key: 'critical', label: 'Critical', icon: 'ti-alert-octagon' },
  { key: 'all',      label: 'All',      icon: 'ti-bell' },
] as const;
type DDFilterKey = typeof DD_FILTERS[number]['key'];

// Format relative time with >24h threshold (matches full page)
const formatTimeAgo = (timestamp: string): string => {
  const date = new Date(timestamp);
  const diffMs = Date.now() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  return date.toLocaleDateString(undefined, {
    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
  });
};

// Max cards shown in dropdown before "View all N →"
const MAX_DROPDOWN_CARDS = 4;

/* ------------------------------------------------------------------ */
/*  Dropdown Card                                                      */
/* ------------------------------------------------------------------ */
interface DropdownCardProps {
  notification: AnalyzedNotification;
  onAction: (notification: AnalyzedNotification, type: string) => void;
  onRead: (id: string) => void;
}

const DropdownCard: React.FC<DropdownCardProps> = ({ notification, onAction, onRead }) => {
  const colors = CRITICALITY_COLORS[notification.criticality];
  const shapeIcon = CRITICALITY_SHAPE[notification.criticality];
  const actions = SEVERITY_ACTIONS[notification.criticality];

  return (
    <div
      className={`dd-notif-card ${notification.read ? 'read' : 'unread'} severity-${notification.criticality}`}
      style={{ borderLeftColor: colors.border, backgroundColor: notification.read ? undefined : colors.bg }}
      onClick={() => onRead(notification.id)}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onRead(notification.id); } }}
      role="button"
      tabIndex={0}
      aria-label={`${notification.criticality} alert: ${notification.title}`}
    >
      {/* Header */}
      <div className="dd-card-header">
        <span className="dd-card-title">{notification.title}</span>
        <span className={`dd-criticality-tag severity-${notification.criticality}`} style={{ color: colors.text }}>
          <i className={`ti ${shapeIcon}`} />
          {notification.criticality.toUpperCase()}
        </span>
      </div>

      {/* Message */}
      <p className="dd-card-message">{notification.message}</p>

      {/* Meta — includes department (Rec 9) */}
      <div className="dd-card-meta">
        <span className="dd-source">
          <i className="ti ti-user" />
          {notification.source.name}
          {notification.source.department && (
            <span className="dd-dept"> · {notification.source.department}</span>
          )}
        </span>
        <span className="dd-time">{formatTimeAgo(notification.timestamp)}</span>
      </div>

      {/* Labeled action buttons — matches full page vocabulary (Rec 1, 8) */}
      {!notification.read && (
        <div className="dd-card-actions" onClick={e => e.stopPropagation()}>
          {actions.map(action => (
            <button
              key={action.id}
              className={`dd-action-btn ${action.style}`}
              onClick={() => onAction(notification, action.type)}
              aria-label={action.label}
            >
              <i className={`ti ${action.icon}`} />
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main Dropdown Component                                            */
/* ------------------------------------------------------------------ */
export const NotificationDropdownAI: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { notifications, unreadCount, criticalCount, loading } = useSelector(
    (state: RootState) => state.notifications
  );
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<DDFilterKey>('critical');
  const [confirmingAck, setConfirmingAck] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(fetchNotifications());
    const interval = setInterval(() => dispatch(fetchNotifications()), 30000);
    return () => clearInterval(interval);
  }, [dispatch]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setConfirmingAck(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Group by category (matches full page structure)
  const groupedByCategory = useMemo(() => {
    const groups: Partial<Record<NotificationCategory, AnalyzedNotification[]>> = {};
    notifications.forEach(n => {
      if (!groups[n.category]) groups[n.category] = [];
      groups[n.category]!.push(n);
    });
    return groups;
  }, [notifications]);

  // Filtered list for dropdown display
  const filteredNotifications = useMemo(() => {
    if (activeFilter === 'critical') {
      return notifications.filter(n => n.criticality === 'critical' || n.criticality === 'high');
    }
    return notifications;
  }, [notifications, activeFilter]);

  // Filter counts
  const filterCounts = useMemo(() => ({
    critical: notifications.filter(n => n.criticality === 'critical' || n.criticality === 'high').length,
    all: notifications.length,
  }), [notifications]);

  const handleRead = useCallback((id: string) => dispatch(markAsRead(id)), [dispatch]);

  const handleAction = useCallback((notification: AnalyzedNotification, actionType: string) => {
    if (actionType === 'dismiss') {
      dispatch(dismissNotification(notification.id));
    } else if (actionType === 'acknowledge') {
      if (notification.criticality === 'critical') {
        setConfirmingAck(notification.id);
      } else {
        dispatch(acknowledgeNotification(notification.id));
      }
    } else if (actionType === 'navigate') {
      dispatch(markAsRead(notification.id));
    }
  }, [dispatch]);

  const confirmAcknowledge = useCallback((id: string) => {
    dispatch(acknowledgeNotification(id));
    setConfirmingAck(null);
  }, [dispatch]);

  const visibleCards = filteredNotifications.slice(0, MAX_DROPDOWN_CARDS);
  const remainingCount = filteredNotifications.length - visibleCards.length;

  return (
    <div className="header-item" ref={dropdownRef}>
      <div className="dropdown me-3">
        <button
          className={`topbar-link btn btn-icon topbar-link dropdown-toggle drop-arrow-none notification-trigger ${criticalCount > 0 ? 'pulse-badge' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-label={`Notifications: ${unreadCount} unread, ${criticalCount} critical`}
        >
          <i className="ti ti-bell-check fs-16 animate-ring" />
          {(criticalCount > 0 || unreadCount > 0) && (
            <span
              className={`notification-badge-count ${criticalCount > 0 ? 'pulse' : ''}`}
              style={{ backgroundColor: criticalCount > 0 ? '#DC2626' : '#6366F1' }}
            >
              {criticalCount > 0 ? criticalCount : unreadCount}
            </span>
          )}
        </button>

        {isOpen && (
          <div
            className="notification-dropdown-ai show"
            style={{ display: 'block', position: 'absolute', right: 0, top: '100%', marginTop: '8px', zIndex: 1050 }}
          >
            {/* ── Header with persistent View All link (Rec 5) ── */}
            <div className="dd-header">
              <div className="dd-header-left">
                <h6>
                  <i className="ti ti-bell" />
                  Notifications
                </h6>
                {unreadCount > 0 && (
                  <span className="dd-unread-badge">{unreadCount} unread</span>
                )}
              </div>
              <div className="dd-header-right">
                <button
                  className="dd-mark-read-btn"
                  onClick={() => dispatch(markAllAsRead())}
                  aria-label="Mark all as read"
                  title="Mark all as read"
                >
                  <i className="ti ti-checks" />
                </button>
                <Link
                  to={all_routes.notifications}
                  className="dd-view-all-header"
                  onClick={() => setIsOpen(false)}
                  aria-label="View all notifications"
                >
                  View All <i className="ti ti-arrow-right" />
                </Link>
              </div>
            </div>

            {/* ── Filter tabs in header (Rec 11) ── */}
            <div className="dd-filter-row" role="tablist" aria-label="Filter notifications">
              {DD_FILTERS.map(f => (
                <button
                  key={f.key}
                  role="tab"
                  aria-selected={activeFilter === f.key}
                  className={`dd-filter-tab ${activeFilter === f.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(f.key)}
                >
                  <i className={`ti ${f.icon}`} />
                  {f.label}
                  <span className="dd-filter-count">{filterCounts[f.key]}</span>
                </button>
              ))}
            </div>

            {/* ── Notification list ── */}
            {loading && notifications.length === 0 ? (
              <div className="dd-loading">
                <div className="spinner-border spinner-border-sm text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : notifications.length === 0 ? (
              <div className="dd-empty">
                <i className="ti ti-bell-off" />
                <p>No notifications</p>
              </div>
            ) : (
              <div className="dd-list">
                {visibleCards.map(notification => (
                  <div key={notification.id} className="dd-card-wrapper">
                    <DropdownCard
                      notification={notification}
                      onAction={handleAction}
                      onRead={handleRead}
                    />
                    {/* Acknowledge confirmation for critical */}
                    {confirmingAck === notification.id && (
                      <div className="dd-ack-overlay" onClick={e => e.stopPropagation()}>
                        <div className="dd-ack-dialog">
                          <p>
                            <i className="ti ti-alert-triangle" />
                            Confirm acknowledgment of this <strong>CRITICAL</strong> alert?
                          </p>
                          <div className="dd-ack-btns">
                            <button className="dd-ack-yes" onClick={() => confirmAcknowledge(notification.id)}>
                              <i className="ti ti-check" /> Confirm
                            </button>
                            <button className="dd-ack-cancel" onClick={() => setConfirmingAck(null)}>
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* ── Footer with remaining count (Rec 12) ── */}
            <div className="dd-footer">
              <Link
                to={all_routes.notifications}
                className="dd-view-all-footer"
                onClick={() => setIsOpen(false)}
              >
                {remainingCount > 0
                  ? `View all ${filteredNotifications.length} notifications →`
                  : 'Open Notification Center →'}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationDropdownAI;
