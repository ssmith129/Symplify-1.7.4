import { Link } from "react-router";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";

const Activities = () => {
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
            <h4 className="fw-bold mb-0">Activities</h4>
          </div>
          {/* End Page Header */}
          <div className="card mb-0">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <p className="text-dark me-4 mb-0 timeline-date flex-shrink-0">
                  24 Sep 2024
                </p>
                <div className="border-start ps-4 py-4 border-circle position-relative">
                  <p className="text-dark fw-semibold mb-1">
                    Completed the Patient visit at Glory Hospital in Florida,
                    USA .
                  </p>
                  <p>
                    The patient successfully completed a scheduled visit. All
                    clinical notes, diagnostics, and visit outcomes have been
                    recorded and stored in the medical record.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <p className="text-dark me-4 mb-0 timeline-date flex-shrink-0">
                  20 Sep 2024
                </p>
                <div className="border-start ps-4 py-4 border-circle position-relative">
                  <p className="text-dark fw-semibold mb-1">
                    Bernardo James&nbsp;Uploaded 4 new photos for World Safety
                    Event
                  </p>
                  <p>
                    02:30 AM, April 9 - 2025, Bernardo James, Uploaded 4 new
                    photos
                  </p>
                  {/* start row */}
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="avatar avatar-xxxl rounded-3">
                        <ImageWithBasePath
                          src="assets/img/media/img-31.png"
                          alt="img"
                          className="img-fluid object-fit-cover rounded-3"
                        />
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-lg-3">
                      <div className="avatar avatar-xxxl rounded-3">
                        <ImageWithBasePath
                          src="assets/img/media/img-32.png"
                          alt="img"
                          className="img-fluid object-fit-cover rounded-3"
                        />
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-lg-3">
                      <div className="avatar avatar-xxxl rounded-3">
                        <ImageWithBasePath
                          src="assets/img/media/img-33.png"
                          alt="img"
                          className="img-fluid object-fit-cover rounded-3"
                        />
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-lg-3">
                      <div className="avatar avatar-xxxl rounded-3">
                        <ImageWithBasePath
                          src="assets/img/media/img-34.png"
                          alt="img"
                          className="img-fluid object-fit-cover rounded-3"
                        />
                      </div>
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
              </div>
              <div className="d-flex align-items-center">
                <p className="text-dark me-4 mb-0 timeline-date flex-shrink-0">
                  10 Sep 2024
                </p>
                <div className="border-start ps-4 py-4 border-circle position-relative">
                  <p className="text-dark fw-semibold mb-1">
                    Dr. Linda Carpenter&nbsp;Doctors Meeting
                  </p>
                  <p>
                    April 12, 2025, 10:00 AM – 12:30 PM, Conference Room B /
                    Virtual via Zoom
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <p className="text-dark me-4 mb-0 timeline-date flex-shrink-0">
                  02 Sep 2024
                </p>
                <div className="border-start ps-4 py-4 border-circle position-relative">
                  <p className="text-dark fw-semibold mb-1">
                    Dr.Markhay smith&nbsp;was Completed the Operation With in
                    Deadline
                  </p>
                  <p>
                    The operation was successfully completed within the
                    scheduled deadline.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <p className="text-dark me-4 mb-0 timeline-date flex-shrink-0">
                  01 Sep 2024
                </p>
                <div className="border-start ps-4 py-4 border-circle position-relative pb-0">
                  <p className="text-dark fw-semibold mb-1">
                    Rio Williams&nbsp;Posted a Blog about Corona Safety
                    Measurements
                  </p>
                  <div className="rounded-2 bg-light p-3">
                    {/* start row */}
                    <div className="d-flex align-items-center">
                      <div className="rounded-3 timeline-img">
                        <ImageWithBasePath
                          src="assets/img/media/img-34.png"
                          alt="img"
                          className="img-fluid rounded-3 w-100 h-100 object-fit-cover"
                        />
                      </div>
                      <div className="ms-3">
                        <div className="d-flex align-items-center mb-2">
                          <span className="badge bg-info me-3">Safety</span>
                          <span>March 10, 2025</span>
                        </div>
                        <p>Rio Williams posted a new blog</p>
                        <p className="mb-2">
                          “Stay informed on how to keep your clinic environment
                          safe. Rio shares essential COVID-19 safety protocols,
                          from sanitization tips to patient screening
                          procedures.”
                        </p>
                        <Link to="#" className="btn btn-primary">
                          Read more <i className="ti ti-chevron-right ms-1" />
                        </Link>
                      </div>
                    </div>
                    {/* end row */}
                  </div>
                </div>
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

export default Activities;
