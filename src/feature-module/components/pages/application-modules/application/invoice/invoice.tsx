import { Link } from "react-router";
import { all_routes } from "../../../../../routes/all_routes";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";

const Invoice = () => {
 
  return (
    <>

  {/* ========================
			Start Page Content
		========================= */}
  <div className="page-wrapper">
    {/* Start Content */}
    <div className="content content-two">
      {/* Page Header */}
      <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
        <div className="flex-grow-1">
          <h4 className="fs-18 fw-semibold mb-0">Invoices</h4>
        </div>
        <div className="text-end">
          <ol className="breadcrumb m-0 py-0">
            <li className="breadcrumb-item">
              <Link to={all_routes.dashboard}>Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Invoices
            </li>
          </ol>
        </div>
      </div>
      {/* End Page Header */}
      {/* start row */}
      <div className="row">
        <div className="col-xl-3 col-sm-6">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="d-flex align-items-center overflow-hidden mb-2">
                <div>
                  <p className="mb-1 text-truncate">Total Invoice</p>
                  <h6>$3,237.94</h6>
                </div>
              </div>
              <div className="attendance-report-bar mb-2">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: 5 }}
                >
                  <div
                    className="progress-bar bg-pink"
                    style={{ width: "85%" }}
                  />
                </div>
              </div>
              <div>
                <p className="d-flex align-items-center text-truncate">
                  <span className="text-success fs-12 d-flex align-items-center me-1">
                    <i className="ti ti-arrow-wave-right-up me-1" />
                    +32.40%
                  </span>
                  from last month
                </p>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
        {/* end col */}
        <div className="col-xl-3 col-sm-6">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="d-flex align-items-center overflow-hidden mb-2">
                <div>
                  <p className="mb-1 text-truncate">Outstanding</p>
                  <h6>$3,237.94</h6>
                </div>
              </div>
              <div className="attendance-report-bar mb-2">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: 5 }}
                >
                  <div
                    className="progress-bar bg-purple"
                    style={{ width: "50%" }}
                  />
                </div>
              </div>
              <div>
                <p className="d-flex align-items-center text-truncate">
                  <span className="text-danger fs-12 d-flex align-items-center me-1">
                    <i className="ti ti-arrow-wave-right-up me-1" />
                    -4.40%
                  </span>
                  from last month
                </p>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
        {/* end col */}
        <div className="col-xl-3 col-sm-6">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="d-flex align-items-center overflow-hidden mb-2">
                <div>
                  <p className="mb-1 text-truncate">Draft</p>
                  <h6>$3,237.94</h6>
                </div>
              </div>
              <div className="attendance-report-bar mb-2">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: 5 }}
                >
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "30%" }}
                  />
                </div>
              </div>
              <div>
                <p className="d-flex align-items-center text-truncate">
                  <span className="text-success fs-12 d-flex align-items-center me-1">
                    <i className="ti ti-arrow-wave-right-up me-1" />
                    12%
                  </span>
                  from last month
                </p>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
        {/* end col */}
        <div className="col-xl-3 col-sm-6">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="d-flex align-items-center overflow-hidden mb-2">
                <div>
                  <p className="mb-1 text-truncate">Total Overdue</p>
                  <h6>$3,237.94</h6>
                </div>
              </div>
              <div className="attendance-report-bar mb-2">
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ height: 5 }}
                >
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "20%" }}
                  />
                </div>
              </div>
              <div>
                <p className="d-flex align-items-center text-truncate">
                  <span className="text-danger fs-12 d-flex align-items-center me-1">
                    <i className="ti ti-arrow-wave-right-up me-1" />
                    -15.40%
                  </span>
                  from last month
                </p>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
        {/* end col */}
      </div>
      {/* end row */}
      {/* start row */}
      <div className="row">
        <div className="col-sm-12">
          <div>
            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
              <h5 className="d-flex align-items-center mb-0">
                Invoices
                <span className="badge bg-soft-dark ms-2 text-dark fs-12">
                  2000 Invoices
                </span>
              </h5>
              <Link
                to={all_routes.addInvoice}
                className="btn btn-md btn-primary d-flex align-items-center"
              >
                <i className="ti ti-circle-plus me-2" />
                Add Invoices
              </Link>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive table-nowrap">
                <table className="table border">
                  <thead className="thead-light">
                    <tr>
                      <th>
                        <div className="form-check form-check-md">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="select-all"
                          />
                        </div>
                      </th>
                      <th>Invoice</th>
                      <th>Name</th>
                      <th>Created On</th>
                      <th>Total</th>
                      <th>Amount Due</th>
                      <th>Due Date</th>
                      <th>Status</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.invoiceDetails} className="tb-data">
                          INV-1454
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.invoiceDetails}
                            className="avatar avatar-lg me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/users/user-01.jpg"
                              className="rounded-circle"
                              alt="user"
                            />
                          </Link>
                          <div>
                            <h6 className="fw-medium mb-1 fs-14">
                              <Link to={all_routes.invoiceDetails}>Anthony Lewis</Link>
                            </h6>
                            <span className="fs-12">anthony@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td>14 Jan 2024, 04:27 AM </td>
                      <td>$300</td>
                      <td>$0</td>
                      <td>14 Jan 2024, 04:27 AM</td>
                      <td>
                        <span className="badge badge-soft-success d-inline-flex align-items-center">
                          <i className="ti ti-point-filled me-1" />
                          Paid
                        </span>
                      </td>
                      <td>
                        <div className="action-icon d-inline-flex">
                          <Link to={all_routes.invoiceDetails} className="me-2">
                            <i className="ti ti-eye" />
                          </Link>
                          <Link to={all_routes.editInvoices} className="me-2">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#delete_modal"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.invoiceDetails} className="tb-data">
                          INV-6571
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.invoiceDetails}
                            className="avatar avatar-lg me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/users/user-09.jpg"
                              className="rounded-circle"
                              alt="user"
                            />
                          </Link>
                          <div>
                            <h6 className="fw-medium mb-1 fs-14">
                              <Link to={all_routes.invoiceDetails}>
                                Brian Villalobos
                              </Link>
                            </h6>
                            <span className="fs-12">brian@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td>21 Jan 2024, 03:19 AM</td>
                      <td>$547</td>
                      <td>$200</td>
                      <td>21 Jan 2024, 03:19 AM</td>
                      <td>
                        <span className="badge badge-soft-danger d-inline-flex align-items-center">
                          <i className="ti ti-point-filled me-1" />
                          Overdue
                        </span>
                      </td>
                      <td>
                        <div className="action-icon d-inline-flex">
                          <Link to={all_routes.invoiceDetails} className="me-2">
                            <i className="ti ti-eye" />
                          </Link>
                          <Link to={all_routes.editInvoices} className="me-2">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#delete_modal"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.invoiceDetails} className="tb-data">
                          INV-2245
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.invoiceDetails}
                            className="avatar avatar-lg me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/users/user-01.jpg"
                              className="rounded-circle"
                              alt="user"
                            />
                          </Link>
                          <div>
                            <h6 className="fw-medium mb-1 fs-14">
                              <Link to={all_routes.invoiceDetails}>Harvey Smith</Link>
                            </h6>
                            <span className="fs-12">harvey@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td>20 Feb 2024, 12:15 PM</td>
                      <td>$325</td>
                      <td>$65</td>
                      <td>20 Feb 2024, 12:15 PM</td>
                      <td>
                        <span className="badge badge-soft-primary d-inline-flex align-items-center">
                          <i className="ti ti-point-filled me-1" />
                          Pending
                        </span>
                      </td>
                      <td>
                        <div className="action-icon d-inline-flex">
                          <Link to={all_routes.invoiceDetails} className="me-2">
                            <i className="ti ti-eye" />
                          </Link>
                          <Link to={all_routes.editInvoices} className="me-2">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#delete_modal"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.invoiceDetails} className="tb-data">
                          INV-1456
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.invoiceDetails}
                            className="avatar avatar-lg me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/users/user-02.jpg"
                              className="rounded-circle"
                              alt="user"
                            />
                          </Link>
                          <div>
                            <h6 className="fw-medium mb-1 fs-14">
                              <Link to={all_routes.invoiceDetails}>Stephan Peralt</Link>
                            </h6>
                            <span className="fs-12">peral@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td>15 Mar 2024, 12:11 AM</td>
                      <td>$471</td>
                      <td>$145</td>
                      <td>15 Mar 2024, 12:11 AM</td>
                      <td>
                        <span className="badge badge-soft-primary d-inline-flex align-items-center">
                          <i className="ti ti-point-filled me-1" />
                          Pending
                        </span>
                      </td>
                      <td>
                        <div className="action-icon d-inline-flex">
                          <Link to={all_routes.invoiceDetails} className="me-2">
                            <i className="ti ti-eye" />
                          </Link>
                          <Link to={all_routes.editInvoices} className="me-2">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.invoiceDetails} className="tb-data">
                          INV-0045
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.invoiceDetails}
                            className="avatar avatar-lg me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/users/user-03.jpg"
                              className="rounded-circle"
                              alt="user"
                            />
                          </Link>
                          <div>
                            <h6 className="fw-medium mb-1 fs-14">
                              <Link to={all_routes.invoiceDetails}>Doglas Martini</Link>
                            </h6>
                            <span className="fs-12">martniwr@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td>12 Apr 2024, 05:48 PM</td>
                      <td>$147</td>
                      <td>$32</td>
                      <td>12 Apr 2024, 05:48 PM</td>
                      <td>
                        <span className="badge badge-soft-danger d-inline-flex align-items-center">
                          <i className="ti ti-point-filled me-1" />
                          Overdue
                        </span>
                      </td>
                      <td>
                        <div className="action-icon d-inline-flex">
                          <Link to={all_routes.invoiceDetails} className="me-2">
                            <i className="ti ti-eye" />
                          </Link>
                          <Link to={all_routes.editInvoices} className="me-2">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#delete_modal"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.invoiceDetails} className="tb-data">
                          INV-6244
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.invoiceDetails}
                            className="avatar avatar-lg me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/users/user-02.jpg"
                              className="rounded-circle"
                              alt="user"
                            />
                          </Link>
                          <div>
                            <h6 className="fw-medium mb-1 fs-14">
                              <Link to={all_routes.invoiceDetails}>Linda Ray</Link>
                            </h6>
                            <span className="fs-12">ray456@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td>20 Apr 2024, 06:11 PM</td>
                      <td>$654</td>
                      <td>$140</td>
                      <td>20 Apr 2024, 06:11 PM</td>
                      <td>
                        <span className="badge badge-soft-warning d-inline-flex align-items-center">
                          <i className="ti ti-point-filled me-1" />
                          Draft
                        </span>
                      </td>
                      <td>
                        <div className="action-icon d-inline-flex">
                          <Link to={all_routes.invoiceDetails} className="me-2">
                            <i className="ti ti-eye" />
                          </Link>
                          <Link to={all_routes.editInvoices} className="me-2">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#delete_modal"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.invoiceDetails} className="tb-data">
                          INV-9565
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.invoiceDetails}
                            className="avatar avatar-lg me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/users/user-06.jpg"
                              className="rounded-circle"
                              alt="user"
                            />
                          </Link>
                          <div>
                            <h6 className="fw-medium mb-1 fs-14">
                              <Link to={all_routes.invoiceDetails}>Elliot Murray</Link>
                            </h6>
                            <span className="fs-12">murray@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td>14 Jan 2024, 04:27 AM </td>
                      <td>$300</td>
                      <td>$0</td>
                      <td>14 Jan 2024, 04:27 AM</td>
                      <td>
                        <span className="badge badge-soft-success d-inline-flex align-items-center">
                          <i className="ti ti-point-filled me-1" />
                          Paid
                        </span>
                      </td>
                      <td>
                        <div className="action-icon d-inline-flex">
                          <Link to={all_routes.invoiceDetails} className="me-2">
                            <i className="ti ti-eye" />
                          </Link>
                          <Link to={all_routes.editInvoices} className="me-2">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#delete_modal"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.invoiceDetails} className="tb-data">
                          INV-6874
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.invoiceDetails}
                            className="avatar avatar-lg me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/users/user-07.jpg"
                              className="rounded-circle"
                              alt="user"
                            />
                          </Link>
                          <div>
                            <h6 className="fw-medium mb-1 fs-14">
                              <Link to={all_routes.invoiceDetails}>Rebecca Smtih</Link>
                            </h6>
                            <span className="fs-12">smtih@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td>02 Sep 2024, 09:21 PM</td>
                      <td>$654</td>
                      <td>$65</td>
                      <td>02 Sep 2024, 09:21 PM</td>
                      <td>
                        <span className="badge badge-soft-success d-inline-flex align-items-center">
                          <i className="ti ti-point-filled me-1" />
                          Paid
                        </span>
                      </td>
                      <td>
                        <div className="action-icon d-inline-flex">
                          <Link to={all_routes.invoiceDetails} className="me-2">
                            <i className="ti ti-eye" />
                          </Link>
                          <Link to={all_routes.editInvoices} className="me-2">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#delete_modal"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.invoiceDetails} className="tb-data">
                          INV-1454
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.invoiceDetails}
                            className="avatar avatar-lg me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/users/user-08.jpg"
                              className="rounded-circle"
                              alt="user"
                            />
                          </Link>
                          <div>
                            <h6 className="fw-medium mb-1 fs-14">
                              <Link to={all_routes.invoiceDetails}>Anthony Lewis</Link>
                            </h6>
                            <span className="fs-12">anthony@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td>14 Jan 2024, 04:27 AM </td>
                      <td>$300</td>
                      <td>$0</td>
                      <td>14 Jan 2024, 04:27 AM</td>
                      <td>
                        <span className="badge badge-soft-warning d-inline-flex align-items-center">
                          <i className="ti ti-point-filled me-1" />
                          Draft
                        </span>
                      </td>
                      <td>
                        <div className="action-icon d-inline-flex">
                          <Link to={all_routes.invoiceDetails} className="me-2">
                            <i className="ti ti-eye" />
                          </Link>
                          <Link to={all_routes.editInvoices} className="me-2">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#delete_modal"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.invoiceDetails} className="tb-data">
                          INV-6587
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.invoiceDetails}
                            className="avatar avatar-lg me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/users/user-09.jpg"
                              className="rounded-circle"
                              alt="user"
                            />
                          </Link>
                          <div>
                            <h6 className="fw-medium mb-1 fs-14">
                              <Link to={all_routes.invoiceDetails}>Connie Waters</Link>
                            </h6>
                            <span className="fs-12">connie@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td>15 Nov 2024, 12:44 PM</td>
                      <td>$987</td>
                      <td>$47</td>
                      <td>15 Nov 2024, 12:44 PM</td>
                      <td>
                        <span className="badge badge-soft-primary d-inline-flex align-items-center">
                          <i className="ti ti-point-filled me-1" />
                          Pending
                        </span>
                      </td>
                      <td>
                        <div className="action-icon d-inline-flex">
                          <Link to={all_routes.invoiceDetails} className="me-2">
                            <i className="ti ti-eye" />
                          </Link>
                          <Link to={all_routes.editInvoices} className="me-2">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#delete_modal"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                      </td>
                      <td>
                        <Link to={all_routes.invoiceDetails} className="tb-data">
                          INV-5879
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.invoiceDetails}
                            className="avatar avatar-lg me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/users/user-10.jpg"
                              className="rounded-circle"
                              alt="user"
                            />
                          </Link>
                          <div>
                            <h6 className="fw-medium mb-1 fs-14">
                              <Link to={all_routes.invoiceDetails}>Lori Broaddus</Link>
                            </h6>
                            <span className="fs-12">broaddus@example.com</span>
                          </div>
                        </div>
                      </td>
                      <td>10 Dec 2024, 11:23 PM</td>
                      <td>$365</td>
                      <td>$21</td>
                      <td>10 Dec 2024, 11:23 PM</td>
                      <td>
                        <span className="badge badge-soft-danger d-inline-flex align-items-center">
                          <i className="ti ti-point-filled me-1" />
                          Overdue
                        </span>
                      </td>
                      <td>
                        <div className="action-icon d-inline-flex">
                          <Link to={all_routes.invoiceDetails} className="me-2">
                            <i className="ti ti-eye" />
                          </Link>
                          <Link to={all_routes.editInvoices} className="me-2">
                            <i className="ti ti-edit" />
                          </Link>
                          <Link
                            to="#delete_modal"
                            className=""
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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


      {/* Start Delete Modal  */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <div className="mb-3">
                <ImageWithBasePath
                  src="assets/img/icons/delete.svg"
                  alt="img"
                />
              </div>
              <h6 className="mb-1">Delete Company</h6>
              <p className="mb-3">Are you sure, you want to delete company?</p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-outline-white me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link to={all_routes.invoice} className="btn btn-primary">
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Delete Modal  */}
    </>
  );
};

export default Invoice;
