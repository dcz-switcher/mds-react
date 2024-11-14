import React, {ReactNode} from 'react';

export type BadgeProps = {
    readonly label?: string;
    readonly size?: "small" | "big";
    readonly severity?: "neutral" | "success" | "warning" | "danger" | "new";
    readonly color?: string; // override severity color
    readonly icon?: string;
}


export default function Badge({
    label,
    size,
    severity = "neutral",
    icon,
    color,
}: BadgeProps) {

    const colorClass = (color) ? `mds-background-color__${color}` : "";

    return  (
        <p className={`mds-badge mds-badge--${size} mds-badge--${severity} ${colorClass}`}>
            {icon ? (
                <span className={`mds-icon__${icon}`} aria-hidden="true"></span>
            ) : (
                null
            )}
            <span>{label}</span>
        </p>
    )
}