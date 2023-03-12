import { expect } from "@storybook/jest";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { createMock, getMock } from "storybook-addon-module-mock";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { MockTest } from "./MockTest";
import * as _react from "react";

const meta: ComponentMeta<typeof MockTest> = {
  title: "Components/MockTest",
  component: MockTest,
};
export default meta;

export const Primary: ComponentStoryObj<typeof MockTest> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Before")).toBeInTheDocument();
  },
};

export const Mock: ComponentStoryObj<typeof MockTest> = {
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(_react, "useMemo");
        mock.mockReturnValue("After");
        return [mock];
      },
    },
  },
  play: async ({ canvasElement, parameters }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("After")).toBeInTheDocument();
    const mock = getMock(parameters, _react, "useMemo");
    expect(mock).toBeCalled();
  },
};

export const Action: ComponentStoryObj<typeof MockTest> = {
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(_react, "useMemo");
        return [mock];
      },
    },
  },
  play: async ({ canvasElement, parameters }) => {
    const canvas = within(canvasElement);
    const mock = getMock(parameters, _react, "useMemo");
    mock.mockReturnValue("Action");
    userEvent.click(await canvas.findByRole("button"));
    await waitFor(() => {
      expect(canvas.getByText("Action")).toBeInTheDocument();
    });
  },
};
