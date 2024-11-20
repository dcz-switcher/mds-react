import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ChipsList from './ChipsList';
import ChipsItem from '../ChipsItem/ChipsItem';

const meta = {
  component: ChipsList,
  subcomponents: { ChipsItem:ChipsItem as React.ComponentType<unknown>  }, // syntaxe for avoid typescript error. source: https://github.com/storybookjs/storybook/issues/23170
  tags: ['autodocs'],
} satisfies Meta<typeof ChipsList>;

export default meta;

type Story = StoryObj<typeof meta>;

const chipsDataSet = [
  {id: 1, label: "One", active: true, onClick: function () {alert("You clicked me ?")}},
  {id: 2, label: "Two", active: false},
  {id: 3, label: "Three", active: false},
]

export const Default: Story = {
  render: (args) => (
    <ChipsList {...args}>
      {
        chipsDataSet.map((data) => {
          return (
            <ChipsItem {...data} />      
          )
        })
      }
    </ChipsList>
  )
};

export const ReverseMode: Story = {
  render: (args) => (
    <div className='mds-background-color__color-macif--1 mds-squish-inset--8-16'>
      <ChipsList reverse={true}>
      {
        chipsDataSet.map((data) => {
          return (
            <ChipsItem {...data} />      
          )
        })
      }
      </ChipsList>
    </div>
  )
}
