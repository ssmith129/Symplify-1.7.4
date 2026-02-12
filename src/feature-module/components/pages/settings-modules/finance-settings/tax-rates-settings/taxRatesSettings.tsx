import { Link } from "react-router";
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar";
import Modals from "./modals/modals";

const TaxRatesSettings = () => {
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
                {/* start row */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
                      <div className="card-header border-bottom px-0 mx-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <h5 className="fw-bold">Tax Rates</h5>
                          <Link
                            to="#"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#add_tax_rate"
                          >
                            <i className="ti ti-plus me-1" />
                            New Bank Account
                          </Link>
                        </div>
                      </div>
                      <div className="card-body px-0 mx-3">
                        {/* Table List */}
                        <div className="table-responsive border">
                          <table className="table table-nowrap">
                            <thead className="tablehead-light">
                              <tr>
                                <th>Tax Name</th>
                                <th>Tax Rate</th>
                                <th>Created On</th>
                                <th>Status</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>VAT</td>
                                <td>10%</td>
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
                                <td>CGST</td>
                                <td>08%</td>
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
                                <td>SGST</td>
                                <td>10%</td>
                                <td>05 Mar 2025</td>
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
                  {/* end col */}
                  <div className="col-lg-12">
                    <div className="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
                      <div className="card-header border-bottom px-0 mx-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <h5 className="fw-bold">Tax Group</h5>
                          <Link
                            to="#"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#add_tax_group"
                          >
                            <i className="ti ti-plus me-1" />
                            New Tax Group
                          </Link>
                        </div>
                      </div>
                      <div className="card-body px-0 mx-3">
                        {/* Table List */}
                        <div className="table-responsive border">
                          <table className="table table-nowrap">
                            <thead className="tablehead-light">
                              <tr>
                                <th>Tax Name</th>
                                <th>Tax Rate</th>
                                <th>Created On</th>
                                <th>Status</th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>GST</td>
                                <td>18%</td>
                                <td>20 Mar 2025</td>
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
                                        data-bs-target="#edit_tax_group"
                                      >
                                        Edit
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to="#"
                                        className="dropdown-item d-flex align-items-center"
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete_tax_group"
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
                  {/* end col */}
                </div>
                {/* end row */}
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

export default TaxRatesSettings;
