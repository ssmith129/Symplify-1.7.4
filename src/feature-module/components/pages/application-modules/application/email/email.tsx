/* eslint-disable */
import { Link } from "react-router";
import { useState, useEffect, useMemo } from "react";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import { all_routes } from "../../../../../routes/all_routes";
import { EmailPriorityBadge, EmailSidebarAI } from "../../../../ai";
import { getMockEmails, categorizeEmail, getFolderCounts } from "../../../../../../core/api/mock/emailMockApi";
import { AnalyzedEmail, EmailFolder, EmailPriority } from "../../../../../../core/ai/emailTypes";

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

// Priority border colors
const PRIORITY_BORDERS: Record<EmailPriority, string> = {
  critical: '#DC2626',
  high: '#F97316',
  medium: '#EAB308',
  low: '#22C55E'
};

interface EmailWithFolders extends AnalyzedEmail {
  folders: EmailFolder[];
}

const Email = () => {
  const [emails, setEmails] = useState<EmailWithFolders[]>([]);
  const [activeFolder, setActiveFolder] = useState<EmailFolder>('inbox');
  const [selectedEmail, setSelectedEmail] = useState<EmailWithFolders | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Load emails on mount
  useEffect(() => {
    const loadEmails = () => {
      setLoading(true);
      const mockEmails = getMockEmails();
      const emailsWithFolders: EmailWithFolders[] = mockEmails.map(email => ({
        ...email,
        folders: categorizeEmail(email.subject, email.preview)
      }));
      
      // Sort by priority first, then by timestamp
      emailsWithFolders.sort((a, b) => {
        const priorityOrder: Record<EmailPriority, number> = { critical: 0, high: 1, medium: 2, low: 3 };
        const priorityDiff = priorityOrder[a.analysis.priority] - priorityOrder[b.analysis.priority];
        if (priorityDiff !== 0) return priorityDiff;
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      });
      
      setEmails(emailsWithFolders);
      setLoading(false);
    };
    
    loadEmails();
  }, []);

  // Calculate folder counts
  const folderCounts = useMemo(() => {
    return getFolderCounts(emails.map(e => ({ folders: e.folders, read: e.read })));
  }, [emails]);

  // Filter emails based on active folder and search
  const filteredEmails = useMemo(() => {
    let filtered = emails;
    
    // Filter by folder (inbox shows all)
    if (activeFolder !== 'inbox') {
      filtered = filtered.filter(email => email.folders.includes(activeFolder));
    }
    
    // Filter by search
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(email => 
        email.subject.toLowerCase().includes(search) ||
        email.preview.toLowerCase().includes(search) ||
        email.sender.name.toLowerCase().includes(search)
      );
    }
    
    return filtered;
  }, [emails, activeFolder, searchTerm]);

  // Statistics
  const stats = useMemo(() => ({
    total: filteredEmails.length,
    unread: filteredEmails.filter(e => !e.read).length,
    critical: filteredEmails.filter(e => e.analysis.priority === 'critical' && !e.read).length
  }), [filteredEmails]);

  const handleEmailClick = (email: EmailWithFolders) => {
    setSelectedEmail(email);
    // Mark as read
    setEmails(prev => prev.map(e => 
      e.id === email.id ? { ...e, read: true } : e
    ));
  };

  const handleToggleStar = (emailId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setEmails(prev => prev.map(email => 
      email.id === emailId ? { ...email, starred: !email.starred } : email
    ));
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content content-two p-0">
          <div className="d-md-flex" style={{ height: 'calc(100vh - 60px)' }}>
            {/* Sidebar */}
            <div className="email-sidebar border-end border-bottom" style={{ width: '280px', minWidth: '280px', overflowY: 'auto' }}>
              <div className="p-3">
                <div className="border bg-white rounded p-2 mb-3">
                  <div className="d-flex align-items-center">
                    <Link to="#" className="avatar avatar-md flex-shrink-0 me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-02.jpg"
                        className="rounded-circle"
                        alt="Img"
                      />
                    </Link>
                    <div>
                      <h6 className="mb-1 fs-16 fw-medium">
                        <Link to="#">James Hong</Link>
                      </h6>
                      <p className="fs-14">Jnh343@example.com</p>
                    </div>
                  </div>
                </div>
                
                <Link
                  to="#"
                  className="btn btn-primary w-100 mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#email-view"
                >
                  <i className="ti ti-edit me-2" />
                  Compose
                </Link>

                {/* AI Smart Folders */}
                <EmailSidebarAI
                  folderCounts={folderCounts}
                  activeFolder={activeFolder}
                  onFolderChange={setActiveFolder}
                />

                {/* Traditional Folders */}
                <div className="mt-4 pt-3 border-top">
                  <h6 className="mb-2 text-muted small">Standard Folders</h6>
                  <div className="d-block email-tags">
                    <Link to="#" className="d-flex align-items-center justify-content-between p-2 rounded">
                      <span className="d-flex align-items-center fw-medium">
                        <i className="ti ti-star text-gray me-2" />
                        Starred
                      </span>
                      <span className="fw-semibold fs-12">{emails.filter(e => e.starred).length}</span>
                    </Link>
                    <Link to="#" className="d-flex align-items-center justify-content-between p-2 rounded">
                      <span className="d-flex align-items-center fw-medium">
                        <i className="ti ti-rocket text-gray me-2" />
                        Sent
                      </span>
                      <span className="rounded-pill">14</span>
                    </Link>
                    <Link to="#" className="d-flex align-items-center justify-content-between p-2 rounded">
                      <span className="d-flex align-items-center fw-medium">
                        <i className="ti ti-file text-gray me-2" />
                        Drafts
                      </span>
                      <span className="rounded-pill">12</span>
                    </Link>
                    <Link to="#" className="d-flex align-items-center justify-content-between p-2 rounded">
                      <span className="d-flex align-items-center fw-medium">
                        <i className="ti ti-trash text-gray me-2" />
                        Deleted
                      </span>
                      <span className="rounded-pill">08</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Email List */}
            <div className="bg-white flex-fill border-end border-bottom" style={{ minWidth: '400px', maxWidth: '500px', overflowY: 'auto' }}>
              <div className="p-3 border-bottom bg-light">
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                  <div>
                    <h5 className="mb-1 d-flex align-items-center">
                      <i className="ti ti-sparkles text-warning me-2" />
                      AI-Enhanced Inbox
                    </h5>
                    <div className="d-flex align-items-center gap-2">
                      <span>{stats.total} Emails</span>
                      <span>•</span>
                      <span>{stats.unread} Unread</span>
                      {stats.critical > 0 && (
                        <>
                          <span>•</span>
                          <span className="text-danger fw-bold">{stats.critical} Critical</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="position-relative input-icon me-2">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Search Email"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <span className="input-icon-addon">
                        <i className="ti ti-search" />
                      </span>
                    </div>
                    <button className="btn btn-icon btn-sm rounded-circle" title="Refresh">
                      <i className="ti ti-refresh" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="list-group list-group-flush mails-list">
                {loading ? (
                  <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : filteredEmails.length === 0 ? (
                  <div className="text-center py-5">
                    <i className="ti ti-inbox-off fs-1 text-muted" />
                    <p className="text-muted mt-2">No emails in this folder</p>
                  </div>
                ) : (
                  filteredEmails.map(email => (
                    <div 
                      key={email.id}
                      className={`list-group-item border-bottom p-3 cursor-pointer ${selectedEmail?.id === email.id ? 'bg-light' : ''} ${!email.read ? 'bg-light-subtle' : ''}`}
                      style={{ 
                        borderLeft: `4px solid ${PRIORITY_BORDERS[email.analysis.priority]}`,
                        cursor: 'pointer'
                      }}
                      onClick={() => handleEmailClick(email)}
                    >
                      <div className="d-flex align-items-start mb-2">
                        <div className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                          <input 
                            className="form-check-input" 
                            type="checkbox" 
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                        <button 
                          className={`btn btn-icon btn-sm me-2 ${email.starred ? 'text-warning' : 'text-muted'}`}
                          onClick={(e) => handleToggleStar(email.id, e)}
                        >
                          <i className={`ti ti-star${email.starred ? '-filled' : ''}`} />
                        </button>
                        <EmailPriorityBadge analysis={email.analysis} showLabel={false} />
                        <div className="flex-fill ms-2">
                          <div className="d-flex align-items-start justify-content-between">
                            <div style={{ minWidth: 0 }}>
                              <h6 className={`mb-1 text-truncate ${!email.read ? 'fw-bold' : ''}`}>
                                {email.sender.name}
                                {email.sender.isInternal && (
                                  <span className="badge badge-soft-primary badge-xs ms-1">Internal</span>
                                )}
                              </h6>
                              <span className={`d-block text-truncate ${!email.read ? 'fw-semibold' : ''}`} style={{ maxWidth: '250px' }}>
                                {email.subject}
                              </span>
                            </div>
                            <div className="d-flex align-items-center flex-shrink-0 ms-2">
                              <span className="small text-muted">{formatTimeAgo(email.timestamp)}</span>
                            </div>
                          </div>
                          <p className="text-muted small mb-0 text-truncate" style={{ maxWidth: '280px' }}>
                            {email.preview}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between ps-5">
                        <div className="d-flex align-items-center gap-2">
                          {email.hasAttachments && (
                            <span className="badge bg-light text-dark">
                              <i className="ti ti-paperclip me-1" />
                              Attachment
                            </span>
                          )}
                          {email.analysis.requiresAction && (
                            <span className="badge badge-soft-danger">
                              Action Required
                            </span>
                          )}
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          {email.analysis.urgencyIndicators.slice(0, 2).map((indicator, idx) => (
                            <span key={idx} className="badge badge-soft-warning badge-xs">
                              {indicator}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Email Detail */}
            <div className="flex-fill bg-white" style={{ overflowY: 'auto' }}>
              {selectedEmail ? (
                <div className="h-100 d-flex flex-column">
                  <div className="p-3 border-bottom bg-light">
                    <div className="d-flex align-items-center justify-content-between">
                      <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => setSelectedEmail(null)}
                      >
                        <i className="ti ti-arrow-left me-1" />
                        Back
                      </button>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-outline-primary">
                          <i className="ti ti-arrow-back-up me-1" />
                          Reply
                        </button>
                        <button className="btn btn-sm btn-outline-secondary">
                          <i className="ti ti-arrow-forward-up me-1" />
                          Forward
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          <i className="ti ti-trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 flex-fill">
                    {/* AI Analysis Banner */}
                    <div className="alert alert-light border mb-4">
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div className="d-flex align-items-center gap-3">
                          <EmailPriorityBadge analysis={selectedEmail.analysis} showDetails showLabel />
                          <span className="text-muted">|</span>
                          <span className="small">
                            <strong>Response Time:</strong> {selectedEmail.analysis.estimatedResponseTime}
                          </span>
                          <span className="text-muted">|</span>
                          <span className="small">
                            <strong>Confidence:</strong> {selectedEmail.analysis.confidence}%
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <i className="ti ti-sparkles text-warning me-1" />
                          <span className="small text-muted">AI Analysis</span>
                        </div>
                      </div>
                      {selectedEmail.analysis.urgencyIndicators.length > 0 && (
                        <div className="mt-2 pt-2 border-top">
                          <span className="small text-muted me-2">Detected Keywords:</span>
                          {selectedEmail.analysis.urgencyIndicators.map((indicator, idx) => (
                            <span key={idx} className="badge badge-soft-warning me-1">{indicator}</span>
                          ))}
                        </div>
                      )}
                    </div>

                    <h4 className="mb-3">{selectedEmail.subject}</h4>
                    
                    <div className="d-flex align-items-start mb-4">
                      <div className="avatar avatar-md me-3" style={{ 
                        background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        width: '48px',
                        height: '48px',
                        fontSize: '18px',
                        fontWeight: 600
                      }}>
                        {selectedEmail.sender.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-fill">
                        <h6 className="mb-1">{selectedEmail.sender.name}</h6>
                        <p className="text-muted small mb-0">{selectedEmail.sender.email}</p>
                        {selectedEmail.sender.department && (
                          <span className="badge badge-soft-secondary mt-1">{selectedEmail.sender.department}</span>
                        )}
                      </div>
                      <div className="text-end">
                        <span className="small text-muted">
                          {new Date(selectedEmail.timestamp).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="border rounded p-4 bg-light">
                      <p className="mb-3">{selectedEmail.preview}</p>
                      <p className="text-muted mb-0">
                        [Full email content would appear here in production]
                      </p>
                    </div>

                    {selectedEmail.hasAttachments && (
                      <div className="mt-4">
                        <h6 className="mb-2">
                          <i className="ti ti-paperclip me-1" />
                          Attachments
                        </h6>
                        <div className="d-flex gap-2">
                          <div className="border rounded p-2 d-flex align-items-center">
                            <i className="ti ti-file-text fs-4 text-muted me-2" />
                            <div>
                              <span className="small d-block">document.pdf</span>
                              <span className="text-muted small">245 KB</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="h-100 d-flex align-items-center justify-content-center">
                  <div className="text-center text-muted">
                    <i className="ti ti-mail-opened fs-1" />
                    <p className="mt-2">Select an email to view</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Compose Modal */}
      <div
        className="modal fade"
        id="email-view"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Compose Email</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">To</label>
                <input type="email" className="form-control" placeholder="recipient@example.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="Email subject" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows={6} placeholder="Type your message..."></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                <i className="ti ti-send me-1" />
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
