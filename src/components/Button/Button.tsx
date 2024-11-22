import React, { ReactNode } from 'react';

   
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    component?: string;
    children?: ReactNode;
    variant?: "primary" | "secondary" | "tertiary";
    size?: "small" | "medium";
    fullWidth?: boolean;
    startIcon?: string;
    endIcon?: string;
    disabled?: boolean;
    reverse?: boolean;
}

export default function Button({
    component,
    children, 
    variant = "primary",
    size = "medium",
    fullWidth = false,
    startIcon,
    endIcon,
    disabled = false,
    reverse = false,
    ...buttonProps
}: ButtonProps){

    const tagComponent = component || "button";
    const Tag = tagComponent as "a" | "div";

    const fullWidthClass = (fullWidth) ? "mds-full-width" : "";
    const reverseClass = (reverse) ? "mds-btn--reverse" : "";
    
    let opts : any = {};
        
    if (Tag == "a") {
        opts['role'] = "button"
        opts['href'] = "#"
        opts['tabindex'] = "0"
    } else if (Tag == "div") {
        opts['role'] = "button"
        opts['tabindex'] = "0"
    } else {
        opts = {...buttonProps, opts}; //if Tag == button : merge buttonProps
    }
    
    if (disabled) {
        if (Tag == "a" || Tag == "div"){
            opts['aria-disabled'] = 'true';
        }else{
            opts['disabled'] = 'disabled';
        }
    }

    return (
        <Tag {...opts} 
            className={`mds-btn mds-btn--${variant} mds-btn--${size} ${fullWidthClass} ${reverseClass}`}>
            
            {startIcon ? (
                <span className={`mds-icon__${startIcon}--left`} aria-hidden="true"></span>
            ) : (null)}
            {children}
            
            {endIcon ? (
                <span className={`mds-icon__${endIcon}--right`} aria-hidden="true"></span>
            ) : (null)}
        </Tag>
    )
}