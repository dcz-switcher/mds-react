import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ChipsList from './ChipsList';
import ChipsItem from '../ChipsItem/ChipsItem';

const meta = {
  component: ChipsList,
  subcomponents: { ChipsItem }
} satisfies Meta<typeof ChipsList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ChipsList {...args}>
      <ChipsItem label="One"/>
      <ChipsItem label="Two"/>
      <ChipsItem label="Three"/>
    </ChipsList>
  )
};

export const ReverseMode: Story = {
  render: (args) => (
    <div className='mds-background-color__color-macif--1 mds-squish-inset--8-16'>
      <ChipsList reverse={true}>
        <ChipsItem label="One"/>
        <ChipsItem label="Two"/>
        <ChipsItem label="Three"/>
      </ChipsList>
    </div>
  )
}
