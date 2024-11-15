import React, {Children, ReactNode} from "react";


export type AlertProps = {
    readonly children?: ReactNode;
    readonly severity?: "info" | "success" | "warning" | "danger";
    readonly title?: string;
    readonly icon?: string;
}

export default function Alert({
    children,
    severity = "info",
    title,
    icon = "info"
}){
    return (
        <div className={`mds-alert mds-alert--basic mds-alert-type--${severity} mds-border-4--color-white`}>
            <div className="mds-alert__header">
                <span className={`mds-icon mds-icon__${icon}`} aria-hidden="true"></span>
                { title ? (
                    <h2 className="mds-sr-only">{title}</h2>
                ):( null )}
            </div> 

            <button className="mds-close">
                <span className="mds-icon__close" aria-hidden="true"></span>
                <span className="mds-sr-only">Fermer l'alerte</span>
            </button>
            
            <div className="mds-alert__content">
                <p>{children}</p>
            </div>
        </div>
    )
}