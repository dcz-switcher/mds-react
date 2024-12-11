import { StoryObj } from '@storybook/react';
import { default as Alert } from './Alert';
declare const meta: {
    component: typeof Alert;
    argTypes: {
        title: {
            name: string;
        };
        children: {
            name: string;
            control: "text";
        };
        severity: {
            name: string;
            control: "radio";
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithCloseButton: Story;
