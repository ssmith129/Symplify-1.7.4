import React from 'react';
import { ShiftHandoffSummary } from '../../../../ai/shift-handoff';
import PageHeader from '../../../../../core/common/page-header/PageHeader';

const ShiftHandoff: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <PageHeader title="Shift Handoff" />

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
