import { default as React } from 'react';
import { StoryObj } from '@storybook/react';
declare const meta: {
    component: ({ children, open, onClose, size, showCloseButton, }: import('./SidePanel').SidePanelProps) => React.JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: () => React.JSX.Element;
export declare const Full: Story;
