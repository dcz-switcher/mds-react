import type { Meta, StoryObj } from '@storybook/react';

import CardCompactV from './CardCompactV';

const meta = {
  component: CardCompactV,
} satisfies Meta<typeof CardCompactV>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};