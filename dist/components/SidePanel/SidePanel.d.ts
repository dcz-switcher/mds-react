import { default as React, ReactNode } from 'react';
export type SidePanelProps = {
    children?: ReactNode;
    open?: boolean;
    onClose?: any;
    size?: 'small' | 'medium' | 'large';
    showCloseButton?: boolean;
};
declare const SidePanel: ({ children, open, onClose, size, showCloseButton, }: SidePanelProps) => React.JSX.Element;
export default SidePanel;
