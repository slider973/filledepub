import React, {useEffect, useRef, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CreatableSelect from "react-select/creatable";
import EducatonRepeterForm from "../../components/candidates/EducatonRepeterForm";
import PersonalInfoRepeterForm from "../../components/candidates/PersonalInfoRepeterForm";
import CandidateLayout from "../../layout/CandidateLayout";
import * as PropTypes from "prop-types";
import FormTalentEditResumeBaseDetail from "../../Forms/FormTalentEditResume/FormTalentEditResumeBaseDetail";
import FormSocialNetwork from "../../Forms/FormSocialNetwork";
import FormTalentProfile from "../../Forms/FormTalentEditResume/FormTalentProfile";
import {useAuthContext} from "../../core/auth/AuthContext";
import {withAuth} from "../../hoc/withAuth";


const createOption = (label) => ({
    label,
    value: label,
});


function EditProfile() {
    const auth = useAuthContext()
    const [files, setFiles] = useState([]);
    const [inputValue, setInputValue] = React.useState("");
    const [value, setValue] = React.useState([]);
    const [startDate, setStartDate] = React.useState(new Date());
    const [image, setImage] = useState("");


    const fileInputRef = useRef(null);

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };
    // image end
    const handleKeyDown = (event) => {
        if (!inputValue) return;
        switch (event.key) {
            case "Enter":
            case "Tab":
                setValue((prev) => [...prev, createOption(inputValue)]);
                setInputValue("");
                event.preventDefault();
        }
    };

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            border: "1px solid rgba(0, 167, 172, 0.12)",

            backgroundColor: "transparent",
            boxShadow: "none",
            "&:hover": {
                borderColor: "none",
            },
        }),
        menu: (provided, state) => ({
            ...provided,
            zIndex: 9999,
        }),
        multiValue: (provided, state) => ({
            ...provided,
            color: "white",
            backgroundColor: "#00a7ac",
        }),
        multiValueLabel: (provided, state) => ({
            ...provided,
            color: "white",
        }),
        multiValueRemove: (provided, state) => ({
            ...provided,
            color: "white",
            ":hover": {
                backgroundColor: "#dc3545",
                color: "white",
            },
        }),
        ValueContainer: (provided, state) => ({
            ...provided,
            display: "flex",
            backgroundColor: "#343a40",
            flexWrap: "nowrap",
        }),
    };

    useEffect(() => {

    }, []);


    return (
        <CandidateLayout>
            <div className="col-lg-9">
                <div className="edit-profile-inner">
                    <div className="form-wrapper">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#home"
                                    type="button"
                                    role="tab"
                                    aria-controls="home"
                                    aria-selected="true"
                                >
                                    <span/>
                                    Informations de base:
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected="false"
                                >
                                    <span/>
                                    Profile
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="contact"
                                    aria-selected="false"
                                >
                                    <span/>
                                    Éducation
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="professional-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#professional"
                                    type="button"
                                    role="tab"
                                    aria-controls="professional"
                                    aria-selected="false"
                                >
                                    <span/>
                                    Informations professionnelles
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div
                                className="tab-pane fade show active"
                                id="home"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                            >
                                <FormTalentEditResumeBaseDetail
                                    resume={{}}
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                    onClick={handleClick}
                                    image={image}
                                    onChange={handleFileSelect}
                                    ref={fileInputRef}
                                />
                                <FormSocialNetwork/>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="profile"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                            >
                                <FormTalentProfile
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    inputValue={inputValue} styles={customStyles}
                                    onChange1={(newValue) => setValue(newValue)}
                                    onInputChange={(newValue) => setInputValue(newValue)}
                                    onKeyDown={handleKeyDown}
                                    value={value}
                                />
                            </div>
                            <div
                                className="tab-pane fade"
                                id="contact"
                                role="tabpanel"
                                aria-labelledby="contact-tab"
                            >
                                <EducatonRepeterForm/>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-inner pt-30">
                                            <button
                                                className="primry-btn-2 lg-btn w-unset"
                                                type="submit"
                                            >
                                                Update Change
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="professional"
                                role="tabpanel"
                                aria-labelledby="professional-tab"
                            >
                                <PersonalInfoRepeterForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CandidateLayout>
    );
}

export default withAuth(EditProfile);
