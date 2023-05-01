import React, {useState} from "react";
import * as PropTypes from "prop-types";
import {Field, Formik} from "formik";
import addData from "../../firebase/addData";
import {useAuthContext} from "../../core/auth/AuthContext";


function FormTalentEditResumeBaseDetail(props) {
    const auth = useAuthContext();

    const [resume, setResume] = useState(props.resume);
    const [initialResumeValue] = useState({
        lastname: resume.lastname,
        firstname: resume.firstname,
        yearsOfExperience: resume.yearsOfExperience,
        jobPlace: resume.jobPlace,
        language: resume.language,
        phoneNumber: resume.phoneNumber,
        email: resume.email,
        website: resume.website,
        descriptionOfCarrier: resume.descriptionOfCarrier,
        jobTitle: resume.jobTitle,

    });
    return <Formik
        initialValues={initialResumeValue}
        validate={values => {
            // const errors = {};
            // if (!values.email) {
            //     errors.email = 'Required';
            // } else if (
            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            // ) {
            //     errors.email = 'Invalid email address';
            // }
            // return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
            addData('talents', auth.user.uid, {resume: {
                        basicInfo: values
                }}).then(
                () => {
                    alert("Profile updated")
                    setSubmitting(false);
                }
            )
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
            <form onSubmit={handleSubmit} className="edit-profile-form profile-form  mb-60">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label htmlFor="firstname1">Prénom*</label>
                            <div className="input-area">
                                <img src="/assets/images/icon/user-2.svg" alt=""/>
                                <input
                                    type="text"
                                    id="firstname1"
                                    name="firstname"
                                    placeholder="Mrs. Jacoline"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstname}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-md-6">
                        <div className="form-inner mb-25">
                            <label htmlFor="lastname">Nom de famille*</label>
                            <div className="input-area">
                                <img src="/assets/images/icon/user-2.svg " alt=""/>
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Frankly"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastname}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-lg-12">
                        <div
                            title="Drag and drop an image here"
                            className="image-uploader"
                        >
                            <div
                                className="dropzone drag-area"
                                onDrop={props.onDrop}
                                onDragOver={props.onDragOver}
                                onClick={props.onClick}
                            >
                                {props.image ? (
                                    <img
                                        src={props.image}
                                        alt="preview"
                                        className="preview"
                                    />
                                ) : (
                                    <p>Téléverser une image</p>
                                )}
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={props.onChange}
                                ref={props.ref}
                                style={{display: "none"}}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label htmlFor="jobPlace">Lieu de travail actuel*</label>
                            <div className="input-area">
                                <img src="/assets/images/icon/company-2.svg" alt=""/>
                                <input
                                    type="text"
                                    id="jobPlace"
                                    name="jobPlace"
                                    placeholder="Company Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.jobPlace}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label htmlFor="jobTitle">Fonction/Poste*</label>
                            <div className="input-area">
                                <img
                                    src="/assets/images/icon/designation-2.svg"
                                    alt=""
                                />
                                <input
                                    type="text"
                                    id="jobTitle"
                                    name="jobTitle"
                                    placeholder="UI/UX Engineer"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.jobTitle}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label htmlFor="experiences">
                                Années d'expérience*
                            </label>
                            <div className="input-area">
                                <img
                                    src="/assets/images/icon/experiences-2.svg"
                                    alt=""
                                />
                                <input
                                    type="text"
                                    id="experiences"
                                    name="yearsOfExperience"
                                    placeholder="3.5 Ans"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.yearsOfExperience}
                                />
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
                                    component="select"
                                    name="qualification"
                                    className="select1"
                                >
                                    <option value={0}>Bachelor Degree in CSE</option>
                                    <option value={1}>IGCSE</option>
                                    <option value={2}>AS</option>
                                    <option value={4}>A Level</option>
                                    <option value={5}>Matriculated</option>
                                </Field>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label htmlFor="email1">Email*</label>
                            <div className="input-area">
                                <img src="/assets/images/icon/email-2.svg" alt=""/>
                                <input
                                    type="text"
                                    id="email1"
                                    name="email"
                                    placeholder="info@example.com"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label htmlFor="phonenumber">Numéro de téléphone*</label>
                            <div className="input-area">
                                <img src="/assets/images/icon/phone-2.svg" alt=""/>
                                <input
                                    type="text"
                                    id="phonenumber"
                                    name="phoneNumber"
                                    placeholder="+880-17 *** *** **"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phoneNumber}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label htmlFor="website">Lien de votre site web*</label>
                            <div className="input-area">
                                <img src="/assets/images/icon/website-2.svg" alt=""/>
                                <input
                                    type="text"
                                    id="website"
                                    name="website"
                                    placeholder="https://example.com"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.website}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label htmlFor="language">Langue*</label>
                            <div className="input-area">
                                <img
                                    src="/assets/images/icon/language-2.svg"
                                    alt=""
                                />
                                <input
                                    type="text"
                                    id="language"
                                    name="language"
                                    placeholder="Bangla, English, Hindi"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.language}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner mb-50">
                            <label htmlFor="description">Objectif de carrière*</label>
                            <textarea
                                name="descriptionOfCarrier"
                                id="description"
                                placeholder="Écrire quelque chose à propos de vous-même...."
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.descriptionOfCarrier}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner">
                            <button
                                className="primry-btn-2 lg-btn w-unset"
                                type="submit"
                            >
                                Mettre à jour le CV
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )}
    </Formik>


}

/**
 *       <form onSubmit={handleSubmit}>
 *                 <input
 *                     type="email"
 *                     name="email"
 *                     onChange={handleChange}
 *                     onBlur={handleBlur}
 *                     value={values.email}
 *                 />
 *                 {errors.email && touched.email && errors.email}
 *                 <input
 *                     type="password"
 *                     name="password"
 *                     onChange={handleChange}
 *                     onBlur={handleBlur}
 *                     value={values.password}
 *                 />
 *                 {errors.password && touched.password && errors.password}
 *                 <button type="submit" disabled={isSubmitting}>
 *                     Submit
 *                 </button>
 *             </form>
 */

export default FormTalentEditResumeBaseDetail;
FormTalentEditResumeBaseDetail.propTypes = {
    onDrop: PropTypes.func,
    onDragOver: PropTypes.func,
    onClick: PropTypes.func,
    image: PropTypes.string,
    onChange: PropTypes.func,
    ref: PropTypes.any
};
