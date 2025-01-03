import React from "react";

export interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    icon: string;
    label: string;
    reverse?: boolean;
    size?: "small" | "medium";
    variant?: "primary" | "secondary" | "tertiary";
    className?: string;
}


const IconButton = ({
    icon,
    label,
    reverse = false,
    size = 'medium',
    variant = "primary",
    className = '',
    ...buttonProps
}:IconButtonProps) => {
    return (
        <button className={`mds-btn mds-btn--icon-only mds-btn--${variant} mds-btn--${size} ${reverse ? 'mds-btn--reverse' : ''} ${className} `} {...buttonProps}>
            <span className="mds-sr-only">{label}</span>	
            <span className={`mds-icon__${icon}`} aria-hidden="true"></span>
        </button>
    )
}

export default IconButton;