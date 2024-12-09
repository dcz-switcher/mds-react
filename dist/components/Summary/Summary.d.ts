import { default as React, ReactNode } from 'react';
type SummaryProps = {
    children?: ReactNode;
    title?: string;
};
declare const Summary: ({ children, title, }: SummaryProps) => React.JSX.Element;
export default Summary;
