import { Link } from "react-router";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import { all_routes } from "../../../../routes/all_routes";

const PatientPrescriptionDetails = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* start row*/}
          <div className="row">
            <div className="col-lg-10 mx-auto">
              {/* start page header */}
              <div className="d-flex align-items-sm-center flex-sm-row flex-column mb-4">
                <div className="flex-grow-1">
                  <h6 className="fs-14 fw-semibold mb-0 d-flex align-items-center ">
                    
                    <Link to={all_routes.patientPrescriptions} className="me-1">
                      <i className="ti ti-chevron-left" /> Prescriptions
                    </Link>
                  </h6>
                </div>
              </div>
              {/* end page header */}
              <div className="card">
                <div className="card-body">
                  {/* Items */}
                  <div className="d-flex align-items-center justify-content-between border-1 border-bottom pb-3 mb-3">
                  <div className="invoice-logo">
                      <ImageWithBasePath
                        src="assets/img/logo.svg"
                        className="logo-white"
                        alt="logo"
                      />
                      <ImageWithBasePath
                        src="assets/img/logo-white.svg"
                        className="logo-dark"
                        alt="logo"
                      />
                    </div>
                    <span className="badge bg-info-subtle text-info-emphasis fs-13 fw-medium border border-primary py-1 px-2">
                      
                      #PRE0025
                    </span>
                  </div>
                  {/* Items */}
                  <div className="d-flex align-items-center justify-content-between border-1 border-bottom pb-3 mb-3 flex-wrap gap-2">
                    <div className="d-flex align-items-center gap-2">
                      <div className="avatar avatar-xxl rounded bg-light border p-2">
                        <ImageWithBasePath
                          src="./assets/img/icons/trust-care.svg"
                          alt="favicon.png"
                          className="img-fluid img1 "
                        />
                      </div>
                      <div>
                        <h6 className="text-dark fw-semibold mb-1">
                          Trustcare Clinic
                        </h6>
                        <p className="mb-1"> Dr. Mick Thompson </p>
                        <p className="mb-0"> MD Cardiologist. MBBS,MS</p>
                      </div>
                    </div>
                    <div className="text-lg-end">
                      <p className="text-dark mb-1">
                        
                        Department :
                        <span className="text-body"> Cardiology OP</span>
                      </p>
                      <p className="text-dark mb-1">
                        
                        Prescribed on :
                        <span className="text-body">
                          
                          25 Jan 2025, 09:00 AM
                        </span>
                      </p>
                      <p className="text-dark mb-0">
                        
                        Consultation :
                        <span className="text-body"> Video </span>
                      </p>
                    </div>
                  </div>
                  {/* Items */}
                  <div className="mb-3">
                    <h6 className=" mb-2 fs-14 fw-medium"> Patient Details </h6>
                    <div className="px-3 py-2 bg-light rounded d-flex align-items-center justify-content-between">
                      <h6 className="m-0 fw-semibold fs-16"> M.Reyan Verol </h6>
                      <div className="d-flex align-items-center  gap-3">
                        <p className="mb-0 text-dark"> 28Y / Male </p>
                        <p className="mb-0 text-dark">
                          
                          <span className="text-body"> Blood</span> : O+ve
                        </p>
                        <p className="mb-0 text-dark">
                          
                          Patient ID <span className="text-body"> PT0025</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Items */}
                  <div className="mb-4">
                    <h6 className="mb-3 fs-16 fw-bold text-center">
                      Cardiology Prescription
                    </h6>
                    <div className="">
                      {/* Table List */}
                      <div className="table-responsive border bg-white">
                        <table className="table table-nowrap">
                          <thead>
                            <tr>
                              <th>SNO</th>
                              <th>Medecine Name</th>
                              <th>Dosage</th>
                              <th> Frequency</th>
                              <th> Duration </th>
                              <th> Timings</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>01</td>
                              <td>General Medicine</td>
                              <td>Ecosprin 75MG </td>
                              <td> 1-0-1 </td>
                              <td> 1 month </td>
                              <td> Before meal </td>
                            </tr>
                            <tr>
                              <td>02</td>
                              <td>Axer 90MG Tab </td>
                              <td>90 mg </td>
                              <td> 1-1-1 </td>
                              <td> 1 month </td>
                              <td> After meal </td>
                            </tr>
                            <tr>
                              <td>03</td>
                              <td>Ramistar XL 2.5</td>
                              <td>75 ml</td>
                              <td> 1-0-1 </td>
                              <td> 1 month </td>
                              <td> After meal </td>
                            </tr>
                            <tr>
                              <td>04</td>
                              <td>General Medicine</td>
                              <td>Ecosprin 75MG </td>
                              <td> 1-0-1 </td>
                              <td> 1 month </td>
                              <td> Before meal </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* /Table List */}
                    </div>
                  </div>
                  {/* Items */}
                  <div className="pb-3 mb-3 border-1 border-bottom">
                    <h6 className="mb-1 fs-16 fw-semibold">Advice</h6>
                    <p>
                      
                      An account of the present illness, which includes the
                      circumstances surrounding the onset of recent health
                      changes and the chronology of subsequent events that have
                      led the patient to seek medical care, is essential to
                      understanding the course of the disease process.
                      Medications are listed in the medical history because they
                      may play a role in the current illness.
                    </p>
                  </div>
                  {/* Items */}
                  <div className="pb-3 mb-3 border-1 border-bottom d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div className="">
                      <h6 className="mb-1 fs-16 fw-semibold"> Follow Up </h6>
                      <p>
                        
                        Follow u p after 3 months, Have to come on empty stomach
                      </p>
                    </div>
                    <div className="">
                      <ImageWithBasePath
                        src="assets/img/icons/signature-img.svg"
                        alt=""
                        className="img-fluid "
                      />
                      <h6 className="fs-14 fw-semibold"> Dr. Mick Thompson </h6>
                      <p className="fs-13 fw-normal"> MD Cardiologist </p>
                    </div>
                  </div>
                  <div className="text-center d-flex align-items-center justify-content-center">
                    <Link
                      to="#"
                      className="btn btn-md btn-dark me-2 d-flex align-items-center"
                    >
                      
                      <i className="ti ti-printer me-1" /> Print
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-md btn-primary d-flex align-items-center"
                    >
                      
                      <i className="ti ti-download me-1" /> Download
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end row*/}
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
    </>
  );
};

export default PatientPrescriptionDetails;
