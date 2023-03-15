import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { createMock, getMock } from "storybook-addon-module-mock";
import { FormMock } from "./FormMock";
import * as login from "./login";

const meta: ComponentMeta<typeof FormMock> = {
  title: "Components/FormMock",
  component: FormMock,
  parameters: {
    //  nextRouter: { asPath: '/' },
  },
  args: {},
};
export default meta;

export const Primary: ComponentStoryObj<typeof FormMock> = {};

export const Submit: ComponentStoryObj<typeof FormMock> = {
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
    userEvent.type(userInput, "User");
    userEvent.type(passwordInput, "Password");
    userEvent.click(await canvas.findByText("Submit"));
    expect(mock.mock.lastCall).toStrictEqual(["User", "Password"]);
  },
};
