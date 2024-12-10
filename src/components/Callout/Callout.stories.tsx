import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Callout from './Callout';
import { Button } from '../Button';
import CalloutContent from './CalloutContent';
import CalloutAction from './CalloutAction';

const meta = {
  component: Callout,
} satisfies Meta<typeof Callout>;

export default meta;

type Story = StoryObj<typeof meta>;

const renderContent = () => {
  return (
    <CalloutContent>Only a title and a description. Nothing more</CalloutContent>
  )
}

export const Default: Story = {
  args: {
    title: "the most simple Callout",
    children: renderContent()
  }
};

export const WithAction = {
  render: () => {
    return (
      <Callout title='Callout with an action button' 
              subtitle='Use secondary colors 50% for the background'
              color='color-1050' 
              icon='trophee'>
        <CalloutContent>
          <p className='mds-stack-b--8'>
          the style of the content is set by the component, so you just have to write text inside CalloutContent component.
          </p>
          <p>Button or link must be put in the CalloutAction component</p>
        </CalloutContent>
        <CalloutAction>
          <Button>Action</Button>
        </CalloutAction>
      </Callout>
    )
  }
}