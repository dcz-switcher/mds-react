import React, { ReactNode } from "react";

export type TabsProps = {
    reverse?: boolean;
    children?: ReactNode;
    className?: string;
    variant?: "default" | "pills";
}

const Tabs = ({
    reverse = false,
    children,
    className = '',
    variant = "default",
    ...props
}:TabsProps) => {

    return (
        <div className={`mds-tabs ${variant == 'pills' ? 'mds-tabs--pills mds-tabs--standalone' : ''} ${reverse ? 'mds-tabs--reverse' : ''} ${className}`} {...props}>
            {children}
        </div>
    )
}

export default Tabs;