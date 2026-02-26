/* eslint-disable */
// src/feature-module/components/ai/NotificationDropdownAI.tsx
// AI-Enhanced Notification Dropdown for Symplify Platform

import React, { useEffect, useMemo, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  fetchNotifications, 
  markAsRead, 
  dismissNotification,
  acknowledgeNotification 
} from '../../../core/redux/notificationSlice';
import { 
  AnalyzedNotification, 
  NotificationCriticality 
} from '../../../core/ai/notificationTypes';
import { RootState, AppDispatch } from '../../../core/redux/store';
import { all_routes } from '../../routes/all_routes';

interface CriticalityConfig {
  color: string;
  bgColor: string;
  icon: string;
  label: string;
  pulse: boolean;
}

const CRITICALITY_CONFIG: Record<NotificationCriticality, CriticalityConfig> = {
  critical: {
    color: '#DC2626',
    bgColor: '#FEE2E2',
    icon: 'ti-alert-octagon',
    label: 'Critical',
    pulse: true
  },
  high: {
    color: '#F97316',
    bgColor: '#FFEDD5',
    icon: 'ti-alert-triangle',
    label: 'High',
    pulse: false
  },
  medium: {
    color: '#EAB308',
    bgColor: '#FEF9C3',
    icon: 'ti-alert-circle',
    label: 'Medium',
    pulse: false
  },
  low: {
    color: '#22C55E',
    bgColor: '#DCFCE7',
    icon: 'ti-info-circle',
    label: 'Low',
    pulse: false
  },
  info: {
    color: '#3B82F6',
    bgColor: '#DBEAFE',
    icon: 'ti-bell',
    label: 'Info',
    pulse: false
  }
};

// Format relative time
const formatTimeAgo = (timestamp: string): string => {
  const minutes = Math.floor((Date.now() - new Date(timestamp).getTime()) / 60000);
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
};

interface NotificationItemProps {
  notification: AnalyzedNotification;
  onRead: (id: string) => void;
  onDismiss: (id: string) => void;
  onAcknowledge: (id: string) => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onRead,
  onDismiss,
  onAcknowledge
}) => {
  const config = CRITICALITY_CONFIG[notification.criticality];
  
  return (
    <div 
      className={`notification-item ${notification.read ? 'read' : 'unread'} ${config.pulse && !notification.read ? 'pulse' : ''}`}
      style={{ borderLeftColor: config.color }}
      onClick={() => onRead(notification.id)}
    >
      <div className="notification-indicator" style={{ backgroundColor: config.color }}>
        <i className={`ti ${config.icon}`} />
      </div>
      
      <div className="notification-content">
        <div className="notification-header">
          <span className="notification-title">{notification.title}</span>
          <span 
            className="criticality-badge"
            style={{ backgroundColor: config.bgColor, color: config.color }}
          >
            {config.label}
          </span>
        </div>
        
        <p className="notification-message">{notification.message}</p>
        
        <div className="notification-meta">
          <span className="notification-source">
            <i className="ti ti-user me-1" />
            {notification.source.name}
          </span>
          <span className="notification-time">
            {formatTimeAgo(notification.timestamp)}
          </span>
        </div>
        
        {notification.criticality === 'critical' && !notification.read && (
          <div className="notification-actions">
            <button 
              className="btn btn-danger btn-sm"
              onClick={(e) => {
                e.stopPropagation();
                onAcknowledge(notification.id);
              }}
            >
              <i className="ti ti-check" />
            </button>
            {notification.relatedPatientId && (
              <Link
                to={`/patients`}
                onClick={(e) => e.stopPropagation()}
                className="btn btn-outline-secondary btn-sm btn-icon-touch"
                title="View Patient"
              >
                <i className="ti ti-eye" />
              </Link>
            )}
          </div>
        )}
      </div>
      
      <button 
        className="notification-dismiss"
        title="Dismiss"
        onClick={(e) => {
          e.stopPropagation();
          onDismiss(notification.id);
        }}
      >
        <i className="ti ti-x" />
      </button>
    </div>
  );
};

export const NotificationDropdownAI: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { notifications, unreadCount, criticalCount, loading } = useSelector(
    (state: RootState) => state.notifications
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(fetchNotifications());
    
    // Poll for new notifications every 30 seconds
    const interval = setInterval(() => {
      dispatch(fetchNotifications());
    }, 30000);
    
    return () => clearInterval(interval);
  }, [dispatch]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Group notifications by criticality
  const groupedNotifications = useMemo(() => {
    const critical = notifications.filter(n => n.criticality === 'critical' && !n.read);
    const others = notifications.filter(n => n.criticality !== 'critical' || n.read);
    return { critical, others };
  }, [notifications]);

  const handleRead = (id: string) => dispatch(markAsRead(id));
  const handleDismiss = (id: string) => dispatch(dismissNotification(id));
  const handleAcknowledge = (id: string) => dispatch(acknowledgeNotification(id));

  return (
    <div className="header-item" ref={dropdownRef}>
      <div className="dropdown me-3">
        <button
          className={`topbar-link btn btn-icon topbar-link dropdown-toggle drop-arrow-none notification-trigger ${criticalCount > 0 ? 'pulse-badge' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-haspopup="true"
          aria-expanded={isOpen}
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
          <div className="notification-dropdown-ai show" style={{ display: 'block', position: 'absolute', right: 0, top: '100%', marginTop: '8px', zIndex: 1050 }}>
            <div className="notification-dropdown-header">
              <h6>
                <i className="ti ti-bell me-2" />
                AI Notifications
              </h6>
              {unreadCount > 0 && (
                <span className="badge bg-primary">{unreadCount} unread</span>
              )}
            </div>

            {loading && notifications.length === 0 ? (
              <div className="notification-loading">
                <div className="spinner-border spinner-border-sm text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : notifications.length === 0 ? (
              <div className="notification-empty">
                <i className="ti ti-bell-off d-block mb-2" />
                <p className="mb-0">No notifications</p>
              </div>
            ) : (
              <div className="notification-list">
                {/* Critical Section */}
                {groupedNotifications.critical.length > 0 && (
                  <div className="notification-section critical-section">
                    <div className="section-header">
                      <i className="ti ti-alert-octagon me-1" />
                      Critical Alerts ({groupedNotifications.critical.length})
                    </div>
                    {groupedNotifications.critical.map(notification => (
                      <NotificationItem
                        key={notification.id}
                        notification={notification}
                        onRead={handleRead}
                        onDismiss={handleDismiss}
                        onAcknowledge={handleAcknowledge}
                      />
                    ))}
                  </div>
                )}

                {/* Other Notifications */}
                {groupedNotifications.others.slice(0, 5).map(notification => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                    onRead={handleRead}
                    onDismiss={handleDismiss}
                    onAcknowledge={handleAcknowledge}
                  />
                ))}
              </div>
            )}

            <div className="notification-dropdown-footer">
              <Link to={all_routes.notifications} className="view-all-link" onClick={() => setIsOpen(false)}>
                View All Notifications
                <i className="ti ti-arrow-right ms-1" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationDropdownAI;
