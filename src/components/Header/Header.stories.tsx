import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';
import HeaderNav from './HeaderNav';
import HeaderNavItem from './HeaderNavItem';
import HeaderNavMenu from './HeaderNavMenu';
import { MenuItem } from '../Menu';
import { Link } from '../Link';

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default"
  }
};



export const Navigation = () => {
    setTimeout(() => {
      window.document.dispatchEvent(new Event('DOMContentLoaded', {
          bubbles: true,
          cancelable: true
      }));
  }, 750);

  const headerNav = <HeaderNav>
    <HeaderNavItem label='Hello' href='/'/>
    <HeaderNavItem label='World'/>
    <HeaderNavMenu label='More...'>
      <MenuItem>
        <Link href='#' underline={false}>Click me</Link>
      </MenuItem>
    </HeaderNavMenu>
  </HeaderNav>

  return (
    <Header headerNav={headerNav} headerNavPosition='inside'/>
  )
}