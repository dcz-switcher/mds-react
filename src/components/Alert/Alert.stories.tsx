import type { Meta, StoryObj } from '@storybook/react';

import Alert from './Alert';

const meta = {
  component: Alert,
  argTypes: {
    title: {
      name: 'Title (sr only)'
    },
    children: {
      name: 'children',
      control: 'text'
    },
    severity: {
      name: "severity",
      control: 'radio',
      options: ["info", "success", "warning", "danger"]
    }
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is not an exercice",
    severity: "warning"
  }
};

export const WithCloseButton : Story = {
  args: {
    children: "set onClose props to add a close button",
    severity: 'info',
    onClose: (function (){alert('clicked')})
  }
}