import React, { ReactNode } from "react";

export type SidePanelFooterProps = {
    children? : ReactNode;
}

const SidePanelFooter = ({
    children
}:SidePanelFooterProps) => {
    return (
        <div className="mds-modal__footer">
            {children}
        </div>
    )
}

export default SidePanelFooter;