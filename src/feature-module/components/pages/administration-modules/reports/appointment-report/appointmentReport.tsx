import { useState } from "react";
import { AppointmentReportData } from "../../../../../../core/json/appointmentReportData";
import { Link } from "react-router";
import Datatable from "../../../../../../core/common/dataTable";
import TagInput from "../../../../../../core/common/Taginput";
import CommonSelect from "../../../../../../core/common/common-select/commonSelect";
import {
  Designation,
  Location,
  Patient,
  Practioner,
} from "../../../../../../core/common/selectOption";
import PredefinedDatePicker from "../../../../../../core/common/datePicker";
import AppointmentReportChart from "./chart/appointmentReportChart";

const AppointmentReport = () => {
  const data = AppointmentReportData;
  const columns = [
    {
      title: "Patient",
      dataIndex: "Patient",
      sorter: (a: any, b: any) => a.Patient.length - b.Patient.length,
    },
    {
      title: "Date & Time",
      dataIndex: "DateTime",
      sorter: (a: any, b: any) => a.DateTime.length - b.DateTime.length,
    },
    {
      title: "Invoice ID",
      dataIndex: "InvoiceID",
      sorter: (a: any, b: any) => a.InvoiceID.length - b.InvoiceID.length,
    },
    {
      title: "Practioner",
      dataIndex: "Practioner",
      render: (text: any) => <p className="text-dark fw-medium">{text}</p>,
      sorter: (a: any, b: any) => a.Practioner.length - b.Practioner.length,
    },
    {
      title: "Location",
      dataIndex: "Location",
      sorter: (a: any, b: any) => a.Location.length - b.Location.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: string) => (
        <span
          className={`badge ${
            text === "Checked Out"
              ? "badge-soft-primary border-primary"
              : text === "Confirmed"
              ? "badge-soft-success border-success"
              : text === "Cancelled"
              ? "badge-soft-danger border-danger"
              : "border-warning badge-soft-warning"
          }  border  px-2 py-1 fs-13 fw-medium`}
        >
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
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
              <h4 className="fw-bold mb-0">Appointment Report</h4>
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
          <AppointmentReportChart />
          <div className="card">
            <div className="card-body">
              {/* start row */}
              <div className="row row-gap-2">
                <div className="col-lg-4">
                  <div className="mb-0">
                    <label className="form-label">Date</label>
                    <div className="report-rangepicker position-relative">
                      <PredefinedDatePicker />
                      <span className="input-icon-addon fs-14 text-dark">
                        <i className="ti ti-calendar" />
                      </span>
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-4">
                  <div className="mb-0">
                    <label className="form-label">Patient</label>
                    <CommonSelect
                      options={Patient}
                      className="select"
                      defaultValue={Patient[0]}
                    />
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-4">
                  <div className="mb-0">
                    <label className="form-label">Location</label>
                    <CommonSelect
                      options={Location}
                      className="select"
                      defaultValue={Location[0]}
                    />
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-4">
                  <div className="mb-0">
                    <label className="form-label">Practioner</label>
                    <CommonSelect
                      options={Practioner}
                      className="select"
                      defaultValue={Practioner[0]}
                    />
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-4">
                  <div className="mb-0">
                    <label className="form-label">Designation</label>
                    <CommonSelect
                      options={Designation}
                      className="select"
                      defaultValue={Designation[0]}
                    />
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-4">
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

export default AppointmentReport;
