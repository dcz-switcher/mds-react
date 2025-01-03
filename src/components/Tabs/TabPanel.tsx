import React, { ReactNode } from "react";

export type TabPanelProps = {
    children?: ReactNode;
    hidden?: boolean;
    className?: string;
}

const TabPanel = ({
    children,
    hidden = false,
    className = '',
}:TabPanelProps) => {
    return (
        <div className={`mds-tabs__panel ${className}`} hidden={hidden}>
            {children}
        </div>
    )
}

export default TabPanel;