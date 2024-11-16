import type { Meta, StoryObj } from '@storybook/react';

import ChipsList from './ChipsList';

const meta = {
  component: ChipsList,
} satisfies Meta<typeof ChipsList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};