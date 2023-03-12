import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { createMock, getMock } from "storybook-addon-module-mock";
import { LibHook } from "./LibHook";
import * as message from "./message";

const meta: ComponentMeta<typeof LibHook> = {
  title: "Components/LibHook",
  component: LibHook,
};
export default meta;

export const Primary: ComponentStoryObj<typeof LibHook> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Before")).toBeInTheDocument();
  },
};

export const Mock: ComponentStoryObj<typeof LibHook> = {
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(message, "getMessage");
        mock.mockReturnValue("After");
        return [mock];
      },
    },
  },
  play: async ({ canvasElement, parameters }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("After")).toBeInTheDocument();
    const mock = getMock(parameters, message, "getMessage");
    expect(mock).toBeCalled();
  },
};

export const Action: ComponentStoryObj<typeof LibHook> = {
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(message, "getMessage");
        return [mock];
      },
    },
  },
  play: async ({ canvasElement, parameters }) => {
    const canvas = within(canvasElement);
    const mock = getMock(parameters, message, "getMessage");
    mock.mockReturnValue("Action");
    userEvent.click(await canvas.findByRole("button"));
    await waitFor(() => {
      expect(canvas.getByText("Action")).toBeInTheDocument();
    });
  },
};
