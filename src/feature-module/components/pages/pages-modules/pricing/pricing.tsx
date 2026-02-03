import { Link } from "react-router";

const Pricing = () => {
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
            <h4 className="fw-bold mb-0">Pricing</h4>
          </div>
          {/* End Page Header */}
          {/* start row */}
          <div className="row">
            <div className="col-lg-4 d-flex">
              <div className="card border flex-fill rounded-4 p-3 mb-3">
                <div className="card-body">
                  <div className="mb-3">
                    <div className="mb-3">
                      <h4 className="fw-bold mb-1">Basic</h4>
                      <p className="mb-3 text-truncate line-clamb-2">
                        Ideal for small practices
                      </p>
                    </div>
                    <div className="d-flex align-items-center mb-3 flex-wrap gap-2">
                      <h2 className=" fs-32 fw-bold mb-0">
                        $0<span className="fs-14 fw-normal">/Month</span>
                      </h2>
                    </div>
                    <p className="mb-3 text-truncate line-clamb-2">
                      Including GST. Billed Monthly
                    </p>
                    <Link
                      to="#"
                      className="d-flex align-items-center justify-content-center btn btn-outline-primary rounded w-100 mb-3"
                      data-bs-toggle="modal"
                      data-bs-target="#checkout"
                    >
                      <i className="isax isax-shopping-cart me-1" /> Choose Plan
                    </Link>
                  </div>
                  <div className="mt-3">
                    <div>
                      <span className="text-dark d-flex align-items-center mb-2">
                        <i className="ti ti-checkbox text-success me-2" />
                        Patient registration &amp; scheduling
                      </span>
                      <span className="text-dark d-flex align-items-center mb-2">
                        <i className="ti ti-checkbox text-success me-2" />
                        Email/SMS appointment reminders
                      </span>
                      <span className="text-dark d-flex align-items-center mb-2">
                        <i className="ti ti-checkbox text-success me-2" />
                        Appointment scheduling (limited)
                      </span>
                      <span className="text-dark d-flex align-items-center mb-2">
                        <i className="ti ti-checkbox text-success me-2" />
                        Basic electronic medical records (EMR)
                      </span>
                      <span className="text-dark d-flex align-items-center mb-2">
                        <i className="ti ti-checkbox text-danger me-2" />
                        Limited appointments
                      </span>
                      <span className="text-dark d-flex align-items-center mb-0">
                        <i className="ti ti-checkbox text-danger me-2" />
                        Business-hours-only support
                      </span>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-4 d-flex">
              <div className="card border flex-fill rounded-4 p-3 mb-3">
                <div className="card-body">
                  <div className="mb-3">
                    <div className="mb-3">
                      <h4 className="fw-bold mb-1">Premium</h4>
                      <p className="mb-3 text-truncate line-clamb-2">
                        Ideal for small practices
                      </p>
                    </div>
                    <div className="d-flex align-items-center mb-1 flex-wrap gap-2">
                      <h2 className=" fs-32 fw-bold mb-0">
                        $50<span className="fs-14 fw-normal">/Month</span>
                      </h2>
                    </div>
                    <div className="d-flex">
                      <p className="text-decoration-line-through">$45/</p>
                      <span className="text-success fw-semibold">Save 5%</span>
                    </div>
                    <p className="mb-3 text-truncate line-clamb-2">
                      Including GST. Billed Monthly
                    </p>
                    <Link
                      to="#"
                      className="d-flex align-items-center justify-content-center btn btn-primary rounded w-100 mb-3"
                      data-bs-toggle="modal"
                      data-bs-target="#checkout"
                    >
                      <i className="isax isax-shopping-cart me-1" /> Choose Plan
                    </Link>
                  </div>
                  <div className="mt-3">
                    <div>
                      <span className="text-dark d-flex align-items-center mb-2">
                        <i className="ti ti-checkbox text-success me-2" />
                        Role-based staff access
                      </span>
                      <span className="text-dark d-flex align-items-center mb-2">
                        <i className="ti ti-checkbox text-success me-2" />
                        Basic telemedicine/video consultation
                      </span>
                      <span className="text-dark d-flex align-items-center mb-2">
                        <i className="ti ti-checkbox text-success me-2" />
                        Unlimited appointments
                      </span>
                      <span className="text-dark d-flex align-items-center mb-2">
                        <i className="ti ti-checkbox text-success me-2" />
                        Priority customer support
                      </span>
                      <span className="text-dark d-flex align-items-center mb-2">
                        <i className="ti ti-checkbox text-danger me-2" />
                        Advanced AI diagnostics
                      </span>
                      <span className="text-dark d-flex align-items-center mb-0">
                        <i className="ti ti-checkbox text-danger me-2" />
                        Lab test ordering &amp; results tracking
                      </span>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-4 d-flex">
              <div className="card border flex-fill rounded-4 p-3 mb-3">
                <div className="card-body">
                  <div className="mb-3">
                    <div className="mb-3">
                      <h4 className="fw-bold mb-1">Enterprise</h4>
                      <p className="mb-3 text-truncate line-clamb-2">
                        Ideal for small practices
                      </p>
                    </div>
                    <div className="d-flex align-items-center mb-1 flex-wrap gap-2">
                      <h2 className=" fs-32 fw-bold mb-0">
                        $50<span className="fs-14 fw-normal">/Month</span>
                      </h2>
                    </div>
                    <div className="d-flex">
                      <p className="text-decoration-line-through">$45/</p>
                      <span className="text-success fw-semibold">Save 5%</span>
                    </div>
                    <p className="mb-3 text-truncate line-clamb-2">
                      Including GST. Billed Monthly
                    </p>
                    <Link
                      to="#"
                      className="d-flex align-items-center justify-content-center btn btn-outline-primary rounded w-100 mb-3"
                      data-bs-toggle="modal"
                      data-bs-target="#checkout"
                    >
                      <i className="isax isax-shopping-cart me-1" /> Choose Plan
                    </Link>
                  </div>
                  <div className="mt-3">
                    <div>
                      <span className="text-dark d-flex align-items-center mb-2">
                        <i className="ti ti-checkbox text-success me-2" />
                        All Basic features
                      </span>
                      <span className="text-dark d-flex align-items-center mb-2">
                        <i className="ti ti-checkbox text-success me-2" />
                        Unlimited appointments
                      </span>
                      <span className="text-dark d-flex align-items-center mb-2">
                        <i className="ti ti-checkbox text-success me-2" />
                        Billing &amp; invoicing
                      </span>
                      <span className="text-dark d-flex align-items-center mb-2">
                        <i className="ti ti-checkbox text-success me-2" />
                        Basic electronic medical records (EMR)
                      </span>
                      <span className="text-dark d-flex align-items-center mb-2">
                        <i className="ti ti-checkbox text-danger me-2" />
                        Detailed EMR with templates
                      </span>
                      <span className="text-dark d-flex align-items-center mb-0">
                        <i className="ti ti-checkbox text-danger me-2" />
                        Multi-language support
                      </span>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
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

export default Pricing;
