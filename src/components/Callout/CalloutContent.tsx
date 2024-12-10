import React, { ReactNode } from "react";

export type CalloutContentProps = {
    children?: ReactNode;
}

const CalloutContent = ({
    children
}:CalloutContentProps) => {
    return (
        <p className="mds-callout__desc">{children}</p>
    )
}

export default CalloutContent;