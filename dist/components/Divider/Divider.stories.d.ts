import { default as React } from 'react';
import { StoryObj } from '@storybook/react';
declare const meta: {
    component: ({ component, variant, reverse, ...props }: import('./Divider').DividerProps) => React.JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Reverse: Story;
