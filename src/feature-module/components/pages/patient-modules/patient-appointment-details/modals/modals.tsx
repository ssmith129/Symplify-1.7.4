import { Link } from "react-router";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import { DatePicker, TimePicker, type TimePickerProps } from "antd";
import dayjs from "dayjs";

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
      {/* Add New Event Start */}
      <div className="modal fade" id="add_event">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add New Event</h4>
              <button
                type="button"
                className="btn-close btn-close-modal "
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form>
              <div className="modal-body">
                {/* start row */}
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
                          className="form-control"
                          onChange={onChangeTime}
                          defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
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
                          className="form-control"
                          onChange={onChangeTime}
                          defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
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
                {/* end row */}
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
                className="btn-close btn-close-modal text-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
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
              className="btn-close opacity-100"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
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
              id="filter-submit"
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
              className="btn-close  opacity-100"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="ti ti-x bg-white fs-16 text-dark" />
            </button>
          </div>
        </div>
        <div className="offcanvas-body pt-0 px-0">
          <h6 className="bg-light py-2 px-3 text-dark fw-bold">
            When &amp; Where
          </h6>
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
            <div className="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
              Patient Details
              <div className="text-body fw-normal d-flex align-items-center">
                <div className="avatar avatar-sm">
                  <ImageWithBasePath
                    src="assets/img/users/avatar-2.jpg"
                    alt=""
                    className="rounded-circle me-1"
                  />
                </div>
                James Adrian
              </div>
            </div>
          </div>
          <h6 className="bg-light py-2 px-3 text-dark fw-bold">
            Appointment Details
          </h6>
          <div className="px-3 my-4">
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
                  to=""
                  className="btn-primary btn btn-sm rounded d-flex align-items-center"
                >
                  <i className="ti ti-video me-1" /> Start
                </Link>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p className="text-dark"> Status </p>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="mb-0">
                  <select className="select form-control rounded w-100">
                    <option>Pending</option>
                    <option>Oldest</option>
                    <option>Recent</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Add New Appointment*/}
      {/* Start Delete Modal  */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center position-relative">
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-01.png"
                alt=""
                className="img-fluid position-absolute top-0 start-0"
              />
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-02.png"
                alt=""
                className="img-fluid position-absolute bottom-0 end-0"
              />
              <div className="mb-3">
                <span className="avatar avatar-lg bg-danger text-white">
                  <i className="ti ti-trash fs-24" />
                </span>
              </div>
              <h5 className="fw-bold mb-1">Delete Confirmation</h5>
              <p className="mb-3">Are you sure want to delete?</p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light position-relative z-1 me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link to="#" className="btn btn-danger position-relative z-1">
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
