import { default as React } from 'react';
export type SidePanelHeaderProps = {
    id?: string;
    title?: string;
    icon?: string;
    visuallyHidden?: boolean;
};
declare const SidePanelHeader: ({ id, title, icon, visuallyHidden }: SidePanelHeaderProps) => React.JSX.Element;
export default SidePanelHeader;
