import type { Meta, StoryObj } from '@storybook/react';

import Quote from './Quote';

const meta = {
  component: Quote,
} satisfies Meta<typeof Quote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {
  autor: "Jules César",
  children: "Alea jacta est",
  avatar: 'src/styles/assets/avatar.png'
}};