import React, { ReactNode } from 'react';

   
interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    children?: ReactNode;
    variant?: "primary" | "secondary" | "tertiary";
    size?: "small" | "medium";
    fullWidth?: boolean;
    startIcon?: string;
    endIcon?: string;
    disabled?: boolean;
}

export default function Button({
    children, 
    variant = "primary",
    size = "medium",
    fullWidth = false,
    startIcon,
    endIcon,
    disabled = false,
    ...buttonProps
}: ButtonProps){

    const fullWidthClass = (fullWidth) ? "mds-full-width" : "";
    const disabledClass = (disabled) ? "disabled" : "";

    return (
        <button className={`mds-btn mds-btn--${variant} mds-btn--${size} ${fullWidthClass}`} disabled={disabled} {...buttonProps}>
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