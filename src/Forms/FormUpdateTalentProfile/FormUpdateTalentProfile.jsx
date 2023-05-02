import React, {useEffect, useState} from "react";
import {Field, Formik} from "formik";
import addData from "../../firebase/addData";


function FormUpdateTalentProfile(props) {
    const [profile, setProfile] = useState(props.profile);
    const [initialValues] = useState({
        lastname: profile.lastname,
        firstname: profile.firstname,
        years: profile.years,
        place: profile.location,
        language: profile.language,
        phone: profile.phone,
        email: profile.email,
        website: profile.website,
        locationOfTheCurrentJob: profile.locationOfTheCurrentJob,
        qualification: profile.qualification,
        description: profile.description,
        jobTitle: profile.jobTitle,

    });


    useEffect(() => {
        setProfile(props.profile);
    }, [props.profile]);

    return <Formik
        initialValues={initialValues}
        validate={values => {
            const errors = {};
            // if (!values.email) {
            //     errors.email = 'Required';
            // } else if (
            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            // ) {
            //     errors.email = 'Invalid email address';
            // }
            return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
            addData('talents', profile.uid, values).then(
                () => {
                    alert("Profile updated")
                    setSubmitting(false);
                }
            )
            // setTimeout(() => {
            //     alert(JSON.stringify(values, null, 2));
            //     setSubmitting(false);
            // }, 400);
        }}
    >
        {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="profile-form">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label>Nom de Famille*</label>
                            <div className="input-area">
                                <img src="/assets/images/icon/user-2.svg" alt=""/>
                                <input
                                    name="lastname"
                                    type="text"
                                    placeholder="Mr. Robert"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastname}
                                />
                                {errors.lastname && touched.lastname && errors.lastname}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label>Prénom*</label>
                            <div className="input-area">
                                <img src="/assets/images/icon/user-2.svg" alt=""/>
                                <input
                                    name="firstname"
                                    type="text"
                                    placeholder="Mr. Robert"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstname}
                                />
                                {errors.firstname && touched.firstname && errors.firstname}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label>Age*</label>
                            <div className="input-area">
                                <img src="/assets/images/icon/clock-2.svg " alt=""/>
                                <input
                                    type="text"
                                    name="years"
                                    placeholder="21 Years"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.years}
                                />
                                {errors.years && touched.years && errors.years}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label>Lieu actuel*</label>
                            <div className="input-area">
                                <img src="/assets/images/icon/map-2.svg" alt=""/>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Mirpur, Dhaka"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.location}
                                />
                                {errors.location && touched.location && errors.location}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label>Numéro de téléphone*</label>
                            <div className="input-area">
                                <img src="/assets/images/icon/phone-2.svg" alt=""/>
                                <input
                                    type="phone"
                                    name="phone"
                                    placeholder="+33-07 *** *** **"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone}
                                />
                                {errors.phone && touched.phone && errors.phone}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label>Email*</label>
                            <div className="input-area">
                                <img src="/assets/images/icon/email-2.svg" alt=""/>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="info@example.com"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label>Lien de votre site web*</label>
                            <div className="input-area">
                                <img src="/assets/images/icon/website-2.svg" alt=""/>
                                <input
                                    type="text"
                                    name="website"
                                    placeholder="https://example.com"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.website}
                                />
                                {errors.website && touched.website && errors.website}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label>Lieu de travail actuel*</label>
                            <div className="input-area">
                                <img src="/assets/images/icon/company-2.svg" alt=""/>
                                <input
                                    type="text"
                                    name="locationOfTheCurrentJob"
                                    placeholder="Company Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.locationOfTheCurrentJob}
                                />
                                {errors.locationOfTheCurrentJob && touched.locationOfTheCurrentJob && errors.locationOfTheCurrentJob}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label>Poste*</label>
                            <div className="input-area">
                                <img src="/assets/images/icon/designation-2.svg" alt=""/>
                                <input
                                    type="text"
                                    name="jobTitle"
                                    placeholder="UI/UX Engineer"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.jobTitle}
                                />
                                {errors.jobTitle && touched.jobTitle && errors.jobTitle}
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
                                <Field
                                    className="select1"
                                    component="select"
                                    name="qualification"
                                >
                                    <option value="BACHELOR_DEGREE_IN_CSE">Bachelor Degree in CSE</option>
                                    <option value="IGCSE">IGCSE</option>
                                    <option value="AS">AS</option>
                                    <option value="A_LEVEL">A Level</option>
                                    <option value="MATRICULATED">Matriculated</option>
                                </Field>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label>Language*</label>
                            <div className="input-area">
                                <img src="/assets/images/icon/language-2.svg" alt=""/>
                                <Field
                                    component="select"
                                    className="select1"
                                    name="language"
                                >
                                    <option value="Bangla">Bangla</option>
                                    <option value="English">English</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="Italian">Italian</option>
                                </Field>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner mb-50">
                            <label>Description*</label>
                            <textarea
                                name="description"
                                placeholder="Écrire quelque chose à propos de vous-même.........."
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner">
                            <button
                                className="primry-btn-2 lg-btn w-unset"
                                type="submit"
                            >
                                Mettre à jour le profil
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )}
    </Formik>


}

export default FormUpdateTalentProfile;
