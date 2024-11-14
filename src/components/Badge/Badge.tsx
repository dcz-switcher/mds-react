import React, {ReactNode} from 'react';

export type BadgeProps = {
    readonly label?: string;
    readonly size?: "small" | "big";
    readonly color?: "neutral" | "success" | "warning" | "danger" | "new" ;
    readonly icon?: string;
}


export default function Badge({
    label,
    size,
    color = "neutral",
    icon
}: BadgeProps) {
    return  (
        <p className={`mds-badge mds-badge--${size} mds-badge--${color}`}>
            {icon ? (
                <span className={`mds-icon__${icon}`} aria-hidden="true"></span>
            ) : (
                null
            )}
            <span>{label}</span>
        </p>
    )
}