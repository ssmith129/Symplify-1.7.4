import { Link } from "react-router";

const PrivacyPolicy = () => {
  return (
    <>
      {/* ========================
			Start Page Content
		========================= */}
      <div className="page-wrapper">
        {/* Start Content */}
        <div className="content">
          {/* Page Header */}
          <div className="pb-3 mb-3 border-bottom">
            <h4 className="fw-bold mb-0">Privacy Policy</h4>
          </div>
          {/* End Page Header */}
          <div className="card">
            <div className="card-body">
              <p>
                At Preclinic, we value your privacy and are committed to
                protecting your personal data. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when
                you access and use our Preclinic Platform, including features
                and content related to mental wellness, sleep patterns, dream
                journaling, and early-stage healthcare services.
              </p>
              <div className="mb-3">
                <h6 className="fw-bold mb-3">Information We Collect</h6>
                <p>
                  We may collect the following types of personal information:
                </p>
                <ul className="unorder-list">
                  <li className="list-item">
                    <p className="fw-medium">
                      <span className="text-dark">
                        Personal Identifiable Information :
                      </span>{" "}
                      Full name, Date of birth, Contact details (email address,
                      phone number), Date of birth, Gender.
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="fw-medium">
                      <span className="text-dark">
                        Health and Wellness Information :
                      </span>{" "}
                      Medical conditions (past and current), Allergies and
                      medications, Diagnostic results (lab tests, imaging
                      reports), Treatment records and progress notes.{" "}
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="fw-medium">
                      <span className="text-dark">Optional Information :</span>{" "}
                      Emergency contact details, Consent forms or communication
                      preferences.{" "}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mb-3">
                <h6 className="fw-bold mb-3">How We Use Your Information</h6>
                <p>We may use the information we collect to:</p>
                <ul className="unorder-list">
                  <li className="list-item">
                    <p>Register and manage your patient profile.</p>
                  </li>
                  <li className="list-item">
                    <p>Schedule and coordinate appointments.</p>
                  </li>
                  <li className="list-item">
                    <p>Communicate with you and your healthcare providers.</p>
                  </li>
                  <li className="list-item">
                    <p>
                      {" "}
                      Track and review medical history for accurate diagnosis.
                    </p>
                  </li>
                  <li className="list-item">
                    <p>Identify potential allergies, interactions, or risks</p>
                  </li>
                </ul>
              </div>
              <div className="mb-3">
                <h6 className="fw-bold mb-3">Sharing Your Information</h6>
                <p>
                  We will not sell or share your personal information with third
                  parties except:
                </p>
                <ul className="unorder-list">
                  <li className="list-item">
                    <p>
                      Doctors, nurses, specialists, and other licensed
                      professionals directly involved in your care.
                    </p>
                  </li>
                  <li className="list-item">
                    <p>
                      For consultation, diagnosis, treatment planning, and care
                      coordination.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mb-3">
                <h6 className="fw-bold mb-3">Data Security</h6>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal data from unauthorized access,
                  alteration, or disclosure. However, no method of transmission
                  over the internet is 100% secure, and we cannot guarantee
                  absolute security.
                </p>
              </div>
              <div className="mb-3">
                <h6 className="fw-bold mb-3">Data Retention</h6>
                <p>
                  We will retain your personal information for as long as
                  necessary to fulfill the purposes outlined in this policy, or
                  as required by law.
                </p>
              </div>
              <div className="mb-3">
                <h6 className="fw-bold mb-3">Your Rights</h6>
                <p>
                  You may have the following rights concerning your personal
                  data:
                </p>
                <ul className="unorder-list">
                  <li className="list-item">
                    <p>Right to Access Your Medical Records.</p>
                  </li>
                  <li className="list-item">
                    <p>
                      Ask for your information not to be shared with certain
                      people
                    </p>
                  </li>
                  <li className="list-item">
                    <p>The health care provider or insurance company.</p>
                  </li>
                  <li className="list-item">
                    <p>Communication to be reached at a specific place</p>
                  </li>
                </ul>
              </div>
              <div className="mb-0">
                <h6 className="fw-bold mb-3">Changes to This Policy</h6>
                <p className="mb-0">
                  We may update this policy from time to time. The latest
                  version will always be available on the platform. Continued
                  use of the Preclinic platform signifies your acceptance of any
                  updates.
                </p>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
        </div>
        {/* End Content */}
        {/* Footer Start */}
        <div className="footer text-center bg-white p-2 border-top">
          <p className="text-dark mb-0">
            2025 ©{" "}
            <Link to="#" className="link-primary">
              Preclinic
            </Link>
            , All Rights Reserved
          </p>
        </div>
        {/* Footer End */}
      </div>
      {/* ========================
			End Page Content
		========================= */}
    </>
  );
};

export default PrivacyPolicy;
