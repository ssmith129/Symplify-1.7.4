import { Link } from "react-router"
import ImageWithBasePath from "../../../../core/imageWithBasePath"
import { all_routes } from "../../../routes/all_routes"

const Error500 = () => {
  return (
   <>
  {/* Start Content */}
  <div className="container-fuild">
    <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100 z-1">
      <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
        <div className="col-lg-6">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className=" mx-auto mb-5 text-center">
              <ImageWithBasePath src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
            </div>
            <div className="error-images mb-3">
              <ImageWithBasePath
                src="assets/img/error-500.svg"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="text-center">
              <h4 className="mb-2 fw-bold">Oops, something went wrong</h4>
              <p className="fs-14 text-center">
                Server Error 500. We apologise and are fixing the problem.
                Please try again at a later stage
              </p>
              <div className="d-flex justify-content-center pb-3">
                <Link
                  to={all_routes.dashboard}
                  className="btn btn-primary d-flex align-items-center "
                >
                  <i className="ti ti-chevron-left me-2" />
                  Back to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default Error500