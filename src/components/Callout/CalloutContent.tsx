import React, { ReactNode } from "react";

export type CalloutContentProps = {
    children?: ReactNode;
    className?: string;
}

const CalloutContent = ({
    children,
    className,
}:CalloutContentProps) => {
    return (
        <div className={`mds-callout__desc ${className}`}>{children}</div>
    )
}

export default CalloutContent;