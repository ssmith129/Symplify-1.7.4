import { Link } from "react-router";
import Datatable from "../../../../../core/common/dataTable";
import { useState } from "react";
import { PatientInvoiceData } from "../../../../../core/json/patientInvoiceData";
import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
import Modals from "./modals/modals";
import { all_routes } from "../../../../routes/all_routes";

const PatientInvoices = () => {
  const data = PatientInvoiceData;
  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "Invoice_ID",
      sorter: (a: any, b: any) => a.Invoice_ID.length - b.Invoice_ID.length,
    },
    {
      title: "Description",
      dataIndex: "Description",
      sorter: (a: any, b: any) => a.Description.length - b.Description.length,
    },
    {
      title: "Created Date",
      dataIndex: "Created_Date",
      sorter: (a: any, b: any) => a.Created_Date.length - b.Created_Date.length,
    },
    {
      title: "Due Date",
      dataIndex: "Due_Date",
      sorter: (a: any, b: any) => a.Due_Date.length - b.Due_Date.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a: any, b: any) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: string) => (
        <span
          className={`badge ${
            text === "Paid"
              ? "badge-soft-success"
              : text === "Partially Paid"
              ? "badge-soft-warning"
              : "badge-soft-danger"
          } badge-soft-success d-inline-flex align-items-center`}
        >
          <i className="ti ti-point-filled me-1" />
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
            <Link to="#" data-bs-toggle="dropdown">
              <i className="ti ti-dots-vertical" />
            </Link>
            <ul className="dropdown-menu p-2">
              <li>
                <Link
                  to={all_routes.patientinvoicedetails}
                  className="dropdown-item d-flex align-items-center"
                >
                  View
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
          </>
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
        <div className="content content-two">
          {/* Start Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">
                
                Invoices
                <span className="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium ms-2 fw-medium fs-13">
                  Total Invoices : 582
                </span>
              </h4>
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
            </div>
          </div>
          {/* End Page Header */}
          <div className=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div className="search-set mb-3">
              <div className="d-flex align-items-center flex-wrap gap-2">
                <div className="table-search d-flex align-items-center mb-0">
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
          {/* start row */}
          <div className="row">
            <div className="col-sm-12">
              <div>
                <div className="card-body p-0">
                  <div className="table-responsive table-nowrap">
                    <Datatable
                      columns={columns}
                      dataSource={data}
                      Selection={false}
                      searchText={searchText}
                    />
                  </div>
                </div>
              </div>
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
      <Modals />
    </>
  );
};

export default PatientInvoices;
