import { Link } from "react-router";

const UiAccordion = () => {
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
              <h4 className="fs-18 fw-semibold mb-0">Accordions</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Base UI</Link>
                </li>
                <li className="breadcrumb-item active">Accordions</li>
              </ol>
            </div>
          </div>
          {/* End Page Header */}
          {/* start row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Default Accordion</h5>
                </div>
                <div className="card-body">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the second item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the third item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
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
                  <h5 className="card-title">Flush Accordions</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Add <code>.accordion-flush</code> to remove the default
                    <code>background-color</code>, some borders, and some
                    rounded corners to render accordions edge-to-edge with their
                    parent container.
                  </p>
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    {/* item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the
                          <code>.accordion-flush</code> class. This is the first
                          item's accordion body.
                        </div>
                      </div>
                    </div>
                    {/* item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the
                          <code>.accordion-flush</code> class. This is the
                          second item's accordion body. Let's imagine this being
                          filled with some actual content.
                        </div>
                      </div>
                    </div>
                    {/* item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the
                          <code>.accordion-flush</code> class. This is the third
                          item's accordion body. Nothing more exciting happening
                          here in terms of content, but just filling up the
                          space to make it look, at least at first glance, a bit
                          more representative of how this would look in a
                          real-world application.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end card body*/}
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
                  <h5 className="card-title">Bordered Accordions</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Using the card component, you can extend the default
                    collapse behavior to create an accordion. To properly
                    achieve the accordion style, be sure to use
                    <code>.accordion</code> as a wrapper.
                  </p>
                  <div
                    className="accordion accordion-bordered"
                    id="BorderedaccordionExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="BorderedheadingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#BorderedcollapseOne"
                          aria-expanded="true"
                          aria-controls="BorderedcollapseOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="BorderedcollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="BorderedheadingOne"
                        data-bs-parent="#BorderedaccordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="BorderedheadingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#BorderedcollapseTwo"
                          aria-expanded="false"
                          aria-controls="BorderedcollapseTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="BorderedcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="BorderedheadingTwo"
                        data-bs-parent="#BorderedaccordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the second item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="BorderedheadingThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#BorderedcollapseThree"
                          aria-expanded="false"
                          aria-controls="BorderedcollapseThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="BorderedcollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="BorderedheadingThree"
                        data-bs-parent="#BorderedaccordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the third item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
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
                  <h5 className="card-title">Custom Icon Accordion</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Using the card component, you can extend the default
                    collapse behavior to create an accordion. To properly
                    achieve the accordion style, be sure to use
                    <code>.accordion</code> as a wrapper.
                  </p>
                  <div
                    className="accordion accordion-bordered accordion-custom-icon accordion-arrow-none"
                    id="CustomIconaccordionExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="CustomIconheadingOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#CustomIconcollapseOne"
                          aria-expanded="true"
                          aria-controls="CustomIconcollapseOne"
                        >
                          Accordion item with tabler icons
                          <i className="ti ti-plus accordion-icon accordion-icon-on" />
                          <i className="ti ti-minus accordion-icon accordion-icon-off" />
                        </button>
                      </h2>
                      <div
                        id="CustomIconcollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="CustomIconheadingOne"
                        data-bs-parent="#CustomIconaccordionExample"
                      >
                        <div className="accordion-body">
                          
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="CustomIconheadingTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#CustomIconcollapseTwo"
                          aria-expanded="false"
                          aria-controls="CustomIconcollapseTwo"
                        >
                          Accordion item with tabler icons
                          <i className="ti ti-circle-plus accordion-icon accordion-icon-on" />
                          <i className="ti ti-circle-minus accordion-icon accordion-icon-off" />
                        </button>
                      </h2>
                      <div
                        id="CustomIconcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="CustomIconheadingTwo"
                        data-bs-parent="#CustomIconaccordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the second item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="CustomIconheadingThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#CustomIconcollapseThree"
                          aria-expanded="false"
                          aria-controls="CustomIconcollapseThree"
                        >
                          Accordion item with tabler icons
                          <i className="ti ti-square-plus accordion-icon accordion-icon-on" />
                          <i className="ti ti-square-minus accordion-icon accordion-icon-off" />
                        </button>
                      </h2>
                      <div
                        id="CustomIconcollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="CustomIconheadingThree"
                        data-bs-parent="#CustomIconaccordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the second item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
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
                  <h5 className="card-title">Always Open Accordions</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Omit the <code>data-bs-parent</code> attribute on each
                    <code>.accordion-collapse</code> to make accordion items
                    stay open when another item is opened.
                  </p>
                  <div
                    className="accordion"
                    id="accordionPanelsStayOpenExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseOne"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseTwo"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingTwo"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the second item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the third item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
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
                  <h5 className="card-title">Accordion Without Arrow</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Using the card component, you can extend the default
                    collapse behavior to create an accordion. To properly
                    achieve the accordion style, be sure to use
                    <code>.accordion</code> as a wrapper.
                  </p>
                  <div
                    className="accordion accordion-arrow-none"
                    id="withoutarrowaccordionExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="withoutarrowheadingOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#withoutarrowcollapseOne"
                          aria-expanded="true"
                          aria-controls="withoutarrowcollapseOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="withoutarrowcollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="withoutarrowheadingOne"
                        data-bs-parent="#withoutarrowaccordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="withoutarrowheadingTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#withoutarrowcollapseTwo"
                          aria-expanded="false"
                          aria-controls="withoutarrowcollapseTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="withoutarrowcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="withoutarrowheadingTwo"
                        data-bs-parent="#withoutarrowaccordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the second item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="withoutarrowheadingThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#withoutarrowcollapseThree"
                          aria-expanded="false"
                          aria-controls="withoutarrowcollapseThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="withoutarrowcollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="withoutarrowheadingThree"
                        data-bs-parent="#withoutarrowaccordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the third item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
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
                  <h5 className="card-title">Primary - Light Color</h5>
                </div>
                <div className="card-body">
                  <div
                    className="accordion accordion-primary"
                    id="accordionPrimaryExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingPrimaryOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsePrimaryOne"
                          aria-expanded="true"
                          aria-controls="collapsePrimaryOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="collapsePrimaryOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingPrimaryOne"
                        data-bs-parent="#accordionPrimaryExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingPrimaryTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsePrimaryTwo"
                          aria-expanded="false"
                          aria-controls="collapsePrimaryTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="collapsePrimaryTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingPrimaryTwo"
                        data-bs-parent="#accordionPrimaryExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingPrimaryThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsePrimaryThree"
                          aria-expanded="false"
                          aria-controls="collapsePrimaryThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="collapsePrimaryThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingPrimaryThree"
                        data-bs-parent="#accordionPrimaryExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
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
                  <h5 className="card-title">Secondary - Light Color</h5>
                </div>
                <div className="card-body">
                  <div
                    className="accordion accordion-secondary"
                    id="accordionSecondaryExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingSecondaryOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSecondaryOne"
                          aria-expanded="true"
                          aria-controls="collapseSecondaryOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="collapseSecondaryOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingSecondaryOne"
                        data-bs-parent="#accordionSecondaryExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingSecondaryTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSecondaryTwo"
                          aria-expanded="false"
                          aria-controls="collapseSecondaryTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="collapseSecondaryTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSecondaryTwo"
                        data-bs-parent="#accordionSecondaryExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingSecondaryThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSecondaryThree"
                          aria-expanded="false"
                          aria-controls="collapseSecondaryThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="collapseSecondaryThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSecondaryThree"
                        data-bs-parent="#accordionSecondaryExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
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
                  <h5 className="card-title">Primary - Solid Color</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use the <code>.accordion-solid-primary</code> to create a
                    solid primary accordion.
                  </p>
                  <div
                    className="accordion accordion-solid-primary"
                    id="accordionPrimarySolidExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingPrimarySolidOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsePrimarySolidOne"
                          aria-expanded="true"
                          aria-controls="collapsePrimarySolidOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="collapsePrimarySolidOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingPrimarySolidOne"
                        data-bs-parent="#accordionPrimarySolidExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingPrimarySolidTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsePrimarySolidTwo"
                          aria-expanded="false"
                          aria-controls="collapsePrimarySolidTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="collapsePrimarySolidTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingPrimarySolidTwo"
                        data-bs-parent="#accordionPrimarySolidExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingPrimarySolidThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsePrimarySolidThree"
                          aria-expanded="false"
                          aria-controls="collapsePrimarySolidThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="collapsePrimarySolidThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingPrimarySolidThree"
                        data-bs-parent="#accordionPrimarySolidExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
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
                  <h5 className="card-title">Secondary - Solid Color</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use the <code>.accordion-solid-secondary</code> to create a
                    solid secondary accordion.
                  </p>
                  <div
                    className="accordion accordion-solid-secondary"
                    id="accordionSecondarySolidExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingSecondarySolidOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSecondarySolidOne"
                          aria-expanded="true"
                          aria-controls="collapseSecondarySolidOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="collapseSecondarySolidOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingSecondarySolidOne"
                        data-bs-parent="#accordionSecondarySolidExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingSecondarySolidTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSecondarySolidTwo"
                          aria-expanded="false"
                          aria-controls="collapseSecondarySolidTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="collapseSecondarySolidTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSecondarySolidTwo"
                        data-bs-parent="#accordionSecondarySolidExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingSecondarySolidThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSecondarySolidThree"
                          aria-expanded="false"
                          aria-controls="collapseSecondarySolidThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="collapseSecondarySolidThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSecondarySolidThree"
                        data-bs-parent="#accordionSecondarySolidExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
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
                  <h5 className="card-title">Warning - Solid Color</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use the <code>.accordion-solid-warning</code> to create a
                    solid warning accordion.
                  </p>
                  <div
                    className="accordion accordion-solid-warning"
                    id="accordionWarningSolidExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingWarningSolidOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseWarningSolidOne"
                          aria-expanded="true"
                          aria-controls="collapseWarningSolidOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="collapseWarningSolidOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingWarningSolidOne"
                        data-bs-parent="#accordionWarningSolidExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingWarningSolidTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseWarningSolidTwo"
                          aria-expanded="false"
                          aria-controls="collapseWarningSolidTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="collapseWarningSolidTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingWarningSolidTwo"
                        data-bs-parent="#accordionWarningSolidExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingWarningSolidThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseWarningSolidThree"
                          aria-expanded="false"
                          aria-controls="collapseWarningSolidThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="collapseWarningSolidThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingWarningSolidThree"
                        data-bs-parent="#accordionWarningSolidExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
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
                  <h5 className="card-title">Info - Solid Color</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use the <code>.accordion-solid-info</code> to create a solid
                    info accordion.
                  </p>
                  <div
                    className="accordion accordion-solid-info"
                    id="accordionInfoSolidExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingInfoSolidOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseInfoSolidOne"
                          aria-expanded="true"
                          aria-controls="collapseInfoSolidOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="collapseInfoSolidOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingInfoSolidOne"
                        data-bs-parent="#accordionInfoSolidExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingInfoSolidTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseInfoSolidTwo"
                          aria-expanded="false"
                          aria-controls="collapseInfoSolidTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="collapseInfoSolidTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingInfoSolidTwo"
                        data-bs-parent="#accordionInfoSolidExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingInfoSolidThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseInfoSolidThree"
                          aria-expanded="false"
                          aria-controls="collapseInfoSolidThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="collapseInfoSolidThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingInfoSolidThree"
                        data-bs-parent="#accordionInfoSolidExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
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
                  <h5 className="card-title">Success - Solid Color</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use the <code>.accordion-solid-success</code> to create a
                    solid success accordion.
                  </p>
                  <div
                    className="accordion accordion-solid-success"
                    id="accordionSuccessSolidExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingSuccessSolidOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSuccessSolidOne"
                          aria-expanded="true"
                          aria-controls="collapseSuccessSolidOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="collapseSuccessSolidOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingSuccessSolidOne"
                        data-bs-parent="#accordionSuccessSolidExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingSuccessSolidTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSuccessSolidTwo"
                          aria-expanded="false"
                          aria-controls="collapseSuccessSolidTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="collapseSuccessSolidTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSuccessSolidTwo"
                        data-bs-parent="#accordionSuccessSolidTwo"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingSuccessSolidThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSuccessSolidThree"
                          aria-expanded="false"
                          aria-controls="collapseSuccessSolidThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="collapseSuccessSolidThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSuccessSolidThree"
                        data-bs-parent="#accordionSuccessSolidThree"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
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
                  <h5 className="card-title">Danger - Solid Color</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use the <code>.accordion-solid-danger</code> to create a
                    solid danger accordion.
                  </p>
                  <div
                    className="accordion accordion-solid-danger"
                    id="accordionDangerSolidExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingDangerSolidOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseDangerSolidOne"
                          aria-expanded="true"
                          aria-controls="collapseDangerSolidOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="collapseDangerSolidOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingDangerSolidOne"
                        data-bs-parent="#accordionDangerSolidExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingDangerSolidTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseDangerSolidTwo"
                          aria-expanded="false"
                          aria-controls="collapseDangerSolidTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="collapseDangerSolidTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingDangerSolidTwo"
                        data-bs-parent="#accordionDangerSolidExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingDangerSolidThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseDangerSolidThree"
                          aria-expanded="false"
                          aria-controls="collapseDangerSolidThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="collapseDangerSolidThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingDangerSolidThree"
                        data-bs-parent="#accordionDangerSolidExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
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
                  <h5 className="card-title">Primary - Colored Border</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use the <code>.accordion-border-primary</code> to create a
                    primary border accordion.
                  </p>
                  <div
                    className="accordion accordion-border-primary accordions-items-seperate"
                    id="accordionprimaryborderExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingborderprimaryOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#primaryBorderOne"
                          aria-expanded="true"
                          aria-controls="primaryBorderOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="primaryBorderOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingborderprimaryOne"
                        data-bs-parent="#accordionprimaryborderExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingborderprimaryTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#primaryBorderTwo"
                          aria-expanded="false"
                          aria-controls="primaryBorderTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="primaryBorderTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingborderprimaryTwo"
                        data-bs-parent="#accordionprimaryborderExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingborderprimaryThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#primaryBorderThree"
                          aria-expanded="false"
                          aria-controls="primaryBorderThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="primaryBorderThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingborderprimaryThree"
                        data-bs-parent="#accordionprimaryborderExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
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
                  <h5 className="card-title">Secondary - Colored Border</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use the <code>.accordion-border-secondary</code> to create a
                    secondary border accordion.
                  </p>
                  <div
                    className="accordion accordion-border-secondary accordions-items-seperate"
                    id="accordioninfoborderExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingborderinfoOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#infoBorderOne"
                          aria-expanded="true"
                          aria-controls="infoBorderOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="infoBorderOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingborderinfoOne"
                        data-bs-parent="#accordioninfoborderExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingborderinfoTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#infoBorderTwo"
                          aria-expanded="false"
                          aria-controls="infoBorderTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="infoBorderTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingborderinfoTwo"
                        data-bs-parent="#accordioninfoborderExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingborderinfoThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#infoBorderThree"
                          aria-expanded="false"
                          aria-controls="infoBorderThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="infoBorderThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingborderinfoThree"
                        data-bs-parent="#accordioninfoborderExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
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
                  <h5 className="card-title">Success - Colored Border</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use the <code>.accordion-border-success</code> to create a
                    success border accordion.
                  </p>
                  <div
                    className="accordion accordion-border-success accordions-items-seperate"
                    id="accordionsuccessborderExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingbordersuccessOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#successBorderOne"
                          aria-expanded="true"
                          aria-controls="successBorderOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="successBorderOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingbordersuccessOne"
                        data-bs-parent="#accordionsuccessborderExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingbordersuccessTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#successBorderTwo"
                          aria-expanded="false"
                          aria-controls="successBorderTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="successBorderTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingbordersuccessTwo"
                        data-bs-parent="#accordionsuccessborderExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingbordersuccessThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#successBorderThree"
                          aria-expanded="false"
                          aria-controls="successBorderThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="successBorderThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingbordersuccessThree"
                        data-bs-parent="#accordionsuccessborderExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
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
                  <h5 className="card-title">Info - Colored Border</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use the <code>.accordion-border-info</code> to create a info
                    border accordion.
                  </p>
                  <div
                    className="accordion accordion-border-info accordions-items-seperate"
                    id="accordioninfoborderExampleTwo"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingborderinfoTwos"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#infoBorderOnes"
                          aria-expanded="true"
                          aria-controls="infoBorderOnes"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="infoBorderOnes"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingborderinfoTwos"
                        data-bs-parent="#accordioninfoborderExampleTwo"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingborderinfoTwoo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#infoBorderTwos"
                          aria-expanded="false"
                          aria-controls="infoBorderTwos"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="infoBorderTwos"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingborderinfoTwoo"
                        data-bs-parent="#accordioninfoborderExample2"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingborderinfoThrees"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#infoBorderThrees"
                          aria-expanded="false"
                          aria-controls="infoBorderThrees"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="infoBorderThrees"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingborderinfoThrees"
                        data-bs-parent="#accordioninfoborderExample2"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
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
                  <h5 className="card-title">Warning - Colored Border</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use the <code>.accordion-border-warning</code> to create a
                    warning border accordion.
                  </p>
                  <div
                    className="accordion accordion-border-warning accordions-items-seperate"
                    id="accordionwarningborderExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingborderwarningOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#warningBorderOne"
                          aria-expanded="true"
                          aria-controls="warningBorderOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="warningBorderOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingborderwarningOne"
                        data-bs-parent="#accordionwarningborderExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingborderwarningTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#warningBorderTwo"
                          aria-expanded="false"
                          aria-controls="warningBorderTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="warningBorderTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingborderwarningTwo"
                        data-bs-parent="#accordionwarningborderExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingborderwarningThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#warningBorderThree"
                          aria-expanded="false"
                          aria-controls="warningBorderThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="warningBorderThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingborderwarningThree"
                        data-bs-parent="#accordionwarningborderExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
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
                  <h5 className="card-title">Danger - Colored Border</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use the <code>.accordion-border-danger</code> to create a
                    danger border accordion.
                  </p>
                  <div
                    className="accordion accordion-border-danger accordions-items-seperate"
                    id="accordiondangerborderExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingborderdangerOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#dangerBorderOne"
                          aria-expanded="true"
                          aria-controls="dangerBorderOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="dangerBorderOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingborderdangerOne"
                        data-bs-parent="#accordiondangerborderExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingborderdangerTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#dangerBorderTwo"
                          aria-expanded="false"
                          aria-controls="dangerBorderTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="dangerBorderTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingborderdangerTwo"
                        data-bs-parent="#accordiondangerborderExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="headingborderdangerThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#dangerBorderThree"
                          aria-expanded="false"
                          aria-controls="dangerBorderThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="dangerBorderThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingborderdangerThree"
                        data-bs-parent="#accordiondangerborderExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
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

        {/* Footer Start */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©
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
    </>
  );
};

export default UiAccordion;
