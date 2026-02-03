import { useState } from "react";
import { ExpenseReportData } from "../../../../../../core/json/expenseReportData";
import { Link } from "react-router";
import Datatable from "../../../../../../core/common/dataTable";
import TagInput from "../../../../../../core/common/Taginput";
import { Category, Purchased_By } from "../../../../../../core/common/selectOption";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import PredefinedDatePicker from "../../../../../../core/common/datePicker";
import ImageWithBasePath from "../../../../../../core/imageWithBasePath";

const ExpenseReport = () => {
  const data = ExpenseReportData;
  const columns = [
    {
      title: "Expense",
      dataIndex: "Expense",
      sorter: (a: any, b: any) => a.Expense.length - b.Expense.length,
    },
    {
      title: "Category",
      dataIndex: "Category",
      sorter: (a: any, b: any) => a.Category.length - b.Category.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      render:(text:any)=>(<p className="text-dark fw-medium">{text}</p>),
      sorter: (a: any, b: any) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a: any, b: any) => a.Date.length - b.Date.length,
    },
    {
      title: "Purchased By",
      dataIndex: "PurchasedBy",
      render: (text: any) => <p className="text-dark fw-medium">{text}</p>,
      sorter: (a: any, b: any) => a.PurchasedBy.length - b.PurchasedBy.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: string) => (
        <span
          className={`badge ${
            text === "Approved"
              ? "badge-soft-success border-success" : text === 'Pending' ? 'badge-soft-warning border-warning' : text === 'New' ?'badge-soft-primary border-primary'
              : "border-danger badge-soft-danger"
          }  border  px-2 py-1 fs-13 fw-medium`}
        >
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
    {
      title: "Payment Method",
      dataIndex: "PaymentMethod",
      sorter: (a: any, b: any) =>
        a.PaymentMethod.length - b.PaymentMethod.length,
    },
    
  ];

  const [tags2, setTags2] = useState<string[]>(["Received", "Pending"]);
  const handleTagsChange2 = (newTags: string[]) => {
    setTags2(newTags);
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
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom">
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">Expenses Report</h4>
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
          {/* row start */}
          <div className="row">
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card shadow-sm flex-fill w-100 z-0">
                <ImageWithBasePath
                  src="./assets/img/bg/widget-bg-05.svg"
                  alt="img"
                  className="position-absolute start-0 top-0 z-n1"
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-end">
                    <div>
                      <p className="mb-1 text-truncate">Total Expenses</p>
                      <h6 className="mb-2 fw-bold">$13,500</h6>
                      <p className="mb-0 fs-13 text-truncate">
                        <span className="text-success">
                          <i className="ti ti-arrow-up-right me-1" />
                          5.62%
                        </span>
                        from last month
                      </p>
                    </div>
                    <span className="avatar avatar-md widget-icon bg-soft-primary border border-primary text-primary rounded-2 flex-shrink-0">
                      <i className="ti ti-currency-dollar fs-14" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card shadow-sm flex-fill w-100 z-0">
                <ImageWithBasePath
                  src="./assets/img/bg/widget-bg-06.svg"
                  alt="img"
                  className="position-absolute start-0 top-0 z-n1"
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-end">
                    <div>
                      <p className="mb-1 text-truncate">Doctor Payouts</p>
                      <h6 className="mb-2 fw-bold">$4,500</h6>
                      <p className="mb-0 fs-13 text-truncate">
                        <span className="text-success">
                          <i className="ti ti-arrow-up-right me-1" />
                          11.4%
                        </span>
                        from last month
                      </p>
                    </div>
                    <span className="avatar avatar-md widget-icon bg-soft-success border border-success text-success rounded-2 flex-shrink-0">
                      <i className="ti ti-stethoscope fs-14" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card shadow-sm flex-fill w-100 z-0">
                <ImageWithBasePath
                  src="./assets/img/bg/widget-bg-07.svg"
                  alt="img"
                  className="position-absolute start-0 top-0 z-n1"
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-end">
                    <div>
                      <p className="mb-1 text-truncate">Staff Salaries</p>
                      <h6 className="mb-2 fw-bold">$3,200</h6>
                      <p className="mb-0 fs-13 text-truncate">
                        <span className="text-success">
                          <i className="ti ti-arrow-up-right me-1" />
                          8.52%
                        </span>
                        from last month
                      </p>
                    </div>
                    <span className="avatar avatar-md widget-icon bg-soft-warning border border-warning text-warning rounded-2 flex-shrink-0">
                      <i className="ti ti-pill fs-14" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card shadow-sm flex-fill w-100 z-0">
                <ImageWithBasePath
                  src="./assets/img/bg/widget-bg-08.svg"
                  alt="img"
                  className="position-absolute start-0 top-0 z-n1"
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-end">
                    <div>
                      <p className="mb-1 text-truncate">Utilities &amp; Rent</p>
                      <h6 className="mb-2 fw-bold">$2,000</h6>
                      <p className="mb-0 fs-13 text-truncate">
                        <span className="text-danger">
                          <i className="ti ti-arrow-down-right me-1" />
                          7.45%
                        </span>
                        from last month
                      </p>
                    </div>
                    <span className="avatar avatar-md widget-icon bg-soft-danger border border-danger text-danger rounded-2 flex-shrink-0">
                      <i className="ti ti-flask fs-14" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* col end */}
          </div>
          {/* row end */}
          <div className="card">
            <div className="card-body">
              {/* start row */}
              <div className="row row-gap-2">
                <div className="col-md-6">
                  <div className="mb-0">
                    <label className="form-label">Date</label>
                    <div className="report-rangepicker position-relative">
                      <PredefinedDatePicker/>
                      <span className="input-icon-addon fs-14 text-dark">
                        <i className="ti ti-calendar" />
                      </span>
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-md-6">
                  <div className="mb-0">
                    <label className="form-label">Category</label>
                    <CommonSelect
                        options={Category}
                        className="select"
                        defaultValue={Category[0]}
                      />
                  </div>
                </div>
                {/* end col */}
                <div className="col-md-6">
                  <div className="mb-0">
                    <label className="form-label">Purchased By</label>
                    <CommonSelect
                        options={Purchased_By}
                        className="select"
                        defaultValue={Purchased_By[0]}
                      />
                  </div>
                </div>
                {/* end col */}
                <div className="col-md-6">
                  <div className="mb-0">
                    <label className="form-label">Status</label>
                    <TagInput
                      initialTags={tags2}
                      onTagsChange={handleTagsChange2}
                    />
                  </div>
                </div>
                {/* end col */}
                <div className="col-md-12">
                  <div className="d-flex align-items-center justify-content-end">
                    <Link to="#" className="btn btn-dark">
                      <i className="ti ti-player-play me-1" />
                      Run Report
                    </Link>
                  </div>
                </div>
                {/* end col */}
              </div>
              {/* end row */}
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
          <div className="table-responsive">
             <Datatable
              columns={columns}
              dataSource={data}
              Selection={false}
              searchText={""}
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
    </>
  );
};

export default ExpenseReport;
