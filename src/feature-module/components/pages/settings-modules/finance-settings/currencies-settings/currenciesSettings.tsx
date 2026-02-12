import { Link } from "react-router";
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar";
import Modals from "./modals/modals";

const CurrenciesSettings = () => {
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
                      <h5 className="fw-bold">Currencies</h5>
                      <Link
                        to="#"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#add_tax_rate"
                      >
                        <i className="ti ti-plus me-1" />
                        New Currency
                      </Link>
                    </div>
                  </div>
                  <div className="card-body px-0 mx-3">
                    {/* Table List */}
                    <div className="table-responsive border">
                      <table className="table table-nowrap">
                        <thead className="tablehead-light">
                          <tr>
                            <th>Currency</th>
                            <th>Code</th>
                            <th>Symbol</th>
                            <th>Exchange Rate</th>
                            <th>Status</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <p className="mb-0 me-2">Dollar</p>
                                <span className="badge badge-soft-primary border border-primary fw-medium">
                                  Default
                                </span>
                              </div>
                            </td>
                            <td>USD</td>
                            <td>$</td>
                            <td>01</td>
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
                                    data-bs-target="#edit_tax_rate"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_tax_rate"
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>Rupee</td>
                            <td>INR</td>
                            <td>₹</td>
                            <td>86.62</td>
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
                                    data-bs-target="#edit_tax_rate"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_tax_rate"
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>Pound</td>
                            <td>GBP</td>
                            <td>£</td>
                            <td>0.81</td>
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
                                    data-bs-target="#edit_tax_rate"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_tax_rate"
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>Euro</td>
                            <td>EUR</td>
                            <td>€</td>
                            <td>0.96</td>
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
                                    data-bs-target="#edit_tax_rate"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_tax_rate"
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td>Dhirams</td>
                            <td>AED</td>
                            <td>د.إ</td>
                            <td>3.67</td>
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
                                    data-bs-target="#edit_tax_rate"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_tax_rate"
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
      <Modals />
    </>
  );
};

export default CurrenciesSettings;
