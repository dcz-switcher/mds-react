import { default as React, ReactNode } from 'react';
export type TabListProps = {
    children?: ReactNode;
    ariaLabel?: string;
    className?: string;
};
declare const TabList: ({ children, ariaLabel, className, }: TabListProps) => React.JSX.Element;
export default TabList;
