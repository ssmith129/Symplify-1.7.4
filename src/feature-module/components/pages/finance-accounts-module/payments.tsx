import { useState } from "react";
import { Link } from "react-router";
import FilterIndex from "../../../../core/common/filter/filterIndex";
import SearchInput from "../../../../core/common/dataTable/dataTableSearch";
import { PaymentsListData } from "../../../../core/json/paymetsListData";
import { all_routes } from "../../../routes/all_routes";
import Datatable from "../../../../core/common/dataTable";
import PaymentsModal from "./modal/paymentsModal";
import ImageWithBasePath from "../../../../core/imageWithBasePath";
import PageHeader from "../../../../core/common/page-header/PageHeader";

const PaymentsList = () => {
  const data = PaymentsListData;
  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "InvoiceID",
      render: (text: any) => <Link to="#">{text}</Link>,
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
      title: "Doctor",
      dataIndex: "Doctor",
      render: (text: any, record: any) => (
        <div className="d-flex align-items-center">
          <Link to={all_routes.doctordetails} className="avatar me-2">
            <ImageWithBasePath
              src={`assets/img/doctors/${record.DoctorImage}`}
              alt="Doctor"
              className="rounded-circle"
            />
          </Link>
          <div>
            <h6 className="mb-1 fs-14 fw-semibold">
              <Link to={all_routes.doctordetails}>{text}</Link>
            </h6>
            <span className="fs-13 d-block">{record.Position}</span>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.Doctor.length - b.Doctor.length,
    },
    {
      title: "PaidDate",
      dataIndex: "PaidDate",
      render: (text: any) => <div className="text-dark"> {text} </div>,
      sorter: (a: any, b: any) => a.PaidDate.length - b.PaidDate.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      render: (text: any) => (
        <div className="fw-semibold text-dark">{text}</div>
      ),
      sorter: (a: any, b: any) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Payment Method",
      dataIndex: "PaymentMethod",
      render: (text: any) => <div className="text-dark"> {text} </div>,
      sorter: (a: any, b: any) =>
        a.PaymentMethod.length - b.PaymentMethod.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: any) => (
        <span
          className={`badge border ${
            text === "Paid"
              ? "badge-soft-success border-success text-success"
              : text === "Unpaid"
              ? "badge-soft-danger border-danger text-danger"
              : "badge-soft-warning border-warning text-warning"
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
                to="#"
                className="dropdown-item d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#edit_new_payment"
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
                Payments
                <span className="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1">
                  Total Payments : 565
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
                  to="#"
                  className="btn btn-primary ms-2 fs-13 btn-md"
                  data-bs-toggle="modal"
                  data-bs-target="#add_new_payment"
                >
                  <i className="ti ti-plus me-1" />
                  New Payment
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

      <PaymentsModal />
    </>
  );
};

export default PaymentsList;
