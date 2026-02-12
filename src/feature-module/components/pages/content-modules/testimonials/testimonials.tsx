import { Link } from "react-router";
import Datatable from "../../../../../core/common/dataTable";
import { TestimonialsData } from "../../../../../core/json/testimonialsData";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import Modals from "./modals/modals";

const Testimonials = () => {
  const data = TestimonialsData;
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
      title: "Country",
      dataIndex: "Country",
      sorter: (a: any, b: any) => a.Country.length - b.Country.length,
    },
    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a: any, b: any) => a.Email.length - b.Email.length,
    },
    {
      title: "Comment",
      dataIndex: "Comment",
      rendar: (text: any) => <p className="truncate-text">{text}</p>,
      sorter: (a: any, b: any) => a.Comment.length - b.Comment.length,
    },
    {
      title: "Created On",
      dataIndex: "CitCreated_Ony",
      sorter: (a: any, b: any) => a.Created_On.length - b.Created_On.length,
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
      sorter: (a: any, b: any) => a.action.length - b.action.length,
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
          <div className="d-flex align-items-sm-center justify-content-between flex-sm-row flex-column gap-2 pb-3 mb-3 border-bottom">
            <div className="d-flex align-items-center">
              <h4 className="fw-bold mb-0 me-2">Testimonials</h4>
              <span className="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium">
                Total Testimonials list : 582
              </span>
            </div>
            <div className="text-end">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#add_countries"
              >
                <i className="ti ti-plus me-1" />
                Add New Testimonials
              </Link>
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

export default Testimonials;
