import type { Meta, StoryObj } from '@storybook/react';

import Typography from './Typography';

const meta = {
  component: Typography,
  argTypes: {
    children: {
      type: "string"
    }
  }
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a sentence",
    variant: "body1",
    align: "left",
  }
};