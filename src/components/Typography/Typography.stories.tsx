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
    },
    underlineColor: {
      name: 'Underline color token',
      type: "string"
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a sentence",
    variant: "body1",
    align: "left"
  },
};

export const NestedTypography: Story = {
  args: {
    variant: 'body1',
    component : 'span',
    children: "Nested Typography"
  },
  render: (args) => (
    <Typography variant='h1'>
      Parent typography <Typography {...args} >{args.children}</Typography>
    </Typography>
  )
}

export const UnderlineFx: Story = {
  args: {
    variant: 'underline',
    underlineColor: 'color-4100',
    children: "underline"
  },
  render: (args) => (
    <div>
      <Typography variant='h1'>Title H1 with <Typography {...args}>{args.children}</Typography> effect</Typography>
    </div>
    
  )
}