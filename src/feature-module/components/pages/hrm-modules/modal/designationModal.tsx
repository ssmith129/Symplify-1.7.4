import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import {
  DesignDepartment,
  StatusActive,
} from "../../../../../core/common/selectOption";

const DesignationModal = () => {
  return (
    <>
      {/* Start Add Modal */}
      <div id="add_designation" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="text-dark modal-title fw-bold">
                Add New Designation
              </h4>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="mb-3">
                  <div className="d-flex align-items-center">
                    <div className="form-check d-flex align-items-center me-3">
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="Radio-2"
                        id="Radio-sm-1"
                      />
                      <label
                        className="form-check-label fs-13"
                        htmlFor="Radio-sm-1"
                      >
                        Staff
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="Radio-2"
                        id="Radio-sm-2"
                      />
                      <label
                        className="form-check-label fs-13"
                        htmlFor="Radio-sm-2"
                      >
                        Doctor
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Designation Name<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Department<span className="text-danger ms-1">*</span>
                  </label>
                  <CommonSelect
                    options={DesignDepartment}
                    className="select"
                    defaultValue={DesignDepartment[0]}
                  />
                </div>
                <div className="mb-0">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center gap-1">
                <button
                  type="button"
                  className="btn btn-white border"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Designation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Add Modal */}
      {/* Start Add Modal */}
      <div id="edit_designation" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="text-dark modal-title fw-bold">
                Edit Designation
              </h4>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="mb-3">
                  <div className="d-flex align-items-center">
                    <div className="form-check d-flex align-items-center me-3">
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="Radio-2"
                        id="Radio-sm-3"
                        defaultChecked
                      />
                      <label
                        className="form-check-label fs-13"
                        htmlFor="Radio-sm-3"
                      >
                        Staff
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="Radio-2"
                        id="Radio-sm-4"
                      />
                      <label
                        className="form-check-label fs-13"
                        htmlFor="Radio-sm-4"
                      >
                        Doctor
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Designation Name<span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Nurse"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Department<span className="text-danger ms-1">*</span>
                  </label>
                  <CommonSelect
                    options={DesignDepartment}
                    className="select"
                    defaultValue={DesignDepartment[1]}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    defaultValue={
                      "A nurse provides patient care and supports medical treatments."
                    }
                  />
                </div>
                <div className="mb-0">
                  <label className="form-label">Status</label>
                  <CommonSelect
                    options={StatusActive}
                    className="select"
                    defaultValue={StatusActive[1]}
                  />
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center gap-1">
                <button
                  type="button"
                  className="btn btn-white border"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Add Modal */}
      {/* Start Delete Modal  */}
      <div className="modal fade" id="delete_designation">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center position-relative z-1">
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-01.png"
                alt=""
                className="img-fluid position-absolute top-0 start-0 z-n1"
              />
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-02.png"
                alt=""
                className="img-fluid position-absolute bottom-0 end-0 z-n1"
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
                <Link
                  to={all_routes.designation}
                  className="btn btn-danger position-relative z-1"
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

export default DesignationModal;
