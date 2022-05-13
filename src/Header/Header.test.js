import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import cases from "jest-in-case";

describe("<Header />", () => {
  cases(
    "props",
    (opts) => {
      render(<Header {...opts.props} />);

      for (const expectation of opts.expectedText) {
        expect(screen.getByText(expectation)).toBeInTheDocument();
      }
    },
    [
      {
        name: "renders loading when in loading state",
        props: { loading: true },
        expectedText: [/loading.../i],
      },
      {
        name: "renders error when provided",
        props: {
          error: true,
        },
        expectedText: [/error/i],
      },
      {
        name: "renders title and body when data provided",
        props: { data: { title: "Hello", body: "Body" } },
        expectedText: [/hello/i, /body/i],
      },
      {
        name: "renders title only when only title is provided in data",
        props: { data: { title: "Hello" } },
        expectedText: [/hello/i],
      },
      {
        name: "partial body only when only body is provided in data",
        props: { data: { body: "Body" } },
        expectedText: [/body/i],
      },
    ]
  );

  describe("standard approach to props", () => {
    it("renders loading when in loading state", () => {
      render(<Header loading />);

      expect(screen.getByText(/loading.../i)).toBeInTheDocument();
    });

    it("renders error when provided", () => {
      render(<Header error />);

      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });

    it("renders title and body when data provided", () => {
      render(<Header data={{ title: "Hello", body: "Body" }} />);

      expect(screen.getByText(/hello/i)).toBeInTheDocument();
      expect(screen.getByText(/body/i)).toBeInTheDocument();
    });

    it("renders title only when only title is provided in data", () => {
      render(<Header data={{ title: "Hello" }} />);

      expect(screen.getByText(/hello/i)).toBeInTheDocument();
    });

    it("partial body only when only body is provided in data", () => {
      render(<Header data={{ body: "Body" }} />);

      expect(screen.getByText(/body/i)).toBeInTheDocument();
    });
  });
});
