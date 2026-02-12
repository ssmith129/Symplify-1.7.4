import { Link } from "react-router";
import "slick-carousel/slick/slick.css";
import DefaultEditor from "react-simple-wysiwyg";
import { DatePicker } from "antd";
import { useState } from "react";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import {
  Assignee,
  Priority,
  StatusActive,
} from "../../../../../../core/common/selectOption";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import TagInput from "../../../../../../core/common/Taginput";
import { all_routes } from "../../../../../routes/all_routes";

const Notes = () => {
  const [tags, setTags] = useState<string[]>(["Pending", "Done"]);
  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };

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
        <div className="content pb-0">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
            <div className="flex-grow-1">
              <h4 className="fs-18 fw-semibold mb-0">Notes</h4>
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
                  Notes
                </li>
              </ol>
            </div>
          </div>
          {/* End Page Header */}
          {/* start row */}
          <div className="row">
            <div className="col-xl-3 col-md-12 theiaStickySidebar ">
              <div className="notes-sidebar">
              <div className="card">
                <div className="card-body">
                  <div className="mb-3 pb-3 border-bottom">
                    <h6 className="fs-16 d-flex align-items-center mb-0">
                      <i className="ti ti-file-text me-2" />
                      Notes List
                    </h6>
                  </div>
                  <div className="border-bottom pb-3">
                    <div
                      className="nav flex-column nav-pills"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <button
                        className="d-flex text-start align-items-center fw-medium fs-15 nav-link active mb-1"
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="true"
                      >
                        <i className="ti ti-inbox me-2" />
                        All Notes
                      </button>
                      <button
                        className="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-1"
                        id="v-pills-messages-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-messages"
                        aria-selected="false"
                      >
                        <i className="ti ti-star me-2" />
                        Important
                      </button>
                      <button
                        className="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-0"
                        id="v-pills-settings-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-settings"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-settings"
                        aria-selected="false"
                      >
                        <i className="ti ti-trash me-2" />
                        Trash
                      </button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="border-bottom px-2 pb-3 mb-3">
                      <h6 className="fs-16 mb-2">Tags</h6>
                      <div className="d-flex flex-column mt-2">
                        <Link
                          to="#"
                          className="text-info d-flex align-items-center mb-2"
                        >
                          <i className="ti ti-square-filled square-rotate fs-10 me-2" />
                          Pending
                        </Link>
                        <Link
                          to="#"
                          className="text-danger d-flex align-items-center mb-2"
                        >
                          <i className="ti ti-square-filled square-rotate fs-10 me-2" />
                          Onhold
                        </Link>
                        <Link
                          to="#"
                          className="text-warning d-flex align-items-center mb-2"
                        >
                          <i className="ti ti-square-filled square-rotate fs-10 me-2" />
                          Inprogress
                        </Link>
                        <Link
                          to="#"
                          className="text-success d-flex align-items-center"
                        >
                          <i className="ti ti-square-filled square-rotate fs-10 me-2" />
                          Done
                        </Link>
                      </div>
                    </div>
                    <div className="px-2">
                      <h6 className="fs-16 mb-2">Priority</h6>
                      <div className="d-flex flex-column mt-2">
                        <Link
                          to="#"
                          className="text-warning d-flex align-items-center mb-2"
                        >
                          <i className="ti ti-square-filled square-rotate fs-10 me-2" />
                          Medium
                        </Link>
                        <Link
                          to="#"
                          className="text-success d-flex align-items-center mb-2"
                        >
                          <i className="ti ti-square-filled square-rotate fs-10 me-2" />
                          High
                        </Link>
                        <Link
                          to="#"
                          className="text-danger d-flex align-items-center"
                        >
                          <i className="ti ti-square-filled square-rotate fs-10 me-2" />
                          Low
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              </div>
              {/* end card */}
            </div>{" "}
            {/* end col */}
            <div className="col-xl-9">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div>
                      <select className="form-select">
                        <option>Bulk Actions</option>
                        <option>Delete Marked</option>
                        <option>Unmark All</option>
                        <option>Mark All</option>
                      </select>
                    </div>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="dropdown-toggle btn border bg-white rounded text-dark d-inline-flex align-items-center drop-arrow-none"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-file-export me-1" />
                          Export
                          <i className="ti ti-chevron-down align-middle ms-1" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-file-type-pdf me-1" />
                              Export as PDF
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-file-type-xls me-1" />
                              Export as Excel{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <Link
                        to="#"
                        className="btn btn-primary btn-md d-flex align-items-center"
                        data-bs-toggle="modal"
                        data-bs-target="#add_note"
                      >
                        <i className="ti ti-circle-plus me-1" />
                        Add Notes
                      </Link>
                    </div>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
              <div className="tab-content" id="v-pills-tabContent2">
                {/* Items */}
                <div
                  className="tab-pane fade active show"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div>
                    {/* start row */}
                    <div className="row">
                      <div className="col-md-12">
                        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
                          <div className="d-flex align-items-center">
                            <h4 className="mb-0">Important Notes </h4>
                          </div>
                          <div>
                            <Link
                              to="#"
                              className="text-danger fs-15"
                            >
                              <i className="ti ti-times me-1" /> Close{" "}
                            </Link>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end col */}
                    </div>
                    {/* end row */}
                    {/* start row */}
                    <div className="row">
                      <div className="col-md-4 d-flex">
                        <div className="card flex-fill">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <span className="badge badge-outline-warning d-inline-flex align-items-center">
                                <i className="ti ti-circle-filled fs-7 me-1" />
                                Medium
                              </span>
                              <div>
                                <Link
                                  to="#"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ti ti-dots-vertical" />
                                </Link>
                                <div className="dropdown-menu notes-menu dropdown-menu-end">
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-note-units"
                                  >
                                    <span>
                                      <i className="ti ti-edit me-1" />
                                    </span>
                                    Edit
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <span>
                                      <i className="ti ti-trash me-1" />
                                    </span>
                                    Delete
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                  >
                                    <span>
                                      <i className="ti ti-star me-1" />
                                    </span>
                                    Not Important
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view-note-units"
                                  >
                                    <span>
                                      <i className="ti ti-eye me-1" />
                                    </span>
                                    View
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="my-3">
                              <h6 className="fs-16 text-truncate mb-1">
                                <Link to="#">
                                  Plan a trip to another country
                                </Link>
                              </h6>
                              <p className="mb-3 d-flex align-items-center text-dark">
                                <i className="ti ti-calendar me-1" />
                                20 Jan 2024
                              </p>
                              <p className="text-truncate line-clamb-2 text-wrap">
                                Space, the final frontier. These are the voyages
                                of the Starship Enterprise.
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top pt-3">
                              <div className="d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="avatar avatar-md me-2"
                                >
                                  <ImageWithBasePath
                                    src="./assets/img/profiles/avatar-01.jpg"
                                    alt="Profile"
                                    className="img-fluid rounded-circle"
                                  />
                                </Link>
                                <span className="text-info d-flex align-items-center">
                                  <i className="ti ti-square-filled square-rotate fs-10 me-1" />
                                  Personal
                                </span>
                              </div>
                              <div className="d-flex align-items-center">
                                <Link to="#" className="me-2">
                                  <span>
                                    <i className="ti ti-star text-warning" />
                                  </span>
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <i className="ti ti-trash text-danger" />
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card */}
                      </div>{" "}
                      {/* end col */}
                      <div className="col-md-4 d-flex">
                        <div className="card flex-fill">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <span className="badge badge-outline-danger d-inline-flex align-items-center">
                                <i className="ti ti-circle-filled fs-7 me-1" />
                                Low
                              </span>
                              <div>
                                <Link
                                  to="#"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ti ti-dots-vertical" />
                                </Link>
                                <div className="dropdown-menu notes-menu dropdown-menu-end">
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-note-units"
                                  >
                                    <span>
                                      <i className="ti ti-edit me-1" />
                                    </span>
                                    Edit
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <span>
                                      <i className="ti ti-trash me-1" />
                                    </span>
                                    Delete
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                  >
                                    <span>
                                      <i className="ti ti-star me-1" />
                                    </span>
                                    Not Important
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view-note-units"
                                  >
                                    <span>
                                      <i className="ti ti-eye me-1" />
                                    </span>
                                    View
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="my-3">
                              <h6 className="fs-16 text-truncate mb-1">
                                <Link to="#">
                                  Improve touch typing
                                </Link>
                              </h6>
                              <p className="mb-3 d-flex align-items-center text-dark">
                                <i className="ti ti-calendar me-1" />
                                22 Jan 2024
                              </p>
                              <p className="text-truncate line-clamb-2 text-wrap">
                                Well, the way they make shows is, they make one
                                show.
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top pt-3">
                              <div className="d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="avatar avatar-md me-2"
                                >
                                  <ImageWithBasePath
                                    src="./assets/img/profiles/avatar-02.jpg"
                                    alt="Profile"
                                    className="img-fluid rounded-circle"
                                  />
                                </Link>
                                <span className="text-success d-flex align-items-center">
                                  <i className="ti ti-square-filled square-rotate fs-10 me-1" />
                                  Work
                                </span>
                              </div>
                              <div className="d-flex align-items-center">
                                <Link to="#" className="me-2">
                                  <span>
                                    <i className="ti ti-star text-warning" />
                                  </span>
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <i className="ti ti-trash text-danger" />
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card */}
                      </div>{" "}
                      {/* end col */}
                      <div className="col-md-4 d-flex">
                        <div className="card flex-fill">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <span className="badge badge-outline-danger d-inline-flex align-items-center">
                                <i className="ti ti-circle-filled fs-7 me-1" />
                                Low
                              </span>
                              <div>
                                <Link
                                  to="#"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ti ti-dots-vertical" />
                                </Link>
                                <div className="dropdown-menu notes-menu dropdown-menu-end">
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-note-units"
                                  >
                                    <span>
                                      <i className="ti ti-edit me-1" />
                                    </span>
                                    Edit
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <span>
                                      <i className="ti ti-trash me-1" />
                                    </span>
                                    Delete
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                  >
                                    <span>
                                      <i className="ti ti-star me-1" />
                                    </span>
                                    Not Important
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view-note-units"
                                  >
                                    <span>
                                      <i className="ti ti-eye me-1" />
                                    </span>
                                    View
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="my-3">
                              <h6 className="fs-16 text-truncate mb-1">
                                <Link to="#">
                                  Learn calligraphy
                                </Link>
                              </h6>
                              <p className="mb-3 d-flex align-items-center text-dark">
                                <i className="ti ti-calendar me-1" />
                                24 Jan 2024
                              </p>
                              <p className="text-truncate line-clamb-2 text-wrap">
                                Calligraphy, the art of beautiful handwriting.
                                It derive from Greek.
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border-top pt-3">
                              <div className="d-flex align-items-center">
                                <Link
                                  to="#"
                                  className="avatar avatar-md me-2"
                                >
                                  <ImageWithBasePath
                                    src="./assets/img/profiles/avatar-03.jpg"
                                    alt="Profile"
                                    className="img-fluid rounded-circle"
                                  />
                                </Link>
                                <span className="text-info d-flex align-items-center">
                                  <i className="ti ti-square-filled square-rotate fs-10 me-1" />
                                  Social
                                </span>
                              </div>
                              <div className="d-flex align-items-center">
                                <Link to="#" className="me-2">
                                  <span>
                                    <i className="ti ti-star text-warning" />
                                  </span>
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <i className="ti ti-trash text-danger" />
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card */}
                      </div>{" "}
                      {/* end col */}
                    </div>
                  </div>
                  {/* end row */}
                  {/* start row */}
                  <div className="row">
                    <div className="col-md-4 d-flex">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge badge-outline-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-7 me-1" />
                              High
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <i className="ti ti-edit me-1" />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <i className="ti ti-trash me-1" />
                                  </span>
                                  Delete
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  <span>
                                    <i className="ti ti-star me-1" />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <i className="ti ti-eye me-1" />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h6 className="fs-16 text-truncate mb-1">
                              <Link to="#">Backup Files EOD</Link>
                            </h6>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              20 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Project files should be took backup before end of
                              the day.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-md me-2"
                              >
                                <ImageWithBasePath
                                  src="./assets/img/profiles/avatar-05.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-info d-flex align-items-center">
                                <i className="ti ti-square-filled square-rotate fs-10 me-1" />
                                Personal
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="ti ti-star text-warning" />
                                </span>
                              </Link>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* end card body */}
                      </div>
                      {/* end card */}
                    </div>{" "}
                    {/* end col */}
                    <div className="col-md-4 d-flex">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge badge-outline-danger d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-7 me-1" />
                              Low
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <i className="ti ti-edit me-1" />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <i className="ti ti-trash me-1" />
                                  </span>
                                  Delete
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  <span>
                                    <i className="ti ti-star me-1" />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <i className="ti ti-eye me-1" />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h6 className="fs-16 text-truncate mb-1">
                              <Link to="#">
                                Download Server Logs
                              </Link>
                            </h6>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              25 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Server log is a text document that contains a
                              record of all activity.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-md me-2"
                              >
                                <ImageWithBasePath
                                  src="./assets/img/profiles/avatar-06.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-success d-flex align-items-center">
                                <i className="ti ti-square-filled square-rotate fs-10 me-1" />
                                Work
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="ti ti-star text-warning" />
                                </span>
                              </Link>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* end card body */}
                      </div>
                      {/* end card */}
                    </div>{" "}
                    {/* end col */}
                    <div className="col-md-4 d-flex">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge badge-outline-warning d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-7 me-1" />
                              Medium
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <i className="ti ti-edit me-1" />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <i className="ti ti-trash me-1" />
                                  </span>
                                  Delete
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  <span>
                                    <i className="ti ti-star me-1" />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <i className="ti ti-eye me-1" />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h6 className="fs-16 text-truncate mb-1">
                              <Link to="#">
                                Team meet at Starbucks
                              </Link>
                            </h6>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              26 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Meeting all teamets at Starbucks for identifying
                              them all.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-md me-2"
                              >
                                <ImageWithBasePath
                                  src="./assets/img/profiles/avatar-07.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-warning d-flex align-items-center">
                                <i className="ti ti-square-filled square-rotate fs-10 me-1" />
                                Social
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="ti ti-star text-warning" />
                                </span>
                              </Link>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end card body */}
                      </div>{" "}
                      {/* end card */}
                    </div>{" "}
                    {/* end col */}
                    <div className="col-md-4 d-flex">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge badge-outline-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-7 me-1" />
                              High
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <i className="ti ti-edit me-1" />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <i className="ti ti-trash me-1" />
                                  </span>
                                  Delete
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  <span>
                                    <i className="ti ti-star me-1" />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <i className="ti ti-eye me-1" />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h6 className="fs-16 text-truncate mb-1">
                              <Link to="#">
                                Create a compost pile
                              </Link>
                            </h6>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              27 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Compost pile refers to fruit and vegetable scraps,
                              used tea etc..
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-md me-2"
                              >
                                <ImageWithBasePath
                                  src="./assets/img/profiles/avatar-08.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-warning d-flex align-items-center">
                                <i className="ti ti-square-filled square-rotate fs-10 me-1" />
                                Social
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="ti ti-star text-warning" />
                                </span>
                              </Link>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* end card body */}
                      </div>
                      {/* end card */}
                    </div>{" "}
                    {/* end col */}
                    <div className="col-md-4 d-flex">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge badge-outline-danger d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-7 me-1" />
                              Low
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <i className="ti ti-edit me-1" />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <i className="ti ti-trash me-1" />
                                  </span>
                                  Delete
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  <span>
                                    <i className="ti ti-star me-1" />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <i className="ti ti-eye me-1" />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h6 className="fs-16 text-truncate mb-1">
                              <Link to="#">
                                Take a hike at a local park
                              </Link>
                            </h6>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              28 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Hiking involves a long energetic walk in a natural
                              environment.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-md me-2"
                              >
                                <ImageWithBasePath
                                  src="./assets/img/profiles/avatar-09.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-info d-flex align-items-center">
                                <i className="ti ti-square-filled square-rotate fs-10 me-1" />
                                Personal
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="ti ti-star text-warning" />
                                </span>
                              </Link>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end card body */}
                      </div>{" "}
                      {/* end card */}
                    </div>{" "}
                    {/* end col */}
                    <div className="col-md-4 d-flex">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge badge-outline-info d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-7 me-1" />
                              medium
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <i className="ti ti-edit me-1" />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <i className="ti ti-trash me-1" />
                                  </span>
                                  Delete
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  <span>
                                    <i className="ti ti-star me-1" />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <i className="ti ti-eye me-1" />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h6 className="fs-16 text-truncate mb-1">
                              <Link to="#">
                                Research a topic interested
                              </Link>
                            </h6>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              28 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Research a topic interested by listen actively and
                              attentively.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-md me-2"
                              >
                                <ImageWithBasePath
                                  src="./assets/img/profiles/avatar-10.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-success d-flex align-items-center">
                                <i className="ti ti-square-filled square-rotate fs-10 me-1" />
                                Work
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="ti ti-star text-warning" />
                                </span>
                              </Link>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* end card body */}
                      </div>
                      {/* end card */}
                    </div>{" "}
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
                {/* Items */}
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  {/* start row */}
                  <div className="row">
                    <div className="col-md-4 d-flex">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge badge-outline-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-7 me-1" />
                              High
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <i className="ti ti-edit me-1" />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <i className="ti ti-trash me-1" />
                                  </span>
                                  Delete
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  <span>
                                    <i className="ti ti-star me-1" />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <i className="ti ti-eye me-1" />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h6 className="fs-16 text-truncate mb-1">
                              <Link to="#">Backup Files EOD</Link>
                            </h6>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              20 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Project files should be took backup before end of
                              the day.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-md me-2"
                              >
                                <ImageWithBasePath
                                  src="./assets/img/profiles/avatar-05.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-info d-flex align-items-center">
                                <i className="ti ti-square-filled square-rotate fs-10 me-1" />
                                Personal
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="ti ti-star text-warning" />
                                </span>
                              </Link>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* end card body */}
                      </div>
                      {/* end card */}
                    </div>{" "}
                    {/* end col */}
                    <div className="col-md-4 d-flex">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge badge-outline-danger d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-7 me-1" />
                              Low
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <i className="ti ti-edit me-1" />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <i className="ti ti-trash me-1" />
                                  </span>
                                  Delete
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  <span>
                                    <i className="ti ti-star me-1" />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <i className="ti ti-eye me-1" />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h6 className="fs-16 text-truncate mb-1">
                              <Link to="#">
                                Download Server Logs
                              </Link>
                            </h6>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              25 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Server log is a text document that contains a
                              record of all activity.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-md me-2"
                              >
                                <ImageWithBasePath
                                  src="./assets/img/profiles/avatar-06.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-success d-flex align-items-center">
                                <i className="ti ti-square-filled square-rotate fs-10 me-1" />
                                Work
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="ti ti-star text-warning" />
                                </span>
                              </Link>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* end card body */}
                      </div>
                      {/* end card */}
                    </div>{" "}
                    {/* end col */}
                    <div className="col-md-4 d-flex">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge badge-outline-warning d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-7 me-1" />
                              Medium
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <i className="ti ti-edit me-1" />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <i className="ti ti-trash me-1" />
                                  </span>
                                  Delete
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  <span>
                                    <i className="ti ti-star me-1" />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <i className="ti ti-eye me-1" />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h6 className="fs-16 text-truncate mb-1">
                              <Link to="#">
                                Team meet at Starbucks
                              </Link>
                            </h6>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              26 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Meeting all teamets at Starbucks for identifying
                              them all.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-md me-2"
                              >
                                <ImageWithBasePath
                                  src="./assets/img/profiles/avatar-07.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-warning d-flex align-items-center">
                                <i className="ti ti-square-filled square-rotate fs-10 me-1" />
                                Social
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="ti ti-star text-warning" />
                                </span>
                              </Link>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* end card body */}
                      </div>
                      {/* end card */}
                    </div>{" "}
                    {/* end col */}
                    <div className="col-md-4 d-flex">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge badge-outline-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-7 me-1" />
                              High
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <i className="ti ti-edit me-1" />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <i className="ti ti-trash me-1" />
                                  </span>
                                  Delete
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  <span>
                                    <i className="ti ti-star me-1" />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <i className="ti ti-eye me-1" />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h6 className="fs-16 text-truncate mb-1">
                              <Link to="#">
                                Create a compost pile
                              </Link>
                            </h6>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              27 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Compost pile refers to fruit and vegetable scraps,
                              used tea etc..
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-md me-2"
                              >
                                <ImageWithBasePath
                                  src="./assets/img/profiles/avatar-08.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-warning d-flex align-items-center">
                                <i className="ti ti-square-filled square-rotate fs-10 me-1" />
                                Social
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="ti ti-star text-warning" />
                                </span>
                              </Link>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* end card body */}
                      </div>
                      {/* end card */}
                    </div>{" "}
                    {/* end col */}
                    <div className="col-md-4 d-flex">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge badge-outline-danger d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-7 me-1" />
                              Low
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <i className="ti ti-edit me-1" />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <i className="ti ti-trash me-1" />
                                  </span>
                                  Delete
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  <span>
                                    <i className="ti ti-star me-1" />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <i className="ti ti-eye me-1" />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h6 className="fs-16 text-truncate mb-1">
                              <Link to="#">
                                Take a hike at a local park
                              </Link>
                            </h6>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              28 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Hiking involves a long energetic walk in a natural
                              environment.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-md me-2"
                              >
                                <ImageWithBasePath
                                  src="./assets/img/profiles/avatar-09.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-info d-flex align-items-center">
                                <i className="ti ti-square-filled square-rotate fs-10 me-1" />
                                Personal
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="ti ti-star text-warning" />
                                </span>
                              </Link>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* end card body */}
                      </div>
                      {/* end card */}
                    </div>{" "}
                    {/* end col */}
                    <div className="col-md-4 d-flex">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge badge-outline-info d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-7 me-1" />
                              medium
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <i className="ti ti-edit me-1" />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <i className="ti ti-trash me-1" />
                                  </span>
                                  Delete
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  <span>
                                    <i className="ti ti-star me-1" />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <i className="ti ti-eye me-1" />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h6 className="fs-16 text-truncate mb-1">
                              <Link to="#">
                                Research a topic interested
                              </Link>
                            </h6>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              28 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Research a topic interested by listen actively and
                              attentively.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-md me-2"
                              >
                                <ImageWithBasePath
                                  src="./assets/img/profiles/avatar-10.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-success d-flex align-items-center">
                                <i className="ti ti-square-filled square-rotate fs-10 me-1" />
                                Work
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="ti ti-star text-warning" />
                                </span>
                              </Link>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* end card body */}
                      </div>
                      {/* end card */}
                    </div>{" "}
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
                {/* Items */}
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-end">
                      <Link to="#" className="btn btn-danger mb-3">
                        <span>
                          {" "}
                          <i className="ti ti-trash f-20 me-2" />{" "}
                        </span>{" "}
                        Restore all
                      </Link>
                    </div>
                  </div>
                  {/* start row */}
                  <div className="row">
                    <div className="col-md-4 d-flex">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge badge-outline-success d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-7 me-1" />
                              High
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <i className="ti ti-edit me-1" />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <i className="ti ti-trash me-1" />
                                  </span>
                                  Delete
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  <span>
                                    <i className="ti ti-star me-1" />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <i className="ti ti-eye me-1" />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h6 className="fs-16 text-truncate mb-1">
                              <Link to="#">
                                Create a compost pile
                              </Link>
                            </h6>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              27 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Compost pile refers to fruit and vegetable scraps,
                              used tea etc..
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-md me-2"
                              >
                                <ImageWithBasePath
                                  src="./assets/img/profiles/avatar-08.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-warning d-flex align-items-center">
                                <i className="ti ti-square-filled square-rotate fs-10 me-1" />
                                Social
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="ti ti-star text-warning" />
                                </span>
                              </Link>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* end card body */}
                      </div>
                      {/* end card */}
                    </div>{" "}
                    {/* end col */}
                    <div className="col-md-4 d-flex">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge badge-outline-danger d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-7 me-1" />
                              Low
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <i className="ti ti-edit me-1" />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <i className="ti ti-trash me-1" />
                                  </span>
                                  Delete
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  <span>
                                    <i className="ti ti-star me-1" />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <i className="ti ti-eye me-1" />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h6 className="fs-16 text-truncate mb-1">
                              <Link to="#">
                                Take a hike at a local park
                              </Link>
                            </h6>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              28 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Hiking involves a long energetic walk in a natural
                              environment.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-md me-2"
                              >
                                <ImageWithBasePath
                                  src="./assets/img/profiles/avatar-09.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-info d-flex align-items-center">
                                <i className="ti ti-square-filled square-rotate fs-10 me-1" />
                                Personal
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="ti ti-star text-warning" />
                                </span>
                              </Link>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* end card body */}
                      </div>
                      {/* end card */}
                    </div>{" "}
                    {/* end col */}
                    <div className="col-md-4 d-flex">
                      <div className="card flex-fill">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="badge badge-outline-info d-inline-flex align-items-center">
                              <i className="ti ti-circle-filled fs-7 me-1" />
                              medium
                            </span>
                            <div>
                              <Link
                                to="#"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="dropdown-menu notes-menu dropdown-menu-end">
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#edit-note-units"
                                >
                                  <span>
                                    <i className="ti ti-edit me-1" />
                                  </span>
                                  Edit
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                >
                                  <span>
                                    <i className="ti ti-trash me-1" />
                                  </span>
                                  Delete
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                >
                                  <span>
                                    <i className="ti ti-star me-1" />
                                  </span>
                                  Not Important
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view-note-units"
                                >
                                  <span>
                                    <i className="ti ti-eye me-1" />
                                  </span>
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="my-3">
                            <h6 className="fs-16 text-truncate mb-1">
                              <Link to="#">
                                Research a topic interested
                              </Link>
                            </h6>
                            <p className="mb-3 d-flex align-items-center text-dark">
                              <i className="ti ti-calendar me-1" />
                              28 Jan 2024
                            </p>
                            <p className="text-truncate line-clamb-2 text-wrap">
                              Research a topic interested by listen actively and
                              attentively.
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between border-top pt-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-md me-2"
                              >
                                <ImageWithBasePath
                                  src="./assets/img/profiles/avatar-10.jpg"
                                  alt="Profile"
                                  className="img-fluid rounded-circle"
                                />
                              </Link>
                              <span className="text-success d-flex align-items-center">
                                <i className="ti ti-square-filled square-rotate fs-10 me-1" />
                                Work
                              </span>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to="#" className="me-2">
                                <span>
                                  <i className="ti ti-star text-warning" />
                                </span>
                              </Link>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                              >
                                <span>
                                  <i className="ti ti-trash text-danger" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* end card body */}
                      </div>
                      {/* end card */}
                    </div>{" "}
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>{" "}
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* End Content */}
        {/* Footer Start */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©{" "}
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

      <>
        {/* Start Add Note */}
        <div className="modal fade" id="add_note">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add Notes</h4>
                <button
                  type="button"
                  className="btn-close btn-close-modal custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <form>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Note Title</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Assignee</label>
                        <CommonSelect
                          options={Assignee}
                          className="select"
                          defaultValue={Assignee[0]}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label">Tag</label>
                        <TagInput
                          initialTags={tags}
                          onTagsChange={handleTagsChange}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label">Priority</label>
                        <CommonSelect
                          options={Priority}
                          className="select"
                          defaultValue={Priority[0]}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label">Due Date</label>
                        <div className="input-groupicon calender-input">
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
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label">Status</label>
                        <CommonSelect
                          options={StatusActive}
                          className="select"
                          defaultValue={StatusActive[0]}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-0 summer-description-box">
                        <label className="form-label">Descriptions</label>
                        <div className="editor">
                          <DefaultEditor />
                        </div>
                        <small>Maximum 60 Characters</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* End Add Note */}
        {/* Start Edit Note */}
        <div className="modal fade" id="edit-note-units">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Notes</h4>
                <button
                  type="button"
                  className="btn-close btn-close-modal custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <form >
                <div className="modal-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Note Title</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Team meet at Starbucks"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Assignee</label>
                        <CommonSelect
                          options={Assignee}
                          className="select"
                          defaultValue={Assignee[0]}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label">Tag</label>
                        <TagInput
                          initialTags={tags}
                          onTagsChange={handleTagsChange}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label">Priority</label>
                        <CommonSelect
                          options={Priority}
                          className="select"
                          defaultValue={Priority[0]}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label">Due Date</label>
                        <div className="input-groupicon calender-input">
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
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label">Status</label>
                        <CommonSelect
                          options={StatusActive}
                          className="select"
                          defaultValue={StatusActive[0]}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-0 summer-description-box">
                        <label className="form-label">Descriptions</label>
                        <div className="editor mb-2">
                          <DefaultEditor />
                        </div>
                        <small>Maximum 60 Characters</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-light me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* End Edit Note */}
        {/* Start Delete */}
        <div className="modal fade" id="delete_modal">
          <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content">
              <div className="modal-body text-center">
                <div className="mb-3">
                  <span className="avatar bg-danger">
                    <i className="ti ti-trash fs-24" />
                  </span>
                </div>
                <h6 className="mb-1">Delete Confirmation</h6>
                <p className="mb-3">Are you sure want to delete?</p>
                <div className="d-flex justify-content-center">
                  <Link
                    to="#"
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <Link to={all_routes.notes} className="btn btn-danger">
                    Yes, Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Delete */}
        {/* Start View Note */}
        <div className="modal fade" id="view-note-units">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header">
                    <div className="d-flex align-items-center">
                      <h4 className="modal-title me-3">Notes</h4>
                      <p className="text-info">Personal</p>
                    </div>
                    <button
                      type="button"
                      className="btn-close btn-close-modal custom-btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-12">
                        <div>
                          <h4 className="mb-2">
                            Meet Lisa to discuss project details
                          </h4>
                          <p>
                            Hiking is a long, vigorous walk, usually on trails
                            or footpaths in the countryside. Walking for
                            pleasure developed in Europe during the eighteenth
                            century. Religious pilgrimages have existed much
                            longer but they involve walking long distances for a
                            spiritual purpose associated with specific religions
                            and also we achieve inner peace while we hike at a
                            local park.
                          </p>
                          <p className="badge badge-outline-danger d-inline-flex align-items-center mb-0">
                            <i className="ti ti-circle-filled fs-6 me-1" /> High
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <Link
                      to="#"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End View Note */}
      </>
    </>
  );
};

export default Notes;
