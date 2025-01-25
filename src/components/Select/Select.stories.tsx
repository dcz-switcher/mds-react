import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Select from './Select';
import SelectItem from './SelectItem';
import { Alert } from '../Alert';

const meta = {
  component: Select,
  decorators: [
    (Story) => (
      <div className='mds-row'>
          <Alert severity='warning'>Composant en cours de développement</Alert>
          <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 
    <>
      <SelectItem value='0'>ligne 0</SelectItem>
      <SelectItem value='1'>ligne 1</SelectItem>
      <SelectItem value='2'>ligne 2</SelectItem>
      <SelectItem value='3'>ligne 3</SelectItem>
    </>
  }
};