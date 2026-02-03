import { Link } from "react-router";
import SettingsSidebar from "../../../../../core/common/settings-sidebar/settingsSidebar";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";

const SignaturesSettings = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="mb-3 border-bottom pb-3">
            <h4 className="fw-bold mb-0">Settings</h4>
          </div>
          {/* End Page Header */}
          <div className="card">
            <div className="card-body p-0">
              <div className="settings-wrapper d-flex">
                {/* Start Settings Sidebar */}
               <SettingsSidebar/>
                {/* End Settings Sidebar */}
                <div className="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
                  <div className="card-header border-bottom px-0 mx-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="fw-bold">Signatures</h5>
                      <Link
                        to="#"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#add_reason"
                      >
                        <i className="ti ti-plus me-1" />
                        New Signature
                      </Link>
                    </div>
                  </div>
                  <div className="card-body px-0 mx-3">
                    {/* Table List */}
                    <div className="table-responsive border">
                      <table className="table table-nowrap">
                        <thead className="tablehead-light">
                          <tr>
                            <th>Signature Name</th>
                            <th>Signature</th>
                            <th>Status</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <p className="mb-0 me-2">Samuel Donatte</p>
                                <span className="badge badge-soft-primary border border-primary fw-medium">
                                  Default
                                </span>
                              </div>
                            </td>
                            <td>
                              <ImageWithBasePath
                                src="assets/img/icons/signature-01.svg"
                                alt="img"
                                className="img-fluid"
                              />
                            </td>
                            <td>
                              <span className="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2">
                                Active
                              </span>
                            </td>
                            <td className="action-item">
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                className="btn p-1 btn-white border"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu p-2">
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_reason"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_reason"
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>Michael Smith</td>
                            <td>
                              <ImageWithBasePath
                                src="assets/img/icons/signature-02.svg"
                                alt="img"
                                className="img-fluid"
                              />
                            </td>
                            <td>
                              <span className="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2">
                                Active
                              </span>
                            </td>
                            <td className="action-item">
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                className="btn p-1 btn-white border"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu p-2">
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_reason"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_reason"
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>Alberto Alleo</td>
                            <td>
                              <ImageWithBasePath
                                src="assets/img/icons/signature-03.svg"
                                alt="img"
                                className="img-fluid"
                              />
                            </td>
                            <td>
                              <span className="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2">
                                Active
                              </span>
                            </td>
                            <td className="action-item">
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                className="btn p-1 btn-white border"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu p-2">
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_reason"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_reason"
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>Ernesto Janetts</td>
                            <td>
                              <ImageWithBasePath
                                src="assets/img/icons/signature-04.svg"
                                alt="img"
                                className="img-fluid"
                              />
                            </td>
                            <td>
                              <span className="badge bg-soft-danger fs-13 fw-medium text-danger border border-danger py-1 px-2">
                                Inactive
                              </span>
                            </td>
                            <td className="action-item">
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                className="btn p-1 btn-white border"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu p-2">
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_reason"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_reason"
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* /Table List */}
                  </div>
                </div>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
        {/* End Content */}
        {/* Footer Start */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©{" "}
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
      {/* Start Add Categories */}
      <div id="add_reason" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark modal-title fw-bold">Add Signature</h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form action="signatures-settings.html">
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    Signature Name<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Signature Image<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="file" className="form-control" />
                </div>
                <div className="mb-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="form-label">Make a default</label>
                    <div className="form-check form-switch ps-0">
                      <input
                        className="form-check-input m-0"
                        type="checkbox"
                        defaultChecked
                      />
                    </div>
                  </div>
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
                  Add Signature
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Add Categories */}
      {/* Start Edit Categories */}
      <div id="edit_reason" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark modal-title fw-bold">Edit Signature</h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form action="signatures-settings.html">
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    Signature Name<span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Samuel Donatte"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Signature Image<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="file" className="form-control" />
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="form-label">Make a default</label>
                    <div className="form-check form-switch ps-0">
                      <input
                        className="form-check-input m-0"
                        type="checkbox"
                        defaultChecked
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="form-label">Status</label>
                    <div className="form-check form-switch ps-0">
                      <input
                        className="form-check-input m-0"
                        type="checkbox"
                        defaultChecked
                      />
                    </div>
                  </div>
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
      <div className="modal fade" id="delete_reason">
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
                <Link
                  to="signatures-settings.html"
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

export default SignaturesSettings;
