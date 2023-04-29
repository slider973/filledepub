import React, { useReducer } from "react";
const initialState = {
  password: "",
  passwordVisible: false,
  confirmPassword: "",
  confirmPasswordVisible: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "TOGGLE_PASSWORD_VISIBILITY":
      return { ...state, passwordVisible: !state.passwordVisible };
    case "SET_CONFIRM_PASSWORD":
      return { ...state, confirmPassword: action.payload };
    case "TOGGLE_CONFIRM_PASSWORD_VISIBILITY":
      return {
        ...state,
        confirmPasswordVisible: !state.confirmPasswordVisible,
      };
    default:
      throw new Error();
  }
}
function CompanySettingArea() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlePasswordToggle = () => {
    dispatch({ type: "TOGGLE_PASSWORD_VISIBILITY" });
  };

  const handleConfirmPasswordToggle = () => {
    dispatch({ type: "TOGGLE_CONFIRM_PASSWORD_VISIBILITY" });
  };

  return (
    <div className="col-lg-12">
      <div className="form-wrapper">
        <form className="profile-form">
          <div className="section-title2">
            <h5 className="d-flex align-items-baseline gap-1">
              <img src="/assets/images/icon/profile-settings.svg" alt="" />{" "}
              Profile Settings{" "}
            </h5>
          </div>
          <div className="change-password-area mb-40">
            <div className="row">
              <div className="col-lg-12">
                <div className="info-title">
                  <h6>Change Your Password</h6>
                  <div className="dash" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="password">New Password*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/lock-2.svg" alt="" />
                    <input
                      type={!state.passwordVisible ? "password" : "text"}
                      name="password"
                      id="password"
                      placeholder="Password"
                    />
                    <i
                      onClick={handlePasswordToggle}
                      className={
                        !state.passwordVisible
                          ? "bi bi-eye-slash"
                          : "bi bi-eye-slash  bi-eye"
                      }
                      id="togglePassword"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="password2">Confirm Password*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/lock-2.svg" alt="" />
                    <input
                      type={!state.confirmPasswordVisible ? "password" : "text"}
                      name="confirmpassword"
                      id="password2"
                      placeholder="Confirm Password"
                    />
                    <i
                      onClick={handleConfirmPasswordToggle}
                      className={
                        !state.confirmPasswordVisible
                          ? "bi bi-eye-slash"
                          : "bi bi-eye-slash  bi-eye"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12 pt-10">
                <div className="form-inner">
                  <button className="primry-btn-1 lg-btn w-unset" type="submit">
                    Update Change
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="phone-email-area">
            <div className="row">
              <div className="col-lg-12">
                <div className="info-title">
                  <h6>Phone &amp; Email</h6>
                  <div className="dash" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="pphonenumber">Primary Number*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/phone-2.svg" alt="" />
                    <input
                      type="text"
                      id="pphonenumber"
                      name="pphonenumber"
                      placeholder="+880-17 *** *** **"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="sphonenumber">Secondary Number*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/phone-2.svg" alt="" />
                    <input
                      type="text"
                      id="sphonenumber"
                      name="sphonenumber"
                      placeholder="+880-17 *** *** **"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="pemail">Primary Email*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/email-2.svg" alt="" />
                    <input
                      type="text"
                      id="pemail"
                      name="pemail"
                      placeholder="info@example.com"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-35">
                  <label htmlFor="semail">Secondary Email*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/email-2.svg" alt="" />
                    <input
                      type="text"
                      id="semail"
                      name="semail"
                      placeholder="info@example.com"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="change-area">
            <div className="row">
              <div className="col-lg-12">
                <div className="info-title">
                  <h6>Change Location</h6>
                  <div className="dash" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-inner mb-25">
                  <label htmlFor="location">Get Location*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/map-2.svg" alt="" />
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="Mirpur-12, Block-C, Road-3/20, Dhaka"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="location-map mb-35">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116795.52186985579!2d90.31523677800563!3d23.82357482672597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1673956671914!5m2!1sen!2sbd"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="privacy-security-area">
            <div className="row">
              <div className="col-lg-12">
                <div className="info-title">
                  <h6>Privacy &amp; Security</h6>
                  <div className="dash" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-permission mb-2">
                  <div className="title">
                    <h6>All Job Alert</h6>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault1"
                    />
                  </div>
                </div>
                <div className="single-permission mb-30">
                  <div className="title">
                    <h6>Resume Visibility</h6>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault2"
                    />
                  </div>
                </div>
                <div className="single-permission mb-3">
                  <div className="title">
                    <h6>Disable Account</h6>
                    <p>
                      If you log in again you will able to see all the match
                      jobs and get all information.
                    </p>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault3"
                    />
                  </div>
                </div>
                <div className="single-permission align-items-start">
                  <div className="title">
                    <h6>Delete Account</h6>
                    <p>
                      If you delete your account, you will no longer be able to
                      get information about the matched jobs.
                    </p>
                  </div>
                  <div className="delete-btn">
                    <button type="reset">Delete Account</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 pt-50">
            <div className="form-inner">
              <button className="primry-btn-2 lg-btn w-unset" type="submit">
                Update Change
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompanySettingArea;
