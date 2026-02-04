import { Link } from "react-router";
import ImageWithBasePath from "../../../../core/imageWithBasePath";
import { all_routes } from "../../../routes/all_routes";
import { useState } from "react";
import Chart from "react-apexcharts";
import SCol2Chart from "./chats/scol2";
import SCol3Chart from "./chats/scol3";
import SCol4Chart from "./chats/scol4";
import SCol19Chart from "./chats/scol19";
import CircleChart from "./chats/circleChart";
import { Calendar, type CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import { AIDashboardSection, ShiftHandoffWidget, ChatInboxWidget, QuickStatsWidget } from "../../ai";

const Dashboard = () => {
  const [sColChart] = useState<any>({
    chart: {
      width: 80,
      height: 54,
      type: "bar",
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadius: 3,
        endingShape: "rounded",
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: false },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: { enabled: false },
    colors: [
      "#2E37A4", // default color
      "#2E37A4",
      "#2E37A4",
      "#2E37A4",
      "#FF955A", // highlighted bar
      "#2E37A4",
      "#2E37A4",
    ],
    fill: {
      type: "solid",
    },
  });

  const series = [
    {
      name: "Data",
      data: [40, 15, 60, 15, 90, 20, 70], // y-values
    },
  ];

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
    console.log(value.format("YYYY-MM-DD"), mode);
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
              <h4 className="fw-bold mb-0">Admin Dashboard</h4>
            </div>
            <div className="d-flex align-items-center flex-wrap gap-2">
              <Link
                to={all_routes.newAppointment}
                className="btn btn-primary d-inline-flex align-items-center"
              >
                <i className="ti ti-plus me-1" />
                New Appointment
              </Link>
              <Link
                to={all_routes.doctorschedule}
                className="btn btn-outline-white bg-white d-inline-flex align-items-center"
              >
                <i className="ti ti-calendar-time me-1" />
                Schedule Availability
              </Link>
            </div>
          </div>
          {/* End Page Header */}

          {/* AI-Powered Insights Section */}
          <AIDashboardSection userRole="admin" userId="admin-1" />

          {/* AI Widgets Row - Quick Stats, Shift Handoff, and Message Inbox */}
          <div className="row mb-4 g-3 g-lg-4">
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <QuickStatsWidget />
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <ShiftHandoffWidget />
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <ChatInboxWidget maxChats={5} />
            </div>
          </div>

          {/* row start */}
          <div className="row">
            {/* col start */}
            <div className="col-xl-8">
              {/* card start */}
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Appointment Statistics</h5>
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
                  <div className="row row-gap-3 mb-2">
                    <div className="col-md-3 col-sm-6">
                      <div className="bg-light border p-2 text-center rounded-2">
                        <p className="mb-1 text-truncate">
                          <i className="ti ti-point-filled me-1 text-primary" />
                          All Appointments
                        </p>
                        <h5 className="fw-bold mb-0">6314</h5>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="bg-light border p-2 text-center rounded-2">
                        <p className="mb-1">
                          <i className="ti ti-point-filled me-1 text-danger" />
                          Cancelled
                        </p>
                        <h5 className="fw-bold mb-0">456</h5>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="bg-light border p-2 text-center rounded-2">
                        <p className="mb-1">
                          <i className="ti ti-point-filled me-1 text-warning" />
                          Reschedule
                        </p>
                        <h5 className="fw-bold mb-0">745</h5>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="bg-light border p-2 text-center rounded-2">
                        <p className="mb-1">
                          <i className="ti ti-point-filled me-1 text-success" />
                          Completed
                        </p>
                        <h5 className="fw-bold mb-0">4578</h5>
                      </div>
                    </div>
                  </div>
                  <div className="chart-set" id="s-col-19">
                    <SCol19Chart />
                  </div>
                </div>
              </div>
              {/* card end */}
              {/* card start */}
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Popular Doctors</h5>
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
                  <div className="row row-gap-3">
                    <div className="col-md-4">
                      <div className="border shadow-sm p-3 rounded-2">
                        <div className="d-flex align-items-center mb-3">
                          <Link
                            to={all_routes.doctordetails}
                            className="avatar me-2 flex-shrink-0 position-relative"
                          >
                            <span className="online text-success position-absolute end-0 bottom-0 pe-1">
                              <i className="ti ti-circle-filled d-flex bg-white fs-6 rounded-circle border border-1 border-white" />
                            </span>
                            <ImageWithBasePath
                              src="assets/img/doctors/doctor-01.jpg"
                              alt="img"
                              className="rounded-circle"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1 text-truncate">
                              <Link
                                to={all_routes.doctordetails}
                                className="fw-semibold"
                              >
                                Dr. Alex Morgan
                              </Link>
                            </h6>
                            <p className="mb-0 fs-13">Cardiologist</p>
                          </div>
                        </div>
                        <p className="mb-0">
                          <span className="text-dark fw-semibold">258</span>
                          Bookings
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="border shadow-sm p-3 rounded-2">
                        <div className="d-flex align-items-center mb-3">
                          <Link
                            to={all_routes.doctordetails}
                            className="avatar me-2 flex-shrink-0 position-relative"
                          >
                            <span className="online text-success position-absolute end-0 bottom-0 pe-1">
                              <i className="ti ti-circle-filled d-flex bg-white fs-6 rounded-circle border border-1 border-white" />
                            </span>
                            <ImageWithBasePath
                              src="assets/img/doctors/doctor-03.jpg"
                              alt="img"
                              className="rounded-circle"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1 text-truncate">
                              <Link
                                to={all_routes.doctordetails}
                                className="fw-semibold"
                              >
                                Dr. Emily Carter
                              </Link>
                            </h6>
                            <p className="mb-0 fs-13">Pediatrician</p>
                          </div>
                        </div>
                        <p className="mb-0">
                          <span className="text-dark fw-semibold">125</span>
                          Bookings
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="border shadow-sm p-3 rounded-2">
                        <div className="d-flex align-items-center mb-3">
                          <Link
                            to={all_routes.doctordetails}
                            className="avatar me-2 flex-shrink-0 position-relative"
                          >
                            <ImageWithBasePath
                              src="assets/img/doctors/doctor-04.jpg"
                              alt="img"
                              className="rounded-circle"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1 text-truncate">
                              <Link
                                to={all_routes.doctordetails}
                                className="fw-semibold"
                              >
                                Dr. David Lee
                              </Link>
                            </h6>
                            <p className="mb-0 fs-13">Gynecologist</p>
                          </div>
                        </div>
                        <p className="mb-0">
                          <span className="text-dark fw-semibold">115</span>
                          Bookings
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card end */}
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-4">
              <div className="card shadow-sm">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0 text-truncate">Appointments</h5>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="btn btn-sm px-2 border shadow-sm btn-outline-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      All Type <i className="ti ti-chevron-down ms-1" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          In Person
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Online
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="datepic appointment-calender mb-1">
                    <Calendar
                      fullscreen={false}
                      onPanelChange={onPanelChange}
                    />
                  </div>
                  <div className="mb-3 bg-light p-3 rounded-2 d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="fs-14 fw-semibold mb-1">General Visit</h6>
                      <p className="mb-0 text-truncate">
                        <i className="ti ti-calendar-time me-1 text-dark" />
                        Wed, 05 Apr 2025, 06:30 PM
                      </p>
                    </div>
                    <div className="avatar-list-stacked avatar-group-sm event flex-shrink-0">
                      <span className="avatar avatar-lg rounded-circle border-0">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-26.jpg"
                          className="img-fluid rounded-circle border border-white"
                          alt="Img"
                        />
                      </span>
                      <span className="avatar avatar-lg rounded-circle border-0">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-05.jpg"
                          className="img-fluid rounded-circle border border-white"
                          alt="Img"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="mb-3 bg-soft-danger p-3 rounded-2 d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="fs-14 fw-semibold mb-1">General Visit</h6>
                      <p className="mb-0 text-truncate">
                        <i className="ti ti-calendar-time me-1 text-dark" />
                        Wed, 05 Apr 2025, 04:10 PM
                      </p>
                    </div>
                    <div className="avatar-list-stacked avatar-group-sm event flex-shrink-0">
                      <span className="avatar avatar-lg rounded-circle border-0">
                        <ImageWithBasePath
                          src="assets/img/users/user-17.jpg"
                          className="img-fluid rounded-circle border border-white"
                          alt="Img"
                        />
                      </span>
                      <span className="avatar avatar-lg rounded-circle border-0">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-10.jpg"
                          className="img-fluid rounded-circle border border-white"
                          alt="Img"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="mb-3 bg-soft-info p-3 rounded-2 d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="fs-14 fw-semibold mb-1">General Visit</h6>
                      <p className="mb-0 text-truncate">
                        <i className="ti ti-calendar-time me-1 text-dark" />
                        Wed, 05 Apr 2025, 10:00 AM
                      </p>
                    </div>
                    <div className="avatar-list-stacked avatar-group-sm event flex-shrink-0">
                      <span className="avatar avatar-lg rounded-circle border-0">
                        <ImageWithBasePath
                          src="assets/img/users/user-16.jpg"
                          className="img-fluid rounded-circle border border-white"
                          alt="Img"
                        />
                      </span>
                      <span className="avatar avatar-lg rounded-circle border-0">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-09.jpg"
                          className="img-fluid rounded-circle border border-white"
                          alt="Img"
                        />
                      </span>
                    </div>
                  </div>
                  <Link
                    to={all_routes.appointments}
                    className="btn btn-light w-100"
                  >
                    View All Appointments
                  </Link>
                </div>
              </div>
            </div>
            {/* col end */}
          </div>
          {/* end row */}
          {/* start row */}
          <div className="row">
            {/* col start */}
            <div className="col-xl-4 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Top 3 Departments</h5>
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
                  <div id="circle-chart" className="chart-set">
                    <CircleChart />
                  </div>
                  <div className="d-flex align-items-center flex-wrap justify-content-center gap-2 mt-3">
                    <p className="d-flex align-items-center mb-0 fs-13">
                      <i className="ti ti-circle-filled text-info fs-10 me-1" />
                      <span className="text-dark fw-semibold me-1">214</span>
                      Cardiology
                    </p>
                    <p className="d-flex align-items-center mb-0 fs-13">
                      <i className="ti ti-circle-filled text-purple fs-10 me-1" />
                      <span className="text-dark fw-semibold me-1">150</span>
                      Dental
                    </p>
                    <p className="d-flex align-items-center mb-0 fs-13">
                      <i className="ti ti-circle-filled text-primary fs-10 me-1" />
                      <span className="text-dark fw-semibold me-1">121</span>
                      Neurolgy
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-4 col-lg-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Doctors Schedule</h5>
                  <Link
                    to={all_routes.doctorschedule}
                    className="btn fw-normal btn-outline-white"
                  >
                    View All
                  </Link>
                </div>
                <div className="card-body">
                  <div className="row g-2 mb-4">
                    <div className="col d-flex border-end">
                      <div className="text-center flex-fill">
                        <p className="mb-1">Available</p>
                        <h3 className="fw-bold mb-0">48</h3>
                      </div>
                    </div>
                    <div className="col d-flex border-end">
                      <div className="text-center flex-fill">
                        <p className="mb-1">Unavailable</p>
                        <h3 className="fw-bold mb-0">28</h3>
                      </div>
                    </div>
                    <div className="col d-flex">
                      <div className="text-center flex-fill">
                        <p className="mb-1">Leave</p>
                        <h3 className="fw-bold mb-0">12</h3>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-auto">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center flex-shrink-0">
                        <Link
                          to={all_routes.doctordetails}
                          className="avatar flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/doctors/doctor-02.jpg"
                            className="rounded-circle"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2 flex-shrink-0">
                          <div>
                            <h6 className="fw-semibold fs-14 text-truncate mb-1">
                              <Link to={all_routes.doctordetails}>
                                Dr. Sarah Johnson
                              </Link>
                            </h6>
                            <p className="fs-13">Orthopedic Surgeon</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <Link
                          to="#"
                          className="btn btn-primary btn-sm py-1 flex-shrink-0"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center flex-shrink-0">
                        <Link
                          to={all_routes.doctordetails}
                          className="avatar flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/doctors/doctor-03.jpg"
                            className="rounded-circle"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2 flex-shrink-0">
                          <div>
                            <h6 className="fw-semibold fs-14 text-truncate mb-1">
                              <Link to={all_routes.doctordetails}>
                                Dr. Emily Carter
                              </Link>
                            </h6>
                            <p className="fs-13">Pediatrician</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <Link to="#" className="btn btn-primary btn-sm py-1">
                          Book Now
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center flex-shrink-0">
                        <Link
                          to={all_routes.doctordetails}
                          className="avatar flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/doctors/doctor-04.jpg"
                            className="rounded-circle"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2 flex-shrink-0">
                          <div>
                            <h6 className="fw-semibold fs-14 text-truncate mb-1">
                              <Link to={all_routes.doctordetails}>
                                Dr. David Lee
                              </Link>
                            </h6>
                            <p className="fs-13">Gynecologist</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <Link to="#" className="btn btn-primary btn-sm py-1">
                          Book Now
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-0">
                      <div className="d-flex align-items-center flex-shrink-0">
                        <Link
                          to={all_routes.doctordetails}
                          className="avatar flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/img/doctors/doctor-14.jpg"
                            className="rounded-circle"
                            alt="img"
                          />
                        </Link>
                        <div className="ms-2 flex-shrink-0">
                          <div>
                            <h6 className="fw-semibold fs-14 text-truncate mb-1">
                              <Link to={all_routes.doctordetails}>
                                Dr. Michael Smith
                              </Link>
                            </h6>
                            <p className="fs-13">Cardiologist</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ms-2">
                        <Link to="#" className="btn btn-primary btn-sm py-1">
                          Book Now
                        </Link>
                      </div>
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
                  <h5 className="fw-bold mb-0">Income By Treatment</h5>
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
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <p className="fw-semibold mb-1 text-dark">Cardiology</p>
                      <p className="mb-0">4,556 Apointments</p>
                    </div>
                    <h6 className="fw-bold mb-0">$5,985</h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <p className="fw-semibold mb-1 text-dark">Radiology</p>
                      <p className="mb-0">4,125 Apointments</p>
                    </div>
                    <h6 className="fw-bold mb-0">$5,194</h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <p className="fw-semibold mb-1 text-dark">
                        Dental Surgery
                      </p>
                      <p className="mb-0">1,796 Apointments</p>
                    </div>
                    <h6 className="fw-bold mb-0">$2,716</h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <p className="fw-semibold mb-1 text-dark">Orthopaedics</p>
                      <p className="mb-0">3,827 Apointments</p>
                    </div>
                    <h6 className="fw-bold mb-0">$4,682</h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-0">
                    <div>
                      <p className="fw-semibold mb-1 text-dark">
                        General Medicine
                      </p>
                      <p className="mb-0">9,894 Apointments</p>
                    </div>
                    <h6 className="fw-bold mb-0">$9,450</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
          </div>
          {/* end row */}
          {/* row start */}
          <div className="row">
            <div className="col-12 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">All Appointments</h5>
                  <Link
                    to={all_routes.appointments}
                    className="btn fw-normal btn-outline-white"
                  >
                    View All
                  </Link>
                </div>
                <div className="card-body">
                  {/* Table start */}
                  <div className="table-responsive table-nowrap">
                    <table className="table border">
                      <thead className="thead-light">
                        <tr>
                          <th>Doctor</th>
                          <th>Patient</th>
                          <th>Date &amp; Time</th>
                          <th>Mode</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={all_routes.doctordetails}
                                className="avatar me-2"
                              >
                                <ImageWithBasePath
                                  src="assets/img/doctors/doctor-06.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link
                                    to={all_routes.doctordetails}
                                    className="fw-semibold"
                                  >
                                    Dr. John Smith
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">Neurosurgeon</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={all_routes.patientDetails}
                                className="avatar me-2"
                              >
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-02.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link
                                    to={all_routes.patientDetails}
                                    className="fw-medium"
                                  >
                                    Jesus Adams
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">+1 41254 45214</p>
                              </div>
                            </div>
                          </td>
                          <td>28 May 2025 - 11:15 AM</td>
                          <td>Online</td>
                          <td>
                            <span className="badge fs-13 py-1 badge-soft-success border border-success rounded text-success fw-medium">
                              Confirmed
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={all_routes.doctordetails}
                                className="avatar me-2"
                              >
                                <ImageWithBasePath
                                  src="assets/img/doctors/doctor-07.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link
                                    to={all_routes.doctordetails}
                                    className="fw-semibold"
                                  >
                                    Dr. Lisa White
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">Oncologist</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={all_routes.patientDetails}
                                className="avatar me-2"
                              >
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-27.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link
                                    to={all_routes.patientDetails}
                                    className="fw-medium"
                                  >
                                    Ezra Belcher
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">+1 65895 41247</p>
                              </div>
                            </div>
                          </td>
                          <td>29 May 2025 - 11:30 AM</td>
                          <td>In-Person</td>
                          <td>
                            <span className="badge fs-13 py-1 badge-soft-danger border border-danger rounded fw-medium">
                              Cancelled
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={all_routes.doctordetails}
                                className="avatar me-2"
                              >
                                <ImageWithBasePath
                                  src="assets/img/doctors/doctor-10.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link
                                    to={all_routes.doctordetails}
                                    className="fw-semibold"
                                  >
                                    Dr. Patricia Brown
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">Pulmonologist</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={all_routes.patientDetails}
                                className="avatar me-2"
                              >
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-20.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link
                                    to={all_routes.patientDetails}
                                    className="fw-medium"
                                  >
                                    Glen Lentz
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">+1 62458 45845</p>
                              </div>
                            </div>
                          </td>
                          <td>30 May 2025 - 09:30 AM </td>
                          <td>Online</td>
                          <td>
                            <span className="badge fs-13 py-1 badge-soft-success border border-success rounded text-success fw-medium">
                              Confirmed
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={all_routes.doctordetails}
                                className="avatar me-2"
                              >
                                <ImageWithBasePath
                                  src="assets/img/doctors/doctor-11.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link
                                    to={all_routes.doctordetails}
                                    className="fw-semibold"
                                  >
                                    Dr. Rachel Green
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">Urologist</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={all_routes.patientDetails}
                                className="avatar me-2"
                              >
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-06.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link
                                    to={all_routes.patientDetails}
                                    className="fw-medium"
                                  >
                                    Bernard Griffith
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">+1 61422 45214</p>
                              </div>
                            </div>
                          </td>
                          <td>30 May 2025 - 10:00 AM</td>
                          <td>Online</td>
                          <td>
                            <span className="badge fs-13 py-1 badge-soft-secondary border border-secondary rounded fw-medium">
                              Checked Out
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={all_routes.doctordetails}
                                className="avatar me-2"
                              >
                                <ImageWithBasePath
                                  src="assets/img/doctors/doctor-14.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link
                                    to={all_routes.doctordetails}
                                    className="fw-semibold"
                                  >
                                    Dr. Michael Smith
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">Cardiologist</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={all_routes.patientDetails}
                                className="avatar me-2"
                              >
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-25.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link
                                    to={all_routes.patientDetails}
                                    className="fw-medium"
                                  >
                                    John Elsass
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">+1 47851 26371</p>
                              </div>
                            </div>
                          </td>
                          <td>30 May 2025 - 11:00 AM</td>
                          <td>Online</td>
                          <td>
                            <span className="badge fs-13 py-1 badge-soft-info border border-info rounded fw-medium">
                              Schedule
                            </span>
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
                  <h5 className="fw-bold mb-0">Top 5 Patients</h5>
                  <Link
                    to={all_routes.patients}
                    className="btn fw-normal btn-outline-white"
                  >
                    View All
                  </Link>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar me-2 flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-02.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link
                            to={all_routes.patientDetails}
                            className="fw-medium"
                          >
                            Jesus Adams
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          Total Paid : $6589
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                      80 Appointments
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar me-2 flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-27.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link
                            to={all_routes.patientDetails}
                            className="fw-medium"
                          >
                            Ezra Belcher
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          Total Paid : $5632
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                      60 Appointments
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar me-2 flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-20.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link
                            to={all_routes.patientDetails}
                            className="fw-medium"
                          >
                            Glen Lentz
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          Total Paid : $4125
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                      40 Appointments
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar me-2 flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-06.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link
                            to={all_routes.patientDetails}
                            className="fw-medium"
                          >
                            Bernard Griffith
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          Total Paid : $3140
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                      25 Appointments
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-0">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar me-2 flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-25.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link
                            to={all_routes.patientDetails}
                            className="fw-medium"
                          >
                            John Elsass
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          Total Paid : $2654
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-primary border border-primary flex-shrink-0">
                      25 Appointments
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-4 col-lg-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Recent Transactions</h5>
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
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/icons/stripe.svg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link to="#" className="fw-semibold">
                            General Check-up
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          <Link to="#" className="link-primary">
                            #INV5889
                          </Link>
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium bg-success flex-shrink-0">
                      + $234
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/icons/paypal.svg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link to="#" className="fw-semibold">
                            Online Consultation
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          <Link to="#" className="link-primary">
                            #INV7874
                          </Link>
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium bg-success flex-shrink-0">
                      + $234
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/icons/stripe.svg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link to="#" className="fw-semibold">
                            Purchase Product
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          <Link to="#" className="link-primary">
                            #INV4458
                          </Link>
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium bg-danger flex-shrink-0">
                      - $69
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/icons/paypal.svg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link to="#" className="fw-semibold">
                            Online Consultation
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          <Link to="#" className="link-primary">
                            #INV5456
                          </Link>
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium bg-success flex-shrink-0">
                      + $234
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-0">
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/icons/stripe.svg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link to="#" className="fw-semibold">
                            Online Consultation
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          <Link to="#" className="link-primary">
                            #INV4557
                          </Link>
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium bg-success flex-shrink-0">
                      + $234
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-4 col-lg-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Leave Requests</h5>
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
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.doctordetails}
                        className="avatar flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-16.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <div>
                          <h6 className="fw-semibold text-truncate mb-1 fs-14">
                            <Link to={all_routes.doctordetails}>
                              James Allaire
                            </Link>
                          </h6>
                          <p className="fs-13 mb-0 text-truncate">
                            4 Days - Personal Reason
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
                      >
                        <i className="ti ti-x fw-bold" />
                      </Link>
                      <Link
                        to="#"
                        className="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
                      >
                        <i className="ti ti-check fw-bold" />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.doctordetails}
                        className="avatar flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-21.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <div>
                          <h6 className="fw-semibold text-truncate mb-1 fs-14">
                            <Link to={all_routes.doctordetails}>
                              Esther Schmidt
                            </Link>
                          </h6>
                          <p className="fs-13 mb-0 text-truncate">
                            2 Days - Going to Hospital
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
                      >
                        <i className="ti ti-x fw-bold" />
                      </Link>
                      <Link
                        to="#"
                        className="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
                      >
                        <i className="ti ti-check fw-bold" />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.doctordetails}
                        className="avatar flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-03.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <div>
                          <h6 className="fw-semibold text-truncate mb-1 fs-14">
                            <Link to={all_routes.doctordetails}>
                              Valerie Padgett
                            </Link>
                          </h6>
                          <p className="fs-13 mb-0 text-truncate">
                            1 Day - Changing Account
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
                      >
                        <i className="ti ti-x fw-bold" />
                      </Link>
                      <Link
                        to="#"
                        className="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
                      >
                        <i className="ti ti-check fw-bold" />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.doctordetails}
                        className="avatar flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-02.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <div>
                          <h6 className="fw-semibold text-truncate mb-1 fs-14">
                            <Link to={all_routes.doctordetails}>
                              Diane Nash
                            </Link>
                          </h6>
                          <p className="fs-13 mb-0 text-truncate">
                            1 Day - Not Well
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
                      >
                        <i className="ti ti-x fw-bold" />
                      </Link>
                      <Link
                        to="#"
                        className="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
                      >
                        <i className="ti ti-check fw-bold" />
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-0">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.doctordetails}
                        className="avatar flex-shrink-0"
                      >
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-09.jpg"
                          className="rounded-circle"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <div>
                          <h6 className="fw-semibold text-truncate mb-1 fs-14">
                            <Link to={all_routes.doctordetails}>
                              Sally Cavazos
                            </Link>
                          </h6>
                          <p className="fs-13 mb-0 text-truncate">
                            2 Days - Going to Checkup
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="d-inline-flex bg-soft-danger text-danger p-2 rounded-circle"
                      >
                        <i className="ti ti-x fw-bold" />
                      </Link>
                      <Link
                        to="#"
                        className="d-inline-flex ms-2 text-success p-2 bg-soft-success rounded-circle"
                      >
                        <i className="ti ti-check fw-bold" />
                      </Link>
                    </div>
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
    </>
  );
};

export default Dashboard;
