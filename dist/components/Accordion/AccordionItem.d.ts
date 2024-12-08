import { default as React, ReactNode } from 'react';
export type AccordionItemProps = {
    title?: string;
    children?: ReactNode;
    expanded?: boolean;
    expandIcon?: string;
};
declare const AccordionItem: ({ title, children, expanded, expandIcon }: AccordionItemProps) => React.JSX.Element;
export default AccordionItem;
