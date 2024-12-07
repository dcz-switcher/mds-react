import { default as React, ReactNode } from 'react';
export type SidePanelProps = {
    titleIcon?: string;
    children?: ReactNode;
    open?: boolean;
    onClose?: any;
    size?: 'small' | 'medium' | 'large';
    title?: string;
    hideCloseButton?: boolean;
    footer?: ReactNode;
};
declare const SidePanel: ({ titleIcon, children, open, onClose, size, title, hideCloseButton, footer }: SidePanelProps) => React.JSX.Element;
export default SidePanel;
