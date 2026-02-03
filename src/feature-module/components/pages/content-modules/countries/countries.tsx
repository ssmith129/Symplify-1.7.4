import { Link } from "react-router";
import { CountriesData } from "../../../../../core/json/countriesData";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import Datatable from "../../../../../core/common/dataTable";
import Modals from "./modals/modals";

const Countries = () => {
  const data = CountriesData;
  const columns = [
    {
      title: "Country Code",
      dataIndex: "Country_Code",
      sorter: (a: any, b: any) => a.Customer.length - b.Customer.length,
    },
    {
      title: "Country",
      dataIndex: "Country",
      render: (text: any, render: any) => (
        <div className="d-flex align-items-center">
          <Link
            to="#"
            className="avatar avatar-sm rounded-circle me-2 flex-shrink-0"
          >
            <ImageWithBasePath
              src={`assets/img/flags/${render.img}`}
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
      sorter: (a: any, b: any) => a.Country.length - b.Country.length,
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
          } fs-13 fw-medium border py-1 px-2`}
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
                  data-bs-target="#edit_countries"
                >
                  Edit
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="dropdown-item d-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_countries"
                >
                  Delete
                </Link>
              </li>
            </ul>
          </>
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
          <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom">
            <div className="d-flex align-items-center">
              <h4 className="fw-bold mb-0 me-2">Countries</h4>
              <span className="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium">
                Total States : 365
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
                Add New Countries
              </Link>
            </div>
          </div>
          {/* End Page Header */}
          {/* Table List */}
          <div className="table-responsive border bg-white">
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

export default Countries;
