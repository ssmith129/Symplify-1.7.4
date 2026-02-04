import { useState } from "react";
import { Link } from "react-router";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import Modals from "./modals/modals";
import SCol20Chart from "./charts/scol20";
import CircleChart2 from "./charts/circleChart2";
import { ShiftHandoffWidget, SmartWidget, ChatInboxWidget } from "../../../ai";

const DoctorDahboard = () => {
  const [patientSummaryExpanded, setPatientSummaryExpanded] = useState(true);

  const handlePatientSummaryToggle = () => {
    setPatientSummaryExpanded(!patientSummaryExpanded);
  };

  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content pb-0">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center justify-content-between flex-wrap gap-2 mb-4">
            <div>
              <h4 className="fw-bold mb-0">Doctor Dashboard</h4>
            </div>
            <div className="d-flex align-items-center flex-wrap gap-2">
              <Link
                to="#"
                className="btn btn-primary d-inline-flex align-items-center"
                data-bs-toggle="offcanvas"
                data-bs-target="#new_appointment"
              >
                <i className="ti ti-plus me-1" />
                New Appointment
              </Link>
              <Link
                to="#"
                className="btn btn-outline-white bg-white d-inline-flex align-items-center"
              >
                <i className="ti ti-calendar-time me-1" />
                Schedule Availability
              </Link>
            </div>
          </div>
          {/* End Page Header */}

          {/* AI Shift Handoff Widget Section */}
          <div className="row mb-4 g-3 g-lg-4">
            <div className="col-12 col-md-6 col-lg-4">
              <ShiftHandoffWidget />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className={`card shadow-sm smart-widget-card ${patientSummaryExpanded ? 'h-100 expanded' : 'collapsed'}`}
                style={{ transition: 'all 0.3s ease' }}
              >
                <div
                  className="card-header d-flex align-items-center justify-content-between cursor-pointer"
                  onClick={handlePatientSummaryToggle}
                  role="button"
                  aria-expanded={patientSummaryExpanded}
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePatientSummaryToggle(); }}
                >
                  <div className="d-flex align-items-center">
                    <h5 className="fw-bold mb-0">My Patient Summary</h5>
                  </div>
                  <button
                    className="btn btn-sm btn-light border-0 p-1"
                    onClick={(e) => { e.stopPropagation(); handlePatientSummaryToggle(); }}
                    aria-label={patientSummaryExpanded ? 'Collapse widget' : 'Expand widget'}
                  >
                    <i className={`ti ti-chevron-${patientSummaryExpanded ? 'up' : 'down'} fs-14`} />
                  </button>
                </div>
                <div
                  className={`card-body ${patientSummaryExpanded ? '' : 'd-none'}`}
                  style={{ overflow: 'hidden', transition: 'all 0.3s ease' }}
                >
                  <div className="row g-3">
                    <div className="col-md-3 col-6">
                      <div className="border rounded-2 p-3 text-center bg-soft-primary">
                        <h4 className="fw-bold mb-1 text-primary">24</h4>
                        <p className="mb-0 fs-12 text-muted">Total Patients</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="border rounded-2 p-3 text-center bg-soft-danger">
                        <h4 className="fw-bold mb-1 text-danger">3</h4>
                        <p className="mb-0 fs-12 text-muted">Critical</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="border rounded-2 p-3 text-center bg-soft-warning">
                        <h4 className="fw-bold mb-1 text-warning">5</h4>
                        <p className="mb-0 fs-12 text-muted">Pending Review</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="border rounded-2 p-3 text-center bg-soft-success">
                        <h4 className="fw-bold mb-1 text-success">16</h4>
                        <p className="mb-0 fs-12 text-muted">Stable</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 p-2 rounded-2" style={{ backgroundColor: '#F3E5F5' }}>
                    <div className="d-flex align-items-start">
                      <i className="ti ti-sparkles me-2 mt-1 flex-shrink-0" style={{ color: '#7B1FA2' }} />
                      <p className="mb-0 fs-12 text-dark">
                        3 patients require immediate attention. Mrs. Santos showing declining vitals - recommend urgent review.
                        Mr. Johnson's lab results are ready for review.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2 mt-3 pt-2 border-top flex-wrap">
                    <span className="d-flex align-items-center fs-12 text-muted">
                      <i className="ti ti-trending-up text-success me-1" />
                      8 Improving
                    </span>
                    <span className="d-flex align-items-center fs-12 text-muted">
                      <i className="ti ti-minus text-secondary me-1" />
                      12 Stable
                    </span>
                    <span className="d-flex align-items-center fs-12 text-muted">
                      <i className="ti ti-trending-down text-danger me-1" />
                      4 Declining
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <SmartWidget widgetId="clinicalAlerts" />
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <ChatInboxWidget maxChats={4} />
            </div>
          </div>

          {/* row start */}
          <div className="row g-3 g-lg-4">
            {/* col start */}
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              {/* card start */}
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0 text-truncate">
                    Upcoming Appointments
                  </h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Today <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Today
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          This Week
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          This Month
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <Link to="#" className="avatar me-2 flex-shrink-0">
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-01.jpg"
                        alt="img"
                        className="rounded-circle"
                      />
                    </Link>
                    <div>
                      <h6 className="fs-14 mb-1 text-truncate">
                        <Link to="#" className="fw-semibold">
                          Andrew Billard
                        </Link>
                      </h6>
                      <p className="mb-0 fs-13 text-truncate">#AP455698</p>
                    </div>
                  </div>
                  <h6 className="fs-14 fw-semibold mb-1">General Visit</h6>
                  <div className="d-flex align-items-center gap-2 flex-wrap mb-3">
                    <p className="mb-0 d-inline-flex align-items-center">
                      <i className="ti ti-calendar-time text-dark me-1" />
                      Monday, 31 Mar 2025
                    </p>
                    <p className="mb-0 d-inline-flex align-items-center">
                      <i className="ti ti-clock text-dark me-1" />
                      06:30 PM
                    </p>
                  </div>
                  <div className="row">
                    <div className="col">
                      <h6 className="fs-13 fw-semibold mb-1">Department</h6>
                      <p>Cardiology</p>
                    </div>
                    <div className="col">
                      <h6 className="fs-13 fw-semibold mb-1">Type</h6>
                      <p className="text-truncate">Online Consultation</p>
                    </div>
                  </div>
                  <div className="my-3 border-bottom pb-3 d-flex justify-content-center">
                    <Link to="#" className="btn btn-primary" style={{ maxWidth: '280px', width: '100%' }}>
                      Start Appointment
                    </Link>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Link to="#" className="btn btn-dark w-100">
                      <i className="ti ti-brand-hipchat me-1" />
                      Chat Now
                    </Link>
                    <Link to="#" className="btn btn-outline-white w-100">
                      <i className="ti ti-video me-1" />
                      Video Consutation
                    </Link>
                  </div>
                </div>
              </div>
              {/* card end */}
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-8 d-flex">
              {/* card start */}
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Appointments</h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Monthly <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Monthly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Weekly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Yearly
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body pb-0">
                  <div className="d-flex align-items-center justify-content-end gap-2 mb-1 flex-wrap mb-3">
                    <p className="mb-0 d-inline-flex align-items-center">
                      <i className="ti ti-point-filled me-1 fs-18 text-primary" />
                      Total Appointments
                    </p>
                    <p className="mb-0 d-inline-flex align-items-center">
                      <i className="ti ti-point-filled me-1 fs-18 text-success" />
                      Completed Appointments
                    </p>
                  </div>
                  <SCol20Chart />
                </div>
              </div>
              {/* card end */}
            </div>
            {/* col end */}
          </div>
          {/* row end */}
          {/* row start */}
          <div className="row row-cols-1 row-cols-xl-6 row-cols-md-3 row-cols-sm-2">
            {/* col start */}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <span className="avatar bg-primary rounded-2 fs-20 d-inline-flex mb-2">
                    <i className="ti ti-user" />
                  </span>
                  <p className="mb-1 text-truncate">Total Patient</p>
                  <h3 className="fw-bold mb-2">658</h3>
                  <p className="mb-0 text-success text-truncate">
                    +31% Last Week
                  </p>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <span className="avatar bg-secondary rounded-2 fs-20 d-inline-flex mb-2">
                    <i className="ti ti-video" />
                  </span>
                  <p className="mb-1 text-truncate">Video Consultation</p>
                  <h3 className="fw-bold mb-2">256</h3>
                  <p className="mb-0 text-danger text-truncate">
                    -21% Last Week
                  </p>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <span className="avatar bg-success rounded-2 fs-20 d-inline-flex mb-2">
                    <i className="ti ti-calendar-up" />
                  </span>
                  <p className="mb-1 text-truncate">Rescheduled</p>
                  <h3 className="fw-bold mb-2">141</h3>
                  <p className="mb-0 text-success text-truncate">
                    +64% Last Week
                  </p>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <span className="avatar bg-danger rounded-2 fs-20 d-inline-flex mb-2">
                    <i className="ti ti-checklist" />
                  </span>
                  <p className="mb-1 text-truncate">Pre Visit Bookings</p>
                  <h3 className="fw-bold mb-2">524</h3>
                  <p className="mb-0 text-success text-truncate">
                    +38% Last Week
                  </p>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <span className="avatar bg-info rounded-2 fs-20 d-inline-flex mb-2">
                    <i className="ti ti-calendar-share" />
                  </span>
                  <p className="mb-1 text-truncate">Walkin Bookings</p>
                  <h3 className="fw-bold mb-2">21</h3>
                  <p className="mb-0 text-success text-truncate">
                    +95% Last Week
                  </p>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <span className="avatar bg-soft-success text-success rounded-2 fs-20 d-inline-flex mb-2">
                    <i className="ti ti-carousel-vertical" />
                  </span>
                  <p className="mb-1 text-truncate">Follow Ups</p>
                  <h3 className="fw-bold mb-2">451</h3>
                  <p className="mb-0 text-success text-truncate">
                    +76% Last Week
                  </p>
                </div>
              </div>
            </div>
            {/* col end */}
          </div>
          {/* row start */}
          {/* row start */}
          <div className="row">
            <div className="col-12 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Recent Appointments</h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Weekly <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Monthly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Weekly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Yearly
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  {/* Table start */}
                  <div className="table-responsive table-nowrap">
                    <table className="table border">
                      <thead className="thead-light">
                        <tr>
                          <th>Patient</th>
                          <th>Date &amp; Time</th>
                          <th>Mode</th>
                          <th>Status</th>
                          <th>Consultation Fees</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar me-2">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-06.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link to="#" className="fw-medium">
                                    Alberto Ripley
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">+1 56556 54565</p>
                              </div>
                            </div>
                          </td>
                          <td>27 May 2025 - 09:30 AM</td>
                          <td>Online</td>
                          <td>
                            <span className="badge bg-success fw-medium">
                              Checked Out
                            </span>
                          </td>
                          <td className="fw-semibold text-dark">$400</td>
                          <td>
                            <Link
                              to="#"
                              className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                            >
                              <i className="ti ti-calendar-plus" />
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="dropdown"
                              className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu p-2">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item d-flex align-items-center"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#edit_appointment"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item d-flex align-items-center"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar me-2">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-12.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link to="#" className="fw-medium">
                                    Susan Babin
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">+1 65658 95654</p>
                              </div>
                            </div>
                          </td>
                          <td>26 May 2025 - 10:15 AM</td>
                          <td>Online</td>
                          <td>
                            <span className="badge bg-warning fw-medium">
                              Checked in
                            </span>
                          </td>
                          <td className="fw-semibold text-dark">$370</td>
                          <td>
                            <Link
                              to="#"
                              className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                            >
                              <i className="ti ti-calendar-plus" />
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="dropdown"
                              className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu p-2">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item d-flex align-items-center"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#edit_appointment"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item d-flex align-items-center"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar me-2">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-08.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link to="#" className="fw-medium">
                                    Carol Lam
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">+1 55654 56647</p>
                              </div>
                            </div>
                          </td>
                          <td>25 May 2025 - 02:40 PM</td>
                          <td>In-Person</td>
                          <td>
                            <span className="badge bg-danger fw-medium">
                              Cancelled
                            </span>
                          </td>
                          <td className="fw-semibold text-dark">$450</td>
                          <td>
                            <Link
                              to="#"
                              className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                            >
                              <i className="ti ti-calendar-plus" />
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="dropdown"
                              className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu p-2">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item d-flex align-items-center"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#edit_appointment"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item d-flex align-items-center"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar me-2">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-22.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link to="#" className="fw-medium">
                                    Marsha Noland
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">+1 65668 54558</p>
                              </div>
                            </div>
                          </td>
                          <td>24 May 2025 - 11:30 AM</td>
                          <td>In-Person</td>
                          <td>
                            <span className="badge bg-info fw-medium">
                              Schedule
                            </span>
                          </td>
                          <td className="fw-semibold text-dark">$310</td>
                          <td>
                            <Link
                              to="#"
                              className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                            >
                              <i className="ti ti-calendar-plus" />
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="dropdown"
                              className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu p-2">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item d-flex align-items-center"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#edit_appointment"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item d-flex align-items-center"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar me-2">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-25.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link to="#" className="fw-medium">
                                    John Elsass
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">47851263</p>
                              </div>
                            </div>
                          </td>
                          <td>23 May 2025 - 04:10 PM</td>
                          <td>Online</td>
                          <td>
                            <span className="badge bg-info fw-medium">
                              Schedule
                            </span>
                          </td>
                          <td className="fw-semibold text-dark">$400</td>
                          <td>
                            <Link
                              to="#"
                              className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                            >
                              <i className="ti ti-calendar-plus" />
                            </Link>
                            <Link
                              to="#"
                              data-bs-toggle="dropdown"
                              className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu p-2">
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item d-flex align-items-center"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#edit_appointment"
                                >
                                  <i className="ti ti-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item d-flex align-items-center"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Table end */}
                </div>
              </div>
            </div>
          </div>
          {/* row end */}
          {/* row start */}
          <div className="row">
            {/* col start */}
            <div className="col-xl-4 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Availability</h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Trustcare Clinic <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          CureWell Medical Hub
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Trustcare Clinic
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          NovaCare Medical
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Greeny Medical Clinic
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
                    <p className="text-dark fw-semibold mb-0">Mon</p>
                    <p className="mb-0 d-inline-flex align-items-center">
                      <i className="ti ti-clock me-1" />
                      11:00 PM - 12:30 PM
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
                    <p className="text-dark fw-semibold mb-0">Tue</p>
                    <p className="mb-0 d-inline-flex align-items-center">
                      <i className="ti ti-clock me-1" />
                      11:00 PM - 12:30 PM
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
                    <p className="text-dark fw-semibold mb-0">Wed</p>
                    <p className="mb-0 d-inline-flex align-items-center">
                      <i className="ti ti-clock me-1" />
                      11:00 PM - 12:30 PM
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
                    <p className="text-dark fw-semibold mb-0">Thu</p>
                    <p className="mb-0 d-inline-flex align-items-center">
                      <i className="ti ti-clock me-1" />
                      11:00 PM - 12:30 PM
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
                    <p className="text-dark fw-semibold mb-0">Fri</p>
                    <p className="mb-0 d-inline-flex align-items-center">
                      <i className="ti ti-clock me-1" />
                      11:00 PM - 12:30 PM
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2 border-bottom pb-2">
                    <p className="text-dark fw-semibold mb-0">Sat</p>
                    <p className="mb-0 d-inline-flex align-items-center">
                      <i className="ti ti-clock me-1" />
                      11:00 PM - 12:30 PM
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2 pb-2">
                    <p className="text-dark fw-semibold mb-0">Sun</p>
                    <p className="mb-0 d-inline-flex align-items-center text-danger">
                      <i className="ti ti-clock me-1" />
                      Closed
                    </p>
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    <Link to="#" className="btn btn-light fs-13" style={{ maxWidth: '280px', width: '100%' }}>
                      Edit Availability
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-4 col-lg-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0 text-truncate">
                    Appointment Statistics
                  </h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Monthly <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Monthly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Weekly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Yearly
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <CircleChart2 />
                  <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
                    <div className="text-center">
                      <p className="d-flex align-items-center mb-1 fs-13">
                        <i className="ti ti-circle-filled text-success fs-10 me-1" />
                        Completed
                      </p>
                      <h5 className="fw-bold mb-0">260</h5>
                    </div>
                    <div className="text-center">
                      <p className="d-flex align-items-center mb-1 fs-13">
                        <i className="ti ti-circle-filled text-warning fs-10 me-1" />
                        Pending
                      </p>
                      <h5 className="fw-bold mb-0">21</h5>
                    </div>
                    <div className="text-center">
                      <p className="d-flex align-items-center mb-1 fs-13">
                        <i className="ti ti-circle-filled text-danger fs-10 me-1" />
                        Cancelled
                      </p>
                      <h5 className="fw-bold mb-0">50</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-4 col-lg-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Top Patients</h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      Weekly <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Monthly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Weekly
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Yearly
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-06.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link to="#" className="fw-medium">
                            Alberto Ripley
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          +1 56556 54565
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                      20 Appointments
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-12.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link to="#" className="fw-medium">
                            Susan Babin
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          +1 65658 95654
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                      18 Appointments
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-08.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link to="#" className="fw-medium">
                            Carol Lam
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          +1 55654 56647
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                      16 Appointments
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-22.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link to="#" className="fw-medium">
                            Marsha Noland
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          +1 65668 54558
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                      14 Appointments
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-0">
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-17.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link to="#" className="fw-medium">
                            Irma Armstrong
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          +1 45214 66568
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                      12 Appointments
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
          </div>
          {/* row end */}
        </div>
        {/* End Content */}
        {/* Footer Start */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©
            <Link to="#" className="link-primary">
              Preclinic
            </Link>
            , All Rights Reserved
          </p>
        </div>
        {/* Footer End */}
      </div>
      {/* ========================
			End Page Content
		========================= */}
      <Modals />
    </>
  );
};

export default DoctorDahboard;
