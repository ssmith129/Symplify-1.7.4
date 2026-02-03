import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import FullCalendar from '@fullcalendar/react';
import type { EventApi, DateSelectArg, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Spin, Rate, Progress, Tooltip, message } from 'antd';
import ImageWithBasePath from '../../../core/imageWithBasePath';
import { getCalendarDaySlots, bookCalendarSlot } from '../../../core/ai/mockApi';
import type { CalendarSlot, CalendarDaySlots, BookedAppointment } from '../../../core/ai/mockApi';

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
  extendedProps: {
    image?: string;
    providerId?: string;
    providerName?: string;
    appointmentType?: string;
    matchScore?: number;
    noShowRisk?: number;
    status?: string;
  };
  backgroundColor?: string;
  borderColor?: string;
}

// Custom hook for detecting mobile viewport
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

// Custom hook for touch swipe detection
const useSwipeGesture = (
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  threshold = 50
) => {
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        onSwipeLeft(); // Swipe left = next
      } else {
        onSwipeRight(); // Swipe right = prev
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  }, [onSwipeLeft, onSwipeRight, threshold]);

  return { handleTouchStart, handleTouchMove, handleTouchEnd };
};

// Custom hook for offline event caching
const useOfflineEvents = (events: CalendarEvent[]) => {
  const CACHE_KEY = 'calendar_events_cache';

  // Save events to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(events));
    } catch (e) {
      console.warn('Failed to cache events:', e);
    }
  }, [events]);

  // Load cached events
  const loadCachedEvents = useCallback((): CalendarEvent[] => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      return cached ? JSON.parse(cached) : [];
    } catch (e) {
      console.warn('Failed to load cached events:', e);
      return [];
    }
  }, []);

  // Check if online
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { isOnline, loadCachedEvents };
};

const IntelligentCalendar: React.FC = () => {
  const calendarRef = useRef<FullCalendar>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [daySlots, setDaySlots] = useState<CalendarDaySlots | null>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<CalendarSlot | null>(null);
  const [booking, setBooking] = useState(false);
  const [currentView, setCurrentView] = useState<'dayGridMonth' | 'dayGridWeek' | 'dayGridDay'>('dayGridMonth');
  const [events, setEvents] = useState<CalendarEvent[]>([
    // Sample initial events
    {
      id: 'evt-1',
      title: 'Dr. Alex Morgan',
      start: new Date(Date.now() - 168000000).toISOString().slice(0, 10),
      extendedProps: {
        image: 'assets/img/users/user-01.jpg',
        providerName: 'Dr. Alex Morgan',
        appointmentType: 'General Consultation',
      },
    },
    {
      id: 'evt-2',
      title: 'Dr. Sarah Johnson',
      start: new Date(Date.now() + 338000000).toISOString().slice(0, 10),
      extendedProps: {
        image: 'assets/img/users/user-02.jpg',
        providerName: 'Dr. Sarah Johnson',
        appointmentType: 'Follow-up Visit',
      },
    },
  ]);
  const [selectedEvent, setSelectedEvent] = useState<EventApi | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);

  // Offline capability
  const { isOnline, loadCachedEvents } = useOfflineEvents(events);

  // Navigate to next/previous period
  const navigateNext = useCallback(() => {
    calendarRef.current?.getApi().next();
  }, []);

  const navigatePrev = useCallback(() => {
    calendarRef.current?.getApi().prev();
  }, []);

  // Swipe gesture handlers
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipeGesture(
    navigateNext,
    navigatePrev,
    75 // Threshold for swipe detection
  );

  // Mobile-optimized header toolbar
  const headerToolbar = useMemo(() => {
    if (isMobile) {
      return {
        start: 'prev,next',
        center: 'title',
        end: 'dayGridMonth,dayGridDay',
      };
    }
    return {
      start: 'today,prev,next',
      center: 'title',
      end: 'dayGridMonth,dayGridWeek,dayGridDay',
    };
  }, [isMobile]);

  // Set initial view based on viewport
  useEffect(() => {
    if (isMobile && calendarRef.current) {
      // Switch to day view on mobile for better UX
      // calendarRef.current.getApi().changeView('dayGridDay');
    }
  }, [isMobile]);

  // Handle day click - fetch AI slots
  const handleDateClick = useCallback(async (info: { date: Date; dateStr: string }) => {
    const dateStr = info.dateStr;
    setSelectedDate(dateStr);
    setLoadingSlots(true);
    setPanelOpen(true);
    setSelectedSlot(null);
    
    try {
      const slots = await getCalendarDaySlots(dateStr);
      setDaySlots(slots);
    } catch (error) {
      console.error('Failed to fetch slots:', error);
      message.error('Failed to load available slots');
    } finally {
      setLoadingSlots(false);
    }
  }, []);

  // Handle slot selection
  const handleSlotSelect = (slot: CalendarSlot) => {
    setSelectedSlot(slot);
  };

  // Handle booking
  const handleBookSlot = async () => {
    if (!selectedSlot) return;
    
    setBooking(true);
    try {
      const appointment = await bookCalendarSlot(selectedSlot, 'New Patient');
      
      // Add the booked appointment to the calendar
      const newEvent: CalendarEvent = {
        id: appointment.id,
        title: appointment.title,
        start: appointment.start,
        end: appointment.end,
        extendedProps: {
          image: appointment.providerImage,
          providerId: appointment.providerId,
          providerName: appointment.providerName,
          appointmentType: appointment.appointmentType,
          matchScore: appointment.matchScore,
          noShowRisk: appointment.noShowRisk,
          status: appointment.status,
        },
        backgroundColor: '#4CAF50',
        borderColor: '#388E3C',
      };
      
      setEvents(prev => [...prev, newEvent]);
      message.success('Appointment booked successfully!');
      setSelectedSlot(null);
      setPanelOpen(false);
      
      // Refresh slots for the day
      if (selectedDate) {
        const updatedSlots = await getCalendarDaySlots(selectedDate);
        setDaySlots(updatedSlots);
      }
    } catch (error) {
      console.error('Booking failed:', error);
      message.error('Failed to book appointment');
    } finally {
      setBooking(false);
    }
  };

  // Handle event click
  const handleEventClick = (clickInfo: EventClickArg) => {
    setSelectedEvent(clickInfo.event);
    setModalOpen(true);
  };

  // Close event modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  // Close AI panel
  const closePanel = () => {
    setPanelOpen(false);
    setSelectedSlot(null);
  };

  // Format time
  const formatTime = (datetime: string) => {
    return new Date(datetime).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  // Format date
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'recommended': return '#4CAF50';
      case 'available': return '#2196F3';
      case 'limited': return '#FF9800';
      default: return '#9e9e9e';
    }
  };

  // Get risk color
  const getRiskColor = (risk: number) => {
    if (risk < 15) return '#4CAF50';
    if (risk < 25) return '#FF9800';
    return '#F44336';
  };

  // Get match score color
  const getScoreColor = (score: number) => {
    if (score >= 85) return '#4CAF50';
    if (score >= 70) return '#2196F3';
    return '#FF9800';
  };

  // Render event content
  const renderEventContent = (eventInfo: { event: EventApi }) => {
    const { image } = eventInfo.event.extendedProps;
    return (
      <div className="d-flex align-items-center">
        {image && (
          <span className="me-1" style={{ width: 20, height: 20, borderRadius: '50%' }}>
            <ImageWithBasePath
              src={image}
              alt="provider"
              className="avatar-xs rounded-circle"
            />
          </span>
        )}
        <span className="text-truncate fs-11">{eventInfo.event.title}</span>
      </div>
    );
  };

  return (
    <div className="intelligent-calendar-wrapper">
      <div className={`calendar-container ${panelOpen ? 'panel-open' : ''}`}>
        {/* Main Calendar */}
        <div className="calendar-main">
          <div className="p-4">
            <FullCalendar
              ref={calendarRef}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              headerToolbar={{
                start: 'today,prev,next',
                center: 'title',
                end: 'dayGridMonth,dayGridWeek,dayGridDay',
              }}
              eventContent={renderEventContent}
              eventClick={handleEventClick}
              dateClick={handleDateClick}
              selectable={true}
              dayMaxEvents={3}
            />
          </div>
        </div>

        {/* AI Slot Panel */}
        {panelOpen && (
          <div className="ai-slot-panel">
            <div className="panel-header d-flex align-items-center justify-content-between p-3 border-bottom">
              <div>
                <h6 className="mb-1 fw-bold d-flex align-items-center">
                  <i className="ti ti-sparkles text-warning me-2" />
                  Suggested Slots
                </h6>
                {selectedDate && (
                  <small className="text-muted">{formatDate(selectedDate)}</small>
                )}
              </div>
              <button className="btn btn-sm btn-light" onClick={closePanel}>
                <i className="ti ti-x" />
              </button>
            </div>

            <div className="panel-body p-3" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 300px)' }}>
              {loadingSlots ? (
                <div className="text-center py-4">
                  <Spin />
                  <p className="text-muted mt-2 fs-13">Analyzing optimal slots...</p>
                </div>
              ) : daySlots ? (
                <>
                  {/* Day Insights */}
                  <div className="day-insights mb-3 p-2 bg-light rounded-2">
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="text-center">
                          <div className="fs-18 fw-bold text-primary">{daySlots.dayInsights.totalSlots}</div>
                          <div className="fs-11 text-muted">Available</div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="text-center">
                          <div className="fs-18 fw-bold text-success">{daySlots.dayInsights.optimalSlots}</div>
                          <div className="fs-11 text-muted">Optimal</div>
                        </div>
                      </div>
                    </div>
                    {daySlots.dayInsights.busyPeriods.length > 0 && (
                      <div className="mt-2 pt-2 border-top">
                        <div className="fs-11 text-muted d-flex align-items-center">
                          <i className="ti ti-alert-circle text-warning me-1" />
                          Busy: {daySlots.dayInsights.busyPeriods.join(', ')}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Slot List */}
                  <div className="slot-list">
                    {daySlots.slots.length === 0 ? (
                      <div className="text-center py-4">
                        <i className="ti ti-calendar-off fs-1 text-muted opacity-50 d-block mb-2" />
                        <p className="text-muted fs-13 mb-0">No available slots</p>
                      </div>
                    ) : (
                      daySlots.slots.map((slot) => {
                        const isSelected = selectedSlot?.id === slot.id;
                        
                        return (
                          <div
                            key={slot.id}
                            className={`slot-card mb-2 p-2 border rounded-2 cursor-pointer ${
                              isSelected ? 'border-primary bg-soft-primary' : ''
                            }`}
                            onClick={() => handleSlotSelect(slot)}
                            style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                          >
                            {/* Header */}
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="d-flex align-items-center">
                                <span 
                                  className="rounded-circle me-2 flex-shrink-0"
                                  style={{ 
                                    width: 8, 
                                    height: 8, 
                                    backgroundColor: getStatusColor(slot.status) 
                                  }}
                                />
                                <span className="fs-13 fw-medium">{formatTime(slot.datetime)}</span>
                                <span className="text-muted fs-12 ms-1">- {formatTime(slot.endTime)}</span>
                              </div>
                              {slot.status === 'recommended' && (
                                <span className="badge bg-soft-success text-success fs-10">
                                  <i className="ti ti-star-filled me-1" />Best
                                </span>
                              )}
                            </div>

                            {/* Provider */}
                            <div className="d-flex align-items-center mb-2">
                              <ImageWithBasePath
                                src={slot.providerImage}
                                alt={slot.providerName}
                                className="avatar-xs rounded-circle me-2"
                              />
                              <div>
                                <div className="fs-12 fw-medium">{slot.providerName}</div>
                                <div className="fs-11 text-muted">{slot.appointmentType}</div>
                              </div>
                            </div>

                            {/* Scores */}
                            <div className="d-flex align-items-center justify-content-between">
                              <Tooltip title={`Match score based on provider availability and optimization`}>
                                <div className="d-flex align-items-center">
                                  <span className="fs-11 text-muted me-1">Match:</span>
                                  <span 
                                    className="fs-12 fw-medium"
                                    style={{ color: getScoreColor(slot.matchScore) }}
                                  >
                                    {slot.matchScore}%
                                  </span>
                                </div>
                              </Tooltip>
                              <Tooltip title={`Historical no-show probability for this time slot`}>
                                <div className="d-flex align-items-center">
                                  <span className="fs-11 text-muted me-1">Risk:</span>
                                  <span 
                                    className="fs-12 fw-medium"
                                    style={{ color: getRiskColor(slot.noShowRisk) }}
                                  >
                                    {slot.noShowRisk}%
                                  </span>
                                </div>
                              </Tooltip>
                            </div>

                            {/* Expanded Details */}
                            {isSelected && (
                              <div className="mt-2 pt-2 border-top">
                                <div className="fs-11 fw-medium text-muted mb-2">Optimization Factors</div>
                                <div className="row g-1">
                                  <div className="col-6">
                                    <div className="d-flex justify-content-between fs-11">
                                      <span className="text-muted">Provider:</span>
                                      <span>{slot.factors.providerAvailability}%</span>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="d-flex justify-content-between fs-11">
                                      <span className="text-muted">Convenience:</span>
                                      <span>{slot.factors.patientConvenience}%</span>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="d-flex justify-content-between fs-11">
                                      <span className="text-muted">Success:</span>
                                      <span>{slot.factors.historicalSuccess}%</span>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="d-flex justify-content-between fs-11">
                                      <span className="text-muted">Resources:</span>
                                      <span>{slot.factors.resourceOptimization}%</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center py-4">
                  <i className="ti ti-calendar-plus fs-1 text-muted opacity-50 d-block mb-2" />
                  <p className="text-muted fs-13 mb-0">Click a date to view available slots</p>
                </div>
              )}
            </div>

            {/* Book Button */}
            {selectedSlot && (
              <div className="panel-footer p-3 border-top bg-light">
                <button
                  className="btn btn-primary w-100"
                  onClick={handleBookSlot}
                  disabled={booking}
                >
                  {booking ? (
                    <>
                      <Spin size="small" className="me-2" />
                      Booking...
                    </>
                  ) : (
                    <>
                      <i className="ti ti-calendar-check me-2" />
                      Book Appointment
                    </>
                  )}
                </button>
                <div className="text-center mt-2">
                  <small className="text-muted fs-11">
                    <i className="ti ti-sparkles me-1" />
                    AI-optimized scheduling
                  </small>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div
          className={`modal fade ${modalOpen ? 'show d-block' : ''}`}
          tabIndex={-1}
          role="dialog"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={closeModal}
        >
          <div className="modal-dialog modal-dialog-centered" role="document" onClick={e => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header bg-primary">
                <h5 className="modal-title text-white d-flex align-items-center">
                  <i className="ti ti-calendar-event me-2" />
                  Appointment Details
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  aria-label="Close"
                  onClick={closeModal}
                />
              </div>
              <div className="modal-body">
                <div className="d-flex align-items-center mb-3">
                  {selectedEvent.extendedProps.image && (
                    <ImageWithBasePath
                      src={selectedEvent.extendedProps.image}
                      alt="provider"
                      className="avatar-md rounded-circle me-3"
                    />
                  )}
                  <div>
                    <h6 className="mb-1">{selectedEvent.extendedProps.providerName || selectedEvent.title}</h6>
                    <span className="text-muted fs-13">
                      {selectedEvent.extendedProps.appointmentType || 'Appointment'}
                    </span>
                  </div>
                </div>
                
                <div className="border-top pt-3">
                  <p className="d-flex align-items-center mb-2">
                    <i className="ti ti-calendar text-primary me-2" />
                    <span className="fw-medium">
                      {new Date(selectedEvent.startStr).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </p>
                  {selectedEvent.endStr && (
                    <p className="d-flex align-items-center mb-2">
                      <i className="ti ti-clock text-primary me-2" />
                      <span className="fw-medium">
                        {new Date(selectedEvent.startStr).toLocaleTimeString('en-US', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                        {' - '}
                        {new Date(selectedEvent.endStr).toLocaleTimeString('en-US', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                    </p>
                  )}
                  {selectedEvent.extendedProps.matchScore && (
                    <div className="d-flex align-items-center justify-content-between mt-3 pt-3 border-top">
                      <div className="text-center">
                        <div className="fs-11 text-muted">Match Score</div>
                        <div className="fs-16 fw-bold text-success">{selectedEvent.extendedProps.matchScore}%</div>
                      </div>
                      <div className="text-center">
                        <div className="fs-11 text-muted">No-Show Risk</div>
                        <div className="fs-16 fw-bold text-warning">{selectedEvent.extendedProps.noShowRisk}%</div>
                      </div>
                      <div className="text-center">
                        <div className="fs-11 text-muted">Status</div>
                        <span className="badge bg-success">
                          {selectedEvent.extendedProps.status || 'Confirmed'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntelligentCalendar;
