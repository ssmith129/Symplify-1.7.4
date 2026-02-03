import { Link } from "react-router"
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar"
import ImageWithBasePath from "../../../../../../core/imageWithBasePath"
import Modals from "./modals/modals"


const InvoiceTemplatesSettings = () => {
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
                <h5 className="fw-bold">Invoice Templates</h5>
              </div>
              <div className="card-body px-0 mx-3">
                {/* start row */}
                <div className="row gx-3">
                  <div className="col-md-3">
                    <div className="card invoice-template bg-white">
                      <div className="card-body p-2">
                        <div className="invoice-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="w-100"
                              src="assets/img/bg/invoice-template-01.jpg"
                              alt="invoice"
                            />
                          </Link>
                          <Link
                            to="#"
                            className="invoice-view-icon"
                            data-bs-toggle="modal"
                            data-bs-target="#invoice_view_1"
                          >
                            <i className="ti ti-eye" />
                          </Link>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <Link to="#">General Invoice 1</Link>
                          <Link
                            to="#"
                            className="invoice-star d-flex align-items-center justify-content-center"
                          >
                            <i className="ti ti-star" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-3">
                    <div className="card invoice-template bg-white">
                      <div className="card-body p-2">
                        <div className="invoice-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="w-100"
                              src="assets/img/bg/invoice-template-01.jpg"
                              alt="invoice"
                            />
                          </Link>
                          <Link
                            to="#"
                            className="invoice-view-icon"
                            data-bs-toggle="modal"
                            data-bs-target="#invoice_view_2"
                          >
                            <i className="ti ti-eye" />
                          </Link>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <Link to="#">General Invoice 2</Link>
                          <Link
                            to="#"
                            className="invoice-star d-flex align-items-center justify-content-center"
                          >
                            <i className="ti ti-star" />
                          </Link>
                        </div>
                      </div>
                      {/* end card body */}
                    </div>
                    {/* end card */}
                  </div>
                  {/* end col */}
                  <div className="col-md-3">
                    <div className="card invoice-template bg-white">
                      <div className="card-body p-2">
                        <div className="invoice-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="w-100"
                              src="assets/img/bg/invoice-template-01.jpg"
                              alt="invoice"
                            />
                          </Link>
                          <Link
                            to="#"
                            className="invoice-view-icon"
                            data-bs-toggle="modal"
                            data-bs-target="#invoice_view_3"
                          >
                            <i className="ti ti-eye" />
                          </Link>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <Link to="#">General Invoice 3</Link>
                          <Link
                            to="#"
                            className="invoice-star d-flex align-items-center justify-content-center"
                          >
                            <i className="ti ti-star" />
                          </Link>
                        </div>
                      </div>
                      {/* end card body */}
                    </div>
                    {/* end card */}
                  </div>
                  {/* end col */}
                  <div className="col-md-3">
                    <div className="card invoice-template bg-white">
                      <div className="card-body p-2">
                        <div className="invoice-img">
                          <Link to="#">
                            <ImageWithBasePath
                              className="w-100"
                              src="assets/img/bg/invoice-template-01.jpg"
                              alt="invoice"
                            />
                          </Link>
                          <Link
                            to="#"
                            className="invoice-view-icon"
                            data-bs-toggle="modal"
                            data-bs-target="#invoice_view_4"
                          >
                            <i className="ti ti-eye" />
                          </Link>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <Link to="#">General Invoice 4</Link>
                          <Link
                            to="#"
                            className="invoice-star d-flex align-items-center justify-content-center"
                          >
                            <i className="ti ti-star" />
                          </Link>
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
        <Modals/>
</>

  )
}

export default InvoiceTemplatesSettings