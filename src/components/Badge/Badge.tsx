import React from 'react';


export type BadgeProps = {
    label?: string;
    size?: "small" | "big";
    severity?: "neutral" | "success" | "warning" | "danger" | "new";
    color?: string; // override severity color
    icon?: string;
    className?: string;
}


export default function Badge ({
    label,
    size = "small",
    severity = "neutral",
    icon,
    color,
    className,
}: BadgeProps) {

    const colorClass = (color) ? `mds-background-color__${color}` : "";

    return  (
        <p className={`mds-badge mds-badge--${size} mds-badge--${severity} ${colorClass} ${className}`}>
            {icon &&
                <span className={`mds-icon__${icon}`} aria-hidden="true"></span>
            }
            <span>{label}</span>
        </p>
    )
}