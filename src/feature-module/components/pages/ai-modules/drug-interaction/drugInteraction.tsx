import React from 'react';
import DrugInteractionChecker from '../../../ai/drug-interaction/DrugInteractionChecker';
import MedicationReviewPanel from '../../../ai/drug-interaction/MedicationReviewPanel';

const DrugInteraction: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="page-sub-header">
                <h3 className="page-title">Drug Interaction Checker</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/dashboard">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Drug Interaction Checker</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Drug Interaction Content */}
        <div className="row">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <DrugInteractionChecker
                  patientId="PT-00421"
                  onInteractionsFound={(interactions) =>
                    console.log('Interactions found:', interactions)
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <MedicationReviewPanel
                  patientId="PT-00421"
                  reviews={[
                    {
                      medicationId: 'med-1',
                      medicationName: 'Warfarin 5mg',
                      status: 'warning',
                      interactions: 2,
                    },
                    {
                      medicationId: 'med-2',
                      medicationName: 'Lisinopril 10mg',
                      status: 'safe',
                      interactions: 0,
                    },
                    {
                      medicationId: 'med-3',
                      medicationName: 'Metformin 500mg',
                      status: 'critical',
                      interactions: 1,
                    },
                    {
                      medicationId: 'med-4',
                      medicationName: 'Aspirin 81mg',
                      status: 'warning',
                      interactions: 1,
                    },
                  ]}
                  onRefresh={() => console.log('Refreshing reviews...')}
                  onMedicationSelect={(id) =>
                    console.log('Selected medication:', id)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugInteraction;
