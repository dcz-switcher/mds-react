import React, { Children, cloneElement, ReactElement, ReactNode } from "react";

export type TabListProps = {
    children?: ReactNode;
    ariaLabel?:string;
}

const TabList = ({
    children,
    ariaLabel,
}:TabListProps) => {
    return (
        <nav role="navigation" aria-label={ariaLabel}>
            <ul className="mds-custom-scrollbar__x">
                {Children.map(children, (child, index) => {
                    if (index == 0){    
                        return <li className="mds-tabs__tab--selected">{cloneElement(child as ReactElement, {ariaCurrent: true})}</li>
                    }
                    
                    return <li>{child}</li>
                })}
            </ul>
        </nav>
    )
}

export default TabList;