import { Link } from "react-router";
import { all_routes } from "../../../../../routes/all_routes";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import {
  addAssignee,
  priority,
  StatusCompleted,
  tag,
} from "../../../../../../core/common/selectOption";

const TodoList = () => {
  return (
    <>
      {/* ========================
              Start Page Content
          ========================= */}
      <div className="page-wrapper">
        <div className="content content-two">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
            <div className="flex-grow-1">
              <h4 className="fs-18 fw-semibold mb-0">Todo List</h4>
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
                  Todo List
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
                  className="btn btn-icon btn-sm bg-white text-dark me-2"
                >
                  <i className="ti ti-layout-grid" />
                </Link>
              </li>
              <li>
                <Link
                  to={all_routes.todoList}
                  className="btn btn-icon btn-sm bg-primary text-white active me-2"
                >
                  <i className="ti ti-list-tree" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            {/* table list start */}
            <div className="table-responsive table-nowrap">
              <table className="table border mb-0">
                <thead className="table-light text-uppercase">
                  <tr>
                    <th>
                      <div className="form-check form-check-md">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="select-all"
                        />
                      </div>
                    </th>
                    <th>Company Name</th>
                    <th>Tags</th>
                    <th>Assignee</th>
                    <th>Created On</th>
                    <th>Progress</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <span className="mx-2 d-flex align-items-center rating-select">
                          <i className="ti ti-star" />
                        </span>
                        <span className="d-flex align-items-center">
                          <i className="ti ti-square-rounded text-danger me-2" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <p className="fw-medium text-dark">
                        Respond to any pending messages
                      </p>
                    </td>
                    <td>
                      <span className="badge bg-info">Social</span>
                    </td>
                    <td>
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
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="img"
                          />
                        </span>
                      </div>
                    </td>
                    <td>14 Jan 2024</td>
                    <td>
                      <span className="d-block mb-1">Progress : 100%</span>
                      <div
                        className="progress progress-xs flex-grow-1 mb-2"
                        style={{ width: 190 }}
                      >
                        <div
                          className="progress-bar bg-success rounded"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </td>
                    <td>14 Jan 2024</td>
                    <td>
                      <span className="badge badge-soft-success d-inline-flex align-items-center">
                        <i className="ti ti-circle-filled fs-5 me-1" />
                        Completed
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_todo"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <span className="mx-2 d-flex align-items-center rating-select">
                          <i className="ti ti-star-filled filled" />
                        </span>
                        <span className="d-flex align-items-center">
                          <i className="ti ti-square-rounded text-purple me-2" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <p className="fw-medium text-dark">
                        Update calendar and schedule
                      </p>
                    </td>
                    <td>
                      <span className="badge bg-primary">Meetings</span>
                    </td>
                    <td>
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
                    </td>
                    <td>21 Jan 2024</td>
                    <td>
                      <span className="d-block mb-1">Progress : 15%</span>
                      <div
                        className="progress progress-xs flex-grow-1 mb-2"
                        style={{ width: 190 }}
                      >
                        <div
                          className="progress-bar bg-danger rounded"
                          role="progressbar"
                          style={{ width: "15%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </td>
                    <td>21 Jan 2024</td>
                    <td>
                      <span className="badge badge-soft-secondary d-inline-flex align-items-center">
                        <i className="ti ti-circle-filled fs-5 me-1" />
                        Pending
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_todo"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <span className="mx-2 d-flex align-items-center rating-select">
                          <i className="ti ti-star" />
                        </span>
                        <span className="d-flex align-items-center">
                          <i className="ti ti-square-rounded text-purple me-2" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <p className="fw-medium text-dark">
                        Respond to any pending messages
                      </p>
                    </td>
                    <td>
                      <span className="badge bg-danger">Research</span>
                    </td>
                    <td>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-04.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-06.jpg"
                            alt="img"
                          />
                        </span>
                      </div>
                    </td>
                    <td>20 Feb 2024</td>
                    <td>
                      <span className="d-block mb-1">Progress : 45%</span>
                      <div
                        className="progress progress-xs flex-grow-1 mb-2"
                        style={{ width: 190 }}
                      >
                        <div
                          className="progress-bar bg-warning rounded"
                          role="progressbar"
                          style={{ width: "45%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </td>
                    <td>20 Feb 2024</td>
                    <td>
                      <span className="badge badge-soft-primary d-inline-flex align-items-center">
                        <i className="ti ti-circle-filled fs-5 me-1" />
                        Inprogress
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_todo"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <span className="mx-2 d-flex align-items-center rating-select">
                          <i className="ti ti-star" />
                        </span>
                        <span className="d-flex align-items-center">
                          <i className="ti ti-square-rounded text-warning me-2" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <p className="fw-medium text-dark">
                        Attend team meeting at 10:00 AM
                      </p>
                    </td>
                    <td>
                      <span className="badge bg-primary">Web Design</span>
                    </td>
                    <td>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="img"
                          />
                        </span>
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
                            src="assets/img/profiles/avatar-07.jpg"
                            alt="img"
                          />
                        </span>
                      </div>
                    </td>
                    <td>15 Mar 2024</td>
                    <td>
                      <span className="d-block mb-1">Progress : 40%</span>
                      <div
                        className="progress progress-xs flex-grow-1 mb-2"
                        style={{ width: 190 }}
                      >
                        <div
                          className="progress-bar bg-warning rounded"
                          role="progressbar"
                          style={{ width: "40%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </td>
                    <td>15 Mar 2024</td>
                    <td>
                      <span className="badge badge-soft-primary d-inline-flex align-items-center">
                        <i className="ti ti-circle-filled fs-5 me-1" />
                        Inprogress
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_todo"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <span className="mx-2 d-flex align-items-center rating-select">
                          <i className="ti ti-star" />
                        </span>
                        <span className="d-flex align-items-center">
                          <i className="ti ti-square-rounded text-purple me-2" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <p className="fw-medium text-dark">
                        Check and respond to emails
                      </p>
                    </td>
                    <td>
                      <span className="badge bg-info">Reminder</span>
                    </td>
                    <td>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-08.jpg"
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
                            src="assets/img/profiles/avatar-10.jpg"
                            alt="img"
                          />
                        </span>
                      </div>
                    </td>
                    <td>12 Apr 2024</td>
                    <td>
                      <span className="d-block mb-1">Progress : 65%</span>
                      <div
                        className="progress progress-xs flex-grow-1 mb-2"
                        style={{ width: 190 }}
                      >
                        <div
                          className="progress-bar bg-purple rounded"
                          role="progressbar"
                          style={{ width: "65%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </td>
                    <td>12 Apr 2024</td>
                    <td>
                      <span className="badge badge-soft-secondary d-inline-flex align-items-center">
                        <i className="ti ti-circle-filled fs-5 me-1" />
                        Pending
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_todo"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <span className="mx-2 d-flex align-items-center rating-select">
                          <i className="ti ti-star" />
                        </span>
                        <span className="d-flex align-items-center">
                          <i className="ti ti-square-rounded text-warning me-2" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <p className="fw-medium text-dark">
                        Coordinate with department head
                      </p>
                    </td>
                    <td>
                      <span className="badge bg-danger">Internal</span>
                    </td>
                    <td>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-11.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-12.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-13.jpg"
                            alt="img"
                          />
                        </span>
                      </div>
                    </td>
                    <td>20 Apr 2024</td>
                    <td>
                      <span className="d-block mb-1">Progress : 85%</span>
                      <div
                        className="progress progress-xs flex-grow-1 mb-2"
                        style={{ width: 190 }}
                      >
                        <div
                          className="progress-bar bg-pink rounded"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </td>
                    <td>20 Apr 2024</td>
                    <td>
                      <span className="badge badge-soft-danger d-inline-flex align-items-center">
                        <i className="ti ti-circle-filled fs-5 me-1" />
                        Onhold
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_todo"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <span className="mx-2 d-flex align-items-center rating-select">
                          <i className="ti ti-star" />
                        </span>
                        <span className="d-flex align-items-center">
                          <i className="ti ti-square-rounded text-success me-2" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <p className="fw-medium text-dark">
                        Plan tasks for the next day
                      </p>
                    </td>
                    <td>
                      <span className="badge bg-info">Social</span>
                    </td>
                    <td>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-14.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-15.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-16.jpg"
                            alt="img"
                          />
                        </span>
                      </div>
                    </td>
                    <td>06 Jul 2024</td>
                    <td>
                      <span className="d-block mb-1">Progress : 100%</span>
                      <div
                        className="progress progress-xs flex-grow-1 mb-2"
                        style={{ width: 190 }}
                      >
                        <div
                          className="progress-bar bg-success rounded"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </td>
                    <td>06 Jul 2024</td>
                    <td>
                      <span className="badge badge-soft-success d-inline-flex align-items-center">
                        <i className="ti ti-circle-filled fs-5 me-1" />
                        Completed
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_todo"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <span className="mx-2 d-flex align-items-center rating-select">
                          <i className="ti ti-star" />
                        </span>
                        <span className="d-flex align-items-center">
                          <i className="ti ti-square-rounded text-success me-2" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <p className="fw-medium text-dark">
                        Finalize project proposal
                      </p>
                    </td>
                    <td>
                      <span className="badge bg-success">Projects</span>
                    </td>
                    <td>
                      <div className="avatar-list-stacked avatar-group-sm">
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-17.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-18.jpg"
                            alt="img"
                          />
                        </span>
                        <span className="avatar avatar-rounded">
                          <ImageWithBasePath
                            className="border border-white"
                            src="assets/img/profiles/avatar-19.jpg"
                            alt="img"
                          />
                        </span>
                      </div>
                    </td>
                    <td>02 Sep 2024</td>
                    <td>
                      <span className="d-block mb-1">Progress : 65%</span>
                      <div
                        className="progress progress-xs flex-grow-1 mb-2"
                        style={{ width: 190 }}
                      >
                        <div
                          className="progress-bar bg-danger rounded"
                          role="progressbar"
                          style={{ width: "65%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </td>
                    <td>02 Sep 2024</td>
                    <td>
                      <span className="badge badge-soft-danger d-inline-flex align-items-center">
                        <i className="ti ti-circle-filled fs-5 me-1" />
                        Onhold
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_todo"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <span className="mx-2 d-flex align-items-center rating-select">
                          <i className="ti ti-star" />
                        </span>
                        <span className="d-flex align-items-center">
                          <i className="ti ti-square-rounded text-purple me-2" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <p className="fw-medium text-dark">
                        Submit to supervisor by EOD
                      </p>
                    </td>
                    <td>
                      <span className="badge bg-info">Reminder</span>
                    </td>
                    <td>
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
                    </td>
                    <td>15 Nov 2024</td>
                    <td>
                      <span className="d-block mb-1">Progress : 75%</span>
                      <div
                        className="progress progress-xs flex-grow-1 mb-2"
                        style={{ width: 190 }}
                      >
                        <div
                          className="progress-bar bg-purple rounded"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </td>
                    <td>15 Nov 2024</td>
                    <td>
                      <span className="badge badge-soft-primary d-inline-flex align-items-center">
                        <i className="ti ti-circle-filled fs-5 me-1" />
                        Inprogress
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_todo"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="form-check form-check-md">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <span className="mx-2 d-flex align-items-center rating-select">
                          <i className="ti ti-star" />
                        </span>
                        <span className="d-flex align-items-center">
                          <i className="ti ti-square-rounded text-success me-2" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <p className="fw-medium text-dark">
                        Prepare presentation slides
                      </p>
                    </td>
                    <td>
                      <span className="badge bg-danger">Research</span>
                    </td>
                    <td>
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
                    </td>
                    <td>10 Dec 2024</td>
                    <td>
                      <span className="d-block mb-1">Progress : 90%</span>
                      <div
                        className="progress progress-xs flex-grow-1 mb-2"
                        style={{ width: 190 }}
                      >
                        <div
                          className="progress-bar bg-pink rounded"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </td>
                    <td>10 Dec 2024</td>
                    <td>
                      <span className="badge badge-soft-secondary d-inline-flex align-items-center">
                        <i className="ti ti-circle-filled fs-5 me-1" />
                        Pending
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_todo"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* table list end */}
          </div>
        </div>
        {/* Start Footer*/}
        <div className="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top">
          <p className="text-dark mb-0">
            © 2025
            <Link to="#" className="link-primary">
              Kanakku
            </Link>
            , All Rights Reserved
          </p>
          <p className="text-dark">Version : 1.3.8</p>
        </div>
        {/* End Footer*/}
      </div>
      {/* ========================
              End Page Content
          ========================= */}
      {/* Add Todo Start */}
      <div className="modal fade" id="add_todo">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add New Todo</h4>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-3">
                      <label className="form-label">Todo Title</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Tag</label>
                      <CommonSelect
                        options={tag}
                        className="select"
                        defaultValue={tag[0]}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Priority</label>
                      <CommonSelect
                        options={priority}
                        className="select"
                        defaultValue={priority[0]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">Descriptions</label>
                      <div className="quill-editor" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <label className="form-label">Add Assignee</label>
                      <CommonSelect
                        options={addAssignee}
                        className="select"
                        defaultValue={addAssignee[0]}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-0">
                      <label className="form-label">Status</label>
                      <CommonSelect
                        options={StatusCompleted}
                        className="select"
                        defaultValue={StatusCompleted[0]}
                      />
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
                  Add New Todo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Add Todo End */}
      {/* Edit Todo Start */}
      <div className="modal fade" id="edit_todo">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-3">
                      <label className="form-label">Todo Title</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Update calendar and schedule"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Tag</label>
                      <CommonSelect
                        options={tag}
                        className="select"
                        defaultValue={tag[1]}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Priority</label>
                      <CommonSelect
                        options={priority}
                        className="select"
                        defaultValue={priority[1]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">Descriptions</label>
                      <div className="quill-editor" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <label className="form-label">Add Assignee</label>
                      <CommonSelect
                        options={addAssignee}
                        className="select"
                        defaultValue={addAssignee[1]}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-0">
                      <label className="form-label">Status</label>
                      <CommonSelect
                        options={StatusCompleted}
                        className="select"
                        defaultValue={StatusCompleted[1]}
                      />
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
      {/* Edit Todo End */}
      {/* Todo Details Start */}
      <div className="modal fade" id="view_todo">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark">
              <h4 className="modal-title text-white">
                Respond to any pending messages
              </h4>
              <span className="badge bg-danger d-inline-flex align-items-center">
                <i className="ti ti-square me-1" />
                Urgent
              </span>
              <span>
                <i className="ti ti-star-filled text-warning" />
              </span>
              <Link to="#">
                <i className="ti ti-trash text-white" />
              </Link>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close bg-transparent fs-16 text-white position-static"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body">
              <h5 className="mb-2">Task Details</h5>
              <div className="border rounded mb-3 p-2">
                <div className="row row-gap-3">
                  <div className="col-md-4">
                    <div className="text-center">
                      <span className="d-block mb-1">Created On</span>
                      <p className="text-dark">22 July 2025</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center">
                      <span className="d-block mb-1">Due Date</span>
                      <p className="text-dark">22 July 2025</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center">
                      <span className="d-block mb-1">Status</span>
                      <span className="badge badge-soft-success d-inline-flex align-items-center">
                        <i className="fas fa-circle fs-6 me-1" />
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <h5 className="mb-2">Description</h5>
                <p>
                  Hiking is a long, vigorous walk, usually on trails or
                  footpaths in the countryside. Walking for pleasure developed
                  in Europe during the eighteenth century. Religious pilgrimages
                  have existed much longer but they involve walking long
                  distances for a spiritual purpose associated with specific
                  religions and also we achieve inner peace while we hike at a
                  local park.
                </p>
              </div>
              <div className="mb-3">
                <h5 className="mb-2">Tags</h5>
                <div className="d-flex align-items-center">
                  <span className="badge bg-danger me-2">Internal</span>
                  <span className="badge bg-success me-2">Projects</span>
                  <span className="badge bg-info">Reminder</span>
                </div>
              </div>
              <div>
                <h5 className="mb-2">Assignee</h5>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Todo Details End */}
      {/* Delete Modal Start */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-xl bg-transparent-danger text-danger mb-3">
                <i className="ti ti-trash-x fs-36" />
              </span>
              <h4 className="mb-1">Confirm Delete</h4>
              <p className="mb-3">
                You want to delete all the marked items, this cant be undone
                once you delete.
              </p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link to={all_routes.todo} className="btn btn-danger">
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Delete Modal End */}
    </>
  );
};

export default TodoList;
