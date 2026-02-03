
import { Link } from "react-router";
import Footer from "../../../../../../core/common/footer/footer";

const UiPagination = () => {
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
              <h4 className="fs-18 fw-semibold mb-0">Pagination</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Base UI</Link>
                </li>
                <li className="breadcrumb-item active">Pagination</li>
              </ol>
            </div>
          </div>
          {/* End Page Header */}
          {/* start row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card card-h-100">
                <div className="card-header">
                  <h5 className="card-title">Default Pagination</h5>
                </div>
                <div className="card-body">
                  <p>
                    Simple pagination inspired by Rdio, great for apps and
                    search results.
                  </p>
                  <nav>
                    <ul className="pagination mb-0">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">«</span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Next"
                        >
                          <span aria-hidden="true">»</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Disabled and Active States</h5>
                </div>
                <div className="card-body">
                  <p>
                    Pagination links are customizable for different
                    circumstances. Use <code>.disabled</code> for links that
                    appear un-clickable and <code>.active</code> to indicate the
                    current page.
                  </p>
                  <nav aria-label="...">
                    <ul className="pagination mb-0">
                      <li className="page-item disabled">
                        <Link className="page-link" to="#" tabIndex={-1}>
                          Previous
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item active" aria-current="page">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </nav>
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
                  <h5 className="card-title">Alignment</h5>
                </div>
                <div className="card-body">
                  <p>
                    Change the alignment of pagination components with flexbox
                    utilities.
                  </p>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled">
                        <Link
                          className="page-link"
                          to="#"
                          tabIndex={-1}
                        >
                          Previous
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                      <li className="page-item disabled">
                        <Link
                          className="page-link"
                          to="#"
                          tabIndex={-1}
                        >
                          Previous
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Sizing</h5>
                </div>
                <div className="card-body">
                  <p>
                    Add <code> .pagination-lg</code> or
                    <code> .pagination-sm</code> for additional sizes.
                  </p>
                  <nav>
                    <ul className="pagination pagination-lg">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">«</span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Next"
                        >
                          <span aria-hidden="true">»</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <nav>
                    <ul className="pagination pagination-sm mb-0">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">«</span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Next"
                        >
                          <span aria-hidden="true">»</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
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
                  <h5 className="card-title">Custom Icon Pagination</h5>
                </div>
                <div className="card-body">
                  <p>
                    Add <code> .pagination-boxed</code> for rounded pagination.
                  </p>
                  <nav>
                    <ul className="pagination pagination-boxed">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                          <i className="ti ti-chevron-left" />
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Next"
                        >
                          <i className="ti ti-chevron-right align-middle" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <nav>
                    <ul className="pagination pagination-boxed">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                          <i data-lucide="arrow-left" />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Next"
                        >
                          <i data-lucide="arrow-right" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <nav>
                    <ul className="pagination pagination-boxed mb-0">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                          <i
                            className="isax isax-arrow-left-line-duotone fs-18"
                          />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Next"
                        >
                           <i
                            className="isax isax-arrow-right-line-duotone fs-18"
                          />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Boxed Pagination</h5>
                </div>
                <div className="card-body">
                  <p>
                    Add <code> .pagination-boxed</code> for rounded pagination.
                  </p>
                  <nav>
                    <ul className="pagination pagination-sm pagination-boxed">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">«</span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Next"
                        >
                          <span aria-hidden="true">»</span>
                        </Link>
                      </li>
                    </ul>
                    <ul className="pagination pagination-boxed">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">«</span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Next"
                        >
                          <span aria-hidden="true">»</span>
                        </Link>
                      </li>
                    </ul>
                    <ul className="pagination pagination-lg pagination-boxed mb-0">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">«</span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Next"
                        >
                          <span aria-hidden="true">»</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          {/* start row  */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Rounded Pagination</h5>
                </div>
                <div className="card-body">
                  <p>
                    Add <code> .pagination-rounded</code> for rounded
                    pagination.
                  </p>
                  <nav>
                    <ul className="pagination pagination-rounded pagination-boxed mb-0">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">«</span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Next"
                        >
                          <span aria-hidden="true">»</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Soft Pagination</h5>
                </div>
                <div className="card-body">
                  <p>
                    Add <code> .pagination-rounded</code> for rounded
                    pagination.
                  </p>
                  <nav>
                    <ul className="pagination pagination-soft-primary pagination-boxed mb-0">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                          <i className="ti ti-chevron-left" />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Next"
                        >
                          <i className="ti ti-chevron-right" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
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
                  <h5 className="card-title">Custom Color Pagination</h5>
                </div>
                <div className="card-body">
                  <p>
                    Add <code> .pagination-boxed</code> for rounded pagination.
                  </p>
                  <nav>
                    <ul className="pagination pagination-boxed pagination-primary">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                          <i className="ti ti-chevron-left" />
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Next"
                        >
                          <i className="ti ti-chevron-right align-middle" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <nav>
                    <ul className="pagination pagination-boxed pagination-secondary">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                          <i data-lucide="arrow-left" />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Next"
                        >
                          <i data-lucide="arrow-right" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <nav>
                    <ul className="pagination pagination-boxed pagination-dark mb-0">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                           <i
                            className="isax isax-arrow-left-line-duotone fs-18"
                          />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Next"
                        >
                           <i
                            className="isax isax-arrow-right-line-duotone fs-18"
                          />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Gradient Color Pagination</h5>
                </div>
                <div className="card-body">
                  <p>
                    Add <code> .pagination-boxed</code> for rounded pagination.
                  </p>
                  <nav>
                    <ul className="pagination pagination-boxed pagination-gradient pagination-primary">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                          <i className="ti ti-chevron-left" />
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Next"
                        >
                          <i className="ti ti-chevron-right align-middle" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <nav>
                    <ul className="pagination pagination-boxed pagination-secondary pagination-gradient">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                          <i data-lucide="arrow-left" />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Next"
                        >
                          <i data-lucide="arrow-right" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <nav>
                    <ul className="pagination pagination-boxed pagination-dark pagination-gradient mb-0">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                           <i
                            className="isax isax-arrow-left-line-duotone fs-18"
                          />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          4
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          5
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Next"
                        >
                           <i
                            className="isax isax-arrow-right-line-duotone fs-18"
                          />
                        </Link>
                      </li>
                    </ul>
                  </nav>
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

export default UiPagination;
