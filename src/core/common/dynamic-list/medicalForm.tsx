import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Medicine_Name, Frequency, Timing } from "../selectOption";
import CommonSelect from "../common-select/commonSelect";

interface MedicationItem {
  id: number;
  dosageMg: string;
  dosageM: string;
  instruction: string;
}

const MedicalForm: React.FC = () => {
  const [medications, setMedications] = useState<MedicationItem[]>([
    {
      id: Date.now(),
      dosageMg: "",
      dosageM: "",
      instruction: "",
    },
  ]);

  // Add a new medication row above last
  const handleAddAboveLast = () => {
    const newMedication: MedicationItem = {
      id: Date.now() + Math.random(),
      dosageMg: "",
      dosageM: "",
      instruction: "",
    };

    setMedications((prev) => {
      const last = prev[prev.length - 1];
      return [...prev.slice(0, -1), newMedication, last];
    });
  };

  // Remove medication row by id
  const handleRemove = (id: number) => {
    setMedications((prev) => prev.filter((item) => item.id !== id));
  };

  // Handlers for controlled inputs
  const handleDosageMgChange = (id: number, value: string) => {
    setMedications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, dosageMg: value } : item))
    );
  };

  const handleDosageMChange = (id: number, value: string) => {
    setMedications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, dosageM: value } : item))
    );
  };

  const handleInstructionChange = (id: number, value: string) => {
    setMedications((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, instruction: value } : item
      )
    );
  };

  return (
    <div className="medication-list">
      {medications.map((item, index) => {
        const isLast = index === medications.length - 1;
        return (
          <div className="row medication-list-item" key={item.id}>
            <div className="col-lg-11">
              <div className="row">
                <div className="col-lg-2">
                  <div className="mb-3">
                    {/* Label only on first row */}
                    {index === 0 && (
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Medicine Name
                      </label>
                    )}
                    <CommonSelect
                      options={Medicine_Name}
                      className="select"
                      defaultValue={Medicine_Name[0]}
                    />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="mb-3">
                    {index === 0 && (
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Dosage
                      </label>
                    )}
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        value={item.dosageMg}
                        onChange={(e) =>
                          handleDosageMgChange(item.id, e.target.value)
                        }
                      />
                      <span className="input-group-text bg-transparent text-dark fs-14">
                        mg
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="mb-3">
                    {index === 0 && (
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Dosage
                      </label>
                    )}
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        value={item.dosageM}
                        onChange={(e) =>
                          handleDosageMChange(item.id, e.target.value)
                        }
                      />
                      <span className="input-group-text bg-transparent text-dark fs-14">
                        m
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="mb-3">
                    {index === 0 && (
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Frequency
                      </label>
                    )}
                    <CommonSelect
                      options={Frequency}
                      className="select"
                      defaultValue={Frequency[0]}
                    />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="mb-3">
                    {index === 0 && (
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Timing
                      </label>
                    )}
                    <CommonSelect
                      options={Timing}
                      className="select"
                      defaultValue={Timing[0]}
                    />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="mb-3">
                    {index === 0 && (
                      <label className="form-label mb-1 text-dark fs-14 fw-medium">
                        Instruction
                      </label>
                    )}
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        value={item.instruction}
                        onChange={(e) =>
                          handleInstructionChange(item.id, e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 px-xxl-3 d-flex align-items-center">
              {!isLast && (
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRemove(item.id);
                  }}
                  className="remove-medication ms-3 p-2 bg-light text-danger rounded d-flex align-items-center justify-content-center"
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
                  className="add-medication ms-3 p-2 mt-1 bg-light text-dark rounded d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-plus fs-16" />
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MedicalForm;
