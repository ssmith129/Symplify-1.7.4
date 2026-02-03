import { Link } from "react-router";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import { all_routes } from "../../../../../routes/all_routes";

const VoiceCalls = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
            <div className="flex-grow-1">
              <h4 className="fs-18 fw-semibold mb-0">Voice Call</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to={all_routes.dashboard}>Applications</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Voice Call
                </li>
              </ol>
            </div>
          </div>
          {/* End Page Header */}

          {/* start row */}
          <div className="row">
            <div className="col-xxl-12">
              <div className="card car-max-height mb-0 shadow-none">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-lg avatar-rounded me-2">
                        <ImageWithBasePath
                          src="assets/img/users/user-01.jpg"
                          className="img-fluid rounded-circle"
                          alt="img"
                        />
                      </span>
                      <div>
                        <h6 className="mb-1">
                          <Link to="#">Anthony Lewis</Link>
                        </h6>
                        <span className="d-block">Online</span>
                      </div>
                    </div>
                    <Link
                      to="#"
                      className="avatar avatar-md rounded-circle bg-light text-dark"
                    >
                      <i className="ti ti-user-plus fs-20" />
                    </Link>
                  </div>
                </div>
                {/* end card-header */}
                <div className="card-body position-relative text-center d-flex flex-column justify-content-center">
                  <div className="caller-profile mb-3">
                    <ImageWithBasePath
                      src="assets/img/users/user-01.jpg"
                      className="img-fluid rounded-circle"
                      alt="img"
                    />
                  </div>
                  <h5>Anthony Lewis</h5>
                  <p>00:24</p>
                  <Link
                    to="#"
                    className="avatar avatar-xl position-absolute end-0 bottom-0 m-3"
                  >
                    <ImageWithBasePath
                      src="assets/img/users/user-05.jpg"
                      alt="Img"
                    />
                  </Link>
                </div>
                {/* end card-body */}
                <div className="card-footer">
                  <div className="d-flex align-items-center justify-content-center">
                    <Link
                      to="#"
                      className="btn btn-light btn-icon rounded-circle p-0 d-flex align-items-center justify-content-center me-3"
                    >
                      <i className="ti ti-video fs-20" />
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-danger btn-icon rounded-circle p-0 d-flex align-items-center justify-content-center me-3"
                    >
                      <i className="ti ti-phone fs-20" />
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-light btn-icon rounded-circle p-0 d-flex align-items-center justify-content-center"
                    >
                      <i className="ti ti-microphone fs-20" />
                    </Link>
                  </div>
                </div>
                {/* end card-footer */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* End Content */}
      </div>
      {/* ========================
			End Page Content
		========================= */}
    </>
  );
};

export default VoiceCalls;
