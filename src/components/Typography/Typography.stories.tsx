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
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is the typography component in action",
    variant: "h2"
  }
};

export const Nested: Story = {
  args: {
    children: "a text nested",
    variant: "body1",
  },
  render: (args) => (
    <Typography variant='h1'>An example of <Typography {...args}>{args.children}</Typography> in another one.
    </Typography>
  )
};

export const Underline: Story = {
  args: {
    children: "with underline",
    variant: "underline",
    underlineColor: "color-4100"
  },
  render: (args) => (
    <Typography variant='h1'>This is a title <Typography {...args}>{args.children}</Typography> effect</Typography>
  )
};

export const WithStyle: Story = {
  render: () => (
    <>
      <Typography style={{}}>This text is normal</Typography>
      <Typography style={{fontWeight: 'bold'}}>This text is bold (set by style=fontWeight:bold)</Typography>
      <Typography style={{fontStyle: 'italic'}}>And this one is italic (set by style=fontStyle:italic)</Typography>
      <Typography color='primary'>And last one is a text with primary brand color (set by props "primary")</Typography>
    </>
  )
}