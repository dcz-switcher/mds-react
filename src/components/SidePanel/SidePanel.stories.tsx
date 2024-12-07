import React from 'react';
import type { Meta } from '@storybook/react';

import SidePanel from './SidePanel';
import { Button } from '../Button';
import { Alert } from '../Alert';
import { Typography } from '../Typography';

const meta = {
  component: SidePanel,
} satisfies Meta<typeof SidePanel>;

export default meta;

/*
export const Default: Story = {
  args: {open : false}
};
*/
export const HandlingClose= () => {
  const [isOpen, setIsOpen] = React.useState(false)
  
  const onCloseHandler = () => {
    setIsOpen(false);
  }

  const footerComponent = (
    <div className='mds-btn-group'>
      <Button variant='secondary'>Button 1</Button>
      <Button>Button 2</Button>
    </div>
  );


  return (
    <>
      <div>
        <Alert>You can close the Side panel with: esc key, close btn or by clicking on the backdrop</Alert>
      </div>
      <div>
        <Button onClick={() => setIsOpen(true)}>Open SidePanel</Button>

        <SidePanel open={isOpen}
                titleIcon='settings'
                title='Title of the SidePanel'
                onClose={onCloseHandler} 
                size='medium'
                footer={footerComponent}>
          <Typography variant='body2'>Content of the Side Panel</Typography>
        </SidePanel>
      </div>
    </>
  )
}