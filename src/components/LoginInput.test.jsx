import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import matchers from "@testing-library/jest-dom";
import LoginInput from "./LoginInput";

expect.extend(matchers);

describe("LoginInput component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should handle email typing correctly", async () => {
    // arrange
    act(() => {
      render(<LoginInput login={() => {}} />);
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
      render(<LoginInput login={() => {}} />);
    });
    const passwordInput = await screen.getByPlaceholderText("Password");

    // action
    await act(async () => {
      await userEvent.type(passwordInput, "12345678");
    });

    // assert
    expect(passwordInput).toHaveValue("12345678");
  });

  it("should call login function when login button is clicked", async () => {
    // arrange
    const mockLogin = jest.fn();

    await act(async () => {
      await render(<LoginInput login={mockLogin} />);
    });

    const emailInput = await screen.getByPlaceholderText("Email");
    const passwordInput = await screen.getByPlaceholderText("Password");
    const formLogin = await screen.getByRole("form");

    // action
    await act(async () => {
      await userEvent.type(emailInput, "test@gmail.com");
      await userEvent.type(passwordInput, "12345678");
      await fireEvent.submit(formLogin);
    });

    // assert
    expect(mockLogin).toHaveBeenCalled();
  });
});
