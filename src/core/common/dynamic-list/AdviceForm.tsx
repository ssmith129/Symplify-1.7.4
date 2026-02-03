import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdviceForm: React.FC = () => {
  const [advices, setAdvices] = useState([{ id: Date.now(), text: "" }]);

  const handleAddAdvice = () => {
    const newAdvice = { id: Date.now() + Math.random(), text: "" };
    const last = advices[advices.length - 1];
    setAdvices([...advices.slice(0, -1), newAdvice, last]);
  };

  const handleRemoveAdvice = (id: number) => {
    setAdvices((prev) => prev.filter((item) => item.id !== id));
  };

  const handleChangeAdvice = (id: number, value: string) => {
    setAdvices((prev) =>
      prev.map((item) => (item.id === id ? { ...item, text: value } : item))
    );
  };

  return (
    <>
      {advices.map((advice, index) => {
        const isLast = index === advices.length - 1;
        return (
          <div className="mb-3 advices-list-item" key={advice.id}>
            {index === 0 && (
              <label className="form-label mb-1 text-dark fs-14 fw-medium">
                Advice
              </label>
            )}
            <div className="input-group">
              <input
                type="text"
                className="form-control rounded"
                value={advice.text}
                onChange={(e) => handleChangeAdvice(advice.id, e.target.value)}
              />
              {!isLast && (
                <Link
                  to="#"
                  className="remove-advices ms-3 p-2 bg-light text-danger rounded d-flex align-items-center justify-content-center"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRemoveAdvice(advice.id);
                  }}
                >
                  <i className="ti ti-trash fs-16" />
                </Link>
              )}
              {isLast && (
                <Link
                  to="#"
                  className="add-advices ms-3 p-2 bg-light text-dark rounded d-flex align-items-center justify-content-center"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddAdvice();
                  }}
                >
                  <i className="ti ti-plus fs-16" />
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default AdviceForm;
