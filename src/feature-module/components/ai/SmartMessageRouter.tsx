import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Tag, Spin, Tooltip } from 'antd';
import type { RootState, AppDispatch } from '../../../core/redux/store';
import { analyzeMessageContent, clearMessageAnalysis } from '../../../core/redux/aiSlice';
import type { MessageUrgency } from '../../../core/ai/types';
import ImageWithBasePath from '../../../core/imageWithBasePath';

interface SmartMessageRouterProps {
  onSend?: (content: string, recipients: string[]) => void;
  placeholder?: string;
}

const SmartMessageRouter: React.FC<SmartMessageRouterProps> = ({
  onSend,
  placeholder = 'Type your message... AI will analyze and suggest routing'
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentAnalysis, analyzing } = useSelector((state: RootState) => state.ai.messageRouter);
  
  const [content, setContent] = useState('');
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([]);
  const [debounceTimer, setDebounceTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  // Debounced message analysis
  useEffect(() => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    if (content.length > 20) {
      const timer = setTimeout(() => {
        dispatch(analyzeMessageContent(content));
      }, 500);
      setDebounceTimer(timer);
    } else {
      dispatch(clearMessageAnalysis());
    }

    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
    };
  }, [content, dispatch]);

  const urgencyColors: Record<MessageUrgency, string> = {
    critical: '#F44336',
    high: '#FF9800',
    normal: '#4CAF50',
    low: '#2196F3'
  };

  const urgencyBgClass: Record<MessageUrgency, string> = {
    critical: 'bg-danger',
    high: 'bg-warning',
    normal: 'bg-success',
    low: 'bg-info'
  };

  const handleRecipientToggle = (recipientId: string) => {
    setSelectedRecipients(prev => 
      prev.includes(recipientId)
        ? prev.filter(id => id !== recipientId)
        : [...prev, recipientId]
    );
  };

  const handleQuickResponse = (response: string) => {
    setContent(response);
  };

  const handleSend = () => {
    if (content.trim() && selectedRecipients.length > 0) {
      onSend?.(content, selectedRecipients);
      setContent('');
      setSelectedRecipients([]);
      dispatch(clearMessageAnalysis());
    }
  };

  const getAlertType = () => {
    if (!currentAnalysis) return 'info';
    switch (currentAnalysis.urgency) {
      case 'critical': return 'error';
      case 'high': return 'warning';
      default: return 'info';
    }
  };

  return (
    <div className="smart-message-router card shadow-sm">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div>
          <h5 className="mb-1 fw-bold">
            <i className="ti ti-sparkles text-warning me-2" />
            Smart Message Composer
          </h5>
          <small className="text-muted">AI-powered routing and response suggestions</small>
        </div>
        {analyzing && <Spin size="small" />}
      </div>

      <div className="card-body">
        {/* AI Analysis Alert */}
        {currentAnalysis && (
          <div
            className={`alert mb-3 border-0`}
            style={{ backgroundColor: `${urgencyColors[currentAnalysis.urgency]}15` }}
          >
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="d-flex align-items-center gap-2">
                <Tag color={urgencyColors[currentAnalysis.urgency]}>
                  {currentAnalysis.urgency.toUpperCase()}
                </Tag>
                <Tag color="blue">{currentAnalysis.category}</Tag>
                {currentAnalysis.sentiment === 'urgent' && (
                  <Tag color="red">
                    <i className="ti ti-alert-circle me-1" />
                    Urgent
                  </Tag>
                )}
              </div>
              <span className="text-muted small">
                <i className="ti ti-sparkles me-1" />
                AI Analysis
              </span>
            </div>

            {/* Suggested Recipients */}
            <div className="mb-3">
              <strong className="small d-block mb-2">Suggested Recipients:</strong>
              <div className="d-flex flex-wrap gap-2">
                {currentAnalysis.suggestedRecipients.map((recipient) => {
                  const isSelected = selectedRecipients.includes(recipient.id);
                  return (
                    <Tooltip key={recipient.id} title={`${recipient.relevance}% match`}>
                      <div
                        className={`d-flex align-items-center p-2 rounded border cursor-pointer ${
                          isSelected ? 'border-primary bg-light' : 'border-light'
                        }`}
                        onClick={() => handleRecipientToggle(recipient.id)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="avatar avatar-sm me-2">
                          <ImageWithBasePath
                            src={`assets/img/doctors/${recipient.avatar}`}
                            alt={recipient.name}
                            className="rounded-circle"
                          />
                        </div>
                        <div>
                          <div className="small fw-medium">{recipient.name}</div>
                          <div className="text-muted" style={{ fontSize: '11px' }}>
                            {recipient.role}
                          </div>
                        </div>
                        <span className="badge bg-light text-dark ms-2 small">
                          {recipient.relevance}%
                        </span>
                        {isSelected && (
                          <i className="ti ti-check text-primary ms-1" />
                        )}
                      </div>
                    </Tooltip>
                  );
                })}
              </div>
            </div>

            {/* Keywords */}
            {currentAnalysis.keywords.length > 0 && (
              <div className="mb-2">
                <strong className="small d-block mb-1">Detected Keywords:</strong>
                <div className="d-flex flex-wrap gap-1">
                  {currentAnalysis.keywords.map((keyword, idx) => (
                    <Tag key={idx} color="default" className="small">
                      {keyword}
                    </Tag>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Message Input */}
        <div className="mb-3">
          <Input.TextArea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            placeholder={placeholder}
            className="mb-2"
          />
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-muted small">
              {content.length} characters
              {content.length > 20 && !analyzing && currentAnalysis && (
                <span className="ms-2 text-success">
                  <i className="ti ti-check me-1" />
                  Analyzed
                </span>
              )}
            </div>
            {selectedRecipients.length > 0 && (
              <span className="badge bg-primary">
                {selectedRecipients.length} recipient(s) selected
              </span>
            )}
          </div>
        </div>

        {/* Quick Responses */}
        {currentAnalysis?.suggestedResponses && currentAnalysis.suggestedResponses.length > 0 && (
          <div className="mb-3">
            <strong className="small d-block mb-2">
              <i className="ti ti-bolt text-warning me-1" />
              Quick Responses:
            </strong>
            <div className="d-flex flex-wrap gap-2">
              {currentAnalysis.suggestedResponses.map((response, idx) => (
                <button
                  key={idx}
                  className="btn btn-sm btn-outline-secondary text-start"
                  onClick={() => handleQuickResponse(response)}
                  style={{ maxWidth: '200px' }}
                >
                  <span className="text-truncate d-block">{response}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="d-flex gap-2">
          <button
            className="btn btn-primary flex-grow-1"
            disabled={!content.trim() || selectedRecipients.length === 0}
            onClick={handleSend}
          >
            <i className="ti ti-send me-2" />
            Send Message
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              setContent('');
              setSelectedRecipients([]);
              dispatch(clearMessageAnalysis());
            }}
          >
            Clear
          </button>
        </div>

        <div className="text-center mt-3 pt-3 border-top">
          <small className="text-muted">
            <i className="ti ti-sparkles me-1" />
            AI analyzes message content to suggest optimal recipients and responses
          </small>
        </div>
      </div>
    </div>
  );
};

export default SmartMessageRouter;
