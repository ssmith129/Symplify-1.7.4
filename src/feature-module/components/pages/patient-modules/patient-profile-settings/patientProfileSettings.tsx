import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import { City, Country, State } from "../../../../../core/common/selectOption";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";

const PatientProfileSettings = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="mb-3 border-bottom pb-3">
            <h4 className="fw-bold mb-0">Settings</h4>
          </div>
          {/* End Page Header */}
          <div className="card" id="profilePage">
            <div className="card-body">
              {/* end card body */}
              <div className="row">
                <div className="col-lg-3">
                  <div className="text-start">
                    <Link
                      to={all_routes.patientprofilesettings}
                      className="d-block w-100 btn btn-md border rounded fs-14 fw-medium text-primary text-start mb-1 active w-100 justify-content-start"
                    >
                      
                      <i className="ti ti-user-cog me-2 text-primary"> </i>
                      Profile Settings
                    </Link>
                    <Link
                      to={all_routes.patientpasswordsettings}
                      className="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start"
                    >
                      
                      <i className="ti ti-lock-star me-2 text-dark"> </i> Change
                      Password
                    </Link>
                    <Link
                      to={all_routes.patientnotificationssettings}
                      className="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start"
                    >
                      
                      <i className="ti ti-bell me-2 text-dark"> </i>
                      Notifications
                    </Link>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-9">
                  <div className="border-1 border-start ps-4">
                    <h5 className="fw-bold pb-3 mb-4 border-1 border-bottom">
                      
                      Basic Information
                    </h5>
                    {/* start row */}
                    <div className="row border-bottom mb-3">
                      <div className="col-lg-12">
                        {/* start row */}
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-2">
                            <label className="form-label mb-0">
                              Profile Image
                              <span className="text-danger ms-1">*</span>
                            </label>
                          </div>
                          {/* end col */}
                          <div className="col-lg-10">
                            <div className="profile-container">
                              <ImageWithBasePath
                                src="assets/img/users/user-08.jpg"
                                alt="Profile"
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
                        </div>
                        {/* end row */}
                      </div>
                      {/* end col */}
                      <div className="col-lg-6">
                        {/* start row */}
                        <div className="row align-items-center mb-3">
                          <div className="col-lg-4">
                            <label className="form-label mb-0">
                              First Name
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
                              Last Name
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
                              Email<span className="text-danger ms-1">*</span>
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
                    </div>
                    {/* end row */}
                    {/* start row */}
                    <div className="row border-bottom mb-3">
                      <div className="mb-3">
                        <h5 className="fw-bold mb-0">Address Information</h5>
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
                    <div className="d-flex justify-content-end align-items-center gap-2">
                      <Link
                        to=""
                        className="btn btn-light btn-md fs-13 fw-medium rounded"
                      >
                        
                        Cancel
                      </Link>
                      <Link
                        to=""
                        className="btn btn-primary btn-md fs-13 fw-medium rounded"
                      >
                        
                        Save Changes
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end col */}
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
  );
};

export default PatientProfileSettings;
