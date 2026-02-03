
import { Link } from "react-router";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import Footer from "../../../../../../core/common/footer/footer";


const UiAvatar = () => {
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
              <h4 className="fs-18 fw-semibold mb-0">Avatars</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Base UI</Link>
                </li>
                <li className="breadcrumb-item active">Avatars</li>
              </ol>
            </div>
          </div>
          {/* End Page Header */}
          {/* start row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card card-h-100">
                <div className="card-header">
                  <h5 className="card-title">Avatars</h5>
                </div>
                <div className="card-body">
                  <div className="d-flex align flex-wrap gap-2">
                    <span className="avatar avatar-xl me-2 avatar-rounded">
                      <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-xl me-2 avatar-radius-0">
                      <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-xl me-2">
                      <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                    </span>
                    <span className="avatar avatar-xl bg-primary avatar-rounded">
                      <span className="avatar-title">SR</span>
                    </span>
                    <span className="avatar avatar-xl bg-success avatar-radius-0">
                      <span className="avatar-title">SR</span>
                    </span>
                    <span className="avatar avatar-xl bg-danger">
                      <span className="avatar-title">SR</span>
                    </span>
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
                  <h5 className="card-title">Avatar Sizes</h5>
                </div>
                <div className="card-body">
                  <span className="avatar avatar-xss me-2">
                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                  </span>
                  <span className="avatar avatar-xs me-2">
                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                  </span>
                  <span className="avatar avatar-sm me-2">
                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                  </span>
                  <span className="avatar avatar-md me-2">
                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                  </span>
                  <span className="avatar avatar-lg me-2">
                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                  </span>
                  <span className="avatar avatar-xl me-2">
                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                  </span>
                  <span className="avatar avatar-xxl me-2">
                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                  </span>
                  <span className="avatar avatar-xxxl me-2">
                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                  </span>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          {/* start row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Avatar with Status</h5>
                </div>
                <div className="card-body">
                  <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="img" />
                  </span>
                  <span className="avatar avatar-sm online me-2 avatar-rounded">
                    <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="img" />
                  </span>
                  <span className="avatar avatar-md me-2 online avatar-rounded">
                    <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="img" />
                  </span>
                  <span className="avatar avatar-lg me-2 away avatar-rounded">
                    <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="img" />
                  </span>
                  <span className="avatar avatar-xl me-2 online avatar-rounded">
                    <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="img" />
                  </span>
                  <span className="avatar avatar-xxl me-2 offline avatar-rounded">
                    <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="img" />
                  </span>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Avatar with Badge</h5>
                </div>
                <div className="card-body">
                  <span className="avatar avatar-xs me-2 avatar-rounded">
                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                    <span className="badge rounded-pill bg-primary avatar-badge">
                      2
                    </span>
                  </span>
                  <span className="avatar avatar-sm me-2 avatar-rounded">
                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                    <span className="badge rounded-pill bg-secondary avatar-badge">
                      5
                    </span>
                  </span>
                  <span className="avatar avatar-md me-2 avatar-rounded">
                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                    <span className="badge rounded-pill bg-warning avatar-badge">
                      1
                    </span>
                  </span>
                  <span className="avatar avatar-lg me-2 avatar-rounded">
                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                    <span className="badge rounded-pill bg-info avatar-badge">
                      7
                    </span>
                  </span>
                  <span className="avatar avatar-xl me-2 avatar-rounded">
                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                    <span className="badge rounded-pill bg-success avatar-badge">
                      3
                    </span>
                  </span>
                  <span className="avatar avatar-xxl me-2 avatar-rounded">
                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                    <span className="badge rounded-pill bg-danger avatar-badge">
                      9
                    </span>
                  </span>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Solid Background Color</h5>
                </div>
                <div className="card-body">
                  <span className="avatar bg-primary avatar-rounded">
                    <span className="avatar-title">JD</span>
                  </span>
                  <span className="avatar bg-secondary avatar-rounded">
                    <span className="avatar-title">SR</span>
                  </span>
                  <span className="avatar bg-success avatar-rounded">
                    <span className="avatar-title">BJ</span>
                  </span>
                  <span className="avatar bg-info avatar-rounded">
                    <span className="avatar-title">AD</span>
                  </span>
                  <span className="avatar bg-warning avatar-rounded">
                    <span className="avatar-title">CB</span>
                  </span>
                  <span className="avatar bg-danger avatar-rounded">
                    <span className="avatar-title">KL</span>
                  </span>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Soft Background Color</h5>
                </div>
                <div className="card-body">
                  <span className="avatar bg-primary-subtle rounded">
                    <span className="avatar-title text-primary">JD</span>
                  </span>
                  <span className="avatar bg-secondary-subtle rounded">
                    <span className="avatar-title text-secondary">SR</span>
                  </span>
                  <span className="avatar bg-success-subtle rounded">
                    <span className="avatar-title text-success">BJ</span>
                  </span>
                  <span className="avatar bg-info-subtle rounded">
                    <span className="avatar-title text-info">AD</span>
                  </span>
                  <span className="avatar bg-warning-subtle rounded">
                    <span className="avatar-title text-warning">CB</span>
                  </span>
                  <span className="avatar bg-danger-subtle rounded">
                    <span className="avatar-title text-danger">KL</span>
                  </span>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Avatar Group - Square</h5>
                </div>
                <div className="card-body">
                  <div className="avatar-list-stacked avatar-group-lg mb-3">
                    <span className="avatar">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-04.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-04.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-04.jpg"
                        alt="img"
                      />
                    </span>
                    <Link className="avatar bg-primary" to="#">
                      +8
                    </Link>
                  </div>
                  <div className="avatar-list-stacked mb-3">
                    <span className="avatar">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-04.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-04.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-04.jpg"
                        alt="img"
                      />
                    </span>
                    <Link className="avatar bg-primary" to="#">
                      +8
                    </Link>
                  </div>
                  <div className="avatar-list-stacked avatar-group-sm">
                    <span className="avatar">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-04.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-04.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-04.jpg"
                        alt="img"
                      />
                    </span>
                    <Link className="avatar bg-primary" to="#">
                      +8
                    </Link>
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
                  <h5 className="card-title">Avatar Group - Rounded</h5>
                </div>
                <div className="card-body">
                  <div className="avatar-list-stacked avatar-group-lg mb-3">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-05.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-05.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-05.jpg"
                        alt="img"
                      />
                    </span>
                    <Link
                      className="avatar bg-primary avatar-rounded"
                      to="#"
                    >
                      +8
                    </Link>
                  </div>
                  <div className="avatar-list-stacked mb-3">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-05.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-05.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-05.jpg"
                        alt="img"
                      />
                    </span>
                    <Link
                      className="avatar bg-primary avatar-rounded"
                      to="#"
                    >
                      +8
                    </Link>
                  </div>
                  <div className="avatar-list-stacked avatar-group-sm">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-05.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-05.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-05.jpg"
                        alt="img"
                      />
                    </span>
                    <Link
                      className="avatar bg-primary avatar-rounded"
                      to="#"
                    >
                      +8
                    </Link>
                  </div>
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
       <Footer/>
        {/* End Footer */}
      </div>
      {/* ========================
			End Page Content
		========================= */}
    </>
  );
};

export default UiAvatar;
