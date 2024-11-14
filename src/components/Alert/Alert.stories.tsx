import type { Meta, StoryObj } from '@storybook/react';

import Alert from './Alert';

const meta = {
  component: Alert,
  argTypes: {
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
  title: "", children: "", severity: "info"
}};