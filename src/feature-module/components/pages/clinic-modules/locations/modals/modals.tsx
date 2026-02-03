import { Link } from "react-router";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import {
  City,
  Country,
  Location_Type,
  State,
} from "../../../../../../core/common/selectOption";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";

const Modals = () => {
  return (
    <>
      {/* Start Add modal */}
      <div className="modal fade" id="add_modal">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark fw-bold">New Location</h5>
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
              {/* start row */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3 d-flex align-items-center">
                    <label className="form-label mb-0">Image</label>
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
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1">
                      Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1">
                      Location Type<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      options={Location_Type}
                      className="select"
                      defaultValue={Location_Type[0]}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1">
                      Email Address<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="email" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1">
                      Phone Number<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="tel" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1">
                      Address 1<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1">
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
              {/* end row */}
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
                Add New Location
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Add modal  */}
      {/* Start edit modal */}
      <div className="modal fade" id="edit_modal">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark fw-bold">Edit Location</h5>
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
              {/* start row */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3 d-flex align-items-center">
                    <label className="form-label mb-0">Image</label>
                    <div className="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0">
                      <ImageWithBasePath
                        src="assets/img/icons/clinic-08.svg"
                        className="position-relative z-n1"
                        alt="img"
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
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1">
                      Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="James Carter"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1">
                      Location Type<span className="text-danger ms-1">*</span>
                    </label>
                    <CommonSelect
                      options={Location_Type}
                      className="select"
                      defaultValue={Location_Type[1]}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1">
                      Email Address<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue="james@example.com"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1">
                      Phone Number<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      defaultValue="+1 43554 54584"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1">
                      Address 1<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="123 Main Street"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1">
                      Address 2<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue=" Apartment 4B"
                    />
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
                      defaultValue={Country[1]}
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
                      defaultValue={State[1]}
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
                      defaultValue={City[1]}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1">
                      Pincode<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={90001}
                    />
                  </div>
                </div>
              </div>
              {/* end row */}
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
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End edit modal  */}
      {/* Start Delete Modal  */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center position-relative">
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-01.png"
                alt=""
                className="img-fluid position-absolute top-0 start-0 z-0"
              />
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-02.png"
                alt=""
                className="img-fluid position-absolute bottom-0 end-0 z-0"
              />
              <div className="mb-3 position-relative z-1">
                <span className="avatar avatar-lg bg-danger text-white">
                  <i className="ti ti-trash fs-24" />
                </span>
              </div>
              <h5 className="fw-bold mb-1 position-relative z-1">
                Delete Confirmation
              </h5>
              <p className="mb-3 position-relative z-1">
                Are you sure want to delete?
              </p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light position-relative z-1 me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link
                  to=""
                  className="btn btn-danger position-relative z-1"
                  data-bs-dismiss="modal"
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

export default Modals;
