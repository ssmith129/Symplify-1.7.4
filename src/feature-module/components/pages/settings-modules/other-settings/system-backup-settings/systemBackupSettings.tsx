import { Link } from "react-router";
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar";
import Modals from "./modals/modals";

const SystemBackupSettings = () => {
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
                      <h5 className="fw-bold">System Backup</h5>
                      <Link
                        to="#"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#generate"
                      >
                        <i className="ti ti-plus me-1" />
                        Generate Backup
                      </Link>
                    </div>
                  </div>
                  <div className="card-body px-0 mx-3">
                    {/* Table List */}
                    <div className="table-responsive border">
                      <table className="table table-nowrap">
                        <thead className="tablehead-light">
                          <tr>
                            <th>Name</th>
                            <th>Created On</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>patients_data_backup_2025.txt</td>
                            <td>30 Apr 2025</td>
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
                                    data-bs-target="#edit_ip_address"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_ip_address"
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>invoice_records_backup_2024.txt</td>
                            <td>15 Apr 2025</td>
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
                                    data-bs-target="#edit_ip_address"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_ip_address"
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>lab_transactions_2024.txt</td>
                            <td>02 Apr 2025</td>
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
                                    data-bs-target="#edit_ip_address"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_ip_address"
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>payment_transactions_2024.txt</td>
                            <td>27 Mar 2025</td>
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
                                    data-bs-target="#edit_ip_address"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_ip_address"
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
                  {/* end card body */}
                </div>
                {/* end card */}
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

export default SystemBackupSettings;
