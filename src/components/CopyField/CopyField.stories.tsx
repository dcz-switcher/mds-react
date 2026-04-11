import type { Meta, StoryObj } from '@storybook/react';

import CopyField from './CopyField';

const meta = {
  component: CopyField,
} satisfies Meta<typeof CopyField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "johndoe@email.com"
  }
};