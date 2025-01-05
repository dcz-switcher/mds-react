import React, { ReactNode } from "react";

export type ListItemProps = {
    children?: ReactNode;
    secondaryAction?: ReactNode;
    className?: string;
    trailingText?: string;
};

const ListItem = ({
    children,
    secondaryAction,
    className = '',
    trailingText,
}:ListItemProps) => {
    return  (
        <li className={`mds-action-list__item mds-side-padding ${className}`}>
            <div className="mds-action-list__item-content">
                {children}
            </div>
            {trailingText ?
                <span className="mds-action-list__item-value">{trailingText}</span>
            :''}
            {secondaryAction ?
                <span className="mds-action-list__item-action" aria-hidden="true">{secondaryAction}</span>
            :''}
        </li>
    )
};

export default ListItem;