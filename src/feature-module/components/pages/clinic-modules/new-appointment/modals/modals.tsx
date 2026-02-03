import { useState } from "react";
import { Link } from "react-router";
import {
  Blood_Group,
  City,
  Country,
  Gender,
  Primary_Doctor,
  State,
  Status,
} from "../../../../../../core/common/selectOption";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import { DatePicker } from "antd";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Modals = () => {
 const [phone, setPhone] = useState<string | undefined>()

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };

  return (
    <>
      {/* Start Add modal */}
      <div className="modal fade" id="add_modal">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark fw-bold">Add New Patient</h5>
              <button
                type="button"
                className="btn-close custom-btn-close opacity-100"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x bg-white fs-16 text-dark" />
              </button>
            </div>
            <div className="modal-body pb-0">
              {/* form start */}
              <div className="form">
                <h6 className="fw-bold mb-3">Patient Information</h6>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3 d-flex align-items-center">
                      <label className="form-label mb-0">Profile Image</label>
                      <div className="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0">
                        <i className="ti ti-user-plus fs-16" />
                        <input
                          type="file"
                          className="form-control image-sign"
                          multiple
                        />
                        <div className="position-absolute bottom-0 end-0 star-0 w-100 h-25 bg-dark d-flex align-items-center justify-content-center z-n1">
                          <Link
                            to="#"
                            className="text-white d-flex align-items-center justify-content-center"
                          >
                            <i className="ti ti-photo fs-14" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 fw-medium">
                        First Name<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 fw-medium">
                        Last Name<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 fw-medium custom-phoneinput">
                        Phone Number<span className="text-danger ms-1">*</span>
                      </label>
                      <PhoneInput
                            defaultCountry="US"
                            value={phone}
                            onChange={setPhone}
                          />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 fw-medium">
                        Email Address<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 fw-medium">
                        Primary Doctor
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Primary_Doctor}
                        className="select"
                        defaultValue={Primary_Doctor[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 fw-medium">
                        DOB<span className="text-danger ms-1">*</span>
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
                        Gender<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Gender}
                        className="select"
                        defaultValue={Gender[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 fw-medium">
                        Blood Group<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Blood_Group}
                        className="select"
                        defaultValue={Blood_Group[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 fw-medium">
                        Status<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Status}
                        className="select"
                        defaultValue={Status[0]}
                      />
                    </div>
                  </div>
                </div>
                <h6 className="fw-bold mb-3 border-top pt-3">
                  Address Information
                </h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 fw-medium">
                        Address 1<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 fw-medium">
                        Address 2<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label mb-1">
                        Country<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Country}
                        className="select"
                        defaultValue={Country[0]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label mb-1">
                        State<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={State}
                        className="select"
                        defaultValue={State[0]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label mb-1">
                        City<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={City}
                        className="select"
                        defaultValue={City[0]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label mb-1">
                        Pincode<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              {/* form end */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light btn-sm me-2 fs-13 fw-medium"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary btn-sm fs-13 fw-medium"
              >
                Add New Patient
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Add modal  */}
    </>
  );
};

export default Modals;
