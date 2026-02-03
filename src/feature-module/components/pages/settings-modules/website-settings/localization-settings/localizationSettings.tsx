import { Link } from "react-router"
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar"
import { Currency, Currency_Position, Currency_Symbol, Date_Format, Decimal_Seperator, Default_Language, Start_Week, Thousand_Seperator, Time_Format, Timezone } from "../../../../../../core/common/selectOption"
import CommonSelect from "../../../../../../core/common/common-select/commonSelect"


const LocalizationSettings = () => {
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
                <h5 className="fw-bold">Localization</h5>
              </div>
              <div className="card-body px-0 mx-3">
                <form>
                  {/* start row */}
                  <div className="row border-bottom mb-3">
                    <div className="col-lg-6">
                      {/* start row */}
                      <div className="row align-items-center mb-3">
                        <div className="col-lg-4">
                          <label className="form-label mb-0">Timezone </label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <CommonSelect
                        options={Timezone}
                        className="select"
                        defaultValue={Timezone[0]}
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
                          <label className="form-label mb-0">
                            Start Week On
                          </label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <CommonSelect
                        options={Start_Week}
                        className="select"
                        defaultValue={Timezone[0]}
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
                          <label className="form-label mb-0">Date Format</label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <CommonSelect
                        options={Date_Format}
                        className="select"
                        defaultValue={Date_Format[0]}
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
                          <label className="form-label mb-0">Time Format</label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                            <CommonSelect
                        options={Time_Format}
                        className="select"
                        defaultValue={Time_Format[0]}
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
                          <label className="form-label mb-0">
                            Default Language
                          </label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                           <CommonSelect
                        options={Default_Language}
                        className="select"
                        defaultValue={Default_Language[0]}
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
                          <label className="form-label mb-0">
                            Language Switcher
                          </label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
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
                  {/* start row */}
                  <div className="row border-bottom mb-3">
                    <div className="mb-3">
                      <h5 className="fw-bold mb-0">Currency Information</h5>
                    </div>
                    <div className="col-lg-6">
                      {/* start row */}
                      <div className="row align-items-center mb-3">
                        <div className="col-lg-4">
                          <label className="form-label mb-0">Currency</label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <CommonSelect
                        options={Currency}
                        className="select"
                        defaultValue={Currency[0]}
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
                          <label className="form-label mb-0">
                            Currency Symbol
                          </label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                           <CommonSelect
                        options={Currency_Symbol}
                        className="select"
                        defaultValue={Currency_Symbol[0]}
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
                          <label className="form-label mb-0">
                            Currency Position
                          </label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                         <CommonSelect
                        options={Currency_Position}
                        className="select"
                        defaultValue={Currency_Position[0]}
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
                          <label className="form-label mb-0">
                            Decimal Seperator
                          </label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                        <CommonSelect
                        options={Decimal_Seperator}
                        className="select"
                        defaultValue={Decimal_Seperator[0]}
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
                          <label className="form-label mb-0">
                            Thousand Seperator
                          </label>
                        </div>
                        {/* end col */}
                        <div className="col-lg-8">
                          <CommonSelect
                        options={Thousand_Seperator}
                        className="select"
                        defaultValue={Thousand_Seperator[0]}
                      />
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

export default LocalizationSettings