import  { useState } from "react";
import { Link } from "react-router";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import FilterIndex from "../../../../../core/common/filter/filterIndex";
import SearchInput from "../../../../../core/common/dataTable/dataTableSearch";
import { all_routes } from "../../../../routes/all_routes";
import { InvoicesData } from "../../../../../core/json/invoicesData";
import Datatable from "../../../../../core/common/dataTable";
import PageHeader from "../../../../../core/common/page-header/PageHeader";

const InvoicesList = () => {
  const data = InvoicesData;
  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "InvoiceID",
      render: (text: any) => (
        <Link to={all_routes.invoicesDetails}>{text}</Link>
      ),
      sorter: (a: any, b: any) => a.InvoiceID.length - b.InvoiceID.length,
    },
    {
      title: "Patient",
      dataIndex: "Patient",
      render: (text: any, record: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-md me-2">
            <ImageWithBasePath
              src={`assets/img/users/${record.Image}`}
              alt="product"
              className="rounded-circle"
            />
          </Link>
          <Link to="#" className="text-dark fw-semibold">
            {text}
          </Link>
        </div>
      ),
      sorter: (a: any, b: any) => a.Patient.length - b.Patient.length,
    },
    {
      title: "Created Date",
      dataIndex: "CreatedDate",
      render: (text: any) => <div className="text-dark"> {text} </div>,
      sorter: (a: any, b: any) => a.CreatedDate.length - b.CreatedDate.length,
    },
    {
      title: "Due Date",
      dataIndex: "DueDate",
      render: (text: any) => <div className="text-dark"> {text} </div>,
      sorter: (a: any, b: any) => a.DueDate.length - b.DueDate.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      render: (text: any) => (
        <div className="fw-semibold text-dark"> {text} </div>
      ),
      sorter: (a: any, b: any) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: any) => (
        <span
          className={`badge border ${
            text === "Paid"
              ? "badge-soft-success border-success text-success"
              : text === "Partially Paid"
              ? "badge-soft-warning border-warning text-warning"
              : "badge-soft-danger border-danger text-danger"
          } rounded fw-medium`}
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
                to={all_routes.invoicesDetails}
                className="dropdown-item d-flex align-items-center"
              >
                View details
              </Link>
            </li>
            <li>
              <Link
                to={all_routes.editInvoices}
                className="dropdown-item d-flex align-items-center"
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
            <li>
              <Link
                to="#"
                className="dropdown-item d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#edit_new_payment"
              >
                Download
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
          <PageHeader
            className="pb-3 mb-3 border-1 border-bottom"
            title={
              <>
                Invoices
                <span className="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1">
                  Total Invoices : 565
                </span>
              </>
            }
            actions={
              <>
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
                  to={all_routes.addInvoices}
                  className="btn btn-primary ms-2 fs-13 btn-md"
                >
                  <i className="ti ti-plus me-1" />
                  New Invoices
                </Link>
              </>
            }
          />
          {/* End Page Header */}
          {/*  Start Filter */}
          <div className=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div className="d-flex align-items-center gap-2">
              <div className="search-set mb-3">
                <div className="d-flex align-items-center flex-wrap gap-2">
                  <div className="table-search d-flex align-items-center mb-0">
                    <div className="search-input">
                      <SearchInput value={searchText} onChange={handleSearch} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
              <div className="dropdown me-2">
                <Link
                  to="#"
                  className="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
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
                    <h4 className="mb-0 fw-bold">Filter</h4>
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
          {/*  End Filter */}
          {/*  Start Table */}
          <div className="table-responsive">
            <Datatable
              columns={columns}
              dataSource={data}
              Selection={false}
              searchText={searchText}
            />
          </div>
          {/*  End Table */}
        </div>
        {/* End Content */}
        {/* Footer Start */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©{" "}
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
    </>
  );
};

export default InvoicesList;
