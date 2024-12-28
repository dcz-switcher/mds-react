import React, { ReactNode } from "react";

export type AccordionProps = {
    children?: ReactNode;
    className?: string;
}


const Accordion = ({
    children,
    className,
}:AccordionProps) => {
    return (
        <div className={`mds-accordion--standalone ${className}`}>
            {children}
        </div>
    )
}

export default Accordion;