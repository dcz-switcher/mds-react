import { StoryObj } from '@storybook/react';
declare const meta: {
    component: ({ children, color, size, baseClassName, className, }: import('./Icon').IconProps) => import("react").JSX.Element;
    argTypes: {
        children: {
            type: "string";
        };
        color: {
            type: "string";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Pictograms: Story;
