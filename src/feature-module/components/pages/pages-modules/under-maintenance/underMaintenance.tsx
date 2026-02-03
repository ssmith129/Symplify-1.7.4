import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";

const UnderMaintenance = () => {
  return (
    <>
      {/* Start Content */}
      <div className="container-fuild">
        <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
          {/* start row */}
          <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
            <div className="col-lg-5">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="mb-3 p-3">
                  <ImageWithBasePath
                    src="assets/img/logo.svg"
                    alt="logo"
                    className="img-fluid"
                  />
                </div>
                <div className="error-images mb-3 pb-3">
                  <ImageWithBasePath
                    src="assets/img/bg/under-maintanence.svg"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <div className="text-center">
                  <h5 className="fw-bold mb-1">We Will Return Shortly.</h5>
                  <p className="fs-16 text-center">
                    We're working on new technology upgrades. We regret any
                    inconvenience this has caused.
                  </p>
                  <div className="d-flex justify-content-center pb-3">
                    <Link
                      to={all_routes.dashboard}
                      className="btn btn-primary d-flex align-items-center "
                    >
                      <i className="ti ti-chevron-left me-1" />
                      Back to Dashboard
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
      </div>
      {/* End Content */}
    </>
  );
};

export default UnderMaintenance;
