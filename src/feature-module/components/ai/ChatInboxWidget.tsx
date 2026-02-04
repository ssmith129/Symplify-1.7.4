import { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router';
import ImageWithBasePath from '../../../core/imageWithBasePath';
import { all_routes } from '../../routes/all_routes';

// Types for chat data
interface ChatContact {
  id: string;
  name: string;
  role: string;
  avatar: string;
  isOnline: boolean;
  lastMessage: string;
  timestamp: Date;
  unreadCount: number;
}

interface ChatInboxWidgetProps {
  maxChats?: number;
  showComposeButton?: boolean;
  onComposeClick?: () => void;
}

// Mock data for recent chats
const mockChats: ChatContact[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    role: 'Cardiologist',
    avatar: 'assets/img/doctors/doctor-02.jpg',
    isOnline: true,
    lastMessage: 'Patient vitals are stable. Ready for discharge.',
    timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 mins ago
    unreadCount: 3,
  },
  {
    id: '2',
    name: 'Nurse Emily Carter',
    role: 'ICU Nurse',
    avatar: 'assets/img/profiles/avatar-12.jpg',
    isOnline: true,
    lastMessage: 'Medication administered at 10:30 AM.',
    timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 mins ago
    unreadCount: 1,
  },
  {
    id: '3',
    name: 'Dr. Michael Smith',
    role: 'Surgeon',
    avatar: 'assets/img/doctors/doctor-14.jpg',
    isOnline: false,
    lastMessage: 'Surgery scheduled for tomorrow at 8 AM.',
    timestamp: new Date(Date.now() - 45 * 60 * 1000), // 45 mins ago
    unreadCount: 0,
  },
  {
    id: '4',
    name: 'Lab Department',
    role: 'Laboratory',
    avatar: 'assets/img/profiles/avatar-25.jpg',
    isOnline: true,
    lastMessage: 'URGENT: Lab results ready for patient #4521.',
    timestamp: new Date(Date.now() - 60 * 60 * 1000), // 1 hour ago
    unreadCount: 2,
  },
  {
    id: '5',
    name: 'Pharmacy',
    role: 'Pharmacy Dept',
    avatar: 'assets/img/profiles/avatar-17.jpg',
    isOnline: true,
    lastMessage: 'Prescription refill approved and ready.',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    unreadCount: 0,
  },
];

// Format relative time
const formatTimeAgo = (date: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return 'Yesterday';
  return `${diffDays}d ago`;
};

const ChatInboxWidget: React.FC<ChatInboxWidgetProps> = ({
  maxChats = 4,
  showComposeButton = true,
  onComposeClick,
}) => {
  const navigate = useNavigate();
  const [chats, setChats] = useState<ChatContact[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(true);

  // Calculate total unread count
  const totalUnread = chats.reduce((sum, chat) => sum + chat.unreadCount, 0);

  // Simulate loading chats
  useEffect(() => {
    const loadChats = async () => {
      setLoading(true);
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      setChats(mockChats.slice(0, maxChats));
      setLoading(false);
    };
    loadChats();
  }, [maxChats]);

  // Handle compose click
  const handleCompose = useCallback(() => {
    if (onComposeClick) {
      onComposeClick();
    } else {
      navigate(all_routes.chat);
    }
  }, [onComposeClick, navigate]);

  // Handle chat item click
  const handleChatClick = useCallback(
    (chatId: string) => {
      // Mark as read
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === chatId ? { ...chat, unreadCount: 0 } : chat
        )
      );
      navigate(all_routes.chat);
    },
    [navigate]
  );

  // Toggle expand/collapse
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`card shadow-sm flex-fill w-100 chat-inbox-widget ${expanded ? 'expanded' : 'collapsed'}`}
      style={{ transition: 'all 0.3s ease' }}
    >
      {/* Card Header */}
      <div
        className="card-header d-flex align-items-center justify-content-between cursor-pointer"
        onClick={handleToggle}
        role="button"
        aria-expanded={expanded}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleToggle();
        }}
      >
        <div className="d-flex align-items-center">
          <h5 className="fw-bold mb-0">Message Inbox</h5>
          {totalUnread > 0 && (
            <span className="badge bg-danger rounded-pill ms-2">
              {totalUnread}
            </span>
          )}
        </div>
        <div className="d-flex align-items-center gap-2">
          {showComposeButton && expanded && (
            <button
              className="btn btn-sm btn-primary d-inline-flex align-items-center justify-content-center"
              onClick={(e) => {
                e.stopPropagation();
                handleCompose();
              }}
              title="Compose New Message"
              aria-label="Compose New Message"
              style={{ width: '28px', height: '28px', padding: 0 }}
            >
              <i className="ti ti-plus" />
            </button>
          )}
          <button
            className="btn btn-sm btn-light border-0 p-1"
            onClick={(e) => {
              e.stopPropagation();
              handleToggle();
            }}
            aria-label={expanded ? 'Collapse widget' : 'Expand widget'}
          >
            <i
              className={`ti ti-chevron-${expanded ? 'up' : 'down'} fs-14`}
            />
          </button>
        </div>
      </div>

      {/* Card Body */}
      {expanded && (
        <div
          className="card-body"
          style={{ overflow: 'hidden', transition: 'all 0.3s ease' }}
        >
          {/* Loading State */}
          {loading ? (
            <div className="d-flex flex-column align-items-center justify-content-center py-4">
              <div className="spinner-border text-primary mb-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="text-muted fs-13 mb-0">Loading chats...</p>
            </div>
          ) : chats.length === 0 ? (
            /* Empty State */
            <div className="text-center py-4">
              <i className="ti ti-messages-off fs-1 text-muted mb-2 d-block" />
              <p className="text-muted mb-0">No recent messages</p>
            </div>
          ) : (
            /* Chat List */
            <div className="chat-list w-100" style={{ maxWidth: '100%' }}>
            {chats.map((chat, index) => (
              <div
                key={chat.id}
                className={`d-flex align-items-start justify-content-between ${
                  index < chats.length - 1 ? 'mb-3 pb-3 border-bottom' : ''
                } cursor-pointer chat-item`}
                onClick={() => handleChatClick(chat.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ')
                    handleChatClick(chat.id);
                }}
                style={{
                  transition: 'background-color 0.2s ease',
                  marginLeft: '-1rem',
                  marginRight: '-1rem',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  borderRadius: '4px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div className="d-flex align-items-start flex-grow-1 overflow-hidden">
                  {/* Avatar with Online Status */}
                  <div className="position-relative me-2 flex-shrink-0">
                    <Link to="#" className="avatar">
                      <ImageWithBasePath
                        src={chat.avatar}
                        alt={chat.name}
                        className="rounded-circle"
                      />
                    </Link>
                    <span
                      className={`position-absolute bottom-0 end-0 rounded-circle border border-2 border-white ${
                        chat.isOnline ? 'bg-success' : 'bg-secondary'
                      }`}
                      style={{ width: '10px', height: '10px' }}
                      title={chat.isOnline ? 'Online' : 'Offline'}
                    />
                  </div>

                  {/* Chat Details */}
                  <div className="flex-grow-1 overflow-hidden">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h6 className="fs-14 mb-0 text-truncate">
                        <span
                          className={`fw-${chat.unreadCount > 0 ? 'bold' : 'medium'}`}
                        >
                          {chat.name}
                        </span>
                      </h6>
                      <span className="fs-12 text-muted flex-shrink-0 ms-2">
                        {formatTimeAgo(chat.timestamp)}
                      </span>
                    </div>
                    <p className="fs-12 text-muted mb-1">{chat.role}</p>
                    <p
                      className={`fs-13 mb-0 text-truncate ${
                        chat.unreadCount > 0 ? 'text-dark fw-medium' : ''
                      }`}
                    >
                      {chat.lastMessage}
                    </p>
                  </div>
                </div>

                {/* Unread Badge */}
                {chat.unreadCount > 0 && (
                  <span className="badge bg-primary rounded-pill ms-2 flex-shrink-0 align-self-center">
                    {chat.unreadCount}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

          {/* View All Button */}
          {!loading && chats.length > 0 && (
            <div className="mt-3 pt-2 border-top d-flex justify-content-center">
              <Link
                to={all_routes.chat}
                className="btn btn-light d-flex align-items-center justify-content-center"
                style={{ maxWidth: '280px', width: '100%' }}
              >
                <i className="ti ti-messages me-1" />
                View All Messages
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatInboxWidget;
