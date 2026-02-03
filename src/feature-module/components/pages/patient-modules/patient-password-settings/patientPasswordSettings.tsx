import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import { useState } from "react";
type PasswordField = "password" | "confirmPassword";

const PatientPasswordSettings = () => {
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

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
            <div className="card-body">
              {/* end card body */}
              <div className="row">
                <div className="col-lg-3">
                  <div className="text-start">
                    <Link
                      to={all_routes.patientprofilesettings}
                      className="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start"
                    >
                      <i className="ti ti-user-cog me-2 text-dark"> </i> Profile
                      Settings
                    </Link>
                    <Link
                      to={all_routes.patientpasswordsettings}
                      className="d-block w-100 btn btn-md border rounded fs-14 fw-medium text-primary text-start mb-1 active w-100 justify-content-start"
                    >
                      
                      <i className="ti ti-lock-star me-2 text-primary">
                        
                      </i>
                      Change Password
                    </Link>
                    <Link
                      to={all_routes.patientnotificationssettings}
                      className="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start"
                    >
                      
                      <i className="ti ti-bell me-2 text-dark"> </i>
                      Notifications
                    </Link>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-9">
                  <div className="border-1 border-start ps-4">
                    <h5 className="fw-bold pb-3 mb-4 border-1 border-bottom">
                      
                      Change Password
                    </h5>
                    {/* start row */}
                    <div className="row border-bottom mb-3">
                      <div className="col-lg-6">
                        {/* start row */}
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-5">
                            <label className="form-label mb-0">
                              New Password
                              <span className="text-danger">*</span>
                            </label>
                          </div>
                          {/* end col */}
                          <div className="col-lg-7">
                            <div className="position-relative">
                              <div className="pass-group input-group position-relative border rounded">
                                <span className="input-group-text bg-white border-0">
                                  <i className="ti ti-lock text-dark fs-14" />
                                </span>
                                <input
                                  type={
                                    passwordVisibility.password
                                      ? "text"
                                      : "password"
                                  }
                                  className="pass-input form-control border-start-0 ps-0"
                                  placeholder="****************"
                                />
                                <span
                                  className={`ti toggle-password fs-14 ${
                                    passwordVisibility.password
                                      ? "ti-eye"
                                      : "ti-eye-off"
                                  }`}
                                  onClick={() =>
                                    togglePasswordVisibility("password")
                                  }
                                ></span>
                              </div>
                            </div>
                          </div>
                          {/* end col */}
                        </div>
                        {/* end row */}
                      </div>
                      {/* end col */}
                      <div className="col-lg-6">
                        {/* start row */}
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-5">
                            <label className="form-label mb-0">
                              Confirm Password
                              <span className="text-danger">*</span>
                            </label>
                          </div>
                          {/* end col */}
                          <div className="col-lg-7">
                            <div className="position-relative">
                              <div className="pass-group input-group position-relative border rounded">
                                <span className="input-group-text bg-white border-0">
                                  <i className="ti ti-lock text-dark fs-14" />
                                </span>
                                <input
                                  type={
                                    passwordVisibility.confirmPassword
                                      ? "text"
                                      : "password"
                                  }
                                  className="pass-input form-control border-start-0 ps-0"
                                  placeholder="****************"
                                />
                                <span
                                  className={`ti toggle-password fs-14 ${
                                    passwordVisibility.confirmPassword
                                      ? "ti-eye"
                                      : "ti-eye-off"
                                  }`}
                                  onClick={() =>
                                    togglePasswordVisibility("confirmPassword")
                                  }
                                ></span>
                              </div>
                            </div>
                          </div>
                          {/* end col */}
                        </div>
                        {/* end row */}
                      </div>
                      {/* end col */}
                    </div>
                    {/* end row */}
                    <div className="d-flex justify-content-end align-items-center gap-2">
                      <Link
                        to=""
                        className="btn btn-light btn-md fs-13 fw-medium rounded"
                      >
                        
                        Cancel
                      </Link>
                      <Link
                        to=""
                        className="btn btn-primary btn-md fs-13 fw-medium rounded"
                      >
                        
                        Save Changes
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end col */}
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
  );
};

export default PatientPasswordSettings;
