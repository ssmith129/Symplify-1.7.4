import { Link } from "react-router"
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar"
import { all_routes } from "../../../../../routes/all_routes"


const LanguageSettings2 = () => {
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
                      New Language
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
                <div className="custom-datatable-filter table-responsive border rounded mb-3">
                  <table className="table mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Module</th>
                        <th>Total</th>
                        <th>Done</th>
                        <th />
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Link to="#">Inventory</Link>
                        </td>
                        <td>1620</td>
                        <td>1296</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to={all_routes.languagesettings3}
                              className="btn btn-sm btn-outline-white me-2"
                            >
                              Web
                            </Link>
                            <Link
                              to={all_routes.languagesettings3}
                              className="btn btn-sm btn-outline-white me-2"
                            >
                              App
                            </Link>
                            <Link
                              to={all_routes.languagesettings3}
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
                              className="btn btn-outline-white rounded btn-sm d-inline-flex align-items-center p-1 justify-content-center"
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
                          <Link to="#">Sales</Link>
                        </td>
                        <td>1620</td>
                        <td>972</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to={all_routes.languagesettings3}
                              className="btn btn-sm btn-outline-white me-2"
                            >
                              Web
                            </Link>
                            <Link
                              to={all_routes.languagesettings3}
                              className="btn btn-sm btn-outline-white me-2"
                            >
                              App
                            </Link>
                            <Link
                              to={all_routes.languagesettings3}
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
                              className="btn btn-outline-white rounded btn-sm d-inline-flex align-items-center p-1 justify-content-center"
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
                          <Link to="#">Purchases</Link>
                        </td>
                        <td>1620</td>
                        <td>810</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to={all_routes.languagesettings3}
                              className="btn btn-sm btn-outline-white me-2"
                            >
                              Web
                            </Link>
                            <Link
                              to={all_routes.languagesettings3}
                              className="btn btn-sm btn-outline-white me-2"
                            >
                              App
                            </Link>
                            <Link
                              to={all_routes.languagesettings3}
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
                              className="btn btn-outline-white rounded btn-sm d-inline-flex align-items-center p-1 justify-content-center"
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
                          <Link to="#">
                            Finance &amp; Accounts
                          </Link>
                        </td>
                        <td>1620</td>
                        <td>324</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to={all_routes.languagesettings3}
                              className="btn btn-sm btn-outline-white me-2"
                            >
                              Web
                            </Link>
                            <Link
                              to={all_routes.languagesettings3}
                              className="btn btn-sm btn-outline-white me-2"
                            >
                              App
                            </Link>
                            <Link
                              to={all_routes.languagesettings3}
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
                              className="btn btn-outline-white rounded btn-sm d-inline-flex align-items-center p-1 justify-content-center"
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

export default LanguageSettings2