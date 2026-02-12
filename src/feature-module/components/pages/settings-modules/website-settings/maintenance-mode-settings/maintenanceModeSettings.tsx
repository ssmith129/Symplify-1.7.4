import { Link } from "react-router"
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar"


const MaintenanceModeSettings = () => {
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
                <h5 className="fw-bold">Maintenance Mode</h5>
              </div>
              <div className="card-body px-0 mx-3">
                <form>
                  {/* start row */}
                  <div className="row border-bottom mb-3">
                    <div className="col-lg-12">
                      {/* start row */}
                      <div className="row align-items-center mb-3">
                        <div className="col-lg-2">
                          <label className="form-label mb-0">Image </label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-10">
                          <input type="file" className="form-control" />
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end col */}
                    <div className="col-lg-12">
                      {/* start row */}
                      <div className="row align-items-center mb-3">
                        <div className="col-lg-2">
                          <label className="form-label mb-0">Description</label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-10">
                          <textarea
                            className="form-control"
                            rows={3}
                            placeholder="Description"
                            defaultValue={""}
                          />
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end col */}
                    <div className="col-lg-12">
                      {/* start row */}
                      <div className="row align-items-center mb-3">
                        <div className="col-lg-2">
                          <label className="form-label mb-0">Status</label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-10">
                          <div className="form-check form-switch ps-0">
                            <input
                              className="form-check-input m-0"
                              type="checkbox"
                              defaultChecked
                            />
                          </div>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                  <div className="d-flex align-items-center justify-content-end">
                    <Link
                      to="#"
                      className="btn btn-light me-3"
                    >
                      Cancel
                    </Link>
                    <Link to="#" className="btn btn-primary">
                      Save Changes
                    </Link>
                  </div>
                </form>
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

  )
}

export default MaintenanceModeSettings
