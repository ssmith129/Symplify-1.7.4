import { Link } from "react-router";
import SettingsSidebar from "../../../../../../core/common/settings-sidebar/settingsSidebar";
import {
  Lunch_at,
  Lunch_Break,
} from "../../../../../../core/common/selectOption";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import { TimePicker, type TimePickerProps } from "antd";
import dayjs from "dayjs";

const WorkingHoursSettings = () => {
  const onChangeTime: TimePickerProps["onChange"] = (time, timeString) => {
    console.log(time, timeString);
  };

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
                    <div className="d-flex align-items-center">
                      <h5 className="fw-bold">Working Hours</h5>
                    </div>
                  </div>
                  <div
                    className="card-body px-0 mx-3 break-hours-section"
                    id="break-hours-section"
                  >
                    <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom">
                      <h6 className="fs-14 fw-medium">
                        Expected Productive Time
                        <span className="text-danger ms-1">*</span>
                      </h6>
                      <div className="d-flex align-items-center">
                        <div className="input-icon-end position-relative me-2">
                          <input
                            type="text"
                            className="form-control timepicker"
                          />
                          <span className="input-icon-addon">
                            <i className="ti ti-clock text-gray-7" />
                          </span>
                        </div>
                        <span className="flex-shrink-0 align-items-center">
                          Hours / Day
                        </span>
                      </div>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-3">Working Days</h5>
                      {/* start row */}
                      <div className="row align-items-center row-gap-2 pb-3 mb-3 border-bottom">
                        <div className="col-lg-6">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              defaultChecked
                              id="check1"
                            />
                            <label htmlFor="check1" className="fw-normal">
                              Monday
                            </label>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-6">
                          <div className="d-flex align-items-center">
                            <div className="input-icon-end position-relative me-2">
                              <TimePicker
                                className="form-control"
                                onChange={onChangeTime}
                                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-clock text-gray-7" />
                              </span>
                            </div>
                            <span className="text-dark me-2">to</span>
                            <div className="input-icon-end position-relative">
                              <TimePicker
                                className="form-control"
                                onChange={onChangeTime}
                                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-clock text-gray-7" />
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-6">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              defaultChecked
                              id="check2"
                            />
                            <label htmlFor="check2" className="fw-normal">
                              Tuesday
                            </label>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-6">
                          <div className="d-flex align-items-center">
                            <div className="input-icon-end position-relative me-2">
                              <TimePicker
                                className="form-control"
                                onChange={onChangeTime}
                                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-clock text-gray-7" />
                              </span>
                            </div>
                            <span className="text-dark me-2">to</span>
                            <div className="input-icon-end position-relative">
                              <TimePicker
                                className="form-control"
                                onChange={onChangeTime}
                                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-clock text-gray-7" />
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-6">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              defaultChecked
                              id="check3"
                            />
                            <label htmlFor="check3" className="fw-normal">
                              Wednesday
                            </label>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-6">
                          <div className="d-flex align-items-center">
                            <div className="input-icon-end position-relative me-2">
                              <TimePicker
                                className="form-control"
                                onChange={onChangeTime}
                                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-clock text-gray-7" />
                              </span>
                            </div>
                            <span className="text-dark me-2">to</span>
                            <div className="input-icon-end position-relative">
                              <TimePicker
                                className="form-control"
                                onChange={onChangeTime}
                                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-clock text-gray-7" />
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-6">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              defaultChecked
                              id="check4"
                            />
                            <label htmlFor="check4" className="fw-normal">
                              Thursday
                            </label>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-6">
                          <div className="d-flex align-items-center">
                            <div className="input-icon-end position-relative me-2">
                              <TimePicker
                                className="form-control"
                                onChange={onChangeTime}
                                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-clock text-gray-7" />
                              </span>
                            </div>
                            <span className="text-dark me-2">to</span>
                            <div className="input-icon-end position-relative">
                              <TimePicker
                                className="form-control"
                                onChange={onChangeTime}
                                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-clock text-gray-7" />
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-6">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              defaultChecked
                              id="check5"
                            />
                            <label htmlFor="check5" className="fw-normal">
                              Friday
                            </label>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-6">
                          <div className="d-flex align-items-center">
                            <div className="input-icon-end position-relative me-2">
                              <TimePicker
                                className="form-control"
                                onChange={onChangeTime}
                                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-clock text-gray-7" />
                              </span>
                            </div>
                            <span className="text-dark me-2">to</span>
                            <div className="input-icon-end position-relative">
                              <TimePicker
                                className="form-control"
                                onChange={onChangeTime}
                                defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-clock text-gray-7" />
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-6">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              id="check6"
                            />
                            <label htmlFor="check6" className="fw-normal">
                              Saturday
                            </label>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-6">
                          <div className="d-flex align-items-center">
                            <div className="input-icon-end position-relative me-2">
                              <input
                                type="text"
                                className="form-control timepicker"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-clock text-gray-7" />
                              </span>
                            </div>
                            <span className="text-dark me-2">to</span>
                            <div className="input-icon-end position-relative">
                              <input
                                type="text"
                                className="form-control timepicker"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-clock text-gray-7" />
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-6">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              id="check7"
                            />
                            <label htmlFor="check7" className="fw-normal">
                              Sunday
                            </label>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-6">
                          <div className="d-flex align-items-center">
                            <div className="input-icon-end position-relative me-2">
                              <input
                                type="text"
                                className="form-control timepicker"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-clock text-gray-7" />
                              </span>
                            </div>
                            <span className="text-dark me-2">to</span>
                            <div className="input-icon-end position-relative">
                              <input
                                type="text"
                                className="form-control timepicker"
                              />
                              <span className="input-icon-addon">
                                <i className="ti ti-clock text-gray-7" />
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                      <div className=" pb-3 mb-3 border-bottom">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h5 className="fw-bold">Break Hours</h5>
                          <Link to="#" className="add-break">
                            <i className="ti ti-plus me-1" />
                            Add New
                          </Link>
                        </div>
                        {/* start row */}
                        <div className="row align-items-center row-gap-2 mb-3 break1">
                          <div className="col-lg-6">
                            <p className="text-dark fw-medium mb-0">
                              Morning Break
                            </p>
                          </div>
                          {/* end col */}
                          <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                              <div className="input-icon-end position-relative me-2">
                                <TimePicker
                                  className="form-control"
                                  onChange={onChangeTime}
                                  defaultOpenValue={dayjs(
                                    "00:00:00",
                                    "HH:mm:ss"
                                  )}
                                />
                                <span className="input-icon-addon">
                                  <i className="ti ti-clock text-gray-7" />
                                </span>
                              </div>
                              <span className="text-dark me-2">to</span>
                              <div className="input-icon-end position-relative me-2">
                                <TimePicker
                                  className="form-control"
                                  onChange={onChangeTime}
                                  defaultOpenValue={dayjs(
                                    "00:00:00",
                                    "HH:mm:ss"
                                  )}
                                />
                                <span className="input-icon-addon">
                                  <i className="ti ti-clock text-gray-7" />
                                </span>
                              </div>
                              <Link
                                to="#"
                                className="btn btn-white p-2 border rounded-2 me-2"
                              >
                                <i className="ti ti-edit" />
                              </Link>
                              <Link
                                to="#"
                                className="btn btn-white p-2 border rounded-2"
                              >
                                <i className="ti ti-trash" />
                              </Link>
                            </div>
                          </div>
                          {/* end col */}
                        </div>
                        {/* end row */}
                      </div>
                      <div className=" pb-3 mb-3 border-bottom">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h5 className="fw-bold">Lunch Hours</h5>
                        </div>
                        {/* start row */}
                        <div className="row align-items-center row-gap-2">
                          <div className="col-lg-6">
                            <p className="text-dark fw-medium mb-0">
                              Lunch Break
                            </p>
                          </div>
                          {/* end col */}
                          <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                              <CommonSelect
                                options={Lunch_Break}
                                className="select"
                                defaultValue={Lunch_Break[0]}
                              />
                              <span className="text-dark flex-shrink-0 mx-2">
                                Lunch at
                              </span>
                              <CommonSelect
                                options={Lunch_at}
                                className="select"
                                defaultValue={Lunch_at[0]}
                              />
                            </div>
                          </div>
                          {/* end col */}
                        </div>
                        {/* end row */}
                      </div>
                      <div className="d-flex align-items-center justify-content-end">
                        <Link to="#" className="btn btn-light me-2">
                          Cancel
                        </Link>
                        <Link to="#" className="btn btn-primary">
                          Save Changes
                        </Link>
                      </div>
                    </div>
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
  );
};

export default WorkingHoursSettings;
