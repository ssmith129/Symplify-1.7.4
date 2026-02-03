import React from 'react';

interface MedicalTerm {
  term: string;
  category: 'medication' | 'diagnosis' | 'procedure' | 'anatomy' | 'symptom';
  definition?: string;
}

interface MedicalTermsHighlighterProps {
  text?: string;
  highlightedTerms?: MedicalTerm[];
  onTermClick?: (term: MedicalTerm) => void;
}

/**
 * Feature 9: Voice Documentation Assistant - Medical Terms Highlighter
 * Identifies and highlights medical terminology in transcribed text
 */
const MedicalTermsHighlighter: React.FC<MedicalTermsHighlighterProps> = ({
  text = '',
  highlightedTerms = [],
  onTermClick,
}) => {
  // TODO: Implement medical term highlighting logic
  return (
    <div className="medical-terms-highlighter">
      <h3>Medical Terms</h3>
      <div className="text-content">
        {text || 'No text to analyze'}
      </div>
      <div className="terms-legend">
        <span className="legend-item medication">Medications</span>
        <span className="legend-item diagnosis">Diagnoses</span>
        <span className="legend-item procedure">Procedures</span>
        <span className="legend-item anatomy">Anatomy</span>
        <span className="legend-item symptom">Symptoms</span>
      </div>
    </div>
  );
};

export default MedicalTermsHighlighter;
