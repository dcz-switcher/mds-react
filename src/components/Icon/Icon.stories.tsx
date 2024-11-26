import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';

const meta = {
  component: Icon,
  argTypes: {
    children: {
      type: "string"
    },
    color: {
      type: "string"
    }
  }
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {
  children: "person",
  size: "medium"
}};

export const Pictograms: Story = {
  args: {
    children: "chat",
    size: "xlarge",
    baseClassName: "picto"
  }
};