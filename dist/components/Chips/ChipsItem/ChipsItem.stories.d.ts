import { default as React } from 'react';
import { StoryObj } from '@storybook/react';
import { default as ChipsItem } from './ChipsItem';
declare const meta: {
    component: typeof ChipsItem;
    decorators: ((Story: import('@storybook/csf').PartialStoryFn<import('@storybook/react').ReactRenderer, {
        label?: string | undefined;
        active?: boolean | undefined;
        onClick?: any;
    }>) => React.JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
