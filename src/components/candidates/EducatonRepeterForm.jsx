import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function EducatonRepeterForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const [fields, setFields] = useState([{ value: "" }]);

  const handleAdd = () => {
    const newFields = [...fields, { value: "" }];

    setFields(newFields);
  };

  const handleRemove = (index, event) => {
    event.preventDefault();
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  return (
    <div>
      {fields.map((field, index) => (
        <form key={index} className="edit-profile-form profile-form">
          <div className="section-title2">
            <h5>Educational Qualification:</h5>
          </div>
          <div className="education-row">
            <div className="row">
              <div className="col-lg-12">
                <div className="info-title">
                  <h6>Academic Information:</h6>
                  <div className="dash" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label>Education Level*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/qualification-2.svg" alt="" />
                    <select className="select1">
                      <option value={0}>Bachelor Degree in CSE</option>
                      <option value={1}>IGCSE</option>
                      <option value={2}>AS</option>
                      <option value={4}>A Level</option>
                      <option value={5}>Matriculated</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label>My Major*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/major.svg" alt="" />
                    <select className="select1">
                      <option value={0}>Science</option>
                      <option value={1}>Arts</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="institute">Institute/University*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/univercity.svg" alt="" />
                    <input
                      type="text"
                      id="institute"
                      placeholder="Type Your Institute Name..."
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-30">
                  <label htmlFor="gpa">Result/GPA**</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/gpa-2.svg" alt="" />
                    <input type="text" id="gpa" placeholder="4.75/5" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-20">
                  <label htmlFor="datepicker10">Starting Period*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/calender2.svg" alt="" />
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      placeholderText="Check In"
                      className="calendar"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-20">
                  <label htmlFor="datepicker11">Ending Period*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/calender2.svg" alt="" />
                    <DatePicker
                      selected={startDate1}
                      onChange={(date) => setStartDate1(date)}
                      placeholderText="Check In"
                      className="calendar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {index !== 0 && (
            <div className="add-row">
              <button
                className="remove-education-row remove"
                onClick={() => handleRemove(index, event)}
              >
                Remove Education Area
              </button>
            </div>
          )}
          <div className="add-remove-btn d-flex align-items-center justify-content-between">
            <div className="add-row">
              <button
                onClick={handleAdd}
                type="button"
                className="add-education-row"
              >
                Add Education+
              </button>
            </div>
          </div>
        </form>
      ))}
    </div>
  );
}

export default EducatonRepeterForm;
