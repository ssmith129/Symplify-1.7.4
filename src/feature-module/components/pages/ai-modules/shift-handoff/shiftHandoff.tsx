import React from 'react';
import { ShiftHandoffSummary } from '../../../ai/shift-handoff';

const ShiftHandoff: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Breadcrumb only — the card header provides the shift-specific title */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="page-sub-header">
                <ul className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="/dashboard">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Shift Handoff</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Shift Handoff Content */}
        <div className="row">
          <div className="col-12">
            <ShiftHandoffSummary 
              outgoingNurseId="nurse-001"
              incomingNurseId="nurse-002"
              shiftType="day"
              unitId="unit-3b"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShiftHandoff;
