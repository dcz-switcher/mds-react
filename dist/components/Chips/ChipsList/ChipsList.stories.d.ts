import { default as React } from 'react';
import { StoryObj } from '@storybook/react';
import { default as ChipsList } from './ChipsList';
declare const meta: {
    component: typeof ChipsList;
    subcomponents: {
        ChipsItem: React.ComponentType<unknown>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
