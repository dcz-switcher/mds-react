import React from 'react';
import type { Meta } from '@storybook/react';

import SidePanel from './SidePanel';
import { Button } from '../Button';
import { Alert } from '../Alert';

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
  return (
    <>
      <div>
        <Alert>You can close the Side panel with: esc key, close btn or by clicking on the backdrop</Alert>
      </div>
      <div>
        <Button onClick={() => setIsOpen(true)}>Open SidePanel</Button>
        <SidePanel open={isOpen} onClose={onCloseHandler}/>
      </div>
    </>
  )
}