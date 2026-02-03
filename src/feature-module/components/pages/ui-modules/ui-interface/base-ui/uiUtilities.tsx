
import { Link } from "react-router";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";


const UiUtilities = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
            <div className="flex-grow-1">
              <h4 className="fs-18 fw-semibold mb-0">Utilities</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Base UI</Link>
                </li>
                <li className="breadcrumb-item active">Utilities</li>
              </ol>
            </div>
          </div>
          {/* start row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="header-title">Background Color</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Similar to the contextual text color classes, set the
                    background of an element to any contextual class. Background
                    utilities
                    <strong>
                      do not set <code>color</code>
                    </strong>
                    , so in some cases you’ll want to use <code>.text-*</code>
                    color utilities.
                  </p>
                  <div className="bg-primary text-white p-2 mb-2">
                    .bg-primary
                  </div>
                  <div className="bg-secondary text-white p-2 mb-2">
                    .bg-secondary
                  </div>
                  <div className="bg-success text-white p-2 mb-2">
                    .bg-success
                  </div>
                  <div className="bg-danger text-white p-2 mb-2">
                    .bg-danger
                  </div>
                  <div className="bg-warning text-dark p-2 mb-2">
                    .bg-warning
                  </div>
                  <div className="bg-info text-dark p-2 mb-2">.bg-info</div>
                  <div className="bg-light text-dark p-2 mb-2">.bg-light</div>
                  <div className="bg-dark p-2 mb-2">.bg-dark</div>
                  <div className="bg-body text-dark p-2 mb-2">.bg-body</div>
                  <div className="bg-body-secondary text-dark p-2 mb-2">
                    .bg-body-secondary
                  </div>
                  <div className="bg-body-tertiary text-dark p-2 mb-2">
                    .bg-body-tertiary
                  </div>
                  <div className="bg-white p-2 mb-2">.bg-white</div>
                  <div className="bg-black text-white p-2 mb-2">.bg-black</div>
                  <div className="bg-transparent text-dark p-2">
                    .bg-transparent
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
                  <h5 className="header-title">Background Gradient Color</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    By adding a <code>.bg-gradient</code> class, a linear
                    gradient is added as background image to the backgrounds.
                    This gradient starts with a semi-transparent white which
                    fades out to the bottom.
                  </p>
                  <div className="p-2 mb-2 bg-primary bg-gradient text-white">
                    .bg-gradient.bg-primary
                  </div>
                  <div className="p-2 mb-2 bg-secondary bg-gradient text-white">
                    .bg-secondary.bg-gradient
                  </div>
                  <div className="p-2 mb-2 bg-success bg-gradient text-white">
                    .bg-success.bg-gradient
                  </div>
                  <div className="p-2 mb-2 bg-danger bg-gradient text-white">
                    .bg-danger.bg-gradient
                  </div>
                  <div className="p-2 mb-2 bg-warning bg-gradient text-dark">
                    .bg-warning.bg-gradient
                  </div>
                  <div className="p-2 mb-2 bg-info bg-gradient text-dark">
                    .bg-info.bg-gradient
                  </div>
                  <div className="p-2 mb-2 bg-light bg-gradient text-dark">
                    .bg-light.bg-gradient
                  </div>
                  <div className="p-2 mb-2 bg-dark bg-gradient text-white">
                    .bg-dark.bg-gradient
                  </div>
                  <div className="p-2 mb-2 bg-black bg-gradient text-white">
                    .bg-black.bg-gradient
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
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="header-title">Soft Background</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Similar to the contextual text color classes, set the
                    background of an element to any contextual class. Background
                    utilities do not set <code>color</code>, so in some cases
                    you’ll want to use <code>.text-*</code>
                    <Link to="https://getbootstrap.com/docs/5.3/utilities/colors/">
                      color utilities
                    </Link>
                    .
                  </p>
                  <div className="row">
                    <div className="col-12">
                      <div className="d-flex flex-column gap-2">
                        <div className="bg-primary-subtle p-2">
                          <code className="text-primary-emphasis">
                            .bg-primary-subtle
                          </code>
                        </div>
                        <div className="bg-secondary-subtle p-2">
                          <code className="text-secondary-emphasis">
                            .bg-secondary-subtle
                          </code>
                        </div>
                        <div className="bg-success-subtle p-2">
                          <code className="text-success-emphasis">
                            .bg-success-subtle
                          </code>
                        </div>
                        <div className="bg-danger-subtle p-2">
                          <code className="text-danger-emphasis">
                            .bg-danger-subtle
                          </code>
                        </div>
                        <div className="bg-warning-subtle p-2">
                          <code className="text-warning-emphasis">
                            .bg-warning-subtle
                          </code>
                        </div>
                        <div className="bg-info-subtle p-2">
                          <code className="text-info-emphasis">
                            .bg-info-subtle
                          </code>
                        </div>
                        <div className="bg-light-subtle p-2">
                          <code className="text-light-emphasis">
                            .bg-light-subtle
                          </code>
                        </div>
                        <div className="bg-dark-subtle p-2">
                          <code className="text-dark-emphasis">
                            .bg-dark-subtle
                          </code>
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
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="header-title">Background Gradient Color 2</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Similar to the contextual text color classes, set the
                    background of an element to any contextual class. Background
                    utilities do not set
                    <code>color</code>, so in some cases you’ll want to use
                    <code>.text-*</code>
                    <Link to="https://getbootstrap.com/docs/5.3/utilities/colors/">
                      color utilities
                    </Link>
                    .
                  </p>
                  <div className="row row-cols-12 d-flex align-items-center">
                    <div className="p-3 col">
                      <div className="m-2 bg-primary-gradient mx-auto color-container" />
                      <p className="pb-0 mb-0 fw-semibold text-center">
                        <code>.bg-primary-gradient</code>
                      </p>
                    </div>
                    <div className="p-3 col">
                      <div className="m-2 bg-secondary-gradient mx-auto color-container" />
                      <p className="pb-0 mb-0 fw-semibold text-center">
                        <code>.bg-secondary-gradient</code>
                      </p>
                    </div>
                    <div className="p-3 col">
                      <div className="m-2 bg-warning-gradient mx-auto color-container" />
                      <p className="pb-0 mb-0 fw-semibold text-center">
                        <code>.bg-warning-gradient</code>
                      </p>
                    </div>
                    <div className="p-3 col">
                      <div className="m-2 bg-info-gradient mx-auto color-container" />
                      <p className="pb-0 mb-0 fw-semibold text-center">
                        <code>.bg-info-gradient</code>
                      </p>
                    </div>
                    <div className="p-3 col">
                      <div className="m-2 bg-success-gradient mx-auto color-container" />
                      <p className="pb-0 mb-0 fw-semibold text-center">
                        <code>.bg-success-gradient</code>
                      </p>
                    </div>
                    <div className="p-3 col">
                      <div className="m-2 bg-danger-gradient mx-auto color-container" />
                      <p className="pb-0 mb-0 fw-semibold text-center">
                        <code>.bg-danger-gradient</code>
                      </p>
                    </div>
                    <div className="p-3 col">
                      <div className="m-2 bg-light-gradient mx-auto color-container" />
                      <p className="pb-0 mb-0 fw-semibold text-center">
                        <code>.bg-light-gradient</code>
                      </p>
                    </div>
                    <div className="p-3 col">
                      <div className="m-2 bg-dark-gradient mx-auto color-container" />
                      <p className="pb-0 mb-0 fw-semibold text-center">
                        <code>.bg-dark-gradient</code>
                      </p>
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
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="header-title">Color &amp; Background</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Color and background helpers combine the power of our
                    <code>.text-*</code> utilities and <code>.bg-*</code>
                    utilities in one class. Using our Sass
                    <code>color-contrast()</code> function, we automatically
                    determine a contrasting <code>color</code> for a particular
                    <code>background-color</code>.
                  </p>
                  <div className="d-flex flex-column gap-2">
                    <div className="text-bg-primary p-2">
                      Primary with contrasting color (.text-bg-primary)
                    </div>
                    <div className="text-bg-secondary p-2">
                      Secondary with contrasting color (.text-bg-secondary)
                    </div>
                    <div className="text-bg-success p-2">
                      Success with contrasting color (.text-bg-success)
                    </div>
                    <div className="text-bg-danger p-2">
                      Danger with contrasting color (.text-bg-danger)
                    </div>
                    <div className="text-bg-warning p-2">
                      Warning with contrasting color (.text-bg-warning)
                    </div>
                    <div className="text-bg-info p-2">
                      Info with contrasting color (.text-bg-info)
                    </div>
                    <div className="text-bg-light p-2">
                      Light with contrasting color (.text-bg-light)
                    </div>
                    <div className="text-bg-dark p-2">
                      Dark with contrasting color (.text-bg-dark)
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
                  <h5 className="header-title">Colored links</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted fs-14">
                    You can use the <code>.link-*</code> classes to colorize
                    links. Unlike the <code>.text-*</code> classes, these
                    classes have a<code>:hover</code> and <code>:focus</code>
                    state.
                  </p>
                  <div className="d-flex flex-column gap-2">
                    <Link to="#" className="link-primary">
                      Primary link
                    </Link>
                    <Link to="#" className="link-secondary">
                      Secondary link
                    </Link>
                    <Link to="#" className="link-success">
                      Success link
                    </Link>
                    <Link to="#" className="link-danger">
                      Danger link
                    </Link>
                    <Link to="#" className="link-warning">
                      Warning link
                    </Link>
                    <Link to="#" className="link-info">
                      Info link
                    </Link>
                    <Link to="#" className="link-light">
                      Light link
                    </Link>
                    <Link to="#" className="link-dark">
                      Dark link
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
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="header-title">Background Opacity</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    <code>background-color</code> utilities are generated with
                    Sass using CSS variables. This allows for real-time color
                    changes without compilation and dynamic alpha transparency
                    changes.
                  </p>
                  <div className="bg-primary p-2 text-white">
                    This is default primary background
                  </div>
                  <div className="bg-primary p-2 text-white bg-opacity-75">
                    This is 75% opacity primary background
                  </div>
                  <div className="bg-primary p-2 text-dark bg-opacity-50">
                    This is 50% opacity primary background
                  </div>
                  <div className="bg-primary p-2 text-dark bg-opacity-25">
                    This is 25% opacity primary background
                  </div>
                  <div className="bg-primary p-2 text-dark bg-opacity-10">
                    This is 10% opacity success background
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
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="header-title">Text Color</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Colorize text with color utilities. If you want to colorize
                    links, you can use the <code>.link-*</code> helper classes
                    which have <code>:hover</code> and <code>:focus</code>
                    states.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <p className="text-primary">.text-primary</p>
                      <p className="text-primary-emphasis">
                        .text-primary-emphasis
                      </p>
                      <p className="text-secondary">.text-secondary</p>
                      <p className="text-secondary-emphasis">
                        .text-secondary-emphasis
                      </p>
                      <p className="text-success">.text-success</p>
                      <p className="text-success-emphasis">
                        .text-success-emphasis
                      </p>
                      <p className="text-danger">.text-danger</p>
                      <p className="text-danger-emphasis">
                        .text-danger-emphasis
                      </p>
                      <p className="text-warning">.text-warning</p>
                      <p className="text-warning-emphasis">
                        .text-warning-emphasis
                      </p>
                      <p className="text-info">.text-info</p>
                      <p className="text-info-emphasis">.text-info-emphasis</p>
                      <p className="text-light bg-dark">.text-light</p>
                      <p className="text-light-emphasis">
                        .text-light-emphasis
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p className="text-dark">.text-dark</p>
                      <p className="text-dark-emphasis">.text-dark-emphasis</p>
                      <p className="text-muted">.text-muted</p>
                      <p className="text-body">.text-body</p>
                      <p className="text-body-emphasis">.text-body-emphasis</p>
                      <p className="text-body-secondary">
                        .text-body-secondary
                      </p>
                      <p className="text-body-tertiary">.text-body-tertiary</p>
                      <p className="text-black">.text-black</p>
                      <p className="text-white bg-dark">.text-white</p>
                      <p className="text-black-50">.text-black-50</p>
                      <p className="text-white-50 bg-dark">.text-white-50</p>
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
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="header-title">Text Opacity Color</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    text color utilities are generated with Sass using CSS
                    variables. This allows for real-time color changes without
                    compilation and dynamic alpha transparency changes.
                  </p>
                  <div className="text-primary">
                    This is default primary text
                  </div>
                  <div className="text-primary text-opacity-75">
                    This is 75% opacity primary text
                  </div>
                  <div className="text-primary text-opacity-50">
                    This is 50% opacity primary text
                  </div>
                  <div className="text-primary text-opacity-25">
                    This is 25% opacity primary text
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
                  <h5 className="header-title">Opacity</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    The <code>opacity</code> property sets the opacity level for
                    an element. The opacity level describes the transparency
                    level, where <code>1</code> is not transparent at all,
                    <code>.5</code> is 50% visible, and <code>0</code> is
                    completely transparent. Set the <code>opacity</code> of an
                    element using
                    <code>
                      .opacity-{"{"}value{"}"}
                    </code>
                    utilities.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <div className="opacity-100 p-2 bg-primary text-light fw-bold rounded">
                      100%
                    </div>
                    <div className="opacity-75 p-2 bg-primary text-light fw-bold rounded">
                      75%
                    </div>
                    <div className="opacity-50 p-2 bg-primary text-light fw-bold rounded">
                      50%
                    </div>
                    <div className="opacity-25 p-2 bg-primary text-light fw-bold rounded">
                      25%
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
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="header-title">Additive(Add) Border</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use border utilities to <b>add</b> an element’s borders.
                    Choose from all borders or one at a time.
                  </p>
                  <div className="d-flex align-items-start flex-wrap gap-4">
                    <div className="text-center">
                      <div className="border avatar-xl bg-light bg-opacity-50" />
                    </div>
                    <div className="text-center">
                      <div className="border-top avatar-xl bg-light bg-opacity-50" />
                    </div>
                    <div className="text-center">
                      <div className="border-end avatar-xl bg-light bg-opacity-50" />
                    </div>
                    <div className="text-center">
                      <div className="border-bottom avatar-xl bg-light bg-opacity-50" />
                    </div>
                    <div className="text-center">
                      <div className="border-start avatar-xl bg-light bg-opacity-50" />
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
                  <h5 className="header-title">Subtractive(Remove) Border</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use border utilities to <b>remove</b> an element’s borders.
                    Choose from all borders or one at a time.
                  </p>
                  <div className="d-flex align-items-start flex-wrap gap-4">
                    <div className="text-center">
                      <div className="border border-0 avatar-xl bg-light bg-opacity-50" />
                    </div>
                    <div className="text-center">
                      <div className="border border-top-0 avatar-xl bg-light bg-opacity-50" />
                    </div>
                    <div className="text-center">
                      <div className="border border-end-0 avatar-xl bg-light bg-opacity-50" />
                    </div>
                    <div className="text-center">
                      <div className="border border-bottom-0 avatar-xl bg-light bg-opacity-50" />
                    </div>
                    <div className="text-center">
                      <div className="border border-start-0 avatar-xl bg-light bg-opacity-50" />
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
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="header-title">Border Color</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Change the border color using utilities built on our theme
                    colors.
                  </p>
                  <div className="d-flex align-items-start flex-wrap gap-2">
                    <div className="text-center">
                      <div className="border border-primary avatar-xl bg-light bg-opacity-50" />
                    </div>
                    <div className="text-center">
                      <div className="border border-secondary avatar-xl bg-light bg-opacity-50" />
                    </div>
                    <div className="text-center">
                      <div className="border border-success avatar-xl bg-light bg-opacity-50" />
                    </div>
                    <div className="text-center">
                      <div className="border border-danger avatar-xl bg-light bg-opacity-50" />
                    </div>
                    <div className="text-center">
                      <div className="border border-warning avatar-xl bg-light bg-opacity-50" />
                    </div>
                    <div className="text-center">
                      <div className="border border-info avatar-xl bg-light bg-opacity-50" />
                    </div>
                    <div className="text-center">
                      <div className="border border-light avatar-xl" />
                    </div>
                    <div className="text-center">
                      <div className="border border-dark avatar-xl bg-light bg-opacity-50" />
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
              <div className="card">
                <div className="card-header">
                  <h5 className="header-title">Border Width Size</h5>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-start flex-wrap gap-2">
                    <div className="text-center">
                      <div className="border border-1 avatar-xl bg-light bg-opacity-50" />
                    </div>
                    <div className="text-center">
                      <div className="border border-2 avatar-xl bg-light bg-opacity-50" />
                    </div>
                    <div className="text-center">
                      <div className="border border-3 avatar-xl bg-light bg-opacity-50" />
                    </div>
                    <div className="text-center">
                      <div className="border border-4 avatar-xl bg-light bg-opacity-50" />
                    </div>
                    <div className="text-center">
                      <div className="border border-5 avatar-xl bg-light bg-opacity-50" />
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
                  <h5 className="header-title">Border Opacity</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    choose from any of the <code>.border-opacity</code>
                    utilities:
                  </p>
                  <div className="border border-success p-2 mb-2">
                    This is default success border
                  </div>
                  <div className="border border-success p-2 mb-2 border-opacity-75">
                    This is 75% opacity success border
                  </div>
                  <div className="border border-success p-2 mb-2 border-opacity-50">
                    This is 50% opacity success border
                  </div>
                  <div className="border border-success p-2 mb-2 border-opacity-25">
                    This is 25% opacity success border
                  </div>
                  <div className="border border-success p-2 border-opacity-10">
                    This is 10% opacity success border
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
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="header-title">Border Subtle Color</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Change the border color using utilities built on our theme
                    colors.
                  </p>
                  <div className="d-flex align-items-start flex-wrap gap-2">
                    <div className="text-center">
                      <div className="border border-primary-subtle avatar-xl bg-light bg-opacity-50"></div>
                    </div>
                    <div className="text-center">
                      <div className="border border-secondary-subtle avatar-xl bg-light bg-opacity-50"></div>
                    </div>
                    <div className="text-center">
                      <div className="border border-success-subtle avatar-xl bg-light bg-opacity-50"></div>
                    </div>
                    <div className="text-center">
                      <div className="border border-danger-subtle avatar-xl bg-light bg-opacity-50"></div>
                    </div>
                    <div className="text-center">
                      <div className="border border-warning-subtle avatar-xl bg-light bg-opacity-50"></div>
                    </div>
                    <div className="text-center">
                      <div className="border border-info-subtle avatar-xl bg-light bg-opacity-50"></div>
                    </div>
                    <div className="text-center">
                      <div className="border border-light-subtle avatar-xl" />
                    </div>
                    <div className="text-center">
                      <div className="border border-dark-subtle avatar-xl bg-light bg-opacity-50"></div>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/*end row*/}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="header-title">Border Radius</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Add classes to an element to easily round its corners.
                  </p>
                  <div className="d-flex align-items-start flex-wrap gap-2">
                    <ImageWithBasePath
                      src="assets/img/users/avatar-2.jpg"
                      className="avatar-lg rounded"
                      alt="rounded"
                    />
                    <ImageWithBasePath
                      src="assets/img/users/avatar-2.jpg"
                      className="avatar-lg rounded-top"
                      alt="rounded-top"
                    />
                    <ImageWithBasePath
                      src="assets/img/users/avatar-2.jpg"
                      className="avatar-lg rounded-end"
                      alt="rounded-end"
                    />
                    <ImageWithBasePath
                      src="assets/img/users/avatar-2.jpg"
                      className="avatar-lg rounded-bottom"
                      alt="rounded-bottom"
                    />
                    <ImageWithBasePath
                      src="assets/img/users/avatar-2.jpg"
                      className="avatar-lg rounded-start"
                      alt="rounded-start"
                    />
                    <ImageWithBasePath
                      src="assets/img/users/avatar-2.jpg"
                      className="avatar-lg rounded-circle"
                      alt="rounded-circle"
                    />
                    <ImageWithBasePath
                      src="assets/img/users/small-2.jpg"
                      className="avatar-lg w-auto rounded-pill"
                      alt="rounded-pill"
                    />
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
                  <h5 className="header-title">Border Radius Size</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use the scaling classes for larger or smaller rounded
                    corners. Sizes range from <code>0</code> to <code>5</code>.
                  </p>
                  <div className="d-flex align-items-start flex-wrap gap-2">
                    <ImageWithBasePath
                      src="assets/img/users/avatar-4.jpg"
                      className="avatar-lg rounded-0"
                      alt="rounded-0"
                    />
                    <ImageWithBasePath
                      src="assets/img/users/avatar-4.jpg"
                      className="avatar-lg rounded-1"
                      alt="rounded-1"
                    />
                    <ImageWithBasePath
                      src="assets/img/users/avatar-4.jpg"
                      className="avatar-lg rounded-2"
                      alt="rounded-2"
                    />
                    <ImageWithBasePath
                      src="assets/img/users/avatar-4.jpg"
                      className="avatar-lg rounded-3"
                      alt="rounded-3"
                    />
                    <ImageWithBasePath
                      src="assets/img/users/avatar-4.jpg"
                      className="avatar-lg rounded-4"
                      alt="rounded-4"
                    />
                    <ImageWithBasePath
                      src="assets/img/users/avatar-4.jpg"
                      className="avatar-lg rounded-5"
                      alt="rounded-5"
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
                  <h5 className="header-title">Text Selection</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use <code>user-select-all</code>,
                    <code>user-select-auto</code>, or
                    <code>user-select-none</code> class to the content which is
                    selected when the user interacts with it.
                  </p>
                  <p className="user-select-all">
                    This paragraph will be entirely selected when clicked by the
                    user.
                  </p>
                  <p className="user-select-auto">
                    This paragraph has default select behavior.
                  </p>
                  <p className="user-select-none mb-0">
                    This paragraph will not be selectable when clicked by the
                    user.
                  </p>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="header-title">Pointer Events</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Bootstrap provides <code>.pe-none</code> and
                    <code>.pe-auto</code> classes to prevent or add element
                    interactions.
                  </p>
                  <p>
                    <Link
                      to="#"
                      className="pe-none"
                      tabIndex={-1}
                      aria-disabled="true"
                    >
                      This link
                    </Link>
                    can not be clicked.
                  </p>
                  <p>
                    <Link to="#" className="pe-auto">
                      This link
                    </Link>
                    can be clicked (this is default behavior).
                  </p>
                  <p className="pe-none">
                    <Link to="#" tabIndex={-1} aria-disabled="true">
                      This link
                    </Link>
                    can not be clicked because the <code>pointer-events</code>
                    property is inherited from its parent. However,
                    <Link to="#" className="pe-auto">
                      this link
                    </Link>
                    has a <code>pe-auto</code> class and can be clicked.
                  </p>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="header-title">Overflow</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Adjust the <code>overflow</code> property on the fly with
                    four default values and classes. These classes are not
                    responsive by default.
                  </p>
                  <div className="d-flex flex-wrap gap-3">
                    <div
                      className="overflow-auto p-3 bg-light"
                      style={{ maxWidth: 260, maxHeight: 100 }}
                    >
                      This is an example of using <code>.overflow-auto</code> on
                      an element with set width and height dimensions. By
                      design, this content will vertically scroll.
                    </div>
                    <div
                      className="overflow-hidden p-3 bg-light"
                      style={{ maxWidth: 260, maxHeight: 100 }}
                    >
                      This is an example of using <code>.overflow-hidden</code>
                      on an element with set width and height dimensions.
                    </div>
                    <div
                      className="overflow-visible p-3 bg-light"
                      style={{ maxWidth: 260, maxHeight: 100 }}
                    >
                      This is an example of using <code>.overflow-visible</code>
                      on an elementwith set width and height dimensions.
                    </div>
                    <div
                      className="overflow-scroll p-3 bg-light"
                      style={{ maxWidth: 260, maxHeight: 100 }}
                    >
                      This is an example of using <code>.overflow-scroll</code>
                      on an elementwith set width and height dimensions.
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
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="header-title">Position in Arrange</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Arrange elements easily with the edge positioning utilities.
                    The format is
                    <code>
                      {"{"}property{"}"}-{"{"}position{"}"}
                    </code>
                    .
                  </p>
                  {/* Arrange elements */}
                  <div
                    className="position-relative p-5 bg-light bg-opacity-50 m-3 border rounded"
                    style={{ height: 180 }}
                  >
                    <div className="position-absolute top-0 start-0 avatar-xs bg-dark rounded" />
                    <div className="position-absolute top-0 end-0 avatar-xs bg-dark rounded" />
                    <div className="position-absolute top-50 start-50 avatar-xs bg-dark rounded" />
                    <div className="position-absolute bottom-50 end-50 avatar-xs bg-dark rounded" />
                    <div className="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded" />
                    <div className="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded" />
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
                  <h5 className="header-title">Position in Center</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    In addition, you can also center the elements with the
                    transform utility class <code>.translate-middle</code>.
                  </p>
                  {/* Center elements */}
                  <div
                    className="position-relative m-3 bg-light bg-opacity-50 border rounded"
                    style={{ height: 180 }}
                  >
                    <div className="position-absolute top-0 start-0 translate-middle avatar-xs bg-dark rounded" />
                    <div className="position-absolute top-0 start-50 translate-middle avatar-xs bg-dark rounded" />
                    <div className="position-absolute top-0 start-100 translate-middle avatar-xs bg-dark rounded" />
                    <div className="position-absolute top-50 start-0 translate-middle avatar-xs bg-dark rounded" />
                    <div className="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded" />
                    <div className="position-absolute top-50 start-100 translate-middle avatar-xs bg-dark rounded" />
                    <div className="position-absolute top-100 start-0 translate-middle avatar-xs bg-dark rounded" />
                    <div className="position-absolute top-100 start-50 translate-middle avatar-xs bg-dark rounded" />
                    <div className="position-absolute top-100 start-100 translate-middle avatar-xs bg-dark rounded" />
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
                  <h5 className="header-title">Position in Axis</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    By adding <code>.translate-middle-x</code> or
                    <code>.translate-middle-y</code> classes, elements can be
                    positioned only in horizontal or vertical direction.
                  </p>
                  {/* Center elements */}
                  <div
                    className="position-relative m-3 bg-light border rounded"
                    style={{ height: 180 }}
                  >
                    <div className="position-absolute top-0 start-0 avatar-xs bg-dark rounded " />
                    <div className="position-absolute top-0 start-50 translate-middle-x avatar-xs bg-dark rounded" />
                    <div className="position-absolute top-0 end-0 avatar-xs bg-dark rounded" />
                    <div className="position-absolute top-50 start-0 translate-middle-y avatar-xs bg-dark rounded" />
                    <div className="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded" />
                    <div className="position-absolute top-50 end-0 translate-middle-y avatar-xs bg-dark rounded" />
                    <div className="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded" />
                    <div className="position-absolute bottom-0 start-50 translate-middle-x avatar-xs bg-dark rounded" />
                    <div className="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded" />
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
                  <h5 className="header-title">Shadows</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    While shadows on components are disabled by default in
                    Bootstrap and can be enabled via
                    <code>$enable-shadows</code>, you can also quickly add or
                    remove a shadow with our
                    <code>box-shadow</code> utility classes. Includes support
                    for <code>.shadow-none</code> and three default sizes (which
                    have associated variables to match).
                  </p>
                  <div className="shadow-none p-2 mb-2 bg-light rounded">
                    No shadow
                  </div>
                  <div className="shadow-sm p-2 mb-2 rounded">Small shadow</div>
                  <div className="shadow p-2 mb-2 rounded">Regular shadow</div>
                  <div className="shadow-lg p-2 rounded">Larger shadow</div>
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
                  <h5 className="header-title">Width</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Width utilities are generated from the utility API in
                    <code>_utilities.scss</code>. Includes support for
                    <code>25%</code>, <code>50%</code>, <code>75%</code>,
                    <code>100%</code>, and
                    <code>auto</code> by default. Modify those values as you
                    need to generate different utilities here.
                  </p>
                  {/* Width */}
                  <div className="w-25 p-2 bg-light mb-2">Width 25%</div>
                  <div className="w-50 p-2 bg-light mb-2">Width 50%</div>
                  <div className="w-75 p-2 bg-light mb-2">Width 75%</div>
                  <div className="w-100 p-2 bg-light mb-2">Width 100%</div>
                  <div className="w-auto p-2 bg-light">Width auto</div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="header-title">Height</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Height utilities are generated from the utility API in
                    <code>_utilities.scss</code>. Includes support for
                    <code>25%</code>, <code>50%</code>, <code>75%</code>,
                    <code>100%</code>, and
                    <code>auto</code> by default. Modify those values as you
                    need to generate different utilities here.
                  </p>
                  <div
                    className="d-flex flex-wrap gap-2 align-items-start"
                    style={{ height: 255 }}
                  >
                    {/* Height */}
                    <div className="h-25 p-2 bg-light">Height25%</div>
                    <div className="h-50 p-2 bg-light">Height50%</div>
                    <div className="h-75 p-2 bg-light">Height75%</div>
                    <div className="h-100 p-2 bg-light">Height100%</div>
                    <div className="h-auto p-2 bg-light">Height auto</div>
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
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="header-title">Object Fit</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Change the value of the
                    <Link to="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">
                      <code>object-fit</code>
                      property
                    </Link>
                    with our responsive <code>object-fit</code> utility classes.
                    This property tells the content to fill the parent container
                    in a variety of ways, such as preserving the aspect ratio or
                    stretching to take up as much space as possible.
                  </p>
                  <div className="d-flex align-items-start flex-wrap gap-3 text-center">
                    <div>
                      <ImageWithBasePath
                        src="assets/img/media/img-2.jpg"
                        className="object-fit-contain border rounded avatar-xl"
                        alt="..."
                      />
                      <p className="mt-1 mb-0">
                        <code className="user-select-all">
                          .object-fit-contain
                        </code>
                      </p>
                    </div>
                    <div>
                      <ImageWithBasePath
                        src="assets/img/media/img-2.jpg"
                        className="object-fit-cover border rounded avatar-xl"
                        alt="..."
                      />
                      <p className="mt-1 mb-0">
                        <code className="user-select-all">
                          .object-fit-cover
                        </code>
                      </p>
                    </div>
                    <div>
                      <ImageWithBasePath
                        src="assets/img/media/img-2.jpg"
                        className="object-fit-fill border rounded avatar-xl"
                        alt="..."
                      />
                      <p className="mt-1 mb-0">
                        <code className="user-select-all">
                          .object-fit-fill
                        </code>
                      </p>
                    </div>
                    <div>
                      <ImageWithBasePath
                        src="assets/img/media/img-2.jpg"
                        className="object-fit-scale border rounded avatar-xl"
                        alt="..."
                      />
                      <p className="mt-1 mb-0">
                        <code className="user-select-all">
                          .object-fit-scale
                        </code>
                      </p>
                    </div>
                    <div>
                      <ImageWithBasePath
                        src="assets/img/media/img-2.jpg"
                        className="object-fit-none border rounded avatar-xl"
                        alt="..."
                      />
                      <p className="mt-1 mb-0">
                        <code className="user-select-all">
                          .object-fit-none
                        </code>
                      </p>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end end */}
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="header-title">Z-index</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Use <code>z-index</code> utilities to stack elements on top
                    of one another. Requires a <code>position</code> value other
                    than <code>static</code>, which can be set with custom
                    styles or using our
                    <Link to="/docs/5.3/utilities/position/">
                      position utilities
                    </Link>
                    .
                  </p>
                  <div className="bd-example-zindex-levels position-relative">
                    <div className="z-3 position-absolute p-5 rounded-3 bg-primary">
                      <span>z-3</span>
                    </div>
                    <div className="z-2 position-absolute p-5 rounded-3 bg-success">
                      <span>z-2</span>
                    </div>
                    <div className="z-1 position-absolute p-5 rounded-3 bg-warning">
                      <span>z-1</span>
                    </div>
                    <div className="z-0 position-absolute p-5 rounded-3 bg-danger">
                      <span>z-0</span>
                    </div>
                    <div className="z-n1 position-absolute p-5 rounded-3 bg-info">
                      <span>z-n1</span>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end end */}
        </div>
        {/* End Content */}
        {/* Start Footer */}
        <div className="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top">
          <p className="text-title mb-0">
            ©
            <Link to="#" className="link-primary">
              Kanakku
            </Link>
            , All Rights Reserved
          </p>
          <p className="text-title">Version : 1.3.8</p>
        </div>
        {/* End Footer */}
      </div>
      {/* ========================
			End Page Content
		========================= */}
    </>
  );
};

export default UiUtilities;
