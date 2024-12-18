import React from 'react';
import type { Meta } from '@storybook/react';

import Toggle from './Toggle';
import { Typography } from '../Typography';

const meta = {
  component: Toggle,
} satisfies Meta<typeof Toggle>;

export default meta;

export const Default = (
  args: {
    label: 'Activation'
  }
) => { 

  const [isActivated, setIsActivated] = React.useState(true);

  const ToggleChangeHandler = () => {
    setIsActivated(!isActivated);
  }

  return (
    <div>
      <Typography>
        {isActivated ? "Activate" : "Desactivate"}
      </Typography>
      <Toggle checked={isActivated} onChange={ToggleChangeHandler} {...args}/>
    </div>
  )
};

export const Reverse = () => {
  const [isActivated, setIsActivated] = React.useState(false);

  const ToggleChangeHandler = () => {
    setIsActivated(!isActivated);
  }

  return (
    <div className='mds-background-color__color-macif--1 mds-stretch-inset--12-8'>
      <Toggle label='Reverse' reverse={true} checked={isActivated} onChange={ToggleChangeHandler}/>
    </div>
  )
}