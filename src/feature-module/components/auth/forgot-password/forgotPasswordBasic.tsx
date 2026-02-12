import { Link } from "react-router"
import { all_routes } from "../../../routes/all_routes"
import ImageWithBasePath from "../../../../core/imageWithBasePath"


const ForgotPasswordBasic = () => {
  return (
   <>
  {/* Start Content */}
  <div className="container-fuild position-relative z-1">
    <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
      {/* start row */}
      <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap">
        <div className="col-lg-4 mx-auto">
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
                    <h5 className="mb-1 fs-20 fw-bold">Forgot Password</h5>
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
                      to={all_routes.emailverificationbasic}
                      className="btn bg-primary text-white w-100"
                    >
                      Reset Password
                    </Link>
                  </div>
                  <div className="text-center">
                    <h6 className="fw-normal fs-14 text-dark mb-0">
                      Return to  <Link to={all_routes.loginbasic} className="hover-a"> login </Link>
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
        {/* end col */}
      </div>
      {/* end row */}
    </div>
  </div>
  {/* End Content */}
  {/* Start Bg Content */}
  <ImageWithBasePath
    src="assets/img/auth/auth-bg-top.png"
    alt=""
    className="img-fluid element-01"
  />
  <ImageWithBasePath
    src="assets/img/auth/auth-bg-bot.png"
    alt=""
    className="img-fluid element-02"
  />
  {/* End Bg Content */}
</>

  )
}

export default ForgotPasswordBasic
