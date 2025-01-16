import { default as React } from 'react';
export type PaginationProps = {
    count?: number;
    page?: number;
    onChange?: any;
    className?: string;
};
declare const Pagination: ({ count, page, onChange, className, }: PaginationProps) => React.JSX.Element;
export default Pagination;
