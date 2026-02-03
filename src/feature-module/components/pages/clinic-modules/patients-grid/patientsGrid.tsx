import { Link } from "react-router";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import { DatePicker } from "antd";
import { all_routes } from "../../../../routes/all_routes";

const PatientsGrid = () => {
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Start Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-4">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">
                Patient Grid
                <span className="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1">
                  Total Patients : 565
                </span>
              </h4>
            </div>
            <div className="text-end d-flex">
              {/* start filter */}
              <div className="dropdown me-2">
                <Link
                  to="#"
                  className="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <i className="ti ti-filter text-gray-5 me-1" />
                  Filters
                </Link>
                <div
                  className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
                  id="filter-dropdown"
                >
                  <div className="d-flex align-items-center justify-content-between border-bottom filter-header">
                    <h4 className="mb-0 fw-bold">Filter</h4>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-danger text-decoration-underline"
                      >
                        Clear All
                      </Link>
                    </div>
                  </div>
                  <form action="#">
                    <div className="filter-body pb-0">
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Patient</label>
                          <Link to="#" className="link-primary mb-1">
                            Reset
                          </Link>
                        </div>
                        <div className="dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle btn bg-white  d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="true"
                          >
                            Select <i className="ti ti-chevron-down ms-auto" />
                          </Link>
                          <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                            <div className="mb-3">
                              <div className="input-icon-start input-icon position-relative">
                                <span className="input-icon-addon fs-12">
                                  <i className="ti ti-search" />
                                </span>
                                <input
                                  type="text"
                                  className="form-control form-control-md"
                                  placeholder="Search"
                                />
                              </div>
                            </div>
                            <ul className="mb-3">
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xs rounded-circle me-2">
                                    <ImageWithBasePath
                                      src="assets/img/users/user-33.jpg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  Alberto Ripley
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xs rounded-circle me-2">
                                    <ImageWithBasePath
                                      src="assets/img/users/user-12.jpg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  Bernard Griffith
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xs rounded-circle me-2">
                                    <ImageWithBasePath
                                      src="assets/img/users/user-02.jpg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  Carol Lam
                                </label>
                              </li>
                              <li>
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xs rounded-circle me-2">
                                    <ImageWithBasePath
                                      src="assets/img/users/user-08.jpg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  Ezra Belcher
                                </label>
                              </li>
                            </ul>
                            <div className="row g-2">
                              <div className="col-6">
                                <Link
                                  to="#"
                                  className="btn btn-outline-white w-100 close-filter"
                                >
                                  Cancel
                                </Link>
                              </div>
                              <div className="col-6">
                                <Link to="#" className="btn btn-primary w-100">
                                  Select
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Doctor</label>
                          <Link to="#" className="link-primary mb-1">
                            Reset
                          </Link>
                        </div>
                        <div className="dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle btn bg-white  d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="true"
                          >
                            Select <i className="ti ti-chevron-down ms-auto" />
                          </Link>
                          <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                            <div className="mb-3">
                              <div className="input-icon-start input-icon position-relative">
                                <span className="input-icon-addon fs-12">
                                  <i className="ti ti-search" />
                                </span>
                                <input
                                  type="text"
                                  className="form-control form-control-md"
                                  placeholder="Search"
                                />
                              </div>
                            </div>
                            <ul className="mb-3">
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xs rounded-circle me-2">
                                    <ImageWithBasePath
                                      src="assets/img/doctors/doctor-01.jpg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  Dr. Mick Thompson
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xs rounded-circle me-2">
                                    <ImageWithBasePath
                                      src="assets/img/doctors/doctor-02.jpg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  Dr. Sarah Johnson
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xs rounded-circle me-2">
                                    <ImageWithBasePath
                                      src="assets/img/doctors/doctor-03.jpg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  Dr. Emily Carter
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xs rounded-circle me-2">
                                    <ImageWithBasePath
                                      src="assets/img/doctors/doctor-04.jpg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  Dr. David Lee
                                </label>
                              </li>
                              <li className="mb-0">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  <span className="avatar avatar-xs rounded-circle me-2">
                                    <ImageWithBasePath
                                      src="assets/img/doctors/doctor-05.jpg"
                                      className="flex-shrink-0 rounded-circle"
                                      alt="img"
                                    />
                                  </span>
                                  Dr. Anna Kim
                                </label>
                              </li>
                            </ul>
                            <div className="row g-2">
                              <div className="col-6">
                                <Link
                                  to="#"
                                  className="btn btn-outline-white w-100 close-filter"
                                >
                                  Cancel
                                </Link>
                              </div>
                              <div className="col-6">
                                <Link to="#" className="btn btn-primary w-100">
                                  Select
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Designation</label>
                          <Link to="#" className="link-primary mb-1">
                            Reset
                          </Link>
                        </div>
                        <div className="dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle btn bg-white  d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="true"
                          >
                            Select <i className="ti ti-chevron-down ms-auto" />
                          </Link>
                          <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                            <div className="mb-3">
                              <div className="input-icon-start input-icon position-relative">
                                <span className="input-icon-addon fs-12">
                                  <i className="ti ti-search" />
                                </span>
                                <input
                                  type="text"
                                  className="form-control form-control-md"
                                  placeholder="Search"
                                />
                              </div>
                            </div>
                            <ul className="mb-3">
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  Cardiologist
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  Orthopedic Surgeon
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  Pediatrician
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  Gynecologist
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  Psychiatrist
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  Neurosurgeon
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  Oncologist
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  Pulmonologist
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  Urologist
                                </label>
                              </li>
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  Dermatologist
                                </label>
                              </li>
                            </ul>
                            <div className="row g-2">
                              <div className="col-6">
                                <Link
                                  to="#"
                                  className="btn btn-outline-white w-100 close-filter"
                                >
                                  Cancel
                                </Link>
                              </div>
                              <div className="col-6">
                                <Link to="#" className="btn btn-primary w-100">
                                  Select
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label mb-1 text-dark fs-14 fw-medium">
                          Date<span className="text-danger">*</span>
                        </label>
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
                            <i className="ti ti-calendar" />
                          </span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Status</label>
                          <Link to="#" className="link-primary mb-1">
                            Reset
                          </Link>
                        </div>
                        <div className="dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle btn bg-white  d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="true"
                          >
                            Select <i className="ti ti-chevron-down ms-auto" />
                          </Link>
                          <div className="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                            <ul className="mb-3">
                              <li className="mb-1">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  Available
                                </label>
                              </li>
                              <li className="mb-0">
                                <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                                  <input
                                    className="form-check-input m-0 me-2"
                                    type="checkbox"
                                  />
                                  Unavailable
                                </label>
                              </li>
                            </ul>
                            <div className="row g-2">
                              <div className="col-6">
                                <Link
                                  to="#"
                                  className="btn btn-outline-white w-100 close-filter"
                                >
                                  Cancel
                                </Link>
                              </div>
                              <div className="col-6">
                                <Link to="#" className="btn btn-primary w-100">
                                  Select
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="filter-footer d-flex align-items-center justify-content-end border-top">
                      <Link
                        to="#"
                        className="btn btn-light btn-md me-2 fw-medium"
                        id="close-filter"
                      >
                        Close
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-primary btn-md fw-medium"
                      >
                        Filter
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* end filter */}
              <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
                <Link
                  to={all_routes.patients}
                  className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-list fs-14 text-dark" />
                </Link>
                <Link
                  to={all_routes.patientsGrid}
                  className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-layout-grid fs-14 text-body" />
                </Link>
              </div>
              <Link
                to={all_routes.createPatient}
                className="btn btn-primary ms-2 fs-13 btn-md"
              >
                <i className="ti ti-plus me-1" />
                New Patient
              </Link>
            </div>
          </div>
          {/* End Page Header */}
          {/* row start */}
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-08.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </Link>
                      <Link
                        to={all_routes.patientDetails}
                        className="text-dark fw-semibold"
                      >
                        Alberto Ripley
                        <span className="text-body fs-13 fw-normal d-block">
                          26, Male
                        </span>
                      </Link>
                    </div>
                    <Link
                      to="#"
                      className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to={all_routes.editPatient}
                          className="dropdown-item d-flex align-items-center"
                        >
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
                          Delete
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={all_routes.appointments}
                          className="dropdown-item d-flex align-items-center"
                        >
                          Appointment
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-calendar me-1 text-dark" />
                    Last Appointment : Mon, 30 Apr 2025
                  </p>
                  <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-location-pin me-1 text-dark" />
                    Green Square, New York, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-16.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </Link>
                      <Link
                        to={all_routes.patientDetails}
                        className="text-dark fw-semibold"
                      >
                        Susan Babin
                        <span className="text-body fs-13 fw-normal d-block">
                          21, Female
                        </span>
                      </Link>
                    </div>
                    <Link
                      to="#"
                      className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to={all_routes.editPatient}
                          className="dropdown-item d-flex align-items-center"
                        >
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
                          Delete
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={all_routes.appointments}
                          className="dropdown-item d-flex align-items-center"
                        >
                          Appointment
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-calendar me-1 text-dark" />
                    Last Appointment : Wed, 15 Apr 2025
                  </p>
                  <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-location-pin me-1 text-dark" />
                    Lakeview Drive, Chicago, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-06.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </Link>
                      <Link
                        to={all_routes.patientDetails}
                        className="text-dark fw-semibold"
                      >
                        Carol Lam
                        <span className="text-body fs-13 fw-normal d-block">
                          28, Female
                        </span>
                      </Link>
                    </div>
                    <Link
                      to="#"
                      className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to={all_routes.editPatient}
                          className="dropdown-item d-flex align-items-center"
                        >
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
                          Delete
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={all_routes.appointments}
                          className="dropdown-item d-flex align-items-center"
                        >
                          Appointment
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-calendar me-1 text-dark" />
                    Last Appointment : Tue, 02 Apr 2025
                  </p>
                  <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-location-pin me-1 text-dark" />
                    Ocean Avenue, Miami, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-25.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </Link>
                      <Link
                        to={all_routes.patientDetails}
                        className="text-dark fw-semibold"
                      >
                        Marsha Noland
                        <span className="text-body fs-13 fw-normal d-block">
                          25, Female
                        </span>
                      </Link>
                    </div>
                    <Link
                      to="#"
                      className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to={all_routes.editPatient}
                          className="dropdown-item d-flex align-items-center"
                        >
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
                          Delete
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={all_routes.appointments}
                          className="dropdown-item d-flex align-items-center"
                        >
                          Appointment
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-calendar me-1 text-dark" />
                    Last Appointment : Thu, 27 Mar 2025
                  </p>
                  <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-location-pin me-1 text-dark" />
                    Elm Road, Austin, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-39.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </Link>
                      <Link
                        to={all_routes.patientDetails}
                        className="text-dark fw-semibold"
                      >
                        Irma Armstrong
                        <span className="text-body fs-13 fw-normal d-block">
                          32, Female
                        </span>
                      </Link>
                    </div>
                    <Link
                      to="#"
                      className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to={all_routes.editPatient}
                          className="dropdown-item d-flex align-items-center"
                        >
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
                          Delete
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={all_routes.appointments}
                          className="dropdown-item d-flex align-items-center"
                        >
                          Appointment
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-calendar me-1 text-dark" />
                    Last Appointment : Thu, 12 Mar 2025
                  </p>
                  <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-location-pin me-1 text-dark" />
                    Elm Road, Austin, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-14.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </Link>
                      <Link
                        to={all_routes.patientDetails}
                        className="text-dark fw-semibold"
                      >
                        Jesus Adams
                        <span className="text-body fs-13 fw-normal d-block">
                          27, Male
                        </span>
                      </Link>
                    </div>
                    <Link
                      to="#"
                      className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to={all_routes.editPatient}
                          className="dropdown-item d-flex align-items-center"
                        >
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
                          Delete
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={all_routes.appointments}
                          className="dropdown-item d-flex align-items-center"
                        >
                          Appointment
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-calendar me-1 text-dark" />
                    Last Appointment : Fri, 05 Mar 2025
                  </p>
                  <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-location-pin me-1 text-dark" />
                    Maple Street, San Francisco, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-27.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </Link>
                      <Link
                        to={all_routes.patientDetails}
                        className="text-dark fw-semibold"
                      >
                        Ezra Belcher
                        <span className="text-body fs-13 fw-normal d-block">
                          28, Male
                        </span>
                      </Link>
                    </div>
                    <Link
                      to="#"
                      className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to={all_routes.editPatient}
                          className="dropdown-item d-flex align-items-center"
                        >
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
                          Delete
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={all_routes.appointments}
                          className="dropdown-item d-flex align-items-center"
                        >
                          Appointment
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-calendar me-1 text-dark" />
                    Last Appointment : Sat, 24 Feb 2025
                  </p>
                  <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-location-pin me-1 text-dark" />
                    Pine Valley, Seattle, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-05.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </Link>
                      <Link
                        to={all_routes.patientDetails}
                        className="text-dark fw-semibold"
                      >
                        Glen Lentz
                        <span className="text-body fs-13 fw-normal d-block">
                          22, Male
                        </span>
                      </Link>
                    </div>
                    <Link
                      to="#"
                      className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to={all_routes.editPatient}
                          className="dropdown-item d-flex align-items-center"
                        >
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
                          Delete
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={all_routes.appointments}
                          className="dropdown-item d-flex align-items-center"
                        >
                          Appointment
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-calendar me-1 text-dark" />
                    Last Appointment : Sat, 16 Feb 2025
                  </p>
                  <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-location-pin me-1 text-dark" />
                    Pine Valley, Seattle, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-07.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </Link>
                      <Link
                        to={all_routes.patientDetails}
                        className="text-dark fw-semibold"
                      >
                        Bernard Griffith
                        <span className="text-body fs-13 fw-normal d-block">
                          34, Male
                        </span>
                      </Link>
                    </div>
                    <Link
                      to="#"
                      className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to={all_routes.editPatient}
                          className="dropdown-item d-flex align-items-center"
                        >
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
                          Delete
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={all_routes.appointments}
                          className="dropdown-item d-flex align-items-center"
                        >
                          Appointment
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-calendar me-1 text-dark" />
                    Last Appointment : Tue, 01 Feb 2025
                  </p>
                  <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-location-pin me-1 text-dark" />
                    River Walk, Houston, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-17.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </Link>
                      <Link
                        to={all_routes.patientDetails}
                        className="text-dark fw-semibold"
                      >
                        John Elsass
                        <span className="text-body fs-13 fw-normal d-block">
                          23, Male
                        </span>
                      </Link>
                    </div>
                    <Link
                      to="#"
                      className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to={all_routes.editPatient}
                          className="dropdown-item d-flex align-items-center"
                        >
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
                          Delete
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={all_routes.appointments}
                          className="dropdown-item d-flex align-items-center"
                        >
                          Appointment
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-calendar me-1 text-dark" />
                    Last Appointment : Mon, 25 Jan 2025
                  </p>
                  <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-location-pin me-1 text-dark" />
                    Forest Hill, Denver, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-38.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </Link>
                      <Link
                        to={all_routes.patientDetails}
                        className="text-dark fw-semibold"
                      >
                        Martin Lisa
                        <span className="text-body fs-13 fw-normal d-block">
                          26, Female
                        </span>
                      </Link>
                    </div>
                    <Link
                      to="#"
                      className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to={all_routes.editPatient}
                          className="dropdown-item d-flex align-items-center"
                        >
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
                          Delete
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={all_routes.appointments}
                          className="dropdown-item d-flex align-items-center"
                        >
                          Appointment
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-calendar me-1 text-dark" />
                    Last Appointment : Thu, 22 Jan 2025
                  </p>
                  <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-location-pin me-1 text-dark" />
                    Garden Circle, Orlando, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-37.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </Link>
                      <Link
                        to={all_routes.patientDetails}
                        className="text-dark fw-semibold"
                      >
                        Ava Mitchell
                        <span className="text-body fs-13 fw-normal d-block">
                          25, Female
                        </span>
                      </Link>
                    </div>
                    <Link
                      to="#"
                      className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to={all_routes.editPatient}
                          className="dropdown-item d-flex align-items-center"
                        >
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
                          Delete
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={all_routes.appointments}
                          className="dropdown-item d-flex align-items-center"
                        >
                          Appointment
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-calendar me-1 text-dark" />
                    Last Appointment : Sat, 18 Jan 2025
                  </p>
                  <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-location-pin me-1 text-dark" />
                    Crystal Court, Atlanta, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-10.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </Link>
                      <Link
                        to={all_routes.patientDetails}
                        className="text-dark fw-semibold"
                      >
                        Noah Davis
                        <span className="text-body fs-13 fw-normal d-block">
                          32, Male
                        </span>
                      </Link>
                    </div>
                    <Link
                      to="#"
                      className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to={all_routes.editPatient}
                          className="dropdown-item d-flex align-items-center"
                        >
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
                          Delete
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={all_routes.appointments}
                          className="dropdown-item d-flex align-items-center"
                        >
                          Appointment
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-calendar me-1 text-dark" />
                    Last Appointment : Wed, 15 Jan 2025
                  </p>
                  <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-location-pin me-1 text-dark" />
                    Oakwood Street, Phoenix, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-34.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </Link>
                      <Link
                        to={all_routes.patientDetails}
                        className="text-dark fw-semibold"
                      >
                        Emily Ross
                        <span className="text-body fs-13 fw-normal d-block">
                          29, Female
                        </span>
                      </Link>
                    </div>
                    <Link
                      to="#"
                      className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to={all_routes.editPatient}
                          className="dropdown-item d-flex align-items-center"
                        >
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
                          Delete
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={all_routes.appointments}
                          className="dropdown-item d-flex align-items-center"
                        >
                          Appointment
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-calendar me-1 text-dark" />
                    Last Appointment : Fri, 10 Jan 2025
                  </p>
                  <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-location-pin me-1 text-dark" />
                    Hilltop Lane, Dallas, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.patientDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/users/user-31.jpg"
                          alt="product"
                          className="rounded-circle"
                        />
                      </Link>
                      <Link
                        to={all_routes.patientDetails}
                        className="text-dark fw-semibold"
                      >
                        Ryan Anderson
                        <span className="text-body fs-13 fw-normal d-block">
                          30, Male
                        </span>
                      </Link>
                    </div>
                    <Link
                      to="#"
                      className="shadow-sm fs-14 d-inline-flex border rounded-2 p-1"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to={all_routes.editPatient}
                          className="dropdown-item d-flex align-items-center"
                        >
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
                          Delete
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={all_routes.appointments}
                          className="dropdown-item d-flex align-items-center"
                        >
                          Appointment
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <p className="mb-2 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-calendar me-1 text-dark" />
                    Last Appointment : Tue, 04 Jan 2025
                  </p>
                  <p className="mb-0 text-truncate fs-13 d-flex align-items-center">
                    <i className="ti ti-location-pin me-1 text-dark" />
                    Hilltop Lane, Dallas, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* row end */}
          <div className="text-center">
            <Link to="#" className="btn btn-outline-white bg-white">
              Load More
              <i className="ti ti-loader-2 ms-1" />
            </Link>
          </div>
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

export default PatientsGrid;
