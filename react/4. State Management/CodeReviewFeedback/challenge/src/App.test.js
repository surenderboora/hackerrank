/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("FeedbackSystem Component", () => {
  let getByTestId, queryByTestId;

  beforeEach(() => {
    const app = render(<App />);
    getByTestId = app.getByTestId;
    queryByTestId = app.queryByTestId;
  });

  describe("Initial Page Rendering Tests", () => {
    it("should render all aspects with their upvote and downvote buttons and counts", () => {
      for (let i = 0; i < 5; i++) {
        expect(queryByTestId(`upvote-btn-${i}`)).toBeInTheDocument();
        expect(queryByTestId(`downvote-btn-${i}`)).toBeInTheDocument();
        expect(queryByTestId(`upvote-count-${i}`).textContent).toBe("Upvotes: 0");
        expect(queryByTestId(`downvote-count-${i}`).textContent).toBe("Downvotes: 0");
      }
    });

    it("upvotes and downvotes count for the all aspects should be 0", () => {
      for (let i = 0; i < 5; i++) {
        expect(getByTestId(`upvote-count-${i}`).textContent).toBe("Upvotes: 0");
        expect(getByTestId(`downvote-count-${i}`).textContent).toBe("Downvotes: 0");
      }
    });
  });

  describe("Functionality Tests", () => {
    it("should increment the upvote count for readability when upvote button is clicked", () => {
      fireEvent.click(getByTestId("upvote-btn-0"));
      expect(getByTestId("upvote-count-0").textContent).toBe("Upvotes: 1");
    });

    it("should increment the downvote count for readability when downvote button is clicked", () => {
      fireEvent.click(getByTestId("downvote-btn-0"));
      expect(getByTestId("downvote-count-0").textContent).toBe("Downvotes: 1");
    });

    it("should increment the upvote and downvote counts independently for different aspects", () => {
      fireEvent.click(getByTestId("upvote-btn-0"));
      fireEvent.click(getByTestId("downvote-btn-1"));
      expect(getByTestId("upvote-count-0").textContent).toBe("Upvotes: 1");
      expect(getByTestId("downvote-count-0").textContent).toBe("Downvotes: 0");
      expect(getByTestId("upvote-count-1").textContent).toBe("Upvotes: 0");
      expect(getByTestId("downvote-count-1").textContent).toBe("Downvotes: 1");
    });

    it("should correctly handle multiple clicks on upvote and downvote buttons", () => {
      fireEvent.click(getByTestId("upvote-btn-0"));
      fireEvent.click(getByTestId("upvote-btn-0"));
      fireEvent.click(getByTestId("downvote-btn-0"));
      expect(getByTestId("upvote-count-0").textContent).toBe("Upvotes: 2");
      expect(getByTestId("downvote-count-0").textContent).toBe("Downvotes: 1");
    });
  });
});
