import Link from "next/link";
import React from "react";
import * as PropTypes from "prop-types";

function FormCompanyRegistration(props) {
    return <form>
        <div className="row">
            <div className="col-md-6">
                <div className="form-inner mb-25">
                    <label htmlFor="firstname">Prénom*</label>
                    <div className="input-area">
                        <img
                            src="assets/images/icon/user-2.svg"
                            alt=""
                        />
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            placeholder="Mr. Robert"
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-inner mb-25">
                    <label htmlFor="lastname">Nom de Famille*</label>
                    <div className="input-area">
                        <img
                            src="assets/images/icon/user-2.svg"
                            alt=""
                        />
                        <input
                            type="text"
                            id="lastname"
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
                        <input
                            type="text"
                            id="username1"
                            name="username"
                            placeholder="robertjonson"
                        />
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
                        <input
                            type="text"
                            id="email1"
                            name="email"
                            placeholder="info@example.com"
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-inner mb-25">
                    <label htmlFor="companyname">Nom de la L'entreprise*</label>
                    <div className="input-area">
                        <img
                            src="assets/images/icon/category-2.svg"
                            alt=""
                        />
                        <input
                            type="text"
                            id="companyname"
                            name="companyname"
                            placeholder="Mr. Robert"
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-inner mb-25">
                    <label>Type D'entreprise*</label>
                    <div className="input-area">
                        <img
                            src="assets/images/icon/category-2.svg"
                            alt=""
                        />
                        <select className="select1">
                            <option value={0}>Digital Agency</option>
                            <option value={1}>
                                Digital Marketing Agency
                            </option>
                            <option value={2}>Software Company</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-inner mb-25">
                    <label htmlFor="password">Mot de passe*</label>
                    <input
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
                        Confirmation de Mot de passe*
                    </label>
                    <input
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
                </div>
            </div>
            <div className="col-md-12">
                <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                    <div className="form-group two">
                        <input type="checkbox" id="html"/>
                        <label htmlFor="html">
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
                <Link legacyBehavior href="/login">
                    <a>Connectez-vous</a>
                </Link>{" "}
                Ici
            </h6>
        </div>
    </form>;
}

export default FormCompanyRegistration;
FormCompanyRegistration.propTypes = {
    state: PropTypes.any,
    onClick: PropTypes.func,
    onClick1: PropTypes.func
};