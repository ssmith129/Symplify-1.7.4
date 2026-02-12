import { Link } from "react-router";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import SCol8Chart from "./chart/scol8Chart";
import SCol9Chart from "./chart/scol9Chart";
import SCol10Chart from "./chart/scol10Chart";
import Modals from "./modals/modals";
import PageHeader from "../../../../../core/common/page-header/PageHeader";

const PatientDashboard = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content pb-0">
          {/* Page Header */}
          <PageHeader
            title="Patient Dashboard"
            actions={
              <Link
                to="#"
                className="btn btn-primary d-inline-flex align-items-center"
                data-bs-toggle="offcanvas"
                data-bs-target="#new_appointment"
              >
                <i className="ti ti-plus me-1" />
                New Appointment
              </Link>
            }
          />
          {/* End Page Header */}
          {/* row start */}
          <div className="row">
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card flex-fill w-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <span className="avatar bg-primary rounded-circle fs-20 d-inline-flex flex-shrink-0">
                      <i className="ti ti-calendar-heart" />
                    </span>
                    <div className="ms-2">
                      <p className="mb-1 text-truncate">Total Appointments</p>
                      <h3 className="fw-bold mb-0">24</h3>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="badge fw-medium bg-success flex-shrink-0 me-2">
                      +95%
                    </span>
                    <p className="fs-13 mb-0">in last 7 Days </p>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card flex-fill w-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <span className="avatar bg-danger rounded-circle fs-20 d-inline-flex flex-shrink-0">
                      <i className="ti ti-users" />
                    </span>
                    <div className="ms-2">
                      <p className="mb-1 text-truncate">Online Consultations</p>
                      <h3 className="fw-bold mb-0">36</h3>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="badge fw-medium bg-danger flex-shrink-0 me-2">
                      -15%
                    </span>
                    <p className="fs-13 mb-0">in last 7 Days</p>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card flex-fill w-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <p className="mb-1 text-truncate">Blood Pressure</p>
                      <span className="badge fw-medium bg-success flex-shrink-0 me-2">
                        +95%
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <h3 className="fw-bold mb-0 me-1">89</h3>
                      <p className="mb-0">g/dl</p>
                    </div>
                  </div>
                  <div id="s-col-8" className="chart-set">
                    <SCol8Chart />
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card flex-fill w-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <p className="mb-1 text-truncate">Heart Rate</p>
                      <span className="badge fw-medium bg-success flex-shrink-0 me-2">
                        +95%
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <h3 className="fw-bold mb-0 me-1">87</h3>
                      <p className="mb-0">bpm</p>
                    </div>
                  </div>
                  <div id="s-col-9" className="chart-set">
                    <SCol9Chart />
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
          </div>
          {/* row start */}
          {/* row start */}
          <div className="row">
            {/* col start */}
            <div className="col-xl-4 col-lg-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">My Doctors</h5>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
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
                            Dr. Mick Thompson
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">Cardiologist</p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-danger border border-danger flex-shrink-0">
                      20 Bookings
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-02.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link to="#" className="fw-semibold">
                            Dr. Sarah Johnson
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">
                          Orthopedic Surgeon
                        </p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-danger border border-danger flex-shrink-0">
                      15 Bookings
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-03.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link to="#" className="fw-semibold">
                            Dr. Emily Carter
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">Pediatrician</p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-danger border border-danger flex-shrink-0">
                      12 Bookings
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-04.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link to="#" className="fw-semibold">
                            Dr. David Lee
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">Gynecologist</p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-danger border border-danger flex-shrink-0">
                      08 Bookings
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-0">
                    <div className="d-flex align-items-center">
                      <Link to="#" className="avatar me-2 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-05.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </Link>
                      <div>
                        <h6 className="fs-14 mb-1 text-truncate">
                          <Link to="#" className="fw-semibold">
                            Dr. Anna Kim
                          </Link>
                        </h6>
                        <p className="mb-0 fs-13 text-truncate">Psychiatrist</p>
                      </div>
                    </div>
                    <span className="badge fw-medium badge-soft-danger border border-danger flex-shrink-0">
                      06 Bookings
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
                  <h5 className="fw-bold mb-0">Prescriptions</h5>
                </div>
                <div className="card-body">
                  <div className="overflow-auto">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center flex-shrink-0">
                        <Link
                          to="#"
                          className="avatar me-2 flex-shrink-0 bg-light rounded-circle text-dark"
                        >
                          <i className="ti ti-file-description fs-20" />
                        </Link>
                        <div>
                          <h6 className="fs-14 mb-1 text-truncate">
                            <Link to="#" className="fw-semibold">
                              Cardiology Prescription
                            </Link>
                          </h6>
                          <p className="mb-0 fs-13 text-truncate">
                            20 Apr 2025
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-outline-white d-inline-flex align-items-center shadow-sm me-2 p-1"
                        >
                          <i className="ti ti-eye" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white d-inline-flex align-items-center shadow-sm p-1"
                        >
                          <i className="ti ti-download" />
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center flex-shrink-0">
                        <Link
                          to="#"
                          className="avatar me-2 flex-shrink-0 bg-light rounded-circle text-dark"
                        >
                          <i className="ti ti-file-description fs-20" />
                        </Link>
                        <div>
                          <h6 className="fs-14 mb-1 text-truncate">
                            <Link to="#" className="fw-semibold">
                              Dentist Prescription
                            </Link>
                          </h6>
                          <p className="mb-0 fs-13 text-truncate">
                            25 Mar 2025
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-outline-white d-inline-flex align-items-center shadow-sm me-2 p-1"
                        >
                          <i className="ti ti-eye" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white d-inline-flex align-items-center shadow-sm p-1"
                        >
                          <i className="ti ti-download" />
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center flex-shrink-0">
                        <Link
                          to="#"
                          className="avatar me-2 flex-shrink-0 bg-light rounded-circle text-dark"
                        >
                          <i className="ti ti-file-description fs-20" />
                        </Link>
                        <div>
                          <h6 className="fs-14 mb-1 text-truncate">
                            <Link to="#" className="fw-semibold">
                              Dentist Prescription
                            </Link>
                          </h6>
                          <p className="mb-0 fs-13 text-truncate">
                            16 Mar 2025
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-outline-white d-inline-flex align-items-center shadow-sm me-2 p-1"
                        >
                          <i className="ti ti-eye" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white d-inline-flex align-items-center shadow-sm p-1"
                        >
                          <i className="ti ti-download" />
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center flex-shrink-0">
                        <Link
                          to="#"
                          className="avatar me-2 flex-shrink-0 bg-light rounded-circle text-dark"
                        >
                          <i className="ti ti-file-description fs-20" />
                        </Link>
                        <div>
                          <h6 className="fs-14 mb-1 text-truncate">
                            <Link to="#" className="fw-semibold">
                              Dentist Prescription
                            </Link>
                          </h6>
                          <p className="mb-0 fs-13 text-truncate">
                            12 Feb 2025
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-outline-white d-inline-flex align-items-center shadow-sm me-2 p-1"
                        >
                          <i className="ti ti-eye" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white d-inline-flex align-items-center shadow-sm p-1"
                        >
                          <i className="ti ti-download" />
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-0">
                      <div className="d-flex align-items-center flex-shrink-0">
                        <Link
                          to="#"
                          className="avatar me-2 flex-shrink-0 bg-light rounded-circle text-dark"
                        >
                          <i className="ti ti-file-description fs-20" />
                        </Link>
                        <div>
                          <h6 className="fs-14 mb-1 text-truncate">
                            <Link to="#" className="fw-semibold">
                              Cardiology Prescription
                            </Link>
                          </h6>
                          <p className="mb-0 fs-13 text-truncate">
                            04 Jan 2025
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-outline-white d-inline-flex align-items-center shadow-sm me-2 p-1"
                        >
                          <i className="ti ti-eye" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-white d-inline-flex align-items-center shadow-sm p-1"
                        >
                          <i className="ti ti-download" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-4 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Recent Activity</h5>
                </div>
                <div className="card-body">
                  <div className="recent-activity">
                    <div className="d-flex align-items-center mb-3">
                      <span>
                        <i className="ti ti-point-filled fs-24 text-success" />
                      </span>
                      <div className="ms-2">
                        <p className="mb-1 text-truncate">
                          Appointment with
                          <Link to="#" className="fw-semibold">
                            Primary Care Physician
                          </Link>
                        </p>
                        <p className="fs-13 mb-0">24 Mar 2025, 10:55 AM</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <span>
                        <i className="ti ti-point-filled fs-24 text-danger" />
                      </span>
                      <div className="ms-2">
                        <p className="mb-1 text-truncate">
                          <Link to="#" className="fw-semibold">
                            Blood Pressure Check
                          </Link>
                          (Home Monitoring)
                        </p>
                        <p className="fs-13 mb-0">24 Apr 2025, 11:00 AM</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <span>
                        <i className="ti ti-point-filled fs-24 text-warning" />
                      </span>
                      <div className="ms-2">
                        <p className="mb-1">
                          <Link to="#" className="fw-semibold">
                            Physical Therapy Session
                          </Link>
                          Knee strengthening exercises
                        </p>
                        <p className="fs-13 mb-0">24 Apr 2025, 11:00 AM</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-0">
                      <span>
                        <i className="ti ti-point-filled fs-24 text-info" />
                      </span>
                      <div className="ms-2">
                        <p className="mb-1">
                          <Link to="#" className="fw-semibold">
                            Discuss dietary changes
                          </Link>
                          to manage blood sugar levels and weight
                        </p>
                        <p className="fs-13 mb-0">24 Apr 2025, 11:00 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
          </div>
          {/* row end */}
          {/* card start */}
          <div className="card shadow-sm">
            <div className="card-header">
              <h5 className="fw-bold mb-0">Vitals</h5>
            </div>
            <div className="card-body">
              {/* row start */}
              <div className="row row-gap-3 row-cols-1 row-cols-xl-6 row-cols-md-3 row-cols-sm-2">
                {/* col start */}
                <div className="col d-flex">
                  <div className="p-3 border shadow-sm flex-fill w-100 rounded-2">
                    <div className="d-flex align-items-center">
                      <span className="avatar bg-primary rounded-circle flex-shrink-0">
                        <ImageWithBasePath
                          src="./assets/img/icons/weight.svg"
                          alt="img"
                          className="w-auto h-auto"
                        />
                      </span>
                      <div className="ms-1">
                        <p className="mb-1">Weight</p>
                        <p className="text-truncate">
                          <span className="fs-18 fw-bold text-dark">100</span>
                          Kg
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* col end */}
                {/* col start */}
                <div className="col d-flex">
                  <div className="p-3 border shadow-sm flex-fill w-100 rounded-2">
                    <div className="d-flex align-items-center">
                      <span className="avatar bg-primary rounded-circle flex-shrink-0">
                        <ImageWithBasePath
                          src="./assets/img/icons/rotate-left.svg"
                          alt="img"
                          className="w-auto h-auto"
                        />
                      </span>
                      <div className="ms-1">
                        <p className="mb-1">Height</p>
                        <p className="text-truncate">
                          <span className="fs-18 fw-bold text-dark">154</span>
                          Cm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* col end */}
                {/* col start */}
                <div className="col d-flex">
                  <div className="p-3 border shadow-sm flex-fill w-100 rounded-2">
                    <div className="d-flex align-items-center">
                      <span className="avatar bg-primary rounded-circle flex-shrink-0">
                        <ImageWithBasePath
                          src="./assets/img/icons/user-cirlce-add.svg"
                          alt="img"
                          className="w-auto h-auto"
                        />
                      </span>
                      <div className="ms-1">
                        <p className="mb-1">BMI</p>
                        <p className="text-truncate">
                          <span className="fs-18 fw-bold text-dark">19.2</span>
                          kg/cm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* col end */}
                {/* col start */}
                <div className="col d-flex">
                  <div className="p-3 border shadow-sm flex-fill w-100 rounded-2">
                    <div className="d-flex align-items-center">
                      <span className="avatar bg-primary rounded-circle flex-shrink-0">
                        <ImageWithBasePath
                          src="./assets/img/icons/driver-2.svg"
                          alt="img"
                          className="w-auto h-auto"
                        />
                      </span>
                      <div className="ms-1">
                        <p className="mb-1">Pulse</p>
                        <p className="text-truncate">
                          <span className="fs-18 fw-bold text-dark">97%</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* col end */}
                {/* col start */}
                <div className="col d-flex">
                  <div className="p-3 border shadow-sm flex-fill w-100 rounded-2">
                    <div className="d-flex align-items-center">
                      <span className="avatar bg-primary rounded-circle flex-shrink-0">
                        <ImageWithBasePath
                          src="./assets/img/icons/wind.svg"
                          alt="img"
                          className="w-auto h-auto"
                        />
                      </span>
                      <div className="ms-1">
                        <p className="mb-1">SPO2</p>
                        <p className="text-truncate">
                          <span className="fs-18 fw-bold text-dark">98%</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* col end */}
                {/* col start */}
                <div className="col d-flex">
                  <div className="p-3 border shadow-sm flex-fill w-100 rounded-2">
                    <div className="d-flex align-items-center">
                      <span className="avatar bg-primary rounded-circle flex-shrink-0">
                        <ImageWithBasePath
                          src="./assets/img/icons/sun.svg"
                          alt="img"
                          className="w-auto h-auto"
                        />
                      </span>
                      <div className="ms-1">
                        <p className="mb-1 text-truncate">Temprature</p>
                        <p className="text-truncate">
                          <span className="fs-18 fw-bold text-dark">101</span> C
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* col end */}
              </div>
              {/* row end */}
            </div>
          </div>
          {/* card end */}
          {/* row start */}
          <div className="row">
            {/* col start */}
            <div className="col-lg-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0">Consultation By Department</h5>
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
                  <div id="s-col-10" className="chart-set">
                    <SCol10Chart />
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-lg-6 d-flex">
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
                  {/* Table start */}
                  <div className="table-responsive table-nowrap">
                    <table className="table">
                      <tbody>
                        <tr className="border-white">
                          <td className="ps-0">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar me-2">
                                <ImageWithBasePath
                                  src="assets/img/doctors/doctor-06.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link to="#" className="fw-semibold">
                                    Dr. John Smith
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">Neurosurgeon</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h6 className="fs-14 fw-semibold">
                              Consultation Fees
                            </h6>
                            <p className="fs-13">$450</p>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="badge fs-13 py-1 badge-soft-success border border-success rounded text-success fw-medium">
                              Success
                            </span>
                          </td>
                        </tr>
                        <tr className="border-white">
                          <td className="ps-0">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar me-2">
                                <ImageWithBasePath
                                  src="assets/img/doctors/doctor-07.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link to="#" className="fw-semibold">
                                    Dr. Lisa White
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">Oncologist</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h6 className="fs-14 fw-semibold">
                              Consultation Fees
                            </h6>
                            <p className="fs-13">$350</p>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="badge fs-13 py-1 badge-soft-success border border-success rounded text-success fw-medium">
                              Success
                            </span>
                          </td>
                        </tr>
                        <tr className="border-white">
                          <td className="ps-0">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar me-2">
                                <ImageWithBasePath
                                  src="assets/img/doctors/doctor-08.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link to="#" className="fw-semibold">
                                    Dr. Patricia Brown
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">Pulmonologist</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h6 className="fs-14 fw-semibold">
                              Consultation Fees
                            </h6>
                            <p className="fs-13">$400</p>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="badge fs-13 py-1 badge-soft-danger border border-danger rounded text-danger fw-medium">
                              Failed
                            </span>
                          </td>
                        </tr>
                        <tr className="border-white">
                          <td className="ps-0">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar me-2">
                                <ImageWithBasePath
                                  src="assets/img/doctors/doctor-09.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link to="#" className="fw-semibold">
                                    Dr. Rachel Green
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">Urologist</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h6 className="fs-14 fw-semibold">
                              Consultation Fees
                            </h6>
                            <p className="fs-13">$550</p>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="badge fs-13 py-1 badge-soft-success border border-success rounded text-success fw-medium">
                              Success
                            </span>
                          </td>
                        </tr>
                        <tr className="border-white">
                          <td className="ps-0">
                            <div className="d-flex align-items-center">
                              <Link to="#" className="avatar me-2">
                                <ImageWithBasePath
                                  src="assets/img/doctors/doctor-10.jpg"
                                  alt="img"
                                  className="rounded-circle"
                                />
                              </Link>
                              <div>
                                <h6 className="fs-14 mb-1">
                                  <Link to="#" className="fw-semibold">
                                    Dr. Michael Smith
                                  </Link>
                                </h6>
                                <p className="mb-0 fs-13">Cardiologist</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h6 className="fs-14 fw-semibold">
                              Consultation Fees
                            </h6>
                            <p className="fs-13">$600</p>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="badge fs-13 py-1 badge-soft-success border border-success rounded text-success fw-medium">
                              Success
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
            {/* col end */}
          </div>
          {/* row end */}
          {/* card start */}
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
                      <th>Name &amp; Designation</th>
                      <th>Date &amp; Time</th>
                      <th>Consultation Fees</th>
                      <th>Mode</th>
                      <th>Status</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar me-2">
                            <ImageWithBasePath
                              src="assets/img/doctors/doctor-01.jpg"
                              alt="img"
                              className="rounded-circle"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1">
                              <Link to="#" className="fw-semibold">
                                Dr. Mick Thompson
                              </Link>
                            </h6>
                            <p className="mb-0 fs-13">Cardiologist</p>
                          </div>
                        </div>
                      </td>
                      <td>27 May 2025 - 09:30 AM</td>
                      <td className="fw-semibold text-dark">$400</td>
                      <td>Online</td>
                      <td>
                        <span className="badge bg-success fw-medium">
                          Checked Out
                        </span>
                      </td>
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
                              src="assets/img/doctors/doctor-09.jpg"
                              alt="img"
                              className="rounded-circle"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1">
                              <Link to="#" className="fw-semibold">
                                Dr. Sarah Johnson
                              </Link>
                            </h6>
                            <p className="mb-0 fs-13">Orthopedic Surgeon</p>
                          </div>
                        </div>
                      </td>
                      <td>26 May 2025 - 10:15 AM</td>
                      <td className="fw-semibold text-dark">$370</td>
                      <td>Online</td>
                      <td>
                        <span className="badge bg-warning fw-medium">
                          Checked in
                        </span>
                      </td>
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
                              src="assets/img/doctors/doctor-03.jpg"
                              alt="img"
                              className="rounded-circle"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1">
                              <Link to="#" className="fw-semibold">
                                Dr. Emily Carter
                              </Link>
                            </h6>
                            <p className="mb-0 fs-13">Pediatrician</p>
                          </div>
                        </div>
                      </td>
                      <td>25 May 2025 - 02:40 PM</td>
                      <td className="fw-semibold text-dark">$450</td>
                      <td>In-Person</td>
                      <td>
                        <span className="badge bg-danger fw-medium">
                          Cancelled
                        </span>
                      </td>
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
                              src="assets/img/doctors/doctor-04.jpg"
                              alt="img"
                              className="rounded-circle"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1">
                              <Link to="#" className="fw-semibold">
                                Dr. David Lee
                              </Link>
                            </h6>
                            <p className="mb-0 fs-13">Gynecologist</p>
                          </div>
                        </div>
                      </td>
                      <td>24 May 2025 - 11:30 AM</td>
                      <td className="fw-semibold text-dark">$310</td>
                      <td>In-Person</td>
                      <td>
                        <span className="badge bg-info fw-medium">
                          Schedule
                        </span>
                      </td>
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
                              src="assets/img/doctors/doctor-05.jpg"
                              alt="img"
                              className="rounded-circle"
                            />
                          </Link>
                          <div>
                            <h6 className="fs-14 mb-1">
                              <Link to="#" className="fw-semibold">
                                Dr. Anna Kim
                              </Link>
                            </h6>
                            <p className="mb-0 fs-13">Psychiatrist</p>
                          </div>
                        </div>
                      </td>
                      <td>23 May 2025 - 04:10 PM</td>
                      <td className="fw-semibold text-dark">$400</td>
                      <td>Online</td>
                      <td>
                        <span className="badge bg-info fw-medium">
                          Schedule
                        </span>
                      </td>
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
          {/* card end */}
        </div>
        {/* End Content */}
        {/* Footer Start */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©
            <Link to="#" className="link-primary">
              Symplify
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

export default PatientDashboard;
