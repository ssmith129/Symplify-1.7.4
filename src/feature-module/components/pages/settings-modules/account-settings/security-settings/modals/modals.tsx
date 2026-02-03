import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
type PasswordField = "password" | "confirmPassword" | "newpassword";

const Modals = () => {
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
    newpassword: false,
  });

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
const [phone, setPhone] = useState<string | undefined>()
  return (
    <>
      <div id="change_password" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fw-bold">Change Password</h4>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    Current Password<span className="text-danger ms-1">*</span>
                  </label>
                  <div className="pass-group input-group">
                    <span className="input-group-text border-end-0">
                      <i className="ti ti-lock" />
                    </span>
                    <input
                      type={passwordVisibility.password ? "text" : "password"}
                      className="pass-input form-control border-start-0 ps-0"
                      placeholder="****************"
                    />
                    <span
                      className={`ti toggle-password text-dark fs-14 ${
                        passwordVisibility.password ? "ti-eye" : "ti-eye-off"
                      }`}
                      onClick={() => togglePasswordVisibility("password")}
                    ></span>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    New Password<span className="text-danger ms-1">*</span>
                  </label>
                  <div className="pass-group input-group mb-3">
                    <span className="input-group-text border-end-0">
                      <i className="ti ti-lock" />
                    </span>
                    <input
                      type={
                        passwordVisibility.confirmPassword ? "text" : "password"
                      }
                      className="pass-input form-control border-start-0 ps-0"
                      placeholder="****************"
                    />
                    <span
                      className={`ti toggle-password text-dark fs-14 ${
                        passwordVisibility.confirmPassword
                          ? "ti-eye"
                          : "ti-eye-off"
                      }`}
                      onClick={() =>
                        togglePasswordVisibility("confirmPassword")
                      }
                    ></span>
                  </div>
                  <div
                    className="password-strength d-flex"
                    id="passwordStrength"
                  >
                    <span id="poor" />
                    <span id="weak" />
                    <span id="strong" />
                    <span id="heavy" />
                  </div>
                  <div id="passwordInfo" className="mb-2" />
                  <p className="text-gray-5">
                    Use 8 or more characters with a mix of letters, numbers
                    &amp; symbols.
                  </p>
                </div>
                <div>
                  <label className="form-label">
                    Confirm Password<span className="text-danger ms-1">*</span>
                  </label>
                  <div className="pass-group input-group">
                    <span className="input-group-text border-end-0">
                      <i className="ti ti-lock" />
                    </span>
                    <input
                      type={
                        passwordVisibility.newpassword ? "text" : "password"
                      }
                      className="pass-input form-control border-start-0 ps-0"
                      placeholder="****************"
                    />
                    <span
                      className={`ti toggle-password text-dark fs-14 ${
                        passwordVisibility.newpassword ? "ti-eye" : "ti-eye-off"
                      }`}
                      onClick={() => togglePasswordVisibility("newpassword")}
                    ></span>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center justify-content-between gap-1">
                <button
                  type="button"
                  className="btn btn-outline-white"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="phone_verification" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fw-bold">Change Phone Number</h4>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    Current Phone Number
                    <span className="text-danger ms-1">*</span>
                  </label>
                  <PhoneInput
                            defaultCountry="US"
                            value={phone}
                            onChange={setPhone}
                          />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    New Phone Number<span className="text-danger ms-1">*</span>
                  </label>
                   <PhoneInput
                            defaultCountry="US"
                            value={phone}
                            onChange={setPhone}
                          />
                  <p className="mt-2 d-inline-flex align-items-center">
                    <i className="ti ti-info-circle me-1" />
                    New phone number only updated once you verified
                  </p>
                </div>
                <div>
                  <label className="form-label">
                    Current Password<span className="text-danger ms-1">*</span>
                  </label>
                  <div className="pass-group input-group">
                    <span className="input-group-text border-end-0">
                      <i className="ti ti-lock" />
                    </span>
                     <input
                      type={
                        passwordVisibility.confirmPassword ? "text" : "password"
                      }
                      className="pass-input form-control border-start-0 ps-0"
                      placeholder="****************"
                    />
                    <span
                      className={`ti toggle-password text-dark fs-14 ${
                        passwordVisibility.confirmPassword
                          ? "ti-eye"
                          : "ti-eye-off"
                      }`}
                      onClick={() =>
                        togglePasswordVisibility("confirmPassword")
                      }
                    ></span>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center justify-content-between gap-1">
                <button
                  type="button"
                  className="btn btn-outline-white"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="email_verification" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fw-bold">Change Email Address</h4>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    Current Email Address
                    <span className="text-danger ms-1">*</span>
                  </label>
                  <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    New Email Address<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="email" className="form-control" />
                  <p className="mt-2 d-inline-flex align-items-center">
                    <i className="ti ti-info-circle me-1" />
                    New email address only updated once you verified
                  </p>
                </div>
                <div>
                  <label className="form-label">
                    Current Password<span className="text-danger ms-1">*</span>
                  </label>
                  <div className="pass-group input-group">
                    <span className="input-group-text border-end-0">
                      <i className="ti ti-lock" />
                    </span>
                    <input
                      type={
                        passwordVisibility.confirmPassword ? "text" : "password"
                      }
                      className="pass-input form-control border-start-0 ps-0"
                      placeholder="****************"
                    />
                    <span
                      className={`ti toggle-password text-dark fs-14 ${
                        passwordVisibility.confirmPassword
                          ? "ti-eye"
                          : "ti-eye-off"
                      }`}
                      onClick={() =>
                        togglePasswordVisibility("confirmPassword")
                      }
                    ></span>
                  </div>
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center justify-content-end gap-1">
                <button
                  type="button"
                  className="btn btn-outline-white"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="two-factor" className="modal fade">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fw-bold">
                SMS Two Factor Authentication
              </h4>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    Phone Number<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" id="phone3" />
                </div>
                <p className="fs-13 mb-0">
                  By providing your phone number, you agree to receive text
                  messages from Figma to enable two-factor authentication when
                  you log in.
                </p>
              </div>
              <div className="modal-footer d-flex align-items-center justify-content-between gap-1">
                <button
                  type="button"
                  className="btn btn-outline-white"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="delete_modal" className="modal fade">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fw-bold">Delete Account</h4>
              <button
                type="button"
                className="btn-close btn-close-modal custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="mb-3">
                  <p className="text-dark fw-semibold mb-0">
                    Why Are You Deleting Your Account?
                  </p>
                  <p className="fs-13">
                    We're sorry to see you go! To help us improve, please let us
                    know your reason for deleting your account
                  </p>
                </div>
                <div>
                  <div className="form-check mb-3 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Radio-2"
                      id="Radio-sm-1"
                    />
                    <div className="ms-2">
                      <p className="text-dark fw-semibold mb-0">
                        No longer using the service
                      </p>
                      <label
                        className="form-check-label fs-13"
                        htmlFor="Radio-sm-1"
                      >
                        I no longer need this service and won’t be using it in
                        the future.
                      </label>
                    </div>
                  </div>
                  <div className="form-check mb-3 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Radio-2"
                      id="Radio-sm-2"
                    />
                    <div className="ms-2">
                      <p className="text-dark fw-semibold mb-0">
                        Privacy concerns
                      </p>
                      <label
                        className="form-check-label fs-13"
                        htmlFor="Radio-sm-2"
                      >
                        I am concerned about how my data is handled and want to
                        remove
                      </label>
                    </div>
                  </div>
                  <div className="form-check mb-3 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Radio-2"
                      id="Radio-sm-3"
                    />
                    <div className="ms-2">
                      <p className="text-dark fw-semibold mb-0">
                        Too many notifications/emails
                      </p>
                      <label
                        className="form-check-label fs-13"
                        htmlFor="Radio-sm-3"
                      >
                        I’m overwhelmed by the volume of notifications or emails
                      </label>
                    </div>
                  </div>
                  <div className="form-check mb-3 d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Radio-2"
                      id="Radio-sm-4"
                    />
                    <div className="ms-2">
                      <p className="text-dark fw-semibold mb-0">
                        Poor user experience
                      </p>
                      <label
                        className="form-check-label fs-13"
                        htmlFor="Radio-sm-4"
                      >
                        I’ve had difficulty using the platform, and it didn’t
                        meet my expectations
                      </label>
                    </div>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Radio-2"
                      id="Radio-sm-5"
                      defaultChecked
                    />
                    <label
                      className="form-check-label text-dark fw-semibold"
                      htmlFor="Radio-sm-5"
                    >
                      Other (Please specify)
                    </label>
                  </div>
                </div>
                <div>
                  <label className="form-label">
                    Reason<span className="text-danger ms-1">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="modal-footer d-flex align-items-center justify-content-between gap-1">
                <button
                  type="button"
                  className="btn btn-outline-white"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Confirm &amp; Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;
