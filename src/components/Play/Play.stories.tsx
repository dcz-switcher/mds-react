import type { Meta } from '@storybook/react';
import React from 'react';

import Play from './Play';

const meta = {
  component: Play,
} satisfies Meta<typeof Play>;

export default meta;


export const Default = ({}) => {
  return (
    <Play>Play component</Play>
  )
};