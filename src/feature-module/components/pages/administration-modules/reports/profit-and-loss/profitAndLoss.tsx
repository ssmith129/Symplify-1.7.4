import { Link } from "react-router";

const ProfitAndLoss = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Start Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">Profit &amp; Loss Report</h4>
            </div>
            <div className="text-end d-flex">
              {/* dropdown*/}
              <div className="dropdown me-1">
                <Link
                  to="#"
                  className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  Export
                  <i className="ti ti-chevron-down ms-2" />
                </Link>
                <ul className="dropdown-menu p-2">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Download as PDF
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Download as Excel
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End Page Header */}
          {/* row start */}
          <div className="row">
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div>
                      <p className="mb-1 text-truncate">Total Income</p>
                      <h6 className="mb-2 fw-bold">$125,150</h6>
                    </div>
                    <span className="avatar avatar-lg bg-primary text-white rounded-circle border border-primary flex-shrink-0">
                      <i className="ti ti-arrow-up-right-circle fs-24" />
                    </span>
                  </div>
                  <div className="p-2 rounded bg-light text-center">
                    <p className="mb-0 fs-13">
                      <span className="text-success">
                        <i className="ti ti-arrow-up-right me-1" />
                        5.62%
                      </span>
                      from last month
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div>
                      <p className="mb-1 text-truncate">Total Expenses</p>
                      <h6 className="mb-2 fw-bold">$91,800</h6>
                    </div>
                    <span className="avatar avatar-lg bg-success text-white rounded-circle border border-success flex-shrink-0">
                      <i className="ti ti-arrow-down-right-circle fs-24" />
                    </span>
                  </div>
                  <div className="p-2 rounded bg-light text-center">
                    <p className="mb-0 fs-13">
                      <span className="text-success">
                        <i className="ti ti-arrow-up-right me-1" />
                        11.4%
                      </span>
                      from last month
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div>
                      <p className="mb-1 text-truncate">Net Profit</p>
                      <h6 className="mb-2 fw-bold">$91,800</h6>
                    </div>
                    <span className="avatar avatar-lg bg-warning text-white rounded-circle border border-warning flex-shrink-0">
                      <i className="ti ti-currency-dollar fs-24" />
                    </span>
                  </div>
                  <div className="p-2 rounded bg-light text-center">
                    <p className="mb-0 fs-13">
                      <span className="text-success">
                        <i className="ti ti-arrow-up-right me-1" />
                        8.52%
                      </span>
                      from last month
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div>
                      <p className="mb-1 text-truncate">Profit Margin (%)</p>
                      <h6 className="mb-2 fw-bold">26.6%</h6>
                    </div>
                    <span className="avatar avatar-lg bg-danger text-white rounded-circle border border-danger flex-shrink-0">
                      <i className="ti ti-cash fs-24" />
                    </span>
                  </div>
                  <div className="p-2 rounded bg-light text-center">
                    <p className="mb-0 fs-13">
                      <span className="text-danger">
                        <i className="ti ti-arrow-down-right me-1" />
                        7.45%
                      </span>
                      from last month
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
          </div>
          {/* row end */}
          <div className="table-responsive">
            <table className="table table-nowrap">
              <thead className="thead-light">
                <tr>
                  <th className="border-end" />
                  <th>Jan 2025</th>
                  <th>Feb 2025</th>
                  <th>Mar 2025</th>
                  <th>Apr 2025</th>
                  <th>May 2025</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-end">Income</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>
                    <p className="text-dark fw-medium" />
                  </td>
                </tr>
                <tr>
                  <td className="border-end">Consultation Fees</td>
                  <td>$50,125</td>
                  <td>$25,750</td>
                  <td>$25,750</td>
                  <td>$25,750</td>
                  <td>$25,750</td>
                  <td>
                    <p className="text-dark fw-medium">$25,750</p>
                  </td>
                </tr>
                <tr>
                  <td className="border-end">Lab Revenue</td>
                  <td>$75,900</td>
                  <td>$50,125</td>
                  <td>$50,125</td>
                  <td>$50,125</td>
                  <td>$50,125</td>
                  <td>
                    <p className="text-dark fw-medium">$50,125</p>
                  </td>
                </tr>
                <tr>
                  <td className="border-end">Pharmacy Sales</td>
                  <td>$151,775</td>
                  <td>$75,900</td>
                  <td>$75,900</td>
                  <td>$75,900</td>
                  <td>$75,900</td>
                  <td>
                    <p className="text-dark fw-medium">$75,900</p>
                  </td>
                </tr>
                <tr>
                  <td className="border-end">
                    <p className="text-dark fw-medium">Gross Profit</p>
                  </td>
                  <td>
                    <p className="text-dark fw-medium">$25,750</p>
                  </td>
                  <td>
                    <p className="text-dark fw-medium">$151,775</p>
                  </td>
                  <td>
                    <p className="text-dark fw-medium">$151,775</p>
                  </td>
                  <td>
                    <p className="text-dark fw-medium">$151,775</p>
                  </td>
                  <td>
                    <p className="text-dark fw-medium">$151,775</p>
                  </td>
                  <td>
                    <p className="text-dark fw-medium">$151,775</p>
                  </td>
                </tr>
                <tr>
                  <td className="border-end">
                    <p className="text-dark fw-medium">Expense</p>
                  </td>
                  <td>
                    <p className="text-dark fw-medium" />
                  </td>
                  <td>
                    <p className="text-dark fw-medium" />
                  </td>
                  <td>
                    <p className="text-dark fw-medium" />
                  </td>
                  <td>
                    <p className="text-dark fw-medium" />
                  </td>
                  <td>
                    <p className="text-dark fw-medium" />
                  </td>
                  <td>
                    <p className="text-dark fw-medium" />
                  </td>
                </tr>
                <tr>
                  <td className="border-end">Doctor Payouts</td>
                  <td>$50,125</td>
                  <td>$25,750</td>
                  <td>$25,750</td>
                  <td>$25,750</td>
                  <td>$25,750</td>
                  <td>
                    <p className="text-dark fw-medium">$25,750</p>
                  </td>
                </tr>
                <tr>
                  <td className="border-end">Staff Salaries</td>
                  <td>$75,900</td>
                  <td>$50,125</td>
                  <td>$50,125</td>
                  <td>$50,125</td>
                  <td>$50,125</td>
                  <td>
                    <p className="text-dark fw-medium">$50,125</p>
                  </td>
                </tr>
                <tr>
                  <td className="border-end">Rent &amp; Utilities</td>
                  <td>$15,000</td>
                  <td>$75,900</td>
                  <td>$75,900</td>
                  <td>$75,900</td>
                  <td>$75,900</td>
                  <td>
                    <p className="text-dark fw-medium">$87,650</p>
                  </td>
                </tr>
                <tr>
                  <td className="border-end">Medical Supplies</td>
                  <td>$18,200</td>
                  <td>$15,000</td>
                  <td>$15,000</td>
                  <td>$15,000</td>
                  <td>$15,000</td>
                  <td>
                    <p className="text-dark fw-medium">$15,000</p>
                  </td>
                </tr>
                <tr>
                  <td className="border-end">Lab Consumables</td>
                  <td>$75,900</td>
                  <td>$18,200</td>
                  <td>$18,200</td>
                  <td>$18,200</td>
                  <td>$18,200</td>
                  <td>
                    <p className="text-dark fw-medium">$18,200</p>
                  </td>
                </tr>
                <tr>
                  <td className="border-end">Maintenance &amp; Repair</td>
                  <td>$99,999</td>
                  <td>$20,800</td>
                  <td>$20,800</td>
                  <td>$20,800</td>
                  <td>$20,800</td>
                  <td>
                    <p className="text-dark fw-medium">$20,800</p>
                  </td>
                </tr>
                <tr>
                  <td className="border-end">
                    <p className="text-dark fw-medium">Total Expense</p>
                  </td>
                  <td>
                    <p className="text-dark fw-medium">$2,69,276</p>
                  </td>
                  <td>
                    <p className="text-dark fw-medium" />
                    $99,999
                  </td>
                  <td>
                    <p className="text-dark fw-medium" />
                    $99,999
                  </td>
                  <td>
                    <p className="text-dark fw-medium">$99,999</p>
                  </td>
                  <td>
                    <p className="text-dark fw-medium">$99,999</p>
                  </td>
                  <td>
                    <p className="text-dark fw-medium">$151,775</p>
                  </td>
                </tr>
                <tr>
                  <td className="border-end">
                    <p className="text-dark fw-medium">Net Income</p>
                  </td>
                  <td>
                    <p className="text-dark fw-medium">$2,69,276</p>
                  </td>
                  <td>
                    <p className="text-dark fw-medium">$2,75,638</p>
                  </td>
                  <td>
                    <p className="text-dark fw-medium">$2,51,629</p>
                  </td>
                  <td>
                    <p className="text-dark fw-medium">$7,96,543</p>
                  </td>
                  <td>
                    <p className="text-dark fw-medium">$7,96,543</p>
                  </td>
                  <td>
                    <p className="text-dark fw-medium">$2,75,638</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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

export default ProfitAndLoss;
