import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";

const PatientInvoiceDetails = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content pb-0">
          {/* start row*/}
          <div className="row">
            <div className="col-lg-10 mx-auto">
              {/* start page header */}
              <div className="d-flex align-items-sm-center flex-sm-row flex-column mb-4">
                <div className="flex-grow-1">
                  <h6 className="fs-14 fw-semibold mb-0 d-flex align-items-center ">
                    <Link to={all_routes.patientinvoices} className="me-1">
                      <i className="ti ti-chevron-left" /> Patient Invoice
                      Details
                    </Link>
                  </h6>
                </div>
              </div>
              {/* end page header */}
              <div className="card">
                <div className="card-body">
                  {/* Items */}
                  <div className="d-flex align-items-center justify-content-between border-1 border-bottom pb-3 mb-3">
                    <div className="invoice-logo">
                      <ImageWithBasePath
                        src="assets/img/logo.svg"
                        className="logo-white"
                        alt="logo"
                      />
                      <ImageWithBasePath
                        src="assets/img/logo-white.svg"
                        className="logo-dark"
                        alt="logo"
                      />
                    </div>

                    <span className="badge bg-danger text-white fs-12">
                      Due in 8 days
                    </span>
                  </div>
                  {/* start row */}
                  <div className="row pb-3 border-1 border-bottom mb-4">
                    <div className="col-lg-4">
                      <h5 className="mb-2 fs-16 fw-bold"> Invoice Details </h5>
                      <p className="text-body mb-1">
                        Invoice Number :{" "}
                        <span className="text-dark">INV0025</span>
                      </p>
                      <p className="text-body mb-1">
                        Issued On :{" "}
                        <span className="text-dark">25 Jan 2025</span>
                      </p>
                      <p className="text-body mb-1">
                        Due Date :{" "}
                        <span className="text-dark">31 Jan 2025</span>
                      </p>
                      <p className="text-body mb-0">
                        Recurring Invoice :
                        <span className="text-dark"> Monthly</span>
                      </p>
                    </div>
                    {/* end col */}
                    <div className="col-lg-4">
                      <h5 className="mb-2 fs-16 fw-bold"> Invoice Form </h5>
                      <p className="text-dark fw-medium mb-1">
                        {" "}
                        Andrew Fletcher
                      </p>
                      <p className="text-body mb-1 pe-5">
                        <span className="text-body">
                          5754 Airport Rd Coosada, AL, 36020 United States
                        </span>
                      </p>
                    </div>
                    {/* end col */}
                    <div className="col-lg-4 text-lg-end">
                      <h5 className="mb-2 fs-16 fw-bold"> Invoice To </h5>
                      <p className="text-dark fw-medium mb-1">
                        {" "}
                        Andrew Fletcher{" "}
                      </p>
                      <p className="m-0 ps-5">
                        299 Star Trek Drive, Florida, 3240, United States
                      </p>
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                  {/* Items */}
                  <div className="mb-4">
                    <h6 className="mb-3 fs-16 fw-bold">
                      {" "}
                      Products/Service Items{" "}
                    </h6>
                    <div className="">
                      {/* Table List */}
                      <div className="table-responsive border bg-white">
                        <table className="table table-nowrap">
                          <thead className="table-light">
                            <tr>
                              <th>#</th>
                              <th>Product/Item</th>
                              <th>Description</th>
                              <th> Unit Cost</th>
                              <th> Quantity </th>
                              <th> Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Full body checkup</td>
                              <td>
                                Complete health screening covering all major
                                systems
                              </td>
                              <td> $400 </td>
                              <td> 1 </td>
                              <td> $400 </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Blood Test </td>
                              <td>
                                Routine blood analysis to assess overall health
                                status
                              </td>
                              <td> $250</td>
                              <td> 1 </td>
                              <td> $250 </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* /Table List */}
                    </div>
                  </div>
                  {/* etart row */}
                  <div className="row pb-3 mb-3 border-1 border-bottom">
                    <div className="col-lg-6">
                      <div className="">
                        <h6 className="mb-2 fs-16 fw-bold"> Bank Details</h6>
                        <p className="text-body mb-1">
                          Bank Name :{" "}
                          <span className="text-dark"> ABC Bank </span>
                        </p>
                        <p className="text-body mb-1">
                          Account Number :
                          <span className="text-dark"> 782459739212 </span>
                        </p>
                        <p className="text-body mb-1">
                          IFSC Code :
                          <span className="text-dark"> ABC0001345 </span>
                        </p>
                        <p className="text-body mb-1">
                          Payment Reference :
                          <span className="text-dark"> INV-20250220-001 </span>
                        </p>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-lg-6">
                      <div className="">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fs-14 fw-medium text-body">Amount</h6>
                          <h6 className="fs-14 fw-semibold text-dark">
                            $1,793.12
                          </h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fs-14 fw-medium text-body">
                            CGST (9%)
                          </h6>
                          <h6 className="fs-14 fw-semibold text-dark">$18</h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fs-14 fw-medium text-body">
                            SGST (9%)
                          </h6>
                          <h6 className="fs-14 fw-semibold text-dark">$18</h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                          <h6 className="fs-14 fw-medium text-body">
                            Discount
                          </h6>
                          <h6 className="fs-14 fw-semibold text-danger">$18</h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fs-18 fw-bold">Total (USD)</h6>
                          <h6 className="fs-18 fw-bold">$1,972.43</h6>
                        </div>
                        <div>
                          <h6 className="fs-14 text-body mb-1">
                            Total in words
                          </h6>
                          <p className="fw-semibold text-dark">
                            Dollar One thousand nine hundred seventy-two
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                  {/* Items */}
                  <div className="pb-3 mb-3 border-1 border-bottom d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div>
                      <div className=" mb-3">
                        <h6 className="mb-1 fs-14 fw-semibold">
                          Terms and Conditions
                        </h6>
                        <p>
                          {" "}
                          The Payment must be returned in the same condition.{" "}
                        </p>
                      </div>
                      <div className="">
                        <h6 className="mb-1 fs-14 fw-semibold"> Notes </h6>
                        <p>
                          All charges are final and include applicable taxes,
                          fees, and additional costs.
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <ImageWithBasePath
                        src="assets/img/icons/signature-img.svg"
                        alt=""
                        className="img-fluid "
                      />
                      <h6 className="fs-14 fw-semibold"> Ted M. Davis </h6>
                      <p className="fs-13 fw-normal">Manager </p>
                    </div>
                  </div>
                  <div className="text-center d-flex align-items-center justify-content-center">
                    <Link
                      to=""
                      className="btn btn-md btn-dark me-2 d-flex align-items-center"
                    >
                      <i className="ti ti-printer me-1" /> Print
                    </Link>
                    <Link
                      to=""
                      className="btn btn-md btn-primary d-flex align-items-center"
                    >
                      <i className="ti ti-download me-1" /> Download
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end row*/}
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

export default PatientInvoiceDetails;
