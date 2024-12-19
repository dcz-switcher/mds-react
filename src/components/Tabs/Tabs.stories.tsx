import type { Meta } from '@storybook/react';
import React from 'react';

import Tabs from './Tabs';
import TabList from './TabList';
import Tab from './Tab';
import TabPanelList from './TabPanelList';
import TabPanel from './TabPanel';
import { Typography } from '../Typography';
import { Link } from '../Link';
import { Button } from '../Button';

const meta = {
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

export const Default = () => {
  setTimeout(() => {
    window.document.dispatchEvent(new Event('DOMContentLoaded', {
        bubbles: true,
        cancelable: true
    }));
}, 1000);

  return (
    <Tabs>
      <TabList>
        <Tab label='Tab one'></Tab>
        <Tab label='Tab two'></Tab>
      </TabList>
      <TabPanelList>
        <TabPanel>
          <Typography variant='h2'>Panel One</Typography>
          <Typography variant='body2'>Your content here</Typography>
          <Link href='#'>Just a link</Link>
        </TabPanel>
        <TabPanel>
          <Typography variant='h2'>Panel two</Typography>
          <Typography variant='body2'>Your content here</Typography>
          <div className='mds-stack--12'>
            <Button variant='secondary'>Secondary</Button>
          </div>
        </TabPanel>
      </TabPanelList>
    </Tabs>
  )
}