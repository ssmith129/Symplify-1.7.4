import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import {
  Appointment_Type,
  Department,
  Doctor,
  Patient,
  Status_Checkout,
} from "../../../../../core/common/selectOption";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { DatePicker, TimePicker, type TimePickerProps } from "antd";
import dayjs from "dayjs";
import Modals from "./modals/modals";

const NewAppointment = () => {
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };

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
        <div className="content">
          {/* row start */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* page header start */}
              <div className="mb-4">
                <h6 className="fw-bold mb-0 d-flex align-items-center">
                  <Link to={all_routes.appointments} className="text-dark">
                    <i className="ti ti-chevron-left me-1" />
                    Appointments
                  </Link>
                </h6>
              </div>
              {/* page header end */}
              {/* card start */}
              <div className="card">
                <div className="card-body">
                  <div className="form">
                    <div className="mb-3">
                      <label className="form-label mb-1 fw-medium">
                        Appointment ID
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="AP234354"
                        disabled
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <div className="d-flex align-items-center justify-content-between mb-1">
                            <label className="form-label mb-0 fw-medium">
                              Patient<span className="text-danger ms-1">*</span>
                            </label>
                            <Link
                              to="#"
                              className="link-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#add_modal"
                            >
                              <i className="ti ti-circle-plus me-1" />
                              Add New
                            </Link>
                          </div>
                          <CommonSelect
                            options={Patient}
                            className="select"
                            defaultValue={Patient[0]}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Department
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            options={Department}
                            className="select"
                            defaultValue={Department[0]}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Doctor<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            options={Doctor}
                            className="select"
                            defaultValue={Doctor[0]}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Appointment Type
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            options={Appointment_Type}
                            className="select"
                            defaultValue={Appointment_Type[0]}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Date of Appointment
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <div className="input-icon-end position-relative">
                            <DatePicker
                              className="form-control datetimepicker"
                              format={{
                                format: "DD-MM-YYYY",
                                type: "mask",
                              }}
                              getPopupContainer={getModalContainer}
                              placeholder="DD-MM-YYYY"
                              suffixIcon={null}
                            />
                            <span className="input-icon-addon">
                              <i className="ti ti-calendar" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label mb-1 fw-medium">
                            Time<span className="text-danger ms-1">*</span>
                          </label>
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
                    </div>
                    <div className="mb-3">
                      <label className="form-label mb-1 fw-medium">
                        Appointment Reason
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                    <div className="mb-0">
                      <label className="form-label mb-1 fw-medium">
                        Status<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Status_Checkout}
                        className="select"
                        defaultValue={Status_Checkout[0]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* card end */}
              <div className="d-flex align-items-center justify-content-end">
                <Link to="#" className="btn btn-light me-2">
                  Cancel
                </Link>
                <Link to="#" className="btn btn-primary">
                  Create Appointment
                </Link>
              </div>
            </div>
          </div>
          {/* row end */}
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

export default NewAppointment;
