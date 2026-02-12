import { Link } from "react-router";
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar";
import Modals from "./modals/modals";

const PreferencesSettings = () => {
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
                <SettingsSidebar />
                {/* End Settings Sidebar */}
                <div className="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
                  <div className="card-header border-bottom px-0 mx-3">
                    <div className="d-flex">
                      <h5 className="fw-bold">Preferences</h5>
                    </div>
                  </div>
                  <div className="card-body px-0 mx-3">
                    {/* start row */}
                    <div className="row">
                      <div className="col-md-6 col-xl-4">
                        <div className="card shadow-none">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="text-dark fw-medium mb-0">
                                Doctors
                              </p>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input m-0"
                                  type="checkbox"
                                  defaultChecked
                                />
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col */}
                      <div className="col-md-6 col-xl-4">
                        <div className="card shadow-none">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="text-dark fw-medium mb-0">
                                Patients
                              </p>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input m-0"
                                  type="checkbox"
                                  defaultChecked
                                />
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col */}
                      <div className="col-md-6 col-xl-4">
                        <div className="card shadow-none">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="text-dark fw-medium mb-0">
                                Appointments
                              </p>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input m-0"
                                  type="checkbox"
                                  defaultChecked
                                />
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col */}
                      <div className="col-md-6 col-xl-4">
                        <div className="card shadow-none">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="text-dark fw-medium mb-0">
                                Locations
                              </p>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input m-0"
                                  type="checkbox"
                                  defaultChecked
                                />
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col */}
                      <div className="col-md-6 col-xl-4">
                        <div className="card shadow-none">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="text-dark fw-medium mb-0">Visits</p>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input m-0"
                                  type="checkbox"
                                  defaultChecked
                                />
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col */}
                      <div className="col-md-6 col-xl-4">
                        <div className="card shadow-none">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="text-dark fw-medium mb-0">
                                Services
                              </p>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input m-0"
                                  type="checkbox"
                                  defaultChecked
                                />
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col */}
                      <div className="col-md-6 col-xl-4">
                        <div className="card shadow-none">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="text-dark fw-medium mb-0">
                                Designations
                              </p>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input m-0"
                                  type="checkbox"
                                  defaultChecked
                                />
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col */}
                      <div className="col-md-6 col-xl-4">
                        <div className="card shadow-none">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="text-dark fw-medium mb-0">
                                Departments
                              </p>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input m-0"
                                  type="checkbox"
                                  defaultChecked
                                />
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col */}
                      <div className="col-md-6 col-xl-4">
                        <div className="card shadow-none">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="text-dark fw-medium mb-0">
                                Activities
                              </p>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input m-0"
                                  type="checkbox"
                                  defaultChecked
                                />
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col */}
                      <div className="col-md-6 col-xl-4">
                        <div className="card shadow-none">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="text-dark fw-medium mb-0">
                                Reports
                              </p>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input m-0"
                                  type="checkbox"
                                  defaultChecked
                                />
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col */}
                      <div className="col-md-6 col-xl-4">
                        <div className="card shadow-none">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="text-dark fw-medium mb-0">Staffs</p>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input m-0"
                                  type="checkbox"
                                  defaultChecked
                                />
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col */}
                      <div className="col-md-6 col-xl-4">
                        <div className="card shadow-none">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="text-dark fw-medium mb-0">
                                Invoices
                              </p>
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input m-0"
                                  type="checkbox"
                                  defaultChecked
                                />
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col */}
                    </div>
                    {/* end row */}
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
      <Modals />
    </>
  );
};

export default PreferencesSettings;
