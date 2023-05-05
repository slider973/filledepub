import Link from "next/link";
import React, {useEffect, useReducer, useState} from "react";
import Layout from "../layout/Layout";
import FormCompanyRegistration from "../Forms/FormCompanyRegistration";
import FormTalentRegistration from "../Forms/FormTalentRegistration/FormTalentRegistration";
import {Box, Divider} from "@mui/material";


const initialState = {
    password: "", passwordVisible: false, confirmPassword: "", confirmPasswordVisible: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_PASSWORD":
            return {...state, password: action.payload};
        case "TOGGLE_PASSWORD_VISIBILITY":
            return {...state, passwordVisible: !state.passwordVisible};
        case "SET_CONFIRM_PASSWORD":
            return {...state, confirmPassword: action.payload};
        case "TOGGLE_CONFIRM_PASSWORD_VISIBILITY":
            return {
                ...state, confirmPasswordVisible: !state.confirmPasswordVisible,
            };
        default:
            throw new Error();
    }
}

const ENUM_ONGLET_SELECTED = {
    BOTH: 'BOTH', TALENT: 'TALENT', COMPANY: 'COMPANY'
}

function Register() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [ongletSelected, setOngletSelected] = useState(ENUM_ONGLET_SELECTED.BOTH)

    const handlePasswordToggle = () => {
        dispatch({type: "TOGGLE_PASSWORD_VISIBILITY"});
    };

    const handleConfirmPasswordToggle = () => {
        dispatch({type: "TOGGLE_CONFIRM_PASSWORD_VISIBILITY"});
    };

    useEffect(() => {
    }, [])

    return (<Layout>
        <div className="register-area pt-120 mb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-wrapper">
                            <div className="form-title">
                                <h3>Créer un compte</h3>
                                <span/>
                            </div>
                            <Box pb={3}>
                                <Divider/>
                            </Box>
                            <div className="register-tab">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        {ongletSelected === (ENUM_ONGLET_SELECTED.BOTH || ENUM_ONGLET_SELECTED.TALENT) && (
                                            <button
                                                className="nav-link"
                                                id="nav-home-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#nav-home"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-home"
                                                aria-selected="true"
                                                onClick={() => {
                                                    setOngletSelected(ENUM_ONGLET_SELECTED.TALENT)
                                                }}
                                            >
                                                Talent
                                            </button>)

                                        }
                                        {ongletSelected === (ENUM_ONGLET_SELECTED.BOTH || ENUM_ONGLET_SELECTED.COMPANY) && (
                                            <button
                                                className="nav-link"
                                                id="nav-profile-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#nav-profile"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-profile"
                                                aria-selected="false"
                                                onClick={() => {
                                                    setOngletSelected(ENUM_ONGLET_SELECTED.COMPANY)
                                                }}
                                            >
                                                Entreprise
                                            </button>)

                                        }

                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    {ongletSelected === ENUM_ONGLET_SELECTED.TALENT && (<div
                                        className="tab-pane fade show active"
                                        id="nav-home"
                                        role="tabpanel"
                                        aria-labelledby="nav-home-tab"
                                    >
                                        <FormTalentRegistration
                                            state={state}
                                            onClick={handlePasswordToggle}
                                            onClick1={handleConfirmPasswordToggle}
                                        />
                                    </div>)}
                                    {ongletSelected === ENUM_ONGLET_SELECTED.COMPANY && (<div
                                        className="tab-pane fade show active"
                                        id="nav-profile"
                                        role="tabpanel"
                                        aria-labelledby="nav-profile-tab"
                                    >
                                        <FormCompanyRegistration
                                            state={state}
                                            onClick={handlePasswordToggle}
                                            onClick1={handleConfirmPasswordToggle}
                                        />
                                    </div>)}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>);
}

export default Register;
