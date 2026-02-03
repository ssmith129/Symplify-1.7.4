
import { Link } from "react-router";
import Footer from "../../../../../../core/common/footer/footer";

const UiCollapse = () => {
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
              <h4 className="fs-18 fw-semibold mb-0">Collapse</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Base UI</Link>
                </li>
                <li className="breadcrumb-item active">Collapse</li>
              </ol>
            </div>
          </div>
          {/* End Page Header */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Collapse</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-muted mb-3">
                    Bootstrap's collapse provides the way to toggle the
                    visibility of any content or element. Please read the
                    official
                    <Link
                      to="https://getbootstrap.com/docs/5.2/components/collapse/"
                      target="_blank"
                    >
                      Bootstrap
                    </Link>
                    documentation for a full list of options.
                  </p>
                  <p>
                    <Link
                      className="btn btn-primary"
                      data-bs-toggle="collapse"
                      to="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Link with to
                    </Link>
                    <button
                      className="btn btn-primary ms-1"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Button with data-bs-target
                    </button>
                  </p>
                  <div className="collapse show" id="collapseExample">
                    <div className="card card-body mb-0">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </div>
                  </div>
                </div>
                {/* end card-body*/}
              </div>
              {/* end card*/}
            </div>
            {/* end col*/}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Collapse Horizontal</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-muted mb-3">
                    The collapse plugin also supports horizontal collapsing. Add
                    the <code>.collapse-horizontal</code> modifier class to
                    transition the <code>width</code> instead of
                    <code>height</code> and set a <code>width</code> on the
                    immediate child element.
                  </p>
                  <p>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseWidthExample"
                      aria-expanded="false"
                      aria-controls="collapseWidthExample"
                    >
                      Toggle width collapse
                    </button>
                  </p>
                  <div style={{ minHeight: 105 }}>
                    <div
                      className="collapse collapse-horizontal"
                      id="collapseWidthExample"
                    >
                      <div
                        className="card card-body mb-0"
                        style={{ width: 300 }}
                      >
                        This is some placeholder content for a horizontal
                        collapse. It's hidden by default and shown when
                        triggered.
                      </div>
                    </div>
                  </div>
                </div>
                {/* end card-body*/}
              </div>
              {/* end card*/}
            </div>
            {/* end col*/}
          </div>
          {/* end row*/}
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Multiple Targets</h5>
                </div>
                {/* end card header */}
                <div className="card-body">
                  <p className="text-muted mb-3">
                    
                    Multiple <code>&lt;button&gt;</code> or
                    <code>&lt;a&gt;</code> can show and hide an element if they
                    each reference it with their <code>to</code> or
                    <code>data-bs-target</code> attribute
                  </p>
                  <p className="mb-0">
                    <Link
                      className="btn btn-primary me-2"
                      data-bs-toggle="collapse"
                      to="#multiCollapseExample1"
                      role="button"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample1"
                    >
                      Toggle first element
                    </Link>
                    <button
                      className="btn btn-primary me-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#multiCollapseExample2"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample2"
                    >
                      Toggle second element
                    </button>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target=".multi-collapse"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample1 multiCollapseExample2"
                    >
                      Toggle both elements
                    </button>
                  </p>
                  <div className="row">
                    <div className="col">
                      <div
                        className="collapse multi-collapsee mt-2"
                        id="multiCollapseExample1"
                      >
                        <div className="card card-body mb-0">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="collapse multi-collapse mt-2"
                        id="multiCollapseExample2"
                      >
                        <div className="card card-body mb-0">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row*/}
                </div>
                {/* end card-body*/}
              </div>
              {/* end card*/}
            </div>
            {/* end col*/}
          </div>
          {/* end row*/}
        </div>
        {/*End container */}
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

export default UiCollapse;
