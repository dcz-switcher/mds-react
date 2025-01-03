import React, { ReactNode } from "react";

export type TabsProps = {
    reverse?: boolean;
    children?: ReactNode;
    className?: string;
}

const Tabs = ({
    reverse = false,
    children,
    className = '',
}:TabsProps) => {

    return (
        <div className={`mds-tabs ${reverse ? 'mds-tabs--reverse' : ''} ${className}`}>
            {children}
        </div>
    )
}

export default Tabs;