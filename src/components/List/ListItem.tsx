import React, { ReactNode } from "react";

export type ListItemProps = {
    children?: ReactNode;
    secondaryAction?: ReactNode;
    className?: string;
};

const ListItem = ({
    children,
    secondaryAction,
    className,
}:ListItemProps) => {
    return  (
        <li className={`mds-action-list__item mds-side-padding ${className}`}>
            <div className="mds-action-list__item-content">
            {children}
            </div>
            {secondaryAction ?
                <span className="mds-action-list__item-action" aria-hidden="true">{secondaryAction}</span>
            :''}
        </li>
    )
};

export default ListItem;