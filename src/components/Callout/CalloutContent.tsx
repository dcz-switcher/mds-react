import React, { ReactNode } from "react";

export type CalloutContentProps = {
    children?: ReactNode;
}

const CalloutContent = ({
    children
}:CalloutContentProps) => {
    return (
        <div className="mds-callout__desc">{children}</div>
    )
}

export default CalloutContent;