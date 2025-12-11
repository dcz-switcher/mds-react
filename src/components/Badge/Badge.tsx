import React from 'react';

type BadgeSize = "small" | "big";
type BadgeSeverity = "neutral" | "success" | "warning" | "danger" | "new";
type BadgeVariant = "default" | "dot";

interface OverridableComponentProps {
    className? : string;
    [key: string]: any;
}

export type BadgeProps = {
    ariaLabel?: string;
    label?: string;
    size?: BadgeSize;
    severity?: BadgeSeverity;
    color?: string; // override severity color
    icon?: string;
    variant?: BadgeVariant;
    component? : 'p' | 'div' | 'span';
} & OverridableComponentProps;


export default function Badge ({
    ariaLabel,
    label,
    size = "small",
    severity = "neutral",
    icon,
    color,
    variant = "default",
    className = '',
    component,
    ...rest
}: BadgeProps) {
    const TagComponent = component || 'p';

    const colorClass = (color) ? `mds-background-color__${color}` : "";

    const classes = [
        'mds-badge',
        `mds-badge--${size}`,
        `mds-badge--${severity}`,
        (variant === "dot" && 'mds-badge--dot'),
        colorClass, 
        className
    ].filter(Boolean).join(' ');

    return  (
        <TagComponent
            className={classes} 
            {...rest}
        >
            {variant === "default" ?
                <>
                    {icon &&
                        <span className={`mds-icon__${icon}`} aria-hidden="true"></span>
                    }
                    <span>{label}</span>
                </>
            : 
                <>
                    { (icon && size === "big") ? 
                        <span className={`mds-icon__${icon}`} aria-hidden="true"></span>
                    : 
                        size === "big" ? 
                            label
                        :
                            ""
                    }
                    <span className="mds-sr-only">{ariaLabel}</span>
                </>
            }
        </TagComponent>
    )
}