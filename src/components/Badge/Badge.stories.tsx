import type { Meta, StoryObj } from '@storybook/react';

import Badge from './Badge';

const meta = {
  component: Badge,
  argTypes: {
    color: {
      name: "Color token override",
      control: "text"
    }
  }
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    size: "small",
    severity: "neutral"
  }
};