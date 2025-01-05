import { default as React, ReactNode } from 'react';
export type ListProps = {
    children?: ReactNode;
    className?: string;
    boxed?: boolean;
};
declare const List: ({ children, className, boxed, }: ListProps) => React.JSX.Element;
export default List;
