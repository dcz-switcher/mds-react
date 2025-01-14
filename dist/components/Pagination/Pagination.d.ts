import { default as React } from 'react';
export type PaginationProps = {
    count?: number;
    page?: number;
};
declare const Pagination: ({ count, page }: PaginationProps) => React.JSX.Element;
export default Pagination;
