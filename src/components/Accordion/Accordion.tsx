import React, { ReactNode } from "react";

export type AccordionProps = {
    children?: ReactNode;
}


const Accordion = ({
    children
}:AccordionProps) => {
    return (
        <div className="mds-accordion--standalone">
            {children}
        </div>
    )
}

export default Accordion;