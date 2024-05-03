import { Meta, StoryObj } from "@storybook/react";
import * as link from "next/link";
import { createMock, getMock } from "storybook-addon-module-mock";
import { NextHook } from "./NextHook";
import { expect, within } from "@storybook/test";

const meta: Meta<typeof NextHook> = {
  component: NextHook,
  parameters: {
    //  nextRouter: { asPath: '/' },
  },
  args: {},
};
export default meta;

export const Primary: StoryObj<typeof NextHook> = {};

export const Mock: StoryObj<typeof NextHook> = {
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
