import { Link } from "react-router";
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import Modals from "./modals/modals";

const LoginAndRegisterSettings = () => {
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
                    <div className="d-flex">
                      <h5 className="fw-bold">Login &amp; Register</h5>
                    </div>
                  </div>
                  <div className="card-body px-0 mx-3">
                    {/* start row */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card shadow-none">
                          <div className="card-body">
                            <div className="d-flex border-0 mb-0 pb-0">
                              <span className="avatar avatar-lg p-2 bg-light rounded flex-shrink-0 me-2">
                                <ImageWithBasePath
                                  src="assets/img/icons/google-logo.svg"
                                  alt="Img"
                                />
                              </span>
                              <div>
                                <p className="fw-medium text-dark mb-1">
                                  Google
                                </p>
                                <p className="mb-0">
                                  Streamline your access using your Google
                                  account for secure and efficient login.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                          <div className="card-footer d-flex align-items-center justify-content-between ">
                            <div className="d-flex align-items-center">
                              <Link
                                className="btn btn-sm btn-light border rounded-2 p-1 me-2"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <i className="ti ti-trash" />
                              </Link>
                              <Link
                                className="btn btn-sm btn-light border rounded-2 p-1"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#google"
                              >
                                <i className="ti ti-settings" />
                              </Link>
                            </div>
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input m-0"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                          {/* end card footer */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col */}
                      <div className="col-md-6">
                        <div className="card shadow-none">
                          <div className="card-body">
                            <div className="d-flex border-0 mb-0 pb-0">
                              <span className="avatar avatar-lg p-2 bg-light rounded flex-shrink-0 me-2">
                                <ImageWithBasePath
                                  src="assets/img/icons/facebook.svg"
                                  alt="Img"
                                />
                              </span>
                              <div>
                                <p className="fw-medium text-dark mb-1">
                                  Facebook
                                </p>
                                <p className="mb-0">
                                  Quickly log in or register using your Facebook
                                  account, manage operations
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                          <div className="card-footer d-flex align-items-center justify-content-between ">
                            <div className="d-flex align-items-center">
                              <Link
                                className="btn btn-sm btn-light border rounded-2 p-1 me-2"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <i className="ti ti-trash" />
                              </Link>
                              <Link
                                className="btn btn-sm btn-light border rounded-2 p-1"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#facebook"
                              >
                                <i className="ti ti-settings" />
                              </Link>
                            </div>
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input m-0"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                          {/* end card footer */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col */}
                      <div className="col-md-6">
                        <div className="card shadow-none">
                          <div className="card-body">
                            <div className="d-flex border-0 mb-0 pb-0">
                              <span className="avatar avatar-lg p-2 bg-light rounded flex-shrink-0 me-2">
                                <ImageWithBasePath
                                  src="assets/img/icons/apple.svg"
                                  alt="Img"
                                />
                              </span>
                              <div>
                                <p className="fw-medium text-dark mb-1">
                                  Apple
                                </p>
                                <p className="mb-0">
                                  Allows users to sign in using their Apple ID,
                                  offering secure and privacy access.
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                          <div className="card-footer d-flex align-items-center justify-content-between ">
                            <div className="d-flex align-items-center">
                              <Link
                                className="btn btn-sm btn-light border rounded-2 p-1 me-2"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <i className="ti ti-trash" />
                              </Link>
                              <Link
                                className="btn btn-sm btn-light border rounded-2 p-1"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#php_mailer"
                              >
                                <i className="ti ti-settings" />
                              </Link>
                            </div>
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input m-0"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                          {/* end card footer */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col */}
                      <div className="col-md-6">
                        <div className="card shadow-none">
                          <div className="card-body">
                            <div className="d-flex border-0 mb-0 pb-0">
                              <span className="avatar avatar-lg p-2 bg-light rounded flex-shrink-0 me-2">
                                <ImageWithBasePath src="assets/img/icons/ssd.svg" alt="Img" />
                              </span>
                              <div>
                                <p className="fw-medium text-dark mb-1">SSO</p>
                                <p className="mb-0">
                                  Enables users to access multiple applications
                                  or systems with one set of login credentials
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                          <div className="card-footer d-flex align-items-center justify-content-between ">
                            <div className="d-flex align-items-center">
                              <Link
                                className="btn btn-sm btn-light border rounded-2 p-1 me-2"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <i className="ti ti-trash" />
                              </Link>
                              <Link
                                className="btn btn-sm btn-light border rounded-2 p-1"
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#php_mailer"
                              >
                                <i className="ti ti-settings" />
                              </Link>
                            </div>
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input m-0"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                          </div>
                          {/* end card footer */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col */}
                    </div>
                    {/* end row */}
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
            <Link to="#" className="Link-primary">
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
      <Modals />
    </>
  );
};

export default LoginAndRegisterSettings;
