import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
function WorkAreaRepeter() {
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
    <>
      {fields.map((field, index) => (
        <div key={index} className="edit-profile-form profile-form mt-30">
          <div className="section-title2">
            <h5>Working Area:</h5>
          </div>
          <div className="education-row">
            <div className="row">
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label htmlFor="working-field">Working Field*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/company-2.svg" alt="" />
                    <input
                      type="text"
                      id="working-field"
                      name="working-field"
                      placeholder="Frontend Developer"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-inner mb-25">
                  <label>Add Icon*</label>
                  <div className="input-area">
                    <img src="/assets/images/icon/company-2.svg" alt="" />
                    <input type="file" />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-inner mb-40">
                  <label htmlFor="description">Short Description*</label>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Company Details*"
                    defaultValue={""}
                  />
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
        </div>
      ))}
    </>
  );
}

export default WorkAreaRepeter;
