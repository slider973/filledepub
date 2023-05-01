import DatePicker from "react-datepicker";
import CreatableSelect from "react-select/creatable";
import * as PropTypes from "prop-types";
import React from "react";

const components = {
    DropdownIndicator: null,
    IndicatorsContainer: () => null,
};

function FormTalentProfile(props) {
    return <form className="edit-profile-form profile-form">
        <div className="row">
            <div className="col-md-6">
                <div className="form-inner mb-25">
                    <label htmlFor="fathername">Father’s Name*</label>
                    <div className="input-area">
                        <img src="/assets/images/icon/user-2.svg" alt=""/>
                        <input
                            type="text"
                            id="fathername"
                            name="fathername"
                            placeholder="Mr. Norman Frankly"
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-inner mb-25">
                    <label htmlFor="mothername">Mother's Name*</label>
                    <div className="input-area">
                        <img src="/assets/images/icon/user-2.svg " alt=""/>
                        <input
                            type="text"
                            id="mothername"
                            name="mothername"
                            placeholder="Mrs. Marcoline Frankly"
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-inner mb-25">
                    <label htmlFor="datepicker5">Date of Birth*</label>
                    <div className="input-area">
                        <img src="/assets/images/icon/calender2.svg" alt=""/>
                        <DatePicker
                            selected={props.selected}
                            onChange={props.onChange}
                            placeholderText="Date of Birth"
                            className="calendar"
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-inner mb-25">
                    <label htmlFor="nid">National Id*</label>
                    <div className="input-area">
                        <img src="/assets/images/icon/nid.svg" alt=""/>
                        <input
                            type="text"
                            id="nid"
                            name="nid "
                            placeholder="0988 *** *** *** **"
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-inner mb-25">
                    <div className="salary-wrap">
                        <label className="label" htmlFor="preAddress">
                            Present Address*
                        </label>
                        <div className="checkbox-container">
                            <ul>
                                <li>
                                    <label className="containerss">
                                        <input type="checkbox"/>
                                        <span className="checkmark"/>
                                        <span className="text">
                                    Same as permanent Address
                                  </span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="input-area">
                        <img src="/assets/images/icon/home-2.svg" alt=""/>
                        <input
                            type="text"
                            id="preAddress"
                            name="preAddress "
                            placeholder="Your Address Here..."
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-inner mb-25">
                    <label htmlFor="perAddress">Permanent Address*</label>
                    <div className="input-area">
                        <img src="/assets/images/icon/home-2.svg" alt=""/>
                        <input
                            type="text"
                            id="perAddress"
                            name="perAddress"
                            placeholder="Your Address Here..."
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-inner mb-25">
                    <label>Marital Status*</label>
                    <div className="input-area">
                        <img src="/assets/images/icon/marital-2.svg" alt=""/>
                        <select className="select1">
                            <option value={0}>Single</option>
                            <option value={1}>Married</option>
                            <option value={2}>Widowed</option>
                            <option value={4}>Divorced</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-inner mb-25">
                    <label>Gender*</label>
                    <div className="input-area">
                        <img src="/assets/images/icon/gender.svg " alt=""/>
                        <select className="select1">
                            <option value={0}>Female</option>
                            <option value={1}>Male</option>
                            <option value={2}>Custom</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-inner mb-25">
                    <label>Religion*</label>
                    <div className="input-area">
                        <img src="/assets/images/icon/religion.svg" alt=""/>
                        <select className="select1">
                            <option value={0}>Christianity</option>
                            <option value={1}>Islam</option>
                            <option value={2}>Buddhism</option>
                            <option value={3}>Sikhism</option>
                            <option value={4}>Judaism</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-inner mb-25">
                    <label>Blood Group*</label>
                    <div className="input-area">
                        <img src="/assets/images/icon/blood.svg" alt=""/>
                        <select className="select1">
                            <option value={0}>A+</option>
                            <option value={1}>A-</option>
                            <option value={2}>B+</option>
                            <option value={3}>B-</option>
                            <option value={4}>AB+</option>
                            <option value={5}>AB-</option>
                            <option value={6}>O+</option>
                            <option value={7}>O-</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-inner mb-25">
                    <label htmlFor="hight">Height*</label>
                    <div className="input-area">
                        <img src="/assets/images/icon/hight.svg" alt=""/>
                        <input
                            type="text"
                            id="hight"
                            name="hight"
                            placeholder="5.6'"
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-inner mb-25">
                    <label htmlFor="weight">Weight*</label>
                    <div className="input-area">
                        <img src="/assets/images/icon/weight.svg" alt=""/>
                        <input
                            type="text"
                            id="weight"
                            name="weight "
                            placeholder={56}
                        />
                    </div>
                </div>
            </div>
            <div className="skills-row">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title2 mb-20">
                            <h5>Your Skills:</h5>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner mb-25">
                            <label>Special Skills*</label>
                            <CreatableSelect
                                components={components}
                                inputValue={props.inputValue}
                                isClearable
                                isMulti
                                menuIsOpen={false}
                                styles={props.styles}
                                onChange={props.onChange1}
                                onInputChange={props.onInputChange
                                }
                                onKeyDown={props.onKeyDown}
                                placeholder="Type Tag and press enter..."
                                value={props.value}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="form-inner">
                    <button
                        className="primry-btn-2 lg-btn w-unset"
                        type="submit"
                    >
                        Update Change
                    </button>
                </div>
            </div>
        </div>
    </form>;
}

export default FormTalentProfile;

FormTalentProfile.propTypes = {
    selected: PropTypes.any,
    onChange: PropTypes.func,
    inputValue: PropTypes.string,
    styles: PropTypes.shape({
        multiValueLabel: PropTypes.func,
        multiValueRemove: PropTypes.func,
        control: PropTypes.func,
        ValueContainer: PropTypes.func,
        menu: PropTypes.func,
        multiValue: PropTypes.func
    }),
    onChange1: PropTypes.func,
    onInputChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    value: PropTypes.arrayOf(PropTypes.any)
};
