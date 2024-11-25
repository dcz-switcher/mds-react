import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Link from './Link';

const meta = {
  component: Link,
  argTypes: {
    children: {
      name: "Text",
      control: {type: "text"}
    }
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {args: {
  children: "I'm a link",
  variant: "body2",
  underline: true,
  reverse: false,
  href: "#"
}};

export const Reverse: Story = {
  args : {
    children: "I'm a link in reverse mode",
    variant: "body2",
    underline: true,
    reverse: true,
    href: "#"
  },
  render: (args) => (
    <div className='mds-background-color__color-macif--1 mds-squish-inset--8-16'>
      <Link {...args}>{args.children}</Link>
    </div>
  )
};