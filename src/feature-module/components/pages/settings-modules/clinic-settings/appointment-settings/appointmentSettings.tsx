import { Link } from "react-router";
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar";
import {
  days,
  Email_Reminder,
  Reminder,
  SMS_Reminder,
  Welcome_Email,
} from "../../../../../../core/common/selectOption";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";

const AppointmentSettings = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content" id="profilePage">
          {/* Page Header */}
          <div className="mb-3 border-bottom pb-3">
            <h4 className="fw-bold mb-0">Settings</h4>
          </div>
          {/* End Page Header */}
          <div className="card mb-0">
            <div className="card-body p-0">
              <div className="settings-wrapper d-flex">
                {/* Start Settings Sidebar */}
                <SettingsSidebar />
                {/* End Settings Sidebar */}
                <div className="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
                  <div className="card-header border-bottom px-0 mx-3">
                    <div className="d-flex align-items-center">
                      <h5 className="fw-bold">Appointment Reminders</h5>
                    </div>
                  </div>
                  <div
                    className="card-body px-0 mx-3 break-hours-section"
                    id="break-hours-section"
                  >
                    {/* start row */}
                    <div className="row row-gap-2 align-items-center justify-content-between pb-3 mb-3 border-bottom">
                      <div className="col-lg-11">
                        <h6 className="fs-14 fw-medium">
                          Automatically notify clients about upcoming
                          appointments.
                        </h6>
                      </div>
                      {/* end col */}
                      <div className="col-lg-1">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input text-end me-1"
                            type="checkbox"
                            defaultChecked
                          />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-lg-11">
                        <h6 className="fs-14 fw-medium">
                          Reminders for weekend appointments go out on Friday.
                        </h6>
                      </div>
                      {/* end col */}
                      <div className="col-lg-1">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input text-end me-1"
                            type="checkbox"
                          />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-lg-11">
                        <h6 className="fs-14 fw-medium">
                          Appointments auto-cancel if clients reply 'No' or
                          'Cancel' to reminders.
                        </h6>
                      </div>
                      {/* end col */}
                      <div className="col-lg-1">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input text-end me-1"
                            type="checkbox"
                            defaultChecked
                          />
                        </div>
                      </div>
                      {/* end col */}
                    </div>
                    {/* end row */}
                    <div>
                      <h5 className="fw-bold mb-3">Automatic Reminders</h5>
                      <div className="reminder-list mb-3 border-bottom">
                        <div className="row d-flex align-items-center mb-3 reminder-list-item">
                          <div className="col-md-2">
                            <h6 className="fs-14 fw-medium mb-0">Reminder </h6>
                          </div>
                          <div className="col-md-10 flex-grow-1">
                            <div className="d-flex align-items-center justify-content-end">
                              <div className="me-2">
                                <CommonSelect
                                  options={Reminder}
                                  className="select"
                                  defaultValue={Reminder[0]}
                                />
                              </div>
                              <div className="me-2">
                                <CommonSelect
                                  options={Welcome_Email}
                                  className="select"
                                  defaultValue={Welcome_Email[0]}
                                />
                              </div>
                              <div className="me-2">
                                <CommonSelect
                                  options={days}
                                  className="select"
                                  defaultValue={days[0]}
                                />
                              </div>
                              <span className="me-2">Days Before</span>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="btn btn-white p-2 border rounded-2 me-2"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  className="btn btn-white p-2 border rounded-2 add-reminder"
                                >
                                  <i className="ti ti-plus" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row d-flex align-items-center mb-3 reminder-list-item">
                          <div className="col-md-2">
                            <h6 className="fs-14 fw-medium mb-0">Reminder </h6>
                          </div>
                          <div className="col-md-10 flex-grow-1">
                            <div className="d-flex align-items-center justify-content-end">
                              <div className="me-2">
                                <CommonSelect
                                  options={Reminder}
                                  className="select"
                                  defaultValue={Reminder[0]}
                                />
                              </div>
                              <div className="me-2">
                                <CommonSelect
                                  options={Welcome_Email}
                                  className="select"
                                  defaultValue={Welcome_Email[0]}
                                />
                              </div>
                              <div className="me-2">
                                <CommonSelect
                                  options={days}
                                  className="select"
                                  defaultValue={days[0]}
                                />
                              </div>
                              <span className="me-2">Days Before</span>
                              <div className="d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="btn btn-white p-2 border rounded-2 me-2"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  className="btn btn-white p-2 border rounded-2 remove-reminder"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" pb-3 mb-3 border-bottom">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h5 className="fw-bold mb-0">Manual Reminders</h5>
                        </div>
                        {/* start row */}
                        <div className="row align-items-center row-gap-2 mb-3">
                          <div className="col-lg-6">
                            <p className="text-dark fw-medium mb-0">
                              SMS Reminder Template
                            </p>
                          </div>
                          {/* end col */}
                          <div className="col-lg-6">
                            <div className="d-flex align-items-center gap-3">
                              <CommonSelect
                                options={SMS_Reminder}
                                className="select"
                                defaultValue={SMS_Reminder[0]}
                              />
                              <Link
                                to="#"
                                className="btn btn-white p-2 border rounded-2 me-2"
                              >
                                <i className="ti ti-edit" />
                              </Link>
                            </div>
                          </div>
                          {/* end col */}
                        </div>
                        {/* end row */}
                        {/* start row */}
                        <div className="row align-items-center row-gap-2 mb-3">
                          <div className="col-lg-6">
                            <p className="text-dark fw-medium mb-0">
                              Email Reminder Template
                            </p>
                          </div>
                          {/* end col */}
                          <div className="col-lg-6">
                            <div className="d-flex align-items-center gap-3">
                              <CommonSelect
                                options={Email_Reminder}
                                className="select"
                                defaultValue={Email_Reminder[0]}
                              />
                              <Link
                                to="#"
                                className="btn btn-white p-2 border rounded-2 me-2"
                              >
                                <i className="ti ti-edit" />
                              </Link>
                            </div>
                          </div>
                          {/* end col */}
                        </div>
                        {/* end row */}
                        <div className="border-top pt-3">
                          {/* start row */}
                          <div className="row align-items-center mb-3">
                            <div className="col-9">
                              <p className="mb-0 text-dark fw-medium">
                                Send reminder automatically upon new appointment
                                booking
                              </p>
                            </div>
                            <div className="col-3">
                              <div className="d-flex align-items-center justify-content-end">
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input text-end me-1"
                                    type="checkbox"
                                    defaultChecked
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* start end */}
                          {/* start row */}
                          <div className="row align-items-center row-gap-2">
                            <div className="col-xl-5 col-lg-3">
                              <p className="text-dark fw-medium mb-0">
                                Reminder
                              </p>
                            </div>
                            {/* end col */}
                            <div className="col-xl-7 col-lg-9">
                              <div className="d-flex align-items-center gap-3">
                                <CommonSelect
                                  options={Reminder}
                                  className="select"
                                  defaultValue={Reminder[0]}
                                />
                                <CommonSelect
                                  options={Welcome_Email}
                                  className="select"
                                  defaultValue={Welcome_Email[0]}
                                />
                                <Link
                                  to="#"
                                  className="btn btn-white p-2 border rounded-2 me-2"
                                >
                                  <i className="ti ti-edit" />
                                </Link>
                              </div>
                            </div>
                            {/* end col */}
                          </div>
                          {/* end row */}
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-end">
                        <Link to="#" className="btn btn-light me-2">
                          Cancel
                        </Link>
                        <Link to="#" className="btn btn-primary">
                          Save Changes
                        </Link>
                      </div>
                    </div>
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

export default AppointmentSettings;
