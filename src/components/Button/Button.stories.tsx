import React, { Children } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  component: Button,
  argTypes: {
    children: {
      name: "Text",
      control: {type: "text"}
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {args: {
  children: "Button", variant : "primary"
}};

export const Secondary: Story = {
  args: {
    children: "Button", variant : "secondary"
  }
}

export const WithEvent: Story = {
  args: {
    children: "Button with click"
  },
  render : (args) => (
    <Button {...args} onClick={()=> alert('clicked')}>{args.children}</Button>
  )
}