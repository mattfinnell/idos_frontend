import { setConsoleOptions } from "@storybook/addon-console";
import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    `@storybook/preset-create-react-app`,
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
    "@storybook/addon-console",
    "@storybook/addon-actions",
  ],
  // @ts-ignore
  features: { emotionAlias: false },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};

const panelExclude = setConsoleOptions({}).panelExclude;
setConsoleOptions({
  // @ts-ignore
  panelExclude: [...panelExclude, /deprecated/],
});

export default config;
