import React, { ReactNode } from "react";

export type TabsProps = {
    reverse?: boolean;
    children?: ReactNode;
}

const Tabs = ({
    reverse = false,
    children,
}:TabsProps) => {

    return (
        <div className={`mds-tabs ${reverse ? 'mds-tabs--reverse' : ''}`}>
            {children}
        </div>
    )
}

export default Tabs;