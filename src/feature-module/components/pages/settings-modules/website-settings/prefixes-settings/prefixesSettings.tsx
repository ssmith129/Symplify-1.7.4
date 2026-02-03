import { Link } from "react-router"
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar"


const PrefixesSettings = () => {
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
                <h5 className="fw-bold">Prefixes</h5>
              </div>
              <div className="card-body px-0 mx-3">
                <form>
                  {/* start row */}
                  <div className="row">
                    <div className="col-lg-6">
                      {/* start row */}
                      <div className="row align-items-center mb-3">
                        <div className="col-lg-4">
                          <label className="form-label mb-0">Doctor</label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <div className="input-group d-flex align-items-center">
                            <span className="input-group-text border-end-0 fs-14 bg-white pe-1">
                              DOC -
                            </span>
                            <input
                              type="text"
                              className="form-control border-start-0 ps-0"
                              aria-label="Username"
                            />
                          </div>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end col */}
                    <div className="col-lg-6">
                      {/* start row */}
                      <div className="row align-items-center mb-3">
                        <div className="col-lg-4">
                          <label className="form-label mb-0">Patient</label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <div className="input-group d-flex align-items-center">
                            <span className="input-group-text border-end-0 fs-14 bg-white pe-1">
                              PNT -
                            </span>
                            <input
                              type="text"
                              className="form-control border-start-0 ps-0"
                              aria-label="Username"
                            />
                          </div>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end col */}
                    <div className="col-lg-6">
                      {/* start row */}
                      <div className="row align-items-center mb-3">
                        <div className="col-lg-4">
                          <label className="form-label mb-0">Appointment</label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <div className="input-group d-flex align-items-center">
                            <span className="input-group-text border-end-0 fs-14 bg-white pe-1">
                              APT -
                            </span>
                            <input
                              type="text"
                              className="form-control border-start-0 ps-0"
                              aria-label="Username"
                            />
                          </div>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end col */}
                    <div className="col-lg-6">
                      {/* start row */}
                      <div className="row align-items-center mb-3">
                        <div className="col-lg-4">
                          <label className="form-label mb-0">Staff</label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <div className="input-group d-flex align-items-center">
                            <span className="input-group-text border-end-0 fs-14 bg-white pe-1">
                              STF -
                            </span>
                            <input
                              type="text"
                              className="form-control border-start-0 ps-0"
                              aria-label="Username"
                            />
                          </div>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end col */}
                    <div className="col-lg-6">
                      {/* start row */}
                      <div className="row align-items-center mb-3">
                        <div className="col-lg-4">
                          <label className="form-label mb-0">Visit</label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <div className="input-group d-flex align-items-center">
                            <span className="input-group-text border-end-0 fs-14 bg-white pe-1">
                              VST -
                            </span>
                            <input
                              type="text"
                              className="form-control border-start-0 ps-0"
                              aria-label="Username"
                            />
                          </div>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end col */}
                    <div className="col-lg-6">
                      {/* start row */}
                      <div className="row align-items-center mb-3">
                        <div className="col-lg-4">
                          <label className="form-label mb-0">Invoice</label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <div className="input-group d-flex align-items-center">
                            <span className="input-group-text border-end-0 fs-14 bg-white pe-1">
                              INV -
                            </span>
                            <input
                              type="text"
                              className="form-control border-start-0 ps-0"
                              aria-label="Username"
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

export default PrefixesSettings