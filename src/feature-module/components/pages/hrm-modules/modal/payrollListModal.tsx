import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { Staff } from "../../../../../core/common/selectOption";

const PayrollListModal = () => {
  return (
    <>
      {/* Start Add Modal */}
      <div id="add_payroll" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="text-dark modal-title fw-bold">
                Add Employee Salary
              </h4>
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
                <div className="row row-gap-2 mb-3">
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Select Staff</label>
                      <CommonSelect
                        options={Staff}
                        className="select"
                        defaultValue={Staff[1]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Net Salary</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
                {/* start row */}
                <div className="row row-gap-2">
                  <div className="col-md-6">
                    <h6 className="mb-3">Earnings ($)</h6>
                    <div className="mb-3">
                      <label className="form-label">
                        Basic Salary<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={0}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        DA (40%)<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={0}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        HRA (15%)<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={0}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Conveyance<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={0}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Medical Allowance
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={0}
                      />
                    </div>
                    <div className="mb-0">
                      <label className="form-label">
                        Others<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={0}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <h6 className="mb-3">Deductions ($)</h6>
                    <div className="mb-3">
                      <label className="form-label">
                        TDS<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">ESI</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        PF<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Prof Tax<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Labour Welfare
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-0">
                      <label className="form-label">
                        Others<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
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
                  Add Payslip
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Add Modal */}
      {/* Start Add Modal */}
      <div id="edit_payroll" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="text-dark modal-title fw-bold">
                Edit Employee Salary
              </h4>
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
                <div className="row row-gap-2 mb-3">
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Select Staff</label>
                      <CommonSelect
                        options={Staff}
                        className="select"
                        defaultValue={Staff[1]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Net Salary</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={1000}
                      />
                    </div>
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
                {/* start row */}
                <div className="row row-gap-2">
                  <div className="col-md-6">
                    <h6 className="mb-3">Earnings ($)</h6>
                    <div className="mb-3">
                      <label className="form-label">
                        Basic Salary<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={1000}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        DA (40%)<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={800}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        HRA (15%)<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={600}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Conveyance<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={50}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Medical Allowance
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={40}
                      />
                    </div>
                    <div className="mb-0">
                      <label className="form-label">
                        Others<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={20}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <h6 className="mb-3">Deductions ($)</h6>
                    <div className="mb-3">
                      <label className="form-label">
                        TDS<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="$600"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">ESI</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={500}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        PF<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={60}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Prof Tax<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={40}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Labour Welfare
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={30}
                      />
                    </div>
                    <div className="mb-0">
                      <label className="form-label">
                        Others<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={10}
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
      <div className="modal fade" id="delete_payroll">
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
                  to={all_routes.payroll}
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

export default PayrollListModal;
