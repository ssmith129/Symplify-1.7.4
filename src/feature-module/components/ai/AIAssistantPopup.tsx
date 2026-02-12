import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';
import ImageWithBasePath from '../../../core/imageWithBasePath';
import {
  sendAIMessage,
  getQuickActions,
  executeAIAction,
  type AIMessage,
  type AIAction,
  type QuickAction,
  type UserRoleType,
} from '../../../core/ai/mockApi';

interface AIAssistantPopupProps {
  isOpen: boolean;
  onClose: () => void;
  userRole?: UserRoleType;
  userName?: string;
}

const AIAssistantPopup: React.FC<AIAssistantPopupProps> = ({
  isOpen,
  onClose,
  userRole = 'admin',
  userName = 'User',
}) => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<AIMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [quickActions, setQuickActions] = useState<QuickAction[]>([]);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load quick actions on mount
  useEffect(() => {
    setQuickActions(getQuickActions(userRole));
  }, [userRole]);

  // Add welcome message on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: AIMessage = {
        id: 'welcome',
        role: 'assistant',
        content: `Hello ${userName}! I'm your AI Assistant for Symplify. I can help you with scheduling appointments, navigating the platform, or performing quick actions. How can I assist you today?`,
        timestamp: Date.now(),
        actions: [
          { id: 'w-1', label: 'Schedule Appointment', type: 'appointment', icon: 'ti-calendar-plus' },
          { id: 'w-2', label: 'Navigate Platform', type: 'info', icon: 'ti-compass' },
          { id: 'w-3', label: 'View Quick Actions', type: 'info', icon: 'ti-bolt' },
        ],
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length, userName]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when popup opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized]);

  // Handle sending a message
  const handleSendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: AIMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: content.trim(),
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await sendAIMessage(content, messages, userRole);
      setMessages(prev => [...prev, response.message]);
    } catch (error) {
      console.error('AI message error:', error);
      const errorMessage: AIMessage = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again.',
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  }, [messages, userRole]);

  // Handle quick action click
  const handleQuickAction = (action: QuickAction) => {
    handleSendMessage(action.prompt);
  };

  // Handle action button click
  const handleActionClick = async (action: AIAction) => {
    try {
      const result = await executeAIAction(action, userRole);
      
      if (result.success && action.type === 'navigation' && action.payload?.path) {
        navigate(action.payload.path as string);
        onClose();
      } else if (result.success && action.type === 'appointment') {
        navigate('/application/calendar');
        onClose();
      } else {
        // Add response message for other actions
        const responseMessage: AIMessage = {
          id: `action-${Date.now()}`,
          role: 'assistant',
          content: result.message,
          timestamp: Date.now(),
        };
        setMessages(prev => [...prev, responseMessage]);
      }
    } catch (error) {
      console.error('Action error:', error);
    }
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  // Handle keyboard shortcuts
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  // Format timestamp
  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`ai-assistant-popup ${isMinimized ? 'minimized' : ''}`}
      role="dialog"
      aria-label="AI Assistant"
      aria-modal="true"
      onKeyDown={handleKeyDown}
    >
      {/* Header */}
      <div className="ai-popup-header">
        <div className="d-flex align-items-center">
          <div className="ai-avatar me-2">
            <i className="ti ti-robot fs-18" />
          </div>
          <div>
            <h6 className="mb-0 fw-bold text-white">AI Assistant</h6>
            <span className="fs-11 text-white-50">
              {isTyping ? 'Typing...' : 'Online'}
            </span>
          </div>
        </div>
        <div className="d-flex align-items-center gap-1">
          <button
            className="btn btn-sm btn-icon text-white"
            onClick={() => setIsMinimized(!isMinimized)}
            aria-label={isMinimized ? 'Expand' : 'Minimize'}
          >
            <i className={`ti ${isMinimized ? 'ti-maximize' : 'ti-minus'}`} />
          </button>
          <button
            className="btn btn-sm btn-icon text-white"
            onClick={onClose}
            aria-label="Close AI Assistant"
          >
            <i className="ti ti-x" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages Container */}
          <div className="ai-popup-body" role="log" aria-live="polite">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`ai-message ${msg.role === 'user' ? 'user' : 'assistant'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="ai-message-avatar">
                    <i className="ti ti-robot" />
                  </div>
                )}
                <div className="ai-message-content">
                  <p className="mb-1">{msg.content}</p>
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="ai-message-actions mt-2">
                      {msg.actions.map((action) => (
                        <button
                          key={action.id}
                          className="btn btn-sm btn-outline-light ai-action-btn"
                          onClick={() => handleActionClick(action)}
                        >
                          {action.icon && <i className={`ti ${action.icon} me-1`} />}
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}
                  <span className="ai-message-time">{formatTime(msg.timestamp)}</span>
                </div>
                {msg.role === 'user' && (
                  <div className="ai-message-avatar user">
                    <ImageWithBasePath
                      src="assets/img/users/user-01.jpg"
                      alt="User"
                      className="rounded-circle"
                    />
                  </div>
                )}
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="ai-message assistant">
                <div className="ai-message-avatar">
                  <i className="ti ti-robot" />
                </div>
                <div className="ai-message-content typing">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="ai-quick-actions">
            <div className="quick-actions-scroll">
              {quickActions.slice(0, 6).map((action) => (
                <button
                  key={action.id}
                  className="btn btn-sm quick-action-chip"
                  onClick={() => handleQuickAction(action)}
                >
                  <i className={`ti ${action.icon} me-1`} />
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <form className="ai-popup-footer" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isTyping}
                aria-label="Message input"
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!inputValue.trim() || isTyping}
                aria-label="Send message"
              >
                {isTyping ? (
                  <Spin size="small" />
                ) : (
                  <i className="ti ti-send" />
                )}
              </button>
            </div>
            <div className="text-center mt-2">
              <small className="text-muted fs-10">
                <i className="ti ti-sparkles me-1" />
                Powered by Symplify AI
              </small>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default AIAssistantPopup;
