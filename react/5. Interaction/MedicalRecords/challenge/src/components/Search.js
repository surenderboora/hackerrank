import React from "react";
import medical_records from "../medicalRecords";

function Search({ setRecord, setId, id }) {
  return (
    <div className="layout-row align-items-baseline select-form-container">
      <div className="select">
        <select data-testid="patient-name" defaultValue="0">
          <option value="0" disabled>
            Select Patient
          </option>
          <option value={"1"}>{"John Oliver"}</option>
        </select>
      </div>

      <button type="submit" data-testid="show">
        Show
      </button>
    </div>
  );
}

export default Search;
