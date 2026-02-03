import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router";
import { Session } from "../selectOption";
import { useState } from "react";

type RowType = {
  id: number;
  session: string;
  from: Dayjs | null;
  to: Dayjs | null;
};

const createRow = (row?: RowType): RowType => ({
  id: Date.now() + Math.random(),
  session: row ? row.session : Session[0]?.value || "",
  from: row ? row.from : dayjs("00:00:00", "HH:mm:ss"),
  to: row ? row.to : dayjs("00:00:00", "HH:mm:ss"),
});

const RewardsForms = () => {
  const [rows, setRows] = useState<RowType[]>([createRow()]);

  const handleAddRow = (row: RowType) => {
    const idx = rows.findIndex((r) => r.id === row.id);
    const newRows = [...rows];
    newRows.splice(idx + 1, 0, createRow(row));
    setRows(newRows);
  };

  const handleDeleteRow = (id: number) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };

  return (
    <div>
      {rows.map((row) => (
        <div className="row align-items-end" key={row.id}>
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label className="form-label">From</label>
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
              </div>
            </div>
          </div>
          <div className="col-lg-1">
            <div className="mb-3 d-flex">
              <Link
                to="#"
                onClick={() => handleAddRow(row)}
                className="add-schedule-btn p-2 bg-light btn-icon text-dark rounded d-flex align-items-center justify-content-center"
                style={{ marginRight: 8 }}
              >
                <i className="ti ti-plus fs-16" />
              </Link>
              {rows.length > 1 && (
                <Link
                  to="#"
                  onClick={() => handleDeleteRow(row.id)}
                  className="remove-schedule-btn p-2 bg-soft-danger btn-icon text-danger rounded d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-trash fs-16" />
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RewardsForms;
