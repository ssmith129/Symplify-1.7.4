import  { useState } from "react";
import { Link } from "react-router";
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const UiTooltips = () => {
    const TooltipOnLinkOne = (props:any) => (
        <Tooltip id="tooltip-primary" {...props}>
            Default tooltip
        </Tooltip>
    );
    const TooltipOnLinkTwo = (props:any) => (
        <Tooltip id="tooltip-primary" {...props}>
            Another tooltip
        </Tooltip>
    );
    const TooltipOnLinkThree = (props:any) => (
        <Tooltip id="tooltip-primary" {...props}>
            Another one here too
        </Tooltip>
    );
    const TooltipOnLinkFour = (props:any) => (
        <Tooltip id="tooltip-primary" {...props}>
            The Last Tip!
        </Tooltip>
    );
    const renderTooltipPrimary = (props:any) => (
        <Tooltip id="tooltip-primary" className ='tooltip-primary' {...props}>
            This top tooltip is themed via CSS variables.
        </Tooltip>
    );
    const renderTooltipDanger = (props:any) => (
        <Tooltip id="tooltip-danger" className ='tooltip-danger' {...props}>
            This top tooltip is themed via CSS variables.
        </Tooltip>
    );
    const renderTooltipInfo = (props:any) => (
        <Tooltip id="tooltip-info" className ='tooltip-info' {...props}>
            This top tooltip is themed via CSS variables.
        </Tooltip>
    );
    const renderTooltipSuccess = (props:any) => (
        <Tooltip id="tooltip-success" className ='tooltip-success' {...props}>
            This top tooltip is themed via CSS variables.
        </Tooltip>
    );
    const renderTooltipSecondary = (props:any) => (
        <Tooltip id="tooltip-secondary" className ='tooltip-secondary' {...props}>
            This top tooltip is themed via CSS variables.
        </Tooltip>
    );
    const renderTooltipWarning = (props:any) => (
        <Tooltip id="tooltip-warning" className ='tooltip-warning' {...props}>
            This top tooltip is themed via CSS variables.
        </Tooltip>
    );
    const renderTooltipDark = (props:any) => (
        <Tooltip id="tooltip-dark" className ='tooltip-dark' {...props}>
            This top tooltip is themed via CSS variables.
        </Tooltip>
    );
    const renderTooltipHover = (props:any) => (
        <Tooltip id="tooltip-example" {...props}>
            Hover Only, Not a Focus
        </Tooltip>
    );
    const tooltipContentDisable = (
        <Tooltip id="disabled-tooltip">Disabled tooltip</Tooltip>
      );
    const tooltipContent = (
        <div>
            <em>Tooltip</em> <u>with</u> <b>HTML</b>
        </div>
    );

    const [showTooltip, setShowTooltip] = useState(true);
    const handleClick = () => {
        setShowTooltip(!showTooltip);
    };
    const tooltipContenthtml = (
        <Tooltip id="tooltip-html" show={showTooltip}>
            <em>Tooltip</em> <u>with</u> <b>HTML</b>
        </Tooltip>
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
              <h4 className="fs-18 fw-semibold mb-0">Tooltips</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Base UI</Link>
                </li>
                <li className="breadcrumb-item active">Tooltips</li>
              </ol>
            </div>
          </div>
          {/*  End Page Header*/}
          {/* start row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Tooltips on links</h5>
                </div>
                <div className="card-body">
                  <p>Hover over the links below to see tooltips.</p>
                  <p className="muted mb-0">
                    Placeholder text to demonstrate some
                    <OverlayTrigger placement="top" overlay={TooltipOnLinkOne} offset={[0, 15]} >
                        <Link
                        to="#"
                        className="text-primary"
                        >
                            inline links
                        </Link>
                    </OverlayTrigger>
                    with tooltips. This is now just filler, no killer. Content
                    placed here just to mimic the presence of
                    <OverlayTrigger placement="top" overlay={TooltipOnLinkTwo} offset={[0, 15]} >
                        <Link
                        to="#"
                        className="text-primary"
                        >
                            real text
                        </Link>
                    </OverlayTrigger>
                    . And all that just to give you an idea of how tooltips
                    would look when used in real-world situations. So hopefully
                    you've now seen how
                    <OverlayTrigger placement="top" overlay={TooltipOnLinkThree} offset={[0, 15]} >
                        <Link
                        to="#"
                        className="text-primary"
                        >
                            tooltips on links
                        </Link>
                    </OverlayTrigger>
                    can work in practice, once you use them on
                    <OverlayTrigger placement="top" overlay={TooltipOnLinkFour} offset={[0, 15]} >
                        <Link
                        to="#"
                        className="text-primary"
                        >
                            your own
                        </Link>
                    </OverlayTrigger>
                    site or project.
                  </p>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Disabled Elements</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Elements with the <code>disabled</code> attribute aren’t
                    interactive, meaning users cannot focus, hover, or click
                    them to trigger a tooltip (or popover). As a workaround,
                    you’ll want to trigger the tooltip from a wrapper
                    <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>,
                    ideally made keyboard-focusable using
                    <code>tabindex="0"</code>, and override the
                    <code>pointer-events</code> on the disabled element.
                  </p>
                  <div>
                    <OverlayTrigger
                        placement="top"
                        overlay={tooltipContentDisable}
                        >
                        <span className="d-inline-block">
                            <button className="btn btn-primary pe-none" type="button" disabled>
                            Disabled button
                            </button>
                        </span>
                    </OverlayTrigger>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Hover Elements</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Elements with the <code>disabled</code> attribute aren’t
                    interactive, meaning users cannot focus, hover, or click
                    them to trigger a tooltip (or popover). As a workaround,
                    you’ll want to trigger the tooltip from a wrapper
                    <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>,
                    ideally made keyboard-focusable using
                    <code>tabindex="0"</code>, and override the
                    <code>pointer-events</code> on the disabled element.
                  </p>
                  <OverlayTrigger
                        placement="top"
                        overlay={renderTooltipHover}
                        delay={{ show: 250, hide: 400 }}
                    >
                        <button
                            className="btn btn-primary"
                            type="button"
                        >
                            Hover
                        </button>
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
                  <h5 className="card-title">Directions</h5>
                </div>
                <div className="card-body">
                  <p>
                    Hover over the buttons below to see the four tooltips
                    directions: top, right, bottom, and left.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="tooltip-top">Tooltip on top</Tooltip>}
                    >
                        <button
                            type="button"
                            className="btn btn-primary"
                        >
                            Tooltip on top
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip id="tooltip-bottom">Tooltip on bottom</Tooltip>}
                    >
                        <button
                            type="button"
                            className="btn btn-primary"
                        >
                            Tooltip on bottom
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="left"
                        overlay={<Tooltip id="tooltip-left">Tooltip on left</Tooltip>}
                    >
                        <button
                            type="button"
                            className="btn btn-primary"
                        >
                            Tooltip on left
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="right"
                        overlay={<Tooltip id="tooltip-right">Tooltip on right</Tooltip>}
                    >
                        <button
                            type="button"
                            className="btn btn-primary"
                        >
                            Tooltip on right
                        </button>
                    </OverlayTrigger>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">HTML Tags</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">And with custom HTML added:</p>
                  <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id="tooltip-html">{tooltipContent}</Tooltip>}
                    >
                        <button
                            type="button"
                            className="btn btn-secondary me-2"
                        >
                            Tooltip with HTML
                        </button>
                    </OverlayTrigger>
                  <OverlayTrigger
                        trigger="click"
                        placement="bottom"
                        overlay={tooltipContenthtml}
                    >
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleClick}
                        >
                            Click Me
                        </button>
                    </OverlayTrigger>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Color Tooltips</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    We set a custom class with ex.
                    <code>data-bs-custom-class="primary-tooltip"</code> to scope
                    our background-color primary appearance and use it to
                    override a local CSS variable.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <OverlayTrigger placement="top" overlay={renderTooltipPrimary} offset={[0, 15]} >
                        <span className="btn btn-primary">
                            Primary Tooltip
                        </span>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={renderTooltipDanger} offset={[0, 15]} >
                        <span className="btn btn-danger">
                        Danger Tooltip
                        </span>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={renderTooltipInfo} offset={[0, 15]} >
                        <span className="btn btn-info">
                        Info Tooltip
                        </span>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={renderTooltipSuccess} offset={[0, 15]} >
                        <span className="btn btn-success">
                        Success Tooltip
                        </span>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={renderTooltipSecondary} offset={[0, 15]} >
                        <span className="btn btn-secondary">
                        Secondary Tooltip
                        </span>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={renderTooltipWarning} offset={[0, 15]} >
                        <span className="btn btn-warning">
                        Warning Tooltip
                        </span>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={renderTooltipDark} offset={[0, 15]} >
                        <span className="btn btn-dark">
                        Dark Tooltip
                        </span>
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

export default UiTooltips;
