import React from "react";

function ContactPageContent() {
  return (
    <>
      <div>
        <div className="office-location-area pt-120 mb-120">
          <div className="container">
            <div className="row mb-120">
              <div className="col-lg-12 mb-70">
                <div className="office-location">
                  <div className="office-categoty">
                    <div className="single-category d-lg-block d-none">
                      <h5>Main Office</h5>
                      <span className="first" />
                      <p />
                    </div>
                    <div className="single-category d-lg-block d-none">
                      <h5>Office-01</h5>
                      <span />
                      <p />
                    </div>
                    <div className="single-category d-lg-block d-none">
                      <h5>Office-02</h5>
                      <span />
                      <p />
                    </div>
                  </div>
                  <div className="row g-lg-4 gy-5">
                    <div className="col-lg-4">
                      <div className="single-category d-lg-none d-flex justify-content-center">
                        <h5>Main Office</h5>
                      </div>
                      <div className="single-location">
                        <h5>Dhaka, Bangladesh</h5>
                        <ul>
                          <li>
                            <div className="icon">
                              <img
                                src="assets/images/icon/phone-5.svg"
                                alt=""
                              />
                            </div>
                            <a href="tel:+8801873468987">+880-187 346 8987</a>
                          </li>
                          <li>
                            <div className="icon">
                              <img
                                src="assets/images/icon/location.svg"
                                alt=""
                              />
                            </div>
                            <a>
                              Mirpur DOSH, Avenue-01, Road-02, House-147/148
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="single-category d-lg-none  d-flex justify-content-center">
                        <h5>Office-01</h5>
                      </div>
                      <div className="single-location">
                        <h5>New York, USA</h5>
                        <ul>
                          <li>
                            <div className="icon">
                              <img
                                src="assets/images/icon/phone-5.svg"
                                alt=""
                              />
                            </div>
                            <a href="tel:+9811873468987">+981-187 346 8987</a>
                          </li>
                          <li>
                            <div className="icon">
                              <img
                                src="assets/images/icon/location.svg"
                                alt=""
                              />
                            </div>
                            <a>New York, Avenue-01, Block-B, House-140/142</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="single-category d-lg-none d-flex justify-content-center">
                        <h5>Office-02</h5>
                      </div>
                      <div className="single-location">
                        <h5>London City, UK</h5>
                        <ul>
                          <li>
                            <div className="icon">
                              <img
                                src="assets/images/icon/phone-5.svg"
                                alt=""
                              />
                            </div>
                            <a href="tel:+998737346898">+998-737 346 898</a>
                          </li>
                          <li>
                            <div className="icon">
                              <img
                                src="assets/images/icon/location.svg"
                                alt=""
                              />
                            </div>
                            <a>
                              West London, Avenue-05, Block No-C, House-08/10
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="office-location-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.564763018799!2d90.36349791490355!3d23.834071191491947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1675482960370!5m2!1sen!2sbd"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-support-area mb-120">
          <div className="container">
            <div className="row g-lg-4 gy-5">
              <div className="col-lg-6">
                <div className="contect-content">
                  <h4>Need Any Help? Contact Us</h4>
                  <p>
                    Alternatively you can also check for the Company email,
                    phone number and address in the official website.
                  </p>
                  <div className="support">
                    <div className="icon">
                      <img
                        src="assets/images/icon/footer-support-icon.svg"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h5>Support Line:</h5>
                      <a href="tel:+099-03573983465">+099-035 7398 3465</a>
                    </div>
                  </div>
                  <div className="service-available">
                    <span>N:B</span>
                    <p>
                      Our Customer Service Available from 9 am to 6 pm (Saturday
                      to Thursday){" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-form form-wrapper">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-inner mb-25">
                          <label htmlFor="name">Your Name*</label>
                          <div className="input-area">
                            <img src="assets/images/icon/user-2.svg" alt="" />
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Mr. Jackson Mile"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner mb-25">
                          <label htmlFor="email">Email*</label>
                          <div className="input-area">
                            <img src="assets/images/icon/email-2.svg" alt="" />
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
                          <label htmlFor="phonenumber">Phone*</label>
                          <div className="input-area">
                            <img src="assets/images/icon/phone-2.svg" alt="" />
                            <input
                              type="text"
                              id="phonenumber"
                              name="phonenumber"
                              placeholder="+880-17 *** *** **"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner mb-25">
                          <label htmlFor="jobplace">
                            Company Name (Optional)
                          </label>
                          <div className="input-area">
                            <img
                              src="assets/images/icon/company-2.svg"
                              alt=""
                            />
                            <input
                              type="text"
                              id="jobplace"
                              name="jobplace"
                              placeholder="Company Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-inner mb-40">
                          <label htmlFor="description">Message</label>
                          <textarea
                            name="description"
                            id="description"
                            placeholder="Message..."
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
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPageContent;
