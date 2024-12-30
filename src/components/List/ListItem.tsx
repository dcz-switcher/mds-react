import React, { ReactNode } from "react";

export type ListItemProps = {
    children?: ReactNode;
    secondaryAction?: ReactNode;
};

const ListItem = ({
    children,
    secondaryAction,
}:ListItemProps) => {
    return  (
        <li className="mds-action-list__item mds-side-padding ">
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