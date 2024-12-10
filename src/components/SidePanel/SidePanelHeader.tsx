import React from "react";
import { Divider } from "../Divider";

export type SidePanelHeaderProps = {
    id?: string;
    title? : string;
    icon?: string;
    visuallyHidden?: boolean;
}

const SidePanelHeader = ({
    id,
    title,
    icon,
    visuallyHidden = false
}:SidePanelHeaderProps) => {
    return (
        <div className={` ${visuallyHidden ? 'mds-sr-only' : ''} `}>

            <div className={`mds-modal__header`}>
                {icon && 
                    <span aria-hidden="true" className={`mds-icon__${icon}--left`}></span>
                }
                <h1 id={id} className="mds-modal__title">{title}</h1>
            </div>
            <Divider />
        </div>
    )
}

export default SidePanelHeader;