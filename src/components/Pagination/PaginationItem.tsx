import React from "react";

export type PaginationItemProps = {
    selected?: boolean,
    page?: string;
    variant?: 'outlined' | 'ellipsis',
    onClick?:any,
    className?:string;
};

const PaginationItem = ({
    selected = false,
    page,
    variant = 'outlined',
    onClick,
    className = '',
}:PaginationItemProps) => {

    const onClickHandler = () => {
        if (onClick) {
            onClick();
        }
    }

    return (
        <>
        {(variant === 'ellipsis') ?
            <li className={`mds-pagination__item mds-pagination__dots mds-display--none mds-display-md--flex ${className}`} aria-hidden="true">
                <span>...</span>
            </li>
            :
            <li className={`mds-pagination__item ${className}`} onClick={onClickHandler}>
                <button className="mds-btn" type="button" aria-label={`page ${page}`}  aria-current={selected}>{page}</button>
            </li>
        }
        </>
    )
};

export default PaginationItem;