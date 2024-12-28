import React, {Children, ReactNode} from "react";
import { LinkColorMappingClass } from "../Link/Link";

export type BreadcrumbProps = {
    children?: ReactNode;
    color?: "link" | "primary" | "text";
    reverse?: boolean;
    className?: string;
}

const Breadcrumb = ({
    children,
    color = "link",
    reverse = false,
    className,
}:BreadcrumbProps) => {
    const colorClass = (reverse) ? "color-white" : LinkColorMappingClass[color];
    return (
        <nav className={`mds-breadcrumbs ${className}`} role="navigation" aria-labelledby="xx">
            <ul>
                {Children.map(children, child => {
                    return (<li className={`mds-color__${colorClass}`}>{child}</li>)
                })}
            </ul>
        </nav>
    )
}

export default Breadcrumb;