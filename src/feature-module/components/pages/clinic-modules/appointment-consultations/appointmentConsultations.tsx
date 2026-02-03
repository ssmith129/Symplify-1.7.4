import { Link } from "react-router";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import { all_routes } from "../../../../routes/all_routes";
import ComplaintForm from "../../../../../core/common/dynamic-list/complientForm";
import DiagnosisForm from "../../../../../core/common/dynamic-list/diagnosisForm";
import MedicalForm from "../../../../../core/common/dynamic-list/medicalForm";
import AdviceForm from "../../../../../core/common/dynamic-list/AdviceForm";
import InvestigationList from "../../../../../core/common/dynamic-list/InvestigationForm";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { empty_Stomach } from "../../../../../core/common/selectOption";
import InvoiceList from "../../../../../core/common/dynamic-list/InvoiceList";

const AppointmentConsultations = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Start Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-4">
            <div className="flex-grow-1">
              <h6 className="fs-14 fw-semibold mb-0 d-flex align-items-center">
                <Link to={all_routes.appointments} className="text-dark">
                  <i className="ti ti-chevron-left me-1" />
                  Appointments
                </Link>
              </h6>
            </div>
          </div>
          {/* End Page Header */}
          {/* Start Information */}
          <div className="card rounded-0">
            <div className="card-header">
              <h5 className="m-0 fw-bold"> Basic Information </h5>
            </div>
            {/* end card header */}
            <div className="card-body">
              {/* start row */}
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="d-flex align-items-center gap-3">
                    <div className="avatar avatar-xxxl">
                      <ImageWithBasePath
                        src="assets/img/users/user-04.jpg"
                        alt="user-01"
                        className="img-fluid img1 rounded"
                      />
                    </div>
                    <div className="">
                      <span className="badge badge-md text-info border border-info mb-1 fs-13 fw-medium px-2 ">
                        #AP02254
                      </span>
                      <h5 className="text-dark mb-1 fw-bold"> James Carter </h5>
                      <p className="text-dark m-0">
                        <span className="text-body"> Reason : </span> Pain near
                        left chest, Pelvic salinity
                      </p>
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="bg-light p-3 rounded d-flex align-items-center justify-content-between">
                    {/* Items */}
                    <div>
                      <div className="mb-2">
                        <h6 className="text-dark fs-14 fw-semibold mb-1">
                          Age
                        </h6>
                        <p className="text-body fs-13 m-0"> 28 Years </p>
                      </div>
                      <div>
                        <h6 className="text-dark fs-14 fw-semibold mb-1">
                          Department
                        </h6>
                        <p className="text-body fs-13 m-0"> Cardiology </p>
                      </div>
                    </div>
                    {/* Items */}
                    <div>
                      <div className="mb-2">
                        <h6 className="text-dark fs-14 fw-semibold mb-1">
                          Date
                        </h6>
                        <p className="text-body fs-13 m-0">
                          25 Jan 2024, 07:00
                        </p>
                      </div>
                      <div>
                        <h6 className="text-dark fs-14 fw-semibold mb-1">
                          Gender
                        </h6>
                        <p className="text-body fs-13 m-0"> Male</p>
                      </div>
                    </div>
                    {/* Items */}
                    <div>
                      <div className="mb-2">
                        <h6 className="text-dark fs-14 fw-semibold mb-1">
                          Blood Group
                        </h6>
                        <p className="text-body fs-13 m-0"> O+ve</p>
                      </div>
                      <div>
                        <h6 className="text-dark fs-14 fw-semibold mb-1">
                          Consultation Type
                        </h6>
                        <p className="text-body fs-13 m-0">
                          Online Consultation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end col */}
              </div>
              {/* end row */}
            </div>
            {/* end card body*/}
          </div>
          {/* end card */}
          {/* End Information */}
          {/* Start Vitals */}
          <div className="card rounded-0">
            <div className="card-header">
              <h5 className="m-0 fw-bold"> Vitals </h5>
            </div>
            {/* end card header */}
            <div className="card-body pb-0">
              {/* start form */}
              <form>
                {/* start row */}
                <div className="row">
                  {/* Items */}
                  <div className="col-md-4 mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Temperature
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <span className="input-group-text bg-transparent text-dark fs-14">
                        F
                      </span>
                    </div>
                  </div>
                  {/* end col */}
                  {/* Items */}
                  <div className="col-md-4 mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Pulse
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <span className="input-group-text bg-transparent text-dark fs-14">
                        mmHg
                      </span>
                    </div>
                  </div>
                  {/* end col */}
                  {/* Items */}
                  <div className="col-md-4 mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Respiratory Rate
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <span className="input-group-text bg-transparent text-dark fs-14">
                        rpm
                      </span>
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-4 mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      SPO2
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <span className="input-group-text bg-transparent text-dark fs-14">
                        %
                      </span>
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-4 mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Height
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <span className="input-group-text bg-transparent text-dark fs-14">
                        cm
                      </span>
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-4 mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Weight
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <span className="input-group-text bg-transparent text-dark fs-14">
                        kg
                      </span>
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-4 mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      BMI
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <span className="input-group-text bg-transparent text-dark fs-14">
                        %
                      </span>
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-4 mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Waist
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <span className="input-group-text bg-transparent text-dark fs-14">
                        cm
                      </span>
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-4 mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Weight
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <span className="input-group-text bg-transparent text-dark fs-14">
                        kg
                      </span>
                    </div>
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
              </form>
              {/* end form */}
            </div>
          </div>
          {/* End Vitals */}
          {/* Start Complaint */}
          <div className="card rounded-0">
            <div className="card-header">
              <h5 className="m-0 fw-bold"> Complaint </h5>
            </div>
            {/* end card header */}
            <div className="card-body">
              <ComplaintForm />
            </div>
            {/* end card-body */}
          </div>
          {/* end card-body */}
          {/* End Vitals */}
          {/* Start Diagnosis */}
          <div className="card rounded-0">
            <div className="card-header">
              <h5 className="m-0 fw-bold"> Diagnosis </h5>
            </div>
            {/* end card header */}
            <div className="card-body pb-0">
              <div className="">
                <DiagnosisForm />
              </div>
            </div>
            {/* end card-body */}
          </div>
          {/* end card-body */}
          {/* End Complaint */}
          {/* Start Medication */}
          <div className="card rounded-0">
            <div className="card-header">
              <h5 className="m-0 fw-bold"> Medications </h5>
            </div>
            {/* end card header */}
            <div className="card-body pb-0">
              <MedicalForm />
            </div>
            {/* end card-body */}
          </div>
          {/* end card-body */}
          {/* End Medications */}
          {/* Start Advice */}
          <div className="card rounded-0">
            <div className="card-header">
              <h5 className="m-0 fw-bold"> Advice </h5>
            </div>
            {/* end card header */}
            <div className="card-body advices-list pb-0">
              <AdviceForm />
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
          {/* End Advice */}
          {/* Start Investigation */}
          <div className="card rounded-0">
            <div className="card-header">
              <h5 className="m-0 fw-bold"> Investigation &amp; Procedure </h5>
            </div>
            {/* end card header */}
            <div className="card-body invest-list pb-0">
              <InvestigationList />
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
          {/* End Advice */}
          {/* Start Follow Up */}
          <div className="card rounded-0">
            <div className="card-header">
              <h5 className="m-0 fw-bold"> Follow Up </h5>
            </div>
            {/* end card header */}
            <div className="card-body pb-0">
              {/* start row */}
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Next Consultation
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control rounded" />
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Whether to come on empty Stomach
                    </label>
                    <CommonSelect
                      options={empty_Stomach}
                      className="select"
                      defaultValue={empty_Stomach[0]}
                    />
                  </div>
                </div>
                {/* end col */}
              </div>
              {/* end row */}
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
          {/* End Follow Up */}
          {/* Start Invoice */}
          <div className="card rounded-0">
            <div className="card-header">
              <h5 className="m-0 fw-bold"> Invoice </h5>
            </div>
            {/* end card header */}
            <div className="card-body">
              <InvoiceList />
            </div>
            {/* end card-body */}
          </div>
          {/* end card-body */}
          {/* End Complaint */}
          <div className="d-flex gap-2 align-items-center justify-content-end">
            <Link
              to=""
              className="btn btn-md bg-light text-dark fs-13 fw-medium rounded"
            >
              Cancel
            </Link>
            <Link
              to=""
              className="btn btn-md btn-primary fs-13 fw-medium rounded"
              data-bs-toggle="modal"
              data-bs-target="#cancel-reason"
            >
              Complete Appointment
            </Link>
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

export default AppointmentConsultations;
