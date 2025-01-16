import React, { ReactNode } from "react";
import PaginationItem from "./PaginationItem";

export type PaginationProps = {
    count?: number;
    page?:number;
    onChange?:any;
    className?:string;
};

const Pagination = ({
    count = 1,
    page = 1,
    onChange,
    className = '',
}:PaginationProps) => {

    const getItems = () => {
        
        const boundaries = 3;
        let items:ReactNode;

        if (count < 8) {
            items = [...Array(count)].map((_, i) => (
                <PaginationItem key={i+1} page={(i+1).toString()} selected={i+1 === page} onClick={() => onClickHandler(i+1)}/>
            ))
        } else if (page <= boundaries) {
            items = <>
                <PaginationItem key={1} page="1" selected={page === 1} onClick={() => onClickHandler(1)}/>
                <PaginationItem key={2} page="2" selected={page === 2} onClick={() => onClickHandler(2)}/>
                <PaginationItem key={3} page="3" selected={page === 3} onClick={() => onClickHandler(3)}/>
                <PaginationItem key={4} page="4" selected={page === 4} onClick={() => onClickHandler(4)}/>
                <PaginationItem key={5} page="5" selected={page === 5} onClick={() => onClickHandler(5)}/>
                <PaginationItem variant="ellipsis" />
                <PaginationItem key={count} page={count.toString()} onClick={() => onClickHandler(count)}/>
            </>
        } else if (page > count-boundaries) {
            items = <>
                <PaginationItem key={1} page="1" onClick={() => onClickHandler(1)}/>
                <PaginationItem variant="ellipsis" />
                <PaginationItem key={count-4} page={(count-4).toString()} selected={page === count-4} onClick={() => onClickHandler(count-4)}/>
                <PaginationItem key={count-3} page={(count-3).toString()} selected={page === count-3} onClick={() => onClickHandler(count-3)}/>
                <PaginationItem key={count-2} page={(count-2).toString()} selected={page === count-2} onClick={() => onClickHandler(count-2)}/>
                <PaginationItem key={count-1} page={(count-1).toString()} selected={page === count-1} onClick={() => onClickHandler(count-1)}/>
                <PaginationItem key={count} page={count.toString()} selected={page === count} onClick={() => onClickHandler(count)}/>
            </>
        } else {
            items = <>
                <PaginationItem key={1} page="1" onClick={() => onClickHandler(1)}/>
                <PaginationItem variant="ellipsis" />
                <PaginationItem key={page-1} page={(page-1).toString()} onClick={() => onClickHandler(page-1)}/>
                <PaginationItem key={page} page={(page).toString()} selected={true} onClick={() => onClickHandler(page)}/>
                <PaginationItem key={page+1} page={(page+1).toString()} onClick={() => onClickHandler(page+1)}/>
                <PaginationItem variant="ellipsis" />
                <PaginationItem key={count} page={count.toString()} onClick={() => onClickHandler(count)}/>
            </>
        }

        return items;
    }
    
    const onClickHandler = (page:number) => {
        if (onChange) {
            onChange(page)
        }
    }
    return (
        <nav role="navigation" aria-label="page des xxx" className={`mds-pagination ${className}`}>
            <ul className="mds-pagination__item-list">
                <li className="mds-pagination__item">
                    <button type="button" className="mds-btn mds-btn--icon-only mds-pagination__navigation" disabled={page < 2} onClick={() => onClickHandler(page-1)}>
                        <span className="mds-icon__chevron-left" aria-hidden="true"></span>
                        <span className="mds-sr-only">Première page</span>
                    </button>
                </li>
                {
                    getItems()
                }
                <li className="mds-pagination__item">
                    <button type="button" className="mds-btn mds-btn--icon-only mds-pagination__navigation" disabled={page >= count} onClick={() => onClickHandler(page+1)} >
                        <span className="mds-sr-only">Dernière page</span>
                        <span className="mds-icon__chevron-right" aria-hidden="true"></span>
                    </button>
                </li>
            </ul>
        </nav>        
    )
};

export default Pagination;