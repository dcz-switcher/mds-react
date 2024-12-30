import { default as React, ReactNode } from 'react';
export type ListItemProps = {
    children?: ReactNode;
    secondaryAction?: ReactNode;
    className?: string;
};
declare const ListItem: ({ children, secondaryAction, className, }: ListItemProps) => React.JSX.Element;
export default ListItem;
