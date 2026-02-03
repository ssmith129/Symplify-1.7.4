
import { Link } from "react-router";

const FormFloatingLabels = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
            <div className="flex-grow-1">
              <h4 className="fs-18 fw-semibold mb-0">Floating Label</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Forms</Link>
                </li>
                <li className="breadcrumb-item active">Floating Label</li>
              </ol>
            </div>
          </div>
          {/* End Page Header */}
          {/* start row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Basic Examples</h5>
                </div>
                <div className="card-body">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Readonly Plaintext</h5>
                </div>
                <div className="card-body">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      readOnly
                      className="form-control-plaintext"
                      id="floatingEmptyPlaintextInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingEmptyPlaintextInput">
                      Empty input
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      readOnly
                      className="form-control-plaintext"
                      id="floatingPlaintextInput"
                      placeholder="name@example.com"
                      defaultValue="name@example.com"
                    />
                    <label htmlFor="floatingPlaintextInput">
                      Input with value
                    </label>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          {/* start row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">
                    Floating Labels With Pre Defined Values
                  </h5>
                </div>
                <div className="card-body">
                  <form className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInputValue"
                      placeholder="name@example.com"
                      defaultValue="test@example.com"
                    />
                    <label htmlFor="floatingInputValue">Input with value</label>
                  </form>
                  <form className="form-floating">
                    <input
                      type="email"
                      className="form-control is-invalid"
                      id="floatingInputInvalid"
                      placeholder="name@example.com"
                      defaultValue="test@example.com"
                    />
                    <label htmlFor="floatingInputInvalid">Invalid input</label>
                  </form>
                </div>
              </div>
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Textareas</h5>
                </div>
                <div className="card-body">
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                      defaultValue={""}
                    />
                    <label htmlFor="floatingTextarea">Comments</label>
                  </div>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextareaDisabled"
                      disabled
                      defaultValue={""}
                    />
                    <label htmlFor="floatingTextareaDisabled">Disabled</label>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          {/* start row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Floating Labels In Select</h5>
                </div>
                <div className="card-body">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                    <label htmlFor="floatingSelect">Works with selects</label>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Floating Labels With Layouts</h5>
                </div>
                <div className="card-body">
                  <div className="row g-2">
                    <div className="col-md">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInputGrid"
                          placeholder="name@example.com"
                          defaultValue="mdo@example.com"
                        />
                        <label htmlFor="floatingInputGrid">Email address</label>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="form-floating">
                        <select className="form-select" id="floatingSelectGrid">
                          <option selected>Open this select menu</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                        <label htmlFor="floatingSelectGrid">
                          Works with selects
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
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
      {/* ========================
			End Page Content
		========================= */}
    </>
  );
};

export default FormFloatingLabels;
