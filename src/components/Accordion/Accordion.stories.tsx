import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

const meta = {
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {args: {
  children : (
    <>
      <AccordionItem title='First item'/>
      <AccordionItem title='Secondary item'/>
      <AccordionItem title='Third item'/>
    </>
  )
}};