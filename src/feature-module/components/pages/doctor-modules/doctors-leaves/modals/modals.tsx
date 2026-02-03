import { DatePicker } from "antd";
import { Link } from "react-router";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";

const Modals = () => {
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
  return (
    <>
      {/* Start Add leave */}
      <div className="modal fade" id="add-leave">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark fw-bold">Add New Leave</h5>
              <button
                type="button"
                className="btn-close btn-close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Leave Type<span className="text-danger">*</span>
                    </label>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                        <li>
                          <div className="mb-2">
                            <input
                              type="text"
                              className="form-control form-control"
                              placeholder="Search"
                            />
                          </div>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Casual Leave
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Sick Leave
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Maternity Leave
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Paternity Leave
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Compensatory Leave
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Emergency Leave
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Bereavement Leave
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Study/Exam Leave
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Paid Leave
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Unpaid Leave
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      From Date<span className="text-danger">*</span>
                    </label>
                    <div className="input-group position-relative">
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
                        <i className="ti ti-calendar text-body" />
                      </span>
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      To Date<span className="text-danger">*</span>
                    </label>
                    <div className="input-group position-relative">
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
                        <i className="ti ti-calendar text-body" />
                      </span>
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      No of Days<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <div className="row p-2 bg-light rounded align-items-center flex-wrap">
                      <div className="col-lg-6">
                        <label className="form-label mb-1 text-body fs-14 fw-medium">
                          dd/mm/yyyy
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <label className="form-label mb-1 text-dark fs-14 fw-medium">
                          Leave Type<span className="text-danger">*</span>
                        </label>
                        <div className="dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="true"
                          >
                            Select
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                                <input
                                  className="form-check-input m-0 me-2"
                                  type="checkbox"
                                />
                                Applied
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                                <input
                                  className="form-check-input m-0 me-2"
                                  type="checkbox"
                                  defaultChecked
                                />
                                Approved
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                                <input
                                  className="form-check-input m-0 me-2"
                                  type="checkbox"
                                  defaultChecked
                                />
                                Rejected
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <div>
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Reason
                      </label>
                      <textarea
                        rows={4}
                        className="form-control rounded"
                        placeholder="Description"
                      />
                    </div>
                  </div>
                </div>
                {/* end col */}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light btn-sm me-2 fs-13 fw-medium"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary btn-sm fs-13 fw-medium"
              >
                Add New Leave
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Add New leave  */}
      {/* Start Cancel Modal */}
      <div className="modal fade" id="cancel-leave">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark fw-bold">Cancel Reason</h5>
              <button
                type="button"
                className="btn-close opacity-100"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <div>
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Reason
                  </label>
                  <textarea
                    rows={4}
                    className="form-control rounded"
                    placeholder="Description"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light btn-sm me-2 fs-13 fw-medium"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary btn-sm fs-13 fw-medium"
              >
                Cancel Leave
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Cancel Modal  */}
      {/* Start Add leave */}
      <div className="modal fade" id="edit-leave">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark fw-bold">Edit New Leave</h5>
              <button
                type="button"
                className="btn-close btn-close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Leave Type<span className="text-danger">*</span>
                    </label>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Casual Leave
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                        <li>
                          <div className="mb-2">
                            <input
                              type="text"
                              className="form-control form-control"
                              placeholder="Search"
                            />
                          </div>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Casual Leave
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Sick Leave
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Maternity Leave
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Paternity Leave
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Compensatory Leave
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Emergency Leave
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Bereavement Leave
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Study/Exam Leave
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Paid Leave
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Unpaid Leave
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      From Date<span className="text-danger">*</span>
                    </label>
                    <div className="input-group position-relative">
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
                        <i className="ti ti-calendar text-body" />
                      </span>
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      To Date<span className="text-danger">*</span>
                    </label>
                    <div className="input-group position-relative">
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
                        <i className="ti ti-calendar text-body" />
                      </span>
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      No of Days<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="{30}"
                      />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <div className="row p-2 bg-light rounded align-items-center flex-wrap">
                      <div className="col-lg-6">
                        <label className="form-label mb-1 text-body fs-14 fw-medium">
                          dd/mm/yyyy
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <label className="form-label mb-1 text-dark fs-14 fw-medium">
                          Leave Type<span className="text-danger">*</span>
                        </label>
                        <div className="dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="true"
                          >
                            Applied
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                                <input
                                  className="form-check-input m-0 me-2"
                                  type="checkbox"
                                />
                                Applied
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                                <input
                                  className="form-check-input m-0 me-2"
                                  type="checkbox"
                                  defaultChecked
                                />
                                Approved
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                                <input
                                  className="form-check-input m-0 me-2"
                                  type="checkbox"
                                  defaultChecked
                                />
                                Rejected
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <div>
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Reason
                      </label>
                      <textarea
                        rows={4}
                        className="form-control rounded"
                        placeholder="Description"
                      />
                    </div>
                  </div>
                </div>
                {/* end col */}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light btn-sm me-2 fs-13 fw-medium"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary btn-sm fs-13 fw-medium"
              >
                Edit Leave
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Add New leave  */}
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
