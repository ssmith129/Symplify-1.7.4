
import { Link } from "react-router";

const UiSpinner = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
            <div className="flex-grow-1">
              <h4 className="fs-18 fw-semibold mb-0">Spinners</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Base UI</Link>
                </li>
                <li className="breadcrumb-item active">Spinners</li>
              </ol>
            </div>
          </div>
          {/* End page header */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Border Spinner</h5>
                </div>
                {/* end card-header */}
                <div className="card-body">
                  <p>
                    Use the border spinners for a lightweight loading indicator.
                  </p>
                  <div className="spinner-border m-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Colors</h5>
                </div>
                {/* end card-header */}
                <div className="card-body">
                  <p>
                    You can use any of our text color utilities on the standard
                    spinner.
                  </p>
                  <div
                    className="spinner-border text-primary m-2"
                    role="status"
                  />
                  <div
                    className="spinner-border text-secondary m-2"
                    role="status"
                  />
                  <div
                    className="spinner-border text-success m-2"
                    role="status"
                  />
                  <div
                    className="spinner-border text-danger m-2"
                    role="status"
                  />
                  <div
                    className="spinner-border text-warning m-2"
                    role="status"
                  />
                  <div className="spinner-border text-info m-2" role="status" />
                  <div
                    className="spinner-border text-light m-2"
                    role="status"
                  />
                  <div className="spinner-border text-dark m-2" role="status" />
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Growing Spinner</h5>
                </div>
                {/* end card-header */}
                <div className="card-body">
                  <p>
                    If you don’t fancy a border spinner, switch to the grow
                    spinner. While it doesn’t technically spin, it does
                    repeatedly grow!
                  </p>
                  <div className="spinner-grow m-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card card-h-100">
                <div className="card-header">
                  <h5 className="card-title">Color Growing Spinner</h5>
                </div>
                {/* end card-header */}
                <div className="card-body">
                  <p>
                    You can use any of our text color utilities on the standard
                    spinner.
                  </p>
                  <div
                    className="spinner-grow text-primary m-2"
                    role="status"
                  />
                  <div
                    className="spinner-grow text-secondary m-2"
                    role="status"
                  />
                  <div
                    className="spinner-grow text-success m-2"
                    role="status"
                  />
                  <div className="spinner-grow text-danger m-2" role="status" />
                  <div
                    className="spinner-grow text-warning m-2"
                    role="status"
                  />
                  <div className="spinner-grow text-info m-2" role="status" />
                  <div className="spinner-grow text-light m-2" role="status" />
                  <div className="spinner-grow text-dark m-2" role="status" />
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Alignment</h5>
                </div>
                {/* end card-header */}
                <div className="card-body">
                  <p>
                    Use flexbox utilities, float utilities, or text alignment
                    utilities to place spinners exactly where you need them in
                    any situation.
                  </p>
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status" />
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Placement</h5>
                </div>
                {/* end card-header */}
                <div className="card-body">
                  <p>
                    Use <code>flexbox utilities</code>,
                    <code>float utilities</code>, or <code>text alignment</code>
                    utilities to place spinners exactly where you need them in
                    any situation.
                  </p>
                  <div className="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <div
                      className="spinner-border ms-auto"
                      role="status"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Size</h5>
                </div>
                {/* end card-header */}
                <div className="card-body">
                  <p>
                    Add <code>.spinner-border-sm</code> and
                    <code>.spinner-border.avatar-**</code> to make a smaller
                    spinner that can quickly be used within other components.
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <div
                        className="spinner-border avatar-lg text-primary m-2"
                        role="status"
                      />
                      <div
                        className="spinner-grow avatar-lg text-secondary m-2"
                        role="status"
                      />
                    </div>
                    {/* end col */}
                    <div className="col-lg-6">
                      <div
                        className="spinner-border avatar-md text-primary m-2"
                        role="status"
                      />
                      <div
                        className="spinner-grow avatar-md text-secondary m-2"
                        role="status"
                      />
                    </div>
                    {/* end col */}
                    <div className="col-lg-6">
                      <div
                        className="spinner-border avatar-sm text-primary m-2"
                        role="status"
                      />
                      <div
                        className="spinner-grow avatar-sm text-secondary m-2"
                        role="status"
                      />
                    </div>
                    {/* end col */}
                    <div className="col-lg-6">
                      <div
                        className="spinner-border spinner-border-sm m-2"
                        role="status"
                      />
                      <div
                        className="spinner-grow spinner-grow-sm m-2"
                        role="status"
                      />
                    </div>
                    {/* end col */}
                  </div>
                  {/*end row */}
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card card-h-100">
                <div className="card-header">
                  <h5 className="card-title">Buttons Spinner</h5>
                </div>
                {/* end card-header */}
                <div className="card-body">
                  <p>
                    Use spinners within buttons to indicate an action is
                    currently processing or taking place. You may also swap the
                    text out of the spinner element and utilize button text as
                    needed.
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="d-flex flex-wrap gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          disabled
                        >
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Loading...</span>
                        </button>
                        <button
                          className="btn btn-primary"
                          type="button"
                          disabled
                        >
                          <span
                            className="spinner-border spinner-border-sm me-1"
                            role="status"
                            aria-hidden="true"
                          />
                          Loading...
                        </button>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-lg-6">
                      <div className="d-flex flex-wrap gap-2">
                        <button
                          className="btn btn-primary"
                          type="button"
                          disabled
                        >
                          <span
                            className="spinner-grow spinner-grow-sm"
                            role="status"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">Loading...</span>
                        </button>
                        <button
                          className="btn btn-primary"
                          type="button"
                          disabled
                        >
                          <span
                            className="spinner-grow spinner-grow-sm me-1"
                            role="status"
                            aria-hidden="true"
                          />
                          Loading...
                        </button>
                      </div>
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* End Content */}
        {/* Start Footer */}
        <div className="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top">
          <p className="text-dark mb-0">
            ©
            <Link to="#" className="link-primary">
              Kanakku
            </Link>
            , All Rights Reserved
          </p>
          <p className="text-dark">Version : 1.3.8</p>
        </div>
        {/* End Footer */}
      </div>
      {/* ========================
			End Page Content
		========================= */}
    </>
  );
};

export default UiSpinner;
