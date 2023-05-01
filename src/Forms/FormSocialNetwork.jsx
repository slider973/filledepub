import React from "react";

function FormSocialNetwork() {
    return <div className="form-wrapper">
        <div className="section-title">
            <h5>Social Network:</h5>
        </div>
        <form className="profile-form">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-inner mb-25">
                        <label htmlFor="fecebook">Facebook</label>
                        <div className="input-area">
                            <img
                                src="/assets/images/icon/facebook-2.svg"
                                alt=""
                            />
                            <input
                                type="text"
                                id="fecebook"
                                name="fecebook"
                                placeholder="https://example-fecebook.com"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-inner mb-25">
                        <label htmlFor="twitter">Twitter</label>
                        <div className="input-area">
                            <img
                                src="/assets/images/icon/twiter-2.svg"
                                alt=""
                            />
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
                            <img
                                src="/assets/images/icon/linkedin-2.svg"
                                alt=""
                            />
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
                            <img
                                src="/assets/images/icon/pinterest-2.svg"
                                alt=""
                            />
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
                            <img
                                src="/assets/images/icon/dribble-2.svg"
                                alt=""
                            />
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
                    <div className="form-inner mb-50">
                        <label htmlFor="behance">Behance</label>
                        <div className="input-area">
                            <img
                                src="/assets/images/icon/behance-2.svg"
                                alt=""
                            />
                            <input
                                type="text"
                                id="behance"
                                name="behance"
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
                            Update Social Link
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>;
}

export default FormSocialNetwork;
