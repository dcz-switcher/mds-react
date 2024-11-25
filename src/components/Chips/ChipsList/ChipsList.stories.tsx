import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ChipsList from './ChipsList';
import { ChipsItem } from '../ChipsItem';

const meta = {
  component: ChipsList,
  // syntaxe for avoid typescript error. source: https://github.com/storybookjs/storybook/issues/23170
  subcomponents: { ChipsItem:ChipsItem as React.ComponentType<unknown>  },
} satisfies Meta<typeof ChipsList>;

export default meta;

type Story = StoryObj<typeof meta>;

const chipsDataSet = [
  {id: 1, label: "One", active: true},
  {id: 2, label: "Two", active: false},
  {id: 3, label: "Three", active: false},
  {id: 4, label: "Click me", active: false, onClick: function () {alert("You clicked me ?")}},
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