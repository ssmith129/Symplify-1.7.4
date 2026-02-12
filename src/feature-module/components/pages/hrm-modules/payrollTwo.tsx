import ImageWithBasePath from "../../../../core/imageWithBasePath";
import { Link } from "react-router";
import { all_routes } from "../../../routes/all_routes";

const PayrollTwo = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* start row */}
          <div className="row">
            <div className="col-lg-10 mx-auto">
              {/* Start Page Header */}
              <div className="mb-3">
                <h6 className="fs-14 fw-bold mb-3 me-2">
                  <Link to={all_routes.payroll}>
                    <i className="ti ti-chevron-left me-1" />
                    Payroll
                  </Link>
                </h6>
                <div className="card rounded-5">
                  <div className="card-header px-0 mx-3">
                    <h4 className="fw-bold text-center mb-3">
                      Payslip for the Month of March 2025
                    </h4>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                      <h6 className="fs-14 fw-semibold mb-0">
                        Salary Month: March,2025
                      </h6>
                      <div className="d-flex align-items-center">
                        <h6 className="fs-14 fw-semibold mb-0 me-2">Status:</h6>
                        <span className="badge bg-success fw-medium">
                          Sucess
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                      <div>
                        <ImageWithBasePath
                          src="assets/img/logo.svg"
                          alt="img"
                          className="img-fluid mb-2"
                        />
                        <p className="mb-0">3864 Quiet Valley Lane,</p>
                        <p className="mb-0">Sherman Oaks, CA, 91403</p>
                        <p className="mb-0">GST No:2914035</p>
                      </div>
                      <div className="text-end">
                        <h6 className="fs-14 fw-semibold mb-1">
                          Andrew Fletcher
                        </h6>
                        <p className="mb-0">
                          Employee ID :
                          <span className="text-dark fw-medium">ST-0001</span>
                        </p>
                        <p className="mb-0">
                          Joining Date :
                          <span className="text-dark fw-medium">
                            7 May 2015
                          </span>
                        </p>
                      </div>
                    </div>
                    {/* start row */}
                    <div className="row row-gap-2 mb-3">
                      <div className="col-md-6">
                        <h5 className="mb-3 fw-bold">Earnings</h5>
                        <div className="mb-3">
                          <label className="form-label">Basic Salary</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">
                            House Rent Allowance (H.R.A)
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Conveyance</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Other Allowance</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-0">
                          <label className="form-label">Total Earnings</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-md-6">
                        <h5 className="mb-3 fw-bold">Deductions</h5>
                        <div className="mb-3">
                          <label className="form-label">
                            Tax Deducted at Sources (T.D.S)
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Provident Fund</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">ESI</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Loan</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-0">
                          <label className="form-label">Total Deductions</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      {/* end col */}
                    </div>
                    {/* end row */}
                    <h6 className="fs-14 fw-semibold mb-2">
                      Net Salary: $9698 (Nine Thousand Six Hundred and Ninety
                      Eight Only)
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus sed dictum ligula, cursus blandit risus. Maecenas
                      eget metus non tellus dignissim aliquam ut a ex. Maecenas
                      sed vehicula dui, ac suscipit lacus.
                    </p>
                  </div>
                  {/* end card body */}
                  <div className="card-footer px-0 mx-3">
                    <div className="d-flex align-items-center justify-content-center">
                      <Link to="#" className="btn btn-primary me-2">
                        Send Payslip
                      </Link>
                      <Link to="#" className="btn btn-light">
                        <i className="ti ti-printer me-1" />
                        Print
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end card */}
              </div>
              {/* End Page Header */}
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
              Symplify
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

export default PayrollTwo;
