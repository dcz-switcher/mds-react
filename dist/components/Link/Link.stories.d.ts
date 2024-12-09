import { default as React } from 'react';
import { StoryObj } from '@storybook/react';
declare const meta: {
    component: ({ children, variant, underline, reverse, startIcon, endIcon, color, ...props }: import('./Link').LinkProps) => React.JSX.Element;
    argTypes: {
        children: {
            name: string;
            control: {
                type: "text";
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Reverse: Story;
