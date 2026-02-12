import { Link } from "react-router";
import { Input_Type, Module } from "../../../../../../core/common/selectOption";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";

const CustomFieldsSettings = () => {
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
                <div className="sidebars settings-sidebar" id="sidebar2">
                  <div className="sidebar-inner" data-simplebar="">
                    <div id="sidebar-menu5" className="sidebar-menu mt-0 p-0">
                      <ul>
                        <li className="submenu">
                          <Link to="#">
                            <i className="ti ti-user-cog me-2" />
                            <span>Account Settings</span>
                            <span className="menu-arrow" />
                          </Link>
                          <ul>
                            <li>
                              <Link to="profile-settings.html">Profile</Link>
                            </li>
                            <li>
                              <Link to="security-settings.html">Security</Link>
                            </li>
                            <li>
                              <Link to="notifications-settings.html">
                                Notifications
                              </Link>
                            </li>
                            <li>
                              <Link to="integrations-settings.html">
                                Integrations
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="submenu">
                          <Link to="#">
                            <i className="ti ti-world-cog me-2" />
                            <span>Website Settings</span>
                            <span className="menu-arrow" />
                          </Link>
                          <ul>
                            <li>
                              <Link to="organization-settings.html">
                                Organization
                              </Link>
                            </li>
                            <li>
                              <Link to="localization-settings.html">
                                Localization
                              </Link>
                            </li>
                            <li>
                              <Link to="prefixes-settings.html">Prefixes</Link>
                            </li>
                            <li>
                              <Link to="seo-setup-settings.html">
                                SEO Setup
                              </Link>
                            </li>
                            <li>
                              <Link to="language-settings.html">Language</Link>
                            </li>
                            <li>
                              <Link to="maintenance-mode-settings.html">
                                Maintenance Mode
                              </Link>
                            </li>
                            <li>
                              <Link to="login-and-register-settings.html">
                                Login &amp; Register
                              </Link>
                            </li>
                            <li>
                              <Link to="preferences-settings.html">
                                Preferences
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="submenu">
                          <Link to="#">
                            <i className="ti ti-building-hospital me-2" />
                            <span>Clinic Settings</span>
                            <span className="menu-arrow" />
                          </Link>
                          <ul>
                            <li>
                              <Link to="appointment-settings.html">
                                Appointment
                              </Link>
                            </li>
                            <li>
                              <Link to="working-hours-settings.html">
                                Working Hours
                              </Link>
                            </li>
                            <li>
                              <Link to="cancellation-reason-settings.html">
                                Cancellation Reason
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="submenu">
                          <Link to="#" className="active">
                            <i className="ti ti-device-mobile-cog me-2" />
                            <span>App Settings</span>
                            <span className="menu-arrow" />
                          </Link>
                          <ul>
                            <li>
                              <Link to="invoice-settings.html">
                                Invoice Settings
                              </Link>
                            </li>
                            <li>
                              <Link to="invoice-templates-settings.html">
                                Invoice Templates
                              </Link>
                            </li>
                            <li>
                              <Link to="signatures-settings.html">
                                Signatures
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="custom-fields-settings.html"
                                className="active"
                              >
                                Custom Fields
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="submenu">
                          <Link to="#">
                            <i className="ti ti-device-desktop-cog me-2" />
                            <span>System Settings</span>
                            <span className="menu-arrow" />
                          </Link>
                          <ul>
                            <li>
                              <Link to="email-settings.html">
                                Email Settings
                              </Link>
                            </li>
                            <li>
                              <Link to="email-templates-settings.html">
                                Email Templates
                              </Link>
                            </li>
                            <li>
                              <Link to="sms-gateways-settings.html">
                                SMS Gateways
                              </Link>
                            </li>
                            <li>
                              <Link to="sms-templates-settings.html">
                                SMS Templates
                              </Link>
                            </li>
                            <li>
                              <Link to="gdpr-cookies-settings.html">
                                GDPR Cookies
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="submenu">
                          <Link to="#">
                            <i className="ti ti-settings-dollar me-2" />
                            <span>Finance &amp; Accounts</span>
                            <span className="menu-arrow" />
                          </Link>
                          <ul>
                            <li>
                              <Link to="payment-methods-settings.html">
                                Payment Methods
                              </Link>
                            </li>
                            <li>
                              <Link to="bank-accounts-settings.html">
                                Bank Accounts
                              </Link>
                            </li>
                            <li>
                              <Link to="tax-rates-settings.html">
                                Tax Rates
                              </Link>
                            </li>
                            <li>
                              <Link to="currencies-settings.html">
                                Currencies
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="submenu">
                          <Link to="#">
                            <i className="ti ti-settings-2 me-2" />
                            <span>Other Settings</span>
                            <span className="menu-arrow" />
                          </Link>
                          <ul>
                            <li>
                              <Link to="sitemap-settings.html">Sitemap</Link>
                            </li>
                            <li>
                              <Link to="clear-cache-settings.html">
                                Clear Cache
                              </Link>
                            </li>
                            <li>
                              <Link to="storage-settings.html">Storage</Link>
                            </li>
                            <li>
                              <Link to="cronjob-settings.html">Cronjob</Link>
                            </li>
                            <li>
                              <Link to="ban-ip-address-settings.html">
                                Ban IP Address
                              </Link>
                            </li>
                            <li>
                              <Link to="system-backup-settings.html">
                                System Backup
                              </Link>
                            </li>
                            <li>
                              <Link to="database-backup-settings.html">
                                Database Backup
                              </Link>
                            </li>
                            <li>
                              <Link to="system-update.html">System Update</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Settings Sidebar */}
                <div className="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
                  <div className="card-header border-bottom px-0 mx-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="fw-bold">Custom Field</h5>
                      <Link
                        to="#"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#add_reason"
                      >
                        <i className="ti ti-plus me-1" />
                        New Custom Field
                      </Link>
                    </div>
                  </div>
                  <div className="card-body px-0 mx-3">
                    {/* Table List */}
                    <div className="table-responsive border">
                      <table className="table table-nowrap">
                        <thead className="tablehead-light">
                          <tr>
                            <th>Module</th>
                            <th>Label</th>
                            <th>Type</th>
                            <th>Default Value</th>
                            <th>Required</th>
                            <th>Status</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Patient</td>
                            <td>Preferred Language</td>
                            <td>Select</td>
                            <td>English</td>
                            <td>
                              <div className="form-check form-switch ps-0">
                                <input
                                  className="form-check-input m-0"
                                  type="checkbox"
                                  defaultChecked
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-soft-success fs-13 fw-medium text-success d-inline-flex align-items-center">
                                <i className="ti ti-point-filled" />
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
                            <td>Staff</td>
                            <td>Job Type</td>
                            <td>Text</td>
                            <td>Full Time</td>
                            <td>
                              <div className="form-check form-switch ps-0">
                                <input
                                  className="form-check-input m-0"
                                  type="checkbox"
                                  defaultChecked
                                />
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-soft-success fs-13 fw-medium text-success d-inline-flex align-items-center">
                                <i className="ti ti-point-filled" />
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
      {/* Start Add Categories */}
      <div id="add_reason" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark modal-title fw-bold">
                Add Custom Field
              </h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form action="custom-fields-settings.html">
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    Module<span className="text-danger ms-1">*</span>
                  </label>
                  <CommonSelect
                    options={Module}
                    className="select"
                    defaultValue={Module[0]}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Input Type<span className="text-danger ms-1">*</span>
                  </label>
                  <CommonSelect
                    options={Input_Type}
                    className="select"
                    defaultValue={Input_Type[0]}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Label<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Default Value<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="form-label">Required</label>
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
                  Add Custom Field
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
              <h5 className="text-dark modal-title fw-bold">
                Edit Custom Field
              </h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form action="custom-fields-settings.html">
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    Module<span className="text-danger ms-1">*</span>
                  </label>
                  <CommonSelect
                    options={Module}
                    className="select"
                    defaultValue={Module[1]}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Input Type<span className="text-danger ms-1">*</span>
                  </label>
                  <CommonSelect
                    options={Input_Type}
                    className="select"
                    defaultValue={Input_Type[1]}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Label<span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Preferred Language"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Default Value<span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="English"
                  />
                </div>
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="form-label">Required</label>
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
                  to="custom-fields-settings.html"
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

export default CustomFieldsSettings;
