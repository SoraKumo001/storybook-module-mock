import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  stories: ["../src/**/*.stories.@(tsx)"],
  build: {
    test: {
      disabledAddons: [
        "@storybook/addon-docs",
        "@storybook/addon-essentials/docs",
      ],
    },
  },
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-coverage",
      options: {
        istanbul: {
          exclude: ["**/components/**/index.ts"],
        },
      },
    },
    {
      name: "storybook-addon-module-mock",
      options: {
        include: [/login/, /message/, "**/action.*"],
        exclude: ["**/node_modules/**"],
      },
    },
  ],
};

export default config;
