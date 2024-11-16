import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Typography from './Typography';

const meta = {
  component: Typography,
  argTypes: {
    children: {
      type: "string"
    },
    component: {
      control: "select",
      options: ["span", "p", "div", "h1", "h2", "h3", "h4", "h5", "h6"]
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

export const NestedTypography: Story = {
  render: (args) => (
    <Typography variant='h1'>
      Parent typography <Typography variant='body1' component='span'>Nested Typography</Typography>
    </Typography>
  )
}

export const UnderlineFx: Story = {
  render: (args) => (
    <div>
      <Typography variant='h1'>Title H1 with <Typography variant='underline'>underline</Typography> effect</Typography>
    </div>
    
  )
}