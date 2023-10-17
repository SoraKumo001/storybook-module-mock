import { Meta, StoryObj } from "@storybook/react";
import { createMock } from "storybook-addon-module-mock";
import { ReRender } from "./Paths";
// "@/*": ["./src/*"]
import * as message from "@/components/Paths/message";

const meta: Meta<typeof ReRender> = {
  component: ReRender,
};
export default meta;

export const Primary: StoryObj<typeof ReRender> = {};

export const PathMock: StoryObj<typeof ReRender> = {
  parameters: {
    moduleMock: {
      mock: () => {
        const mock = createMock(message, "getMessage");
        mock.mockReturnValue("MockTest");
        return [mock];
      },
    },
  },
};
