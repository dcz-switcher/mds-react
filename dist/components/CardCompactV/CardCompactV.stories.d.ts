import { default as React } from 'react';
import { StoryObj } from '@storybook/react';
import { default as CardCompactV } from './CardCompactV';
declare const meta: {
    component: typeof CardCompactV;
    decorators: ((Story: import('@storybook/csf').PartialStoryFn<import('@storybook/react').ReactRenderer, {
        title?: string | undefined;
        icon?: string | undefined;
        href?: string | undefined;
        target?: string | undefined;
    }>) => React.JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
