import React, { ReactNode } from "react";

export type ListProps = {
    children?: ReactNode;
    className?: string;
    boxed?: boolean;
};

const List = ({
    children,
    className = '',
    boxed = false,
}:ListProps) => {

    const listClass = boxed ? 'mds-action-list--box' : 'mds-action-list--default';

    return (
        <div role="group" className={`mds-action-list ${className}`}>            
                <ul className={listClass}>
                    {children}
                </ul>
        </div>
    )
};

export default List;