import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Box from './Box';
import { Typography } from '../Typography';

const meta = {
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {
  className: 'mds-background-color__color-4100 mds-squish-inset--12-24',
  children: <Typography variant='h4'>A simple box with padding and background color</Typography>
}};