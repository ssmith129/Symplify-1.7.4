import  { useState } from "react";
import { Link } from "react-router";
import ImageWithBasePath from "../../../../../core/imageWithBasePath";
import { DatePicker } from "antd";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const ExpensesModal = () => {
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };

  const [sliderValueDefault, setSliderValueDefault] = useState(0);

  const handleChangeDefault = (value: any) => {
    setSliderValueDefault(value);
  };

  return (
    <>
      {/* Start Add Expense */}
      <div className="modal fade" id="add_new_expense">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark fw-bold">New Expense</h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ><i className="ti ti-x"></i></button>
            </div>
            <div className="modal-body">
              {/* start row */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Expense Name<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Category<span className="text-danger">*</span>
                    </label>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                        <li>
                          <div className="mb-2">
                            <input
                              type="text"
                              className="form-control form-control"
                              placeholder="Search"
                            />
                          </div>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Medical Supplies
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Options Enhanced
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Cleaning Services
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Medical Equipment Maintenance
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Staff Salaries &amp; Wages
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Utilities
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Software &amp; Licensing
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Facility Rent
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Waste Disposal Services
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Insurance Premiums
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Amount<span className="text-danger">*</span>
                    </label>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select
                      </Link>
                      <div className="dropdown-menu shadow-lg w-100 dropdown-info p-2">
                        <div className="filter-range">
                          <Slider
                            min={0}
                            max={100}
                            value={sliderValueDefault}
                            defaultValue={[0, 50]}
                            onChange={handleChangeDefault}
                          />
                          {sliderValueDefault}
                          <p className="mt-2 fs-13">
                            Range :{" "}
                            <span className="text-dark">$200 - $5695</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Date<span className="text-danger">*</span>
                    </label>
                    <div className="input-group position-relative">
                      <DatePicker
                        className="form-control datetimepicker"
                        format={{
                          format: "DD-MM-YYYY",
                          type: "mask",
                        }}
                        getPopupContainer={getModalContainer}
                        placeholder="DD-MM-YYYY"
                        suffixIcon={null}
                      />
                      <span className="input-icon-addon">
                        <i className="ti ti-calendar text-body" />
                      </span>
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Purchased By<span className="text-danger">*</span>
                    </label>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select
                      </Link>
                      <div className="dropdown-menu shadow-lg w-100 dropdown-info">
                        <div className="mb-3">
                          <div className="input-icon-start position-relative">
                            <span className="input-icon-addon fs-12">
                              <i className="ti ti-search" />
                            </span>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              placeholder="Search"
                            />
                          </div>
                        </div>
                        <ul className="mb-0 list-style-none">
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-sm rounded-circle me-2">
                                <ImageWithBasePath
                                  src="assets/img/users/user-01.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              James Allaire
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-sm rounded-circle me-2">
                                <ImageWithBasePath
                                  src="assets/img/users/user-02.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Esther Schmidt
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-sm rounded-circle me-2">
                                <ImageWithBasePath
                                  src="assets/img/users/user-03.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Judi Lenahan
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-sm rounded-circle me-2">
                                <ImageWithBasePath
                                  src="assets/img/users/user-04.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Robert Reid
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-sm rounded-circle me-2">
                                <ImageWithBasePath
                                  src="assets/img/doctors/doctor-01.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Dottie Sellers
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-sm rounded-circle me-2">
                                <ImageWithBasePath
                                  src="assets/img/doctors/doctor-02.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Cheryl Bilodeau
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-sm rounded-circle me-2">
                                <ImageWithBasePath
                                  src="assets/img/doctors/doctor-03.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Diane Nash
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-sm rounded-circle me-2">
                                <ImageWithBasePath
                                  src="assets/img/doctors/doctor-04.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Sally Cavazos
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-sm rounded-circle me-2">
                                <ImageWithBasePath
                                  src="assets/img/users/user-06.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Forest Heath
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Payment Method<span className="text-danger">*</span>
                    </label>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                        <li>
                          <div className="mb-2">
                            <input
                              type="text"
                              className="form-control form-control"
                              placeholder="Search"
                            />
                          </div>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            PayPal
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Options Enhanced
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Cheque
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Status<span className="text-danger">*</span>
                    </label>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                        <li>
                          <div className="mb-2">
                            <input
                              type="text"
                              className="form-control form-control"
                              placeholder="Search"
                            />
                          </div>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Approved
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Options Enhanced
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Pending
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            New
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
              </div>
              {/* end row */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light btn-sm me-2 fs-13 fw-medium"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary btn-sm fs-13 fw-medium"
              >
                Add New Expense
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Add Expense  */}
      {/* Start Edit Expense */}
      <div className="modal fade" id="edit_new_expense">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark fw-bold">Edit Expense</h5>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ><i className="ti ti-x"></i></button>
            </div>
            <div className="modal-body">
              {/* start row */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Expense Name<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Gloves & Masks"
                      />
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Category<span className="text-danger">*</span>
                    </label>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Medical Supplies
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                        <li>
                          <div className="mb-2">
                            <input
                              type="text"
                              className="form-control form-control"
                              placeholder="Search"
                            />
                          </div>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Medical Supplies
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Options Enhanced
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Cleaning Services
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Medical Equipment Maintenance
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Staff Salaries &amp; Wages
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Utilities
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Software &amp; Licensing
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Facility Rent
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Waste Disposal Services
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Insurance Premiums
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Amount<span className="text-danger">*</span>
                    </label>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        $500
                      </Link>
                      <div className="dropdown-menu shadow-lg w-100 dropdown-info p-2">
                        <div className="filter-range">
                          <Slider
                            min={0}
                            max={100}
                            value={sliderValueDefault}
                            defaultValue={[0, 50]}
                            onChange={handleChangeDefault}
                          />
                          {sliderValueDefault}
                          <p className="mt-2 fs-13">
                            Range :{" "}
                            <span className="text-dark">$200 - $5695</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Date<span className="text-danger">*</span>
                    </label>
                    <div className="input-group position-relative">
                      <DatePicker
                        className="form-control datetimepicker"
                        format={{
                          format: "DD-MM-YYYY",
                          type: "mask",
                        }}
                        getPopupContainer={getModalContainer}
                        placeholder="30/April/2025"
                        suffixIcon={null}
                      />
                      <span className="input-icon-addon">
                        <i className="ti ti-calendar text-body" />
                      </span>
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Purchased By<span className="text-danger">*</span>
                    </label>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        James Allaire
                      </Link>
                      <div className="dropdown-menu shadow-lg w-100 dropdown-info">
                        <div className="mb-3">
                          <div className="input-icon-start position-relative">
                            <span className="input-icon-addon fs-12">
                              <i className="ti ti-search" />
                            </span>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              placeholder="Search"
                            />
                          </div>
                        </div>
                        <ul className="mb-0 list-style-none">
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-sm rounded-circle me-2">
                                <ImageWithBasePath
                                  src="assets/img/users/user-01.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              James Allaire
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-sm rounded-circle me-2">
                                <ImageWithBasePath
                                  src="assets/img/users/user-02.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Esther Schmidt
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-sm rounded-circle me-2">
                                <ImageWithBasePath
                                  src="assets/img/users/user-03.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Judi Lenahan
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-sm rounded-circle me-2">
                                <ImageWithBasePath
                                  src="assets/img/users/user-04.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Robert Reid
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-sm rounded-circle me-2">
                                <ImageWithBasePath
                                  src="assets/img/doctors/doctor-01.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Dottie Sellers
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-sm rounded-circle me-2">
                                <ImageWithBasePath
                                  src="assets/img/doctors/doctor-02.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Cheryl Bilodeau
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-sm rounded-circle me-2">
                                <ImageWithBasePath
                                  src="assets/img/doctors/doctor-03.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Diane Nash
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-sm rounded-circle me-2">
                                <ImageWithBasePath
                                  src="assets/img/doctors/doctor-04.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Sally Cavazos
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center text-dark">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              <span className="avatar avatar-sm rounded-circle me-2">
                                <ImageWithBasePath
                                  src="assets/img/users/user-06.jpg"
                                  className="flex-shrink-0 rounded-circle"
                                  alt="img"
                                />
                              </span>
                              Forest Heath
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Payment Method<span className="text-danger">*</span>
                    </label>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        PayPal
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                        <li>
                          <div className="mb-2">
                            <input
                              type="text"
                              className="form-control form-control"
                              placeholder="Search"
                            />
                          </div>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            PayPal
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Options Enhanced
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Cheque
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label className="form-label mb-1 text-dark fs-14 fw-medium">
                      Status<span className="text-danger">*</span>
                    </label>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Approved
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                        <li>
                          <div className="mb-2">
                            <input
                              type="text"
                              className="form-control form-control"
                              placeholder="Search"
                            />
                          </div>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            Approved
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Options Enhanced
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            Pending
                          </label>
                        </li>
                        <li>
                          <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                            />
                            New
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
              </div>
              {/* end row */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light btn-sm me-2 fs-13 fw-medium"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary btn-sm fs-13 fw-medium"
              >
                Add New Expense
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Edit Expense  */}
      {/* Start Delete Modal  */}
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center position-relative">
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-01.png"
                alt=""
                className="img-fluid position-absolute top-0 start-0 z-0"
              />
              <ImageWithBasePath
                src="assets/img/bg/delete-modal-bg-02.png"
                alt=""
                className="img-fluid position-absolute bottom-0 end-0 z-0"
              />
              <div className="mb-3 position-relative z-1">
                <span className="avatar avatar-lg bg-danger text-white">
                  <i className="ti ti-trash fs-24" />
                </span>
              </div>
              <h5 className="fw-bold mb-1 position-relative z-1">
                Delete Confirmation
              </h5>
              <p className="mb-3 position-relative z-1">
                Are you sure want to delete?
              </p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light position-relative z-1 me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link
                  to=""
                  className="btn btn-danger position-relative z-1"
                  data-bs-dismiss="modal"
                >
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Delete Modal  */}
    </>
  );
};

export default ExpensesModal;
