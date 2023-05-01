'use client'
import Link from "next/link";
import * as PropTypes from "prop-types";
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {getValidate} from "./validate";
import {signUp} from "../../firebase/signUp";
import {useRouter} from 'next/router';
import addData from "../../firebase/addData";


const initialValues = {
    lastname: '',
    username: '',
    firstname: '',
    email: '',
    password: '',
    confirmpassword: '',
    isAgree: false,
};

function handleOnSubmit(router) {
    return async (values, {setSubmitting}) => {
        const createTalent = (uid) => ({
            uid,
            lastname: values.lastname,
            username: values.username,
            firstname: values.firstname,
            email: values.email,
            password: values.password,
            profileType: "talents",
        })
        const {result, error} = await signUp(values.email, values.password);

        if (error) {
            return console.log(error)
        }
        const user = createTalent(result.user.uid)
        addData(user.profileType, user.uid, {
            lastname: user.lastname,
            username: user.username,
            firstname: user.firstname,
            email: user.email,
        }).then(
            () => {
                setSubmitting(false);
                return router.push("/candidates-dashboard/my-profile")
            }
        )

    };
}

function FormTalentRegistration(props) {
    const router = useRouter();
    return (
        <Formik
            initialValues={initialValues}
            validate={getValidate()}
            onSubmit={handleOnSubmit(router)}
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
                <Form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-inner mb-25">
                                <label htmlFor="firstname1">Prénom*</label>
                                <div className="input-area">
                                    <img
                                        src="assets/images/icon/user-2.svg"
                                        alt=""
                                    />
                                    <Field
                                        type="text"
                                        id="firstname1"
                                        name="firstname"
                                        placeholder="Mr. Robert"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-inner mb-25">
                                <label htmlFor="lastname1">Nom de famille*</label>
                                <div className="input-area">
                                    <img
                                        src="assets/images/icon/user-2.svg"
                                        alt=""
                                    />
                                    <Field
                                        type="text"
                                        id="lastname1"
                                        name="lastname"
                                        placeholder="Jonson"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-inner mb-25">
                                <label htmlFor="username">Nom d'utilisateur*</label>
                                <div className="input-area">
                                    <img
                                        src="assets/images/icon/user-2.svg"
                                        alt=""
                                    />
                                    <Field
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="robertjonson"
                                    />
                                    <ErrorMessage name="username" component="div"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-inner mb-25">
                                <label htmlFor="email">Email*</label>
                                <div className="input-area">
                                    <img
                                        src="assets/images/icon/email-2.svg"
                                        alt=""
                                    />
                                    <Field
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="info@example.com"
                                    />
                                    <ErrorMessage name="email" component="div"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-inner mb-25">
                                <label htmlFor="password">Mot de passe*</label>
                                <Field
                                    type={
                                        !props.state.passwordVisible ? "password" : "text"
                                    }
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                />
                                <i
                                    onClick={props.onClick}
                                    className={
                                        !props.state.passwordVisible
                                            ? "bi bi-eye-slash"
                                            : "bi bi-eye-slash  bi-eye"
                                    }
                                    id="togglePassword"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-inner">
                                <label htmlFor="password2">
                                    Confirmation du mot de passe*
                                </label>
                                <Field
                                    type={
                                        !props.state.confirmPasswordVisible
                                            ? "password"
                                            : "text"
                                    }
                                    name="confirmpassword"
                                    id="password2"
                                    placeholder="Confirm Password"
                                />
                                <i
                                    onClick={props.onClick1}
                                    className={
                                        !props.state.confirmPasswordVisible
                                            ? "bi bi-eye-slash"
                                            : "bi bi-eye-slash  bi-eye"
                                    }
                                />
                                <ErrorMessage name="confirmpassword" component="div"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                                <div className="form-group two">
                                    <Field type="checkbox" id="html1" name="isAgree"/>
                                    <label htmlFor="html1">
                                        Ici, j'accepterai les conditions de l'entreprise.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-inner">
                                <button className="primry-btn-2" type="submit">
                                    S'inscrire
                                </button>
                            </div>
                        </div>
                        <h6>
                            Vous avez déjà un compte ?{" "}
                            <Link legacyBehavior href="/src/pages/login">
                                <a>Connectez-vous</a>
                            </Link>{" "}
                            Ici
                        </h6>
                    </div>
                </Form>
            )}
        </Formik>
    )

}

export default FormTalentRegistration;
FormTalentRegistration.propTypes = {
    state: PropTypes.any,
    onClick: PropTypes.func,
    onClick1: PropTypes.func
};
