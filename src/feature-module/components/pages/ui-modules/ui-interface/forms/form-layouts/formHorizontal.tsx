
import { Link } from "react-router";

const FormHorizontal = () => {
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
              <h4 className="fs-18 fw-semibold mb-0">Form Horizontal</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Forms</Link>
                </li>
                <li className="breadcrumb-item active">Form Horizontal</li>
              </ol>
            </div>
          </div>
          {/* End Page Header */}
          {/* start row */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Basic Form</h5>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="row mb-3">
                      <label className="col-lg-3 form-label">First Name</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 form-label">Last Name</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 form-label">
                        Email Address
                      </label>
                      <div className="col-lg-9">
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 form-label">Username</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 form-label">Password</label>
                      <div className="col-lg-9">
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 form-label">
                        Repeat Password
                      </label>
                      <div className="col-lg-9">
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card ">
                <div className="card-header">
                  <h5 className="card-title">Address Form</h5>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="row mb-3">
                      <label className="col-lg-3 form-label">Address 1</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 form-label">Address 2</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 form-label">City</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 form-label">State</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 form-label">Country</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 form-label">Postal Code</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
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
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Two Column Horizontal Form</h5>
                </div>
                <div className="card-body">
                  <h6 className="fs-16 mb-3">Personal Information</h6>
                  <form action="#">
                    {/* start row */}
                    <div className="row">
                      <div className="col-xl-6">
                        {/* start row */}
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">
                            First Name
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        {/* end row */}
                        {/* start row */}
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">
                            Last Name
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        {/* end row */}
                        {/* start row */}
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">Gender</label>
                          <div className="col-lg-9">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="gender_male"
                                defaultValue="option1"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="gender_male"
                              >
                                Male
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="gender_female"
                                defaultValue="option2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="gender_female"
                              >
                                Female
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* end row */}
                        {/* start row */}
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">
                            Blood Group
                          </label>
                          <div className="col-lg-9">
                            <select className="form-select">
                              <option>Select</option>
                              <option value={1}>A+</option>
                              <option value={2}>O+</option>
                              <option value={3}>B+</option>
                              <option value={4}>AB+</option>
                            </select>
                          </div>
                        </div>
                        {/* end row */}
                      </div>
                      {/* end col */}
                      <div className="col-xl-6">
                        {/* start row */}
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">
                            Username
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        {/* end row */}
                        {/* start row */}
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">Email</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        {/* end row */}
                        {/* start row */}
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">
                            Password
                          </label>
                          <div className="col-lg-9">
                            <input type="password" className="form-control" />
                          </div>
                        </div>
                        {/* end row */}
                        {/* start row */}
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">
                            Repeat Password
                          </label>
                          <div className="col-lg-9">
                            <input type="password" className="form-control" />
                          </div>
                        </div>
                        {/* end row */}
                      </div>
                      {/* end col */}
                    </div>
                    {/* end row */}
                    <h6 className="fs-16 mb-3">Address</h6>
                    {/* start row */}
                    <div className="row">
                      <div className="col-xl-6">
                        {/* start row */}
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">
                            Address Line 1
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        {/* end row */}
                        {/* start row */}
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">
                            Address Line 2
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        {/* end row */}
                        {/* start row */}
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">State</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        {/* end row */}
                      </div>
                      {/* end col */}
                      <div className="col-xl-6">
                        {/* start row */}
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">City</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        {/* end row */}
                        {/* start row */}
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">Country</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        {/* end row */}
                        {/* start row */}
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">
                            Postal Code
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        {/* end row */}
                      </div>
                      {/* end col */}
                    </div>
                    {/* end row */}
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Two Column Horizontal Form 2</h5>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="row">
                      <div className="col-xl-6">
                        <h6 className="fs-16 mb-3">Personal Information</h6>
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">
                            First Name
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">
                            Last Name
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">
                            Password
                          </label>
                          <div className="col-lg-9">
                            <input type="password" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">State</label>
                          <div className="col-lg-9">
                            <select className="form-select">
                              <option>Select State</option>
                              <option value={1}>California</option>
                              <option value={2}>Texas</option>
                              <option value={3}>Florida</option>
                            </select>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">About</label>
                          <div className="col-lg-9">
                            <textarea
                              rows={4}
                              cols={5}
                              className="form-control"
                              placeholder="Enter message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <h6 className="fs-16 mb-3">Personal Details</h6>
                        <div className="row">
                          <label className="col-lg-3 form-label">Name</label>
                          <div className="col-lg-9">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    placeholder="First Name"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">Email</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">Phone</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 form-label">Address</label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                            <div className="row mt-4">
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <select className="form-select">
                                    <option>Select Country</option>
                                    <option value={1}>USA</option>
                                    <option value={2}>France</option>
                                    <option value={3}>India</option>
                                    <option value={4}>Spain</option>
                                  </select>
                                </div>
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    placeholder="ZIP code"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    placeholder="State/Province"
                                    className="form-control"
                                  />
                                </div>
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    placeholder="City"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Horizontal form With Icons</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row mb-3">
                      <label
                        htmlFor="inputEmail1"
                        className="col-sm-2 form-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail1"
                          />
                          <div className="input-group-text">
                            <i className="ti ti-mail" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="inputPassword1"
                        className="col-sm-2 form-label"
                      >
                        Password
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group">
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword1"
                          />
                          <div className="input-group-text">
                            <i className="ti ti-lock" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Sign in
                    </button>
                  </form>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Horizontal form label sizing</h5>
                </div>
                <div className="card-body">
                  <div className="row mb-3">
                    <label
                      htmlFor="colFormLabelSm"
                      className="col-sm-2 form-label form-label-sm"
                    >
                      Email
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        id="colFormLabelSm"
                        placeholder="col-form-label-sm"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="colFormLabel"
                      className="col-sm-2 form-label"
                    >
                      Email
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control"
                        id="colFormLabel"
                        placeholder="col-form-label"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label
                      htmlFor="colFormLabelLg"
                      className="col-sm-2 form-label form-label-lg"
                    >
                      Email
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="colFormLabelLg"
                        placeholder="col-form-label-lg"
                      />
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
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Auto Sizing</h5>
                </div>
                <div className="card-body">
                  <form className="row gy-2 gx-3 align-items-center mb-3">
                    <div className="col-auto">
                      <label
                        className="visually-hidden"
                        htmlFor="autoSizingInput"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="autoSizingInput"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="col-auto">
                      <label
                        className="visually-hidden"
                        htmlFor="autoSizingInputGroup"
                      >
                        Username
                      </label>
                      <div className="input-group">
                        <div className="input-group-text">@</div>
                        <input
                          type="text"
                          className="form-control"
                          id="autoSizingInputGroup"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div className="col-auto">
                      <label
                        className="visually-hidden"
                        htmlFor="autoSizingSelect"
                      >
                        Preference
                      </label>
                      <select className="form-select" id="autoSizingSelect">
                        <option selected>Choose...</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="col-auto">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="autoSizingCheck"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="autoSizingCheck"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                  <span className="fw-semibold mb-1 text-muted">
                    You can then remix that once again with size-specific column
                    classes.
                  </span>
                  <form className="row gx-3 gy-2 align-items-center mt-0">
                    <div className="col-sm-3">
                      <label
                        className="visually-hidden"
                        htmlFor="specificSizeInputName"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="specificSizeInputName"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="col-sm-3">
                      <label
                        className="visually-hidden"
                        htmlFor="specificSizeInputGroupUsername"
                      >
                        Username
                      </label>
                      <div className="input-group">
                        <div className="input-group-text">@</div>
                        <input
                          type="text"
                          className="form-control"
                          id="specificSizeInputGroupUsername"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <label
                        className="visually-hidden"
                        htmlFor="specificSizeSelect"
                      >
                        Preference
                      </label>
                      <select className="form-select" id="specificSizeSelect">
                        <option selected>Choose...</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="col-auto">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="autoSizingCheck2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="autoSizingCheck2"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
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

export default FormHorizontal;
