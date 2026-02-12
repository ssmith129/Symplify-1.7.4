import { Link } from "react-router";
import Modals from "./modals/modals";

const Faq = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-center gap-2 pb-3 mb-3 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">FAQ</h4>
            </div>
            <div className="text-end">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add_faq"
              >
                <i className="ti ti-plus me-1" />
                Add New FAQ
              </Link>
            </div>
          </div>
          {/* End Page Header */}
          {/* Table List */}
          <div className="table-responsive border bg-white">
            <table className="table table-nowrap">
              <thead>
                <tr>
                  <th className="text-dark">Questions</th>
                  <th className="text-dark">Answer</th>
                  <th className="text-dark">Category</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>What services does your clinic offer?</td>
                  <td>
                    <p className="truncate-text">
                      We provide a comprehensive range of services, including
                      preventive care, diagnostics, treatment for acute and
                      chronic conditions, vaccinations, and wellness counseling.
                    </p>
                  </td>
                  <td>General</td>
                  <td className="action-item">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      className="btn p-1 btn-white border"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_faq"
                        >
                          Edit
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_faq"
                        >
                          Delete
                        </Link>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Do you accept walk-in patients?</td>
                  <td>
                    <p className="truncate-text">
                      Yes, we accept walk-in patients for urgent care needs.
                      However, scheduling an appointment is recommended to
                      reduce waiting times.
                    </p>
                  </td>
                  <td>General</td>
                  <td className="action-item">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      className="btn p-1 btn-white border"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_faq"
                        >
                          Edit
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_faq"
                        >
                          Delete
                        </Link>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>What should I bring to my appointment?</td>
                  <td>
                    <p className="truncate-text">
                      Please bring a valid ID, your insurance card, a list of
                      current medications, and any relevant medical records.
                    </p>
                  </td>
                  <td>General</td>
                  <td className="action-item">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      className="btn p-1 btn-white border"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_faq"
                        >
                          Edit
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_faq"
                        >
                          Delete
                        </Link>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td> How do I cancel or reschedule my appointment?</td>
                  <td>
                    <p className="truncate-text">
                      To cancel or reschedule, please call our office at least
                      24 hours in advance to avoid any cancellation fees.
                    </p>
                  </td>
                  <td>General</td>
                  <td className="action-item">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      className="btn p-1 btn-white border"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_faq"
                        >
                          Edit
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_faq"
                        >
                          Delete
                        </Link>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>What medical services do you provide?</td>
                  <td>
                    <p className="truncate-text">
                      We offer a range of services including preventive care,
                      chronic disease management, vaccinations, pediatric care,
                      and minor surgical procedures.
                    </p>
                  </td>
                  <td>General</td>
                  <td className="action-item">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      className="btn p-1 btn-white border"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_faq"
                        >
                          Edit
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_faq"
                        >
                          Delete
                        </Link>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Do you offer telemedicine consultations?</td>
                  <td>
                    <p className="truncate-text">
                      Yes, we provide telemedicine services for certain
                      non-emergency conditions. Please contact our office to
                      determine if your condition is suitable for a virtual
                      visit.
                    </p>
                  </td>
                  <td>Prescriptions</td>
                  <td className="action-item">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      className="btn p-1 btn-white border"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_faq"
                        >
                          Edit
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_faq"
                        >
                          Delete
                        </Link>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Are laboratory services available on-site?</td>
                  <td>
                    <p className="truncate-text">
                      Yes, we have an on-site laboratory for blood tests,
                      urinalysis, and other diagnostic services.
                    </p>
                  </td>
                  <td>Treatment</td>
                  <td className="action-item">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      className="btn p-1 btn-white border"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_faq"
                        >
                          Edit
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_faq"
                        >
                          Delete
                        </Link>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Which insurance plans do you accept?</td>
                  <td>
                    <p className="truncate-text">
                      We accept most major insurance plans. Please visit our
                      website or call our billing department to confirm if we
                      accept your specific plan.
                    </p>
                  </td>
                  <td>Clinic Policies</td>
                  <td className="action-item">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      className="btn p-1 btn-white border"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_faq"
                        >
                          Edit
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_faq"
                        >
                          Delete
                        </Link>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>How do I access the patient portal?</td>
                  <td>
                    <p className="truncate-text">
                      You can access the patient portal by visiting our website
                      and clicking on the "Patient Portal" link. First-time
                      users will need to register using their email address and
                      a provided access code.
                    </p>
                  </td>
                  <td>Wellness</td>
                  <td className="action-item">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      className="btn p-1 btn-white border"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_faq"
                        >
                          Edit
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_faq"
                        >
                          Delete
                        </Link>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>What should I do in case of a medical emergency?</td>
                  <td>
                    <p className="truncate-text">
                      If you are experiencing a life-threatening emergency, call
                      911 or go to the nearest emergency room immediately.
                    </p>
                  </td>
                  <td>Wellness</td>
                  <td className="action-item">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      className="btn p-1 btn-white border"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_faq"
                        >
                          Edit
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="dropdown-item d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_faq"
                        >
                          Delete
                        </Link>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /Table List */}
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
      <Modals />
    </>
  );
};

export default Faq;
