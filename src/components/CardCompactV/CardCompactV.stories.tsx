import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import CardCompactV from './CardCompactV';

const meta = {
  component: CardCompactV,
  decorators: [
    (Story) => (
      <div className='mds-row'>
        <div className="mds-col-12 mds-col-sm-4 mds-col-md-2">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof CardCompactV>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {
  title: "Véhicules et mobilité"
}};