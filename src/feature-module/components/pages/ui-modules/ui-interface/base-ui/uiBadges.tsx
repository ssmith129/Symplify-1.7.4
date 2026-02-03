
import { Link } from "react-router";
import Footer from "../../../../../../core/common/footer/footer";

const UiBadges = () => {
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
              <h4 className="fs-18 fw-semibold mb-0">Badges</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Base UI</Link>
                </li>
                <li className="breadcrumb-item active">Badges</li>
              </ol>
            </div>
          </div>
          {/* End Page Header */}
          {/* start row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Default Badges</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-xl mb-3">
                    Use the <span className="text-secondary">badge</span> class
                    to show a default badge.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge bg-primary">Primary</span>
                    <span className="badge bg-secondary">Secondary</span>
                    <span className="badge bg-success">Success</span>
                    <span className="badge bg-danger">Danger</span>
                    <span className="badge bg-warning">Warning</span>
                    <span className="badge bg-info">Info</span>
                    <span className="badge bg-light text-dark">Light</span>
                    <span className="badge bg-dark text-white">Dark</span>
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
                  <h5 className="card-title">Rounded Badges</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p>
                    Use the <code>.rounded-pill</code> to create a soft badge
                    more rounded.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge rounded-pill bg-primary">
                      Primary
                    </span>
                    <span className="badge rounded-pill bg-secondary">
                      Secondary
                    </span>
                    <span className="badge rounded-pill bg-success">
                      Success
                    </span>
                    <span className="badge rounded-pill bg-danger">Danger</span>
                    <span className="badge rounded-pill bg-warning">
                      Warning
                    </span>
                    <span className="badge rounded-pill bg-info">Info</span>
                    <span className="badge rounded-pill bg-light text-dark">
                      Light
                    </span>
                    <span className="badge rounded-pill bg-dark text-white">
                      Dark
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
                  <h5 className="card-title">Soft Badges</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-xl mb-3">
                    Use the <code>badge-soft-</code> class to create a softer
                    badge.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge badge-soft-primary">Primary</span>
                    <span className="badge badge-soft-secondary">
                      Secondary
                    </span>
                    <span className="badge badge-soft-success">Success</span>
                    <span className="badge badge-soft-danger">Danger</span>
                    <span className="badge badge-soft-warning">Warning</span>
                    <span className="badge badge-soft-info">Info</span>
                    <span className="badge badge-soft-light">Light</span>
                    <span className="badge badge-soft-dark">Dark</span>
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
                  <h5 className="card-title">Soft Rounded Badges</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-xl mb-3">
                    Use the <code>rounded-pill badge-soft-</code> to create a
                    soft badge more rounded
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge rounded-pill badge-soft-primary">
                      Primary
                    </span>
                    <span className="badge rounded-pill badge-soft-secondary">
                      Secondary
                    </span>
                    <span className="badge rounded-pill badge-soft-success">
                      Success
                    </span>
                    <span className="badge rounded-pill badge-soft-danger">
                      Danger
                    </span>
                    <span className="badge rounded-pill badge-soft-warning">
                      Warning
                    </span>
                    <span className="badge rounded-pill badge-soft-info">
                      Info
                    </span>
                    <span className="badge rounded-pill badge-soft-light text-dark">
                      Light
                    </span>
                    <span className="badge rounded-pill badge-soft-dark">
                      Dark
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
                  <h5 className="card-title">Outline Badges</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-xl mb-3">
                    Use the <code>badge-outline-</code> to create a badge with
                    the outline.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge badge-outline-primary">Primary</span>
                    <span className="badge badge-outline-secondary">
                      Secondary
                    </span>
                    <span className="badge badge-outline-success">Success</span>
                    <span className="badge badge-outline-danger">Danger</span>
                    <span className="badge badge-outline-warning">Warning</span>
                    <span className="badge badge-outline-info">Info</span>
                    <span className="badge badge-outline-light text-dark">
                      Light
                    </span>
                    <span className="badge badge-outline-dark">Dark</span>
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
                  <h5 className="card-title">Outline Rounded Badges</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-xl mb-3">
                    Use the <code>rounded-pill badge-outline-</code> class to
                    create a outline pill badge.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge rounded-pill badge-outline-primary">
                      Primary
                    </span>
                    <span className="badge rounded-pill badge-outline-secondary">
                      Secondary
                    </span>
                    <span className="badge rounded-pill badge-outline-success">
                      Success
                    </span>
                    <span className="badge rounded-pill badge-outline-danger">
                      Danger
                    </span>
                    <span className="badge rounded-pill badge-outline-warning">
                      Warning
                    </span>
                    <span className="badge rounded-pill badge-outline-info">
                      Info
                    </span>
                    <span className="badge rounded-pill badge-outline-light text-dark">
                      Light
                    </span>
                    <span className="badge rounded-pill badge-outline-dark">
                      Dark
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
                  <h5 className="card-title">Soft Border Badges</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-xl mb-3">
                    Use the <code>badge-border</code> and
                    <code>badge-soft-</code> with below mentioned modifier
                    classes to make badges with border &amp; soft backgorund.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge badge-soft-primary border border-primary">
                      Primary
                    </span>
                    <span className="badge badge-soft-secondary border border-secondary">
                      Secondary
                    </span>
                    <span className="badge badge-soft-success border border-success">
                      Success
                    </span>
                    <span className="badge badge-soft-danger border border-danger">
                      Danger
                    </span>
                    <span className="badge badge-soft-warning border border-warning">
                      Warning
                    </span>
                    <span className="badge badge-soft-info border border-info">
                      Info
                    </span>
                    <span className="badge badge-soft-light border border-light text-dark">
                      Light
                    </span>
                    <span className="badge badge-soft-dark border border-dark">
                      Dark
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
                  <h5 className="card-title">Soft Border Rounded Badges</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-xl mb-3">
                    Use the <code>badge-border</code> and
                    <code>badge-soft-</code> with below mentioned modifier
                    classes to make badges with border &amp; soft backgorund.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge rounded-pill badge-soft-primary border border-primary">
                      Primary
                    </span>
                    <span className="badge rounded-pill badge-soft-secondary border border-secondary">
                      Secondary
                    </span>
                    <span className="badge rounded-pill badge-soft-success border border-success">
                      Success
                    </span>
                    <span className="badge rounded-pill badge-soft-danger border border-danger">
                      Danger
                    </span>
                    <span className="badge rounded-pill badge-soft-warning border border-warning">
                      Warning
                    </span>
                    <span className="badge rounded-pill badge-soft-info border border-info">
                      Info
                    </span>
                    <span className="badge rounded-pill badge-soft-light border border-light text-dark">
                      Light
                    </span>
                    <span className="badge rounded-pill badge-soft-dark border border-dark">
                      Dark
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
                  <h5 className="card-title">Gradient Badges</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge bg-primary-gradient">Primary</span>
                    <span className="badge bg-secondary-gradient">
                      Secondary
                    </span>
                    <span className="badge bg-success-gradient">Success</span>
                    <span className="badge bg-danger-gradient">Danger</span>
                    <span className="badge bg-warning-gradient">Warning</span>
                    <span className="badge bg-info-gradient">Info</span>
                    <span className="badge bg-orange-gradient">orange</span>
                    <span className="badge bg-purple-gradient">purple</span>
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
                  <h5 className="card-title">Gradient Pill Badges</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge rounded-pill bg-primary-gradient">
                      Primary
                    </span>
                    <span className="badge rounded-pill bg-secondary-gradient">
                      Secondary
                    </span>
                    <span className="badge rounded-pill bg-success-gradient">
                      Success
                    </span>
                    <span className="badge rounded-pill bg-danger-gradient">
                      Danger
                    </span>
                    <span className="badge rounded-pill bg-warning-gradient">
                      Warning
                    </span>
                    <span className="badge rounded-pill bg-info-gradient">
                      Info
                    </span>
                    <span className="badge rounded-pill bg-orange-gradient">
                      orange
                    </span>
                    <span className="badge rounded-pill bg-purple-gradient">
                      purple
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
                  <h5 className="card-title">Badge Usage</h5>
                </div>
                {/* end card header */}
                <div className="card-body d-flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="btn btn-primary btn-md position-relative"
                  >
                    Inbox
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                      99+
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-md position-relative"
                  >
                    Profile
                    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-warning border border-light rounded-circle">
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-md btn-icon position-relative"
                  >
                    <i className="ti ti-chevron-left" />
                    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-warning border border-light rounded-circle">
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-light rounded-circle btn-md btn-icon position-relative"
                  >
                    <i className="ti ti-bell-filled  text-dark" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-light rounded-circle btn-md btn-icon position-relative"
                  >
                    <i className="ti ti-baseline-density-medium text-dark" />
                    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-warning border border-light rounded-circle">
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </button>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Buttons With Badges </h5>
                </div>
                {/* end card header */}
                <div className="card-body d-flex flex-wrap gap-2">
                  <button type="button" className="btn btn-primary my-1 me-2">
                    Notifications
                    <span className="badge ms-2 bg-secondary">3</span>
                  </button>
                  <button type="button" className="btn btn-secondary my-1 me-2">
                    Notifications
                    <span className="badge ms-2 bg-white text-dark">24</span>
                  </button>
                  <button type="button" className="btn btn-success my-1 me-2">
                    Notifications
                    <span className="badge ms-2 bg-danger">15</span>
                  </button>
                  <button type="button" className="btn btn-danger my-1 me-2">
                    Notifications
                    <span className="badge ms-2 bg-white text-dark">24</span>
                  </button>
                  <button type="button" className="btn btn-warning my-1 me-2">
                    Notifications
                    <span className="badge ms-2 bg-secondary">3</span>
                  </button>
                  <button type="button" className="btn btn-info my-1 me-2">
                    Notifications
                    <span className="badge ms-2 bg-danger">15</span>
                  </button>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Headings</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <h1 className="mb-3">
                    Example heading
                    <span className="badge bg-primary">New</span>
                  </h1>
                  <h2 className="mb-3">
                    Example heading
                    <span className="badge bg-secondary">New</span>
                  </h2>
                  <h3 className="mb-3">
                    Example heading
                    <span className="badge bg-success">New</span>
                  </h3>
                  <h4 className="mb-3">
                    Example heading <span className="badge bg-info">New</span>
                  </h4>
                  <h5 className="mb-3">
                    Example heading
                    <span className="badge bg-warning">New</span>
                  </h5>
                  <h6 className="mb-0">
                    Example heading <span className="badge bg-danger">New</span>
                  </h6>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
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

export default UiBadges;
