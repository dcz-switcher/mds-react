import { default as React } from 'react';
export type PaginationProps = {
    count?: number;
    page?: number;
    onChange?: any;
};
declare const Pagination: ({ count, page, onChange, }: PaginationProps) => React.JSX.Element;
export default Pagination;
