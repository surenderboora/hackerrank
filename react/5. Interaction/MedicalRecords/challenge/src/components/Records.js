import React from "react";
import medical_records from "../medicalRecords";

function Records({ record, setRecord }) {
  let rows = [];
  const getDateString = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDate = new Intl.DateTimeFormat('en-GB').format(date);
    return formattedDate;
  }
  if (record) {
    rows = record.data.map((r, i) => <tr>
      <td>{i+1}</td>
      <td>{getDateString(r.timestamp)}</td>
      <td>{r.diagnosis.name}</td>
      <td>{r.meta.weight}</td>
      <td>{r.doctor.name}</td>
    </tr>
    );
  }
  const onNextClick = (e) => {
    let record_index = -1;
    let next_record = null;
    // Find current record index
    for(let i =0; i< medical_records.length; i++) {
      if (medical_records[i].id == record.id) {
        record_index = i;
      }
    }
    // Find next record
    if (medical_records.length === record_index + 1) {
      next_record = medical_records[0];
    } else {
      next_record = medical_records[record_index+1];
    }
    // Set next record in state
    setRecord({
      ...next_record
    });
  }
  return (
    <div className="patient-profile-container" id="profile-view">
      <div className="layout-row justify-content-center">
        {record && <div id="patient-profile" data-testid="patient-profile" className="mx-auto">
          <h4 id="patient-name">{record?.data[0].userName}</h4>
          <h5 id="patient-dob">DOB: {record?.data[0].userDob}</h5>
          <h5 id="patient-height">Height: {record?.data[0].meta.height} cm</h5>
        </div>
        }

        {record && <button className="mt-10 mr-10" data-testid="next-btn" onClick={onNextClick}>
          Next
        </button> }
      </div>

      {record && <table id="patient-records-table">
        <thead id="table-header">
          <tr>
            <th>SL</th>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Weight</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody id="table-body" data-testid="patient-table">
          {rows}
        </tbody>
      </table>
}
    </div>
  );
}

export default Records;
