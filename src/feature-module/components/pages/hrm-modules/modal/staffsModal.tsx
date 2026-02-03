import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import { DatePicker } from "antd";
import {
  Blood_Group,
  City,
  Country,
  Gender,
  StaffsDesignation,
  StaffsRole,
  State,
} from "../../../../../core/common/selectOption";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";

const StaffsModal = () => {
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };

  return (
    <>
      {/* Start Add Modal */}
      <div id="view_staff" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="fw-bold modal-title">Staff Details</h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body">
              <div className="card bg-light">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <ImageWithBasePath
                        src="assets/img/users/user-08.jpg"
                        alt="img"
                        className="img-fluid avatar avatar-xxl rounded"
                      />
                    </div>
                    <div>
                      <span className="text-primary mb-1">#STF020</span>
                      <div className="d-flex align-items-center mb-1">
                        <h5 className="fw-bold mb-0 me-2">James Allaire</h5>
                        <span className="badge badge-soft-success border border-success fw-medium fs-13">
                          Available
                        </span>
                      </div>
                      <p>Front Office Executive</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card */}
              <ul className="nav nav-tabs nav-bordered mb-3">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="#"
                    data-bs-toggle="tab"
                    data-bs-target="#tab1"
                  >
                    Basic Info
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#"
                    data-bs-toggle="tab"
                    data-bs-target="#tab2"
                  >
                    Salary Info
                  </Link>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane active"
                  id="tab1"
                  role="tabpanel"
                  tabIndex={0}
                >
                  {/* start row */}
                  <div className="row row-gap-2">
                    <div className="col-md-4">
                      <p className="text-dark fs-13 fw-medium mb-0">Gender</p>
                      <p className="fs-13">Male</p>
                    </div>
                    {/* end col */}
                    <div className="col-md-4">
                      <p className="text-dark fs-13 fw-medium mb-0">
                        Phone Number
                      </p>
                      <p className="fs-13">+1 54546 45648</p>
                    </div>
                    {/* end col */}
                    <div className="col-md-4">
                      <p className="text-dark fs-13 fw-medium mb-0">Email</p>
                      <p className="fs-13">james@example.com</p>
                    </div>
                    {/* end col */}
                    <div className="col-md-4">
                      <p className="text-dark fs-13 fw-medium mb-0">
                        Date of Joining
                      </p>
                      <p className="fs-13">12 Dec 2024</p>
                    </div>
                    {/* end col */}
                    <div className="col-md-4">
                      <p className="text-dark fs-13 fw-medium mb-0">Email</p>
                      <p className="fs-13">james@example.com</p>
                    </div>
                    {/* end col */}
                    <div className="col-md-4">
                      <p className="text-dark fs-13 fw-medium mb-0">
                        Staff Type
                      </p>
                      <p className="fs-13">Permanent</p>
                    </div>
                    {/* end col */}
                    <div className="col-md-12">
                      <p className="text-dark fs-13 fw-medium mb-0">Addresss</p>
                      <p className="fs-13">
                        10 Elizabethtown Plaza, Downers Grove, Elizabeth UK07202
                      </p>
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
                <div
                  className="tab-pane"
                  id="tab2"
                  role="tabpanel"
                  tabIndex={0}
                >
                  {/* Table List */}
                  <div className="table-responsive border bg-white">
                    <table className="table table-nowrap">
                      <thead>
                        <tr>
                          <th>Credit Date</th>
                          <th>Amount</th>
                          <th>Salary for</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>13 Jul 2025</td>
                          <td>$4800</td>
                          <td>Jun 2025</td>
                          <td>
                            <div className="action-item">
                              <Link to="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu p-2">
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete"
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>12 Jun 2025</td>
                          <td>$4800</td>
                          <td>May 2025</td>
                          <td>
                            <div className="action-item">
                              <Link to="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu p-2">
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete"
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>15 May 2025</td>
                          <td>$4800</td>
                          <td>Apr 2025</td>
                          <td>
                            <div className="action-item">
                              <Link to="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu p-2">
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete"
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>14 Apr 2025</td>
                          <td>$4800</td>
                          <td>Mar 2025</td>
                          <td>
                            <div className="action-item">
                              <Link to="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu p-2">
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete"
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>13 Mar 2025</td>
                          <td>$4800</td>
                          <td>Feb 2025</td>
                          <td>
                            <div className="action-item">
                              <Link to="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu p-2">
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete"
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>14 Feb 2025</td>
                          <td>$4800</td>
                          <td>Jan 2025</td>
                          <td>
                            <div className="action-item">
                              <Link to="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu p-2">
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete"
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>12 Jan 2025</td>
                          <td>$4800</td>
                          <td>Dec 2024</td>
                          <td>
                            <div className="action-item">
                              <Link to="#" data-bs-toggle="dropdown">
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <ul className="dropdown-menu p-2">
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit"
                                  >
                                    Edit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item d-flex align-items-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete"
                                  >
                                    Delete
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* /Table List */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Add Modal */}
      {/* Start Add Modal */}
      <div id="add_staff" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="fw-bold modal-title">New Staff</h5>
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
                <h6 className="fw-bold mb-3">Staff Information</h6>
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
                <div className="mb-3">
                  <label className="form-label">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                {/* start row */}
                <div className="row mb-3 border-bottom">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Role<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={StaffsRole}
                        className="select"
                        defaultValue={StaffsRole[0]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Designation<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={StaffsDesignation}
                        className="select"
                        defaultValue={StaffsDesignation[0]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
                <h6 className="fw-bold mb-3">Contact Information</h6>
                {/* start row */}
                <div className="row row-gap-2">
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        Phone Number<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        Email<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
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
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        Gender<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Gender}
                        className="select"
                        defaultValue={Gender[0]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-12">
                    <div className="mb-0">
                      <label className="form-label">
                        Blood Group<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Blood_Group}
                        className="select"
                        defaultValue={Blood_Group[0]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Address 1</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Address 2</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Country</label>
                      <CommonSelect
                        options={Country}
                        className="select"
                        defaultValue={Country[0]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">State</label>
                      <CommonSelect
                        options={State}
                        className="select"
                        defaultValue={State[0]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">City</label>
                      <CommonSelect
                        options={City}
                        className="select"
                        defaultValue={City[0]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Pincode</label>
                      <input type="text" className="form-control" />
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
                  Add Staff
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Add Modal */}
      {/* Start Edit Modal */}
      <div id="edit_staff" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="fw-bold modal-title">Edit Staff</h5>
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
                <h6 className="fw-bold mb-3">Staff Information</h6>
                <div className="mb-3 d-flex align-items-center">
                  <label className="form-label me-3">Profile Image</label>
                  <div className="profile-container">
                    <ImageWithBasePath
                      src="assets/img/users/user-08.jpg"
                      alt="Profile"
                    />
                    <div className="overlay-btn">
                      <Link to="#" className="text-white" id="uploadTrigger">
                        <i className="ti ti-photo fs-10" />
                      </Link>
                    </div>
                    <input
                      type="file"
                      id="profileUpload"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="James Adair"
                  />
                </div>
                {/* start row */}
                <div className="row mb-3 border-bottom">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Role<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={StaffsRole}
                        className="select"
                        defaultValue={StaffsRole[1]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Designation<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={StaffsDesignation}
                        className="select"
                        defaultValue={StaffsDesignation[1]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
                <h6 className="fw-bold mb-3">Contact Information</h6>
                {/* start row */}
                <div className="row row-gap-2">
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        Phone Number<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="+1 5258 25874"
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        Email<span className="text-danger ms-1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="james@gmail.com"
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
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
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">
                        Gender<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Gender}
                        className="select"
                        defaultValue={Gender[1]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-12">
                    <div className="mb-0">
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
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Address 1</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="3-174,"
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Address 2</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="3-/174,"
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Country</label>
                      <CommonSelect
                        options={Country}
                        className="select"
                        defaultValue={Country[1]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">State</label>
                      <CommonSelect
                        options={State}
                        className="select"
                        defaultValue={State[1]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">City</label>
                      <CommonSelect
                        options={City}
                        className="select"
                        defaultValue={City[1]}
                      />
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6">
                    <div className="mb-0">
                      <label className="form-label">Pincode</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="IN 46625"
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
      {/* End Edit Modal */}
      {/* Start Delete Modal  */}
      <div className="modal fade" id="delete_staff">
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
                  to={all_routes.staffs}
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

export default StaffsModal;
