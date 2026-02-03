import { Link } from "react-router";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import { all_routes } from "../../../../../routes/all_routes";
import {
  Appointment_Type,
  Blood_Group,
  City,
  Country,
  Department,
  Designation,
  Gender,
  State,
} from "../../../../../../core/common/selectOption";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import { DatePicker } from "antd";
import { useState } from "react";
import TagInput from "../../../../../../core/common/Taginput";
import DuplicateForms from "../../../../../../core/common/duplicate-forms/duplicateForms";
import EducationForms from "../../../../../../core/common/duplicate-forms/educationForm";
import RewardsForms from "../../../../../../core/common/duplicate-forms/rewardsForm";

const Modals = () => {
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };

  const [tags, setTags] = useState<string[]>(["English", "French"]);
  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };

  return (
    <>
      {/* Start Add Doctor */}
      <div
        className="offcanvas offcanvas-offset offcanvas-end offcanvas-large"
        tabIndex={-1}
        id="add_doctor"
      >
        <div className="offcanvas-header d-block pb-0 px-0">
          <div className="border-bottom d-flex align-items-center justify-content-between pb-3 px-3">
            <h5 className="offcanvas-title fs-18 fw-bold">New Doctor</h5>
            <button
              type="button"
              className="btn-close custom-btn-close opacity-100"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="ti ti-x bg-white fs-16 text-dark" />
            </button>
          </div>
        </div>
        <div className="offcanvas-body p-0">
          <form>
            <div className="bg-light px-3 py-2">
              <h6 className="fw-bold mb-0">Contact Information</h6>
            </div>
            <div className="p-3 pb-0">
              {/* start row*/}
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3 d-flex align-items-center">
                    <label className="form-label">Profile Image</label>
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
                {/* end col*/}
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Name <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Username <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Phone Number <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* end col*/}
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          DOB <span className="text-danger">*</span>
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
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Year Of Experience
                          <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* end col*/}
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Department<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={Department}
                          className="select"
                          defaultValue={Department[0]}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Designation
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={Designation}
                          className="select"
                          defaultValue={Designation[0]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* end col*/}
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Medical License Number
                          <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">Language Spoken</label>
                        <TagInput
                          initialTags={tags}
                          onTagsChange={handleTagsChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* end col*/}
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Blood Group<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={Department}
                          className="select"
                          defaultValue={Department[0]}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Gender <span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={Gender}
                          className="select"
                          defaultValue={Gender[0]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* end col*/}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">Bio</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      defaultValue={"About Doctor"}
                    />
                  </div>
                  <div className="form-check form-switch mb-3">
                    <label
                      className="form-check-label"
                      htmlFor="switchCheckDefault"
                    >
                      Feature On Website
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switchCheckDefault"
                    />
                  </div>
                </div>
              </div>
              {/* end row*/}
            </div>
            <div className="bg-light px-3 py-2">
              <h6 className="fw-bold mb-0">Address Information</h6>
            </div>
            <div className="p-3 pb-0">
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Address 1</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Address 2 </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Country</label>
                    <CommonSelect
                      options={Country}
                      className="select"
                      defaultValue={Country[0]}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">City</label>
                    <CommonSelect
                      options={City}
                      className="select"
                      defaultValue={City[0]}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">State</label>
                    <CommonSelect
                      options={State}
                      className="select"
                      defaultValue={State[0]}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Pincode</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-light px-3 py-2">
              <h6 className="fw-bold mb-0">Address Information</h6>
            </div>
            <div className="p-3">
              <ul
                className="nav nav-pills schedule-tab mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item me-1" role="presentation">
                  <button
                    className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto active"
                    data-bs-toggle="pill"
                    data-bs-target="#schedule-1"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    Monday
                  </button>
                </li>
                <li className="nav-item me-1" role="presentation">
                  <button
                    className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                    data-bs-toggle="pill"
                    data-bs-target="#schedule-2"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Tuesday
                  </button>
                </li>
                <li className="nav-item me-1" role="presentation">
                  <button
                    className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                    data-bs-toggle="pill"
                    data-bs-target="#schedule-3"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Wednesday
                  </button>
                </li>
                <li className="nav-item me-1" role="presentation">
                  <button
                    className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                    data-bs-toggle="pill"
                    data-bs-target="#schedule-4"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Thursday
                  </button>
                </li>
                <li className="nav-item me-1" role="presentation">
                  <button
                    className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                    data-bs-toggle="pill"
                    data-bs-target="#schedule-5"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Friday
                  </button>
                </li>
                <li className="nav-item me-1" role="presentation">
                  <button
                    className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                    data-bs-toggle="pill"
                    data-bs-target="#schedule-6"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Saturday
                  </button>
                </li>
                <li className="nav-item me-1" role="presentation">
                  <button
                    className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                    data-bs-toggle="pill"
                    data-bs-target="#schedule-7"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Sunday
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="schedule-1"
                  role="tabpanel"
                >
                  <div className="add-schedule-list">
                    <DuplicateForms />
                  </div>
                </div>
                <div className="tab-pane fade" id="schedule-2" role="tabpanel">
                  <div className="add-schedule-list">
                    <DuplicateForms />
                  </div>
                </div>
                <div className="tab-pane fade" id="schedule-3" role="tabpanel">
                  <div className="add-schedule-list">
                    <DuplicateForms />
                  </div>
                </div>
                <div className="tab-pane fade" id="schedule-4" role="tabpanel">
                  <div className="add-schedule-list">
                    <DuplicateForms />
                  </div>
                </div>
                <div className="tab-pane fade" id="schedule-5" role="tabpanel">
                  <div className="add-schedule-list">
                    <DuplicateForms />
                  </div>
                </div>
                <div className="tab-pane fade" id="schedule-6" role="tabpanel">
                  <div className="add-schedule-list">
                    <DuplicateForms />
                  </div>
                </div>
                <div className="tab-pane fade" id="schedule-7" role="tabpanel">
                  <div className="add-schedule-list">
                    <DuplicateForms />
                  </div>
                </div>
              </div>
              <div>
                <Link to="#" className="btn btn-dark">
                  Apply All
                </Link>
              </div>
            </div>
            <div className="bg-light px-3 py-2">
              <h6 className="fw-bold mb-0">Appointment Information</h6>
            </div>
            <div className="p-3 pb-0">
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Appointment Type</label>
                    <CommonSelect
                      options={Appointment_Type}
                      className="select"
                      defaultValue={Appointment_Type[0]}
                    />
                  </div>
                </div>
                <div className="col-lg-6" />
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Accept bookings (in Advance)
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <span className="input-group-text bg-transparent text-dark fs-14">
                        Days
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Appointment Duration</label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <span className="input-group-text bg-transparent text-dark fs-14">
                        Mins
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Consultation Charge</label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <span className="input-group-text bg-transparent text-dark fs-14">
                        $
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Max Bookings Per Slot</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-check form-switch mb-3">
                    <label
                      className="form-check-label"
                      htmlFor="switchCheckDefault2"
                    >
                      Display on Booking Page
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switchCheckDefault2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-light px-3 py-2">
              <h6 className="fw-bold mb-0">Educational Information</h6>
            </div>
            <div className="p-3 pb-0">
              <div className="add-education-list">
                <EducationForms />
              </div>
            </div>
            <div className="bg-light px-3 py-2">
              <h6 className="fw-bold mb-0">Awards &amp; Recognition</h6>
            </div>
            <div className="p-3 pb-0">
              <div className="add-award-list">
                <RewardsForms />
              </div>
            </div>
            <div className="bg-light px-3 py-2">
              <h6 className="fw-bold mb-0">Certifications</h6>
            </div>
            <div className="p-3 pb-0">
              <div className="add-certification-list">
                <RewardsForms />
              </div>
            </div>
          </form>
        </div>
        <div className="offcanvas-footer mb-1 p-3 border-1 border-top">
          <div className=" d-flex justify-content-end gap-2">
            <Link
              to="#"
              className="btn btn-light btm-md"
              data-bs-dismiss="offcanvas"
            >
              Cancel
            </Link>
            <button
              className="btn btn-primary btm-md"
              data-bs-toggle="modal"
              data-bs-target="#success_modal"
            >
              Add Doctor
            </button>
          </div>
        </div>
        {/* End Add New Appointment*/}
      </div>
      {/* End Add Doctor */}
      {/* Start Edit Doctor */}
      <div
        className="offcanvas offcanvas-offset offcanvas-end offcanvas-large"
        tabIndex={-1}
        id="edit_doctor"
      >
        <div className="offcanvas-header d-block pb-0 px-0">
          <div className="border-bottom d-flex align-items-center justify-content-between pb-3 px-3">
            <h5 className="offcanvas-title fs-18 fw-bold">Edit Doctor</h5>
            <button
              type="button"
              className="btn-close custom-btn-close opacity-100"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="ti ti-x bg-white fs-16 text-dark" />
            </button>
          </div>
        </div>
        <div className="offcanvas-body p-0">
          <form>
            <div className="bg-light px-3 py-2">
              <h6 className="fw-bold mb-0">Contact Information</h6>
            </div>
            <div className="p-3 pb-0">
              {/* start row*/}
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3 d-flex align-items-center">
                    <label className="form-label">Profile Image</label>
                    <div className="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0">
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-01.jpg"
                        className="position-relative z-n1"
                        alt=""
                      />
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
                {/* end col*/}
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Dr.Mick Thompson"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Username <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Andrew"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Phone Number <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="+1 47895 58974"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Email Address <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="mick@example.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* end col*/}
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          DOB <span className="text-danger">*</span>
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
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Year Of Experience
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="+5 Years"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* end col*/}
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Department<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={Department}
                          className="select"
                          defaultValue={Department[1]}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Designation
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={Designation}
                          className="select"
                          defaultValue={Designation[1]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* end col*/}
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Medical License Number
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="MGF14578"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">Language Spoken</label>
                        <TagInput
                          initialTags={tags}
                          onTagsChange={handleTagsChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* end col*/}
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Blood Group<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={Blood_Group}
                          className="select"
                          defaultValue={Blood_Group[1]}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Gender <span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={Gender}
                          className="select"
                          defaultValue={Gender[1]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* end col*/}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label">Bio</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      defaultValue={
                        "Dr.Mick Thompson is a compassionate and experienced internal medicine physician with over 5 years of clinical practice."
                      }
                    />
                  </div>
                  <div className="form-check form-switch mb-3">
                    <label
                      className="form-check-label"
                      htmlFor="switchCheckDefault3"
                    >
                      Feature On Website
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switchCheckDefault3"
                    />
                  </div>
                </div>
              </div>
              {/* end row*/}
            </div>
            <div className="bg-light px-3 py-2">
              <h6 className="fw-bold mb-0">Address Information</h6>
            </div>
            <div className="p-3 pb-0">
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Address 1</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="2900 Alpha Avenue"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Address 2 </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="2900 Alpha Avenue"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Country</label>
                    <CommonSelect
                      options={Country}
                      className="select"
                      defaultValue={Country[1]}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">City</label>
                    <CommonSelect
                      options={City}
                      className="select"
                      defaultValue={City[1]}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">State</label>
                    <CommonSelect
                      options={State}
                      className="select"
                      defaultValue={State[1]}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Pincode</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="PA 15650"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-light px-3 py-2">
              <h6 className="fw-bold mb-0">Address Information</h6>
            </div>
            <div className="p-3">
              <ul
                className="nav nav-pills schedule-tab mb-3"
                id="pills-tab2"
                role="tablist"
              >
                <li className="nav-item me-1" role="presentation">
                  <button
                    className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto active"
                    data-bs-toggle="pill"
                    data-bs-target="#schedules-1"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    Monday
                  </button>
                </li>
                <li className="nav-item me-1" role="presentation">
                  <button
                    className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                    data-bs-toggle="pill"
                    data-bs-target="#schedules-2"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Tuesday
                  </button>
                </li>
                <li className="nav-item me-1" role="presentation">
                  <button
                    className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                    data-bs-toggle="pill"
                    data-bs-target="#schedules-3"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Wednesday
                  </button>
                </li>
                <li className="nav-item me-1" role="presentation">
                  <button
                    className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                    data-bs-toggle="pill"
                    data-bs-target="#schedules-4"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Thursday
                  </button>
                </li>
                <li className="nav-item me-1" role="presentation">
                  <button
                    className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                    data-bs-toggle="pill"
                    data-bs-target="#schedules-5"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Friday
                  </button>
                </li>
                <li className="nav-item me-1" role="presentation">
                  <button
                    className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                    data-bs-toggle="pill"
                    data-bs-target="#schedules-6"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Saturday
                  </button>
                </li>
                <li className="nav-item me-1" role="presentation">
                  <button
                    className="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                    data-bs-toggle="pill"
                    data-bs-target="#schedules-7"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Sunday
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent2">
                <div
                  className="tab-pane fade active show"
                  id="schedules-1"
                  role="tabpanel"
                >
                  <div className="add-schedule-list">
                    <DuplicateForms />
                  </div>
                </div>
                <div className="tab-pane fade" id="schedules-2" role="tabpanel">
                  <div className="add-schedule-list">
                    <DuplicateForms />
                  </div>
                </div>
                <div className="tab-pane fade" id="schedules-3" role="tabpanel">
                  <div className="add-schedule-list">
                    <DuplicateForms />
                  </div>
                </div>
                <div className="tab-pane fade" id="schedules-4" role="tabpanel">
                  <div className="add-schedule-list">
                    <DuplicateForms />
                  </div>
                </div>
                <div className="tab-pane fade" id="schedules-5" role="tabpanel">
                  <div className="add-schedule-list">
                    <DuplicateForms />
                  </div>
                </div>
                <div className="tab-pane fade" id="schedules-6" role="tabpanel">
                  <div className="add-schedule-list">
                    <DuplicateForms />
                  </div>
                </div>
                <div className="tab-pane fade" id="schedules-7" role="tabpanel">
                  <div className="add-schedule-list">
                    <DuplicateForms />
                  </div>
                </div>
              </div>
              <div>
                <Link to="#" className="btn btn-dark">
                  Apply All
                </Link>
              </div>
            </div>
            <div className="bg-light px-3 py-2">
              <h6 className="fw-bold mb-0">Appointment Information</h6>
            </div>
            <div className="p-3 pb-0">
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Appointment Type</label>
                    <CommonSelect
                      options={Appointment_Type}
                      className="select"
                      defaultValue={Appointment_Type[0]}
                    />
                  </div>
                </div>
                <div className="col-lg-6" />
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Accept bookings (in Advance)
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={2}
                      />
                      <span className="input-group-text bg-transparent text-dark fs-14">
                        Days
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Appointment Duration</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={30}
                      />
                      <span className="input-group-text bg-transparent text-dark fs-14">
                        Mins
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Consultation Charge</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="$100"
                      />
                      <span className="input-group-text bg-transparent text-dark fs-14">
                        $
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Max Bookings Per Slot</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={200}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-check form-switch mb-3">
                    <label
                      className="form-check-label"
                      htmlFor="switchCheckDefault5"
                    >
                      Display on Booking Page
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switchCheckDefault5"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-light px-3 py-2">
              <h6 className="fw-bold mb-0">Educational Information</h6>
            </div>
            <div className="p-3 pb-0">
              <div className="add-education-list">
                <EducationForms />
              </div>
            </div>
            <div className="bg-light px-3 py-2">
              <h6 className="fw-bold mb-0">Awards &amp; Recognition</h6>
            </div>
            <div className="p-3 pb-0">
              <div className="add-award-list">
                <RewardsForms />
              </div>
            </div>
            <div className="bg-light px-3 py-2">
              <h6 className="fw-bold mb-0">Certifications</h6>
            </div>
            <div className="p-3 pb-0">
              <div className="add-certification-list">
                <RewardsForms />
              </div>
            </div>
          </form>
        </div>
        <div className="offcanvas-footer mb-1 p-3 border-1 border-top">
          <div className=" d-flex justify-content-end gap-2">
            <Link
              to="#"
              className="btn btn-light btm-md"
              data-bs-dismiss="offcanvas"
            >
              Cancel
            </Link>
            <button className="btn btn-primary btm-md">Save Changes</button>
          </div>
        </div>
        {/* End Add New Appointment*/}
      </div>
      {/* End Edit Doctor */}
      {/* Start Delete Modal  */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center position-relative z-1">
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-01.png"
                alt=""
                className="img-fluid position-absolute top-0 start-0 z-n1"
              />
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-02.png"
                alt=""
                className="img-fluid position-absolute bottom-0 end-0 z-n1"
              />
              <div className="mb-3">
                <span className="avatar avatar-lg bg-danger text-white">
                  <i className="ti ti-trash fs-24" />
                </span>
              </div>
              <h5 className="fw-bold mb-1">Delete Confirmation</h5>
              <p className="mb-3">Are you sure want to delete?</p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light position-relative z-1 me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link
                  to={all_routes.doctorsList}
                  className="btn btn-danger position-relative z-1"
                >
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Delete Modal  */}
      {/* Start Delete Modal  */}
      <div className="modal fade" id="success_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center position-relative z-1">
              <div className="mb-3">
                <span className="avatar avatar-lg bg-success text-white">
                  <i className="ti ti-check fs-24" />
                </span>
              </div>
              <h5 className="fw-bold mb-1">Added Successfully</h5>
              <p className="mb-3">Doctor has been added to your List</p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light position-relative z-1 me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link
                  to={all_routes.doctordetails}
                  className="btn btn-primary position-relative z-1"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Delete Modal  */}
    </>
  );
};

export default Modals;
