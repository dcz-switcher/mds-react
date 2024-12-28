import React, { ReactNode } from "react";

export type CalloutProps = {
    title?: string;
    subtitle?: string;
    children?: ReactNode;
    color?: string;
    icon?: string;
    className?: string;
}

const Callout = ({
    title,
    subtitle,
    children,
    color = 'color-grey--5',
    icon,
    className,
}:CalloutProps) => {
    return (
        <div className={`mds-callout mds-background-color__${color} ${className}`}>
            {icon && 
                <span aria-hidden="true" className={`mds-picto__${icon} mds-callout__picto`}></span>
            }
            
            <h2 className="mds-callout__title"> 
                {title}
                {subtitle && 
                    <span className="mds-callout__subtitle">{subtitle}</span>
                }
            </h2>
            {children}
        </div>
    )
}

export default Callout;