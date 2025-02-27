import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import SidePanel from './SidePanel';
import { Button } from '../Button';
import { Alert } from '../Alert';
import { Typography } from '../Typography';
import SidePanelContent from './SidePanelContent';
import SidePanelFooter from './SidePanelFooter';
import { CardCompactV } from '../CardCompactV';

const meta = {
  component: SidePanel,
} satisfies Meta<typeof SidePanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default= () => {
  const [isOpen, setIsOpen] = React.useState(false)
  
  const onCloseHandler = () => {
    setIsOpen(false);
  }

  return (
    <>
      <SidePanel open={isOpen} onClose={onCloseHandler} size='medium' title='Hello' visuallyHideTitle={true}>
        <SidePanelContent>
          <Typography variant='body2'>Here is the basic Side Panel. Usefull for a menu</Typography>
          <Typography variant='body2'>The title is visually hidden but available for screen readers</Typography>
        </SidePanelContent>
      </SidePanel>
      <div>
        <Alert>You can close the Side panel with: esc key or by clicking on the backdrop</Alert>
      </div>
      <div>
        <Button onClick={() => setIsOpen(true)}>Open SidePanel</Button>
      </div>
      <div>
        <CardCompactV title='body is scrollable'/>
        <CardCompactV title='body is scrollable'/>
        <CardCompactV title='body is scrollable'/>
        <CardCompactV title='body is scrollable'/>
        <CardCompactV title='body is scrollable'/>
        <CardCompactV title='body is scrollable'/>
        <CardCompactV title='body is scrollable'/>
        <CardCompactV title='body is scrollable'/>
        <CardCompactV title='body is scrollable'/>
        
      </div>
    </>
  )
}

const RenderFull = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  
  const onCloseHandler = () => {
    setIsOpen(false);
  }

  return (
    <>
    <Button onClick={() => setIsOpen(true)}>Open SidePanel</Button>

    <SidePanel open={isOpen} onClose={onCloseHandler} showCloseButton={true} title='Full panel' icon='settings'>
      <SidePanelContent>
        <Typography variant='h3'>Example of a complete Side Panel</Typography>
        <Typography variant='body2'>You can add a title with an icon</Typography>
        <Typography variant='body2'>A close button can be added to close the side panel</Typography>
        <Typography variant='body2'>You can also add a footer components with, for example, a group of buttons (mds-btn-group) </Typography>
      </SidePanelContent>
      <SidePanelFooter>
        <div className='mds-btn-group'>
          <Button variant='secondary'>Button A</Button>
          <Button>Button B</Button>
        </div>
      </SidePanelFooter>
    </SidePanel>
    </>
  )
}

export const Full:Story =  {
  render : () => <RenderFull />
}