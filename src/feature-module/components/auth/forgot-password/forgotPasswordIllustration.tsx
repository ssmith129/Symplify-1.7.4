import { Link } from "react-router";
import ImageWithBasePath from "../../../../core/imageWithBasePath";
import { all_routes } from "../../../routes/all_routes";

const ForgotPasswordIllustration = () => {
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
                  src="assets/img/auth/forgot-illustration-img.png"
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
                              Forgot Password
                            </h5>
                            <p className="mb-0">
                              No worries, we’ll send you reset instructions
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
                            <Link
                              to={all_routes.emailverificationillustration}
                              className="btn bg-primary text-white w-100"
                            >
                              Reset Password
                            </Link>
                          </div>
                          <div className="text-center">
                            <h6 className="fw-normal fs-14 text-dark mb-0">
                              
                              Return to  <Link
                                to={all_routes.loginillustration}
                                className="hover-a"
                              > Login</Link>
                            </h6>
                          </div>
                        </div>
                        {/* end card body */}
                      </div>
                      {/* end card */}
                    </div>
                  </form>
                  <p className="text-dark text-center">
                    
                    Copyright © 2025 - Symplify
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

export default ForgotPasswordIllustration;
