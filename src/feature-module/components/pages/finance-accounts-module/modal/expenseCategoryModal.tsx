
import { Link } from "react-router";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";

const ExpenseCategoryModal = () => {
  return (
    <>
      {/* Start Add Category */}
      <div className="modal fade" id="add_new_category">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark fw-bold">New Category</h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ><i className="ti ti-x"></i></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label mb-1 text-dark fs-14 fw-medium">
                  Category Name<span className="text-danger">*</span>
                </label>
                <div className="input-group">
                  <input type="text" className="form-control" />
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
                Add New Category
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Add Category  */}
      {/* Start Edit Category */}
      <div className="modal fade" id="edit_new_category">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark fw-bold">Edit Category</h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ><i className="ti ti-x"></i></button>
            </div>
            <div className="modal-body">
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Category Name<span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Medical Supplies"
                    />
                  </div>
                </div>
              </div>{" "}
              {/* end col */}
              <div className="col-lg-12">
                <div className="mb-3">
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Status<span className="text-danger">*</span>
                  </label>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="true"
                    >
                      Active
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
                          />
                          Options Enhanced
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                          <input
                            className="form-check-input m-0 me-2"
                            type="checkbox"
                            defaultChecked
                          />
                          Pending
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                          <input
                            className="form-check-input m-0 me-2"
                            type="checkbox"
                          />
                          New
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>{" "}
              {/* end col */}
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
                Add New Category
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Edit Category  */}
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
                  to="#"
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

export default ExpenseCategoryModal;
