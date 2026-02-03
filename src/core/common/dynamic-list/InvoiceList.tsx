import React, { useState } from "react";
import { Link } from "react-router-dom";
import CommonSelect from "../common-select/commonSelect";
import { Payment_Mode, Service } from "../selectOption";

const InvoiceList: React.FC = () => {
  const [invoiceItems, setInvoiceItems] = useState([
    { id: Date.now(), service: "", amount: "" },
  ]);

  const handleAddInvoice = () => {
    const newItem = { id: Date.now() + Math.random(), service: "", amount: "" };
    const last = invoiceItems[invoiceItems.length - 1];
    setInvoiceItems([...invoiceItems.slice(0, -1), newItem, last]);
  };

  const handleRemoveInvoice = (id: number) => {
    setInvoiceItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleChangeInvoice = (
    id: number,
    field: "service" | "amount",
    value: string
  ) => {
    setInvoiceItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <div className="Invoice-list">
      {invoiceItems.map((item, index) => {
        const isLast = index === invoiceItems.length - 1;

        return (
          <div className="row invoice-list-item" key={item.id}>
            <div className="col-lg-8">
              <div className="mb-3">
                {index === 0 && (
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Service
                  </label>
                )}
                <CommonSelect
                  options={Service}
                  className="select"
                  defaultValue={Service[0]}
                 
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                {index === 0 && (
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Amount
                  </label>
                )}
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control rounded"
                    value={item.amount}
                    onChange={(e) =>
                      handleChangeInvoice(item.id, "amount", e.target.value)
                    }
                  />
                  {!isLast ? (
                    <Link
                      to="#"
                      className="remove-invoice ms-3 p-2 bg-light text-danger rounded d-flex align-items-center justify-content-center"
                      onClick={(e) => {
                        e.preventDefault();
                        handleRemoveInvoice(item.id);
                      }}
                    >
                      <i className="ti ti-trash fs-16" />
                    </Link>
                  ) : (
                    <Link
                      to="#"
                      className="add-invoice ms-3 p-2 bg-light text-dark rounded d-flex align-items-center justify-content-center"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddInvoice();
                      }}
                    >
                      <i className="ti ti-plus fs-16" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Total Summary Section */}
      <div className="row pt-3 border-1 border-top">
        <div className="col-lg-8" />
        <div className="col-lg-4">
          <div className="amount mb-3 pb-3 border-1 border-bottom">
            <h6 className="fs-14 fw-semibold d-flex align-items-center justify-content-between mb-2">
              Amount<span className="fw-normal">$0.00</span>
            </h6>
            <h6 className="fs-14 fw-semibold d-flex align-items-center justify-content-between mb-2">
              Tax (0%)<span className="fw-normal">$0.00</span>
            </h6>
            <h6 className="fs-14 fw-semibold d-flex align-items-center justify-content-between mb-2">
              Discount (0%)<span className="fw-normal">$0.00</span>
            </h6>
          </div>
          <div className="total mb-4">
            <h6 className="fs-16 fw-bold d-flex align-items-center justify-content-between">
              Total : <span>$0.00</span>
            </h6>
          </div>
          <div className="">
            <label className="form-label mb-1 text-dark fs-14 fw-medium">
              Payment Mode
            </label>
            <CommonSelect
              options={Payment_Mode}
              className="select"
              defaultValue={Payment_Mode[0]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceList;
