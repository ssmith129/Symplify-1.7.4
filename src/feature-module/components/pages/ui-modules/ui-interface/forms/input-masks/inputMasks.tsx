import { useState } from "react";
import { IMaskInput } from "react-imask";
import { Link } from "react-router";
const FormMask = () => {
  const [formData, setFormData] = useState({
    phone: "",
    date: "",
    ssn:"",
    phonefeild:"",
    productkey:"",
    currency:"",
    eyescript:"",
    percentage:"",
    creditcard:"",
  });

  const handleChange = (name: any) => (value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 
  return (
    <>
      {/* ========================
              Start Page Content
          ========================= */}
      {/* Page wrapper */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Form Mask</h3>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* start row */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Form Mask</h5>
                  <p className="sub-header">
                    Input masks can be used to force the user to enter data
                    conform a specific format. Unlike validation, the user can't
                    enter any other key than the ones specified by the mask.
                  </p>
                </div>
                <div className="card-body">
                  <form action="#">
                    {/* start row */}
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Phone</label>
                        <IMaskInput
                          mask="(000) 000 - 0000"
                          id="date"
                          name="date"
                          className="form-control"
                          value={formData.phone}
                          onAccept={handleChange("phone")}
                          required
                        />
                        <span className="form-text text-muted">
                          (999) 999-9999
                        </span>
                      </div>
                      {/* end col */}
                      <div className="col-md-6">
                        <label className="form-label">Date</label>
                        <IMaskInput
                          mask="00/00/0000"
                          id="date"
                          name="date"
                          className="form-control"
                          value={formData.date}
                          onAccept={handleChange("date")}
                          required
                        />
                        <span className="form-text text-muted">dd/mm/yyyy</span>
                      </div>
                      {/* end col */}
                      <div className="col-md-6">
                        <label className="form-label">SSN field 1</label>
                        <IMaskInput
                          mask="000-00-0000"
                          id="ssn"
                          name="ssn"
                          className="form-control"
                          value={formData.ssn}
                          onAccept={handleChange("ssn")}
                          required
                        />
                        <span className="form-text text-muted">
                          e.g "999-99-9999"
                        </span>
                      </div>
                      {/* end col */}
                      <div className="col-md-6">
                        <label className="form-label">Phone field + ext.</label>
                        <IMaskInput
                          mask="+00 000 000 000"
                          id="phonefeild"
                          name="phonefeild"
                          className="form-control"
                          value={formData.phonefeild}
                          onAccept={handleChange("phonefeild")}
                          required
                        />
                        <span className="form-text text-muted">
                          +40 999 999 999
                        </span>
                      </div>
                      {/* end col */}
                      <div className="col-md-6">
                        <label className="form-label">Product Key</label>
                        <IMaskInput
                          mask="a*-000-a000"
                          id="productkey"
                          name="productkey"
                          className="form-control"
                          value={formData.productkey}
                          onAccept={handleChange("productkey")}
                          required
                        />
                        <span className="form-text text-muted">
                          e.g a*-999-a999
                        </span>
                      </div>
                      {/* end col */}
                      <div className="col-md-6">
                        <label className="form-label">Currency</label>
                        <IMaskInput
                          mask="$ 000,000,000.00"
                          id="currency"
                          name="currency"
                          className="form-control"
                          value={formData.currency}
                          onAccept={handleChange("currency")}
                          required
                        />
                        <span className="form-text text-muted">
                          $ 999,999,999.99
                        </span>
                      </div>
                      {/* end col */}
                      <div className="col-md-6">
                        <label className="form-label">Eye Script</label>
                        <IMaskInput
                          mask="~0.00 ~0.00 000"
                          id="eyescript"
                          name="eyescript"
                          className="form-control"
                          value={formData.eyescript}
                          onAccept={handleChange("eyescript")}
                          required
                        />
                        <span className="form-text text-muted">
                          ~9.99 ~9.99 999
                        </span>
                      </div>
                      {/* end col */}
                      <div className="col-md-6">
                        <label className="form-label">Percent</label>
                        <IMaskInput
                          mask="00%"
                          id="percentage"
                          name="percentage"
                          className="form-control"
                          value={formData.percentage}
                          onAccept={handleChange("percentage")}
                          required
                        />
                        <span className="form-text text-muted">e.g "99%"</span>
                      </div>
                      {/* end col */}
                      <div className="col-md-6">
                        <label className="form-label">Credit Card Number</label>
                        <IMaskInput
                          mask="000.000.000.0000"
                          id="creditcard"
                          name="creditcard"
                          className="form-control"
                          value={formData.creditcard}
                          onAccept={handleChange("creditcard")}
                          required
                        />
                        <span className="form-text text-muted">
                          e.g "999.999.999.9999"
                        </span>
                      </div>
                      {/* end col */}
                    </div>
                    {/* end row */}
                  </form>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/*  End container */}
        {/* Start Footer */}
        <div className="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top">
          <p className="text-dark mb-0">
            ©
            <Link to="#" className="link-primary">
              Kanakku
            </Link>
            , All Rights Reserved
          </p>
          <p className="text-dark">Version : 1.3.8</p>
        </div>
        {/* End Footer */}
      </div>
      {/* /Page wrapper */}
      {/* ========================
              End Page Content
          ========================= */}
    </>
  );
};

export default FormMask;
