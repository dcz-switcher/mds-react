import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  component: Button,
  argTypes: {
    children: {
      name: "Text",
      control: {type: "text"}
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {
  children: "Button", variant : "secondary"
}};

export const WithEvent: Story = {
  render : (args) => (
    <Button onClick={()=> alert('clicked')}>Click me</Button>
  )
}