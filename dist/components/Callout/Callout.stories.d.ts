import { default as React } from 'react';
import { StoryObj } from '@storybook/react';
declare const meta: {
    component: ({ title, subtitle, children, color, icon, className, }: import('./Callout').CalloutProps) => React.JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithAction: {
    render: () => React.JSX.Element;
};
