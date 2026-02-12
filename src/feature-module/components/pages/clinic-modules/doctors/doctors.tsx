import { DatePicker, Select } from "antd";
import {
  Amount,
  Department,
  Designation,
  Doctor,
  Status,
} from "../../../../../core/common/selectOption";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import { Link } from "react-router";
import Modals from "./modals/modals";
import PageHeader from "../../../../../core/common/page-header/PageHeader";
import { all_routes } from "../../../../routes/all_routes";

const Doctors = () => {
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
          <PageHeader
            className="mb-3"
            title={
              <>
                Doctor Grid
                <span className="badge badge-soft-primary fs-13 fw-medium ms-2">
                  Total Doctors : 565
                </span>
              </>
            }
            actions={
              <>
              <div className="dropdown me-2">
                <Link
                  to="#"
                  className="btn btn-white bg-white fs-14 py-1 border d-inline-flex text-dark align-items-center"
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
                    <h4 className="mb-0">Filter</h4>
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
                          <label className="form-label">Doctor</label>
                          <Link to="#" className="link-primary mb-1">
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          defaultValue={[]}
                          options={Doctor}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Designation</label>
                          <Link to="#" className="link-primary mb-1">
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          defaultValue={[]}
                          options={Designation}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Department</label>
                          <Link to="#" className="link-primary mb-1">
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          defaultValue={[]}
                          options={Department}
                        />
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
                          <label className="form-label">Amount</label>
                          <Link to="#" className="link-primary mb-1">
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          defaultValue={[]}
                          options={Amount}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <label className="form-label">Status</label>
                          <Link to="#" className="link-primary mb-1">
                            Reset
                          </Link>
                        </div>
                        <Select
                          mode="multiple"
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          defaultValue={[]}
                          options={Status}
                        />
                      </div>
                    </div>
                    <div className="filter-footer d-flex align-items-center justify-content-end border-top">
                      <Link
                        to="#"
                        className="btn btn-light btn-md me-2"
                        id="close-filter"
                      >
                        Close
                      </Link>
                      <button type="submit" className="btn btn-primary btn-md">
                        Filter
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
                <Link
                  to={all_routes.doctorsList}
                  className="bg-white rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-list fs-14 text-body" />
                </Link>
                <Link
                  to={all_routes.doctors}
                  className="bg-light rounded p-1 d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-layout-grid fs-14 text-body" />
                </Link>
              </div>
              <Link
                to={all_routes.addDoctors}
                className="btn btn-primary ms-2 fs-13 btn-md"
              >
                <i className="ti ti-plus me-1" />
                New Doctor
              </Link>
              </>
            }
          />
          {/* End Page Header */}
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                  <div className="me-3 doctor-profile-img">
                    <Link to={all_routes.doctordetails}>
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-01.jpg"
                        className="rounded"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h6 className="mb-0 fw-semibold">
                        <Link to={all_routes.doctordetails}>
                          Dr. Mick Thompson
                        </Link>
                      </h6>
                      <div className="action-item">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              to={all_routes.editDoctors}
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
                        </ul>
                      </div>
                    </div>
                    <span className="d-block mb-2 fs-13">Cardiologist</span>
                    <p className="mb-2 fs-13">Available : Mon, 20 Jan 2025</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="text-primary fs-14 mb-0">
                        <span className="text-muted fs-13 fw-normal">
                          Starts From :
                        </span>
                        $499
                      </h6>
                      <Link
                        to={all_routes.appointmentCalendar}
                        className="avatar avatar-xs border text-muted fs-14"
                      >
                        <i className="ti ti-calendar-cog" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                  <div className="me-3 doctor-profile-img">
                    <Link to={all_routes.doctordetails}>
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-02.jpg"
                        className="rounded"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h6 className="mb-0 fw-semibold">
                        <Link to={all_routes.doctordetails}>
                          Dr. Sarah Johnson
                        </Link>
                      </h6>
                      <div className="action-item">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              to={all_routes.editDoctors}
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
                        </ul>
                      </div>
                    </div>
                    <span className="d-block mb-2 fs-13">
                      Orthopedic Surgeon
                    </span>
                    <p className="mb-2 fs-13">Available : Wed, 22 Jan 2025</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="text-primary fs-14 mb-0">
                        <span className="text-muted fs-13 fw-normal">
                          Starts From :
                        </span>
                        $450
                      </h6>
                      <Link
                        to={all_routes.appointmentCalendar}
                        className="avatar avatar-xs border text-muted fs-14"
                      >
                        <i className="ti ti-calendar-cog" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                  <div className="me-3 doctor-profile-img">
                    <Link to={all_routes.doctordetails}>
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-03.jpg"
                        className="rounded"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h6 className="mb-0 fw-semibold">
                        <Link to={all_routes.doctordetails}>
                          Dr. Emily Carter
                        </Link>
                      </h6>
                      <div className="action-item">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              to={all_routes.editDoctors}
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
                        </ul>
                      </div>
                    </div>
                    <span className="d-block mb-2 fs-13">Pediatrician</span>
                    <p className="mb-2 fs-13">Available : Fri, 24 Jan 2025</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="text-primary fs-14 mb-0">
                        <span className="text-muted fs-13 fw-normal">
                          Starts From :
                        </span>
                        $300
                      </h6>
                      <Link
                        to={all_routes.appointmentCalendar}
                        className="avatar avatar-xs border text-muted fs-14"
                      >
                        <i className="ti ti-calendar-cog" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                  <div className="me-3 doctor-profile-img">
                    <Link to={all_routes.doctordetails}>
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-04.jpg"
                        className="rounded"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h6 className="mb-0 fw-semibold">
                        <Link to={all_routes.doctordetails}>Dr. David Lee</Link>
                      </h6>
                      <div className="action-item">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              to={all_routes.editDoctors}
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
                        </ul>
                      </div>
                    </div>
                    <span className="d-block mb-2 fs-13">Gynecologist</span>
                    <p className="mb-2 fs-13">Available : Tue, 21 Jan 2025</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="text-primary fs-14 mb-0">
                        <span className="text-muted fs-13 fw-normal">
                          Starts From :
                        </span>
                        $250
                      </h6>
                      <Link
                        to={all_routes.appointmentCalendar}
                        className="avatar avatar-xs border text-muted fs-14"
                      >
                        <i className="ti ti-calendar-cog" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                  <div className="me-3 doctor-profile-img">
                    <Link to={all_routes.doctordetails}>
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-05.jpg"
                        className="rounded"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h6 className="mb-0 fw-semibold">
                        <Link to={all_routes.doctordetails}>Dr. Anna Kim</Link>
                      </h6>
                      <div className="action-item">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              to={all_routes.editDoctors}
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
                        </ul>
                      </div>
                    </div>
                    <span className="d-block mb-2 fs-13">Psychiatrist</span>
                    <p className="mb-2 fs-13">Available : Mon, 27 Jan 2025</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="text-primary fs-14 mb-0">
                        <span className="text-muted fs-13 fw-normal">
                          Starts From :
                        </span>
                        $350
                      </h6>
                      <Link
                        to={all_routes.appointmentCalendar}
                        className="avatar avatar-xs border text-muted fs-14"
                      >
                        <i className="ti ti-calendar-cog" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                  <div className="me-3 doctor-profile-img">
                    <Link to={all_routes.doctordetails}>
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-06.jpg"
                        className="rounded"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h6 className="mb-0 fw-semibold">
                        <Link to={all_routes.doctordetails}>
                          Dr. John Smith
                        </Link>
                      </h6>
                      <div className="action-item">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              to={all_routes.editDoctors}
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
                        </ul>
                      </div>
                    </div>
                    <span className="d-block mb-2 fs-13">Neurosurgeon</span>
                    <p className="mb-2 fs-13">Available : Thu, Jan 30, 2025</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="text-primary fs-14 mb-0">
                        <span className="text-muted fs-13 fw-normal">
                          Starts From :
                        </span>
                        $499
                      </h6>
                      <Link
                        to={all_routes.appointmentCalendar}
                        className="avatar avatar-xs border text-muted fs-14"
                      >
                        <i className="ti ti-calendar-cog" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                  <div className="me-3 doctor-profile-img">
                    <Link to={all_routes.doctordetails}>
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-07.jpg"
                        className="rounded"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h6 className="mb-0 fw-semibold">
                        <Link to={all_routes.doctordetails}>
                          Dr. Lisa White
                        </Link>
                      </h6>
                      <div className="action-item">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              to={all_routes.editDoctors}
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
                        </ul>
                      </div>
                    </div>
                    <span className="d-block mb-2 fs-13">Oncologist</span>
                    <p className="mb-2 fs-13">Available : Sat, 25 Jan 2025</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="text-primary fs-14 mb-0">
                        <span className="text-muted fs-13 fw-normal">
                          Starts From :
                        </span>
                        $200
                      </h6>
                      <Link
                        to={all_routes.appointmentCalendar}
                        className="avatar avatar-xs border text-muted fs-14"
                      >
                        <i className="ti ti-calendar-cog" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                  <div className="me-3 doctor-profile-img">
                    <Link to={all_routes.doctordetails}>
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-08.jpg"
                        className="rounded"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h6 className="mb-0 fw-semibold">
                        <Link to={all_routes.doctordetails}>
                          Dr. Patricia Brown
                        </Link>
                      </h6>
                      <div className="action-item">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              to={all_routes.editDoctors}
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
                        </ul>
                      </div>
                    </div>
                    <span className="d-block mb-2 fs-13">Pulmonologist</span>
                    <p className="mb-2 fs-13">Available : Sun, 01 Feb 2025</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="text-primary fs-14 mb-0">
                        <span className="text-muted fs-13 fw-normal">
                          Starts From :
                        </span>
                        $450
                      </h6>
                      <Link
                        to={all_routes.appointmentCalendar}
                        className="avatar avatar-xs border text-muted fs-14"
                      >
                        <i className="ti ti-calendar-cog" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                  <div className="me-3 doctor-profile-img">
                    <Link to={all_routes.doctordetails}>
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-09.jpg"
                        className="rounded"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h6 className="mb-0 fw-semibold">
                        <Link to={all_routes.doctordetails}>
                          Dr. Rachel Green
                        </Link>
                      </h6>
                      <div className="action-item">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              to={all_routes.editDoctors}
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
                        </ul>
                      </div>
                    </div>
                    <span className="d-block mb-2 fs-13">Urologist</span>
                    <p className="mb-2 fs-13">Available : Tue, 28 Jan 2025</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="text-primary fs-14 mb-0">
                        <span className="text-muted fs-13 fw-normal">
                          Starts From :
                        </span>
                        $400
                      </h6>
                      <Link
                        to={all_routes.appointmentCalendar}
                        className="avatar avatar-xs border text-muted fs-14"
                      >
                        <i className="ti ti-calendar-cog" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                  <div className="me-3 doctor-profile-img">
                    <Link to={all_routes.doctordetails}>
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-10.jpg"
                        className="rounded"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h6 className="mb-0 fw-semibold">
                        <Link to={all_routes.doctordetails}>
                          Dr. Michael Smith
                        </Link>
                      </h6>
                      <div className="action-item">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              to={all_routes.editDoctors}
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
                        </ul>
                      </div>
                    </div>
                    <span className="d-block mb-2 fs-13">Cardiologist</span>
                    <p className="mb-2 fs-13">Available : Thu, 05 Feb 2025</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="text-primary fs-14 mb-0">
                        <span className="text-muted fs-13 fw-normal">
                          Starts From :
                        </span>
                        $300
                      </h6>
                      <Link
                        to={all_routes.appointmentCalendar}
                        className="avatar avatar-xs border text-muted fs-14"
                      >
                        <i className="ti ti-calendar-cog" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                  <div className="me-3 doctor-profile-img">
                    <Link to={all_routes.doctordetails}>
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-11.jpg"
                        className="rounded"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h6 className="mb-0 fw-semibold">
                        <Link to={all_routes.doctordetails}>
                          Dr. Sarah Johnson
                        </Link>
                      </h6>
                      <div className="action-item">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              to={all_routes.editDoctors}
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
                        </ul>
                      </div>
                    </div>
                    <span className="d-block mb-2 fs-13">Surgeon</span>
                    <p className="mb-2 fs-13">Available : Mon, 09 Feb 2025</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="text-primary fs-14 mb-0">
                        <span className="text-muted fs-13 fw-normal">
                          Starts From :
                        </span>
                        $500
                      </h6>
                      <Link
                        to={all_routes.appointmentCalendar}
                        className="avatar avatar-xs border text-muted fs-14"
                      >
                        <i className="ti ti-calendar-cog" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                  <div className="me-3 doctor-profile-img">
                    <Link to={all_routes.doctordetails}>
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-12.jpg"
                        className="rounded"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h6 className="mb-0 fw-semibold">
                        <Link to={all_routes.doctordetails}>
                          Dr. Adrian White
                        </Link>
                      </h6>
                      <div className="action-item">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              to={all_routes.editDoctors}
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
                        </ul>
                      </div>
                    </div>
                    <span className="d-block mb-2 fs-13">Practitioner</span>
                    <p className="mb-2 fs-13">Available : Sat, 25 Jan 2025</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="text-primary fs-14 mb-0">
                        <span className="text-muted fs-13 fw-normal">
                          Starts From :
                        </span>
                        $200
                      </h6>
                      <Link
                        to={all_routes.appointmentCalendar}
                        className="avatar avatar-xs border text-muted fs-14"
                      >
                        <i className="ti ti-calendar-cog" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                  <div className="me-3 doctor-profile-img">
                    <Link to={all_routes.doctordetails}>
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-13.jpg"
                        className="rounded"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h6 className="mb-0 fw-semibold">
                        <Link to={all_routes.doctordetails}>Dr. Ken Clark</Link>
                      </h6>
                      <div className="action-item">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              to={all_routes.editDoctors}
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
                        </ul>
                      </div>
                    </div>
                    <span className="d-block mb-2 fs-13">Dermatologist</span>
                    <p className="mb-2 fs-13">Available : Wed, 12 Feb 2025</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="text-primary fs-14 mb-0">
                        <span className="text-muted fs-13 fw-normal">
                          Starts From :
                        </span>
                        $350
                      </h6>
                      <Link
                        to={all_routes.appointmentCalendar}
                        className="avatar avatar-xs border text-muted fs-14"
                      >
                        <i className="ti ti-calendar-cog" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                  <div className="me-3 doctor-profile-img">
                    <Link to={all_routes.doctordetails}>
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-14.jpg"
                        className="rounded"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h6 className="mb-0 fw-semibold">
                        <Link to={all_routes.doctordetails}>
                          Dr. Oliver King
                        </Link>
                      </h6>
                      <div className="action-item">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              to={all_routes.editDoctors}
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
                        </ul>
                      </div>
                    </div>
                    <span className="d-block mb-2 fs-13">Orthopedist</span>
                    <p className="mb-2 fs-13">Available : Fri, 14 Feb 2025</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="text-primary fs-14 mb-0">
                        <span className="text-muted fs-13 fw-normal">
                          Starts From :
                        </span>
                        $600
                      </h6>
                      <Link
                        to={all_routes.appointmentCalendar}
                        className="avatar avatar-xs border text-muted fs-14"
                      >
                        <i className="ti ti-calendar-cog" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                  <div className="me-3 doctor-profile-img">
                    <Link to={all_routes.doctordetails}>
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-15.jpg"
                        className="rounded"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="flex-fill">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h6 className="mb-0 fw-semibold">
                        <Link to={all_routes.doctordetails}>
                          Dr. Avan Davis
                        </Link>
                      </h6>
                      <div className="action-item">
                        <Link to="#" data-bs-toggle="dropdown">
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              to={all_routes.editDoctors}
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
                        </ul>
                      </div>
                    </div>
                    <span className="d-block mb-2 fs-13">Endocrinologist</span>
                    <p className="mb-2 fs-13">Available : Tue, 17 Feb 2025</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="text-primary fs-14 mb-0">
                        <span className="text-muted fs-13 fw-normal">
                          Starts From :
                        </span>
                        $375
                      </h6>
                      <Link
                        to={all_routes.appointmentCalendar}
                        className="avatar avatar-xs border text-muted fs-14"
                      >
                        <i className="ti ti-calendar-cog" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          <div className="text-center">
            <Link to="#" className="btn btn-white bg-white text-dark fs-13">
              Load More
              <span className="spinner-border spinner-border-sm ms-1" />
            </Link>
          </div>
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

export default Doctors;
