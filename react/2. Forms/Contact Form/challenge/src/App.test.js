import App from "./App";

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

test("displays error message when fields are empty and submit is clicked", () => {
  render(<App />);
  const submitButton = screen.getByTestId("submit-button");
  fireEvent.click(submitButton);
  const errorMessage = screen.getByTestId("error-message");
  expect(errorMessage.textContent).toBe("All fields are required.");
});

test("displays submitted data when form is submitted with valid inputs", async () => {
  render(<App />);
  const nameInput = screen.getByTestId("name-input");
  const emailInput = screen.getByTestId("email-input");
  const messageInput = screen.getByTestId("message-input");
  const submitButton = screen.getByTestId("submit-button");

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.change(messageInput, { target: { value: "Hello there!" } });

  fireEvent.click(submitButton);

  await waitFor(() => {
    const submittedData = screen.getByTestId("submitted-data");
    expect(submittedData).toBeInTheDocument();
    expect(submittedData).toHaveTextContent("Name: John Doe");
    expect(submittedData).toHaveTextContent("Email: john@example.com");
    expect(submittedData).toHaveTextContent("Message: Hello there!");
  });
});

test("clears input fields after successful submission", () => {
  render(<App />);
  const nameInput = screen.getByTestId("name-input");
  const emailInput = screen.getByTestId("email-input");
  const messageInput = screen.getByTestId("message-input");
  const submitButton = screen.getByTestId("submit-button");

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.change(messageInput, { target: { value: "Hello there!" } });

  fireEvent.click(submitButton);

  expect(nameInput.value).toBe("");
  expect(emailInput.value).toBe("");
  expect(messageInput.value).toBe("");
});
