import React from "react";
import matchers from "@testing-library/jest-dom/";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import RegisterInput from "./RegisterInput";

expect.extend(matchers);

describe("RegisterInput component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should handle email typing correctly", async () => {
    // arrange
    act(() => {
      render(<RegisterInput register={() => {}} />);
    });
    const emailInput = await screen.getByPlaceholderText("Email");

    // action
    await act(async () => {
      await userEvent.type(emailInput, "test@gmail.com");
    });

    // assert
    expect(emailInput).toHaveValue("test@gmail.com");
  });

  it("should handle password typing correctly", async () => {
    // arrange
    act(() => {
      render(<RegisterInput register={() => {}} />);
    });
    const passwordInput = await screen.getByPlaceholderText("Password");

    // action
    await act(async () => {
      await userEvent.type(passwordInput, "12345678");
    });

    // assert
    expect(passwordInput).toHaveValue("12345678");
  });

  it("should call register function when register button is clcicked", async () => {
    // arrange
    const mockRegister = jest.fn();

    act(() => {
      render(<RegisterInput register={mockRegister} />);
    });

    const emailInput = await screen.getByPlaceholderText("Email");
    const passwordInput = await screen.getByPlaceholderText("Password");
    const formRegister = await screen.getByRole("form");

    // action
    await act(async () => {
      await userEvent.type(emailInput, "test@gmail.com");
      await userEvent.type(passwordInput, "12345678");
      await fireEvent.submit(formRegister);
    });

    // asssert
    expect(mockRegister).toHaveBeenCalled();
  });
});
