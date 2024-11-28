import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../Typography';
import { Button } from '../Button';
import { Icon } from '../Icon';

import Hero from './Hero';

const meta = {
  component: Hero,
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {
  upTitle : <><Icon baseClassName='picto'>magazine</Icon><Typography variant='h6'>Up title here</Typography></>,
  title : <Typography variant="h1">Hero title with <Typography variant="underline" underlineColor='color-7100'>underline</Typography> effect</Typography>,
  subTitle: "Explained why customers should subscribe to your service or buy your product",
  heroActions: <Button endIcon='arrow-forward' variant='primary' color='conversion'>Action button</Button>,
  image: "src/styles/assets/img_580x360.png",
}};