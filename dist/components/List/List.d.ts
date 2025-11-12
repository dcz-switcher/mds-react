import { default as React, ReactNode } from 'react';
export type ListProps = {
    children?: ReactNode;
    className?: string;
    boxed?: boolean;
    divider?: boolean;
};
declare const List: ({ children, className, boxed, divider, }: ListProps) => React.JSX.Element;
export default List;
