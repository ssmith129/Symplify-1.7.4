import { Link } from "react-router";
import { IcomeReportData } from "../../../../../../core/json/incomeReportData";
import Datatable from "../../../../../../core/common/dataTable";
import PredefinedDatePicker from "../../../../../../core/common/datePicker";
import { Received_From } from "../../../../../../core/common/selectOption";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import { useState } from "react";
import TagInput from "../../../../../../core/common/Taginput";
import PageHeader from "../../../../../../core/common/page-header/PageHeader";

const IncomeReport = () => {
  const data = IcomeReportData;
  const columns = [
    {
      title: "Income",
      dataIndex: "Income",
      sorter: (a: any, b: any) => a.Income.length - b.Income.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      render: (text: any) => <p className="text-dark fw-medium">{text}</p>,
      sorter: (a: any, b: any) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Date",
      dataIndex: "Date",
      sorter: (a: any, b: any) => a.Date.length - b.Date.length,
    },
    {
      title: "Received From",
      dataIndex: "ReceivedFrom",
      render: (text: any) => <p className="text-dark fw-medium">{text}</p>,
      sorter: (a: any, b: any) => a.ReceivedFrom.length - b.ReceivedFrom.length,
    },
    {
      title: "Payment Method",
      dataIndex: "PaymentMethod",
      sorter: (a: any, b: any) =>
        a.PaymentMethod.length - b.PaymentMethod.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: string) => (
        <span
          className={`badge ${
            text === "Received"
              ? "badge-soft-success border-success"
              : "border-warning badge-soft-warning"
          }  border  px-2 py-1 fs-13 fw-medium`}
        >
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
  ];

  const [tags, setTags] = useState<string[]>(["PayPal", "Cheque"]);
  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };
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
          <PageHeader
            title="Income Report"
            className="mb-3 pb-3 border-bottom"
            actions={
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
            }
          />
          {/* End Page Header */}
          {/* row start */}
          <div className="row">
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <p className="mb-1 text-truncate">Total Clinic Income</p>
                      <h6 className="mb-0 fw-bold">$18,750</h6>
                    </div>
                    <span className="avatar avatar-lg bg-soft-primary text-primary rounded-circle flex-shrink-0">
                      <i className="ti ti-currency-dollar fs-24" />
                    </span>
                  </div>
                  <div className="progress mb-2 progress-sm">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <p className="mb-0 fs-13">
                    <span className="text-success">
                      <i className="ti ti-arrow-up-right me-1" />
                      5.62%
                    </span>
                    from last month
                  </p>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <p className="mb-1 text-truncate">
                        Doctor Fees Collected
                      </p>
                      <h6 className="mb-0 fw-bold">$7,000</h6>
                    </div>
                    <span className="avatar avatar-lg bg-soft-success text-success rounded-circle flex-shrink-0">
                      <i className="ti ti-stethoscope fs-24" />
                    </span>
                  </div>
                  <div className="progress mb-2 progress-sm">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <p className="mb-0 fs-13">
                    <span className="text-success">
                      <i className="ti ti-arrow-up-right me-1" />
                      11.4%
                    </span>
                    from last month
                  </p>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <p className="mb-1 text-truncate">Medicine Sales</p>
                      <h6 className="mb-0 fw-bold">$6,250</h6>
                    </div>
                    <span className="avatar avatar-lg bg-soft-warning text-warning rounded-circle flex-shrink-0">
                      <i className="ti ti-pill fs-24" />
                    </span>
                  </div>
                  <div className="progress mb-2 progress-sm">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <p className="mb-0 fs-13">
                    <span className="text-success">
                      <i className="ti ti-arrow-up-right me-1" />
                      8.52%
                    </span>
                    from last month
                  </p>
                </div>
              </div>
            </div>
            {/* col end */}
            {/* col start */}
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="card shadow-sm flex-fill w-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <p className="mb-1 text-truncate">Lab Revenue</p>
                      <h6 className="mb-0 fw-bold">$5,500</h6>
                    </div>
                    <span className="avatar avatar-lg bg-soft-danger text-danger rounded-circle flex-shrink-0">
                      <i className="ti ti-flask fs-24" />
                    </span>
                  </div>
                  <div className="progress mb-2 progress-sm">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <p className="mb-0 fs-13">
                    <span className="text-danger">
                      <i className="ti ti-arrow-down-right me-1" />
                      7.45%
                    </span>
                    from last month
                  </p>
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
                    <div className="position-relative report-rangepicker">
                      <PredefinedDatePicker />
                      <span className="input-icon-addon fs-14 text-dark">
                        <i className="ti ti-calendar" />
                      </span>
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-md-6">
                  <div className="mb-0">
                    <label className="form-label">Received From</label>
                    <CommonSelect
                      options={Received_From}
                      className="select"
                      defaultValue={Received_From[0]}
                    />
                  </div>
                </div>
                {/* end col */}
                <div className="col-md-6">
                  <div className="mb-0">
                    <label className="form-label">Payment Method</label>
                    <TagInput
                      initialTags={tags}
                      onTagsChange={handleTagsChange}
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

export default IncomeReport;
