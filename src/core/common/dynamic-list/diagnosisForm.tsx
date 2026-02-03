import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Diagnosis_Type } from "../selectOption";
import CommonSelect from "../common-select/commonSelect";

interface DiagnosisItem {
  id: number;
  complaintText: string;
}

const DiagnosisForm: React.FC = () => {
  const [diagnoses, setDiagnoses] = useState<DiagnosisItem[]>([
    {
      id: Date.now(),
      complaintText: "",
    },
  ]);

  const handleAddAboveLast = () => {
    const newDiagnosis: DiagnosisItem = {
      id: Date.now() + Math.random(),
      complaintText: "",
    };

    setDiagnoses((prev) => {
      const last = prev[prev.length - 1];
      return [...prev.slice(0, -1), newDiagnosis, last];
    });
  };

  const handleRemove = (id: number) => {
    setDiagnoses((prev) => prev.filter((item) => item.id !== id));
  };

  const handleComplaintTextChange = (id: number, value: string) => {
    setDiagnoses((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, complaintText: value } : item
      )
    );
  };

  return (
    <div className="diagnosis-list">
      {diagnoses.map((item, index) => {
        const isLast = index === diagnoses.length - 1;

        return (
          <div className="row diagnosis-list-item" key={item.id}>
            <div className="col-lg-6">
              <div className="mb-3">
                {index === 0 && (
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Diagnosis Type
                  </label>
                )}
                {/* YOUR CommonSelect usage UNCHANGED */}
                <CommonSelect
                  options={Diagnosis_Type}
                  className="select"
                  defaultValue={Diagnosis_Type[0]}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                {index === 0 && (
                  <label className="form-label mb-1 text-dark fs-14 fw-medium">
                    Complaint History
                  </label>
                )}
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control rounded"
                    value={item.complaintText}
                    onChange={(e) =>
                      handleComplaintTextChange(item.id, e.target.value)
                    }
                  />
                  {!isLast && (
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleRemove(item.id);
                      }}
                      className="remove-diagnosis ms-3 p-2 bg-light text-danger rounded d-flex align-items-center justify-content-center"
                    >
                      <i className="ti ti-trash fs-16" />
                    </Link>
                  )}
                  {isLast && (
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddAboveLast();
                      }}
                      className="add-diagnosis ms-3 p-2 bg-light text-dark rounded d-flex align-items-center justify-content-center"
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
    </div>
  );
};

export default DiagnosisForm;
