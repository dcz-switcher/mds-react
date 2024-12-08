import { default as React } from 'react';
import { StoryObj } from '@storybook/react';
declare const meta: {
    component: ({ title, children, defaultExpanded, expanded, expandIcon }: import('./AccordionItem').AccordionItemProps) => React.JSX.Element;
    decorators: ((Story: import('@storybook/csf').PartialStoryFn<import('@storybook/react').ReactRenderer, {
        title?: string | undefined;
        children?: React.ReactNode;
        defaultExpanded?: boolean | undefined;
        expanded?: boolean | undefined;
        expandIcon?: string | undefined;
    }>) => React.JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
