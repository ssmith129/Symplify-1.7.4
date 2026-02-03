import { Link } from "react-router";
import { all_routes } from "../../../../../routes/all_routes";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import { DatePicker } from "antd";

const Todo = () => {

   const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
 
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
          <h4 className="fs-18 fw-semibold mb-0">Todo</h4>
        </div>
        <div className="text-end">
          <ol className="breadcrumb m-0 py-0">
            <li className="breadcrumb-item">
              <Link to={all_routes.dashboard}>Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">Applications</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Todo
            </li>
          </ol>
        </div>
      </div>
      {/* End Page Header */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
        <Link
          to="#"
          className="btn btn-sm btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#add_todo"
        >
          <i className="ti ti-circle-plus me-1" />
          Create New
        </Link>
        <ul className="d-flex align-items-center flex-shrink-0 list-unstyled mb-0">
          <li>
            <Link
              to={all_routes.todo}
              className="btn btn-icon btn-sm bg-primary text-white active me-2"
            >
              <i className="ti ti-layout-grid" />
            </Link>
          </li>
          <li>
            <Link
              to={all_routes.todoList}
              className="btn btn-icon btn-sm bg-white text-dark me-2"
            >
              <i className="ti ti-list-tree" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="card shadow-none mb-0">
        <div className="card-body">
          {/* start row */}
          <div className="row gy-3 mb-3">
            <div className="col-sm-4">
              <div className="d-flex align-items-center">
                <h6 className="fs-16 mb-0">Total Todo</h6>
                <span className="badge badge-dark rounded-pill badge-xs ms-2">
                  +1
                </span>
              </div>
            </div>
            {/* end col */}
            <div className="col-sm-8">
              <div className="d-flex align-items-center justify-content-end">
                <p className="mb-0 me-2 pe-2 border-end fs-14">
                  Total Task : <span className="text-dark"> 55 </span>
                </p>
                <p className="mb-0 me-2 pe-2 border-end fs-14">
                  Pending : <span className="text-dark"> 15 </span>
                </p>
                <p className="mb-0 fs-14">
                  Completed : <span className="text-dark"> 40 </span>
                </p>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="border-bottom mb-3">
            {/* start row */}
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                  <div className="input-group input-group-flat w-auto">
                    <span className="input-group-text">
                      <i className="ti ti-calendar" />
                    </span>
                   <DatePicker
                          className="form-control datetimepicker"
                          format={{
                            format: "DD-MM-YYYY",
                            type: "mask",
                          }}
                          getPopupContainer={getModalContainer}
                          placeholder="DD-MM-YYYY"
                          suffixIcon={null} 
                        />
                  </div>
                  <div className="d-flex align-items-center flex-wrap gap-2">
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle btn btn-sm fs-14 border bg-white rounded text-dark d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        All Tags
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            All Tags
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Internal
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Projects
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Meetings
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Reminder
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Research
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle btn btn-sm fs-14 border bg-white rounded text-dark d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <span className="text-body me-1"> Sort By : </span>
                        Recent
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Recently Added
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Ascending
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Desending
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Last Month
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Last 7 Days
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          <div
            className="accordion  accordion-arrow-none"
            id="accordionExample"
          >
            {/* Accordion Start */}
            <div className="accordion-item mb-3 border-0 border-bottom pb-2">
              {/* start row */}
              <div className="row align-items-center mb-2 row-gap-3">
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="accordion-header cursor-pointer"
                    id="headingTwo"
                  >
                    <div
                      className="accordion-button bg-transparent shadow-none p-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-controls="collapseTwo"
                    >
                      <div className="d-flex align-items-center w-100">
                        <div className="me-2">
                          <Link to="#">
                            <span>
                              <i className="ti ti-chevron-down" />
                            </span>
                          </Link>
                        </div>
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-square-rounded text-purple me-2" />
                          </span>
                          <h5 className="fw-semibold mb-0">High</h5>
                          <span className="badge bg-light text-dark rounded-pill ms-2">
                            15
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-8 col-sm-6">
                  <div className="d-flex align-items-center justify-content-sm-end">
                    <Link to="#" className="btn btn-light btn-sm">
                      See All
                      <i className="ti ti-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
                {/* end col */}
              </div>
              {/* end row */}
              <div
                id="collapseTwo"
                className="accordion-collapse collapse show"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body p-0">
                  <div className="list-group list-group-flush">
                    <div className="list-group-item list-item-hover border rounded mb-2 p-3">
                      {/* start row */}
                      <div className="row align-items-center row-gap-3">
                        <div className="col-lg-6 col-md-7">
                          <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                            <span className="me-2 d-flex align-items-center">
                              <i className="ti ti-grid-dots text-dark" />
                            </span>
                            <div className="form-check form-check-md me-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                            <span className="me-2 d-flex align-items-center rating-select">
                              <i className="ti ti-star-filled filled" />
                            </span>
                            <div className="strike-info">
                              <h4 className="fs-14 mb-0">
                                Finalize project proposal
                              </h4>
                            </div>
                            <span className="badge badge-soft-info ms-2 d-inline-flex align-items-center p-1">
                              <i className="ti ti-calendar me-1" />
                              15 Jan 2025
                            </span>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-6 col-md-5">
                          <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                            <span className="badge badge-success bg-success me-2">
                              Projects
                            </span>
                            <span className="badge badge-soft-danger d-inline-flex align-items-center me-2">
                              <i className="fas fa-circle fs-6 me-1" />
                              Onhold
                            </span>
                            <div className="d-flex align-items-center">
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-01.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-02.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-03.jpg"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="dropdown ms-2">
                                <Link
                                  to="#"
                                  className="d-inline-flex align-items-center"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ti ti-dots-vertical" />
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end">
                                  <li>
                                    <Link
                                      to="#"
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit_todo"
                                    >
                                      <i className="ti ti-edit me-2" />
                                      Edit
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                    >
                                      <i className="ti ti-trash me-2" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#view_todo"
                                    >
                                      <i className="ti ti-eye me-2" />
                                      View
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    <div className="list-group-item list-item-hover border rounded mb-2 p-3">
                      {/* start row */}
                      <div className="row align-items-center row-gap-3">
                        <div className="col-lg-6 col-md-7">
                          <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                            <span className="me-2 d-flex align-items-center">
                              <i className="ti ti-grid-dots text-dark" />
                            </span>
                            <div className="form-check form-check-md me-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                            <span className="me-2 rating-select d-flex align-items-center">
                              <i className="ti ti-star" />
                            </span>
                            <div className="strike-info">
                              <h4 className="fs-14 mb-0">
                                Submit to supervisor by EOD
                              </h4>
                            </div>
                            <span className="badge badge-soft-info ms-2 d-inline-flex align-items-center p-1">
                              <i className="ti ti-calendar me-1" />
                              25 May 2024
                            </span>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-6 col-md-5">
                          <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                            <span className="badge bg-danger me-2">
                              Internal
                            </span>
                            <span className="badge badge-soft-secondary d-flex align-items-center me-2">
                              <i className="fas fa-circle fs-6 me-1" />
                              Inprogress
                            </span>
                            <div className="d-flex align-items-center">
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-01.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-02.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-03.jpg"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="dropdown ms-2">
                                <Link
                                  to="#"
                                  className="d-inline-flex align-items-center"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ti ti-dots-vertical" />
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end">
                                  <li>
                                    <Link
                                      to="#"
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit_todo"
                                    >
                                      <i className="ti ti-edit me-2" />
                                      Edit
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                    >
                                      <i className="ti ti-trash me-2" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#view_todo"
                                    >
                                      <i className="ti ti-eye me-2" />
                                      View
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    <div className="list-group-item list-item-hover border rounded mb-2 p-3">
                      {/* start row */}
                      <div className="row align-items-center row-gap-3">
                        <div className="col-lg-6 col-md-7">
                          <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3 todo-strike-content">
                            <span className="me-2 d-flex align-items-center">
                              <i className="ti ti-grid-dots text-dark" />
                            </span>
                            <div className="form-check form-check-md me-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />
                            </div>
                            <span className="me-2 rating-select d-flex align-items-center">
                              <i className="ti ti-star" />
                            </span>
                            <div className="strike-info">
                              <h4 className="fs-14 mb-0">
                                Prepare presentation slides
                              </h4>
                            </div>
                            <span className="badge badge-soft-info ms-2 d-inline-flex align-items-center p-1">
                              <i className="ti ti-calendar me-1" />
                              15 Jan 2025
                            </span>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-6 col-md-5">
                          <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                            <span className="badge bg-info me-2">Reminder</span>
                            <span className="badge badge-soft-info d-flex align-items-center me-2">
                              <i className="fas fa-circle fs-6 me-1" />
                              Pending
                            </span>
                            <div className="d-flex align-items-center">
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-01.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-02.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-03.jpg"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="dropdown ms-2">
                                <Link
                                  to="#"
                                  className="d-inline-flex align-items-center"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ti ti-dots-vertical" />
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end">
                                  <li>
                                    <Link
                                      to="#"
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit_todo"
                                    >
                                      <i className="ti ti-edit me-2" />
                                      Edit
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                    >
                                      <i className="ti ti-trash me-2" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#view_todo"
                                    >
                                      <i className="ti ti-eye me-2" />
                                      View
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Accordion End */}
            {/* Accordion Start */}
            <div className="accordion-item mb-3 border-0 border-bottom pb-2">
              {/* start row */}
              <div className="row align-items-center mb-2 row-gap-3">
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="accordion-header cursor-pointer"
                    id="headingThree"
                  >
                    <div
                      className="accordion-button bg-transparent shadow-none p-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-controls="collapseThree"
                    >
                      <div className="d-flex align-items-center w-100">
                        <div className="me-2">
                          <Link to="#">
                            <span>
                              <i className="ti ti-chevron-down" />
                            </span>
                          </Link>
                        </div>
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-square-rounded text-warning me-2" />
                          </span>
                          <h5 className="fw-semibold mb-0">Medium</h5>
                          <span className="badge bg-light text-dark rounded-pill ms-2">
                            05
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-8 col-sm-6">
                  <div className="d-flex align-items-center justify-content-sm-end">
                    <Link to="#" className="btn btn-light btn-sm">
                      See All
                      <i className="ti ti-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
                {/* end col */}
              </div>
              {/* end row */}
              <div
                id="collapseThree"
                className="accordion-collapse collapse show"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body p-0">
                  <div className="list-group list-group-flush">
                    <div className="list-group-item list-item-hover border rounded mb-2 p-3">
                      {/* start row */}
                      <div className="row align-items-center row-gap-3">
                        <div className="col-lg-6 col-md-7">
                          <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                            <span className="me-2 d-flex align-items-center">
                              <i className="ti ti-grid-dots text-dark" />
                            </span>
                            <div className="form-check form-check-md me-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                            <span className="me-2 rating-select d-flex align-items-center">
                              <i className="ti ti-star" />
                            </span>
                            <div className="strike-info">
                              <h4 className="fs-14 mb-0">
                                Check and respond to emails
                              </h4>
                            </div>
                            <span className="badge badge-soft-info ms-2 d-inline-flex align-items-center p-1">
                              <i className="ti ti-calendar me-1" />
                              Tomorrow
                            </span>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-6 col-md-5">
                          <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                            <span className="badge bg-info me-2">Reminder</span>
                            <span className="badge badge-soft-success d-inline-flex align-items-center me-2">
                              <i className="fas fa-circle fs-6 me-1" />
                              Completed
                            </span>
                            <div className="d-flex align-items-center">
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-01.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-02.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-03.jpg"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="dropdown ms-2">
                                <Link
                                  to="#"
                                  className="d-inline-flex align-items-center"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ti ti-dots-vertical" />
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end">
                                  <li>
                                    <Link
                                      to="#"
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit_todo"
                                    >
                                      <i className="ti ti-edit me-2" />
                                      Edit
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                    >
                                      <i className="ti ti-trash me-2" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#view_todo"
                                    >
                                      <i className="ti ti-eye me-2" />
                                      View
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    <div className="list-group-item list-item-hover border rounded mb-2 p-3">
                      {/* start row */}
                      <div className="row align-items-center row-gap-3">
                        <div className="col-lg-6 col-md-7">
                          <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                            <span className="me-2 d-flex align-items-center">
                              <i className="ti ti-grid-dots text-dark" />
                            </span>
                            <div className="form-check form-check-md me-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                            <span className="me-2 rating-select d-flex align-items-center">
                              <i className="ti ti-star" />
                            </span>
                            <div className="strike-info">
                              <h4 className="fs-14 mb-0">
                                Coordinate with department head on progress
                              </h4>
                            </div>
                            <span className="badge badge-soft-info ms-2 d-inline-flex align-items-center p-1">
                              <i className="ti ti-calendar me-1" />
                              25 May 2024
                            </span>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-6 col-md-5">
                          <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                            <span className="badge bg-danger me-2">
                              Internal
                            </span>
                            <span className="badge badge-soft-secondary d-flex align-items-center me-2">
                              <i className="fas fa-circle fs-6 me-1" />
                              Inprogress
                            </span>
                            <div className="d-flex align-items-center">
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-06.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-09.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-02.jpg"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="dropdown ms-2">
                                <Link
                                  to="#"
                                  className="d-inline-flex align-items-center"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ti ti-dots-vertical" />
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end">
                                  <li>
                                    <Link
                                      to="#"
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit_todo"
                                    >
                                      <i className="ti ti-edit me-2" />
                                      Edit
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                    >
                                      <i className="ti ti-trash me-2" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#view_todo"
                                    >
                                      <i className="ti ti-eye me-2" />
                                      View
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Accordion End */}
            {/* Accordion Start */}
            <div className="accordion-item border-0 pb-2">
              {/* start row */}
              <div className="row align-items-center mb-2 row-gap-3">
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="accordion-header cursor-pointer"
                    id="headingFour"
                  >
                    <div
                      className="accordion-button bg-transparent shadow-none p-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-controls="collapseFour"
                    >
                      <div className="d-flex align-items-center w-100">
                        <div className="me-2">
                          <Link to="#">
                            <span>
                              <i className="ti ti-chevron-down" />
                            </span>
                          </Link>
                        </div>
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-square-rounded text-success me-2" />
                          </span>
                          <h5 className="fw-semibold mb-0">Low</h5>
                          <span className="badge bg-light text-dark rounded-pill ms-2">
                            24
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-8 col-sm-6">
                  <div className="d-flex align-items-center justify-content-sm-end">
                    <Link to="#" className="btn btn-light btn-sm">
                      See All
                      <i className="ti ti-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
                {/* end col */}
              </div>
              {/* end row */}
              <div
                id="collapseFour"
                className="accordion-collapse collapse show"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body p-0">
                  <div className="list-group list-group-flush">
                    <div className="list-group-item list-item-hover border rounded mb-2 p-3">
                      {/* start row */}
                      <div className="row align-items-center row-gap-3">
                        <div className="col-lg-6 col-md-7">
                          <div className="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3">
                            <span className="me-2 d-flex align-items-center">
                              <i className="ti ti-grid-dots text-dark" />
                            </span>
                            <div className="form-check form-check-md me-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                            </div>
                            <span className="me-2 rating-select d-flex align-items-center">
                              <i className="ti ti-star" />
                            </span>
                            <div className="strike-info">
                              <h4 className="fs-14 mb-0">
                                Plan tasks for the next day
                              </h4>
                            </div>
                            <span className="badge badge-soft-info ms-2 d-inline-flex align-items-center p-1">
                              <i className="ti ti-calendar me-1" />
                              Today
                            </span>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-6 col-md-5">
                          <div className="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3">
                            <span className="badge bg-info me-2">Social</span>
                            <span className="badge badge-soft-info d-flex align-items-center me-2">
                              <i className="fas fa-circle fs-6 me-1" />
                              Pending
                            </span>
                            <div className="d-flex align-items-center">
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-01.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-02.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar avatar-rounded">
                                  <ImageWithBasePath
                                    className="border border-white"
                                    src="assets/img/profiles/avatar-03.jpg"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="dropdown ms-2">
                                <Link
                                  to="#"
                                  className="d-inline-flex align-items-center"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="ti ti-dots-vertical" />
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-end">
                                  <li>
                                    <Link
                                      to="#"
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit_todo"
                                    >
                                      <i className="ti ti-edit me-2" />
                                      Edit
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                    >
                                      <i className="ti ti-trash me-2" />
                                      Delete
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#view_todo"
                                    >
                                      <i className="ti ti-eye me-2" />
                                      View
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Accordion End */}
          </div>
          <div className="text-center">
            <Link to="#" className="btn btn-primary btn-sm">
              <i className="ti ti-loader me-2" />
              Load More
            </Link>
          </div>
        </div>
        {/* end card body */}
      </div>
      {/* end card */}
    </div>
    {/* End Content */}
    {/* Footer Start */}
    <div className="footer text-center bg-white p-2 border-top">
      <p className="text-dark mb-0">
        2025 ©
        <Link to="#" className="link-primary">
          Preclinic
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

export default Todo;
