import React, {Children, ReactNode} from "react";

export type BreadcrumbProps = {
    children?: ReactNode;
    color?: "link" | "primary" | "text";
    reverse?: boolean;
}

const colorMappingClass = {
    link   : "color-use--9",
    primary: "color-macif--1",
    text   : "color-grey--80",
}

const Breadcrumb = ({
    children,
    color = "link",
    reverse = false,
}:BreadcrumbProps) => {
    const colorClass = (reverse) ? "color-white" : colorMappingClass[color];
    return (
        <nav className="mds-breadcrumbs" role="navigation" aria-labelledby="xx">
            <ul>
                {Children.map(children, child => {
                    return (<li className={`mds-color__${colorClass}`}>{child}</li>)
                })}
            </ul>
        </nav>
    )
}

export default Breadcrumb;