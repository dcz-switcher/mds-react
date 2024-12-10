import React, { ReactNode } from "react";

export type CalloutActionProps = {
    children?: ReactNode;
}


const CalloutAction = ({
    children
}:CalloutActionProps) => {
    return (
        <>{children}</>
    )
}

export default CalloutAction;