import { Link } from "react-router";
import { LocationsData } from "../../../../../core/json/locationData";
import Datatable from "../../../../../core/common/dataTable";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import Modals from "./modals/modals";
import PageHeader from "../../../../../core/common/page-header/PageHeader";

const Locations = () => {
  const data = LocationsData;
  const columns = [
    {
      title: "Clinic Name",
      dataIndex: "Clinic_Name",
      render: (text: any, render: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md me-2">
            <ImageWithBasePath
              src={`assets/img/icons/${render.img}`}
              alt="img"
              className="rounded-circle"
            />
          </Link>
          <Link to="#" className="text-dark fw-semibold">
            {text}
          </Link>
          <span className="badge badge-soft-success border border-success fw-medium ms-2">
            {render.Span}
          </span>
        </div>
      ),
      sorter: (a: any, b: any) => a.Clinic_Name.length - b.Clinic_Name.length,
    },
    {
      title: "Address",
      dataIndex: "Address",
      sorter: (a: any, b: any) => a.Address.length - b.Address.length,
    },

    {
      title: "",
      render: () => (
        <div className="action-item">
          <Link to="#" data-bs-toggle="dropdown">
            <i className="ti ti-dots-vertical" />
          </Link>
          <ul className="dropdown-menu p-2">
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#edit_modal"
              >
                Edit
              </Link>
            </li>
            <li>
              <Link
                to="#"
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
          <PageHeader
            className="pb-3 mb-3 border-1 border-bottom"
            title={
              <>
                Locations
                <span className="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1">
                  Total Location : 565
                </span>
              </>
            }
            actions={
              <Link
                to="#"
                className="btn btn-primary fs-13 btn-md"
                data-bs-toggle="modal"
                data-bs-target="#add_modal"
              >
                <i className="ti ti-plus me-1" />
                New Location
              </Link>
            }
          />
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

export default Locations;
