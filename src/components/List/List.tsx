import React, { ReactNode } from "react";

export type ListProps = {
    children?: ReactNode;
    className?: string;
    boxed?: boolean;
    divider?: boolean;
};

const List = ({
    children,
    className = '',
    boxed = false,
    divider = true,
}:ListProps) => {

    const dividerClass = !divider && !boxed ? 'mds-action-list--no-divider' : '';
    const listClass = boxed ? 'mds-action-list--box' : 'mds-action-list--default';

    return (
        <div role="group" className={`mds-action-list ${dividerClass} ${className}`}>
                <ul className={listClass}>
                    {children}
                </ul>
        </div>
    )
};

export default List;