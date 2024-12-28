import React, { ReactNode } from "react";

export type SidePanelContentProps = {
    children?: ReactNode;
    className?: string;
}

const SidePanelContent = ({
    children,
    className,
}:SidePanelContentProps) => {
    return (
        <div className={`mds-modal__content ${className}`} role="document">
            {children}
        </div>
    )
}

export default SidePanelContent;