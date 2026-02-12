import { Link } from "react-router"
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar"
import ImageWithBasePath from "../../../../../../core/imageWithBasePath"
import { City, Country, State } from "../../../../../../core/common/selectOption"
import CommonSelect from "../../../../../../core/common/common-select/commonSelect"


const OrganizationSettings = () => {
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
                <h5 className="fw-bold">Organization</h5>
              </div>
              <div className="card-body px-0 mx-3">
                <form>
                  {/* start row */}
                  <div className="row border-bottom mb-3">
                    <div className="col-lg-6">
                      {/* start row */}
                      <div className="row align-items-center mb-3">
                        <div className="col-lg-4">
                          <label className="form-label mb-0">
                            Company Name
                            <span className="text-danger ms-1">*</span>
                          </label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <input type="text" className="form-control" />
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
                          <label className="form-label mb-0">
                            Email Address
                            <span className="text-danger ms-1">*</span>
                          </label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <input type="text" className="form-control" />
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
                          <label className="form-label mb-0">
                            Phone Number
                            <span className="text-danger ms-1">*</span>
                          </label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <input type="text" className="form-control" />
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
                          <label className="form-label mb-0">Fax</label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <input type="text" className="form-control" />
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                  {/* start row */}
                  <div className="row mb-3 border-bottom">
                    <div className="mb-3">
                      <h5 className="fw-bold mb-0">Company Images</h5>
                    </div>
                    <div className="col-lg-6">
                      {/* start row */}
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-3">
                          <div className="profile-container">
                            <ImageWithBasePath
                              src="assets/img/logo.svg"
                              alt="Profile"
                              className="img-fluid object-fit-contain p-1"
                            />
                            <div className="overlay-btn">
                              <Link
                                to="#"
                                className="text-white"
                                id="uploadTrigger"
                              >
                                <i className="ti ti-photo fs-10" />
                              </Link>
                            </div>
                            <input
                              type="file"
                              id="profileUpload"
                              style={{ display: "none" }}
                            />
                          </div>
                        </div>
                        {/* end col */}
                        <div className="">
                          <p className="fw-medium text-dark mb-1">Logo</p>
                          <span>Recommended size is 250 px*100 px</span>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end col */}
                    <div className="col-lg-6">
                      {/* start row */}
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-3">
                          <div className="profile-container">
                            <ImageWithBasePath
                              src="assets/img/logo-white.svg"
                              alt="Profile"
                              className="img-fluid object-fit-contain bg-dark p-1"
                            />
                            <div className="overlay-btn">
                              <Link
                                to="#"
                                className="text-white"
                                id="uploadTrigger1"
                              >
                                <i className="ti ti-photo fs-10" />
                              </Link>
                            </div>
                            <input
                              type="file"
                              id="profileUpload1"
                              style={{ display: "none" }}
                            />
                          </div>
                        </div>
                        {/* end col */}
                        <div className="">
                          <p className="fw-medium text-dark mb-1">Dark Logo</p>
                          <span>Recommended size is 250 px*100 px</span>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end col */}
                    <div className="col-lg-6">
                      {/* start row */}
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-3">
                          <div className="profile-container">
                            <ImageWithBasePath
                              src="assets/img/logo-small.svg"
                              alt="Profile"
                              className="img-fluid object-fit-none"
                            />
                            <div className="overlay-btn">
                              <Link
                                to="#"
                                className="text-white"
                                id="uploadTrigger2"
                              >
                                <i className="ti ti-photo fs-10" />
                              </Link>
                            </div>
                            <input
                              type="file"
                              id="profileUpload2"
                              style={{ display: "none" }}
                            />
                          </div>
                        </div>
                        {/* end col */}
                        <div className="">
                          <p className="fw-medium text-dark mb-1">Mini Logo</p>
                          <span>Recommended size is 250 px*100 px</span>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end col */}
                    <div className="col-lg-6">
                      {/* start row */}
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-3">
                          <div className="profile-container">
                            <ImageWithBasePath
                              src="assets/img/logo-small.svg"
                              alt="Profile"
                              className="img-fluid object-fit-none bg-dark"
                            />
                            <div className="overlay-btn">
                              <Link
                                to="#"
                                className="text-white"
                                id="uploadTrigger3"
                              >
                                <i className="ti ti-photo fs-10" />
                              </Link>
                            </div>
                            <input
                              type="file"
                              id="profileUpload3"
                              style={{ display: "none" }}
                            />
                          </div>
                        </div>
                        {/* end col */}
                        <div className="">
                          <p className="fw-medium text-dark mb-1">
                            Dark Mini Logo
                          </p>
                          <span>Recommended size is 250 px*100 px</span>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end col */}
                    <div className="col-lg-6">
                      {/* start row */}
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-3">
                          <div className="profile-container">
                            <ImageWithBasePath
                              src="assets/img/logo-small.svg"
                              alt="Profile"
                              className="img-fluid object-fit-none"
                            />
                            <div className="overlay-btn">
                              <Link
                                to="#"
                                className="text-white"
                                id="uploadTrigger4"
                              >
                                <i className="ti ti-photo fs-10" />
                              </Link>
                            </div>
                            <input
                              type="file"
                              id="profileUpload4"
                              style={{ display: "none" }}
                            />
                          </div>
                        </div>
                        {/* end col */}
                        <div className="">
                          <p className="fw-medium text-dark mb-1">Favicon</p>
                          <span>Recommended size is 250 px*100 px</span>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end col */}
                    <div className="col-lg-6">
                      {/* start row */}
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-3">
                          <div className="profile-container">
                            <ImageWithBasePath
                              src="assets/img/logo-small.svg"
                              alt="Profile"
                              className="img-fluid object-fit-none"
                            />
                            <div className="overlay-btn">
                              <Link
                                to="#"
                                className="text-white"
                                id="uploadTrigger5"
                              >
                                <i className="ti ti-photo fs-10" />
                              </Link>
                            </div>
                            <input
                              type="file"
                              id="profileUpload5"
                              style={{ display: "none" }}
                            />
                          </div>
                        </div>
                        {/* end col */}
                        <div className="">
                          <p className="fw-medium text-dark mb-1">Apple Icon</p>
                          <span>Recommended size is 250 px*100 px</span>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                  {/* start row */}
                  <div className="row border-bottom mb-3 pb-3">
                    <div className="mb-3">
                      <h5 className="fw-bold mb-0">Contact Information</h5>
                    </div>
                    <div className="col-lg-6">
                      {/* start row */}
                      <div className="row align-items-center mb-3">
                        <div className="col-lg-4">
                          <label className="form-label mb-0">
                            Address Line 1
                          </label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <input type="text" className="form-control" />
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
                          <label className="form-label mb-0">
                            Address Line 2
                          </label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <input type="text" className="form-control" />
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
                          <label className="form-label mb-0">Country</label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <CommonSelect
                        options={Country}
                        className="select"
                        defaultValue={Country[0]}
                      />
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
                          <label className="form-label mb-0">State</label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <CommonSelect
                        options={State}
                        className="select"
                        defaultValue={State[0]}
                      />
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
                          <label className="form-label mb-0">City</label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <CommonSelect
                        options={City}
                        className="select"
                        defaultValue={City[0]}
                      />
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
                          <label className="form-label mb-0">Pincode</label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <input type="text" className="form-control" />
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

export default OrganizationSettings
