import { default as React, ReactNode } from 'react';
export type SidePanelProps = {
    children?: ReactNode;
    open?: boolean;
    onClose?: any;
    size?: 'small' | 'medium' | 'large';
    title?: string;
    icon?: string;
    visuallyHideTitle?: boolean;
    showCloseButton?: boolean;
};
declare const SidePanel: ({ children, open, onClose, size, title, icon, visuallyHideTitle, showCloseButton, }: SidePanelProps) => React.JSX.Element;
export default SidePanel;
