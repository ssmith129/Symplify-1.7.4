import React from 'react';
import type { PatientHandoff } from '../../../../core/redux/shiftHandoffSlice';

interface HandoffTimelineProps {
  patients: PatientHandoff[];
  shiftStartTime?: string;
  shiftEndTime?: string;
}

interface AggregatedEvent {
  time: string;
  events: {
    patientName: string;
    room: string;
    event: string;
    severity: 'info' | 'warning' | 'critical';
  }[];
}

export const HandoffTimeline: React.FC<HandoffTimelineProps> = ({
  patients,
  shiftStartTime,
  shiftEndTime
}) => {
  // Aggregate all events from all patients and sort by time
  const aggregatedEvents: AggregatedEvent[] = [];
  
  patients.forEach(patient => {
    patient.recentEvents.forEach(event => {
      const existingTimeSlot = aggregatedEvents.find(ae => ae.time === event.time);
      if (existingTimeSlot) {
        existingTimeSlot.events.push({
          patientName: patient.patientName,
          room: patient.room,
          event: event.event,
          severity: event.severity
        });
      } else {
        aggregatedEvents.push({
          time: event.time,
          events: [{
            patientName: patient.patientName,
            room: patient.room,
            event: event.event,
            severity: event.severity
          }]
        });
      }
    });
  });

  // Sort by time (assuming HH:MM format)
  aggregatedEvents.sort((a, b) => {
    const timeA = a.time.split(':').map(Number);
    const timeB = b.time.split(':').map(Number);
    return (timeB[0] * 60 + timeB[1]) - (timeA[0] * 60 + timeA[1]);
  });

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return '🚨';
      case 'warning': return '⚠️';
      default: return '📝';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return '#F44336';
      case 'warning': return '#FF9800';
      default: return '#9E9E9E';
    }
  };

  return (
    <div className="handoff-timeline">
      <div className="timeline-header">
        <h3>Shift Timeline</h3>
        <div className="time-range">
          {shiftStartTime && shiftEndTime && (
            <span>{shiftStartTime} - {shiftEndTime}</span>
          )}
        </div>
      </div>

      <div className="timeline-legend">
        <span className="legend-item critical">
          <span className="legend-dot critical"></span>
          Critical
        </span>
        <span className="legend-item warning">
          <span className="legend-dot warning"></span>
          Warning
        </span>
        <span className="legend-item info">
          <span className="legend-dot info"></span>
          Info
        </span>
      </div>

      <div className="timeline-container">
        {aggregatedEvents.length === 0 ? (
          <div className="no-events">
            <span className="no-events-icon">📋</span>
            <p>No events recorded for this shift.</p>
          </div>
        ) : (
          aggregatedEvents.map((timeSlot, idx) => (
            <div key={idx} className="timeline-slot">
              <div className="slot-time">
                <span className="time-badge">{timeSlot.time}</span>
              </div>
              <div className="slot-connector">
                <span className="connector-dot"></span>
                {idx < aggregatedEvents.length - 1 && (
                  <span className="connector-line"></span>
                )}
              </div>
              <div className="slot-events">
                {timeSlot.events.map((event, eventIdx) => (
                  <div 
                    key={eventIdx} 
                    className={`event-card severity-${event.severity}`}
                    style={{ borderLeftColor: getSeverityColor(event.severity) }}
                  >
                    <div className="event-header">
                      <span className="event-icon">{getSeverityIcon(event.severity)}</span>
                      <span className="event-patient">
                        {event.patientName} (Room {event.room})
                      </span>
                    </div>
                    <p className="event-description">{event.event}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Summary Stats */}
      <div className="timeline-summary">
        <div className="summary-stat">
          <span className="stat-value">
            {aggregatedEvents.reduce((acc, ts) => 
              acc + ts.events.filter(e => e.severity === 'critical').length, 0
            )}
          </span>
          <span className="stat-label">Critical Events</span>
        </div>
        <div className="summary-stat">
          <span className="stat-value">
            {aggregatedEvents.reduce((acc, ts) => 
              acc + ts.events.filter(e => e.severity === 'warning').length, 0
            )}
          </span>
          <span className="stat-label">Warnings</span>
        </div>
        <div className="summary-stat">
          <span className="stat-value">
            {aggregatedEvents.reduce((acc, ts) => acc + ts.events.length, 0)}
          </span>
          <span className="stat-label">Total Events</span>
        </div>
      </div>
    </div>
  );
};

export default HandoffTimeline;
