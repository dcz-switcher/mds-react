import { default as React } from 'react';
export type PaginationItemProps = {
    selected?: boolean;
    page?: string;
    variant?: 'outlined' | 'ellipsis';
};
declare const PaginationItem: ({ selected, page, variant, }: PaginationItemProps) => React.JSX.Element;
export default PaginationItem;
