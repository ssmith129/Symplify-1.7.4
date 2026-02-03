import React from 'react';

type NoteFormat = 'soap' | 'narrative' | 'structured' | 'custom';

interface NoteFormatterProps {
  rawText?: string;
  format?: NoteFormat;
  onFormatted?: (formattedNote: string) => void;
}

/**
 * Feature 9: Voice Documentation Assistant - Note Formatter
 * Formats transcribed text into structured clinical notes (SOAP, narrative, etc.)
 */
const NoteFormatter: React.FC<NoteFormatterProps> = ({
  rawText = '',
  format = 'soap',
  onFormatted,
}) => {
  // TODO: Implement note formatting logic
  return (
    <div className="note-formatter">
      <h3>Note Formatter</h3>
      <div className="format-selector">
        <label>Format Type:</label>
        <select defaultValue={format}>
          <option value="soap">SOAP Note</option>
          <option value="narrative">Narrative</option>
          <option value="structured">Structured</option>
          <option value="custom">Custom</option>
        </select>
      </div>
      <div className="formatted-preview">
        <h4>Preview</h4>
        <div className="preview-content">
          {rawText || 'No content to format'}
        </div>
      </div>
    </div>
  );
};

export default NoteFormatter;
