import { default as React, ReactNode } from 'react';
export type AccordionItemProps = {
    id?: string;
    title?: string;
    children?: ReactNode;
    defaultExpanded?: boolean;
    expanded?: boolean;
    onChange?: any;
    expandIcon?: string;
    className?: string;
};
declare const AccordionItem: ({ id, title, children, defaultExpanded, onChange, expanded, expandIcon, className, }: AccordionItemProps) => React.JSX.Element;
export default AccordionItem;
