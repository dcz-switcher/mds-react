import { default as React, ReactNode } from 'react';
export type AccordionItemProps = {
    title?: string;
    children?: ReactNode;
    defaultExpanded?: boolean;
    expanded?: boolean;
    expandIcon?: string;
};
declare const AccordionItem: ({ title, children, defaultExpanded, expanded, expandIcon }: AccordionItemProps) => React.JSX.Element;
export default AccordionItem;
