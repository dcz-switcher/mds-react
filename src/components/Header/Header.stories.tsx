import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';
import HeaderNav from './HeaderNav';
import HeaderNavItem from './HeaderNavItem';
import HeaderNavMenu from './HeaderNavMenu';
import { MenuItem } from '../Menu';
import { List, ListItem, ListItemIcon, ListItemText } from '../List';
import { Icon } from '../Icon';

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    variant: "default",
    headerLogoUrl: "src/styles/assets/logo-saturn.svg",
    headerLogoDesktopUrl: "src/styles/assets/logo-saturn.svg"
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
    <HeaderNavItem label='Hello world' href='/'/>
    <HeaderNavItem label='World'/>
    <HeaderNavMenu label='More...'>
      <MenuItem>
        <List>
          <ListItem>
            <ListItemIcon>
              <Icon baseClassName='picto'>auto</Icon>
            </ListItemIcon>
            <ListItemText title="First one" href='#' />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon baseClassName='picto'>maison</Icon>
            </ListItemIcon>
            <ListItemText title="First two" href='#' />
          </ListItem>
        </List>
      </MenuItem>
    </HeaderNavMenu>
    <HeaderNavMenu label='And more...'>
      <MenuItem>
        <List>
          <ListItem>
            <ListItemIcon>
              <Icon baseClassName='picto'>auto</Icon>
            </ListItemIcon>
            <ListItemText title="First one" href='#' />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon baseClassName='picto'>maison</Icon>
            </ListItemIcon>
            <ListItemText title="First two" href='#' />
          </ListItem>
        </List>
      </MenuItem>
    </HeaderNavMenu>
  </HeaderNav>


  return (
    <Header headerNav={headerNav} headerNavPosition='inside' headerLogoDesktopUrl="src/styles/assets/logo-saturn.svg" headerLogoUrl="src/styles/assets/logo-saturn.svg"/>
  )
}