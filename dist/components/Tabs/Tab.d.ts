import { default as React } from 'react';
export type TabProps = {
    label?: string;
    icon?: string;
    ariaCurrent?: boolean;
    className?: string;
};
declare const Tab: ({ label, icon, ariaCurrent, className, }: TabProps) => React.JSX.Element;
export default Tab;
