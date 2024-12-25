import { default as React } from 'react';
export type TabProps = {
    label?: string;
    icon?: string;
    ariaCurrent?: boolean;
};
declare const Tab: ({ label, icon, ariaCurrent }: TabProps) => React.JSX.Element;
export default Tab;
