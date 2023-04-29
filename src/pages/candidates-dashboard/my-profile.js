import React from "react";
import CandidateLayout from "../../layout/CandidateLayout";

function MyProfile() {
  return (
    <CandidateLayout>
      <div className="col-lg-9">
        <div className="my-profile-inner">
          <div className="form-wrapper mb-60">
            <div className="section-title">
              <h5>My Profile</h5>
            </div>
            <form className="profile-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>First Name*</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/user-2.svg" alt="" />
                      <input type="text" placeholder="Mr. Robert" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>Your Age*</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/clock-2.svg " alt="" />
                      <input type="text" placeholder="21 Years" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>Current Location*</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/map-2.svg" alt="" />
                      <input type="text" placeholder="Mirpur, Dhaka" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>Phone Number*</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/phone-2.svg" alt="" />
                      <input type="text" placeholder="+880-17 *** *** **" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>Email*</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/email-2.svg" alt="" />
                      <input type="email" placeholder="info@example.com" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>Website Link*</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/website-2.svg" alt="" />
                      <input type="text" placeholder="https://example.com" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>Current Job Place*</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/company-2.svg" alt="" />
                      <input type="text" placeholder="Company Name" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>Designation*</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/designation-2.svg" alt="" />
                      <input type="text" placeholder="UI/UX Engineer" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>Qualification*</label>
                    <div className="input-area">
                      <img
                        src="/assets/images/icon/qualification-2.svg"
                        alt=""
                      />
                      <select className="select1">
                        <option value={0}>Bachelor Degree in CSE</option>
                        <option value={1}>IGCSE</option>
                        <option value={2}>AS</option>
                        <option value={4}>A Level</option>
                        <option value={5}>Matriculated</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>Language*</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/language-2.svg" alt="" />
                      <select className="select1">
                        <option value={0}>Bangla</option>
                        <option value={1}>English</option>
                        <option value={2}>Spanish</option>
                        <option value={4}>Italian</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-inner mb-50">
                    <label>Description*</label>
                    <textarea
                      placeholder="Write something about yourself.........."
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-inner">
                    <button
                      className="primry-btn-2 lg-btn w-unset"
                      type="submit"
                    >
                      Update Profile
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="form-wrapper">
            <div className="section-title">
              <h5>Social Network:</h5>
            </div>
            <form className="profile-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>Facebook</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/facebook-2.svg" alt="" />
                      <input
                        type="text"
                        placeholder="https://example-facebook.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>Twitter</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/twiter-2.svg" alt="" />
                      <input
                        type="text"
                        placeholder="https://example-twitter.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>LinkedIn</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/linkedin-2.svg" alt="" />
                      <input
                        type="text"
                        placeholder="https://example-linkedin.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>Pinterest</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/pinterest-2.svg" alt="" />
                      <input
                        type="text"
                        placeholder="https://example-pinterest.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-25">
                    <label>Dribbble</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/dribble-2.svg" alt="" />
                      <input
                        type="text"
                        placeholder="https://example-dribbble.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner mb-50">
                    <label>Behance</label>
                    <div className="input-area">
                      <img src="/assets/images/icon/behance-2.svg" alt="" />
                      <input
                        type="text"
                        placeholder="https://example-behance.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-inner">
                    <button
                      className="primry-btn-2 lg-btn w-unset"
                      type="submit"
                    >
                      Edit Social
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
}

export default MyProfile;
