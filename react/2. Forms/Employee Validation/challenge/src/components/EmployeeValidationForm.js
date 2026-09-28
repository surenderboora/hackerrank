import React, { useMemo, useState } from "react";

const initialFormValues = {
  name: "",
  email: "",
  employeeId: "",
  joiningDate: "",
};

const initialTouched = {
  name: true,
  email: true,
  employeeId: true,
  joiningDate: true,
};

const onlyDigits = (value = "") => /^\d+$/.test(value.trim());
const isFutureDate = (dateStr = "") => {
  const date = new Date(dateStr);

  if (Number.isNaN(date.getTime())) {
    return true;
  }

  return date.getTime() > new Date(2025, 0, 1).getTime();
};

const validateName = (value = "") => {
  const trimmedValue = value.trim();

  if (trimmedValue.length < 4 || !/^[A-Za-z\s]+$/.test(trimmedValue)) {
    return "Name must be at least 4 characters long and only contain letters and spaces";
  }

  return "";
};

const validateEmail = (value = "") => {
  const trimmedValue = value.trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
    return "Email must be a valid email address";
  }

  return "";
};

const validateEmployeeId = (value = "") => {
  const trimmedValue = value.trim();

  if (trimmedValue.length !== 6 || !onlyDigits(trimmedValue)) {
    return "Employee ID must be exactly 6 digits";
  }

  return "";
};

const validateJoiningDate = (value = "") => {
  const trimmedValue = value.trim();

  if (!trimmedValue || isFutureDate(trimmedValue)) {
    return "Joining Date cannot be in the future";
  }

  return "";
};

const getValidationErrors = (values) => ({
  name: validateName(values.name),
  email: validateEmail(values.email),
  employeeId: validateEmployeeId(values.employeeId),
  joiningDate: validateJoiningDate(values.joiningDate),
});

const isFormValid = (errors) => Object.values(errors).every((error) => !error);

const InputField = ({
  name,
  type,
  placeholder,
  value,
  testId,
  onChange,
  onBlur,
  error,
}) => (
  <div className="layout-column align-items-start mb-10 w-50" data-testid={testId}>
    <input
      className="w-100"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && <p className="error mt-2">{error}</p>}
  </div>
);

function EmployeeValidationForm() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [touched, setTouched] = useState(initialTouched);

  const errors = useMemo(() => getValidationErrors(formValues), [formValues]);
  const formIsValid = isFormValid(errors);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const normalizedValue = value.trim();

    setFormValues((previousValues) => ({
      ...previousValues,
      [name]: normalizedValue,
    }));
    setTouched((previousTouched) => ({
      ...previousTouched,
      [name]: true,
    }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;

    setTouched((previousTouched) => ({
      ...previousTouched,
      [name]: true,
    }));
  };

  const fields = [
    {
      name: "name",
      type: "text",
      placeholder: "Name",
      testId: "input-name",
      value: formValues.name,
      error: touched.name ? errors.name : "",
    },
    {
      name: "email",
      type: "text",
      placeholder: "Email",
      testId: "input-email",
      value: formValues.email,
      error: touched.email ? errors.email : "",
    },
    {
      name: "employeeId",
      type: "text",
      placeholder: "Employee ID",
      testId: "input-employee-id",
      value: formValues.employeeId,
      error: touched.employeeId ? errors.employeeId : "",
    },
    {
      name: "joiningDate",
      type: "date",
      placeholder: "Joining Date",
      testId: "input-joining-date",
      value: formValues.joiningDate,
      error: touched.joiningDate ? errors.joiningDate : "",
    },
  ];

  return (
    <div className="layout-column align-items-center mt-20">
      {fields.map((field) => (
        <InputField
          key={field.name}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          value={field.value}
          testId={field.testId}
          onChange={handleChange}
          onBlur={handleBlur}
          error={field.error}
        />
      ))}
      <button data-testid="submit-btn" type="submit" disabled={!formIsValid}>
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;
