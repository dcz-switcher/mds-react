import React from 'react';
import type { Meta } from '@storybook/react';

import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import { Typography } from '../Typography';
import { Button } from '../Button';

const meta = {
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

export const Default = () => {
  return (
    <Accordion>
      <AccordionItem title='First item expanded' expanded={true}>
        <Typography variant='body2'>A simple text inside</Typography>
      </AccordionItem>
      <AccordionItem title='Secondary (empty) item'/>
      <AccordionItem title='Third item with Buttons inside' expanded={true}>
        <div className='mds-btn-group'>
          <Button>Button A</Button>
          <Button variant='primary'>Button B</Button>
        </div>
      </AccordionItem>
    </Accordion>
  )
}
