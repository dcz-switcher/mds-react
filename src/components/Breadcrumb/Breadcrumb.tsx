import React, {Children, ReactNode} from "react";
import { LinkColorMappingClass } from "../Link/Link";

export type BreadcrumbProps = {
    children?: ReactNode;
    color?: "link" | "primary" | "text";
    reverse?: boolean;
    title?: string;
    className?: string;
}

const Breadcrumb = ({
    children,
    color = "link",
    reverse = false,
    title,
    className = '',
}:BreadcrumbProps) => {
    const colorClass = (reverse) ? "color-white" : LinkColorMappingClass[color];
    const titleColorClass = (reverse) ? '' : "mds-color__color-use--9";
    return (
        <nav className={`mds-breadcrumbs ${className}`} role="navigation" aria-labelledby="xx">
            {title ? 
              <p className={`mds-text--4 ${titleColorClass}`} id="xx" >{title}</p>
            : ''}
            <ul>
                {Children.map(children, child => {
                    return (<li className={`mds-color__${colorClass}`}>{child}</li>)
                })}
            </ul>
        </nav>
    )
}

export default Breadcrumb;