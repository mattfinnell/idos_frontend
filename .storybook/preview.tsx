import { withConsole } from "@storybook/addon-console";
import type { Preview } from "@storybook/react";

import { initialize as mswInitializer, mswLoader } from "msw-storybook-addon";

// Initialize Mock Service Worker (MSW)
mswInitializer();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    decorators: [(storyFn, context) => withConsole()(storyFn)(context)],
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
