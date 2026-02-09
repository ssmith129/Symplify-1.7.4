import { Link } from "react-router";
import { DeleteRequestData } from "../../../../../../core/json/deleteAccountRequestData";
import Datatable from "../../../../../../core/common/dataTable";
import Modals from "./modals/modals";
import { useState } from "react";
import SearchInput from "../../../../../../core/common/dataTable/dataTableSearch";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";
import PageHeader from "../../../../../../core/common/page-header/PageHeader";

const DeleteAccountRequest = () => {
  const data = DeleteRequestData;
  const columns = [
    {
      title: "User",
      dataIndex: "User",
      render: (text: any, render: any) => (
        <div className="d-flex align-items-center">
          <Link
            to="#"
            className="avatar me-2"
            data-bs-toggle="modal"
            data-bs-target="#view_staff"
          >
            <ImageWithBasePath
              src={`assets/img/users/${render.img}`}
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
      sorter: (a: any, b: any) => a.User.length - b.User.length,
    },
    {
      title: "Requisition Date",
      dataIndex: "Requisition_Date",
      sorter: (a: any, b: any) =>
        a.Requisition_Date.length - b.Requisition_Date.length,
    },
    {
      title: "Delete Request Date",
      dataIndex: "Delete_Request_Date",
      sorter: (a: any, b: any) =>
        a.Delete_Request_Date.length - b.Delete_Request_Date.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: string) => (
        <span
          className={`badge ${
            text === "Available"
              ? "badge-soft-success border-success"
              : "border-danger badge-soft-danger"
          }  border  px-2 py-1 fs-13 fw-medium`}
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
          <ul className="dropdown-menu p-2">
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#cancel_request"
              >
                Cancel
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#delete_request"
              >
                Delete
              </Link>
            </li>
          </ul>
        </div>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
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
          <PageHeader title="Delete Account Request" className="mb-3 pb-3 border-bottom" />
          {/* End Page Header */}
          <div className=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div className="search-set mb-3">
              <div className="d-flex align-items-center">
                <div className="table-search d-flex align-items-center mb-0 me-2">
                  <div className="search-input">
                    <SearchInput value={searchText} onChange={handleSearch} />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
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
      <Modals />
    </>
  );
};

export default DeleteAccountRequest;
