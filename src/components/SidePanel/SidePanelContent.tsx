import React, { ReactNode } from "react";

export type SidePanelContentProps = {
    children?: ReactNode;
}

const SidePanelContent = ({
    children
}:SidePanelContentProps) => {
    return (
        <div className="mds-modal__content">
            {children}
        </div>
    )
}

export default SidePanelContent;