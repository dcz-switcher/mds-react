import type { Meta } from '@storybook/react';
import React from 'react';

import Menu from './Menu';
import { Button } from '../Button';
import List from '../List/List';
import ListItem from '../List/ListItem';
import ListItemText from '../List/ListItemText';
import MenuItem from './MenuItem';
import ListItemIcon from '../List/ListItemIcon';
import { Icon } from '../Icon';
import { Divider } from '../Divider';

const meta = {
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

export const Default = ({}) => {
  setTimeout(() => {
      window.document.dispatchEvent(new Event('DOMContentLoaded', {
          bubbles: true,
          cancelable: true
      }));
  }, 1000);

  const AnchorBtn = <Button variant='secondary' className='mds-dropdown__trigger-element' aria-controls='expandable' aria-expanded={false}>Open</Button>;

  return (
    <Menu 
      anchorEl={AnchorBtn}>
      <MenuItem>
        <List>
          <ListItem>
            <ListItemIcon><Icon>person</Icon></ListItemIcon>
            <ListItemText title="Profil" href='#'/>
          </ListItem>
          <ListItem>
            <ListItemIcon><Icon>account-circle</Icon></ListItemIcon>
            <ListItemText title="My account"/>
          </ListItem>
        </List>
      </MenuItem>
      <Divider/>
      <MenuItem>
        <Button variant='tertiary' fullWidth={true}>Disconnect</Button>
      </MenuItem>
    </Menu>
  )
};