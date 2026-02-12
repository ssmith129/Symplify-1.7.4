import { useState } from "react";
import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import {
  Blood_Group,
  City,
  Country,
  Gender,
  Primary_Doctor,
  State,
  Status,
} from "../../../../../core/common/selectOption";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { DatePicker } from "antd";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const CreatePatient = () => {
  const [phone, setPhone] = useState<string | undefined>()
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
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
                  <Link to={all_routes.patients} className="text-dark">
                    <i className="ti ti-chevron-left me-1" />
                    Patients
                  </Link>
                </h6>
              </div>
              {/* page header end */}
              {/* card start */}
              <div className="card">
                <div className="card-body pb-0">
                  <div className="form">
                    <h6 className="fw-bold mb-3">Patient Information</h6>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3 d-flex align-items-center">
                          <label className="form-label mb-0">
                            Profile Image
                          </label>
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
                            First Name
                            <span className="text-danger ms-1">*</span>
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
                          <label className="form-label mb-1 fw-medium">
                            Phone Number
                            <span className="text-danger ms-1">*</span>
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
                            Email Address
                            <span className="text-danger ms-1">*</span>
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
                            Blood Group
                            <span className="text-danger ms-1">*</span>
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
                </div>
              </div>
              {/* card end */}
              <div className="d-flex align-items-center justify-content-end">
                <Link to="#" className="btn btn-light me-2">
                  Cancel
                </Link>
                <Link to="#" className="btn btn-primary">
                  Add New Patient
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
    </>
  );
};

export default CreatePatient;
