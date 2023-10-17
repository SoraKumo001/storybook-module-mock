import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import React from "react";
import { createMock, getMock, getOriginal } from "storybook-addon-module-mock";
import { MockTest } from "./MockTest";

const meta: Meta<typeof MockTest> = {
  component: MockTest,
};
export default meta;

export const Primary: StoryObj<typeof MockTest> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Before")).toBeInTheDocument();
  },
};

export const Mock: StoryObj<typeof MockTest> = {
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(React, "useMemo");
        mock.mockImplementation((fn: () => unknown, deps: unknown[]) => {
          const value = getOriginal(mock)(fn, deps);
          return value === "Before" ? "After" : value;
        });
        return [mock];
      },
    },
  },
  play: async ({ canvasElement, parameters }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("After")).toBeInTheDocument();
    const mock = getMock(parameters, React, "useMemo");
    expect(mock).toBeCalled();
  },
};

export const Action: StoryObj<typeof MockTest> = {
  parameters: {
    moduleMock: {
      mock: () => {
        const useMemo = React.useMemo;
        const mock = createMock(React, "useMemo");
        mock.mockImplementation(useMemo);
        return [mock];
      },
    },
  },
  play: async ({ canvasElement, parameters }) => {
    const canvas = within(canvasElement);
    const mock = getMock(parameters, React, "useMemo");
    mock.mockImplementation((fn: () => unknown, deps: unknown[]) => {
      const value = getOriginal(mock)(fn, deps);
      return value === "Before" ? "Action" : value;
    });
    userEvent.click(await canvas.findByRole("button"));
    await waitFor(() => {
      expect(canvas.getByText("Action")).toBeInTheDocument();
    });
  },
};
