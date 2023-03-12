// @ts-check
/**
 * @type { import("@storybook/react/types").StorybookConfig}
 */
module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../src/**/*.stories.@(tsx)"],
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
    "storybook-addon-next",
    "storybook-addon-module-mock",
  ],
  features: {
    //  storyStoreV7: true,
    interactionsDebugger: true,
  },
  typescript: { reactDocgen: "react-docgen" },
};
