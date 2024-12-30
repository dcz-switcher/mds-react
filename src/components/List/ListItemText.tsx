import React, { ReactNode } from "react";

export type ListItemText = {
    headline?: ReactNode;
    primary?: ReactNode;
    secondary?: ReactNode;
    className?: string;
};

const ListItemText = ({
    headline,
    primary,
    secondary,
    className,
}:ListItemText) => {
    return (
        <div className={`mds-action-list__item-container-content ${className}`}>
            <div className="mds-action-list__item-text-content">
                {headline ?
                    <span className="mds-action-list__item-headline">{headline}</span>
                : ''}
                {primary ? 
                    <span className="mds-action-list__item-title"><a className="mds-action-list__item-link" href="#">{primary}</a></span>
                : ''}
                {secondary ?
                    <span className="mds-action-list__item-desc">{secondary}</span>
                :''}
            </div>
        </div>
    )
};

export default ListItemText;