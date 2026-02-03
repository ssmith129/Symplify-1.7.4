import { Link } from "react-router";
import {
  Category,
  StatusActive,
} from "../../../../../../core/common/selectOption";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import PredefinedDatePicker from "../../../../../../core/common/datePicker";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import { all_routes } from "../../../../../routes/all_routes";

const Modals = () => {
  return (
    <>
      {/* Start Add Categories */}
      <div id="add_categories" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark modal-title">Add New Category</h5>
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
                <div className="mb-2">
                  <label className="form-label">
                    Category Name<span className="text-danger ms-1">*</span>
                  </label>
                  <CommonSelect
                    options={Category}
                    className="select"
                    defaultValue={Category[0]}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">
                    Date<span className="text-danger ms-1">*</span>
                  </label>
                  <div className="position-relative report-rangepicker">
                    <PredefinedDatePicker />
                    <span className="input-icon-addon fs-16 text-gray-9">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
                <div className="mb-0">
                  <label className="form-label">
                    Status<span className="text-danger ms-1">*</span>
                  </label>
                  <CommonSelect
                    options={StatusActive}
                    className="select"
                    defaultValue={StatusActive[0]}
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
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Add Categories */}
      {/* Start Edit Categories */}
      <div id="edit_categories" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark modal-title">Edit Category</h5>
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
                <div className="mb-2">
                  <label className="form-label">
                    Category Name<span className="text-danger ms-1">*</span>
                  </label>
                  <CommonSelect
                    options={Category}
                    className="select"
                    defaultValue={Category[1]}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">
                    Date<span className="text-danger ms-1">*</span>
                  </label>
                  <div className="report-rangepicker position-relative">
                    <PredefinedDatePicker />
                    <span className="input-icon-addon fs-16 text-gray-9">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
                <div className="mb-0">
                  <label className="form-label">
                    Status<span className="text-danger ms-1">*</span>
                  </label>
                  <CommonSelect
                    options={StatusActive}
                    className="select"
                    defaultValue={StatusActive[0]}
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
      {/* End Edit Categories */}
      {/* Start Delete Modal  */}
      <div className="modal fade" id="delete_categories">
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
              <p className="mb-3">
                Are you sure, you want to delete Blog Category?
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
                  to={all_routes.blogCategories}
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

export default Modals;
