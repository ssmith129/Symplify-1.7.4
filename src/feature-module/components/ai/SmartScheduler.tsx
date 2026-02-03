import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Rate, Spin, Tooltip } from 'antd';
import type { RootState, AppDispatch } from '../../../core/redux/store';
import { fetchSlotSuggestions, selectSlot } from '../../../core/redux/aiSlice';
import type { SlotSuggestion } from '../../../core/ai/types';

interface SmartSchedulerProps {
  patientId?: string;
  appointmentType?: string;
  onSlotSelect?: (slot: SlotSuggestion) => void;
  onBook?: (slot: SlotSuggestion) => void;
}

const SmartScheduler: React.FC<SmartSchedulerProps> = ({
  patientId = 'patient-1',
  appointmentType = 'General Consultation',
  onSlotSelect,
  onBook
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { suggestions, loading, selectedSlot } = useSelector((state: RootState) => state.ai.scheduler);
  const [booking, setBooking] = useState(false);

  useEffect(() => {
    dispatch(fetchSlotSuggestions({ patientId, appointmentType }));
  }, [dispatch, patientId, appointmentType]);

  const handleSlotClick = (slot: SlotSuggestion) => {
    dispatch(selectSlot(slot));
    onSlotSelect?.(slot);
  };

  const handleBook = async () => {
    if (!selectedSlot) return;
    
    setBooking(true);
    // Simulate booking API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setBooking(false);
    
    onBook?.(selectedSlot);
    dispatch(selectSlot(null));
    
    // Show success message (in real app, use toast/notification)
    alert('Appointment booked successfully!');
  };

  const formatDateTime = (datetime: string) => {
    const date = new Date(datetime);
    return {
      date: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };
  };

  const getShowRateColor = (risk: number) => {
    if (risk < 15) return 'success';
    if (risk < 25) return 'warning';
    return 'danger';
  };

  return (
    <div className="card shadow-sm smart-scheduler">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div>
          <h5 className="mb-1 fw-bold">
            <i className="ti ti-sparkles text-warning me-2" />
            AI-Suggested Time Slots
          </h5>
          <small className="text-muted">Optimized for patient convenience and provider availability</small>
        </div>
        <span className="badge bg-success">Optimized</span>
      </div>

      <div className="card-body">
        {loading ? (
          <div className="text-center py-4">
            <Spin size="large" />
            <p className="mt-2 text-muted">Analyzing optimal time slots...</p>
          </div>
        ) : (
          <>
            <div className="slot-list">
              {suggestions.map((slot, idx) => {
                const { date, time } = formatDateTime(slot.datetime);
                const isSelected = selectedSlot?.datetime === slot.datetime;
                const showRate = Math.round(100 - slot.factors.noShowRisk);

                return (
                  <div
                    key={idx}
                    className={`slot-item p-3 mb-2 border rounded cursor-pointer ${
                      isSelected ? 'border-primary bg-light' : 'border-light'
                    }`}
                    onClick={() => handleSlotClick(slot)}
                    style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                  >
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center mb-1">
                          <strong className="me-2">{date}</strong>
                          <span className="badge bg-primary">{time}</span>
                        </div>
                        <div className="text-muted small mb-2">
                          <i className="ti ti-user me-1" />
                          {slot.providerName}
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="me-2 small">Match Score:</span>
                          <Rate disabled value={slot.score} count={5} style={{ fontSize: 14 }} />
                        </div>
                      </div>
                      <div className="text-end">
                        <Tooltip title={`${showRate}% historical show rate for this time slot`}>
                          <span className={`badge bg-${getShowRateColor(slot.factors.noShowRisk)}`}>
                            {showRate}% show rate
                          </span>
                        </Tooltip>
                        {slot.conflicts.length > 0 && (
                          <div className="mt-1">
                            <Tooltip title={slot.conflicts.join(', ')}>
                              <span className="badge bg-warning text-dark">
                                <i className="ti ti-alert-triangle me-1" />
                                {slot.conflicts.length} note
                              </span>
                            </Tooltip>
                          </div>
                        )}
                      </div>
                    </div>

                    {isSelected && (
                      <div className="mt-3 pt-3 border-top">
                        <h6 className="small fw-bold mb-2">Optimization Factors:</h6>
                        <div className="row g-2">
                          <div className="col-6">
                            <div className="small">
                              <i className="ti ti-user-check text-success me-1" />
                              Provider Preference: {Math.round(slot.factors.providerPreference)}%
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="small">
                              <i className="ti ti-heart text-info me-1" />
                              Patient Convenience: {Math.round(slot.factors.patientConvenience)}%
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="small">
                              <i className="ti ti-clock text-warning me-1" />
                              Wait Time Optimal: {Math.round(slot.factors.waitTimeOptimal)}%
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="small">
                              <i className="ti ti-chart-line text-primary me-1" />
                              No-Show Risk: {Math.round(slot.factors.noShowRisk)}%
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              className="btn btn-primary w-100 mt-3"
              disabled={!selectedSlot || booking}
              onClick={handleBook}
            >
              {booking ? (
                <>
                  <Spin size="small" className="me-2" />
                  Booking...
                </>
              ) : (
                <>
                  <i className="ti ti-calendar-check me-2" />
                  Book Selected Slot
                </>
              )}
            </button>

            <div className="text-center mt-3">
              <small className="text-muted">
                <i className="ti ti-sparkles me-1" />
                Slots optimized by AI based on historical patterns and preferences
              </small>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SmartScheduler;
