import { Link } from "react-router";

import Lightbox from "yet-another-react-lightbox";
import media15 from "/assets/img/media/media-15.jpg";
import media16 from "/assets/img/media/media-16.jpg";
import media17 from "/assets/img/media/media-17.jpg";
import media18 from "/assets/img/media/media-18.jpg";
import media19 from "/assets/img/media/media-19.jpg";
import media20 from "/assets/img/media/media-20.jpg";
import media21 from "/assets/img/media/media-21.jpg";
import media22 from "/assets/img/media/media-22.jpg";
import media23 from "/assets/img/media/media-23.jpg";
import media24 from "/assets/img/media/media-24.jpg";
import React from "react";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
8;

const SearchList = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const [open10, setOpen10] = React.useState(false);
  const [open11, setOpen11] = React.useState(false);
  const [open12, setOpen12] = React.useState(false);
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Container */}
        <div className="content">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="d-flex align-items-center">
                  <input
                    type="text"
                    className="form-control flex-fill me-3"
                    defaultValue="Symplify"
                  />
                  <button type="submit" className="btn btn-primary">
                    Search
                  </button>
                </div>
              </form>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
          <div className="card">
            <div className="card-body">
              <h6 className="mb-3 text-capitalize">
                Search result for "Symplify"
              </h6>
              {/* start row */}
              <div className="row">
                <div className="col-md-6">
                  <div className="card shadow-none">
                    <div className="card-body">
                      <Link
                        to="#"
                        className="text-info text-truncate mb-2 text-wrap"
                      >
                        https://themeforest.net/search/Symplify
                      </Link>
                      <p className="text-truncate line-clamb-2 mb-2">
                        Symplify - Html, Vue 3, Angular 17+, React &amp; Node
                        HR Project Management &amp; CRM Admin Dashboard Template
                      </p>
                      <div className="d-flex align-items-center flex-wrap row-gap-2">
                        <span className="text-gray-9 me-3 pe-3 border-end">
                          1.7K Sales
                        </span>
                        <div className="text-gray-9 d-flex align-items-center me-3 pe-3 border-end">
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-gray-2 me-1" />
                          (45)
                        </div>
                        <span className="text-gray-9">$35</span>
                      </div>
                    </div>
                    {/* end card body */}
                  </div>
                  {/* end card */}
                </div>
                {/* end col */}
              </div>
              {/* end row */}
              <h6 className="mb-3">Images</h6>
              {/* start row */}
              <div className="row g-3">
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    onClick={() => setOpen1(true)}
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-15.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                  <Lightbox
                    open={open1}
                    close={() => setOpen1(false)}
                    slides={[
                      { src: media15 },
                      { src: media16 },
                      { src: media17 },
                      { src: media18 },
                      { src: media19 },
                      { src: media20 },
                      { src: media21 },
                      { src: media22 },
                      { src: media23 },
                      { src: media24 },
                    ]}
                  />
                </div>
                {/* end col */}
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    onClick={() => setOpen2(true)}
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-16.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                  <Lightbox
                    open={open2}
                    close={() => setOpen2(false)}
                    slides={[
                      { src: media15 },
                      { src: media16 },
                      { src: media17 },
                      { src: media18 },
                      { src: media19 },
                      { src: media20 },
                      { src: media21 },
                      { src: media22 },
                      { src: media23 },
                      { src: media24 },
                    ]}
                  />
                </div>
                {/* end col */}
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    onClick={() => setOpen3(true)}
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-17.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                  <Lightbox
                    open={open3}
                    close={() => setOpen3(false)}
                    slides={[
                      { src: media15 },
                      { src: media16 },
                      { src: media17 },
                      { src: media18 },
                      { src: media19 },
                      { src: media20 },
                      { src: media21 },
                      { src: media22 },
                      { src: media23 },
                      { src: media24 },
                    ]}
                  />
                </div>
                {/* end col */}
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    onClick={() => setOpen4(true)}
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-18.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                  <Lightbox
                    open={open4}
                    close={() => setOpen4(false)}
                    slides={[
                      { src: media15 },
                      { src: media16 },
                      { src: media17 },
                      { src: media18 },
                      { src: media19 },
                      { src: media20 },
                      { src: media21 },
                      { src: media22 },
                      { src: media23 },
                      { src: media24 },
                    ]}
                  />
                </div>
                {/* end col */}
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    onClick={() => setOpen5(true)}
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-19.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                  <Lightbox
                    open={open5}
                    close={() => setOpen5(false)}
                    slides={[
                      { src: media15 },
                      { src: media16 },
                      { src: media17 },
                      { src: media18 },
                      { src: media19 },
                      { src: media20 },
                      { src: media21 },
                      { src: media22 },
                      { src: media23 },
                      { src: media24 },
                    ]}
                  />
                </div>
                {/* end col */}
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    onClick={() => setOpen6(true)}
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-20.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                  <Lightbox
                    open={open6}
                    close={() => setOpen6(false)}
                    slides={[
                      { src: media15 },
                      { src: media16 },
                      { src: media17 },
                      { src: media18 },
                      { src: media19 },
                      { src: media20 },
                      { src: media21 },
                      { src: media22 },
                      { src: media23 },
                      { src: media24 },
                    ]}
                  />
                </div>
                {/* end col */}
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    onClick={() => setOpen7(true)}
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-21.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                  <Lightbox
                    open={open7}
                    close={() => setOpen7(false)}
                    slides={[
                      { src: media15 },
                      { src: media16 },
                      { src: media17 },
                      { src: media18 },
                      { src: media19 },
                      { src: media20 },
                      { src: media21 },
                      { src: media22 },
                      { src: media23 },
                      { src: media24 },
                    ]}
                  />
                </div>
                {/* end col */}
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    onClick={() => setOpen8(true)}
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-22.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                  <Lightbox
                    open={open8}
                    close={() => setOpen8(false)}
                    slides={[
                      { src: media15 },
                      { src: media16 },
                      { src: media17 },
                      { src: media18 },
                      { src: media19 },
                      { src: media20 },
                      { src: media21 },
                      { src: media22 },
                      { src: media23 },
                      { src: media24 },
                    ]}
                  />
                </div>
                {/* end col */}
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    onClick={() => setOpen9(true)}
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-23.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                  <Lightbox
                    open={open9}
                    close={() => setOpen9(false)}
                    slides={[
                      { src: media15 },
                      { src: media16 },
                      { src: media17 },
                      { src: media18 },
                      { src: media19 },
                      { src: media20 },
                      { src: media21 },
                      { src: media22 },
                      { src: media23 },
                      { src: media24 },
                    ]}
                  />
                </div>
                {/* end col */}
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    onClick={() => setOpen10(true)}
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-24.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                  <Lightbox
                    open={open10}
                    close={() => setOpen10(false)}
                    slides={[
                      { src: media15 },
                      { src: media16 },
                      { src: media17 },
                      { src: media18 },
                      { src: media19 },
                      { src: media20 },
                      { src: media21 },
                      { src: media22 },
                      { src: media23 },
                      { src: media24 },
                    ]}
                  />
                </div>
                {/* end col */}
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    onClick={() => setOpen11(true)}
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-25.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                  <Lightbox
                    open={open11}
                    close={() => setOpen11(false)}
                    slides={[
                      { src: media15 },
                      { src: media16 },
                      { src: media17 },
                      { src: media18 },
                      { src: media19 },
                      { src: media20 },
                      { src: media21 },
                      { src: media22 },
                      { src: media23 },
                      { src: media24 },
                    ]}
                  />
                </div>
                {/* end col */}
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    onClick={() => setOpen12(true)}
                    className="gallery-item"
                  >
                    <ImageWithBasePath
                      src="assets/img/media/media-26.jpg"
                      className="rounded"
                      alt="img"
                    />
                  </Link>
                  <Lightbox
                    open={open12}
                    close={() => setOpen12(false)}
                    slides={[
                      { src: media15 },
                      { src: media16 },
                      { src: media17 },
                      { src: media18 },
                      { src: media19 },
                      { src: media20 },
                      { src: media21 },
                      { src: media22 },
                      { src: media23 },
                      { src: media24 },
                    ]}
                  />
                </div>
                {/* end col */}
              </div>
              {/* end row */}
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
        {/* End Container */}

        {/* Footer Start */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©{" "}
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
      {/* Start Add Customer */}
      <div className="modal fade" id="add-contact">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Start modal header */}
            <div className="modal-header">
              <div className="page-title">
                <h5>Add Contact</h5>
              </div>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            {/* End modal header */}
            <form>
              <div className="modal-body">
                <div className="new-employee-field">
                  <div className="profile-pic-upload">
                    <div className="profile-pic">
                      <span>
                        <i
                          data-feather="plus-circle"
                          className="plus-down-add"
                        />
                        Add Image
                      </span>
                    </div>
                    <div className="mb-3">
                      <div className="image-upload mb-0">
                        <input type="file" />
                        <div className="image-uploads">
                          <h4>Upload Image</h4>
                        </div>
                      </div>
                      <p className="mt-2">JPEG, PNG up to 2 MB</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      First Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      Last Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label className="form-label">
                      Email<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label className="form-label">
                      Phone<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="tel" className="form-control" />
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Contact Type <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Select</option>
                        <option>Admin</option>
                        <option>Salesman</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                      <span className="status-label">Status</span>
                      <input
                        type="checkbox"
                        id="user2"
                        className="check"
                        defaultChecked
                      />
                      <label htmlFor="user2" className="checktoggle"></label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn me-2 btn-light fs-13 fw-medium p-2 px-3 shadow-none"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary fs-13 fw-medium p-2 px-3"
                >
                  Add Contact
                </button>
              </div>
            </form>
          </div>
          {/* End modal content*/}
        </div>
        {/* End modal dialog*/}
      </div>
      {/* / End Add Customer */}
      {/* Start Edit Customer */}
      <div className="modal fade" id="edit-contact">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Start modal header */}
            <div className="modal-header">
              <div className="page-title">
                <h5>Edit Contact</h5>
              </div>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            {/* End modal header */}
            <form>
              <div className="modal-body">
                <div className="new-employee-field">
                  <div className="profile-pic-upload image-field">
                    <div className="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0">
                      <div className="position-relative d-flex align-items-center">
                        <ImageWithBasePath
                          src="assets/img/users/user-01.jpg"
                          className="avatar avatar-xl "
                          alt=""
                        />
                        <Link
                          to="#"
                          className="rounded-trash trash-top d-flex align-items-center justify-content-center"
                        >
                          <i className="isax isax-trash" />
                        </Link>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="image-upload mb-0">
                        <input type="file" />
                        <div className="image-uploads">
                          <h4>Change Image</h4>
                        </div>
                      </div>
                      <p className="mt-2">JPEG, PNG up to 2 MB</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      First Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Carl"
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">
                      Last Name<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Evans"
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label className="form-label">
                      Email<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue="carlevans@example.com"
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label className="form-label">
                      Phone<span className="text-danger ms-1">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      defaultValue={+12163547758}
                    />
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-0">
                      <label className="form-label">
                        Contact Type <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Select</option>
                        <option>Admin</option>
                        <option>Salesman</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn me-2 btn-light fs-13 fw-medium p-2 px-3 shadow-none"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary fs-13 fw-medium p-2 px-3"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
          {/* End modal content*/}
        </div>
        {/* End modal dialog*/}
      </div>
      {/* / End Edit Customer */}
      {/* Start delete modal */}
      <div className="modal fade" id="delete-modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Start Page Wrapper */}
            <div className="page-wrapper-new p-0">
              {/* Start Container */}
              <div className="content p-5 px-3 text-center">
                <span className="rounded-circle d-inline-flex p-2 bg-danger-subtle mb-2">
                  <i className="ti ti-trash fs-24 text-danger" />
                </span>
                <h4 className="fs-20 fw-bold mb-2 mt-1">Delete Contact</h4>
                <p className="mb-0 fs-16">
                  Are you sure you want to delete contact?
                </p>
                <div className="modal-footer-btn mt-3 d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn me-2 btn-light fs-13 fw-medium p-2 px-3 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary fs-13 fw-medium p-2 px-3"
                  >
                    Yes Delete
                  </button>
                </div>
              </div>
              {/* End Container */}
            </div>
            {/* Start Page Wrapper */}
          </div>
          {/* End modal content*/}
        </div>
        {/* End modal dialog*/}
      </div>
      {/* / End delete modal */}
    </>
  );
};

export default SearchList;
