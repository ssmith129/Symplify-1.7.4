import { Link } from "react-router"
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar"


const NotificationsSettings = () => {
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
      <div className="card">
        <div className="card-body p-0">
          <div className="settings-wrapper d-flex">
            {/* Start Settings Sidebar */}
            <SettingsSidebar/>
            {/* End Settings Sidebar */}
            <div className="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
              <div className="card-header border-bottom px-0 mx-3">
                <h5 className="fw-bold">Notifications</h5>
              </div>
              {/* end card header */}
              <div className="card-body px-0 mx-3">
                {/* Items */}
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border mb-3 p-3 rounded">
                  <div className="d-flex align-items-center">
                    <span className="avatar avatar-lg border bg-light me-2">
                      <i className="ti ti-calendar-time text-dark fs-16" />
                    </span>
                    <div>
                      <h5 className="fs-14 fw-semibold mb-1">
                        New Appointment Booking
                      </h5>
                      <p className="fs-13">
                        Alert when an appointment is booked
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <div className="">
                      <p className="fw-medium mb-1 text-dark"> Email </p>
                      <label className="d-flex align-items-center form-switch ps-0">
                        <input
                          className="form-check-input m-0"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                    <div className="">
                      <p className="fw-medium mb-1 text-dark"> SMS </p>
                      <label className="d-flex align-items-center form-switch ps-0">
                        <input
                          className="form-check-input m-0"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                    <div className="">
                      <p className="fw-medium mb-1 text-dark"> In App </p>
                      <label className="d-flex align-items-center form-switch ps-0">
                        <input
                          className="form-check-input m-0"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                  </div>
                </div>
                {/* Items */}
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border mb-3 p-3 rounded">
                  <div className="d-flex align-items-center">
                    <span className="avatar avatar-lg border bg-light me-2">
                      <i className="ti ti-calendar-x text-dark fs-16" />
                    </span>
                    <div>
                      <h5 className="fs-14 fw-semibold mb-1">
                        Appointment Cancellation
                      </h5>
                      <p className="fs-13">Alert if a appointment is cancel</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <div className="">
                      <p className="fw-medium mb-1 text-dark"> Email </p>
                      <label className="d-flex align-items-center form-switch ps-0">
                        <input
                          className="form-check-input m-0"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                    <div className="">
                      <p className="fw-medium mb-1 text-dark"> SMS </p>
                      <label className="d-flex align-items-center form-switch ps-0">
                        <input
                          className="form-check-input m-0"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                    <div className="">
                      <p className="fw-medium mb-1 text-dark"> In App </p>
                      <label className="d-flex align-items-center form-switch ps-0">
                        <input
                          className="form-check-input m-0"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                  </div>
                </div>
                {/* Items */}
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border mb-3 p-3">
                  <div className="d-flex align-items-center">
                    <span className="avatar avatar-lg border bg-light me-2">
                      <i className="ti ti-calendar-time text-dark fs-16" />
                    </span>
                    <div>
                      <h5 className="fs-14 fw-semibold mb-1">
                        Lab Report Ready
                      </h5>
                      <p className="fs-13">
                        Notify when test reports are available
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <div className="">
                      <p className="fw-medium mb-1 text-dark"> Email </p>
                      <label className="d-flex align-items-center form-switch ps-0">
                        <input
                          className="form-check-input m-0"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                    <div className="">
                      <p className="fw-medium mb-1 text-dark"> SMS </p>
                      <label className="d-flex align-items-center form-switch ps-0">
                        <input
                          className="form-check-input m-0"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                    <div className="">
                      <p className="fw-medium mb-1 text-dark"> In App </p>
                      <label className="d-flex align-items-center form-switch ps-0">
                        <input
                          className="form-check-input m-0"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                  </div>
                </div>
                {/* Items */}
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border mb-3 p-3">
                  <div className="d-flex align-items-center">
                    <span className="avatar avatar-lg border bg-light me-2">
                      <i className="ti ti-activity-heartbeat text-dark fs-16" />
                    </span>
                    <div>
                      <h5 className="fs-14 fw-semibold mb-1">
                        Follow-up Reminders
                      </h5>
                      <p className="fs-13">Scheduled follow-ups from doctors</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <div className="">
                      <p className="fw-medium mb-1 text-dark"> Email </p>
                      <label className="d-flex align-items-center form-switch ps-0">
                        <input
                          className="form-check-input m-0"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                    <div className="">
                      <p className="fw-medium mb-1 text-dark"> SMS </p>
                      <label className="d-flex align-items-center form-switch ps-0">
                        <input
                          className="form-check-input m-0"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                    <div className="">
                      <p className="fw-medium mb-1 text-dark"> In App </p>
                      <label className="d-flex align-items-center form-switch ps-0">
                        <input
                          className="form-check-input m-0"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                  </div>
                </div>
                {/* Items */}
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border mb-3 p-3">
                  <div className="d-flex align-items-center">
                    <span className="avatar avatar-lg border bg-light me-2">
                      <i className="ti ti-file-dollar text-dark fs-16" />
                    </span>
                    <div>
                      <h5 className="fs-14 fw-semibold mb-1">
                        Billing/Invoice Notification
                      </h5>
                      <p className="fs-13">
                        Notify when a new bill or invoice is generated
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <div className="">
                      <p className="fw-medium mb-1 text-dark"> Email </p>
                      <label className="d-flex align-items-center form-switch ps-0">
                        <input
                          className="form-check-input m-0"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                    <div className="">
                      <p className="fw-medium mb-1 text-dark"> SMS </p>
                      <label className="d-flex align-items-center form-switch ps-0">
                        <input
                          className="form-check-input m-0"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                    <div className="">
                      <p className="fw-medium mb-1 text-dark"> In App </p>
                      <label className="d-flex align-items-center form-switch ps-0">
                        <input
                          className="form-check-input m-0"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                  </div>
                </div>
                {/* Items */}
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 border mb-0 p-3">
                  <div className="d-flex align-items-center">
                    <span className="avatar avatar-lg border bg-light me-2">
                      <i className="ti ti-alert-octagon text-dark fs-16" />
                    </span>
                    <div>
                      <h5 className="fs-14 fw-semibold mb-1">System Alerts</h5>
                      <p className="fs-13">
                        Login attempts, data changes, or system updates.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <div className="">
                      <p className="fw-medium mb-1 text-dark"> Email </p>
                      <label className="d-flex align-items-center form-switch ps-0">
                        <input
                          className="form-check-input m-0"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                    <div className="">
                      <p className="fw-medium mb-1 text-dark"> SMS </p>
                      <label className="d-flex align-items-center form-switch ps-0">
                        <input
                          className="form-check-input m-0"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                    <div className="">
                      <p className="fw-medium mb-1 text-dark"> In App </p>
                      <label className="d-flex align-items-center form-switch ps-0">
                        <input
                          className="form-check-input m-0"
                          type="checkbox"
                          defaultChecked
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card body */}
            </div>
            {/* end card */}
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

  )
}

export default NotificationsSettings