import { default as React } from 'react';
export type PaginationItemProps = {
    selected?: boolean;
    page?: string;
    variant?: 'outlined' | 'ellipsis';
    onClick?: any;
};
declare const PaginationItem: ({ selected, page, variant, onClick, }: PaginationItemProps) => React.JSX.Element;
export default PaginationItem;
