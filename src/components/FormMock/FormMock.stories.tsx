import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { createMock, getMock } from "storybook-addon-module-mock";
import { FormMock } from "./FormMock";
import * as login from "./login";

const meta: Meta<typeof FormMock> = {
  title: "Components/FormMock",
  component: FormMock,
  parameters: {
    //  nextRouter: { asPath: '/' },
  },
  args: {},
};
export default meta;

export const Primary: StoryObj<typeof FormMock> = {};

export const Submit: StoryObj<typeof FormMock> = {
  args: {},
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(login);
        return mock;
      },
    },
  },
  play: async ({ canvasElement, parameters }) => {
    const mock = getMock(parameters, login);

    const canvas = within(canvasElement);
    const userInput = await canvas.findByLabelText("User:");
    const passwordInput = await canvas.findByLabelText("Password:");
    await userEvent.type(userInput, "User");
    await userEvent.type(passwordInput, "Password");
    await userEvent.click(await canvas.findByText("Submit"));

    expect(mock.mock.lastCall).toStrictEqual(["User", "Password"]);
  },
};
