import { Link } from "react-router";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import { DatePicker, TimePicker, type TimePickerProps } from "antd";
import dayjs from "dayjs";
import { all_routes } from "../../../../../routes/all_routes";

const Modals = () => {
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
  const onChangeTime: TimePickerProps["onChange"] = (time, timeString) => {
    console.log(time, timeString);
  };
  return (
    <>
      {/* Start Add New Appointment */}
      <div
        className="offcanvas offcanvas-offset offcanvas-end"
        tabIndex={-1}
        id="new_appointment"
      >
        <div className="offcanvas-header d-block pb-0 px-0">
          <div className="border-bottom d-flex align-items-center justify-content-between pb-3 px-3">
            <h5 className="offcanvas-title fs-18 fw-bold">New Appointment</h5>
            <button
              type="button"
              className="btn-close custom-btn-close opacity-100"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
             
            </button>
          </div>
        </div>
        <div className="offcanvas-body pt-3">
          <form action="#">
            {/* start row*/}
            <div className="row">
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Appointment ID <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control rounded bg-light"
                      defaultValue="AP234354"
                    />
                  </div>
                </div>
              </div>
              {/* end col*/}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Patient<span className="text-danger">*</span>
                  </label>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="true"
                    >
                      Select
                    </Link>
                    <div className="dropdown-menu shadow-lg w-100 dropdown-info">
                      <div className="mb-3">
                        <div className="input-icon-start position-relative">
                          <span className="input-icon-addon fs-12">
                            <i className="ti ti-search" />
                          </span>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Search"
                          />
                        </div>
                      </div>
                      <ul className="mb-3 list-style-none">
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="assets/img/users/user-02.jpg"
                                className="flex-shrink-0 rounded-circle"
                                alt="img"
                              />
                            </span>
                            Emily Clark
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-01.jpg"
                                className="flex-shrink-0 rounded-circle"
                                alt="img"
                              />
                            </span>
                            John Carter
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-16.jpg"
                                className="flex-shrink-0 rounded-circle"
                                alt="img"
                              />
                            </span>
                            Sophia White
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-15.jpg"
                                className="flex-shrink-0 rounded-circle"
                                alt="img"
                              />
                            </span>
                            Michael Johnson
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-14.jpg"
                                className="flex-shrink-0 rounded-circle"
                                alt="img"
                              />
                            </span>
                            Olivia Harris
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-01.jpg"
                                className="flex-shrink-0 rounded-circle"
                                alt="img"
                              />
                            </span>
                            David Anderson
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col*/}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Appointment Type <span className="text-danger">*</span>
                  </label>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="true"
                    >
                      Select
                    </Link>
                    <div className="dropdown-menu shadow-lg w-100 dropdown-info">
                      <div className="mb-3">
                        <div className="input-icon-start position-relative">
                          <span className="input-icon-addon fs-12">
                            <i className="ti ti-search" />
                          </span>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <ul className="mb-3 list-style-none">
                        <li className="list-none">
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Online
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Member
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col*/}
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Date of Appointment <span className="text-danger">*</span>
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
              </div>
              {/* end col*/}
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Time <span className="text-danger">*</span>
                  </label>
                  <div className="input-icon-end position-relative">
                    <TimePicker
                      className="form-control"
                      onChange={onChangeTime}
                      defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                    />
                    <span className="input-icon-addon">
                      <i className="ti ti-clock" />
                    </span>
                  </div>
                </div>
              </div>
              {/* end col*/}
              <div className="col-lg-12">
                <div className="mb-3">
                  <div>
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Appointment Reason
                    </label>
                    <textarea rows={4} className="form-control rounded" />
                  </div>
                </div>
              </div>
              {/* end col*/}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Status<span className="text-danger">*</span>
                  </label>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="true"
                    >
                      Select
                    </Link>
                    <div className="dropdown-menu shadow-lg w-100 dropdown-info">
                      <div className="mb-3">
                        <div className="input-icon-start position-relative">
                          <span className="input-icon-addon fs-12">
                            <i className="ti ti-search" />
                          </span>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <ul className="mb-3 list-style-none">
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Checked Out
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Checked In
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Cancelled
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Scheduled
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col*/}
            </div>
            {/* end row*/}
          </form>
        </div>
        <div className="offcanvas-footer mb-1 mt-3 p-3 border-1 border-top">
          <div className=" d-flex justify-content-end gap-2">
            <Link to="#" className="btn btn-light btm-md">
              Cancel
            </Link>
            <button
              data-bs-dismiss="offcanvas"
              className="btn btn-primary btm-md"
            >
              Create Create Appointment
            </button>
          </div>
        </div>
      </div>
      {/* End Add New Appointment*/}
      {/* Start View Details */}
      <div
        className="offcanvas offcanvas-offset offcanvas-end"
        tabIndex={-1}
        id="view_details"
      >
        <div className="offcanvas-header d-block pb-0 px-0">
          <div className="border-bottom d-flex align-items-center justify-content-between pb-3 px-3">
            <h5 className="offcanvas-title fs-18 fw-bold">
              Appointment Details
              <span className="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium ms-2">
                #AP544658
              </span>
            </h5>
            <button
              type="button"
              className="btn-close custom-btn-close opacity-100"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="ti ti-x  fs-16 text-dark" />
            </button>
          </div>
        </div>
        <div className="offcanvas-body pt-0 px-0">
          <h6 className="bg-light py-2 px-3 text-dark fw-bold">
            When &amp; Where
          </h6>
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 bg-light mx-3 p-3 rounded my-3">
            <div className="d-flex align-items-center gap-2">
              <div className="avatar avatar-lg">
                <ImageWithBasePath
                  src="assets/img/doctors/doctor-01.jpg"
                  alt="doctor-01"
                  className="img-fluid img1 rounded-circle"
                />
              </div>
              <h6 className="fs-14 fw-semibold m-0">
                Dr. Emily Carter
                <span className="d-block fs-13 fw-normal text-body pt-1">
                  Pediatrician
                </span>
              </h6>
            </div>
            <div className="gap-1 d-flex">
              <Link
                to=""
                className="bg-white d-flex align-items-center justify-content-center p-1 border rounded"
              >
                <i className="ti ti-brand-hipchat fs-13" />
              </Link>
              <Link
                to=""
                className="bg-white d-flex align-items-center justify-content-center p-1 border rounded"
              >
                <i className="ti ti-video fs-13" />
              </Link>
            </div>
          </div>
          <div className="px-3 my-4">
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Appointment On
              <span className="text-body fw-normal">Saturday, 25 Apr 2025</span>
            </p>
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Time
              <span className="text-body fw-normal">09:00 AM - 11:00 AM</span>
            </p>
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Location
              <span className="text-body fw-normal">Newyork , USA </span>
            </p>
            <p className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Appointment Type
              <span className="text-body fw-normal">Online Consultation</span>
            </p>
          </div>
          <h6 className="bg-light py-2 px-3 text-dark fw-bold">
            Appointment Details
          </h6>
          <div className="px-3 my-3">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center">
                Telehealth
                <label className="d-flex align-items-center form-switch ps-1">
                  <input
                    className="form-check-input m-0 me-2"
                    type="checkbox"
                    defaultChecked
                  />
                </label>
              </div>
              <div>
                <Link
                  to={all_routes.onlineconsultations}
                  className="btn-primary btn btn-sm rounded d-flex align-items-center"
                >
                  <i className="ti ti-video me-1 fs-13" /> Start
                </Link>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p className="text-dark"> Status </p>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="mb-0">
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="true"
                    >
                      Pending
                    </Link>
                    <div className="dropdown-menu shadow-lg w-100 dropdown-info">
                      <div className="mb-3">
                        <div className="input-icon-start position-relative">
                          <span className="input-icon-addon fs-12">
                            <i className="ti ti-search" />
                          </span>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <ul className="mb-0 list-style-none">
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Checked Out
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Checked In
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Cancelled
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Scheduled
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Add New Appointment*/}
      {/* Start Edit New Appointment */}
      <div
        className="offcanvas offcanvas-offset offcanvas-end"
        tabIndex={-1}
        id="edit_appointment"
      >
        <div className="offcanvas-header d-block pb-0 px-0">
          <div className="border-bottom d-flex align-items-center justify-content-between pb-3 px-3">
            <h5 className="offcanvas-title fs-18 fw-bold"> Edit Appointment</h5>
            <button
              type="button"
              className="btn-close custom-btn-close opacity-100"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="ti ti-x  fs-16 text-dark" />
            </button>
          </div>
        </div>
        <div className="offcanvas-body pt-3">
          <form action="#">
            {/* start row*/}
            <div className="row">
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Appointment ID <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control rounded bg-light"
                      defaultValue="AP234354"
                    />
                  </div>
                </div>
              </div>
              {/* end col*/}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Patient<span className="text-danger">*</span>
                  </label>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="true"
                    >
                      Emily Clark
                    </Link>
                    <div className="dropdown-menu shadow-lg w-100 dropdown-info">
                      <div className="mb-3">
                        <div className="input-icon-start position-relative">
                          <span className="input-icon-addon fs-12">
                            <i className="ti ti-search" />
                          </span>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Search"
                          />
                        </div>
                      </div>
                      <ul className="mb-3 list-style-none">
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="assets/img/users/user-02.jpg"
                                className="flex-shrink-0 rounded-circle"
                                alt="img"
                              />
                            </span>
                            Emily Clark
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-01.jpg"
                                className="flex-shrink-0 rounded-circle"
                                alt="img"
                              />
                            </span>
                            John Carter
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-16.jpg"
                                className="flex-shrink-0 rounded-circle"
                                alt="img"
                              />
                            </span>
                            Sophia White
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-15.jpg"
                                className="flex-shrink-0 rounded-circle"
                                alt="img"
                              />
                            </span>
                            Michael Johnson
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-14.jpg"
                                className="flex-shrink-0 rounded-circle"
                                alt="img"
                              />
                            </span>
                            Olivia Harris
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            <span className="avatar avatar-sm rounded-circle me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-01.jpg"
                                className="flex-shrink-0 rounded-circle"
                                alt="img"
                              />
                            </span>
                            David Anderson
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col*/}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Appointment Type <span className="text-danger">*</span>
                  </label>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="true"
                    >
                      In Person
                    </Link>
                    <div className="dropdown-menu shadow-lg w-100 dropdown-info">
                      <div className="mb-3">
                        <div className="input-icon-start position-relative">
                          <span className="input-icon-addon fs-12">
                            <i className="ti ti-search" />
                          </span>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <ul className="mb-0 list-style-none">
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            In Person
                          </label>
                        </li>
                        <li className="list-none">
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Online
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col*/}
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Date of Appointment <span className="text-danger">*</span>
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
              </div>
              {/* end col*/}
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Time <span className="text-danger">*</span>
                  </label>
                  <div className="input-icon-end position-relative">
                    <TimePicker
                      className="form-control"
                      onChange={onChangeTime}
                      defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                    />
                    <span className="input-icon-addon">
                      <i className="ti ti-clock" />
                    </span>
                  </div>
                </div>
              </div>
              {/* end col*/}
              <div className="col-lg-12">
                <div className="mb-3">
                  <div>
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Appointment Reason
                    </label>
                    <textarea
                      rows={4}
                      className="form-control rounded"
                      defaultValue={
                        " An account of the present illness, which includes the circumstances surrounding the onset of recent health changes and the Purpose. "
                      }
                    />
                  </div>
                </div>
              </div>
              {/* end col*/}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Status<span className="text-danger">*</span>
                  </label>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="true"
                    >
                      Checked Out
                    </Link>
                    <div className="dropdown-menu shadow-lg w-100 dropdown-info">
                      <div className="mb-3">
                        <div className="input-icon-start position-relative">
                          <span className="input-icon-addon fs-12">
                            <i className="ti ti-search" />
                          </span>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <ul className="mb-3 list-style-none">
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Checked Out
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Checked In
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Cancelled
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Scheduled
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col*/}
            </div>
            {/* end row*/}
          </form>
        </div>
        <div className="offcanvas-footer mb-1 mt-3 p-3 border-1 border-top">
          <div className=" d-flex justify-content-end gap-2">
            <Link to="#" className="btn btn-light btm-md">
              Cancel
            </Link>
            <button
              data-bs-dismiss="offcanvas"
              className="btn btn-primary btm-md"
            >
              Create Create Appointment
            </button>
          </div>
        </div>
      </div>
      {/* End Edit New Appointment*/}
      {/* Start Delete Modal  */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center position-relative">
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-01.png"
                alt=""
                className="img-fluid position-absolute top-0 start-0 z-0"
              />
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-02.png"
                alt=""
                className="img-fluid position-absolute bottom-0 end-0 z-0"
              />
              <div className="mb-3 position-relative z-1">
                <span className="avatar avatar-lg bg-danger text-white">
                  <i className="ti ti-trash fs-24" />
                </span>
              </div>
              <h5 className="fw-bold mb-1 position-relative z-1">
                Delete Confirmation
              </h5>
              <p className="mb-3 position-relative z-1">
                Are you sure want to delete?
              </p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light position-relative z-1 me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link
                  to=""
                  className="btn btn-danger position-relative z-1"
                  data-bs-dismiss="modal"
                >
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Delete Modal  */}
    </>
  );
};

export default Modals;
