import { Link } from "react-router";
import { all_routes } from "../../../routes/all_routes";
import { useState } from "react";
import ImageWithBasePath from "../../../../core/imageWithBasePath";
type PasswordField = "password" | "confirmPassword";

const ResetPasswordIllustration = () => {
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
      {/* Start Content */}
      <div className="container-fuild position-relative z-1">
        <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100 bg-white">
          {/* start row*/}
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="login-backgrounds d-lg-flex align-items-center justify-content-center d-none flex-wrap p-4 position-relative h-100 z-0">
                <ImageWithBasePath
                  src="assets/img/auth/reset-illustration-img.png"
                  alt="log-illustration-img-01"
                  className="img-fluid img1"
                />
              </div>
            </div>
            {/* end row*/}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="row justify-content-center align-items-center overflow-auto flex-wrap vh-100 py-3">
                <div className="col-md-8 mx-auto">
                  <form
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div className="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill">
                      <div className=" mx-auto mb-4 text-center">
                        <ImageWithBasePath
                          src="assets/img/logo.svg"
                          className="img-fluid"
                          alt="Logo"
                        />
                      </div>
                      <div className="card border-1 p-lg-3 shadow-md rounded-3 mb-4">
                        <div className="card-body">
                          <div className="text-center mb-3">
                            <h5 className="mb-1 fs-20 fw-bold">
                              Reset Password
                            </h5>
                            <p className="mb-0">
                              Your new password must be different from previous
                              used passwords.
                            </p>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Password</label>
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
                                  className={`ti toggle-password text-dark fs-14 ${
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
                          <div className="mb-3">
                            <label className="form-label">
                              Confirm Password
                            </label>
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
                                  className={`ti toggle-password text-dark fs-14 ${
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
                          <div className="mb-3">
                            <Link
                              to={all_routes.successIllustration}
                              className="btn bg-primary text-white w-100"
                            >
                              Submit
                            </Link>
                          </div>
                          <div className="text-center">
                            <h6 className="fw-normal fs-14 text-dark mb-0">
                              Return to <Link to={all_routes.loginillustration} className="hover-a"> Login</Link>
                            </h6>
                          </div>
                        </div>
                        {/* end card body */}
                      </div>
                      {/* end card */}
                    </div>
                  </form>
                  <p className="text-dark text-center">
                    Copyright © 2025 - Preclinic.
                  </p>
                </div>
                {/* end row*/}
              </div>
            </div>
          </div>
          {/* end row*/}
        </div>
      </div>
      {/* End Content */}
    </>
  );
};

export default ResetPasswordIllustration;
