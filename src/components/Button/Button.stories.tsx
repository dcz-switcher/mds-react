import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  component: Button,
  argTypes: {
    children: {
      name: "Text",
      control: {type: "text"}
    }
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "primary",
    children: "Primary",
    size: "medium"
  }

};

export const IsLink: Story = {
  args: {
    variant: "primary",
    children: "Primary",
    size: "medium",
    component: "a",
    href: "https://github.com/dcz-switcher/mds-react",
    target: "_blank"
  }
};