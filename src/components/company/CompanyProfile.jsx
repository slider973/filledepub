import React, { useRef, useState } from "react";
import WorkAreaRepeter from "./WorkAreaRepeter";

function CompanyProfiles() {
  const [logoImage, setLogoImage] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const logoFileInputRef = useRef(null);
  const coverFileInputRef = useRef(null);

  const handleLogoFileSelect = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setLogoImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCoverFileSelect = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setCoverImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleLogoDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setLogoImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCoverDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setCoverImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleLogoDragOver = (e) => {
    e.preventDefault();
  };

  const handleCoverDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="col-lg-12">
      <div className="my-profile-inner ">
        <div className="form-wrapper">
          <div className="section-title two">
            <h5>My Profile</h5>
            <div className="dash" />
          </div>
          <form className="profile-form">
            <div className="section-title2">
              <h5>Company Information:</h5>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="companyname">Company Name*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/company-2.svg" alt="" />
                    <input
                      type="text"
                      id="companyname"
                      name="companyname"
                      placeholder="Elite Hangstroman"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label>Company Type*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/category-2.svg" alt="" />
                    <select className="select1">
                      <option value={0}>Digital Agency</option>
                      <option value={1}>Digital Marketing Agency</option>
                      <option value={2}>Software Company</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="company">Company Size*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/person-2.svg" alt="" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="40 Person"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="email">Email*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/email-2.svg" alt="" />
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="info@example.com"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="location">Location*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/map-2.svg" alt="" />
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="Type Location"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="website">Website Link*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/website-2.svg" alt="" />
                    <input
                      type="text"
                      id="website"
                      name="website"
                      placeholder="https://example.com"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="facebook">Facebook</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/facebook-2.svg" alt="" />
                    <input
                      type="text"
                      id="facebook"
                      name="facebook"
                      placeholder="https://example-facebook.com"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="twitter">Twitter</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/twiter-2.svg" alt="" />
                    <input
                      type="text"
                      id="twitter"
                      name="twitter"
                      placeholder="https://example-twitter.com"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="linkedin">LinkedIn</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/linkedin-2.svg" alt="" />
                    <input
                      type="text"
                      id="linkedin"
                      name="linkedin"
                      placeholder="https://example-linkedin.com"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="pinterest">Pinterest</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/pinterest-2.svg" alt="" />
                    <input
                      type="text"
                      id="pinterest"
                      name="pinterest"
                      placeholder="https://example-pinterest.com"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="dribble">Dribbble</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/dribble-2.svg" alt="" />
                    <input
                      type="text"
                      id="dribble"
                      name="dribble"
                      placeholder="https://example-dribbble.com"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="behance">Behance</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/behance-2.svg" alt="" />
                    <input
                      type="text"
                      id="behance"
                      name="behance"
                      placeholder="https://example-behance.com"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="company-images-area mb-50">
                  <div className="row g-lg-4 gy-5">
                    <div className="col-lg-6 devaider1 position-relative">
                      <div className="company-logo-area">
                        <h5>Company Logo: </h5>
                        <div
                          title="Drag and drop an image here"
                          className="image-uploader drag-area"
                        >
                          <div
                            className="dropzone"
                            onDrop={handleLogoDrop}
                            onDragOver={handleLogoDragOver}
                            onClick={() => logoFileInputRef.current.click()}
                          >
                            {logoImage ? (
                              <img
                                src={logoImage}
                                alt="preview"
                                className="preview"
                              />
                            ) : (
                              <p>Upload Logo Image</p>
                            )}
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleLogoFileSelect}
                            ref={logoFileInputRef}
                            style={{ display: "none" }}
                          />
                        </div>
                        <span>Maximum File Upload: 2 MB</span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="company-cover-photo-area">
                        <h5>Company Cover Photo: </h5>
                        <div
                          title="Drag and drop an image here"
                          className="image-uploader drag-area"
                        >
                          <div
                            className="dropzone "
                            onDrop={handleCoverDrop}
                            onDragOver={handleCoverDragOver}
                            onClick={() => coverFileInputRef.current.click()}
                          >
                            {coverImage ? (
                              <img
                                src={coverImage}
                                alt="preview"
                                className="preview"
                              />
                            ) : (
                              <p>Upload Cover Image</p>
                            )}
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleCoverFileSelect}
                            ref={coverFileInputRef}
                            style={{ display: "none" }}
                          />
                        </div>

                        <span>Maximum File Upload: 5 MB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <WorkAreaRepeter />

              <div className="col-md-12 pt-30">
                <div className="form-inner">
                  <button className="primry-btn-2 lg-btn w-unset" type="submit">
                    Update Change
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfiles;
