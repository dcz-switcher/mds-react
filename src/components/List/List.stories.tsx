import type { Meta } from '@storybook/react';
import React from 'react';

import List from './List';
import ListItem from './ListItem';
import ListItemIcon from './ListItemIcon';
import { Icon } from '../Icon';
import ListItemText from './ListItemText';
import { IconButton } from '../IconButton';

const meta = {
  component: List,
} satisfies Meta<typeof List>;

export default meta;


export const Default= ({
  boxed = false
}) => {
  return (
    <List boxed={boxed}>
      <ListItem>
        <ListItemIcon><Icon>euro</Icon></ListItemIcon>
        <ListItemText title="Title" supportingText="Supporting text" headline="Headline"/>
      </ListItem>
      <ListItem trailingText='100+'>
        <ListItemIcon><Icon>euro</Icon></ListItemIcon>
        <ListItemText title="Title" href='#'/>
      </ListItem>
      <ListItem secondaryAction={<Icon size='small'>chevron-right</Icon>} trailingText='110€'>
        <ListItemIcon><Icon>calendar-today</Icon></ListItemIcon>
        <ListItemText title="Tile" supportingText="Supporting text" href='https://www.google.com'/>
      </ListItem>
      <ListItem secondaryAction={<IconButton variant='tertiary' label='clik' icon='delete' onClick={() => alert('clicked')}/>}>
        <ListItemIcon><Icon>calendar-month</Icon></ListItemIcon>
        <ListItemText title="Title"/>
      </ListItem>
    </List>
  )
};

export const IsBoxed = ({
  boxed = true
}) => {
  return (
  <List boxed={boxed}>
        <ListItem>
          <ListItemIcon><Icon>euro</Icon></ListItemIcon>
          <ListItemText title="Title" supportingText="Supporting text" headline="Headline"/>
        </ListItem>
        <ListItem trailingText='100+'>
          <ListItemIcon><Icon>euro</Icon></ListItemIcon>
          <ListItemText title="Title" href='#'/>
        </ListItem>
      </List>
  )
}