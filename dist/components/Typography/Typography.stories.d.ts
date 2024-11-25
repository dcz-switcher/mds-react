import { StoryObj } from '@storybook/react';
import { default as Typography } from './Typography';
declare const meta: {
    component: typeof Typography;
    argTypes: {
        children: {
            type: "string";
        };
        component: {
            control: "select";
            options: string[];
        };
        underlineColor: {
            name: string;
            type: "string";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Nested: Story;
export declare const Underline: Story;
