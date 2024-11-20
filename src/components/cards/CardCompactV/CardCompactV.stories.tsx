import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import CardCompactV from './CardCompactV';

const meta = {
  component: CardCompactV,
  decorators: [
    (Story) => (
      <div className="mds-col-12 mds-col-sm-6 mds-col-md-2">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof CardCompactV>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title : "Card title",
    icon: "maison"
  }
};