import { Link } from "react-router";
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar";

const ClearCacheSettings = () => {
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
                      <h5 className="fw-bold">Clear Cache</h5>
                    </div>
                  </div>
                  <div className="card-body px-0 mx-3">
                    <p>
                      Clearing the cache may improve performance but will remove
                      temporary files, stored preferences, and cached data from
                      websites and applications.
                    </p>
                    <Link to="#" className="btn btn-primary">
                      Clear Cache
                    </Link>
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
  );
};

export default ClearCacheSettings;
