import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import TextField from './TextField';
import { Typography } from '../Typography';

const meta = {
  component: TextField,
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Basic textField",
    optionalText: "optional",
    supportingText: "You can add supported text here"
  }
};

export const MoreExamples = () => {
  setTimeout(() => {
    window.document.dispatchEvent(new Event('DOMContentLoaded', {
        bubbles: true,
        cancelable: true
    }));
  }, 1000);
  return (
    <>
    <div className='mds-stack-b--48'>
      <TextField 
        label='Basic'
        supportingText='With error message'
        required={true}
        error={true}
        errorText='Something is wrong'
        />
    </div>
    <div className='mds-stack-b--48'>
      <TextField
        label='Phone number' 
        supportingText='With auto layout and validation'
        required={true}
        type='tel'
        startIcon='call'
        />
    </div>
    <div className='mds-stack-b--48'>
      <TextField
        label='Weight' 
        required={true}
        type='text'
        endAdornment={<Typography>Kg</Typography>}
        />
    </div>
    <div className='mds-stack-b--48'>
      <TextField
        label='Password'
        supportingText='With a button to show characters'
        required={true}
        type='password'
        />
    </div>
    <div className='mds-stack-b--48'>
      <TextField
        label='Time' 
        required={true}
        type='time'
        />
    </div>

    </>
  )
};

export const Reverse = () => {
  return (
    <div className='mds-background-color__color-macif--1 mds-stretch-inset--12-8'>
      <TextField label='In reverse' reverse={true} />
    </div>
  )
};
