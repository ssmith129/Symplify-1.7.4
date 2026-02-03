
import { Link } from "react-router";

const FormInputGroups = () => {
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
              <h4 className="fs-18 fw-semibold mb-0">Input Groups</h4>
            </div>
            <div className="text-end">
              <ol className="breadcrumb m-0 py-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Form</Link>
                </li>
                <li className="breadcrumb-item active">Input Groups</li>
              </ol>
            </div>
          </div>
          {/* End Page Header */}
          {/* start row */}
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Basic Examples</h5>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="mb-3 row">
                      <label className="form-label col-lg-2">Group Left</label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon1">
                            @
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="form-label col-lg-2">Group Right</label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                          <span className="input-group-text" id="basic-addon2">
                            @example.com
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="form-label col-lg-2">URL Example</label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon3">
                            https://example.com/users/
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="basic-url"
                            aria-describedby="basic-addon3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="form-label col-lg-2">
                        Group with Price
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">$</span>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Amount (to the nearest dollar)"
                          />
                          <span className="input-group-text">.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 row mb-0">
                      <label className="form-label col-lg-2">
                        Group with Price (Left)
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group mb-3">
                          <span className="input-group-text">$</span>
                          <span className="input-group-text">0.00</span>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="input-group">
                          <span className="input-group-text">$</span>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Amount (to the nearest dollar)"
                          />
                          <span className="input-group-text">.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <label className="form-label col-lg-2">
                        With textarea
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">
                            With textarea
                          </span>
                          <textarea
                            className="form-control"
                            aria-label="With textarea"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Sizing</h5>
                </div>
                <div className="card-body pb-1">
                  <form action="#">
                    <div className="mb-3 row">
                      <label className="form-label col-lg-2">
                        Input Group Large
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group input-group-lg">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-lg"
                          >
                            Large
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="form-label col-lg-2">
                        Input Group Default
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                          >
                            Default
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="form-label col-lg-2">
                        Input Group Small
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group input-group-sm">
                          <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                          >
                            Small
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Checkbox and Radio Addons</h5>
                </div>
                <div className="card-body pb-1">
                  <form action="#">
                    <div className="mb-3 row">
                      <label className="form-label col-lg-2">Checkbox</label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <div className="input-group-text">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              
                              aria-label="Checkbox for following text input"
                            />
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Text input with checkbox"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label className="form-label col-lg-2">Radio</label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <div className="input-group-text">
                            <input
                              className="form-check-input"
                              type="radio"
                              
                              aria-label="Radio button for following text input"
                            />
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Text input with radio button"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Multiple Addons</h5>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="mb-3 row">
                      <label className="form-label col-lg-2">
                        Radio and Text Addons
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">
                            <input type="checkbox" />
                          </span>
                          <span className="input-group-text">$</span>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 row ">
                      <label className="form-label col-lg-2">
                        Two Addons Left
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <span className="input-group-text">$</span>
                          <span className="input-group-text">0.00</span>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <label className="form-label col-lg-2">
                        Two Addons Right
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <input type="text" className="form-control" />
                          <span className="input-group-text">$</span>
                          <span className="input-group-text">0.00</span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Button addons</h5>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="input-group mb-3">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon1"
                      >
                        Button
                      </button>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                      >
                        Button
                      </button>
                    </div>
                    <div className="input-group mb-3">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        Button
                      </button>
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        Button
                      </button>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        aria-label="Example text with two button addons"
                      />
                    </div>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Recipient's username"
                        aria-label="Recipient's username with two button addons"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        Button
                      </button>
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        Button
                      </button>
                    </div>
                  </form>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Buttons with dropdowns</h5>
                </div>
                <div className="card-body pb-1">
                  <form action="#">
                    <div className="mb-3 row">
                      <label className="form-label col-lg-2">
                        Left Dropdown Text Addons
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <button
                            className="btn btn-primary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Dropdown
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <Link
                                className="dropdown-item"
                                to="#"
                              >
                                Action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="#"
                              >
                                Another action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="#"
                              >
                                Something else here
                              </Link>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="#"
                              >
                                Separated link
                              </Link>
                            </li>
                          </ul>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Text input with dropdown button"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 row mb-0">
                      <label className="form-label col-lg-2">
                        Right Dropdown Text Addons
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Text input with dropdown button"
                          />
                          <button
                            className="btn btn-outline-primary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Dropdown
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <Link
                                className="dropdown-item"
                                to="#"
                              >
                                Action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="#"
                              >
                                Another action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="#"
                              >
                                Something else here
                              </Link>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="#"
                              >
                                Separated link
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <label className="form-label col-lg-2">
                        Right Dropdown Text Addons
                      </label>
                      <div className="col-lg-10">
                        <div className="input-group mb-2">
                          <button
                            className="btn btn-soft-primary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Dropdown
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <Link
                                className="dropdown-item"
                                to="#"
                              >
                                Action before
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="#"
                              >
                                Another action before
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="#"
                              >
                                Something else here
                              </Link>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="#"
                              >
                                Separated link
                              </Link>
                            </li>
                          </ul>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Text input with 2 dropdown buttons"
                          />
                          <button
                            className="btn btn-soft-primary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Dropdown
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <Link
                                className="dropdown-item"
                                to="#"
                              >
                                Action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="#"
                              >
                                Another action
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="#"
                              >
                                Something else here
                              </Link>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="#"
                              >
                                Separated link
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Segmented Buttons</h5>
                </div>
                <div className="card-body">
                  <div className="input-group mb-3">
                    <button type="button" className="btn btn-outline-secondary">
                      Action
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Something else here
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Separated link
                        </Link>
                      </li>
                    </ul>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Text input with segmented dropdown button"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Text input with segmented dropdown button"
                    />
                    <button type="button" className="btn btn-outline-secondary">
                      Action
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Something else here
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Separated link
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Custom Select</h5>
                </div>
                <div className="card-body">
                  <div className="input-group mb-3">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect01"
                    >
                      Options
                    </label>
                    <select className="form-select" id="inputGroupSelect01">
                      <option selected>Choose...</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="input-group mb-3">
                    <select className="form-select" id="inputGroupSelect02">
                      <option selected>Choose...</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect02"
                    >
                      Options
                    </label>
                  </div>
                  <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button">
                      Button
                    </button>
                    <select
                      className="form-select"
                      id="inputGroupSelect03"
                      aria-label="Example select with button addon"
                    >
                      <option selected>Choose...</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <select
                      className="form-select"
                      id="inputGroupSelect04"
                      aria-label="Example select with button addon"
                    >
                      <option selected>Choose...</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                    <button className="btn btn-outline-secondary" type="button">
                      Button
                    </button>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Custom File Input</h5>
                </div>
                <div className="card-body">
                  <div className="input-group mb-3">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupFile01"
                    >
                      Upload
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile01"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile02"
                    />
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupFile02"
                    >
                      Upload
                    </label>
                  </div>
                  <div className="input-group mb-3">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="inputGroupFileAddon03"
                    >
                      Button
                    </button>
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile03"
                      aria-describedby="inputGroupFileAddon03"
                      aria-label="Upload"
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile04"
                      aria-describedby="inputGroupFileAddon04"
                      aria-label="Upload"
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      id="inputGroupFileAddon04"
                    >
                      Button
                    </button>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end card */}
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

export default FormInputGroups;
