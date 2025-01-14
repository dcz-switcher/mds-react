import React from "react";

export type PaginationItemProps = {
    selected?: boolean,
    page?: string;
    variant?: 'outlined' | 'ellipsis',
};

const PaginationItem = ({
    selected = false,
    page,
    variant = 'outlined',
}:PaginationItemProps) => {
    return (
        <>
        {(variant === 'ellipsis') ?
            <li className="mds-pagination__item mds-pagination__dots mds-display--none mds-display-md--flex" aria-hidden="true">
                <span>...</span>
            </li>
            :
            <li className="mds-pagination__item">
                <button className="mds-btn" type="button" aria-label={`page ${page}`}  aria-current={selected}>{page}</button>
            </li>
        }
        </>
    )
};

export default PaginationItem;