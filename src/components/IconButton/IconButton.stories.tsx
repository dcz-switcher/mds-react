import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import IconButton from './IconButton';

const meta = {
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon : "favorite-filled",
    label : "favorite",
    reverse: false,
    size: 'medium',
    variant: 'secondary'
  }
};

export const Reverse: Story = {
  args: {
    icon: "favorite-filled",
    label: "favorite",
    reverse: true,
    size: "medium",
    variant: "secondary"
  },
  render: (args) => (
    <div className='mds-background-color__color-macif--1 mds-squish-inset--8-16'>
      <IconButton {...args} />
    </div>
  )
};