import { useState } from "react";
import { Link } from "react-router";

const FormWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentStep2, setCurrentStep2] = useState(1);
  const [currentStep3, setCurrentStep3] = useState(1);
  const [formData3, setFormData3] = useState({
    userName: "",
    password: "",
    confirm: "",
    firstName: "",
    lastName: "",
    email: "",
    termsAccepted: false,
  });
  const totalSteps = 3;

  // Function to handle navigation
  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };
  const handleNext2 = () => {
    if (currentStep2 < totalSteps) setCurrentStep2(currentStep2 + 1);
  };
  const handleNext3 = () => {
    if (currentStep3 < totalSteps) setCurrentStep3(currentStep3 + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  const handlePrevious2 = () => {
    if (currentStep2 > 1) setCurrentStep2(currentStep2 - 1);
  };
  const handlePrevious3 = () => {
    if (currentStep3 > 1) setCurrentStep3(currentStep3 - 1);
  };

  const handleFirst = () => setCurrentStep(1);
  const handleFirst2 = () => setCurrentStep2(1);
  const handleFirst3 = () => setCurrentStep3(1);
  const handleLast = () => setCurrentStep(totalSteps);
  const handleLast2 = () => setCurrentStep2(totalSteps);
  const handleLast3 = () => setCurrentStep3(totalSteps);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <div className="row mb-3">
              <label className="col-md-3 col-form-label" htmlFor="userName">
                User Name
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="userName"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-md-3 col-form-label" htmlFor="password">
                Password
              </label>
              <div className="col-md-9">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-md-3 col-form-label" htmlFor="confirm">
                Re Password
              </label>
              <div className="col-md-9">
                <input
                  type="password"
                  className="form-control"
                  id="confirm"
                  name="confirm"
                  required
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="row mb-3">
              <label className="col-md-3 col-form-label" htmlFor="firstName">
                First Name
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-md-3 col-form-label" htmlFor="lastName">
                Last Name
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-md-3 col-form-label" htmlFor="email">
                Email
              </label>
              <div className="col-md-9">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="text-center">
            <h2 className="mt-0">
              <i className="bi bi-check2-all" />
            </h2>
            <h3 className="mt-0">Thank you !</h3>
            <p className="w-75 mb-2 mx-auto">
              Quisque nec turpis at urna dictum luctus. Suspendisse convallis
              dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis
              dictum aliquet.
            </p>
            <div className="mb-3">
              <div className="form-check d-inline-block">
                <input
                  type="checkbox"
                  className="form-check-input fs-15"
                  id="customCheck1"
                />
                <label className="form-check-label" htmlFor="customCheck1">
                  I agree with the Terms and Conditions
                </label>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  const renderStepContent2 = () => {
    switch (currentStep2) {
      case 1:
        return (
          <div>
            <div className="row mb-3">
              <label className="col-md-3 col-form-label" htmlFor="userName">
                User Name
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="userName"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-md-3 col-form-label" htmlFor="password">
                Password
              </label>
              <div className="col-md-9">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-md-3 col-form-label" htmlFor="confirm">
                Re Password
              </label>
              <div className="col-md-9">
                <input
                  type="password"
                  className="form-control"
                  id="confirm"
                  name="confirm"
                  required
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="row mb-3">
              <label className="col-md-3 col-form-label" htmlFor="firstName">
                First Name
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-md-3 col-form-label" htmlFor="lastName">
                Last Name
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-md-3 col-form-label" htmlFor="email">
                Email
              </label>
              <div className="col-md-9">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="text-center">
            <h2 className="mt-0">
              <i className="bi bi-check2-all" />
            </h2>
            <h3 className="mt-0">Thank you !</h3>
            <p className="w-75 mb-2 mx-auto">
              Quisque nec turpis at urna dictum luctus. Suspendisse convallis
              dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis
              dictum aliquet.
            </p>
            <div className="mb-3">
              <div className="form-check d-inline-block">
                <input
                  type="checkbox"
                  className="form-check-input fs-15"
                  id="customCheck1"
                />
                <label className="form-check-label" htmlFor="customCheck1">
                  I agree with the Terms and Conditions
                </label>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  const renderStepContent3 = () => {
    switch (currentStep3) {
      case 1:
        return (
          <div>
            <div className="row mb-3">
              <label
                className="col-md-3 col-form-label"
                htmlFor="userName-step3"
              >
                User Name
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="userName-step3"
                  name="userName"
                  value={formData3.userName}
                  onChange={handleChange3}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                className="col-md-3 col-form-label"
                htmlFor="password-step3"
              >
                Password
              </label>
              <div className="col-md-9">
                <input
                  type="password"
                  className="form-control"
                  id="password-step3"
                  name="password"
                  value={formData3.password}
                  onChange={handleChange3}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                className="col-md-3 col-form-label"
                htmlFor="confirm-step3"
              >
                Re Password
              </label>
              <div className="col-md-9">
                <input
                  type="password"
                  className="form-control"
                  id="confirm-step3"
                  name="confirm"
                  value={formData3.confirm}
                  onChange={handleChange3}
                  required
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="row mb-3">
              <label
                className="col-md-3 col-form-label"
                htmlFor="firstName-step3"
              >
                First Name
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="firstName-step3"
                  name="firstName"
                  value={formData3.firstName}
                  onChange={handleChange3}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                className="col-md-3 col-form-label"
                htmlFor="lastName-step3"
              >
                Last Name
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="lastName-step3"
                  name="lastName"
                  value={formData3.lastName}
                  onChange={handleChange3}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-md-3 col-form-label" htmlFor="email-step3">
                Email
              </label>
              <div className="col-md-9">
                <input
                  type="email"
                  className="form-control"
                  id="email-step3"
                  name="email"
                  value={formData3.email}
                  onChange={handleChange3}
                  required
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="text-center">
            <h2 className="mt-0">
              <i className="bi bi-check2-all" />
            </h2>
            <h3 className="mt-0">Thank you !</h3>
            <p className="w-75 mb-2 mx-auto">
              Quisque nec turpis at urna dictum luctus. Suspendisse convallis
              dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis
              dictum aliquet.
            </p>
            <div className="mb-3">
              <div className="form-check d-inline-block">
                <input
                  type="checkbox"
                  className="form-check-input fs-15"
                  id="customCheck1-step3"
                  name="termsAccepted"
                  checked={formData3.termsAccepted}
                  onChange={handleChange3}
                />
                <label
                  className="form-check-label"
                  htmlFor="customCheck1-step3"
                >
                  I agree with the Terms and Conditions
                </label>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleChange3 = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData3((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isStepValid3 = () => {
    switch (currentStep3) {
      case 1:
        return (
          formData3.userName.trim() &&
          formData3.password.trim() &&
          formData3.confirm.trim()
        );
      case 2:
        return (
          formData3.firstName.trim() &&
          formData3.lastName.trim() &&
          formData3.email.trim()
        );
      case 3:
        return formData3.termsAccepted;
      default:
        return false;
    }
  };
  // Removed duplicate declaration of handleNext3

  return (
    <>
      {/* ============================================================== */}
      {/* Start Page Content here */}
      {/* ============================================================== */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
            <div className="flex-grow-1">
              <h4 className="fs-18 fw-semibold mb-0">Form Wizard</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Forms</Link>
                </li>
                <li className="breadcrumb-item active">Form Wizard</li>
              </ol>
            </div>
          </div>
          {/* start row */}
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-bottom border-dashed d-flex align-items-center">
                  <h4 className="header-title">A Basic Wizard</h4>
                </div>
                <div className="card-body">
                  <form>
                    <div id="basicwizard">
                      <ul className="nav nav-pills nav-justified form-wizard-header mb-3">
                        <li className="nav-item">
                          <Link
                            to="#basictab1"
                            data-bs-toggle="tab"
                            data-toggle="tab"
                            className={`nav-link rounded-0 py-2 ${
                              currentStep === 1 ? "active" : ""
                            }`}
                          >
                            <i className="bi bi-person-circle fs-18 align-middle me-1" />
                            <span className="d-none d-sm-inline">Account</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#basictab2"
                            data-bs-toggle="tab"
                            data-toggle="tab"
                            className={`nav-link rounded-0 py-2 ${
                              currentStep === 2 ? "active" : ""
                            }`}
                          >
                            <i className="bi bi-emoji-smile fs-18 align-middle me-1" />
                            <span className="d-none d-sm-inline">Profile</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#basictab3"
                            data-bs-toggle="tab"
                            data-toggle="tab"
                            className={`nav-link rounded-0 py-2 ${
                              currentStep === 3 ? "active" : ""
                            }`}
                          >
                            <i className="bi bi-check2-circle fs-18 align-middle me-1" />
                            <span className="d-none d-sm-inline">Finish</span>
                          </Link>
                        </li>
                      </ul>
                      <div className="tab-content b-0 mb-0">
                        {renderStepContent()}
                        <div className="d-flex wizard justify-content-between flex-wrap gap-2 mt-3">
                          <div className="first">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={handleFirst}
                              disabled={currentStep === 1}
                            >
                              First
                            </button>
                          </div>
                          <div className="d-flex flex-wrap gap-2">
                            <div className="previous">
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handlePrevious}
                                disabled={currentStep === 1}
                              >
                                <i className="bx bx-left-arrow-alt me-2" />
                                Back To Previous
                              </button>
                            </div>
                            <div className="next">
                              <button
                                type="button"
                                className="btn btn-primary mt-3 mt-md-0"
                                onClick={handleNext}
                                disabled={currentStep === totalSteps}
                              >
                                Next Step
                                <i className="bx bx-right-arrow-alt ms-2" />
                              </button>
                            </div>
                          </div>
                          <div className="last">
                            <button
                              type="button"
                              className="btn btn-primary mt-3 mt-md-0"
                              onClick={handleLast}
                              disabled={currentStep === totalSteps}
                            >
                              Finish
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* tab-content */}
                    </div>
                    {/* end #basicwizard*/}
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-bottom border-dashed d-flex align-items-center">
                  <h4 className="header-title">Wizard With Progress Bar</h4>
                </div>
                <div className="card-body">
                  <form>
                    <div id="progressbarwizard">
                      <ul className="nav nav-pills nav-justified form-wizard-header mb-3">
                        <li className="nav-item">
                          <Link
                            to="#account-2"
                            data-bs-toggle="tab"
                            data-toggle="tab"
                            className={`nav-link rounded-0 py-2 ${
                              currentStep2 === 1 ? "active" : ""
                            }`}
                          >
                            <i className="bi bi-person-circle fs-18 align-middle me-1" />
                            <span className="d-none d-sm-inline">Account</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#profile-tab-2"
                            data-bs-toggle="tab"
                            data-toggle="tab"
                            className={`nav-link rounded-0 py-2 ${
                              currentStep2 === 2 ? "active" : ""
                            }`}
                          >
                            <i className="bi bi-emoji-smile fs-18 align-middle me-1" />
                            <span className="d-none d-sm-inline">Profile</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#finish-2"
                            data-bs-toggle="tab"
                            data-toggle="tab"
                            className={`nav-link rounded-0 py-2 ${
                              currentStep2 === 3 ? "active" : ""
                            }`}
                          >
                            <i className="bi bi-check2-circle fs-18 align-middle me-1" />
                            <span className="d-none d-sm-inline">Finish</span>
                          </Link>
                        </li>
                      </ul>
                      <div className="tab-content b-0 mb-0">
                        <div
                          className="progress mb-3"
                          style={{ height: "7px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            style={{
                              width: `${(currentStep2 / totalSteps) * 100}%`,
                            }}
                          />
                        </div>
                        {renderStepContent2()}
                        <div className="d-flex wizard justify-content-between flex-wrap gap-2 mt-3">
                          <div className="first">
                            <button
                              className="btn btn-primary"
                              onClick={handleFirst2}
                              disabled={currentStep2 === 1}
                            >
                              First
                            </button>
                          </div>
                          <div className="d-flex flex-wrap gap-2">
                            <div className="previous">
                              <button
                                className="btn btn-primary"
                                onClick={handlePrevious2}
                                disabled={currentStep2 === 1}
                              >
                                <i className="bx bx-left-arrow-alt me-2" />
                                Back To Previous
                              </button>
                            </div>
                            <div className="next">
                              <button
                                className="btn btn-primary mt-3 mt-md-0"
                                onClick={handleNext2}
                                disabled={currentStep2 === totalSteps}
                              >
                                Next Step
                                <i className="bx bx-right-arrow-alt ms-2" />
                              </button>
                            </div>
                          </div>
                          <div className="last">
                            <button
                              className="btn btn-primary mt-3 mt-md-0"
                              onClick={handleLast2}
                              disabled={currentStep2 === totalSteps}
                            >
                              Finish
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* tab-content */}
                    </div>
                    {/* end #progressbarwizard*/}
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header border-bottom border-dashed d-flex align-items-center">
                  <h4 className="header-title">Wizard With Form Validation</h4>
                </div>
                <div className="card-body">
                  <form>
                    <div id="validation-wizard">
                      <ul className="nav nav-pills nav-justified form-wizard-header mb-3">
                        <li
                          className="nav-item"
                          data-target-form="#accountForm"
                        >
                          <Link
                            to="#first"
                            data-bs-toggle="tab"
                            data-toggle="tab"
                            className={`nav-link rounded-0 py-2 ${
                              currentStep3 === 1 ? "active" : ""
                            }`}
                          >
                            <i className="bi bi-person-circle fs-18 align-middle me-1" />
                            <span className="d-none d-sm-inline">Account</span>
                          </Link>
                        </li>
                        <li
                          className="nav-item"
                          data-target-form="#profileForm"
                        >
                          <Link
                            to="#second"
                            data-bs-toggle="tab"
                            data-toggle="tab"
                            className={`nav-link rounded-0 py-2 ${
                              currentStep3 === 2 ? "active" : ""
                            }`}
                          >
                            <i className="bi bi-emoji-smile fs-18 align-middle me-1" />
                            <span className="d-none d-sm-inline">Profile</span>
                          </Link>
                        </li>
                        <li className="nav-item" data-target-form="#otherForm">
                          <Link
                            to="#third"
                            data-bs-toggle="tab"
                            data-toggle="tab"
                            className={`nav-link rounded-0 py-2 ${
                              currentStep3 === 3 ? "active" : ""
                            }`}
                          >
                            <i className="bi bi-check2-circle fs-18 align-middle me-1" />
                            <span className="d-none d-sm-inline">Finish</span>
                          </Link>
                        </li>
                      </ul>
                      <div className="tab-content">
                        {renderStepContent3()}
                        <div className="d-flex wizard justify-content-between flex-wrap gap-2 mt-3">
                          <div className="first">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={handleFirst3}
                              disabled={currentStep3 === 1}
                            >
                              First
                            </button>
                          </div>
                          <div className="d-flex flex-wrap gap-2">
                            <div className="previous">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handlePrevious3}
                                disabled={currentStep3 === 1}
                              >
                                <i className="bx bx-left-arrow-alt me-2" />
                                Back To Previous
                              </button>
                            </div>
                            <div className="next">
                              {currentStep3 < totalSteps && (
                                <button
                                  className="btn btn-primary"
                                  onClick={handleNext3}
                                  disabled={!isStepValid3()}
                                >
                                  Next
                                </button>
                              )}
                            </div>
                          </div>
                          <div className="last">
                            <button
                              type="button"
                              className="btn btn-primary mt-3 mt-md-0"
                              onClick={handleLast3}
                              disabled={currentStep3 === totalSteps}
                            >
                              Finish
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* tab-content */}
                    </div>
                  </form>
                  {/* end #validation-wizard*/}
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* End Content */}
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
      {/* ============================================================== */}
      {/* End Page content */}
      {/* ============================================================== */}
    </>
  );
};

export default FormWizard;
