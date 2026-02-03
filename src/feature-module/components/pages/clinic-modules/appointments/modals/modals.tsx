import { Link } from "react-router";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import { all_routes } from "../../../../../routes/all_routes";

const Modals = () => {
  return (
    <>
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
              <i className="ti ti-x bg-white fs-16 text-dark" />
            </button>
          </div>
        </div>
        <div className="offcanvas-body pt-0 px-0">
          <h6 className="bg-light py-2 px-3 fw-bold"> When &amp; Where </h6>
          <div className="px-3 my-4">
            <div className="bg-light p-3 mb-3 border rounded-3 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Link to="#" className="avatar avatar-md me-2">
                  <ImageWithBasePath
                    src="assets/img/doctors/doctor-03.jpg"
                    alt="product"
                    className="rounded-circle"
                  />
                </Link>
                <Link to="#" className="text-dark fw-semibold">
                  Dr. Emily Carter
                  <span className="text-body fs-13 fw-normal d-block">
                    Pediatrician
                  </span>
                </Link>
              </div>
              <div className="flex-shrink-0">
                <Link
                  to="#"
                  className="btn btn-outline-white bg-white fs-14 d-inline-flex border rounded-2 p-1 me-1"
                >
                  <i className="ti ti-brand-hipchat" />
                </Link>
                <Link
                  to="#"
                  className="btn btn-outline-white bg-white shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
                >
                  <i className="ti ti-video" />
                </Link>
              </div>
            </div>
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
                <div className="avatar avatar-xs flex-shrink-0">
                  <ImageWithBasePath
                    src="assets/img/users/avatar-2.jpg"
                    alt=""
                    className="rounded-circle me-1 flex-shrink-0"
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
                  to={all_routes.appointmentCalendar}
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
                <div className="mb-3">
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
