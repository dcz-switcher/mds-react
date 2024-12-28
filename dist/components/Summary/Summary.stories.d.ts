import { default as React } from 'react';
import { StoryObj } from '@storybook/react';
declare const meta: {
    component: ({ children, title, className, }: {
        children?: React.ReactNode;
        title?: string;
        className?: string;
    }) => React.JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
