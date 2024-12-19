import React, { ReactNode } from "react";

export type TabPanelProps = {
    children?: ReactNode;
    hidden?: boolean;
}

const TabPanel = ({
    children,
    hidden = false,
}:TabPanelProps) => {
    return (
        <div className="mds-tabs__panel" hidden={hidden}>
            {children}
        </div>
    )
}

export default TabPanel;