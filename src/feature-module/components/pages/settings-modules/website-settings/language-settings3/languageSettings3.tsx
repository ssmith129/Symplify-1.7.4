import { Link } from "react-router"
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar"
import ImageWithBasePath from "../../../../../../core/imageWithBasePath"


const LanguageSettings3 = () => {
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
                  <h5 className="fw-bold">Language</h5>
                  <div className="d-flex align-items-center">
                    <div className="dropdown me-2">
                      <Link
                        to="#"
                        className="dropdown-toggle btn btn-outline-white d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                      >
                        <i className="isax isax-language-square me-1" />
                        Language
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-lg p-2">
                        <li>
                          <label className="dropdown-item d-flex align-items-center rounded-1">
                            English
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item d-flex align-items-center rounded-1">
                            German
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item d-flex align-items-center rounded-1">
                            Arabic
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item d-flex align-items-center rounded-1">
                            French
                          </label>
                        </li>
                      </ul>
                    </div>
                    <Link
                      to="#"
                      className="btn btn-primary d-inline-flex align-items-center"
                    >
                      <i className="ti ti-plus me-1" />
                      New Language
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body px-0 mx-3">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                  <div className="top-search me-2">
                    <div className="input-icon-start position-relative me-2">
                      <input
                        type="text"
                        className="form-control form-control-sm ps-1 bg-white"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center flex-wrap gap-2">
                    <Link
                      to="#"
                      className="btn btn-outline-white d-inline-flex align-items-center me-2 fw-normal"
                    >
                      <i className="ti ti-arrow-left me-1" />
                      Back to Translations
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-sm btn-outline-white me-2 fw-normal d-inline-flex align-items-center"
                    >
                      <ImageWithBasePath
                        src="assets/img/flags/ae.svg"
                        alt="img"
                        className="avatar avatar-xs rounded-circle me-1"
                      />
                      Arabic
                    </Link>
                    <div className="progress-percent">
                      <span className="text-gray-9 fs-10">Progress</span>
                      <div className="d-flex align-items-center">
                        <div
                          className="progress progress-xs"
                          style={{ width: 120 }}
                        >
                          <div
                            className="progress-bar bg-danger rounded"
                            role="progressbar"
                            style={{ width: "70%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <span className="d-inline-flex fs-12 ms-2">70%</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Start Table */}
                <div className="custom-datatable-filter table-responsive border rounded mb-3">
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th>English</th>
                        <th>Arabic</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-gray-9">Invoices</td>
                        <td>
                          <input
                            type="text"
                            dir="rtl"
                            className="form-control text-end"
                            defaultValue="الفواتير"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-gray-9">Recurring Invoices</td>
                        <td>
                          <input
                            type="text"
                            dir="rtl"
                            className="form-control text-end"
                            defaultValue="الفواتير المتكررة"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-gray-9">Credit Notes</td>
                        <td>
                          <input
                            type="text"
                            dir="rtl"
                            className="form-control text-end"
                            defaultValue="ملاحظات الائتمان"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-gray-9">Quotations</td>
                        <td>
                          <input
                            type="text"
                            dir="rtl"
                            className="form-control text-end"
                            defaultValue="الاقتباسات"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-gray-9">Delivery Challans</td>
                        <td>
                          <input
                            type="text"
                            dir="rtl"
                            className="form-control text-end"
                            defaultValue="تسليم تشالان"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-gray-9">Customers</td>
                        <td>
                          <input
                            type="text"
                            dir="rtl"
                            className="form-control text-end"
                            defaultValue="عملاء"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* End Table */}
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

export default LanguageSettings3
