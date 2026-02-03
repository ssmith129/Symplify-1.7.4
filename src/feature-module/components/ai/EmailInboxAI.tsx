/* eslint-disable */
// src/feature-module/components/ai/EmailInboxAI.tsx
// AI-Enhanced Email Inbox for Symplify Platform

import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router';
import { 
  fetchEmails,
  markAsRead,
  markAsUnread,
  toggleStar,
  deleteEmail,
  archiveEmail,
  setActiveFolder,
  selectEmail,
  setFilters,
  setSortBy,
  markAllAsRead,
  selectFilteredEmails,
  selectSelectedEmail,
  EmailWithFolders
} from '../../../core/redux/emailSlice';
import { EmailFolder, EmailPriority } from '../../../core/ai/emailTypes';
import { RootState, AppDispatch } from '../../../core/redux/store';
import EmailPriorityBadge from './EmailPriorityBadge';
import EmailSidebarAI from './EmailSidebarAI';

// Format relative time
const formatTimeAgo = (timestamp: string): string => {
  const minutes = Math.floor((Date.now() - new Date(timestamp).getTime()) / 60000);
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(timestamp).toLocaleDateString();
};

// Priority color classes
const PRIORITY_CLASSES: Record<EmailPriority, string> = {
  critical: 'border-danger',
  high: 'border-warning',
  medium: 'border-info',
  low: 'border-success'
};

interface EmailListItemProps {
  email: EmailWithFolders;
  isSelected: boolean;
  onSelect: () => void;
  onRead: () => void;
  onToggleStar: () => void;
  onDelete: () => void;
  onArchive: () => void;
}

const EmailListItem: React.FC<EmailListItemProps> = ({
  email,
  isSelected,
  onSelect,
  onRead,
  onToggleStar,
  onDelete,
  onArchive
}) => {
  const priorityClass = PRIORITY_CLASSES[email.analysis.priority];
  
  return (
    <div 
      className={`email-list-item ${!email.read ? 'unread' : ''} ${isSelected ? 'selected' : ''} ${priorityClass}`}
      onClick={() => { onSelect(); onRead(); }}
    >
      <div className="email-item-checkbox">
        <input 
          type="checkbox" 
          className="form-check-input"
          checked={isSelected}
          onChange={onSelect}
          onClick={e => e.stopPropagation()}
        />
      </div>
      
      <div className="email-item-star">
        <button 
          className={`btn btn-icon btn-sm ${email.starred ? 'text-warning' : 'text-muted'}`}
          onClick={e => { e.stopPropagation(); onToggleStar(); }}
        >
          <i className={`ti ti-star${email.starred ? '-filled' : ''}`} />
        </button>
      </div>
      
      <div className="email-item-priority">
        <EmailPriorityBadge analysis={email.analysis} showLabel={false} />
      </div>
      
      <div className="email-item-sender">
        <div className="sender-avatar">
          {email.sender.name.charAt(0).toUpperCase()}
        </div>
        <div className="sender-info">
          <span className={`sender-name ${!email.read ? 'fw-bold' : ''}`}>
            {email.sender.name}
          </span>
          {email.sender.isInternal && (
            <span className="badge badge-soft-primary badge-xs ms-1">Internal</span>
          )}
        </div>
      </div>
      
      <div className="email-item-content">
        <span className={`email-subject ${!email.read ? 'fw-bold' : ''}`}>
          {email.subject}
        </span>
        <span className="email-preview">{email.preview}</span>
      </div>
      
      <div className="email-item-meta">
        {email.hasAttachments && (
          <i className="ti ti-paperclip text-muted me-2" />
        )}
        {email.analysis.requiresAction && (
          <span className="badge badge-soft-danger badge-xs me-2">Action Required</span>
        )}
        <span className="email-time">{formatTimeAgo(email.timestamp)}</span>
      </div>
      
      <div className="email-item-actions">
        <button 
          className="btn btn-icon btn-sm"
          onClick={e => { e.stopPropagation(); onArchive(); }}
          title="Archive"
        >
          <i className="ti ti-archive" />
        </button>
        <button 
          className="btn btn-icon btn-sm text-danger"
          onClick={e => { e.stopPropagation(); onDelete(); }}
          title="Delete"
        >
          <i className="ti ti-trash" />
        </button>
      </div>
    </div>
  );
};

interface EmailDetailProps {
  email: EmailWithFolders | null;
  onClose: () => void;
  onReply: () => void;
  onForward: () => void;
}

const EmailDetail: React.FC<EmailDetailProps> = ({
  email,
  onClose,
  onReply,
  onForward
}) => {
  if (!email) {
    return (
      <div className="email-detail-empty">
        <i className="ti ti-mail-opened fs-1 text-muted" />
        <p className="text-muted mt-3">Select an email to view</p>
      </div>
    );
  }
  
  return (
    <div className="email-detail">
      <div className="email-detail-header">
        <button className="btn btn-icon btn-sm" onClick={onClose}>
          <i className="ti ti-x" />
        </button>
        <div className="email-detail-actions">
          <button className="btn btn-sm btn-outline-primary" onClick={onReply}>
            <i className="ti ti-arrow-back-up me-1" />
            Reply
          </button>
          <button className="btn btn-sm btn-outline-secondary" onClick={onForward}>
            <i className="ti ti-arrow-forward-up me-1" />
            Forward
          </button>
        </div>
      </div>
      
      <div className="email-detail-content">
        <div className="email-detail-priority-bar">
          <EmailPriorityBadge analysis={email.analysis} showDetails />
          <span className="ms-3 text-muted">
            Response Time: {email.analysis.estimatedResponseTime}
          </span>
          {email.analysis.urgencyIndicators.length > 0 && (
            <div className="urgency-indicators ms-3">
              <small className="text-muted me-1">Detected:</small>
              {email.analysis.urgencyIndicators.map((indicator, idx) => (
                <span key={idx} className="badge badge-soft-warning badge-xs me-1">
                  {indicator}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <h5 className="email-subject mt-3">{email.subject}</h5>
        
        <div className="email-sender-info mt-3">
          <div className="sender-avatar-lg">
            {email.sender.name.charAt(0).toUpperCase()}
          </div>
          <div className="sender-details">
            <span className="sender-name fw-bold">{email.sender.name}</span>
            <span className="sender-email text-muted">{email.sender.email}</span>
            {email.sender.department && (
              <span className="sender-dept badge badge-soft-secondary badge-xs">
                {email.sender.department}
              </span>
            )}
          </div>
          <div className="email-timestamp">
            {new Date(email.timestamp).toLocaleString()}
          </div>
        </div>
        
        <div className="email-body mt-4">
          <p>{email.preview}</p>
          <p className="text-muted">
            [Full email content would appear here in production]
          </p>
        </div>
        
        {email.hasAttachments && (
          <div className="email-attachments mt-4">
            <h6>
              <i className="ti ti-paperclip me-1" />
              Attachments
            </h6>
            <div className="attachment-list">
              <div className="attachment-item">
                <i className="ti ti-file-text" />
                <span>document.pdf</span>
                <button className="btn btn-sm btn-link">Download</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const EmailInboxAI: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { activeFolder, folderCounts, loading, sortBy, filters } = useSelector(
    (state: RootState) => state.email
  );
  const filteredEmails = useSelector((state: { email: RootState['email'] }) => 
    selectFilteredEmails({ email: state.email })
  );
  const selectedEmail = useSelector((state: { email: RootState['email'] }) => 
    selectSelectedEmail({ email: state.email })
  );
  
  const [searchTerm, setSearchTerm] = useState('');
  const [showComposeModal, setShowComposeModal] = useState(false);
  
  useEffect(() => {
    dispatch(fetchEmails());
    
    // Poll for new emails every 60 seconds
    const interval = setInterval(() => {
      dispatch(fetchEmails());
    }, 60000);
    
    return () => clearInterval(interval);
  }, [dispatch]);
  
  // Handle search
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setFilters({ ...filters, search: searchTerm || undefined }));
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchTerm, dispatch]);
  
  const handleFolderChange = (folder: EmailFolder) => {
    dispatch(setActiveFolder(folder));
  };
  
  const handleSelectEmail = (emailId: string) => {
    dispatch(selectEmail(emailId));
  };
  
  const handleMarkAsRead = (emailId: string) => {
    dispatch(markAsRead(emailId));
  };
  
  const handleToggleStar = (emailId: string) => {
    dispatch(toggleStar(emailId));
  };
  
  const handleDeleteEmail = (emailId: string) => {
    dispatch(deleteEmail(emailId));
  };
  
  const handleArchiveEmail = (emailId: string) => {
    dispatch(archiveEmail(emailId));
  };
  
  const handleMarkAllAsRead = () => {
    dispatch(markAllAsRead(activeFolder));
  };
  
  const handleSortChange = (sort: 'priority' | 'date' | 'sender') => {
    dispatch(setSortBy(sort));
  };
  
  // Statistics
  const stats = useMemo(() => ({
    total: filteredEmails.length,
    unread: filteredEmails.filter(e => !e.read).length,
    critical: filteredEmails.filter(e => e.analysis.priority === 'critical' && !e.read).length,
    high: filteredEmails.filter(e => e.analysis.priority === 'high' && !e.read).length
  }), [filteredEmails]);
  
  return (
    <div className="page-wrapper">
      <div className="content content-two p-0">
        <div className="d-md-flex h-100">
          {/* AI Smart Sidebar */}
          <div className="email-sidebar-wrapper border-end">
            <div className="p-3">
              <button 
                className="btn btn-primary w-100 mb-3"
                onClick={() => setShowComposeModal(true)}
              >
                <i className="ti ti-edit me-2" />
                Compose
              </button>
              
              <EmailSidebarAI
                folderCounts={folderCounts}
                activeFolder={activeFolder}
                onFolderChange={handleFolderChange}
              />
            </div>
          </div>
          
          {/* Email List */}
          <div className="email-list-wrapper flex-fill">
            {/* Header */}
            <div className="email-list-header">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 p-3">
                <div>
                  <h5 className="mb-1 d-flex align-items-center">
                    <i className="ti ti-sparkles text-warning me-2" />
                    AI-Enhanced Inbox
                  </h5>
                  <div className="d-flex align-items-center gap-2 text-muted">
                    <span>{stats.total} emails</span>
                    <span>•</span>
                    <span>{stats.unread} unread</span>
                    {stats.critical > 0 && (
                      <>
                        <span>•</span>
                        <span className="text-danger fw-bold">
                          {stats.critical} critical
                        </span>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="d-flex align-items-center gap-2">
                  <div className="position-relative input-icon">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Search emails..."
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                      style={{ width: '200px' }}
                    />
                    <span className="input-icon-addon">
                      <i className="ti ti-search" />
                    </span>
                  </div>
                  
                  <div className="dropdown">
                    <button 
                      className="btn btn-sm btn-outline-secondary dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-sort-ascending me-1" />
                      Sort
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <button 
                          className={`dropdown-item ${sortBy === 'priority' ? 'active' : ''}`}
                          onClick={() => handleSortChange('priority')}
                        >
                          <i className="ti ti-alert-triangle me-2" />
                          By Priority
                        </button>
                      </li>
                      <li>
                        <button 
                          className={`dropdown-item ${sortBy === 'date' ? 'active' : ''}`}
                          onClick={() => handleSortChange('date')}
                        >
                          <i className="ti ti-calendar me-2" />
                          By Date
                        </button>
                      </li>
                      <li>
                        <button 
                          className={`dropdown-item ${sortBy === 'sender' ? 'active' : ''}`}
                          onClick={() => handleSortChange('sender')}
                        >
                          <i className="ti ti-user me-2" />
                          By Sender
                        </button>
                      </li>
                    </ul>
                  </div>
                  
                  <button 
                    className="btn btn-sm btn-outline-secondary"
                    onClick={handleMarkAllAsRead}
                    title="Mark all as read"
                  >
                    <i className="ti ti-mail-opened" />
                  </button>
                  
                  <button 
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => dispatch(fetchEmails())}
                    title="Refresh"
                  >
                    <i className="ti ti-refresh" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Email List */}
            <div className="email-list-content">
              {loading && filteredEmails.length === 0 ? (
                <div className="d-flex justify-content-center align-items-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : filteredEmails.length === 0 ? (
                <div className="text-center py-5">
                  <i className="ti ti-inbox-off fs-1 text-muted" />
                  <p className="text-muted mt-3">No emails in this folder</p>
                </div>
              ) : (
                filteredEmails.map(email => (
                  <EmailListItem
                    key={email.id}
                    email={email}
                    isSelected={selectedEmail?.id === email.id}
                    onSelect={() => handleSelectEmail(email.id)}
                    onRead={() => handleMarkAsRead(email.id)}
                    onToggleStar={() => handleToggleStar(email.id)}
                    onDelete={() => handleDeleteEmail(email.id)}
                    onArchive={() => handleArchiveEmail(email.id)}
                  />
                ))
              )}
            </div>
          </div>
          
          {/* Email Detail */}
          <div className="email-detail-wrapper border-start">
            <EmailDetail
              email={selectedEmail}
              onClose={() => dispatch(selectEmail(null))}
              onReply={() => console.log('Reply')}
              onForward={() => console.log('Forward')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailInboxAI;
