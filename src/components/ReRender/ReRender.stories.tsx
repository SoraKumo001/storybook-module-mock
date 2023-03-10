import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { waitFor, within } from "@storybook/testing-library";
import { createMock, getMock, render } from "storybook-addon-module-mock";
import * as message from "./message";
import { ReRender } from "./ReRender";

const meta: ComponentMeta<typeof ReRender> = {
  title: "Components/ReRender",
  component: ReRender,
};
export default meta;

export const Primary: ComponentStoryObj<typeof ReRender> = {};

export const ReRenderTest: ComponentStoryObj<typeof ReRender> = {
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
    mock.mockReturnValue("Test1");
    render(parameters);
    await waitFor(() => {
      expect(canvas.getByText("Test1")).toBeInTheDocument();
    });
    mock.mockReturnValue("Test2");
    render(parameters);
    await waitFor(() => {
      expect(canvas.getByText("Test2")).toBeInTheDocument();
    });
  },
};
