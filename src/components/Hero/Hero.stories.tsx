import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../Typography';
import { Button } from '../Button';

import Hero from './Hero';

const meta = {
  component: Hero,
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {
  title : <Typography variant="h1">Hero title with <Typography variant="underline">underline</Typography> effect</Typography>,
  subTitle: "Explained why your a custom should subscribe service or buy your product",
  heroActions: <Button endIcon='arrow-forward'>Action button</Button>,
  image: "src/styles/assets/img_580x360.png",
}};