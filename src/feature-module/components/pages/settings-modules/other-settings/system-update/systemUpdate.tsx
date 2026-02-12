import { Link } from "react-router"
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar"


const SystemUpdate = () => {
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
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold">System Update</h5>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#generate"
                  >
                    Check for Update
                  </Link>
                </div>
              </div>
              <div className="card-body px-0 mx-3">
                <div className="d-flex align-items-center mb-3">
                  <span className="p-2 bg-light rounded-circle d-inline-flex align-items-center justify-content-center text-primary me-1">
                    <i className="ti ti-circle-check-filled fs-20" />
                  </span>
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <h6 className="fs-14 mb-0 me-2">You are up to date</h6>
                      <span className="badge badge-soft-primary border border-primary fw-medium">
                        Current Version : 8.0
                      </span>
                    </div>
                    <span className="fs-13">Last Checked : Today 10:30 AM</span>
                  </div>
                </div>
                <div className="p-3 bg-light border rounded-2 mb-3">
                  <p className="mb-0">
                    <i className="ti ti-info-circle me-1 text-info" />
                    Before updating, it's best to back up your files and
                    database and review the changelog.
                  </p>
                </div>
                {/* start row */}
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-0">
                      <label className="form-label">
                        Purchase Key<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-6">
                    <div className="mb-0">
                      <label className="form-label">
                        User Name<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
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

  )
}

export default SystemUpdate
