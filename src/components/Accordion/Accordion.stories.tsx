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
      <AccordionItem title='First item expanded' defaultExpanded={true}>
        <Typography variant='body2'>A simple text inside</Typography>
      </AccordionItem>
      <AccordionItem title='Secondary (empty) item'/>
      <AccordionItem title='Third item with Buttons inside'>
        <div className='mds-btn-group'>
          <Button>Button A</Button>
          <Button variant='primary'>Button B</Button>
        </div>
      </AccordionItem>
    </Accordion>
  )
}

export const OnlyOneExpandedAtATime = () => {
  const [expanded, setExpanded] = React.useState('panel1');
  
  const onChangeHandler = (panelId:string) => {
    setExpanded(panelId);
  }


  return (
    <Accordion>
      <AccordionItem id="panel1" title='First item'
          expanded={expanded === 'panel1'} onChange={onChangeHandler}>
        <Typography variant='body2'>A simple text inside</Typography>
      </AccordionItem>

      <AccordionItem id='panel2' title='Secondary item'
          expanded={expanded === 'panel2'} onChange={onChangeHandler}>
        <Typography variant='h3' component='div'>Second one</Typography>
      </AccordionItem>

      <AccordionItem id='panel3' title='Third item with Buttons inside'
          expanded={expanded === 'panel3'} onChange={onChangeHandler}>
        <div className='mds-btn-group'>
          <Button>Button A</Button>
          <Button variant='primary'>Button B</Button>
        </div>
      </AccordionItem>
    </Accordion>
  )
}
