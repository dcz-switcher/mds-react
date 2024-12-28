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
    className?: string;
};
declare const SidePanel: ({ children, open, onClose, size, title, icon, visuallyHideTitle, showCloseButton, className, }: SidePanelProps) => React.JSX.Element;
export default SidePanel;
