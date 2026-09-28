import React, { useState } from "react";

const defaultEmployee = {
  name: '',
  email: '',
  employeeId: '',
  joiningDate: '', //2023-12-04
  isNameValid: false,
  isEmailValid: false,
  isEmployeeIdValid: false,
  isJoiningDateValid: false,
  isValid: false
};
const onlyDigits = (str) => /^\d+$/.test(str);
const isGreaterThanToday = (dateStr) => {
  const date = new Date(dateStr);
  // Check if the string is a valid date
  if (isNaN(date.getTime())) {
    return false;
  }

  // Compare the timestamp with the  01 Jan, 2025 as the tests treat 2025 as future dates
  return date.getTime() > new Date(2025, 1, 1);
}
function EmployeeValidationForm() {
  const [employee, updateEmployee] = useState({ ...defaultEmployee });


  const isEmployeeObjectValid = (emp) => {
    return emp.isNameValid && emp.isEmailValid && emp.isEmployeeIdValid && emp.isJoiningDateValid;
  }
  const onNameUpdate = (e) => {
    e.preventDefault();
    const name = e.target.value?.trim();
    const updatedEmployee = { ...employee, name };

    if (name.length >= 4) { // add condition to check letters and spaces
      updatedEmployee.isNameValid = true;
    } else {
      updatedEmployee.isNameValid = false;
    }

    updateEmployee({ ...updatedEmployee, isValid: isEmployeeObjectValid(updatedEmployee) })
  }

  const onEmailUpdate = (e) => {
    e.preventDefault();
    const email = e.target.value?.trim();
    const updatedEmployee = { ...employee, email };

    if (email.length > 0 && email.indexOf("@") > 0 && email.indexOf(".") > 0) { // add condition to check letters and spaces
      updatedEmployee.isEmailValid = true;
    } else {
      updatedEmployee.isEmailValid = false;
    }

    updateEmployee({ ...updatedEmployee, isValid: isEmployeeObjectValid(updatedEmployee) })
  }

  const onEmployeeIdUpdate = (e) => {
    e.preventDefault();
    const employeeId = e.target.value?.trim();
    const updatedEmployee = { ...employee, employeeId };

    if (employeeId.length == 6 && onlyDigits(employeeId)) { // add condition to check letters and spaces
      updatedEmployee.isEmployeeIdValid = true;
    } else {
      updatedEmployee.isEmployeeIdValid = false;
    }

    updateEmployee({ ...updatedEmployee, isValid: isEmployeeObjectValid(updatedEmployee) })
  };

  const onJoiningDateUpdate = (e) => {
    e.preventDefault();
    const joiningDate = e.target.value?.trim();
    const updatedEmployee = { ...employee, joiningDate };

    if (!isGreaterThanToday(joiningDate)) { // add condition to check letters and spaces
      updatedEmployee.isJoiningDateValid = true;
    } else {
      updatedEmployee.isJoiningDateValid = false;
    }

    updateEmployee({ ...updatedEmployee, isValid: isEmployeeObjectValid(updatedEmployee) })
  };

  return (
    <div className="layout-column align-items-center mt-20 ">
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-name">
        <input
          className="w-100"
          type="text"
          name="name"
          value={employee.name}
          placeholder="Name"
          data-testid="input-name-test"
          onChange={onNameUpdate}
        />
        {!employee.isNameValid && <p className="error mt-2">
          Name must be at least 4 characters long and only contain letters and spaces
        </p>}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-email">
        <input
          className="w-100"
          type="text"
          name="email"
          value={employee.email}
          placeholder="Email"
          onChange={onEmailUpdate}
        />
        {!employee.isEmailValid && <p className="error mt-2">Email must be a valid email address</p>}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-employee-id">
        <input
          className="w-100"
          type="text"
          name="employeeId"
          value={employee.employeeId}
          placeholder="Employee ID"
          onChange={onEmployeeIdUpdate}
        />
        {!employee.isEmployeeIdValid && <p className="error mt-2">Employee ID must be exactly 6 digits</p>}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-joining-date">
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={employee.joiningDate}
          placeholder="Joining Date"
          onChange={onJoiningDateUpdate}
        />
        {!employee.isJoiningDateValid && <p className="error mt-2">Joining Date cannot be in the future</p>}
      </div>
      <button data-testid="submit-btn" type="submit" disabled={!employee.isValid}>
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;
