import React, { ReactNode } from 'react';

/*
export type ButtonProps = {
    readonly children?: ReactNode;
    readonly variant?: "primary" | "secondary" | "tertiary";
    readonly size?: "small" | "medium";
    readonly fullWidth?: boolean;
    readonly startIcon?: string;
    readonly endIcon?: string;
}
*/
   
interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    children?: ReactNode;
    variant?: "primary" | "secondary" | "tertiary";
    size?: "small" | "medium";
    fullWidth?: boolean;
    startIcon?: string;
    endIcon?: string;
}

export default function Button({
    children, 
    variant = "primary",
    size = "medium",
    fullWidth = false,
    startIcon,
    endIcon,
    ...buttonProps
}: ButtonProps){

    const fullWidthClass = (fullWidth) ? "mds-full-width" : "";

    return (
        <button className={`mds-btn mds-btn--${variant} mds-btn--${size} ${fullWidthClass}`} {...buttonProps}>
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