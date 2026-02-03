/* eslint-disable */
// src/feature-module/components/ai/EmailSidebarAI.tsx
// AI-Enhanced Email Sidebar for Symplify Platform

import React from 'react';
import { EmailFolder } from '../../../core/ai/emailTypes';

interface FolderConfig {
  label: string;
  icon: string;
  color?: string;
}

const FOLDER_CONFIG: Record<EmailFolder, FolderConfig> = {
  inbox: { label: 'Inbox', icon: 'ti-inbox' },
  urgent: { label: 'Urgent', icon: 'ti-alert-triangle', color: '#DC2626' },
  clinical: { label: 'Clinical', icon: 'ti-stethoscope' },
  'lab-results': { label: 'Lab Results', icon: 'ti-flask' },
  referrals: { label: 'Referrals', icon: 'ti-share' },
  insurance: { label: 'Insurance', icon: 'ti-file-certificate' },
  administrative: { label: 'Administrative', icon: 'ti-folder' }
};

interface EmailSidebarAIProps {
  folderCounts: Record<EmailFolder, { total: number; unread: number }>;
  activeFolder: EmailFolder;
  onFolderChange: (folder: EmailFolder) => void;
}

export const EmailSidebarAI: React.FC<EmailSidebarAIProps> = ({
  folderCounts,
  activeFolder,
  onFolderChange
}) => {
  return (
    <div className="email-sidebar-ai">
      <div className="sidebar-header">
        <h6 className="mb-1">
          <i className="ti ti-sparkles text-warning me-2" />
          Smart Folders
        </h6>
        <small className="text-muted">AI-organized</small>
      </div>
      
      <div className="folder-list">
        {Object.entries(FOLDER_CONFIG).map(([folder, config]) => {
          const counts = folderCounts[folder as EmailFolder];
          const isActive = activeFolder === folder;
          const isUrgent = folder === 'urgent';
          
          return (
            <div 
              key={folder}
              className={`folder-item ${isActive ? 'active' : ''} ${isUrgent ? 'urgent' : ''}`}
              onClick={() => onFolderChange(folder as EmailFolder)}
            >
              <div className="folder-label">
                <i 
                  className={`ti ${config.icon} folder-icon`} 
                  style={{ color: config.color }}
                />
                <span style={{ color: config.color }}>{config.label}</span>
              </div>
              {counts && counts.unread > 0 && (
                <span className={`folder-badge ${isUrgent ? 'urgent' : ''}`}>
                  {counts.unread}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmailSidebarAI;
