import ImageWithBasePath from "../../../../core/imageWithBasePath";
import { Link } from "react-router";
import DefaultEditor from "react-simple-wysiwyg";
import { all_routes } from "../../../routes/all_routes";

const TicketDetails = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom">
            <div className="d-flex align-items-center">
              <h6 className="fw-bold mb-0 me-2">
                <Link to={all_routes.tickets}>
                  <i className="ti ti-chevron-left me-1" />
                  Ticket
                </Link>
              </h6>
            </div>
          </div>
          {/* End Page Header */}
          <div className="card mb-3">
            <div className="card-header bg-white bg-light">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                <div className="">
                  <h6 className="fs-16 mb-3">
                    #TK001 -
                    <span className="text-gray-5">New Support Ticket</span>
                  </h6>
                  <div className="d-flex align-items-center">
                    <span className="badge badge-soft-success me-3">
                      <i className="ti ti-point-filled me-1" />
                      High Priority
                    </span>
                    <span className="badge bg-danger me-3">
                      Billing Department
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-lg bg-light  d-flex align-items-center justify-content-start fs-13 fw-normal border"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="true"
                    >
                      <i className="ti ti-shield-half me-1" /> Resolved
                    </Link>
                    <div className="dropdown-menu shadow-lg w-100 dropdown-info">
                      <ul className="mb-3">
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center">
                            Open
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center">
                            On Hold
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center">
                            Reopened
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center">
                            Resolved
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end card header */}
            <div className="card-body">
              <div className="mb-3 border-bottom pb-3">
                <div className="d-flex gap-2">
                  <ImageWithBasePath
                    src="assets/img/users/user-08.jpg"
                    className="avatar avatar-md rounded-circle me-2"
                    alt="img"
                  />
                  <div>
                    <div className="mb-3">
                      <h6 className="fs-14 mb-1">Created By</h6>
                      <p className="fs-13">Michael Carter</p>
                    </div>
                    <p>Hi,</p>
                    <p>
                      I tried to make a payment through the portal, but it
                      failed multiple times. My card was charged, but the system
                      didn’t confirm the payment. Please assist urgently.
                    </p>
                    <p>
                      Every time I try to pay my bill online, it gives an error
                      after entering card details. I'm unsure if the payment
                      went through or if I should retry.I attempted to complete
                      my payment, but the page froze after submission. I haven’t
                      received a confirmation, and I’m worried the transaction
                      might have failed or double-charged.
                    </p>
                    <div>
                      <h6 className="fw-bold mb-2">Attachments</h6>
                      <div className="d-flex align-items-center flex-wrap gap-2">
                        <div className="d-flex align-items-center justify-content-between bg-light border rounded p-2 me-3">
                          <div className="d-flex align-items-center me-3">
                            <ImageWithBasePath
                              src="assets/img/icons/pdf.svg"
                              alt="img"
                              className="avatar avatar-md me-2"
                            />
                            <div>
                              <Link to="#" className="fs-13">
                                Report1.pdf
                              </Link>
                              <span className="d-block fs-12">45 KB</span>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-light btn-md rounded-circle p-1"
                            >
                              <i className="ti ti-download" />
                            </Link>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between bg-light border rounded p-2">
                          <div className="d-flex align-items-center me-3">
                            <ImageWithBasePath
                              src="assets/img/media/img-03.jpg"
                              alt="img"
                              className="avatar avatar-md me-2"
                            />
                            <div>
                              <Link to="#" className="fs-13">
                                Image2.jpg
                              </Link>
                              <span className="d-block fs-12">38 KB</span>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="btn btn-light btn-md rounded-circle p-1"
                            >
                              <i className="ti ti-download" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-3 mb-3 border-bottom">
                <div className="d-flex align-items-center mb-3">
                  <ImageWithBasePath
                    src="assets/img/users/user-08.jpg"
                    className="avatar avatar-md rounded-circle me-2"
                    alt="img"
                  />
                  <div className="d-flex align-items-center">
                    <p className="text-dark fw-medium mb-0 me-2">Rely To :</p>
                    <span className="badge bg-soft-info text-info">
                      Martin Lisa (lisa@example.com)
                    </span>
                  </div>
                </div>
                <DefaultEditor />
              </div>
              <div className="d-flex align-items-center justify-content-end">
                <Link to="#" className="btn btn-light me-2">
                  Cancel
                </Link>
                <Link to="#" className="btn btn-primary">
                  Send Reply
                </Link>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
        {/* End Content */}
      </div>
      {/* ========================
			End Page Content
		========================= */}
    </>
  );
};

export default TicketDetails;
