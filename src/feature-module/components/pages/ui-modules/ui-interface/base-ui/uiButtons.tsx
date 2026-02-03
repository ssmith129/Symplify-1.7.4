
import { Link } from "react-router";
import Footer from "../../../../../../core/common/footer/footer";

const UiButtons = () => {
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
              <h4 className="fs-18 fw-semibold mb-0">Buttons</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Base UI</Link>
                </li>
                <li className="breadcrumb-item active">Buttons</li>
              </ol>
            </div>
          </div>
          {/* End Page Header */}
          {/* start row */}
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Default Buttons</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-xl mb-3">
                    Use the <span className="text-secondary">btn</span> class to
                    show the default button style.
                  </p>
                  <div className="d-flex align-items-center flex-wrap gap-2">
                    <button type="button" className="btn btn-primary">
                      Primary
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Secondary
                    </button>
                    <button type="button" className="btn btn-success">
                      Success
                    </button>
                    <button type="button" className="btn btn-danger">
                      Danger
                    </button>
                    <button type="button" className="btn btn-warning">
                      Warning
                    </button>
                    <button type="button" className="btn btn-info">
                      Info
                    </button>
                    <button type="button" className="btn btn-light">
                      Light
                    </button>
                    <button type="button" className="btn btn-dark">
                      Dark
                    </button>
                    <button type="button" className="btn btn-outline-white">
                      White
                    </button>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card*/}
            </div>
            {/* end col */}
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Outline Buttons</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-xl mb-3">
                    Use the <span className="text-secondary">btn-outline-</span>
                    class with the below-mentioned variation to create a button
                    with the outline.
                  </p>
                  <div className="d-flex align-items-center flex-wrap gap-2">
                    <button type="button" className="btn btn-outline-primary">
                      Primary
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      Secondary
                    </button>
                    <button type="button" className="btn btn-outline-success">
                      Success
                    </button>
                    <button type="button" className="btn btn-outline-danger">
                      Danger
                    </button>
                    <button type="button" className="btn btn-outline-warning">
                      Warning
                    </button>
                    <button type="button" className="btn btn-outline-info">
                      Info
                    </button>
                    <button type="button" className="btn btn-outline-light">
                      Light
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                      Dark
                    </button>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card*/}
            </div>
            {/* end col */}
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Rounded Buttons</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-xl mb-3">
                    Use the <span className="text-secondary">rounded-pill</span>
                    class to make a rounded button.
                  </p>
                  <div className="d-flex align-items-center flex-wrap gap-2">
                    <button
                      type="button"
                      className="btn btn-primary rounded-pill"
                    >
                      Primary
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary rounded-pill"
                    >
                      Secondary
                    </button>
                    <button
                      type="button"
                      className="btn btn-success rounded-pill"
                    >
                      Success
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger rounded-pill"
                    >
                      Danger
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning rounded-pill"
                    >
                      Warning
                    </button>
                    <button type="button" className="btn btn-info rounded-pill">
                      Info
                    </button>
                    <button
                      type="button"
                      className="btn btn-light rounded-pill"
                    >
                      Light
                    </button>
                    <button type="button" className="btn btn-dark rounded-pill">
                      Dark
                    </button>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card*/}
            </div>
            {/* end col */}
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Soft Buttons</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-xl mb-3">
                    Use the <span className="text-secondary">btn-soft-</span>
                    class with the below-mentioned variation to create a button
                    with the soft background.
                  </p>
                  <div className="d-flex align-items-center flex-wrap gap-2">
                    <button type="button" className="btn btn-soft-primary">
                      Primary
                    </button>
                    <button type="button" className="btn btn-soft-secondary">
                      Secondary
                    </button>
                    <button type="button" className="btn btn-soft-success">
                      Success
                    </button>
                    <button type="button" className="btn btn-soft-danger">
                      Danger
                    </button>
                    <button type="button" className="btn btn-soft-warning">
                      Warning
                    </button>
                    <button type="button" className="btn btn-soft-info">
                      Info
                    </button>
                    <button type="button" className="btn btn-soft-light">
                      Light
                    </button>
                    <button type="button" className="btn btn-soft-dark">
                      Dark
                    </button>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card*/}
            </div>
            {/* end col */}
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header border-bottom border-dashed d-flex align-items-center">
                  <h4 className="header-title">Gradient Buttons</h4>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-muted">
                    Use the button classes on an <code>&lt;a&gt;</code>,
                    <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code>
                    element.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="btn btn-primary bg-gradient"
                    >
                      Primary
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary bg-gradient"
                    >
                      Secondary
                    </button>
                    <button
                      type="button"
                      className="btn btn-success bg-gradient"
                    >
                      Success
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger bg-gradient"
                    >
                      Danger
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning bg-gradient"
                    >
                      Warning
                    </button>
                    <button type="button" className="btn btn-info bg-gradient">
                      Info
                    </button>
                    <button type="button" className="btn btn-light bg-gradient">
                      Light
                    </button>
                    <button type="button" className="btn btn-dark bg-gradient">
                      Dark
                    </button>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card*/}
            </div>
            {/* end col */}
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Gradient Buttons 2</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-xl mb-3">
                    Use the
                    <span className="text-secondary">bg-*-gradient</span> class
                    to create a gradient button.
                  </p>
                  <div className="btn-list">
                    <button
                      type="button"
                      className="btn  bg-primary-gradient btn-primary btn-effect"
                    >
                      Primary
                    </button>
                    <button
                      type="button"
                      className="btn  bg-secondary-gradient btn-secondary"
                    >
                      Secondary
                    </button>
                    <button
                      type="button"
                      className="btn  bg-success-gradient btn-success"
                    >
                      Success
                    </button>
                    <button
                      type="button"
                      className="btn  bg-danger-gradient btn-danger"
                    >
                      Danger
                    </button>
                    <button
                      type="button"
                      className="btn  bg-warning-gradient btn-warning"
                    >
                      Warning
                    </button>
                    <button
                      type="button"
                      className="btn  bg-info-gradient btn-info"
                    >
                      Info
                    </button>
                    <button
                      type="button"
                      className="btn  bg-light-gradient btn-light"
                    >
                      Light
                    </button>
                    <button
                      type="button"
                      className="btn  bg-dark-gradient btn-dark"
                    >
                      Dark
                    </button>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card*/}
            </div>
            {/* end col */}
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Animation Button</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-xl mb-3">
                    Use the
                    <span className="text-secondary">btn-animation</span> class
                    to create a animation effect.
                  </p>
                  <div className="btn-list">
                    <button
                      type="button"
                      className="btn btn-primary btn-animation "
                      data-text="Primary"
                    >
                      <span>Primary</span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-animation"
                      data-text="Secondary"
                    >
                      <span>Secondary</span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-animation"
                      data-text="Success"
                    >
                      <span>Success</span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-animation"
                      data-text="Danger"
                    >
                      <span>Danger</span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-animation"
                      data-text="Warning"
                    >
                      <span>Warning</span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-info btn-animation"
                      data-text="Info"
                    >
                      <span>Info</span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark btn-animation"
                      data-text="Dark"
                    >
                      <span>Dark</span>
                    </button>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card*/}
            </div>
            {/* end col */}
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Buttons with Label</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-xl mb-3">
                    Use the <span className="text-secondary">btn-label</span>
                    class to create a button with the label.
                  </p>
                  <div className="row row-gap-3">
                    <div className="col-lg-4">
                      <div className="d-flex flex-wrap gap-2">
                        <button
                          type="button"
                          className="btn btn-primary btn-label"
                        >
                          <i className="ti ti-mood-smile label-icon align-middle fs-16 me-2" />
                          Primary
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-label"
                        >
                          <i className="ti ti-alert-triangle label-icon align-middle fs-16 me-2 " />
                          Warning
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="d-flex flex-wrap gap-2">
                        <button
                          type="button"
                          className="btn btn-primary btn-label rounded-pill"
                        >
                          <i className="ti ti-mood-smile label-icon align-middle rounded-pill fs-16 me-2" />
                          Primary
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-label rounded-pill"
                        >
                          <i className="ti ti-checks label-icon align-middle rounded-pill fs-16 me-2" />
                          Success
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="d-flex flex-wrap gap-2">
                        <button
                          type="button"
                          className="btn btn-primary btn-label right"
                        >
                          <i className="ti ti-mood-smile label-icon align-middle fs-16 ms-2" />
                          Primary
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-label right rounded-pill"
                        >
                          <i className="ti ti-checks label-icon align-middle rounded-pill fs-16 ms-2" />
                          Success
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card*/}
            </div>
            {/* end col */}
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Buttons Sizes</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-xl mb-3">
                    Use <span className="text-secondary">btn-lg</span> class to
                    create a large size button and
                    <span className="text-secondary">btn-sm</span> class to
                    create a small size button.
                  </p>
                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <button type="button" className="btn btn-primary btn-lg">
                      Large
                    </button>
                    <button type="button" className="btn btn-success">
                      Normal
                    </button>
                    <button type="button" className="btn btn-danger btn-sm">
                      Small
                    </button>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card*/}
            </div>
            {/* end col */}
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Buttons Toggle States</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-xl mb-3">
                    Use the
                    <span className="text-secondary">
                      data-bs-toggle="button"
                    </span>
                    to toggle a button’s active state.
                  </p>
                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <button
                      type="button"
                      className="btn"
                      data-bs-toggle="button"
                    >
                      Toggle button
                    </button>
                    <button
                      type="button"
                      className="btn active"
                      data-bs-toggle="button"
                      aria-pressed="true"
                    >
                      Active toggle button
                    </button>
                    <button
                      type="button"
                      className="btn"
                      disabled
                      data-bs-toggle="button"
                    >
                      Disabled toggle button
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="button"
                    >
                      Toggle button
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary active"
                      data-bs-toggle="button"
                      aria-pressed="true"
                    >
                      Active toggle button
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      disabled
                      data-bs-toggle="button"
                    >
                      Disabled toggle button
                    </button>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card*/}
            </div>
            {/* end col */}
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Button Tags</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-muted">
                    The <code>.btn</code> classes are designed to be used with
                    the <code>&lt;button&gt;</code> element. However, you can
                    also use these classes on <code>&lt;a&gt;</code> or
                    <code>&lt;input&gt;</code> elements (though some browsers
                    may apply a slightly different rendering).
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <Link className="btn btn-primary" to="#" role="button">
                      Link
                    </Link>
                    <button className="btn btn-primary" type="submit">
                      Button
                    </button>
                    <input
                      className="btn btn-primary"
                      type="button"
                      defaultValue="Input"
                    />
                    <input
                      className="btn btn-primary"
                      type="submit"
                      defaultValue="Submit"
                    />
                    <input
                      className="btn btn-primary"
                      type="reset"
                      defaultValue="Reset"
                    />
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card*/}
            </div>
            {/* end col */}
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Icon Buttons</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-xl mb-3">
                    Use <span className="text-secondary">btn-icon</span> class
                    to wrap icon in button
                  </p>
                  <div className="d-flex align-items-center flex-wrap gap-4">
                    <div className="d-flex align-items-center flex-wrap gap-2">
                      <button className="btn btn-icon btn-primary">
                        <i className="ti ti-bell" />
                      </button>
                      <button className="btn btn-icon btn-secondary">
                        <i className="ti ti-mail" />
                      </button>
                      <button className="btn btn-icon btn-info">
                        <i className="ti ti-edit" />
                      </button>
                      <button className="btn btn-icon btn-danger">
                        <i className="ti ti-trash" />
                      </button>
                    </div>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                      <button className="btn btn-icon btn-outline-primary">
                        <i className="ti ti-bell" />
                      </button>
                      <button className="btn btn-icon btn-outline-secondary">
                        <i className="ti ti-mail" />
                      </button>
                      <button className="btn btn-icon btn-outline-info">
                        <i className="ti ti-edit" />
                      </button>
                      <button className="btn btn-icon btn-outline-danger">
                        <i className="ti ti-trash" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card*/}
            </div>
            {/* end col */}
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Block Buttons</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-xl mb-3">
                    Use the <span className="text-secondary">d-grid</span> class
                    to create a full-width block button.
                  </p>
                  <div className="btn-list d-block">
                    <div className="d-grid gap-2">
                      <button className="btn btn-sm btn-primary" type="button">
                        Button
                      </button>
                      <button className="btn btn-warning" type="button">
                        Button
                      </button>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card*/}
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

export default UiButtons;
