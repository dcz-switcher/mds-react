import type { Meta, StoryObj } from '@storybook/react';

import ProgressLinear from './ProgressLinear';

const meta = {
  component: ProgressLinear,
} satisfies Meta<typeof ProgressLinear>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {value : 25}};