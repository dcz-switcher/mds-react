import React, { ReactNode } from "react";

export type ListProps = {
    children?: ReactNode;
    className?: string;
};

const List = ({
    children,
    className = '',
}:ListProps) => {
    return (
        <div role="group" className={`mds-action-list ${className}`}>
            <ul className="mds-action-list--default">
                {children}
            </ul>
        </div>
    )
};

export default List;