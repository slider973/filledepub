import Link from "next/link";
import React, {useState} from "react";
import * as PropTypes from "prop-types";
import {Formik} from "formik";
import signIn from "../../firebase/signIn";
import {router} from "next/client";

const FormLogin = props => {
    const [loginUser, setLoginUser] = useState({
        email: "",
        password: "",
    });
    return (


        <Formik
            initialValues={loginUser}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values)
                signIn(values.email, values.password).then(
                    () => {
                        setSubmitting(false);
                        return router.push("/candidates-dashboard/my-profile")
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
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-inner mb-25">
                                <label htmlFor="email">Email*</label>
                                <div className="input-area">
                                    <img src="assets/images/icon/email-2.svg" alt=""/>
                                    <input
                                        type="email"
                                        id="email"
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
                        <div className="col-lg-12">
                            <div className="form-inner">
                                <label htmlFor="email">Mot de passe*</label>
                                <input
                                    type={!props.passwordVisible ? "password" : "text"}
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <i
                                    onClick={props.onClick}
                                    className={
                                        !props.passwordVisible
                                            ? "bi bi-eye-slash"
                                            : "bi bi-eye-slash  bi-eye"
                                    }
                                    id="togglePassword"
                                />
                            </div>
                            {errors.password && touched.password && errors.password}
                        </div>
                        <div className="col-lg-12">
                            <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                                <div className="form-group">
                                    <input type="checkbox" id="html"/>
                                    <label htmlFor="html">Se souvenir de moi</label>
                                </div>
                                <a href="#" className="forgot-pass">
                                    Mot de passe oublié ?
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-inner">
                                <button className="primry-btn-2" type="submit" disabled={isSubmitting}>
                                    Connexion
                                </button>
                            </div>
                        </div>
                        <h6>
                            Vous n'avez pas de compte ?
                            <Link legacyBehavior href="/register">
                                <a>S'inscrire</a>
                            </Link>
                        </h6>
                    </div>
                </form>
            )}
        </Formik>
        )
}
    export default FormLogin;
FormLogin.propTypes = {
    passwordVisible: PropTypes.bool,
    onClick: PropTypes.func
}
