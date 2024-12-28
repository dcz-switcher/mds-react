import { default as React, ReactNode } from 'react';
export type TabPanelProps = {
    children?: ReactNode;
    hidden?: boolean;
    className?: string;
};
declare const TabPanel: ({ children, hidden, className, }: TabPanelProps) => React.JSX.Element;
export default TabPanel;
