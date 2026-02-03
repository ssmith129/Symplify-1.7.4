import React from 'react';

interface MedicationReview {
  medicationId: string;
  medicationName: string;
  status: 'safe' | 'warning' | 'critical';
  interactions: number;
  lastChecked?: Date;
}

interface MedicationReviewPanelProps {
  patientId?: string;
  reviews?: MedicationReview[];
  onMedicationSelect?: (medicationId: string) => void;
  onRefresh?: () => void;
}

/**
 * Feature 10: Medication Review Panel
 * Displays a comprehensive review of all patient medications and their interaction status
 */
const MedicationReviewPanel: React.FC<MedicationReviewPanelProps> = ({
  patientId,
  reviews = [],
  onMedicationSelect,
  onRefresh,
}) => {
  // TODO: Implement medication review panel logic
  return (
    <div className="medication-review-panel">
      <div className="panel-header">
        <h3>Medication Review</h3>
        <button className="btn-refresh" onClick={onRefresh}>
          Refresh
        </button>
      </div>
      <div className="review-summary">
        <div className="summary-stat safe">
          <span className="count">
            {reviews.filter((r) => r.status === 'safe').length}
          </span>
          <span className="label">Safe</span>
        </div>
        <div className="summary-stat warning">
          <span className="count">
            {reviews.filter((r) => r.status === 'warning').length}
          </span>
          <span className="label">Warnings</span>
        </div>
        <div className="summary-stat critical">
          <span className="count">
            {reviews.filter((r) => r.status === 'critical').length}
          </span>
          <span className="label">Critical</span>
        </div>
      </div>
      <div className="review-list">
        {reviews.length === 0 ? (
          <p>No medications to review</p>
        ) : (
          reviews.map((review) => (
            <div
              key={review.medicationId}
              className={`review-item status-${review.status}`}
              onClick={() => onMedicationSelect?.(review.medicationId)}
            >
              <span className="medication-name">{review.medicationName}</span>
              <span className="interaction-count">
                {review.interactions} interactions
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MedicationReviewPanel;
