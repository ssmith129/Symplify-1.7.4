import { Link } from "react-router";
import { DatePicker, Select } from "antd";
import {
  Amount,
  Department,
  Designation,
  Doctor,
  Status,
} from "../selectOption";

const FilterIndex = () => {
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
  return (
    <>
      <form action="#">
        <div className="filter-body pb-0">
          <div className="mb-3">
            <div className="d-flex align-items-center justify-content-between">
              <label className="form-label mb-1">Doctor</label>
              <Link to="#" className="link-primary mb-1">
                Reset
              </Link>
            </div>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              defaultValue={[]}
              options={Doctor}
            />
          </div>
          <div className="mb-3">
            <div className="d-flex align-items-center justify-content-between">
              <label className="form-label">Designation</label>
              <Link to="#" className="link-primary mb-1">
                Reset
              </Link>
            </div>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              defaultValue={[]}
              options={Designation}
            />
          </div>
          <div className="mb-3">
            <div className="d-flex align-items-center justify-content-between">
              <label className="form-label">Department</label>
              <Link to="#" className="link-primary mb-1">
                Reset
              </Link>
            </div>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              defaultValue={[]}
              options={Department}
            />
          </div>
          <div className="mb-3">
            <label className="form-label mb-1 text-dark fs-14 fw-medium">
              Date<span className="text-danger">*</span>
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
          <div className="mb-3">
            <div className="d-flex align-items-center justify-content-between">
              <label className="form-label">Amount</label>
              <Link to="#" className="link-primary mb-1">
                Reset
              </Link>
            </div>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              defaultValue={[]}
              options={Amount}
            />
          </div>
          <div className="mb-3">
            <div className="d-flex align-items-center justify-content-between">
              <label className="form-label">Status</label>
              <Link to="#" className="link-primary mb-1">
                Reset
              </Link>
            </div>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
              defaultValue={[]}
              options={Status}
            />
          </div>
        </div>
        <div className="filter-footer d-flex align-items-center justify-content-end border-top">
          <Link
            to="#"
            className="btn btn-light btn-md me-2 fw-medium"
            id="close-filter"
          >
            Close
          </Link>
          <button type="submit" className="btn btn-primary btn-md fw-medium">
            Filter
          </button>
        </div>
      </form>
    </>
  );
};

export default FilterIndex;
