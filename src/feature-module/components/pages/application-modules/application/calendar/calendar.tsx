import { DatePicker, TimePicker } from "antd";
import { Link } from "react-router";

import Footer from "../../../../../../core/common/footer/footer";
import EventCalendar from "../../../../../../core/common/event-calendar/eventCalendar";
import { all_routes } from "../../../../../routes/all_routes";

const Calendars = () => {
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
  const getModalContainer2 = () => {
    const modalElement = document.getElementById("modal_datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
  return (
    <>
      {/* ========================
        Start Page Content
      ========================= */}
      <div className="page-wrapper">
        <div className="content content-two">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
            <div className="flex-grow-1">
              <h4 className="fs-18 fw-semibold mb-0">Calendar</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Applications</Link>
                </li>
                <li className="breadcrumb-item active">Calendar</li>
              </ol>
            </div>
          </div>
          {/* End Page Header */}
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
            <div className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle btn btn-outline-light btn-sm bg-white text-dark d-inline-flex align-items-center drop-arrow-none"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-file-export me-1" />
                Export
                <i className="ti ti-chevron-down align-middle ms-1" />
              </Link>
              <ul className="dropdown-menu  dropdown-menu-start">
                <li>
                  <Link
                    to="#"
                    className="dropdown-item rounded-1"
                  >
                    <i className="ti ti-file-type-pdf me-1" />
                    Export as PDF
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="dropdown-item rounded-1"
                  >
                    <i className="ti ti-file-type-xls me-1" />
                    Export as Excel
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#add_event"
                className="btn btn-sm btn-primary"
              >
                <i className="ti ti-plus me-1" />
                Create
              </Link>
            </div>
          </div>

          {/* Start Card */}
          <div className="card mb-0">
            <div className="card-body">
              <div id="calendar">
                <EventCalendar />
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* Start Footer*/}
        <Footer />
        {/* End Footer*/}
      </div>
      {/* ========================
        End Page Content
      ========================= */}

      {/* Add New Event Start */}
      <div className="modal fade" id="add_event">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add New Event</h4>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form>
              <div className="modal-body">
                {/* Start Row */}
                <div className="row">
                  <div className="col-12">
                    <div className="mb-3">
                      <label className="form-label">Event Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <label className="form-label">Event Date</label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          format={{
                            format: "DD-MM-YYYY",
                            type: "mask",
                          }}
                          getPopupContainer={getModalContainer}
                          placeholder="DD-MM-YYYY"
                          suffixIcon={null}
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar text-gray-7" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Start Time</label>
                      <div className="input-icon-end position-relative">
                        <TimePicker
                          getPopupContainer={getModalContainer2}
                          use12Hours
                          placeholder="Choose"
                          format="h:mm A"
                          className="form-control timepicker"
                          suffixIcon={null}
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-clock text-gray-7" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">End Time</label>
                      <div className="input-icon-end position-relative">
                        <TimePicker
                          getPopupContainer={getModalContainer2}
                          use12Hours
                          placeholder="Choose"
                          format="h:mm A"
                          className="form-control timepicker"
                          suffixIcon={null}
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-clock text-gray-7" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <label className="form-label">Event Location</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-0">
                      <label className="form-label">Descriptions</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                {/* End Row */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-md btn-light me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-md btn-primary">
                  Add Event
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Add New Event End */}
      {/* Start Event */}
      <div className="modal fade" id="event_modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark modal-bg">
              <div className="modal-title text-white">
                <span id="eventTitle" />
              </div>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body">
              <p className="d-flex align-items-center fw-medium text-black mb-3">
                <i className="ti ti-calendar-check text-default me-2" />
                26 Jul,2024 to 31 Jul,2024
              </p>
              <p className="d-flex align-items-center fw-medium text-black mb-3">
                <i className="ti ti-calendar-check text-default me-2" />
                11:00 AM to 12:15 PM
              </p>
              <p className="d-flex align-items-center fw-medium text-black mb-3">
                <i className="ti ti-map-pin-bolt text-default me-2" />
                Las Vegas, US
              </p>
              <p className="d-flex align-items-center fw-medium text-black mb-0">
                <i className="ti ti-calendar-check text-default me-2" />A
                recurring or repeating event is simply any event that you will
                occur more than once on your calendar.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End Event */}
    </>
  );
};

export default Calendars;
