import React from 'react';


export type BadgeProps = {
    ariaLabel?: string;
    label?: string;
    size?: "small" | "big";
    severity?: "neutral" | "success" | "warning" | "danger" | "new";
    color?: string; // override severity color
    icon?: string;
    variant?: "default" | "dot";
    className?: string;
}


export default function Badge ({
    ariaLabel,
    label,
    size = "small",
    severity = "neutral",
    icon,
    color,
    variant = "default",
    className = '',
}: BadgeProps) {

    const colorClass = (color) ? `mds-background-color__${color}` : "";

    return  (
        variant === "default" ?
            <p className={`mds-badge mds-badge--${size} mds-badge--${severity} ${colorClass} ${className}`}>
                {icon &&
                    <span className={`mds-icon__${icon}`} aria-hidden="true"></span>
                }
                <span>{label}</span>
            </p>
        : 
            <p className={`mds-badge mds-badge--dot mds-badge--${size} mds-badge--${severity} ${colorClass} ${className}`}>
                { (icon && size === "big") ? 
                    <span className={`mds-icon__${icon}`} aria-hidden="true"></span>
                : 
                    size === "big" ? 
                        label
                    :
                        ""
                }
                <span className="mds-sr-only">{ariaLabel}</span>
            </p>
    )
}