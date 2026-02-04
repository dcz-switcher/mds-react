import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Breadcrumb from './Breadcrumb';
import { Link } from '../Link';

const meta = {
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <Breadcrumb>
      <Link href='#' variant='body4'>Link 1</Link>
      <Link variant='body4' aria-current="page">Link 2</Link>
    </Breadcrumb>
  )
};

export const Reverse: Story = {
  args: {
    title: "Vous êtes ici :"
  },
  render: (args) => (
    <div className='mds-background-color__color-macif--1'>
      <Breadcrumb reverse={true} title={args.title}>
        <Link href='#' variant='body4' reverse={true}>Link 1</Link>
        <Link variant='body4' aria-current="page" reverse={true}>Link 2</Link>
      </Breadcrumb>
    </div>
  )
};

export const WithTitle: Story = {
  args:{
    title: "Vous êtes là :",
    reverse: false
  },
  render: (args) => (
    <Breadcrumb title={args.title} reverse={args.reverse}>
      <Link href='#' variant='body4' reverse={args.reverse}>Link 1</Link>
      <Link variant='body4' aria-current="page" reverse={args.reverse}>Link 2</Link>
    </Breadcrumb>
  )
}