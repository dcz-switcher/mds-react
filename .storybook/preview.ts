import type { Preview } from "@storybook/react";

import '../src/styles/mds-3.16.2/mds-style.min.css';


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
