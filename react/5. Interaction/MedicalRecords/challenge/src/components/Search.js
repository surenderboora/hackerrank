import React from "react";
import medical_records from "../medicalRecords";

function Search({ setRecord, setId, id }) {
  const records = medical_records.map((rec) => {
    return <option key={rec.id} value={rec.data[0].userId}> {rec.data[0].userName} </option>;
  });

  const updateSelectedRecord = (e) => {
    const recordId = e.target.value;
    // console.log(recordId);
    const record = medical_records.find((r) => r.id == recordId);
    setRecord(record)
    setId(recordId);
  }
  const showAlert = (e) => {
    e.preventDefault();
    console.log("selected id is ", id);
    console.log("showalert called with ")
    if (!!id) {
      // console.log(!!id)
      alert("Please select a patient name");
    } else {
      
    }
    return
  }
  return (
    <div className="layout-row align-items-baseline select-form-container">
      <div className="select">
        <select data-testid="patient-name" defaultValue="0" onChange={updateSelectedRecord}>
          <option value="0" disabled>
            Select Patient
          </option>
          {records}
        </select>
      </div>

      <button type="submit" data-testid="show" onClick={(e) => showAlert(e)}>
        Show
      </button>
    </div>
  );
}

export default Search;
