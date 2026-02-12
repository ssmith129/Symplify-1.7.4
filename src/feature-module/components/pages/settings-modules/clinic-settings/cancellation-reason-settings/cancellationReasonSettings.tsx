import { Link } from "react-router";
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar";
import Modals from "./modals/modals";

const CancellationReasonSettings = () => {
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
                <SettingsSidebar />
                {/* End Settings Sidebar */}
                <div className="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
                  <div className="card-header border-bottom px-0 mx-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="fw-bold">Cancellation Reason</h5>
                      <Link
                        to="#"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#add_reason"
                      >
                        <i className="ti ti-plus me-1" />
                        New Reason
                      </Link>
                    </div>
                  </div>
                  <div className="card-body px-0 mx-3">
                    {/* Table List */}
                    <div className="table-responsive border">
                      <table className="table table-nowrap">
                        <thead className="tablehead-light">
                          <tr>
                            <th>Reason</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Personal Emergency</td>
                            <td>30 Apr 2025</td>
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
                            <td>Feeling Better</td>
                            <td>15 Apr 2025</td>
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
                            <td>Transportation Issues</td>
                            <td>02 Apr 2025</td>
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
                            <td>Booked by Mistake</td>
                            <td>27 Mar 2025</td>
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
                            <td>Forgot Appointment</td>
                            <td>25 Jan 2025</td>
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
            2025 ©
            <Link to="#" className="link-primary">
              Symplify
            </Link>
            , All Rights Reserved
          </p>
        </div>
        {/* Footer End */}
      </div>
      {/* ========================
			End Page Content
		========================= */}
        <Modals/>
    </>
  );
};

export default CancellationReasonSettings;
