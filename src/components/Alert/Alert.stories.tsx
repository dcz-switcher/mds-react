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
  }
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {
  title: "",
  children: "This is not an exercice but a real alert",
  severity: "info",
  icon: "info"
}};