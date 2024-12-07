import React, { ReactNode } from "react";

export type AccordionProps = {
    variant?: 'basic' | 'standalone';
    children?: ReactNode;
}


const Accordion = ({
    variant = 'standalone',
    children
}:AccordionProps) => {
    return (
        <div className={`mds-accordion--${variant}`}>
            {children}
        </div>
    )
}

export default Accordion;