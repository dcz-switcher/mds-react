import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Divider from './Divider';

const meta = {
  component: Divider,
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    component: 'hr',
    variant: 'thin',
    reverse: false
  }
};

export const Reverse: Story = {
  args: {
    component: 'div',
    variant: 'thin',
    reverse: true
  },
  render: (args) => (
    <div className='mds-background-color__color-macif--1 mds-squish-inset--8-16'>
      <Divider {...args} />
    </div>
)
}