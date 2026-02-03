import { Link } from "react-router";
import { OverlayTrigger, Popover } from "react-bootstrap";

const UiPopovers = () => {
  const popoverRight = (
    <Popover id="popover-right">
      <Popover.Header as="h3">Popover title</Popover.Header>
      <Popover.Body>
        And here's some amazing content. It's very engaging. Right?
      </Popover.Body>
    </Popover>
  );
  const popoverRightOne = (
    <Popover id="popover-right">
      <Popover.Header as="h3">Dismiss on Next Click</Popover.Header>
      <Popover.Body>
        And here's some amazing content. It's very engaging. Right?
      </Popover.Body>
    </Popover>
  );
  const popoverHover = (
    <Popover id="popover-hover">
      <Popover.Header as="h3">Ohh Wow !</Popover.Header>
      <Popover.Body>
        And here's some amazing content. It's very engaging. Right?
      </Popover.Body>
    </Popover>
  );
  const popoverTop = (
    <Popover id="popover-top">
      <Popover.Body>
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
      </Popover.Body>
    </Popover>
  );
  const popoverBottom = (
    <Popover id="popover-bottom">
      <Popover.Body>
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
      </Popover.Body>
    </Popover>
  );
  const popoverRight2 = (
    <Popover id="popover-right">
      <Popover.Body>
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
      </Popover.Body>
    </Popover>
  );
  const popoverLeft = (
    <Popover id="popover-left">
      <Popover.Body>
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
      </Popover.Body>
    </Popover>
  );
  const createPopover = (
    id: string,
    title: string,
    content: string,
    customClass: string
  ) => (
    <Popover id={id} className={customClass}>
      <Popover.Header as="h3">{title}</Popover.Header>
      <Popover.Body>{content}</Popover.Body>
    </Popover>
  );

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
              <h4 className="fs-18 fw-semibold mb-0">Popovers</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Base UI</Link>
                </li>
                <li className="breadcrumb-item active">Popovers</li>
              </ol>
            </div>
          </div>
          {/* End Page Header  */}
          {/* start row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Simple Popover</h5>
                </div>
                <div className="card-body">
                  <p>
                    Popover is a component which displays a box with a content
                    after a click on an element - similar to the tooltip but can
                    contain more content.
                  </p>
                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={popoverRight}
                  >
                    <Link to="#" tabIndex={0} className="btn btn-danger">
                      Click to toggle popover
                    </Link>
                  </OverlayTrigger>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Dismiss on Next Click</h5>
                </div>
                <div className="card-body">
                  <p>
                    Use the <code>focus</code> trigger to dismiss popovers on
                    the user’s next click of a different element than the toggle
                    element.
                  </p>
                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={popoverRightOne}
                  >
                    <Link to="#" tabIndex={0} className="btn btn-success">
                      Dismissible popover
                    </Link>
                  </OverlayTrigger>
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
              <div className="card card-h-100">
                <div className="card-header">
                  <h5 className="card-title">Hover</h5>
                </div>
                <div className="card-body">
                  <p>
                    Use the attribute <code>data-bs-trigger="hover"</code> to
                    show the popover on hovering the element.
                  </p>
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={popoverHover}
                  >
                    <Link to="#" tabIndex={0} className="btn btn-dark">
                      Please Hover Me
                    </Link>
                  </OverlayTrigger>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Four Directions</h5>
                </div>
                <div className="card-body">
                  <p>
                    Four options are available: top, right, bottom, and left
                    aligned.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <OverlayTrigger
                      trigger="click"
                      placement="top"
                      overlay={popoverTop}
                    >
                      <Link to="#" tabIndex={0} className="btn btn-primary">
                        Popover on top
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      trigger="click"
                      placement="bottom"
                      overlay={popoverBottom}
                    >
                      <Link to="#" tabIndex={0} className="btn btn-primary">
                        Popover on bottom
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      trigger="click"
                      placement="right"
                      overlay={popoverRight2}
                    >
                      <Link to="#" tabIndex={0} className="btn btn-primary">
                        Popover on right
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      trigger="click"
                      placement="left"
                      overlay={popoverLeft}
                    >
                      <Link to="#" tabIndex={0} className="btn btn-primary">
                        Popover on left
                      </Link>
                    </OverlayTrigger>
                  </div>
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
                  <h5 className="card-title">Custom Popovers</h5>
                </div>
                <div className="card-body">
                  <p>
                    You can customize the appearance of popovers using CSS
                    variables. We set a custom class with
                    <code>data-bs-custom-class="popover-primary"</code> to scope
                    our custom appearance and use it to override some of the
                    local CSS variables.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <OverlayTrigger
                      trigger="click"
                      placement="right"
                      overlay={createPopover(
                        "popover-header-primary",
                        "Primary Popover",
                        "This popover is themed via CSS variables.",
                        "popover-primary"
                      )}
                    >
                      <Link to="#" tabIndex={0} className="btn btn-primary">
                        Primary popover
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      trigger="click"
                      placement="right"
                      overlay={createPopover(
                        "popover-header-success",
                        "Success popover",
                        "This popover is themed via CSS variables.",
                        "popover-success"
                      )}
                    >
                      <Link to="#" tabIndex={0} className="btn btn-success">
                      Success popover
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      trigger="click"
                      placement="right"
                      overlay={createPopover(
                        "popover-header-danger",
                        "Danger popover",
                        "This popover is themed via CSS variables.",
                        "popover-danger"
                      )}
                    >
                      <Link to="#" tabIndex={0} className="btn btn-danger">
                      Danger popover
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      trigger="click"
                      placement="right"
                      overlay={createPopover(
                        "popover-header-info",
                        "Info popover",
                        "This popover is themed via CSS variables.",
                        "popover-info"
                      )}
                    >
                      <Link to="#" tabIndex={0} className="btn btn-info">
                      Info popover
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      trigger="click"
                      placement="right"
                      overlay={createPopover(
                        "popover-header-dark",
                        "Dark popover",
                        "This popover is themed via CSS variables.",
                        "popover-dark"
                      )}
                    >
                      <Link to="#" tabIndex={0} className="btn btn-dark">
                      Dark popover
                      </Link>
                    </OverlayTrigger>
                    <OverlayTrigger
                      trigger="click"
                      placement="right"
                      overlay={createPopover(
                        "popover-header-secondary",
                        "Secondary popover",
                        "This popover is themed via CSS variables.",
                        "popover-secondary"
                      )}
                    >
                      <Link to="#" tabIndex={0} className="btn btn-secondary">
                      Secondary popover
                      </Link>
                    </OverlayTrigger>
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
                  <h5 className="card-title">Disabled Elements</h5>
                </div>
                <div className="card-body">
                  <p>
                    Elements with the <code>disabled</code> attribute aren’t
                    interactive, meaning users cannot hover or click them to
                    trigger a popover (or tooltip). As a workaround, you’ll want
                    to trigger the popover from a wrapper
                    <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> and
                    override the
                    <code>pointer-events</code> on the disabled element.
                  </p>
                  <span
                        className="d-inline-block"
                        data-bs-toggle="popover"
                        data-bs-content="Disabled popover"
                        >
                        <button
                            className="btn btn-primary"
                            style={{ pointerEvents: "none" }}
                            type="button"
                            disabled
                        >
                            Disabled button
                        </button>
                    </span>

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

export default UiPopovers;
