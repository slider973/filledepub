import React, {memo, useEffect, useState} from "react";
import CandidateLayout from "../../layout/CandidateLayout";
import getDocument from "../../firebase/getData";
import {useAuthContext} from "../../core/auth/AuthContext";
import FormUpdateTalentProfile from "../../Forms/FormUpdateTalentProfile/FormUpdateTalentProfile";
import {withAuth} from "../../hoc/withAuth";


function MyProfile() {
    const auth = useAuthContext()
    const [user, setUser] = useState(null)

    useEffect(() => {
        getDocument("talents", auth.user.uid).then((res) => {
            const result = res.result.data()
            setUser({
                ...result,
                uid: auth.user.uid,
                years: result.years || '',
                place: result.location || '',
                phone: result.phone || '',
                email: result.email || '',
                website: result.website || '',
                locationOfTheCurrentJob: result.locationOfTheCurrentJob || '',
                qualification: result.qualification || '',
                description: result.description || '',
                jobTitle: result.jobTitle || '',
                languages: result.languages || '',
            })
        })
    }, [])
    return (
        <CandidateLayout>
            <div className="col-lg-9">
                <div className="my-profile-inner">
                    <div className="form-wrapper mb-60">
                        <div className="section-title">
                            <h5>Mon Profile</h5>
                        </div>
                        {
                            user && <FormUpdateTalentProfile profile={user}/>
                        }
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
                                            <img src="/assets/images/icon/facebook-2.svg" alt=""/>
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
                                            <img src="/assets/images/icon/twiter-2.svg" alt=""/>
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
                                            <img src="/assets/images/icon/linkedin-2.svg" alt=""/>
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
                                            <img src="/assets/images/icon/pinterest-2.svg" alt=""/>
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
                                            <img src="/assets/images/icon/dribble-2.svg" alt=""/>
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
                                            <img src="/assets/images/icon/behance-2.svg" alt=""/>
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

export default withAuth(memo(MyProfile));
