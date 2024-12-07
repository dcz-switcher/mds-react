import { default as React } from 'react';
export type SidePanelProps = {
    open?: boolean;
    onClose?: any;
    size?: 'small' | 'medium' | 'big';
};
declare const SidePanel: ({ open, onClose, size }: SidePanelProps) => React.JSX.Element;
export default SidePanel;
