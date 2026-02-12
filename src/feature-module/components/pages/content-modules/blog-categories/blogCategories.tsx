import { Link } from "react-router";
import Datatable from "../../../../../core/common/dataTable";
import { BlogCategoriesData } from "../../../../../core/json/blogCategoriesData";
import Modals from "./modals/modals";

const BlogCategories = () => {
  const data = BlogCategoriesData;
  const columns = [
    {
      title: "Categories",
      dataIndex: "Categories",
      sorter: (a: any, b: any) => a.Categories.length - b.Categories.length,
    },
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a: any, b: any) => a.Date.length - b.Date.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: string) => (
        <span
          className={`badge ${
            text === "Active"
              ? "bg-soft-success text-success border-success"
              : "bg-soft-danger text-danger border-danger"
          }  fs-13 fw-medium  border  py-1 px-2`}
        >
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
    {
      title: "",
      render: () => (
        <div className="action-item">
          <>
            <Link
              to="#"
              data-bs-toggle="dropdown"
              className="btn p-1 btn-white border"
            >
              <i className="ti ti-dots-vertical" />
            </Link>
            <ul className="dropdown-menu p-2">
              <li>
                <Link
                  to="#"
                  className="dropdown-item d-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_categories"
                >
                  Edit
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="dropdown-item d-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_categories"
                >
                  Delete
                </Link>
              </li>
            </ul>
          </>
        </div>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
  ];
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-center pb-3 mb-3 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">Categories</h4>
            </div>
            <div className="text-end">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add_categories"
              >
                <i className="ti ti-plus me-1" />
                Add New Categories
              </Link>
            </div>
          </div>
          {/* End Page Header */}
          {/* Table List */}
          <div className="table-responsive border">
            <Datatable
              columns={columns}
              dataSource={data}
              Selection={false}
              searchText={""}
            />
          </div>
          {/* /Table List */}
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
      <Modals />
    </>
  );
};

export default BlogCategories;
