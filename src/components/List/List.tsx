import React, { ReactNode } from "react";

export type ListProps = {
    children?: ReactNode;
};

const List = ({
    children
}:ListProps) => {
    return (
        <div role="group" className="mds-action-list">
            <ul className="mds-action-list--default">
                {children}
            </ul>
        </div>
    )
};

export default List;