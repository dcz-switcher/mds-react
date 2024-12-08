import React from "react";

export type SidePanelHeaderProps = {
    title? : string;
    icon?: string;
}

const SidePanelHeader = ({
    title,
    icon
}:SidePanelHeaderProps) => {
    return (
        <>
            <div className="mds-modal__header">
                {icon && 
                    <span aria-hidden="true" className={`mds-icon__${icon}--left`}></span>
                }
                <h1 className="mds-modal__title">{title}</h1>
            </div>
            <hr className="mds-divider mds-divider--small" />
        </>
    )
}

export default SidePanelHeader;