import { default as React, ReactNode } from 'react';
export type AccordionProps = {
    variant?: 'basic' | 'standalone';
    children?: ReactNode;
};
declare const Accordion: ({ variant, children }: AccordionProps) => React.JSX.Element;
export default Accordion;
