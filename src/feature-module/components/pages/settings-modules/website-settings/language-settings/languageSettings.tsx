import { Link } from "react-router"
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar"
import { all_routes } from "../../../../../routes/all_routes"
import ImageWithBasePath from "../../../../../../core/imageWithBasePath"

const LanguageSettings = () => {
  return (
   <>
  {/* ========================
			Start Page Content
		========================= */}
  <div className="page-wrapper">
    {/* Start Content */}
    <div className="content" id="profilePage">
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
                  <h5 className="fw-bold">Language</h5>
                  <div className="d-flex align-items-center">
                    <div className="dropdown me-2">
                      <Link
                        to="#"
                        className="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                      >
                        <i className="isax isax-language-square me-1" />
                        Language
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-lg p-2">
                        <li>
                          <label className="dropdown-item d-flex align-items-center rounded-1">
                            English
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item d-flex align-items-center rounded-1">
                            German
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item d-flex align-items-center rounded-1">
                            Arabic
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item d-flex align-items-center rounded-1">
                            French
                          </label>
                        </li>
                      </ul>
                    </div>
                    <Link
                      to="#"
                      className="btn btn-primary d-inline-flex align-items-center"
                    >
                      <i className="ti ti-plus me-1" />
                      Add New Language
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 mx-3">
                <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                  <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                    <div className="input-icon-start position-relative me-2">
                      <input
                        type="text"
                        className="form-control form-control-sm ps-2 bg-white"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="btn btn-outline-white d-inline-flex align-items-center"
                  >
                    <i className="ti ti-download me-1" />
                    Import Sample
                  </Link>
                </div>
                {/* Start Table */}
                <div className="custom-datatable-filter table-nowrap table-responsive border rounded mb-3">
                  <table className="table mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Language</th>
                        <th>Code</th>
                        <th>RTL</th>
                        <th>Default</th>
                        <th>Status</th>
                        <th />
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to={all_routes.languagesettings2}
                              className=" me-2 flex-shrink-0"
                            >
                              <ImageWithBasePath
                                src="assets/img/flags/us.svg"
                                alt="img"
                                className="avatar avatar-xs rounded-circle"
                              />
                            </Link>
                            <Link to={all_routes.languagesettings2}>English</Link>
                          </div>
                        </td>
                        <td>en</td>
                        <td>
                          <div className="form-check form-check-sm form-switch">
                            <input
                              className="form-check-input form-label"
                              type="checkbox"
                              role="switch"
                              defaultChecked
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check form-check-sm form-switch">
                            <Link
                              to="#"
                              className="btn btn-light p-1 rounded-circle toggle-star"
                            >
                              <i className="ti ti-star" />
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className="form-check form-check-sm form-switch">
                            <span className="badge badge-soft-success text-success fw-medium fs-13">
                              <i className="ti ti-point-filled" /> Active
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to={all_routes.languagesettings2}
                              className="btn btn-sm btn-outline-white me-2"
                            >
                              Web
                            </Link>
                            <Link
                              to={all_routes.languagesettings2}
                              className="btn btn-sm btn-outline-white me-2"
                            >
                              App
                            </Link>
                            <Link
                              to={all_routes.languagesettings2}
                              className="btn btn-sm btn-outline-white"
                            >
                              Admin
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="btn btn-outline-white d-inline-flex rounded p-1 align-items-center justify-content-center btn-sm"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-2">
                              <li>
                                <Link
                                  className="dropdown-item rounded-1"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit_testimonial"
                                >
                                  <i className="isax isax-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item rounded-1"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_testimonials"
                                >
                                  <i className="isax isax-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to={all_routes.languagesettings2}
                              className="flex-shrink-0 me-2"
                            >
                              <ImageWithBasePath
                                src="assets/img/flags/de.svg"
                                alt="img"
                                className="avatar avatar-xs rounded-circle"
                              />
                            </Link>
                            <Link to={all_routes.languagesettings2}>German</Link>
                          </div>
                        </td>
                        <td>de</td>
                        <td>
                          <div className="form-check form-check-sm form-switch">
                            <input
                              className="form-check-input form-label"
                              type="checkbox"
                              role="switch"
                              defaultChecked
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check form-check-sm form-switch">
                            <Link
                              to="#"
                              className="btn btn-light p-1 rounded-circle toggle-star"
                            >
                              <i className="ti ti-star" />
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className="form-check form-check-sm form-switch">
                            <span className="badge badge-soft-success text-success fw-medium fs-13">
                              <i className="ti ti-point-filled" /> Active
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to={all_routes.languagesettings2}
                              className="btn btn-sm btn-outline-white me-2"
                            >
                              Web
                            </Link>
                            <Link
                              to={all_routes.languagesettings2}
                              className="btn btn-sm btn-outline-white me-2"
                            >
                              App
                            </Link>
                            <Link
                              to={all_routes.languagesettings2}
                              className="btn btn-sm btn-outline-white"
                            >
                              Admin
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="btn btn-outline-white d-inline-flex rounded p-1 align-items-center justify-content-center btn-sm"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-2">
                              <li>
                                <Link
                                  className="dropdown-item rounded-1"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit_testimonial"
                                >
                                  <i className="isax isax-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item rounded-1"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_testimonials"
                                >
                                  <i className="isax isax-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to={all_routes.languagesettings2}
                              className="flex-shrink-0 me-2"
                            >
                              <ImageWithBasePath
                                src="assets/img/flags/ae.svg"
                                alt="img"
                                className="avatar avatar-xs rounded-circle"
                              />
                            </Link>
                            <Link to={all_routes.languagesettings2}>Arabic</Link>
                          </div>
                        </td>
                        <td>ar</td>
                        <td>
                          <div className="form-check form-check-sm form-switch">
                            <input
                              className="form-check-input form-label"
                              type="checkbox"
                              role="switch"
                              defaultChecked
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check form-check-sm form-switch">
                            <Link
                              to="#"
                              className="btn btn-light p-1 rounded-circle toggle-star"
                            >
                              <i className="ti ti-star" />
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className="form-check form-check-sm form-switch">
                            <span className="badge badge-soft-success text-success fw-medium fs-13">
                              <i className="ti ti-point-filled" /> Active
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to={all_routes.languagesettings2}
                              className="btn btn-sm btn-outline-white me-2"
                            >
                              Web
                            </Link>
                            <Link
                              to={all_routes.languagesettings2}
                              className="btn btn-sm btn-outline-white me-2"
                            >
                              App
                            </Link>
                            <Link
                              to={all_routes.languagesettings2}
                              className="btn btn-sm btn-outline-white"
                            >
                              Admin
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="btn btn-outline-white d-inline-flex rounded p-1 align-items-center justify-content-center btn-sm"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-2">
                              <li>
                                <Link
                                  className="dropdown-item rounded-1"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit_testimonial"
                                >
                                  <i className="isax isax-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item rounded-1"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_testimonials"
                                >
                                  <i className="isax isax-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to={all_routes.languagesettings2}
                              className="flex-shrink-0 me-2"
                            >
                              <ImageWithBasePath
                                src="assets/img/flags/fr.svg"
                                alt="img"
                                className="avatar avatar-xs rounded-circle"
                              />
                            </Link>
                            <Link to={all_routes.languagesettings2}>French</Link>
                          </div>
                        </td>
                        <td>fr</td>
                        <td>
                          <div className="form-check form-check-sm form-switch">
                            <input
                              className="form-check-input form-label"
                              type="checkbox"
                              role="switch"
                              defaultChecked
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-check form-check-sm form-switch">
                            <Link
                              to="#"
                              className="btn btn-light p-1 rounded-circle toggle-star"
                            >
                              <i className="ti ti-star" />
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className="form-check form-check-sm form-switch">
                            <span className="badge badge-soft-danger text-danger fw-medium fs-13">
                              <i className="ti ti-point-filled" /> Inactive
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to={all_routes.languagesettings2}
                              className="btn btn-sm btn-outline-white me-2"
                            >
                              Web
                            </Link>
                            <Link
                              to={all_routes.languagesettings2}
                              className="btn btn-sm btn-outline-white me-2"
                            >
                              App
                            </Link>
                            <Link
                              to={all_routes.languagesettings2}
                              className="btn btn-sm btn-outline-white"
                            >
                              Admin
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className="dropdown">
                            <Link
                              to="#"
                              className="btn btn-outline-white d-inline-flex rounded p-1 align-items-center justify-content-center btn-sm"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end p-2">
                              <li>
                                <Link
                                  className="dropdown-item rounded-1"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit_testimonial"
                                >
                                  <i className="isax isax-edit me-2" />
                                  Edit
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item rounded-1"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_testimonials"
                                >
                                  <i className="isax isax-trash me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* End Table */}
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
        2025 ©
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
</>

  )
}

export default LanguageSettings