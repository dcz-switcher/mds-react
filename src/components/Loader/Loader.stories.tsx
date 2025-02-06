import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Loader from './Loader';
import { Box } from '../Box';

const meta = {
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Reverse = () => {
  return (
    <Box className='mds-background-color__color-macif--1 mds-inset--16'>
      <Loader reverse={true}/>
    </Box>
  )
};