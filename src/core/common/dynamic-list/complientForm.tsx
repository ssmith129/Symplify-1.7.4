import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ComplaintItem {
  id: number;
  value: string;
}

const ComplaintForm: React.FC = () => {
  const [complaints, setComplaints] = useState<ComplaintItem[]>([
    { id: Date.now(), value: 'Headache in Leftside' },
  ]);

  const handleAddAboveLast = () => {
    const newComplaint: ComplaintItem = {
      id: Date.now() + Math.random(),
      value: '',
    };

    setComplaints((prev) => {
      const lastItem = prev[prev.length - 1];
      return [...prev.slice(0, -1), newComplaint, lastItem];
    });
  };

  const handleRemove = (id: number) => {
    setComplaints((prev) => prev.filter((item) => item.id !== id));
  };

  const handleChange = (id: number, value: string) => {
    setComplaints((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, value } : item
      )
    );
  };

  return (
    <div className="complaint-list">
      {complaints.map((complaint, index) => {
        const isLast = index === complaints.length - 1;

        return (
          <div className="mb-3 complaint-list-item" key={complaint.id}>
            {index === 0 && (
              <label className="form-label mb-1 text-dark fs-14 fw-medium">
                Complaint
              </label>
            )}
            <div className="input-group">
              <input
                type="text"
                className="form-control rounded"
                value={complaint.value}
                onChange={(e) =>
                  handleChange(complaint.id, e.target.value)
                }
              />

              {/* Trash button only if not the last item */}
              {!isLast && (
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleRemove(complaint.id);
                  }}
                  className="remove-complaint ms-3 p-2 bg-light text-danger rounded d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-trash fs-16" />
                </Link>
              )}

              {/* Plus button only for the last item */}
              {isLast && (
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddAboveLast();
                  }}
                  className="add-complaint ms-3 p-2 bg-light text-dark rounded d-flex align-items-center justify-content-center"
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

export default ComplaintForm;
