import { default as React, ReactNode } from 'react';
export type ListItemProps = {
    children?: ReactNode;
    secondaryAction?: ReactNode;
};
declare const ListItem: ({ children, secondaryAction, }: ListItemProps) => React.JSX.Element;
export default ListItem;
