import { Link } from "react-router";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import { DatePicker } from "antd";
import {
  Condition,
  StatusApproved,
  Supplier,
} from "../../../../../../core/common/selectOption";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";

const Modals = () => {
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
  return (
    <>
      {/* Start Add Asset */}
      <div className="modal fade" id="add_asset">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark fw-bold">Add Asset</h5>
              <button
                type="button"
                className="btn-close custom-btn-close opacity-100"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x bg-white fs-16 text-dark" />
              </button>
            </div>
            <div className="modal-body">
              {/* start row */}
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Asset Name <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Asset User <span className="text-danger">*</span>
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
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Purchase Date <span className="text-danger">*</span>
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
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Purchase From <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Manufacturer&nbsp;<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Model&nbsp;<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Serial Number&nbsp;<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Supplier<span className="text-danger">*</span>
                    </label>
                    <div className="input-group custom-select">
                      <CommonSelect
                        options={Supplier}
                        className="select"
                        defaultValue={Supplier[0]}
                      />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Condition&nbsp; <span className="text-danger">*</span>
                    </label>
                    <div className="input-group custom-select">
                      <CommonSelect
                        options={Condition}
                        className="select"
                        defaultValue={Condition[0]}
                      />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      warranty <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Value <span className="text-danger">* </span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent text-dark fs-14">
                      $
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={"0"}
                    />
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Status <span className="text-danger">*</span>
                    </label>
                    <div className="input-group custom-select">
                      <CommonSelect
                        options={StatusApproved}
                        className="select"
                        defaultValue={StatusApproved[0]}
                      />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <div>
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Description <span className="text-danger">*</span>
                      </label>
                      <textarea
                        rows={4}
                        className="form-control rounded"
                        placeholder="Description "
                      />
                    </div>
                  </div>
                </div>
                {/* end col */}
              </div>
              {/* end row */}
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
                Add Asset
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Add Asset  */}
      {/* Start Edit Asset */}
      <div className="modal fade" id="edit_asset">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark fw-bold">Edit Asset</h5>
              <button
                type="button"
                className="btn-close custom-btn-close opacity-100"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x bg-white fs-16 text-dark" />
              </button>
            </div>
            <div className="modal-body">
              {/* start row */}
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Asset Name <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="VitalScan Monitor"
                      />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Asset User <span className="text-danger">*</span>
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
                              placeholder="Emily clerk"
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
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Purchase Date <span className="text-danger">*</span>
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
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Purchase From <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={2547}
                      />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Manufacturer&nbsp;<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Endosys"
                      />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Model&nbsp;<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="CareKIT Pro"
                      />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Serial Number&nbsp;<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ENW12547E789"
                      />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Supplier<span className="text-danger">*</span>
                    </label>
                    <div className="input-group custom-select">
                      <CommonSelect
                        options={Supplier}
                        className="select"
                        defaultValue={Supplier[1]}
                      />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Condition&nbsp; <span className="text-danger">*</span>
                    </label>
                    <div className="input-group custom-select">
                      <CommonSelect
                        options={Condition}
                        className="select"
                        defaultValue={Condition[1]}
                      />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      warranty <span className="text-danger">*</span>
                    </label>
                    <div className="input-group custom-select">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="2 years"
                      />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Value <span className="text-danger">* </span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent text-dark fs-14">
                      $
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={"0"}
                      defaultValue={"100"}
                    />
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Status <span className="text-danger">*</span>
                    </label>
                    <div className="input-group custom-select">
                      <CommonSelect
                        options={StatusApproved}
                        className="select"
                        defaultValue={StatusApproved[1]}
                      />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <div>
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Description <span className="text-danger">*</span>
                      </label>
                      <textarea
                        rows={4}
                        className="form-control rounded"
                        placeholder=""
                        defaultValue={
                          " Evaluates the Autonomic Nervous System (ANS) to help identify disorders such as sudden death risk, silent heart attacks, hypertension, and syncope.​"
                        }
                      />
                    </div>
                  </div>
                </div>
                {/* end col */}
              </div>
              {/* end row */}
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
                Add Asset
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Edit Asset  */}
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
