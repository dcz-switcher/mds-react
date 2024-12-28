import { default as React, ReactNode } from 'react';
type SummaryProps = {
    children?: ReactNode;
    title?: string;
    className?: string;
};
declare const Summary: ({ children, title, className, }: SummaryProps) => React.JSX.Element;
export default Summary;
