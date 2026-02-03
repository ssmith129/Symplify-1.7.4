import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";

const DoctorDetails = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content pb-0">
          {/* Start Page Header */}
          <div className="mb-3">
            <h6 className="fw-semibold fs-14 mb-0">
              <Link to={all_routes.doctors}>
                <i className="ti ti-chevron-left me-1" />
                Doctors
              </Link>
            </h6>
          </div>
          {/* End Page Header */}
          <div className="card">
            <div className="card-body d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <div className="d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                <div className="me-3 doctor-profile-img">
                  <Link to={all_routes.doctordetails}>
                    <ImageWithBasePath
                      src="assets/img/doctors/doctor-06.jpg"
                      className="rounded"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="flex-fill">
                  <div className="d-flex align-items-center mb-1">
                    <h6 className="mb-0 fw-semibold">Dr. John Smith</h6>
                    <span className="badge border bg-white text-dark fw-medium ms-2">
                      <i className="ti ti-point-filled me-1 text-info" />
                      Cardiology
                    </span>
                  </div>
                  <span className="d-block mb-3 fs-13">
                    MBBS, M.D, Cardiology
                  </span>
                  <div className="d-flex align-items-center">
                    <p className="mb-0 fs-13">
                      <i className="ti ti-building-hospital me-1" />
                      Clinic : Downtown Medical Clinic
                    </p>
                    <span className="badge badge-soft-success fw-medium ms-2">
                      <i className="ti ti-point-filled me-1 text-success" />
                      Available
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <p className="mb-2">Consultation Charge</p>
                <h6 className="fs-18 fw-bold mb-3">
                  $499
                  <span className="fw-normal text-body fs-14"> / 30 Min</span>
                </h6>
                <Link
                  to={all_routes.appointmentCalendar}
                  className="btn btn-primary"
                >
                  <i className="ti ti-calendar-event me-1" />
                  Book Apppointment
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">Availability</h5>
                    <ul className="nav nav-tabs nav-bordered nav-border-bottom mb-3">
                      <li className="nav-item flex-fill">
                        <Link
                          className="nav-link text-center active fw-semibold"
                          to="#"
                          data-bs-toggle="tab"
                          data-bs-target="#available-tab-1"
                        >
                          Monday
                        </Link>
                      </li>
                      <li className="nav-item flex-fill">
                        <Link
                          className="nav-link text-center fw-semibold"
                          to="#"
                          data-bs-toggle="tab"
                          data-bs-target="#available-tab-2"
                        >
                          Tuesday
                        </Link>
                      </li>
                      <li className="nav-item flex-fill">
                        <Link
                          className="nav-link text-center fw-semibold"
                          to="#"
                          data-bs-toggle="tab"
                          data-bs-target="#available-tab-3"
                        >
                          Wednesday
                        </Link>
                      </li>
                      <li className="nav-item flex-fill">
                        <Link
                          className="nav-link text-center fw-semibold"
                          to="#"
                          data-bs-toggle="tab"
                          data-bs-target="#available-tab-4"
                        >
                          Thursday
                        </Link>
                      </li>
                      <li className="nav-item flex-fill">
                        <Link
                          className="nav-link text-center fw-semibold"
                          to="#"
                          data-bs-toggle="tab"
                          data-bs-target="#available-tab-5"
                        >
                          Friday
                        </Link>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade active show"
                        id="available-tab-1"
                        role="tabpanel"
                      >
                        <div className="d-flex align-items-center flex-wrap gap-2">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            11:30 AM - 12:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            12:30 PM - 01:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            02:30 PM - 03:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            04:30 PM - 05:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            06:00 PM - 07:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            07:00 PM - 08:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            09:00 PM - 11:00 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            11:00 PM - 11:30 PM
                          </Link>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="available-tab-2"
                        role="tabpanel"
                      >
                        <div className="d-flex align-items-center flex-wrap gap-2">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            11:30 AM - 12:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            12:30 PM - 01:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            02:30 PM - 03:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            04:30 PM - 05:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            06:00 PM - 07:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            07:00 PM - 08:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            09:00 PM - 11:00 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            11:00 PM - 11:30 PM
                          </Link>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="available-tab-3"
                        role="tabpanel"
                      >
                        <div className="d-flex align-items-center flex-wrap gap-2">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            11:30 AM - 12:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            12:30 PM - 01:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            02:30 PM - 03:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            04:30 PM - 05:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            06:00 PM - 07:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            07:00 PM - 08:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            09:00 PM - 11:00 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            11:00 PM - 11:30 PM
                          </Link>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="available-tab-4"
                        role="tabpanel"
                      >
                        <div className="d-flex align-items-center flex-wrap gap-2">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            11:30 AM - 12:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            12:30 PM - 01:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            02:30 PM - 03:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            04:30 PM - 05:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            06:00 PM - 07:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            07:00 PM - 08:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            09:00 PM - 11:00 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            11:00 PM - 11:30 PM
                          </Link>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="available-tab-5"
                        role="tabpanel"
                      >
                        <div className="d-flex align-items-center flex-wrap gap-2">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            11:30 AM - 12:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            12:30 PM - 01:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            02:30 PM - 03:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            04:30 PM - 05:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            06:00 PM - 07:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            07:00 PM - 08:30 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            09:00 PM - 11:00 PM
                          </Link>
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                          >
                            11:00 PM - 11:30 PM
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">Short Bio</h5>
                    <p>
                      Dr. John Smith has been practicing family medicine for
                      over 10 years. She has extensive experience in managing
                      chronic illnesses, preventive care, and treating a wide
                      range of medical conditions for patients of all ages.
                    </p>
                    <div>
                      <div className="more-menu">
                        <p>
                          Dr. Smith is dedicated to providing patient-centered
                          care and emphasizes building long-term relationships
                          with her patients.
                        </p>
                      </div>
                      <div className="view-all mt-2">
                        <Link
                          to="#"
                          className="viewall-button text-primary fw-medium"
                        >
                          <span>See More</span>
                          <i className="ti ti-chevron-down fs-10 ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">Education Information</h5>
                    <ul className="activity-feed rounded">
                      <li className="feed-item timeline-item">
                        <h6 className="fw-bold mb-2">
                          Boston Medicine Institutuion - MD
                        </h6>
                        <p>25 May 1990 - 29 Jan 1992</p>
                      </li>
                      <li className="feed-item timeline-item">
                        <h6 className="fw-bold mb-2">
                          Harvard Medical School, Boston - MBBS
                        </h6>
                        <p>25 May 1985 - 29 Jan 1990</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">Awards &amp; Recognition</h5>
                    <div className="mb-3">
                      <div className="d-flex align-items-center mb-2">
                        <span className="me-2">
                          <i className="ti ti-award" />
                        </span>
                        <h6 className="mb-0 fw-bold">
                          Top Doctor Award (2023)
                        </h6>
                      </div>
                      <p>
                        Recognized by U.S. News &amp; World Report for
                        outstanding achievements in family medicine.
                      </p>
                    </div>
                    <div>
                      <div className="d-flex align-items-center mb-2">
                        <span className="me-2">
                          <i className="ti ti-award" />
                        </span>
                        <h6 className="mb-0 fw-bold">
                          Patient Choice Award (2022)
                        </h6>
                      </div>
                      <p>
                        Awarded by Vitals.com for consistently receiving high
                        patient ratings in satisfaction and care.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="fw-bold mb-3">Certifications</h5>
                    <div className="mb-3">
                      <div className="d-flex align-items-center mb-2">
                        <span className="me-2">
                          <i className="ti ti-award" />
                        </span>
                        <h6 className="mb-0 fw-bold">
                          Certification by the American Board of Family Medicine
                          (ABFM), 2015
                        </h6>
                      </div>
                      <p>
                        Demonstrates mastery of comprehensive, ongoing care for
                        individuals and families, across all ages and genders.
                      </p>
                    </div>
                    <div>
                      <div className="d-flex align-items-center mb-2">
                        <span className="me-2">
                          <i className="ti ti-award" />
                        </span>
                        <h6 className="mb-0 fw-bold">
                          American Heart Association, 2024
                        </h6>
                      </div>
                      <p>
                        Certification in performing life-saving techniques,
                        including CPR and emergency cardiac care for adults and
                        children.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 theiaStickySidebar">
              <div className="card">
                <div className="card-body">
                  <h6 className="fw-bold mb-3">About</h6>
                  <div>
                    <div className="d-flex align-items-center mb-3">
                      <span className="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2">
                        <i className="ti ti-file" />
                      </span>
                      <div>
                        <h6 className="fw-semibold fs-13 mb-1">
                          Medical Liscence Number
                        </h6>
                        <p>ML566659898</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <span className="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2">
                        <i className="ti ti-phone" />
                      </span>
                      <div>
                        <h6 className="fw-semibold fs-13 mb-1">Phone Number</h6>
                        <p>+1 54546 45648</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <span className="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2">
                        <i className="ti ti-mail" />
                      </span>
                      <div>
                        <h6 className="fw-semibold fs-13 mb-1">
                          Email Address
                        </h6>
                        <p>john@example.com</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <span className="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2">
                        <i className="ti ti-map-pin-check" />
                      </span>
                      <div>
                        <h6 className="fw-semibold fs-13 mb-1">Location</h6>
                        <p>4150 Hiney Road, Las Vegas, NV 89109</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <span className="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2">
                        <i className="ti ti-calendar-event" />
                      </span>
                      <div>
                        <h6 className="fw-semibold fs-13 mb-1">DOB</h6>
                        <p>25 Jan 1990</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <span className="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2">
                        <i className="ti ti-droplet" />
                      </span>
                      <div>
                        <h6 className="fw-semibold fs-13 mb-1">Blood Group</h6>
                        <p>O +ve</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <span className="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2">
                        <i className="ti ti-user-check" />
                      </span>
                      <div>
                        <h6 className="fw-semibold fs-13 mb-1">
                          Year of Experience
                        </h6>
                        <p>15+ Years</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2">
                        <i className="ti ti-gender-male" />
                      </span>
                      <div>
                        <h6 className="fw-semibold fs-13 mb-1">Gender</h6>
                        <p>Male</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default DoctorDetails;
