import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Pagination from './Pagination';
import { Alert } from '../Alert';
import { Box } from '../Box';

const meta = {
  component: Pagination,
  decorators: [
    (Story) => (
      <div className='mds-container'>
        <div className='mds-row'>
          <div className="mds-col-12">
            <Box className='mds-stack-b--24'>
              <Alert severity='warning'>WORK IN PROGRESS - don't ready yet</Alert>
            </Box>
            <Story />
          </div>
        </div>
      </div>
    )],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {args:{
  count: 10,
}};