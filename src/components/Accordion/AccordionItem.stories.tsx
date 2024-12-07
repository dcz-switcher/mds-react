import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import AccordionItem from './AccordionItem';
import Accordion from './Accordion';

const meta = {
  component: AccordionItem,
  decorators: [
    (Story) => (
      <Accordion>
        <Story />
      </Accordion>
    )
  ],
} satisfies Meta<typeof AccordionItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};