import type { Preview } from '@storybook/react';
import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
    },
    docs: {
      source: {
        type: 'code',
      },
    },
    layout: 'centered',
  },
};

export default preview;
