import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Pushout from './Pushout';
import { Typography } from '../Typography';
import { Link } from '../Link';
import { Button } from '../Button';

const meta = {
  component: Pushout,
} satisfies Meta<typeof Pushout>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {args: {
  title: <Typography variant='h2' color="white">This is my <Typography variant='underline' underlineColor='color-bleu-macif--20'>underlined</Typography> title</Typography>,
  desc: <Typography color='white'>Here is the content of the card</Typography>,
  action: <Link reverse={true} href='#'>I want to see more</Link>,
  image: 'http://localhost:6006/src/styles/assets/img_580x360.png',
  flip: false
}};


export const Flipped: Story = {args: {
  title: <><Typography framed component='h3'>AWESOME PRODUCT</Typography><Typography variant='h2'>This is my <Typography variant='underline' >underlined</Typography> title</Typography></>,
  desc: <Typography >Here is the content of the card</Typography>,
  action: <Button>Subscribe</Button>,
  flip: true,
  image: 'http://localhost:6006/src/styles/assets/img_580x360.png',
  className: 'mds-background-color__color-white'
}};

