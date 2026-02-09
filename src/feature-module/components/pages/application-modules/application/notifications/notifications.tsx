import { Link } from "react-router";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import Modals from "./modals/modals";
import PredefinedDatePicker from "../../../../../../core/common/datePicker";
import PageHeader from "../../../../../../core/common/page-header/PageHeader";

const Notifications = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Start Page Header */}
          <PageHeader title="Notification" className="mb-3 pb-3 border-bottom" />
          {/* End Page Header */}
          <div className="row">
            {/* Notifications */}
            <div className="col-xl-12">
              <div className="notification-header">
                <div className="form-sort form-wrap">
                  <div className="d-flex right-content align-items-center flex-wrap">
                    <div className=" position-relative">
                    <span className="input-icon-addon fs-14 text-dark">
                      <i className="ti ti-calendar" />
                    </span>
                    <PredefinedDatePicker />
                  </div>
                  </div>
                </div>
                <ul>
                  <li>
                    <Link to="#" className="btn">
                      <i className="feather-check" /> Mark all as read
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="btn btn-delete">
                      <i className="feather-trash-2" /> Delete all
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="notication-list">
                {/* Notification 1 */}
                <div className="notication-item bg-white">
                  <div className="row align-items-center">
                    <div className="col-lg-9">
                      <div className="notication-content">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/doctors/doctor-01.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </span>
                        <div className="notication-info">
                          <div>
                            <p className="text-dark fw-semibold me-0">
                              Dr. Smith
                            </p>
                            <p className="notify-time">
                              updated the surgery schedule.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="d-lg-flex align-items-center justify-content-between">
                        <div className="noti-btn">
                          <Link to="#" className="btn m-0">
                            Decline
                          </Link>
                          <Link to="#" className="btn btn-primary m-0">
                            Accept
                          </Link>
                        </div>
                        <p className="m-0"> 2 mins ago </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Notification 2 */}
                <div className="notication-item bg-white">
                  <div className="row align-items-center">
                    <div className="col-lg-9">
                      <div className="notication-content">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/doctors/doctor-06.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </span>
                        <div className="notication-info">
                          <div>
                            <p className="text-dark fw-semibold me-0">
                              Dr. Patel
                            </p>
                            <p className="notify-time">
                              completed a follow-up report for patient Emily.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="d-lg-flex align-items-center justify-content-end">
                        <div className="noti-btn me-3">
                          <Link
                            to="#"
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_notification"
                          >
                            Delete
                          </Link>
                        </div>
                        <p className="m-0"> 2 mins ago </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Notification 3 */}
                <div className="notication-item bg-white">
                  <div className="row align-items-center">
                    <div className="col-lg-9">
                      <div className="notication-content">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/doctors/doctor-02.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </span>
                        <div className="notication-info">
                          <div>
                            <p className="text-dark fw-semibold me-0">Emily</p>
                            <p className="notify-time">
                              booked an appointment with Dr. Patel for April 15
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="d-lg-flex align-items-center justify-content-end">
                        <div className="noti-btn me-3">
                          <Link
                            to="#"
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_notification"
                          >
                            Delete
                          </Link>
                        </div>
                        <p className="m-0"> 2 mins ago </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Notification 4 */}
                <div className="notication-item bg-white">
                  <div className="row align-items-center">
                    <div className="col-lg-9">
                      <div className="notication-content">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/doctors/doctor-07.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </span>
                        <div className="notication-info">
                          <div>
                            <p className="text-dark fw-semibold me-0">Amelia</p>
                            <p className="notify-time">
                              completed the pre-visit health questionnaire.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="d-lg-flex align-items-center justify-content-end">
                        <div className="noti-btn me-3">
                          <Link
                            to="#"
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_notification"
                          >
                            Delete
                          </Link>
                        </div>
                        <p className="m-0"> 2 mins ago </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Notification 5 */}
                <div className="notication-item bg-white">
                  <div className="row align-items-center">
                    <div className="col-lg-9">
                      <div className="notication-content">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/users/user-05.jpg"
                            className="img-fluid"
                            alt="img"
                          />
                        </span>
                        <div className="notication-info">
                          <div>
                            <p className="text-dark fw-semibold me-0">Wick</p>
                            <p className="notify-time">
                              booked an appointment with Dr. smith for April 12
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="d-lg-flex align-items-center justify-content-end">
                        <div className="noti-btn me-3">
                          <Link
                            to="#"
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_notification"
                          >
                            Delete
                          </Link>
                        </div>
                        <p className="m-0"> 2 mins ago </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Notifications */}
          </div>
        </div>
        {/* End Content */}
        {/* Footer Start */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©{" "}
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
      <Modals />
    </>
  );
};

export default Notifications;
