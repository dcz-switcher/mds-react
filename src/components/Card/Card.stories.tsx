import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Card from './Card';
import CardMedia from './CardMedia';
import { Link } from '../Link';
import { IconButton } from '../IconButton';

const meta = {
  component: Card,
  decorators: [
    (Story) => (
      <div className='mds-row'>
        <div className="mds-col-12 mds-col-sm-6 mds-col-md-3">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {
  title: 'This is a card',
  subTitle: "hello",
  variant: 'basic1',
  cardMedia: <CardMedia src='src/styles/assets/img_580x360.png' />
}};

export const Compact = () => {
  return (
    <Card
      title='Compact card'
      variant='compactV'
      cardMedia= {<CardMedia component='picto' icon='auto'/>}
      href='#'
     />
  )
}

export const Modulable = () => {
  return (
    <Card
      title='Compact card'
      variant='modulable'
      cardMedia= {<CardMedia src='src/styles/assets/img_580x360.png' />}
      cardHeader= {<IconButton icon='favorite' label='Ajouter aux favoris' variant='tertiary' size='small'/>}
      href='#'
     >
      <Link>Read more</Link>
     </Card>
  )
}