import { Link } from "react-router";
import { all_routes } from "../../../../../routes/all_routes";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import {
  Datetype,
  Employee,
  LeaveType,
} from "../../../../../../core/common/selectOption";
import { DatePicker } from "antd";

const LeavesModal = () => {
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
  return (
    <>
      {/* Start Add Modal */}
      <div id="add_leave" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="text-dark modal-title fw-bold">Add New Leave</h4>
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
                <div className="row row-gap-2">
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        Employee<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Employee}
                        className="select"
                        defaultValue={Employee[0]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        Leave Type<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={LeaveType}
                        className="select"
                        defaultValue={LeaveType[0]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        From Date<span className="text-danger ms-1">*</span>
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
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        To Date<span className="text-danger ms-1">*</span>
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
                  {/* end col */}
                  <div className="col-md-12">
                    <div className="mb-0">
                      <label className="form-label">
                        No of Days<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-12">
                    <div className="p-2 bg-light rounded">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <span>dd/mm/yyyy</span>
                        </div>
                        <div className="col-md-6">
                          <CommonSelect
                            options={Datetype}
                            className="select"
                            defaultValue={Datetype[0]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-12">
                    <div className="mb-0">
                      <label className="form-label">
                        No of Days<span className="text-danger ms-1">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={""}
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
                  Add New Leave
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Add Modal */}
      {/* Start Add Modal */}
      <div id="edit_leave" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="text-dark modal-title fw-bold">Edit Leave</h4>
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
                <div className="row row-gap-2">
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        Employee<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Employee}
                        className="select"
                        defaultValue={Employee[1]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        Leave Type<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={LeaveType}
                        className="select"
                        defaultValue={LeaveType[1]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        From Date<span className="text-danger ms-1">*</span>
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
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        To Date<span className="text-danger ms-1">*</span>
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
                  {/* end col */}
                  <div className="col-md-12">
                    <div className="mb-0">
                      <label className="form-label">
                        No of Days<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={2}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-12">
                    <div className="p-2 bg-light rounded">
                      <div className="row align-items-center mb-2">
                        <div className="col-md-6">
                          <span>18 Jan 2025</span>
                        </div>
                        <div className="col-md-6">
                          <CommonSelect
                            options={Datetype}
                            className="select"
                            defaultValue={Datetype[1]}
                          />
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <span>18 Jan 2025</span>
                        </div>
                        <div className="col-md-6">
                          <CommonSelect
                            options={Datetype}
                            className="select"
                            defaultValue={Datetype[1]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-12">
                    <div className="mb-0">
                      <label className="form-label">
                        No of Days<span className="text-danger ms-1">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={
                          "Not feeling well due to cold and fatigue, taking rest as advised by family doctor."
                        }
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
      {/* End Add Modal */}
      {/* Start Delete Modal  */}
      <div className="modal fade" id="delete_leave">
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
                  to={all_routes.leaves}
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

export default LeavesModal;
