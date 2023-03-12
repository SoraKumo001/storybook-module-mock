import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import * as link from "next/link";
import { createMock, getMock } from "storybook-addon-module-mock";
import { NextHook } from "./NextHook";

const meta: ComponentMeta<typeof NextHook> = {
  title: "Components/NextHook",
  component: NextHook,
  parameters: {
    //  nextRouter: { asPath: '/' },
  },
  args: {},
};
export default meta;

export const Primary: ComponentStoryObj<typeof NextHook> = {};

export const Mock: ComponentStoryObj<typeof NextHook> = {
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(link);
        mock.mockReturnValue(<div>After</div>);
        return [mock];
      },
    },
  },
  play: async ({ canvasElement, parameters }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("After")).toBeInTheDocument();
    const mock = getMock(parameters, link);
    expect(mock).toBeCalled();
  },
};
