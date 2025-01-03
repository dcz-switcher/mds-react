import React, { ReactNode } from "react";

export type SidePanelFooterProps = {
    children? : ReactNode;
    className?: string;
}

const SidePanelFooter = ({
    children,
    className = '',
}:SidePanelFooterProps) => {
    return (
        <div className={`mds-modal__footer ${className}`}>
            {children}
        </div>
    )
}

export default SidePanelFooter;