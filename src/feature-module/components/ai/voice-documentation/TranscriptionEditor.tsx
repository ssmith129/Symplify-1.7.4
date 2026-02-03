import React from 'react';

interface TranscriptionEditorProps {
  initialText?: string;
  onChange?: (text: string) => void;
  onSave?: (text: string) => void;
  readOnly?: boolean;
}

/**
 * Feature 9: Voice Documentation Assistant - Transcription Editor
 * Allows editing and correction of AI-generated transcriptions
 */
const TranscriptionEditor: React.FC<TranscriptionEditorProps> = ({
  initialText = '',
  onChange,
  onSave,
  readOnly = false,
}) => {
  // TODO: Implement transcription editing logic
  return (
    <div className="transcription-editor">
      <h3>Transcription Editor</h3>
      <textarea
        className="transcription-textarea"
        defaultValue={initialText}
        readOnly={readOnly}
        placeholder="Transcription will appear here..."
      />
      <div className="editor-actions">
        <button className="btn-save" disabled={readOnly}>
          Save
        </button>
        <button className="btn-clear">Clear</button>
      </div>
    </div>
  );
};

export default TranscriptionEditor;
