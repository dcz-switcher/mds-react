import { StoryObj } from '@storybook/react';
import { default as Button } from './Button';
declare const meta: {
    component: typeof Button;
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
