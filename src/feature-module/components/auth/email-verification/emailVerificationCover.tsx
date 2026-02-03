import { Link } from "react-router";
import ImageWithBasePath from "../../../../core/imageWithBasePath";
import { all_routes } from "../../../routes/all_routes";

const EmailVerificationCover = () => {
  return (
    <>
      {/* Start Content */}
      <div className="container-fuild position-relative z-1">
        <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100 bg-white">
          {/* start row*/}
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="login-backgrounds login-covers bg-primary d-lg-flex align-items-center justify-content-center d-none flex-wrap p-4 position-relative h-100 z-0">
                <div className="authentication-card w-100">
                  <div className="authen-overlay-item w-100">
                    <div className="authen-head text-center">
                      <h1 className="text-white fs-32 fw-bold mb-2">
                        Seamless healthcare access <br /> with smart, modern
                        clinic
                      </h1>
                      <p className="text-light fw-normal text-light">
                        
                        Experience efficient, secure, and user-friendly
                        healthcare management designed for modern clinics and
                        growing practices.
                      </p>
                    </div>
                    <div className="mt-4 mx-auto authen-overlay-img">
                      <ImageWithBasePath
                        src="assets/img/auth/cover-imgs-1.png"
                        alt="Img"
                      />
                    </div>
                  </div>
                </div>
                <ImageWithBasePath
                  src="assets/img/auth/cover-imgs-2.png"
                  alt="cover-imgs-2"
                  className="img-fluid cover-img"
                />
              </div>
            </div>
            {/* end row*/}
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="row justify-content-center align-items-center overflow-auto flex-wrap vh-100">
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
                          <div className="mb-3 text-center">
                            <span>
                              <i className="ti ti-circle-check-filled fs-48 text-success" />
                            </span>
                          </div>
                          <div className="text-center mb-3">
                            <h5 className="mb-1 fs-20 fw-bold">Email Sent!</h5>
                            <p className="mb-0">
                              
                              Check your email &amp; change your password.
                            </p>
                          </div>
                          <div className="mt-3">
                            <Link
                              to={all_routes.twostepverificationcover}
                              className="btn bg-primary text-white w-100"
                            >
                              Reset Password
                            </Link>
                          </div>
                        </div>
                        {/* end card body */}
                      </div>
                      {/* end card */}
                    </div>
                  </form>
                  <p className="fs-14 text-dark text-center mt-4">
                    
                    Copyright © 2025 - Preclinic
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

export default EmailVerificationCover;
