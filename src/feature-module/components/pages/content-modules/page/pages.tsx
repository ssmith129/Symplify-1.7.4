import { Link } from "react-router";
import { PagesData } from "../../../../../core/json/pagesData";
import Datatable from "../../../../../core/common/dataTable";
import Modals from "./modals/modals";
import { all_routes } from "../../../../routes/all_routes";

const Pages = () => {
  const data = PagesData;
  const columns = [
    {
      title: "Page",
      dataIndex: "Page",
      render: (text: any) => <div className="fw-medium text-dark">{text}</div>,
      sorter: (a: any, b: any) => a.Page.length - b.Page.length,
    },
    {
      title: "Page Slug",
      dataIndex: "Page_Slug",
      sorter: (a: any, b: any) => a.Page_Slug.length - b.Page_Slug.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: string) => (
        <span
          className={`badge ${
            text === "Active"
              ? "badge-soft-success  border-success"
              : " border-danger badge-soft-danger"
          }  fs-13 fw-medium p-1 px-2 border`}
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
          <Link to="#;" data-bs-toggle="dropdown">
            <i className="ti ti-dots-vertical" />
          </Link>
          <ul className="dropdown-menu p-2">
            <li>
              <Link
                to={all_routes.editPage}
                className="dropdown-item d-flex align-items-center"
              >
                Edit
              </Link>
            </li>
            <li>
              <Link
                to="#;"
                className="dropdown-item d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#delete_modal"
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
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Start Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-semibold mb-0">Pages</h4>
            </div>
            <div className="text-end d-flex">
              {/* dropdown*/}
              <div className="dropdown me-1">
                <Link
                  to="#"
                  className="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  Export
                  <i className="ti ti-chevron-down ms-2" />
                </Link>
                <ul className="dropdown-menu p-2">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Download as PDF
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Download as Excel
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                to={all_routes.addPage}
                className="btn btn-primary ms-2 fs-13 btn-md"
              >
                <i className="ti ti-plus me-1" /> Add New Page
              </Link>
            </div>
          </div>
          {/* End Page Header */}
          {/*  Start Table */}
          <div className="table-responsive">
            <Datatable
              columns={columns}
              dataSource={data}
              Selection={false}
              searchText={""}
            />
          </div>
          {/*  End Table */}
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

export default Pages;
