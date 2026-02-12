import { Link } from "react-router";
import { BlogCommentsData } from "../../../../../core/json/blogCommentsData";
import Datatable from "../../../../../core/common/dataTable";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import Modals from "./modals/modals";

const BlogComments = () => {
  const data = BlogCommentsData;
  const columns = [
    {
      title: "Customer",
      dataIndex: "Customer",
      render: (text: any, render: any) => (
        <div className="d-flex align-items-center">
          <Link
            to="#"
            className="avatar avatar-sm rounded-circle me-2 flex-shrink-0"
          >
            <ImageWithBasePath
              src={`assets/img/users/${render.img}`}
              className="rounded-circle"
              alt="img"
            />
          </Link>
          <div>
            <h6 className="fs-14 fw-medium mb-0">
              <Link to="#">{text}</Link>
            </h6>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.Customer.length - b.Customer.length,
    },
    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a: any, b: any) => a.Email.length - b.Email.length,
    },
    {
      title: "Comment",
      dataIndex: "Comment",
      render: (text: any) => <p className="truncate-text">{text}</p>,
      sorter: (a: any, b: any) => a.Comment.length - b.Comment.length,
    },
    {
      title: "Created On",
      dataIndex: "Created_On",
      sorter: (a: any, b: any) => a.Created_On.length - b.Created_On.length,
    },
    {
      title: "Review",
      dataIndex: "Review",
      render: () => (
        <div className="dropdown me-2">
          <Link
            to="#"
            className="dropdown-toggle btn btn-white border fw-normal d-inline-flex align-items-center"
            data-bs-toggle="dropdown"
          >
            Publish
          </Link>
          <ul className="dropdown-menu  dropdown-menu-end p-2">
            <li>
              <Link to="#" className="dropdown-item">
                Unpublish
              </Link>
            </li>
            <li>
              <Link to="#" className="dropdown-item">
                Publish
              </Link>
            </li>
          </ul>
        </div>
      ),
      sorter: (a: any, b: any) => a.Review.length - b.Review.length,
    },

    {
      title: "",
      render: () => (
        <div className="action-item">
          <Link
            to="#"
            className="dropdown-item d-flex align-items-center"
            data-bs-toggle="modal"
            data-bs-target="#delete_categories"
          >
            <i className="ti ti-trash" />
          </Link>
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
          <div className="mb-3 pb-3 border-bottom">
            <div className="d-flex align-items-center">
              <h4 className="fw-bold mb-0 me-2">Comments</h4>
              <span className="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium">
                Total Comments : 365
              </span>
            </div>
          </div>
          {/* End Page Header */}
          {/* Table List */}
          <div className="table-responsive">
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

export default BlogComments;
