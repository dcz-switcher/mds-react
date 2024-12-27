import { StoryObj } from '@storybook/react';
import { default as React } from 'react';
declare const meta: {
    component: ({ children, className, ...props }: import('./Box').BoxProps) => React.JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
