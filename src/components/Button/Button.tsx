import React, { ReactNode } from 'react';


export type ButtonProps = {
    readonly children?: ReactNode;
    readonly variant?: "primary" | "secondary" | "tertiary";
    readonly size?: "small" | "medium";
    readonly fullWidth?: boolean;
    readonly startIcon?: string;
    readonly endIcon?: string;
}

export default function Button({
    children, 
    variant = "primary",
    size = "medium",
    fullWidth = false,
    startIcon,
    endIcon
}: ButtonProps){

    const fullWidthClass = (fullWidth) ? "mds-full-width" : "";

    return (
        <button className={`mds-btn mds-btn--${variant} mds-btn--${size} ${fullWidthClass}`}>
            {startIcon ? (
                <span className={`mds-icon__${startIcon}--left`} aria-hidden="true"></span>
            ) : (null)}
            {children}
            {endIcon ? (
                <span className={`mds-icon__${endIcon}--right`} aria-hidden="true"></span>
            ) : (null)}
        </button>
    )
}