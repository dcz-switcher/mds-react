import { default as React, ReactNode } from 'react';
export type TabPanelProps = {
    children?: ReactNode;
    hidden?: boolean;
};
declare const TabPanel: ({ children, hidden, }: TabPanelProps) => React.JSX.Element;
export default TabPanel;
