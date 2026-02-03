
import { Link } from "react-router";

const FormGridGutters = () => {
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
              <h4 className="fs-18 fw-semibold mb-0">Grid System</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Form</Link>
                </li>
                <li className="breadcrumb-item active">Grid &amp; Gutters</li>
              </ol>
            </div>
          </div>
          {/* End Page Header */}
          {/* start row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Form Grid</h5>
                </div>
                <div className="card-body">
                  {/* start row */}
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    {/* end col */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                    {/* end col */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Address</label>
                      {/* start row */}
                      <div className="row">
                        <div className="col-xl-12 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Street"
                          />
                        </div>
                        {/* end col */}
                        <div className="col-xl-12 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Landmark"
                          />
                        </div>
                        {/* end col */}
                        <div className="col-xl-6 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                          />
                        </div>
                        {/* end col */}
                        <div className="col-xl-6 mb-3">
                          <select id="inputState1" className="form-select">
                            <option selected>State</option>
                            <option>...</option>
                          </select>
                        </div>
                        {/* end col */}
                        <div className="col-xl-6 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Postal/Zip code"
                          />
                        </div>
                        {/* end col */}
                        <div className="col-xl-6 mb-3">
                          <select id="inputCountry" className="form-select">
                            <option selected>Country</option>
                            <option>...</option>
                          </select>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end col */}
                    <div className="col-md-6 mb-3">
                      {/* start row */}
                      <div className="row">
                        <div className="col-xl-12 mb-3">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                        {/* end col */}
                        <div className="col-xl-12 mb-3">
                          <label className="form-label">DOB</label>
                          <input type="date" className="form-control" />
                        </div>
                        {/* end col */}
                        <div className="col-xl-12 mb-3">
                          {/* start row */}
                          <div className="row">
                            <label className="form-label mb-1">
                              Maritial Status
                            </label>
                            <div className="col-xl-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="status-married"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="status-married"
                                >
                                  Married
                                </label>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="status-unmarried"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="status-unmarried"
                                >
                                  Single
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* end row */}
                        </div>
                        {/* end col */}
                        <div className="col-xl-12"></div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end col */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Contact Number</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    {/* end col */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Alternative Contact</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    {/* end col */}
                    <div className="col-md-12">
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                          Check me out
                        </label>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-12">
                      <button type="submit" className="btn btn-primary">
                        Sign in
                      </button>
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Gutters</h5>
                </div>
                <div className="card-body">
                  {/* start row */}
                  <form className="row g-3 mt-0">
                    <div className="col-md-6">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    {/* end col */}
                    <div className="col-md-6">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                    {/* end col */}
                    <div className="col-md-6">
                      <label htmlFor="inputEmail4" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    {/* end col */}
                    <div className="col-md-6">
                      <label htmlFor="inputPassword4" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword4"
                      />
                    </div>
                    {/* end col */}
                    <div className="col-12">
                      <label htmlFor="inputAddress" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                      />
                    </div>
                    {/* end col */}
                    <div className="col-12">
                      <label htmlFor="inputAddress2" className="form-label">
                        Address 2
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                      />
                    </div>
                    {/* end col */}
                    <div className="col-md-6">
                      <label htmlFor="inputCity" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                      />
                    </div>
                    {/* end col */}
                    <div className="col-md-4">
                      <label htmlFor="inputState" className="form-label">
                        State
                      </label>
                      <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    {/* end col */}
                    <div className="col-md-2">
                      <label htmlFor="inputZip" className="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputZip"
                      />
                    </div>
                    {/* end col */}
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gridCheck3"
                        >
                          Check me out
                        </label>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">
                        Sign in
                      </button>
                    </div>
                    {/* end col */}
                  </form>
                  {/* end row */}
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
      {/* ============================================================== */}
      {/* End Page content */}
      {/* ============================================================== */}
    </>
  );
};

export default FormGridGutters;
