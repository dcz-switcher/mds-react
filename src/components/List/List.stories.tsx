import type { Meta } from '@storybook/react';
import React from 'react';

import List from './List';
import ListItem from './ListItem';
import ListItemIcon from './ListItemIcon';
import { Icon } from '../Icon';
import ListItemText from './ListItemText';

const meta = {
  component: List,
} satisfies Meta<typeof List>;

export default meta;


export const Default= ({}) => {
  return (
    <List>
      <ListItem secondaryAction={<Icon size='small'>chevron-right</Icon>}>
        <ListItemIcon><Icon>calendar-today</Icon></ListItemIcon>
        <ListItemText primary="Titre du composant" secondary="Description" headline="Surtitre"/>
      </ListItem>
      <ListItem secondaryAction={<Icon size='small'>chevron-right</Icon>}>
        <ListItemIcon><Icon>calendar-month</Icon></ListItemIcon>
        <ListItemText primary="Titre du 2eme composant" secondary="Description 2" headline="Surtitre 2"/>
      </ListItem>
    </List>
  )
};