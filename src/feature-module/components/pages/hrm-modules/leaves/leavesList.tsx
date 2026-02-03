import { useState } from "react";
import { Link } from "react-router";
import PredefinedDatePicker from "../../../../../core/common/datePicker";
import FilterIndex from "../../../../../core/common/filter/filterIndex";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
import { LeavesListData } from "../../../../../core/json/leavesListData";
import Datatable from "../../../../../core/common/dataTable";
import LeavesModal from "./modal/leavesModal";

const LeavesList = () => {
  const data = LeavesListData;
  const columns = [
    {
      title: "ID",
      dataIndex: "ID",
      sorter: (a: any, b: any) => a.ID.length - b.ID.length,
    },
    {
      title: "Employee",
      dataIndex: "Employee",
      render: (text: any, record: any) => (
        <div className="d-flex align-items-center">
          <Link
            to="#"
            className="avatar me-2"
            data-bs-toggle="modal"
            data-bs-target="#view_staff"
          >
            <ImageWithBasePath
              src={`assets/img/users/${record.Image}`}
              alt="Doctor"
              className="rounded-circle"
            />
          </Link>
          <div>
            <h6 className="mb-0 fs-14 fw-semibold">
              <Link to="#" data-bs-toggle="modal" data-bs-target="#view_staff">
                {text}
              </Link>
            </h6>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.Employee.length - b.Employee.length,
    },
    {
      title: "Leave Type",
      dataIndex: "LeaveType",
      sorter: (a: any, b: any) => a.LeaveType.length - b.LeaveType.length,
    },
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a: any, b: any) => a.Date.length - b.Date.length,
    },
    {
      title: "Day",
      dataIndex: "Day",
      sorter: (a: any, b: any) => a.Day.length - b.Day.length,
    },
    {
      title: "AppliedOn",
      dataIndex: "AppliedOn",
      sorter: (a: any, b: any) => a.AppliedOn.length - b.AppliedOn.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: any) => (
        <span
          className={`badge border ${
            text === "Approved"
              ? "badge-soft-success border-success"
              : "badge-soft-danger border-danger"
          } px-2 py-1 fs-13 fw-medium`}
        >
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
    {
      title: "",
      render: () => (
        <div className="action-item p-2">
          <Link to="#" data-bs-toggle="dropdown">
            <i className="ti ti-dots-vertical" />
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#edit_leave"
              >
                Edit
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#delete_leave"
              >
                Delete
              </Link>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Start Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">Admin Leaves</h4>
            </div>
            <div className="text-end d-flex">
              <Link
                to="#"
                className="btn btn-primary ms-2 fs-13 btn-md"
                data-bs-toggle="modal"
                data-bs-target="#add_leave"
              >
                <i className="ti ti-plus me-1" />
                New Leave
              </Link>
            </div>
          </div>
          {/* End Page Header */}
          {/* start row */}
          <div className="row">
            <div className="col-lg-3">
              <div className="card">
                <div className="card-body position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p>Total Present</p>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 me-2">
                          <span className="text-dark fw-bold">180</span>
                        </p>
                        <span className="badge badge-soft-success fs-12 fw-normal">
                          +10.6%
                          <i className="ti ti-arrow-up-right ms-1" />
                        </span>
                      </div>
                    </div>
                    <span className="p-2 bg-soft-primary border border-primary rounded-circle d-inline-flex align-items-center justify-content-center text-primary position-relative z-1">
                      <i className="ti ti-user-check" />
                    </span>
                  </div>
                  <ImageWithBasePath
                    src="assets/img/bg/attendance-bg-01.png"
                    alt=""
                    className="img-fluid position-absolute bottom-0 end-0"
                  />
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-3">
              <div className="card">
                <div className="card-body position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p>Planned Leaves</p>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 me-2">
                          <span className="text-dark fw-bold">10</span>
                        </p>
                        <span className="badge badge-soft-success fs-12 fw-normal">
                          +8.95%
                          <i className="ti ti-arrow-up-right ms-1" />
                        </span>
                      </div>
                    </div>
                    <span className="p-2 bg-soft-success border border-success rounded-circle d-inline-flex align-items-center justify-content-center text-success position-relative z-1">
                      <i className="ti ti-user-x" />
                    </span>
                  </div>
                  <ImageWithBasePath
                    src="assets/img/bg/attendance-bg-02.png"
                    alt=""
                    className="img-fluid position-absolute bottom-0 end-0"
                  />
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-3">
              <div className="card">
                <div className="card-body position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p>Unplanned Leaves</p>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 me-2">
                          <span className="text-dark fw-bold">50</span>
                        </p>
                        <span className="badge badge-soft-success fs-12 fw-normal">
                          +3.78%
                          <i className="ti ti-arrow-up-right ms-1" />
                        </span>
                      </div>
                    </div>
                    <span className="p-2 bg-soft-warning border border-warning rounded-circle d-inline-flex align-items-center justify-content-center text-warning position-relative z-1">
                      <i className="ti ti-user-exclamation" />
                    </span>
                  </div>
                  <ImageWithBasePath
                    src="assets/img/bg/attendance-bg-03.png"
                    alt=""
                    className="img-fluid position-absolute bottom-0 end-0"
                  />
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-3">
              <div className="card">
                <div className="card-body position-relative">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p>Pending Requests</p>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 me-2">
                          <span className="text-dark fw-bold">15</span>
                        </p>
                        <span className="badge badge-soft-success fs-12 fw-normal">
                          +7.65%
                          <i className="ti ti-arrow-up-right ms-1" />
                        </span>
                      </div>
                    </div>
                    <span className="p-2 bg-soft-danger border border-danger rounded-circle d-inline-flex align-items-center justify-content-center text-danger position-relative z-1">
                      <i className="ti ti-user-question" />
                    </span>
                  </div>
                  <ImageWithBasePath
                    src="assets/img/bg/attendance-bg-04.png"
                    alt=""
                    className="img-fluid position-absolute bottom-0 end-0"
                  />
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div className="search-set mb-3">
              <div className="d-flex align-items-center">
                <div className="table-search d-flex align-items-center mb-0 me-2">
                  <div className="search-input">
                    <SearchInput value={searchText} onChange={handleSearch} />
                  </div>
                </div>
                <div className="d-flex right-content align-items-center flex-wrap">
                  <div className=" position-relative">
                    <span className="input-icon-addon fs-14 text-dark">
                      <i className="ti ti-calendar" />
                    </span>
                    <PredefinedDatePicker />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
              <div className="dropdown me-2">
                <Link
                  to="#"
                  className="btn btn-white bg-white fs-14 py-1 border d-inline-flex text-dark align-items-center"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <i className="ti ti-filter text-gray-5 me-1" />
                  Filters
                </Link>
                <div
                  className="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
                  id="filter-dropdown"
                >
                  <div className="d-flex align-items-center justify-content-between border-bottom filter-header">
                    <h5 className="mb-0 fw-bold">Filter</h5>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="link-danger text-decoration-underline"
                      >
                        Clear All
                      </Link>
                    </div>
                  </div>
                  <FilterIndex />
                </div>
              </div>
              <div className="dropdown">
                <Link
                  to="#"
                  className="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
                  data-bs-toggle="dropdown"
                >
                  <span className="me-1"> Sort By : </span> Recent
                </Link>
                <ul className="dropdown-menu  dropdown-menu-end p-2">
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Recent
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Oldest
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <Datatable
              columns={columns}
              dataSource={data}
              Selection={false}
              searchText={searchText}
            />
          </div>
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
      <LeavesModal />
    </>
  );
};

export default LeavesList;
