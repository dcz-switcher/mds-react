import { default as React } from 'react';
export type SidePanelHeaderProps = {
    id?: string;
    title?: string;
    icon?: string;
    visuallyHidden?: boolean;
    className?: string;
};
declare const SidePanelHeader: ({ id, title, icon, visuallyHidden, className, }: SidePanelHeaderProps) => React.JSX.Element;
export default SidePanelHeader;
