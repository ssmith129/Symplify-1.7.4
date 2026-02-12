import { Link } from "react-router";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import { all_routes } from "../../../../../routes/all_routes";

const FileManager = () => {

  const [Storage] = useState<any>({
    chart: {
      height: 200,
      type: "donut",
      toolbar: {
        show: false,
      },
      offsetY: -10,
      events: {},
    },
    plotOptions: {
      pie: {
        startAngle: -100,
        endAngle: 100,
        donut: {
          size: "80%",
          labels: {
            show: true,
            name: {
              show: true,
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      show: false,
    },
    colors: ["#0C4B5E", "#FFC107", "#1B84FF", "#AB47BC", "#FD3995"],
    series: [20, 20, 20, 20, 20],
    labels: ["Documents", "Video", "Music", "Photos", "Other"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    grid: {
      padding: {
        bottom: -60, // Reduce padding from the bottom
      },
    },
  });
  return (
    <>
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
      <h4 className="fs-18 fw-semibold mb-0">File Manager</h4>
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
          File Manager
        </li>
      </ol>
    </div>
  </div>
  {/* End Page Header */}
  <div className="d-flex align-items-center justify-content-between flex-wrap mb-2">
    <div className="mb-2">
      <div className="dropdown">
        <Link
          to="#"
          className="dropdown-toggle btn btn-sm btn-outline-light bg-white text-dark d-inline-flex align-items-center drop-arrow-none"
          data-bs-toggle="dropdown"
        >
          All Files
          <i className="ti ti-chevron-down align-middle ms-1" />
        </Link>
        <ul className="dropdown-menu  dropdown-menu-start">
          <li>
            <Link to="#" className="dropdown-item rounded-1">
              All Files
            </Link>
          </li>
          <li>
            <Link to="#" className="dropdown-item rounded-1">
              Music
            </Link>
          </li>
          <li>
            <Link to="#" className="dropdown-item rounded-1">
              Video
            </Link>
          </li>
          <li>
            <Link to="#" className="dropdown-item rounded-1">
              Documents
            </Link>
          </li>
          <li>
            <Link to="#" className="dropdown-item rounded-1">
              Photos
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="mb-2">
      <Link
        to="#"
        data-bs-toggle="modal"
        data-bs-target="#add_folder"
        className="btn btn-sm btn-primary d-flex align-items-center"
      >
        <i className="ti ti-circle-plus me-1" />
        Create Folder
      </Link>
    </div>
  </div>


            {/* start row */}
            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex">
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div className="d-flex align-items-center">
                        <ImageWithBasePath src="assets/img/icons/dropbox.svg" alt="img" />
                        <h5 className="ms-2">Dropbox</h5>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots" />
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-1">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-folder-open me-2" />
                              Open
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete All
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-status-change me-1" />
                              Reset
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="progress progress-xs flex-grow-1 mb-2">
                      <div
                        className="progress-bar bg-pink rounded"
                        role="progressbar"
                        style={{ width: "20%" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">200 Files</p>
                      <p className="text-dark mb-0">28GB</p>
                    </div>
                  </div>
                  {/* end card body */}
                </div>
                {/* end card */}
              </div>
              {/* end col */}
              <div className="col-lg-3 col-md-6 d-flex">
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div className="d-flex align-items-center">
                        <ImageWithBasePath src="assets/img/icons/drive.svg" alt="img" />
                        <h5 className="ms-2">Google Drive</h5>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots" />
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-1">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-folder-open me-2" />
                              Open
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete All
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-status-change me-1" />
                              Reset
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="progress progress-xs flex-grow-1 mb-2">
                      <div
                        className="progress-bar bg-pink rounded"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">144 Files</p>
                      <p className="text-dark mb-0">54GB</p>
                    </div>
                  </div>
                  {/* end card body */}
                </div>
                {/* end card */}
              </div>
              {/* end col */}
              <div className="col-lg-3 col-md-6 d-flex">
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div className="d-flex align-items-center">
                        <ImageWithBasePath src="assets/img/icons/cloud.svg" alt="img" />
                        <h5 className="ms-2">Cloud Storage</h5>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots" />
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-1">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-folder-open me-2" />
                              Open
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete All
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-status-change me-1" />
                              Reset
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="progress progress-xs flex-grow-1 mb-2">
                      <div
                        className="progress-bar bg-purple rounded"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">144 Files</p>
                      <p className="text-dark mb-0">54GB</p>
                    </div>
                  </div>
                  {/* end card body */}
                </div>
                {/* end card */}
              </div>
              {/* end col */}
              <div className="col-lg-3 col-md-6 d-flex">
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div className="d-flex align-items-center">
                        <ImageWithBasePath src="assets/img/icons/storage.svg" alt="img" />
                        <h5 className="ms-2">Internal Storage</h5>
                      </div>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots" />
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-1">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-folder-open me-2" />
                              Open
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-trash me-1" />
                              Delete All
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              <i className="ti ti-status-change me-1" />
                              Reset
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="progress progress-xs flex-grow-1 mb-2">
                      <div
                        className="progress-bar bg-purple rounded"
                        role="progressbar"
                        style={{ width: "20%" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">144 Files</p>
                      <p className="text-dark mb-0">54GB</p>
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
              {/* Start Sidebar */}
              <div className="col-xl-3">
                <div className="card">
                  <div className="card-body p-3">
                    <div className="shadow-xs p-2 mb-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center overflow-hidden">
                          <span className="avatar flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-01.jpg"
                              alt="img"
                              className="rounded-circle"
                            />
                          </span>
                          <div className="overflow-hidden ms-2">
                            <h5 className="text-truncate mb-1">James Hong</h5>
                            <p className="fs-12 text-truncate">
                              jameshong@example.com
                            </p>
                          </div>
                        </div>
                        <div className="dropdown ms-2">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti ti-dots" />
                          </Link>
                          <ul className="dropdown-menu  dropdown-menu-end p-1">
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item rounded-1"
                              >
                                <i className="ti ti-edit me-1" />
                                Edit
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="file-drop mb-3 text-center">
                      <span className="avatar avatar-sm bg-primary text-white mb-2">
                        <i className="ti ti-upload fs-16" />
                      </span>
                      <h6 className="mb-2">Drop files here</h6>
                      <p className="fs-12 mb-0">
                        Browse and chose the files you want to upload from your
                        computer
                      </p>
                      <input type="file" />
                    </div>
                    <div className="files-list nav d-block">
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2 active"
                      >
                        <i className="ti ti-folder-up me-2" />
                        All Folder / Files
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-star me-2" />
                        Drive
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-octahedron me-2" />
                        Dropbox
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-share-2 me-2" />
                        Shared with Me
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-file me-2" />
                        Document
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-clock-hour-11 me-2" />
                        Recent File
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-star me-2" />
                        Important
                      </Link>
                      <Link
                        to="javscript:void(0);"
                        className="d-flex align-items-center fw-medium p-2"
                      >
                        <i className="ti ti-music me-2" />
                        Media
                      </Link>
                    </div>
                  </div>
                  {/* end card body */}
                </div>
                {/* end card */}
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="mb-2">Storage Details</h4>
                      <span className="badge bg-success mb-2">Used 77%</span>
                    </div>
                    <div id="storage-chart">
                       <ReactApexChart
                      id="emp-department"
                      options={Storage}
                      series={Storage.series}
                      type="donut"
                      height={210}
                    />
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md bg-soft-info">
                          <i className="ti ti-music fs-20 text-info" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate fs-14">Music</h6>
                          <p className="text-truncate">35 Files</p>
                        </div>
                      </div>
                      <p className="text-dark">8.5 GB</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md bg-soft-warning">
                          <i className="fa-regular fa-file-audio fs-20 text-warning" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate fs-14">Video</h6>
                          <p className="text-truncate">145 Files</p>
                        </div>
                      </div>
                      <p className="text-dark">2 GB</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md bg-soft-secondary">
                          <i className="ti ti-file-description fs-20 text-secondary" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate fs-14">Documents</h6>
                          <p className="text-truncate">487 Files</p>
                        </div>
                      </div>
                      <p className="text-dark">24.5 GB</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md badge-soft-primary">
                          <i className="ti ti-photo fs-20 text-secondary" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate fs-14">Photos</h6>
                          <p className="text-truncate">35 Files</p>
                        </div>
                      </div>
                      <p className="text-dark">8.5 GB</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-0">
                      <div className="d-flex align-items-center overflow-hidden">
                        <span className="avatar avatar-md bg-soft-danger">
                          <i className="ti ti-file-type-doc fs-20 text-danger" />
                        </span>
                        <div className="overflow-hidden ms-2">
                          <h6 className="text-truncate fs-14">Other</h6>
                          <p className="text-truncate">487 Files</p>
                        </div>
                      </div>
                      <p className="text-dark">16.2 GB</p>
                    </div>
                  </div>
                  {/* end card body */}
                </div>
                {/* end card */}
              </div>
              {/* end col */}
              {/* End Sidebar */}
              <div className="col-xl-9">
                {/* Start Quick Access */}
                <div className="border-bottom mb-3">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h4 className="mb-2">Quick Access</h4>
                    <div>
                      <Link
                        to="#"
                        className="mb-2 me-3 fw-medium link-default"
                      >
                        Close
                      </Link>
                      <Link
                        to="#"
                        className="mb-2 fw-medium link-default"
                      >
                        View All
                      </Link>
                    </div>
                  </div>
                  {/* start row */}
                  <div className="row row-cols-xxl-5 row-cols-xl-3 row-cols-sm-3 row-cols-1 justify-content-center">
                    <div className="col d-flex">
                      <div className="card position-relative flex-fill">
                        <div className="card-body text-center">
                          <ImageWithBasePath
                            src="assets/img/icons/file.svg"
                            alt="img"
                            className="mb-3"
                          />
                          <h6 className="mb-2 fw-medium">
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              Final.doc
                            </Link>
                          </h6>
                          <span className="badge badge-soft-primary">
                            2.4 GB
                          </span>
                        </div>
                        {/* end card body */}
                        <span className="position-absolute end-0 top-0 p-2">
                          <i className="ti ti-star-filled filled text-warning" />
                        </span>
                      </div>
                      {/* end card */}
                    </div>
                    {/* end col */}
                    <div className="col d-flex">
                      <div className="card position-relative flex-fill">
                        <div className="card-body text-center">
                          <ImageWithBasePath
                            src="assets/img/icons/pdf-icon.svg"
                            alt="img"
                            className="mb-3"
                          />
                          <h6 className="mb-2 fw-medium">
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              Marklist.pdf
                            </Link>
                          </h6>
                          <span className="badge badge-soft-primary">
                            2.4 GB
                          </span>
                        </div>
                        {/* end card body */}
                        <span className="position-absolute end-0 top-0 p-2">
                          <i className="ti ti-star" />
                        </span>
                      </div>
                      {/* end card */}
                    </div>
                    {/* end col */}
                    <div className="col d-flex">
                      <div className="card position-relative flex-fill">
                        <div className="card-body text-center">
                          <ImageWithBasePath
                            src="assets/img/icons/image.svg"
                            alt="img"
                            className="mb-3"
                          />
                          <h6 className="mb-2 fw-medium">
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              Nature.png
                            </Link>
                          </h6>
                          <span className="badge badge-soft-primary">
                            2.4 GB
                          </span>
                        </div>
                        {/* end card body */}
                        <span className="position-absolute end-0 top-0 p-2">
                          <i className="ti ti-star-filled filled text-warning" />
                        </span>
                      </div>
                      {/* end card */}
                    </div>
                    {/* end col */}
                    <div className="col d-flex">
                      <div className="card position-relative flex-fill">
                        <div className="card-body text-center">
                          <ImageWithBasePath
                            src="assets/img/icons/xls-icon.svg"
                            alt="img"
                            className="mb-3"
                          />
                          <h6 className="mb-2 fw-medium">
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              List.xlsx
                            </Link>
                          </h6>
                          <span className="badge badge-soft-primary">
                            2.4 GB
                          </span>
                        </div>
                        {/* end card body */}
                        <span className="position-absolute end-0 top-0 p-2">
                          <i className="ti ti-star" />
                        </span>
                      </div>
                      {/* end card */}
                    </div>
                    {/* end col */}
                    <div className="col d-flex">
                      <div className="card position-relative flex-fill">
                        <div className="card-body text-center">
                          <ImageWithBasePath
                            src="assets/img/icons/folder-icon.svg"
                            alt="img"
                            className="mb-3"
                          />
                          <h6 className="mb-2 fw-medium">
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              Group Photos
                            </Link>
                          </h6>
                          <span className="badge badge-soft-primary">
                            2.4 GB
                          </span>
                        </div>
                        {/* end card body */}
                        <span className="position-absolute end-0 top-0 p-2">
                          <i className="ti ti-star" />
                        </span>
                      </div>
                      {/* end card */}
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
                {/* End Quick Access */}
                {/* Start Recent Folders */}
                <div className="border-bottom mb-3">
                  <div className="d-flex align-items-center justify-content-between mb-2 table-header">
                    <h4 className="mb-2">Recent Folders</h4>
                    <div className="dropdown mb-2">
                      <Link
                        to="#"
                        className="dropdown-toggle fs-14 py-1 bg-white btn btn-outline-white"
                        data-bs-toggle="dropdown"
                      >
                        Last 7 Days
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-1">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Last 7 Days
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Last 1 month
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Last 1 year
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* start row */}
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="bg-white d-flex align-items-center justify-content-between border p-2 rounded mb-3">
                        <div className="d-flex align-items-center">
                          <span className="text-warning fs-30">
                            <i className="ti ti-folder-filled" />
                          </span>
                          <div className="ms-2">
                            <h6 className="mb-1">
                              <Link
                                to="#"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#preview"
                              >
                                Personal Assets
                              </Link>
                            </h6>
                            <div className="d-flex align-items-center">
                              <p className="fs-12 mb-0 me-2">2.4 GB</p>
                              <p className="fs-12 mb-0 d-flex align-items-center">
                                <i className="ti ti-circle-filled fs-6 me-2 text-dark" />
                                135&nbsp;files
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-07.jpg"
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
                              <i className="ti ti-dots" />
                            </Link>
                            <ul className="dropdown-menu  dropdown-menu-end p-1">
                              <li>
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-folder-open me-2" />
                                  Preview
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-copy me-2" />
                                  Duplicate
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-arrow-left-right me-2" />
                                  Move
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-user-plus me-2" />
                                  Invite
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-share-3 me-2" />
                                  Share Link
                                </Link>
                              </li>
                              <li>
                                <hr className="dropdown-divider my-2" />
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-eye me-2" />
                                  View Details
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-download me-2" />
                                  Download
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-trash-x me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-lg-4 col-md-6">
                      <div className="bg-white d-flex align-items-center justify-content-between border p-2 rounded mb-3">
                        <div className="d-flex align-items-center">
                          <span className="text-warning fs-30">
                            <i className="ti ti-folder-filled" />
                          </span>
                          <div className="ms-2">
                            <h6 className="mb-1">
                              <Link
                                to="#"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#preview"
                              >
                                Document
                              </Link>
                            </h6>
                            <div className="d-flex align-items-center">
                              <p className="fs-12 mb-0 me-2">4 GB</p>
                              <p className="fs-12 mb-0 d-flex align-items-center">
                                <i className="ti ti-circle-filled fs-6 me-2 text-dark" />
                                15&nbsp;files
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
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
                              <i className="ti ti-dots" />
                            </Link>
                            <ul className="dropdown-menu  dropdown-menu-end p-1">
                              <li>
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-folder-open me-2" />
                                  Preview
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-copy me-2" />
                                  Duplicate
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-arrow-left-right me-2" />
                                  Move
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-user-plus me-2" />
                                  Invite
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-share-3 me-2" />
                                  Share Link
                                </Link>
                              </li>
                              <li>
                                <hr className="dropdown-divider my-2" />
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-eye me-2" />
                                  View Details
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-download me-2" />
                                  Download
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-trash-x me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-lg-4 col-md-6">
                      <div className="bg-white d-flex align-items-center justify-content-between border p-2 rounded mb-3">
                        <div className="d-flex align-items-center">
                          <span className="text-warning fs-30">
                            <i className="ti ti-folder-filled" />
                          </span>
                          <div className="ms-2">
                            <h6 className="mb-1">
                              <Link
                                to="#"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#preview"
                              >
                                Handyimages
                              </Link>
                            </h6>
                            <div className="d-flex align-items-center">
                              <p className="fs-12 mb-0 me-2">1.4 GB</p>
                              <p className="fs-12 mb-0 d-flex align-items-center">
                                <i className="ti ti-circle-filled fs-6 me-2 text-dark" />
                                115&nbsp;files
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
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
                              <i className="ti ti-dots" />
                            </Link>
                            <ul className="dropdown-menu  dropdown-menu-end p-1">
                              <li>
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-folder-open me-2" />
                                  Preview
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-copy me-2" />
                                  Duplicate
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-arrow-left-right me-2" />
                                  Move
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-user-plus me-2" />
                                  Invite
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-share-3 me-2" />
                                  Share Link
                                </Link>
                              </li>
                              <li>
                                <hr className="dropdown-divider my-2" />
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-eye me-2" />
                                  View Details
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-download me-2" />
                                  Download
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-trash-x me-2" />
                                  Delete
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
                {/* End Recent Folders */}
                {/* Start Recent Files */}
                <div className="border-bottom mb-3">
                  <div className="d-flex align-items-center justify-content-between mb-2 table-header">
                    <h4 className="mb-2">
                      <Link
                        to="#"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#preview"
                      >
                        Recent Files
                      </Link>
                    </h4>
                    <div className="dropdown mb-2">
                      <Link
                        to="#"
                        className="dropdown-toggle bg-white fs-14 py-1 btn btn-outline-white"
                        data-bs-toggle="dropdown"
                      >
                        Last Modified
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-1">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Newest to Oldest
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Last Modified
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Oldest to Newest
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* start row */}
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="rounded border mb-3">
                        <div className="bg-transparent-dark p-5 d-flex align-items-center justify-content-center rounded-top">
                          <i className="ti ti-file-description fs-24 text-dark" />
                        </div>
                        <div className="bg-white d-flex align-items-center justify-content-between p-3 rounded-bottom">
                          <h6 className="fw-medium">customer_data.txt</h6>
                          <div className="dropdown ms-2">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots" />
                            </Link>
                            <ul className="dropdown-menu  dropdown-menu-end p-1">
                              <li>
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-folder-open me-2" />
                                  Preview
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-copy me-2" />
                                  Duplicate
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-arrow-left-right me-2" />
                                  Move
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-user-plus me-2" />
                                  Invite
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-share-3 me-2" />
                                  Share Link
                                </Link>
                              </li>
                              <li>
                                <hr className="dropdown-divider my-2" />
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-eye me-2" />
                                  View Details
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-download me-2" />
                                  Download
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-trash-x me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-lg-4 col-md-6">
                      <div className="rounded border mb-3">
                        <div className="bg-transparent-dark p-5 d-flex align-items-center justify-content-center rounded-top">
                          <i className="ti ti-file-type-pdf fs-24 text-dark" />
                        </div>
                        <div className="bg-white d-flex align-items-center justify-content-between p-3 rounded-bottom">
                          <h6 className="fw-medium text-truncate">
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              video_player_installer_setup.rar
                            </Link>
                          </h6>
                          <div className="dropdown ms-2">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots" />
                            </Link>
                            <ul className="dropdown-menu  dropdown-menu-end p-1">
                              <li>
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-folder-open me-2" />
                                  Preview
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-copy me-2" />
                                  Duplicate
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-arrow-left-right me-2" />
                                  Move
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-user-plus me-2" />
                                  Invite
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-share-3 me-2" />
                                  Share Link
                                </Link>
                              </li>
                              <li>
                                <hr className="dropdown-divider my-2" />
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-eye me-2" />
                                  View Details
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-download me-2" />
                                  Download
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-trash-x me-2" />
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-lg-4 col-md-6">
                      <div className="rounded border mb-3">
                        <div className="bg-transparent-dark p-5 d-flex align-items-center justify-content-center rounded-top">
                          <i className="fa-regular fa-file-audio fs-24 text-dark" />
                        </div>
                        <div className="bg-white d-flex align-items-center justify-content-between p-3 rounded-bottom">
                          <h6 className="fw-medium text-truncate">
                            <Link
                              to="#"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              recording.mp3
                            </Link>
                          </h6>
                          <div className="dropdown ms-2">
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-dots" />
                            </Link>
                            <ul className="dropdown-menu  dropdown-menu-end p-1">
                              <li>
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-folder-open me-2" />
                                  Preview
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-copy me-2" />
                                  Duplicate
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-arrow-left-right me-2" />
                                  Move
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-user-plus me-2" />
                                  Invite
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-share-3 me-2" />
                                  Share Link
                                </Link>
                              </li>
                              <li>
                                <hr className="dropdown-divider my-2" />
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-eye me-2" />
                                  View Details
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-download me-2" />
                                  Download
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="dropdown-item rounded-1"
                                >
                                  <i className="ti ti-trash-x me-2" />
                                  Delete
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
                {/* End Recent Files */}
                {/* Start table list */}
                <div className="d-flex align-items-center justify-content-between mb-2 table-header">
                  <h4 className="mb-2">Files</h4>
                  <div className="d-flex align-items-center">
                    <div className="dropdown mb-2 me-2">
                      <Link
                        to="#"
                        className="dropdown-toggle bg-white fs-14 py-1 btn btn-outline-white"
                        data-bs-toggle="dropdown"
                      >
                        Sort By : Docs Type
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-1">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Docs
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Pdf
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Image
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Folder
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Xml
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <Link
                      to="#"
                      className="link-primary fw-medium mb-2"
                    >
                      View All
                    </Link>
                  </div>
                </div>
                <div className="table-responsive table-nowrap mb-3">
                  {/* Start Table List*/}
                  <table className="table mb-0 border">
                    <thead>
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
                        <th className="fs-14 fw-medium">Name</th>
                        <th className="fs-14 fw-medium">Size</th>
                        <th className="fs-14 fw-medium">Type</th>
                        <th className="fs-14 fw-medium">Modified</th>
                        <th className="fs-14 fw-medium">Share</th>
                        <th className="fs-14 fw-medium" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check form-check-md">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="avatar avatar-md bg-light"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              <ImageWithBasePath
                                src="assets/img/icons/file-01.svg"
                                className="img-fluid w-auto h-auto"
                                alt="img"
                              />
                            </Link>
                            <div className="ms-2">
                              <p className="text-dark fw-medium  mb-0">
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                >
                                  Secret
                                </Link>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>7.6 MB</td>
                        <td>Doc</td>
                        <td>
                          <p className="text-dark mb-0">Mar 15, 2025</p>
                          <span>05:00:14 PM</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-03.jpg"
                                alt="img"
                              />
                            </span>
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
                                src="assets/img/profiles/avatar-12.jpg"
                                alt="img"
                              />
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="rating-select me-2">
                              <Link to="#">
                                <i className="ti ti-star" />
                              </Link>
                            </div>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots fs-14" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-right p-1">
                                <li>
                                  <Link
                                    className="dropdown-item rounded-1"
                                    to="#"
                                  >
                                    <i className="ti ti-trash me-2" />
                                    Permanent Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item rounded-1"
                                    to="#"
                                  >
                                    <i className="ti ti-edit-circle me-2" />
                                    Restore File
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-md">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="avatar avatar-md bg-light"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              <ImageWithBasePath
                                src="assets/img/icons/file-02.svg"
                                className="img-fluid w-auto h-auto"
                                alt="img"
                              />
                            </Link>
                            <div className="ms-2">
                              <p className="text-dark fw-medium  mb-0">
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                >
                                  Sophie Headrick
                                </Link>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>7.4 MB</td>
                        <td>PDF</td>
                        <td>
                          <p className="text-dark mb-0">Jan 8, 2025</p>
                          <span>08:20:13 PM</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
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
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="rating-select me-2">
                              <Link to="#">
                                <i className="ti ti-star" />
                              </Link>
                            </div>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots fs-14" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-right p-1">
                                <li>
                                  <Link
                                    className="dropdown-item rounded-1"
                                    to="#"
                                  >
                                    <i className="ti ti-trash me-2" />
                                    Permanent Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item rounded-1"
                                    to="#"
                                  >
                                    <i className="ti ti-edit-circle me-2" />
                                    Restore File
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-md">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="avatar avatar-md bg-light"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              <ImageWithBasePath
                                src="assets/img/icons/file-03.svg"
                                className="img-fluid w-auto h-auto"
                                alt="img"
                              />
                            </Link>
                            <div className="ms-2">
                              <p className="text-dark fw-medium  mb-0">
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                >
                                  Gallery
                                </Link>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>6.1 MB</td>
                        <td>Image</td>
                        <td>
                          <p className="text-dark mb-0">Aug 6, 2025</p>
                          <span>04:10:12 PM</span>
                        </td>
                        <td>
                          <div className="avatar-list-stacked avatar-group-sm">
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
                            <Link
                              className="avatar bg-primary avatar-rounded text-fixed-white"
                              to="#"
                            >
                              +1
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="rating-select me-2">
                              <Link to="#">
                                <i className="ti ti-star" />
                              </Link>
                            </div>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots fs-14" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-right p-1">
                                <li>
                                  <Link
                                    className="dropdown-item rounded-1"
                                    to="#"
                                  >
                                    <i className="ti ti-trash me-2" />
                                    Permanent Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item rounded-1"
                                    to="#"
                                  >
                                    <i className="ti ti-edit-circle me-2" />
                                    Restore File
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-md">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="avatar avatar-md bg-light"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              <ImageWithBasePath
                                src="assets/img/icons/file-04.svg"
                                className="img-fluid w-auto h-auto"
                                alt="img"
                              />
                            </Link>
                            <div className="ms-2">
                              <p className="text-dark fw-medium  mb-0">
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                >
                                  Doris Crowley
                                </Link>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>5.2 MB</td>
                        <td>Folder</td>
                        <td>
                          <p className="text-dark mb-0">Jan 6, 2025</p>
                          <span>03:40:14 PM</span>
                        </td>
                        <td>
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
                                src="assets/img/profiles/avatar-10.jpg"
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
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="rating-select me-2">
                              <Link to="#">
                                <i className="ti ti-star" />
                              </Link>
                            </div>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots fs-14" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-right p-1">
                                <li>
                                  <Link
                                    className="dropdown-item rounded-1"
                                    to="#"
                                  >
                                    <i className="ti ti-trash me-2" />
                                    Permanent Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item rounded-1"
                                    to="#"
                                  >
                                    <i className="ti ti-edit-circle me-2" />
                                    Restore File
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check form-check-md">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="avatar avatar-md bg-light"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#preview"
                            >
                              <ImageWithBasePath
                                src="assets/img/icons/file-05.svg"
                                className="img-fluid w-auto h-auto"
                                alt="img"
                              />
                            </Link>
                            <div className="ms-2">
                              <p className="text-dark fw-medium  mb-0">
                                <Link
                                  to="#"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#preview"
                                >
                                  Cheat_codez
                                </Link>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>8 MB</td>
                        <td>Xml</td>
                        <td>
                          <p className="text-dark mb-0">Oct 12, 2025</p>
                          <span>05:00:14 PM</span>
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
                                src="assets/img/profiles/avatar-12.jpg"
                                alt="img"
                              />
                            </span>
                            <span className="avatar avatar-rounded">
                              <ImageWithBasePath
                                className="border border-white"
                                src="assets/img/profiles/avatar-11.jpg"
                                alt="img"
                              />
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="rating-select me-2">
                              <Link to="#">
                                <i className="ti ti-star" />
                              </Link>
                            </div>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="d-flex align-items-center justify-content-center"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots fs-14" />
                              </Link>
                              <ul className="dropdown-menu dropdown-menu-right p-1">
                                <li>
                                  <Link
                                    className="dropdown-item rounded-1"
                                    to="#"
                                  >
                                    <i className="ti ti-trash me-2" />
                                    Permanent Delete
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item rounded-1"
                                    to="#"
                                  >
                                    <i className="ti ti-edit-circle me-2" />
                                    Restore File
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* End Table List */}
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

      <div
        className="sidebar-themesettings offcanvas offcanvas-end"
        id="preview"
      >
        <div className="offcanvas-header d-flex align-items-center justify-content-between bg-dark">
          <div>
            <h4 className="mb-1 text-white">Preview</h4>
          </div>
          <div className="d-flex align-items-center">
            <Link
              to="#"
              className="d-flex align-items-center justify-content-center me-3"
            >
              <i className="ti ti-star-filled filled text-warning" />
            </Link>
            <Link
              to="#"
              className="d-flex align-items-center justify-content-center text-white me-3"
            >
              <i className="ti ti-trash" />
            </Link>
            <Link
              to="#"
              className="custom-btn-close d-flex align-items-center justify-content-center text-white"
              data-bs-dismiss="offcanvas"
            >
              <i className="ti ti-x" />
            </Link>
          </div>
        </div>
        <div className="offcanvas-body p-0">
          <div className="bg-light document-wrap text-center">
            <div className="mb-2">
              <ImageWithBasePath
                src="assets/img/icons/pdf-icon.svg"
                alt="icon"
              />
            </div>
            <h4 className="mb-1">
              Document Final Proof Read
              <span className="badge badge-soft-secondary fw-normal fs-12 ms-2">
                2.4 GB
              </span>
            </h4>
            <p>Last Accessed on 15 Mar 2025, 08:15:23 PM</p>
          </div>
          <div className="preview-content">
            <h4 className="mb-3">File Info</h4>
            <div className="file-type p-2 pb-0 gx-2 mb-2">
              <div className="text-center mb-2 border-end me-2">
                <p className="fs-12 mb-0">File Type</p>
                <p className="text-dark">PDF</p>
              </div>
              <div className="text-center mb-2 border-end me-2 pe-2">
                <p className="fs-12 mb-0">Created on</p>
                <p className="text-dark text-nowrap">22 July 2025, 08:30 PM</p>
              </div>
              <div className="text-center mb-2 border-0">
                <p className="fs-12 mb-0">Location</p>
                <p className="text-dark">Drive</p>
              </div>
            </div>
            <div className="mb-3">
              <h6 className="mb-2 fw-medium">Description</h6>
              <div className="quill-editor" />
            </div>
            <h4 className="mb-3">Recent Activity</h4>
            <div className="card shadow-none">
              <div className="card-body p-3 pb-0">
                <h6 className="mb-3">Today</h6>
                <ul className="recent-activity mb-3">
                  <li className="d-flex">
                    <span className="avatar avatar-md">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-01.jpg"
                        className="rounded-circle"
                        alt="img"
                      />
                    </span>
                    <div className="ms-2 flex-grow-1">
                      <p className="mb-0">
                        <span className="text-dark">Mercy</span> Added New File
                        in <span className="text-dark">Drive</span>
                      </p>
                      <p className="mb-0">05:22 PM</p>
                      <div className="bg-light rounded p-2 d-flex align-items-center justify-content-between mt-1">
                        <div className="d-flex align-items-center">
                          <i className="ti ti-video text-dark fs-16" />
                          <p className="ms-2">All_files.mp4</p>
                        </div>
                        <span className="fs-12">8.2 MB</span>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex">
                    <span className="avatar avatar-md">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-15.jpg"
                        className="rounded-circle"
                        alt="img"
                      />
                    </span>
                    <div className="ms-2 flex-grow-1">
                      <p className="mb-0">
                        <span className="text-dark">Druman</span> Added New File
                        in <span className="text-dark">ROOT FOLDER</span>
                      </p>
                      <p className="mb-0">05:23 PM</p>
                      <div className="bg-light rounded p-2 d-flex align-items-center justify-content-between mt-1">
                        <div className="d-flex align-items-center">
                          <i className="ti ti-photo text-dark fs-16" />
                          <p className="ms-2">WebsiteBackupScreen.png</p>
                        </div>
                        <span className="fs-12">3.2 MB</span>
                      </div>
                      <div className="bg-light rounded p-2 d-flex align-items-center justify-content-between mt-1">
                        <div className="d-flex align-items-center">
                          <i className="ti ti-file-zip text-dark fs-16" />
                          <p className="ms-2">Finaldraft.zip</p>
                        </div>
                        <span className="fs-12">4 MB</span>
                      </div>
                      <div className="bg-light rounded p-2 d-flex align-items-center justify-content-between mt-1">
                        <div className="d-flex align-items-center">
                          <i className="ti ti-photo text-dark fs-16" />
                          <p className="ms-2">Photo.jpg</p>
                        </div>
                        <span className="fs-12">6.5 MB</span>
                      </div>
                    </div>
                  </li>
                </ul>
                <h6 className="mb-3">28 Jan 2025</h6>
                <ul className="recent-activity mb-3">
                  <li className="d-flex">
                    <span className="avatar avatar-md">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-05.jpg"
                        className="rounded-circle"
                        alt="img"
                      />
                    </span>
                    <div className="ms-2 flex-grow-1">
                      <p className="mb-0">
                        <span className="text-dark">Mercy</span> Added New File
                        in <span className="text-dark">Personal Assets</span>
                      </p>
                      <p className="mb-0">05:22 PM</p>
                      <div className="bg-light rounded p-2 d-flex align-items-center justify-content-between mt-1">
                        <div className="d-flex align-items-center">
                          <i className="ti ti-photo text-dark fs-16" />
                          <p className="ms-2">Photo_12.jpg</p>
                        </div>
                        <span className="fs-12">6.2 MB</span>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex">
                    <span className="avatar avatar-md">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-06.jpg"
                        className="rounded-circle"
                        alt="img"
                      />
                    </span>
                    <div className="ms-2 flex-grow-1">
                      <p className="mb-0">
                        <span className="text-dark">Jackson</span> Added New
                        File in <span className="text-dark">Drive</span>
                      </p>
                      <p className="mb-0">05:23 PM</p>
                      <div className="bg-light rounded p-2 d-flex align-items-center justify-content-between mt-1">
                        <div className="d-flex align-items-center">
                          <i className="ti ti-photo text-dark fs-16" />
                          <p className="ms-2">Photo.jpg</p>
                        </div>
                        <span className="fs-12">15.5 MB</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="mb-3">Members</h4>
              <Link
                to="#"
                className="fs-12 mb-3"
                data-bs-toggle="modal"
                data-bs-target="#add_member"
              >
                Add Members
              </Link>
            </div>
            <div className="card shadow-none mb-0">
              <div className="card-body p-3 pb-0">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center mb-2">
                    <span className="avatar avatar-md">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-07.jpg"
                        className="rounded-circle"
                        alt="img"
                      />
                    </span>
                    <div className="ms-2">
                      <h6 className="fw-medium">Anthony Lewis</h6>
                      <p className="fs-12">Finance</p>
                    </div>
                  </div>
                  <Link to="#" className="user-icon mb-2">
                    <i className="ti ti-user-x fs-16" />
                  </Link>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center mb-2">
                    <span className="avatar avatar-md">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-06.jpg"
                        className="rounded-circle"
                        alt="img"
                      />
                    </span>
                    <div className="ms-2">
                      <h6 className="fw-medium">Harvey Smith</h6>
                      <p className="fs-12">Developer</p>
                    </div>
                  </div>
                  <Link to="#" className="user-icon mb-2">
                    <i className="ti ti-user-x fs-16" />
                  </Link>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center mb-2">
                    <span className="avatar avatar-md">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-02.jpg"
                        className="rounded-circle"
                        alt="img"
                      />
                    </span>
                    <div className="ms-2">
                      <h6 className="fw-medium">Stephan Peralt</h6>
                      <p className="fs-12">Executive Officer</p>
                    </div>
                  </div>
                  <Link to="#" className="user-icon mb-2">
                    <i className="ti ti-user-x fs-16" />
                  </Link>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center mb-2">
                    <span className="avatar avatar-md">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-08.jpg"
                        className="rounded-circle"
                        alt="img"
                      />
                    </span>
                    <div className="ms-2">
                      <h6 className="fw-medium">Doglas Martini</h6>
                      <p className="fs-12">Manager</p>
                    </div>
                  </div>
                  <Link to="#" className="user-icon mb-2">
                    <i className="ti ti-user-x fs-16" />
                  </Link>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center mb-2">
                    <span className="avatar avatar-md">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-01.jpg"
                        className="rounded-circle"
                        alt="img"
                      />
                    </span>
                    <div className="ms-2">
                      <h6 className="fw-medium">Linda Ray</h6>
                      <p className="fs-12">Finance</p>
                    </div>
                  </div>
                  <Link to="#" className="user-icon mb-2">
                    <i className="ti ti-user-x fs-16" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Preview */}
      {/* Create Folder */}
      <div className="modal fade" id="add_folder">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Create Folder</h4>
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
                <div className="mb-0">
                  <label className="form-label">Folder Name</label>
                  <input type="text" className="form-control" />
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
                  Add New Folder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Create Folder */}
      {/* Add Customer */}
      <div className="modal fade" id="add_member">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Members</h4>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="modal-body">
              <div className="position-relative input-icon mb-3">
                <span className="input-icon-addon">
                  <i className="ti ti-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Email"
                />
              </div>
              <div className="form-check ps-0">
                <label className="form-check-label member-check-list activate d-flex align-items-center justify-content-between p-2 rounded mb-1">
                  <span className="d-flex align-items-center text-dark">
                    <span className="avatar avatar-md avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-01.jpg"
                        className="me-2"
                        alt="Img"
                      />
                    </span>
                    Sophie
                  </span>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    defaultChecked
                  />
                </label>
                <label className="form-check-label member-check-list d-flex align-items-center justify-content-between p-2 rounded mb-1">
                  <span className="d-flex align-items-center text-dark">
                    <span className="avatar avatar-md avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-02.jpg"
                        className="me-2"
                        alt="Img"
                      />
                    </span>
                    Cameron
                  </span>
                  <input type="checkbox" className="form-check-input" />
                </label>
                <label className="form-check-label member-check-list d-flex align-items-center justify-content-between p-2 rounded mb-1">
                  <span className="d-flex align-items-center text-dark">
                    <span className="avatar avatar-md avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-03.jpg"
                        className="me-2"
                        alt="Img"
                      />
                    </span>
                    Doris
                  </span>
                  <input type="checkbox" className="form-check-input" />
                </label>
                <label className="form-check-label member-check-list d-flex align-items-center justify-content-between p-2 rounded mb-1">
                  <span className="d-flex align-items-center text-dark">
                    <span className="avatar avatar-md avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-04.jpg"
                        className="me-2"
                        alt="Img"
                      />
                    </span>
                    Rufana
                  </span>
                  <input type="checkbox" className="form-check-input" />
                </label>
                <label className="form-check-label member-check-list d-flex align-items-center justify-content-between p-2 rounded mb-1">
                  <span className="d-flex align-items-center text-dark">
                    <span className="avatar avatar-md avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-04.jpg"
                        className="me-2"
                        alt="Img"
                      />
                    </span>
                    Michael
                  </span>
                  <input type="checkbox" className="form-check-input" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Customer */}
    </>
  );
};

export default FileManager;
