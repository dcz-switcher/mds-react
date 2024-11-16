import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ChipsItem from './ChipsItem';
import ChipsList from '../ChipsList/ChipsList';

const meta = {
  component: ChipsItem,
  decorators: [
    (Story) => (
      <ChipsList>
        <Story />
      </ChipsList>
    )
  ]
} satisfies Meta<typeof ChipsItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Chips"
  }
};