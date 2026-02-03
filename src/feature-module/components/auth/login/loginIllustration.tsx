import { Link } from "react-router";
import { all_routes } from "../../../routes/all_routes";
import ImageWithBasePath from "../../../../core/imageWithBasePath";
import { useState } from "react";
type PasswordField = "password" | "confirmPassword";

const LoginIllustration = () => {
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
                  src="assets/img/icons/log-illustration-img-01.png"
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
                            <h5 className="mb-1 fs-20 fw-bold">Sign In</h5>
                            <p className="mb-0">
                              Please enter below details to access the dashboard
                            </p>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <div className="input-group">
                              <span className="input-group-text border-end-0 bg-white">
                                <i className="ti ti-mail fs-14 text-dark" />
                              </span>
                              <input
                                type="text"
                                
                                className="form-control border-start-0 ps-0"
                                placeholder="Enter Email Address"
                              />
                            </div>
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
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center">
                              <div className="form-check form-check-md mb-0">
                                <input
                                  className="form-check-input"
                                  id="remember_me"
                                  type="checkbox"
                                />
                                <label
                                  htmlFor="remember_me"
                                  className="form-check-label mt-0 text-dark"
                                >
                                  Remember Me
                                </label>
                              </div>
                            </div>
                            <div className="text-end">
                              <Link
                                to={all_routes.forgotpasswordillustration}
                                className="text-danger"
                              >
                                Forgot Password?
                              </Link>
                            </div>
                          </div>
                          <div className="mb-2">
                            <Link to ={all_routes.dashboard}
                             
                              className="btn bg-primary text-white w-100"
                            >
                              Login
                            </Link>
                          </div>
                          <div className="login-or position-relative mb-3">
                            <span className="span-or">OR</span>
                          </div>
                          <div className="mb-3">
                            <div className="d-flex align-items-center justify-content-center flex-wrap">
                              <div className="text-center me-2 flex-fill">
                                <Link
                                  to="#"
                                  className="br-10 p-1 btn btn-outline-light border d-flex align-items-center justify-content-center"
                                >
                                  <ImageWithBasePath
                                    className="img-fluid m-1"
                                    src="assets/img/icons/facebook-logo.svg"
                                    alt="Facebook"
                                  />
                                </Link>
                              </div>
                              <div className="text-center me-2 flex-fill">
                                <Link
                                  to="#"
                                  className="br-10 p-1 btn btn-outline-light border d-flex align-items-center justify-content-center"
                                >
                                  <ImageWithBasePath
                                    className="img-fluid m-1"
                                    src="assets/img/icons/google-logo.svg"
                                    alt="Google"
                                  />
                                </Link>
                              </div>
                              <div className="text-center me-2 flex-fill">
                                <Link
                                  to="#"
                                  className="br-10 p-1 btn btn-outline-light border d-flex align-items-center justify-content-center"
                                >
                                  <ImageWithBasePath
                                    className="img-fluid m-1"
                                    src="assets/img/icons/apple-logo.svg"
                                    alt="apple"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <h6 className="fw-normal fs-14 text-dark mb-0">
                              Don’t have an account yet?
                              <Link
                                to={all_routes.registerillustration}
                                className="hover-a"
                              >
                                
                                Register
                              </Link>
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

export default LoginIllustration;
