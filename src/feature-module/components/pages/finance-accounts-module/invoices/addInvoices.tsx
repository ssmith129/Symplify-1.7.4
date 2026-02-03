import { Link } from "react-router";
import { all_routes } from "../../../../routes/all_routes";
import { DatePicker } from "antd";
import CommonSelect from "../../../../../core/common/common-select/commonSelect";
import { Discount } from "../../../../../core/common/selectOption";
import { useState } from "react";

interface Invoice {
  id: number;
  field1: string;
  field2: string;
  quantity: number;
  price: number;
}

const AddInvoices = () => {
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };

  const [invoices, setInvoices] = useState<Invoice[]>([
    { id: Date.now(), field1: "", field2: "", quantity: 0, price: 0 },
  ]);

  const handleAddInvoice = () => {
    setInvoices([
      ...invoices,
      {
        id: Date.now(),
        field1: "",
        field2: "",
        quantity: 0,
        price: 0,
      },
    ]);
  };
  const handleRemoveInvoice = (id: number) => {
    if (invoices.length === 1) return; // Keep at least one
    setInvoices(invoices.filter((inv) => inv.id !== id));
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
          <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3">
            <div className="flex-grow-1">
              <h6 className="fw-bold mb-0 d-flex align-items-center">
                <Link to={all_routes.invoices} className="">
                  <i className="ti ti-chevron-left me-1 fs-14" />
                  Invoices
                </Link>
              </h6>
            </div>
          </div>
          {/* End Page Header */}
          <div className="card">
            <div className="card-header">
              <h5 className="fw-bold m-0"> New Invoice </h5>
            </div>{" "}
            {/* end card-header */}
            <div className="card-body">
              <form>
                {/* start row */}
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Patient Name <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Email <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Department <span className="text-danger">*</span>
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
                            <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              General Medicine
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Pediatrics
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Gynecology
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Cardiology
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Orthopedics
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Dermatology
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              ENT
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Neurology
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Psychiatry
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Pulmonology
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Tax <span className="text-danger">*</span>
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
                            <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              GST
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              VAT
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Professional
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Income
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              TDS
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Invoice Date <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-end position-relative">
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
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Due Date <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-end position-relative">
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
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Patient Address <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <textarea
                          className="form-control"
                          rows={4}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Billing Address <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <textarea
                          className="form-control"
                          rows={4}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Payment Method <span className="text-danger">*</span>
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
                              Cheque
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Payment Status <span className="text-danger">*</span>
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
                            <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Inporgress
                            </label>
                          </li>
                          <li>
                            <label className="dropdown-item px-2 d-flex align-items-center rounded-1">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                              />
                              Completed
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
                        </ul>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="col-lg-12 col-md-12">
                    <div className="mb-3">
                      <table className="table invoice-table border">
                        <thead>
                          <tr>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Unit Cost</th>
                            <th>Qty</th>
                            <th>Amount</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody className="invoices-list">
                          {invoices.map((invoice) => (
                            <tr key={invoice.id} className="invoices-list-item">
                              <td>
                                <input type="text" className="form-control" />
                              </td>
                              <td>
                                <input type="text" className="form-control" />
                              </td>
                              <td>
                                <input type="number" className="form-control" />
                              </td>
                              <td>
                                <input type="number" className="form-control" />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  className="form-control"
                                  readOnly
                                />
                              </td>
                              <td>
                                <button
                                  className="btn remove-invoices btn-sm border shadow-sm p-2 d-flex align-items-center justify-content-center rounded fs-14"
                                  onClick={() =>
                                    handleRemoveInvoice(invoice.id)
                                  }
                                >
                                  <i className="ti ti-trash" />
                                </button>
                              </td>
                            </tr>
                          ))}
                          <tr>
                            <td>
                              <Link
                                to="#"
                                onClick={handleAddInvoice}
                                className="btn add-invoices border-0 text-dark d-flex align-items-center fs-14"
                              >
                                <i className="ti ti-circle-plus text-primary me-1" />
                                Add Invoice
                              </Link>
                            </td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="col-lg-8 col-md-8" /> {/* end col */}
                  <div className="col-lg-4">
                    <div className="">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fs-14 fw-normal text-dark">Amount</h6>
                        <h6 className="fs-14 fw-semibold text-dark">$0</h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fs-14 fw-normal text-dark">Tax (0%)</h6>
                        <h6 className="fs-14 fw-semibold text-dark">$0</h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fs-14 fw-normal text-dark">Discount</h6>
                        <h6 className="fs-14 fw-semibold text-dark">
                          <CommonSelect
                            options={Discount}
                            className="select"
                            defaultValue={Discount[0]}
                          />
                        </h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                        <h6 className="fs-14 fw-normal text-dark d-flex align-items-center">
                          <label className="d-flex align-items-center form-switch ps-1">
                            <input
                              className="form-check-input m-0 me-2"
                              type="checkbox"
                              defaultChecked
                            />
                          </label>
                          Round Off Total
                        </h6>
                        <h6 className="fs-14 fw-semibold text-dark">$0</h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fs-18 fw-bold">Total (USD)</h6>
                        <h6 className="fs-18 fw-bold">$0</h6>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="col-lg-12 col-md-12">
                    <div className="mb-3">
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Other Information <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <textarea
                          rows={3}
                          className="form-control "
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                </div>
                {/* end row */}
              </form>
            </div>{" "}
            {/* end card-body */}
            <div className="card-footer">
              <div className="d-flex gap-2 align-items-center justify-content-end mb-0">
                <Link
                  to=""
                  className="btn btn-md bg-light text-dark fs-13 fw-medium rounded"
                >
                  {" "}
                  Cancel{" "}
                </Link>
                <Link
                  to=""
                  className="btn btn-md btn-primary fs-13 fw-medium rounded"
                  data-bs-toggle="modal"
                  data-bs-target="#cancel-reason"
                >
                  {" "}
                  Complete Appointment{" "}
                </Link>
              </div>
            </div>{" "}
            {/* end card-body */}
          </div>{" "}
          {/* end card */}
        </div>
        {/* End Content */}
        {/* Footer Start */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©{" "}
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

export default AddInvoices;
