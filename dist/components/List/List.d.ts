import { default as React, ReactNode } from 'react';
export type ListProps = {
    children?: ReactNode;
    className?: string;
};
declare const List: ({ children, className, }: ListProps) => React.JSX.Element;
export default List;
