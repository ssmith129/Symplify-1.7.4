import { useState } from "react";
import {
  Category,
  Priority,
  TicketStatus,
} from "../../../../../core/common/selectOption";
import PredefinedDatePicker from "../../../../../core/common/datePicker";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const TicketsModal = () => {
const [phone, setPhone] = useState<string | undefined>()
  return (
    <>
      {/* Start Add Contact */}
      <div id="add_tickets" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark modal-title fw-bold">Add New Ticket</h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form>
              <div className="modal-body">
                {/* start row */}
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-2">
                      <label className="form-label">
                        Ticket ID<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="#TKT0020"
                        disabled
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-6">
                    <div className="mb-2">
                      <label className="form-label">
                        Created By<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-6">
                    <div className="mb-2">
                      <label className="form-label">
                        Phone Number<span className="text-danger ms-1">*</span>
                      </label>
                      <PhoneInput
                            defaultCountry="US"
                            value={phone}
                            onChange={setPhone}
                          />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-6">
                    <div className="mb-2">
                      <label className="form-label">
                        Email Address<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-6">
                    <div className="mb-2">
                      <label className="form-label">
                        Subject<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-6">
                    <div className="mb-2">
                      <label className="form-label">
                        Category<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Category}
                        className="select"
                        defaultValue={Category[0]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-6">
                    <div className="mb-2">
                      <label className="form-label">
                        Priority<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Priority}
                        className="select"
                        defaultValue={Priority[0]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-6">
                    <div className="mb-2">
                      <label className="form-label">
                        Created Date<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-group position-relative">
                        <span className="input-icon-addon text-dark">
                          <i className="ti ti-calendar-event" />
                        </span>
                        <PredefinedDatePicker />
                      </div>
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-12">
                    <div className="mb-2">
                      <label className="form-label">
                        Content<span className="text-danger ms-1">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-12">
                    <div className="mb-2">
                      <label className="form-label">File</label>
                      <div className="file-upload drag-file bg-light w-100 d-flex align-items-center justify-content-center flex-column">
                        <span className="upload-img d-block mb-2">
                          <i className="ti ti-folder-open text-primary" />
                        </span>
                        <p className="mb-0 text-dark">
                          Drop Your Files or
                          <Link
                            to="#"
                            className="text-primary text-decoration-underline"
                          >
                            browse
                          </Link>
                        </p>
                        <input type="file" accept="video/image" />
                        <p className="fs-13">Maximum size : 50 MB</p>
                      </div>
                    </div>
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
              </div>
              <div className="modal-footer d-flex align-items-center gap-1">
                <button
                  type="button"
                  className="btn btn-white border"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Add Contact */}
      {/* Start Edit Contact */}
      <div id="edit_tickets" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-dark modal-title fw-bold">Edit Ticket</h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form>
              <div className="modal-body">
                {/* start row */}
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-2">
                      <label className="form-label">
                        Ticket ID<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="#TKT0020"
                        disabled
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-6">
                    <div className="mb-2">
                      <label className="form-label">
                        Created By<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Andrew Simmons"
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-6">
                    <div className="mb-2">
                      <label className="form-label">
                        Phone Number<span className="text-danger ms-1">*</span>
                      </label>
                       <PhoneInput
                            defaultCountry="US"
                            value={phone}
                            onChange={setPhone}
                          />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-6">
                    <div className="mb-2">
                      <label className="form-label">
                        Email Address<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="andrew@example.com"
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-6">
                    <div className="mb-2">
                      <label className="form-label">
                        Subject<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Auto Logout Complaint"
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-6">
                    <div className="mb-2">
                      <label className="form-label">
                        Category<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Category}
                        className="select"
                        defaultValue={Category[1]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-6">
                    <div className="mb-2">
                      <label className="form-label">
                        Priority<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Priority}
                        className="select"
                        defaultValue={Priority[2]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-6">
                    <div className="mb-2">
                      <label className="form-label">
                        Created Date<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="input-group position-relative">
                        <span className="input-icon-addon text-dark">
                          <i className="ti ti-calendar-event" />
                        </span>
                        <PredefinedDatePicker />
                      </div>
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-12">
                    <div className="mb-2">
                      <label className="form-label">
                        Content<span className="text-danger ms-1">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={
                          "Keep getting logged out while working, even without being idle. It’s frustrating and interrupts my documentation process."
                        }
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-12">
                    <div className="mb-2">
                      <label className="form-label">File</label>
                      <div className="file-upload drag-file bg-light w-100 d-flex align-items-center justify-content-center flex-column">
                        <span className="upload-img d-block mb-2">
                          <i className="ti ti-folder-open text-primary" />
                        </span>
                        <p className="mb-0 text-dark">
                          Drop Your Files or
                          <Link
                            to="#"
                            className="text-primary text-decoration-underline"
                          >
                            browse
                          </Link>
                        </p>
                        <input type="file" accept="video/image" />
                        <p className="fs-13">Maximum size : 50 MB</p>
                      </div>
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-12">
                    <div className="mb-2">
                      <label className="form-label">
                        Status<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={TicketStatus}
                        className="select"
                        defaultValue={TicketStatus[2]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
              </div>
              <div className="modal-footer d-flex align-items-center gap-1">
                <button
                  type="button"
                  className="btn btn-white border"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Edit Contact */}
      {/* Start Delete Modal  */}
      <div className="modal fade" id="delete_tickets">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center position-relative">
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-01.png"
                alt=""
                className="img-fluid position-absolute top-0 start-0"
              />
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-02.png"
                alt=""
                className="img-fluid position-absolute bottom-0 end-0"
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
                  to={all_routes.tickets}
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
    </>
  );
};

export default TicketsModal;
