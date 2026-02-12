import { Link } from "react-router";
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar";
import Modals from "./modals/modals";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";

const StorageSettings = () => {
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
                      <h5 className="fw-bold">Storage</h5>
                    </div>
                  </div>
                  <div className="card-body px-0 mx-3">
                    {/* start row */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card shadow-none">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-lg p-2 bg-light rounded flex-shrink-0 me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/local-storage.svg"
                                    alt="Img"
                                  />
                                </span>
                                <p className="text-dark fw-medium">
                                  Local Storage
                                </p>
                              </div>
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
                      <div className="col-md-6">
                        <div className="card shadow-none">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <span className="avatar avatar-lg p-2 bg-light rounded flex-shrink-0 me-2">
                                  <ImageWithBasePath
                                    src="assets/img/icons/aws.svg"
                                    alt="Img"
                                  />
                                </span>
                                <p className="text-dark fw-medium">AWS</p>
                              </div>
                              <div className="d-flex align-items-center">
                                <Link
                                  className="btn btn-sm btn-light border rounded-2 p-1 me-2"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#add_storage"
                                >
                                  <i className="ti ti-settings" />
                                </Link>
                                <div className="form-check form-switch ps-0">
                                  <input
                                    className="form-check-input m-0"
                                    type="checkbox"
                                    defaultChecked
                                  />
                                </div>
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
      <Modals />
    </>
  );
};

export default StorageSettings;
