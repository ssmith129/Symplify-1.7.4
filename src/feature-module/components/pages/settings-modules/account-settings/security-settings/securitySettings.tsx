import { Link } from "react-router"
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar"
import Modals from "./modals/modals"


const SecuritySettings = () => {
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
                <div className="d-flex">
                  <h5 className="fw-bold">Security</h5>
                </div>
              </div>
              <div className="card-body px-0 mx-3">
                {/* start row */}
                <div className="row">
                  <div className="col-lg-8">
                    <div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                        <div className="d-flex align-items-center">
                          <div>
                            <h5 className="fs-16 fw-semibold mb-1">Password</h5>
                            <p className="fs-14">
                              Set a unique password to secure the account
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#change_password"
                          >
                            <span className="btn btn-md btn-light p-1 shadow-sm border">
                              <i className="ti ti-edit" />
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                        <div className="d-flex align-items-center">
                          <div>
                            <h5 className="fs-16 fw-semibold mb-1">
                              Two Factor Authentication
                            </h5>
                            <p className="fs-14">
                              Use your mobile phone to receive security PIN.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <label className="d-flex align-items-center form-switch ps-3">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                          </label>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                        <div className="d-flex align-items-center">
                          <div>
                            <h5 className="fs-16 fw-semibold mb-1">
                              Google Authentication
                            </h5>
                            <p className="fs-14">Connect to Google</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <label className="d-flex align-items-center form-switch ps-3">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                          </label>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                        <div className="d-flex align-items-center">
                          <div>
                            <h5 className="fs-16 fw-semibold mb-1">
                              Phone Number
                            </h5>
                            <p className="fs-14">
                              Phone Number associated with the account
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <Link
                            to="#"
                            className="me-3"
                            data-bs-toggle="modal"
                            data-bs-target="#phone_verification"
                          >
                            <span className="btn btn-md btn-light border shadow-sm p-1">
                              <i className="ti ti-edit" />
                            </span>
                          </Link>
                          <Link to="#">
                            <span className="btn btn-md btn-light border shadow-sm p-1">
                              <i className="ti ti-trash" />
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                        <div className="d-flex align-items-center">
                          <div>
                            <h5 className="fs-16 fw-semibold mb-1">
                              Email Address
                            </h5>
                            <p className="fs-14">
                              Email Address associated with the account
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <Link
                            to="#"
                            className="me-3"
                            data-bs-toggle="modal"
                            data-bs-target="#email_verification"
                          >
                            <span className="btn btn-md btn-light border shadow-sm p-1">
                              <i className="ti ti-edit" />
                            </span>
                          </Link>
                          <Link to="#">
                            <span className="btn btn-md btn-light border shadow-sm p-1">
                              <i className="ti ti-trash" />
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border-bottom mb-3 pb-3">
                        <div className="d-flex align-items-center">
                          <div>
                            <h5 className="fs-16 fw-semibold mb-1">
                              Deactivate Account
                            </h5>
                            <p className="fs-14">
                              ​Your account will be deactivated and reactivated
                              upon signing in again.
                            </p>
                          </div>
                        </div>
                        <Link to="#">
                          <span className="btn btn-md btn-light border shadow-sm p-1">
                            <i className="ti ti-ban" />
                          </span>
                        </Link>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                        <div className="d-flex align-items-center">
                          <div>
                            <h5 className="fs-16 fw-semibold mb-1">
                              Delete Account
                            </h5>
                            <p className="fs-14">
                              Your account will be permanently deleted
                            </p>
                          </div>
                        </div>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <span className="btn btn-md btn-light border shadow-sm p-1">
                            <i className="ti ti-trash" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-4">
                    <div className="card bg-light">
                      <div className="card-body">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold">
                            Browsers &amp; Devices
                          </h6>
                          <p className="mb-1">
                            The associated browsers &amp; devices
                          </p>
                          <Link
                            to="#"
                            className="btn btn-primary"
                          >
                            <i className="ti ti-logout me-1" />
                            Sign out from all
                          </Link>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 border-bottom">
                          <div>
                            <h6 className="fs-14 fw-semibold">
                              Chrome - Windows
                            </h6>
                            <span className="fs-13">30 Apr 2025, 11:15 AM</span>
                          </div>
                          <Link
                            to="#"
                            className="btn btn-md bg-white border shadow-sm p-1"
                          >
                            <i className="ti ti-logout" />
                          </Link>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 border-bottom">
                          <div>
                            <h6 className="fs-14 fw-semibold">Safari Macos</h6>
                            <span className="fs-13">30 Apr 2025, 11:15 AM</span>
                          </div>
                          <Link
                            to="#"
                            className="btn btn-md bg-white border shadow-sm p-1"
                          >
                            <i className="ti ti-logout" />
                          </Link>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 border-bottom">
                          <div>
                            <h6 className="fs-14 fw-semibold">
                              Chrome - Windows
                            </h6>
                            <span className="fs-13">30 Apr 2025, 11:15 AM</span>
                          </div>
                          <Link
                            to="#"
                            className="btn btn-md bg-white border shadow-sm p-1"
                          >
                            <i className="ti ti-logout" />
                          </Link>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 border-bottom">
                          <div>
                            <h6 className="fs-14 fw-semibold">
                              Chrome - Windows
                            </h6>
                            <span className="fs-13">19 Mar 2025, 02:50 PM</span>
                          </div>
                          <Link
                            to="#"
                            className="btn btn-md bg-white border shadow-sm p-1"
                          >
                            <i className="ti ti-logout" />
                          </Link>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 border-bottom">
                          <div>
                            <h6 className="fs-14 fw-semibold">
                              Firefox Windows
                            </h6>
                            <span className="fs-13">20 Feb 2025, 06:20 PM</span>
                          </div>
                          <Link
                            to="#"
                            className="btn btn-md bg-white border shadow-sm p-1"
                          >
                            <i className="ti ti-logout" />
                          </Link>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 border-bottom">
                          <div>
                            <h6 className="fs-14 fw-semibold">
                              Chrome - Windows
                            </h6>
                            <span className="fs-13">18 Jan 2025, 03:15 PM</span>
                          </div>
                          <Link
                            to="#"
                            className="btn btn-md bg-white border shadow-sm p-1"
                          >
                            <i className="ti ti-logout" />
                          </Link>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 border-bottom">
                          <div>
                            <h6 className="fs-14 fw-semibold">Safari Macos</h6>
                            <span className="fs-13">02 Jan 2025, 09:30 AM</span>
                          </div>
                          <Link
                            to="#"
                            className="btn btn-md bg-white border shadow-sm p-1"
                          >
                            <i className="ti ti-logout" />
                          </Link>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2">
                          <div>
                            <h6 className="fs-14 fw-semibold">
                              Firefox Windows
                            </h6>
                            <span className="fs-13">28 Dec 2024, 05:40 PM</span>
                          </div>
                          <Link
                            to="#"
                            className="btn btn-md bg-white border shadow-sm p-1"
                          >
                            <i className="ti ti-logout" />
                          </Link>
                        </div>
                      </div>
                      {/* end card */}
                    </div>
                    {/* end card */}
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
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
        <Modals/>
</>

  )
}

export default SecuritySettings