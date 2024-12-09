import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Summary from './Summary';
import { Link } from '../Link';

const meta = {
  component: Summary,
} satisfies Meta<typeof Summary>;

export default meta;

type Story = StoryObj<typeof meta>;

const RenderSummary = () => {
  return (
    <Summary>
      <Link variant='body3' href='#section1'>Accident de travail : définition</Link>
      <Link variant='body3' href='#section2'>Accident de travail : que faire ?</Link>
      <Link variant='body3' href='#section3'>Accident de travail et salaire : comment ça marche ?</Link>
      <Link variant='body3' href='#section4'>La rente d'accident de travail : c'est quoi ?</Link>
    </Summary>
  )
}

export const Default: Story = {
  render: () => <RenderSummary />
};