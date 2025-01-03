/**
 * on this version, the active class, to show which section is displayed, is not supported
 * I don't know how to pass the class name to child component
 * <li><a className="active" href="#section1">Blablabla</a></li>
 */
import React, { Children, ReactNode } from "react";
import { Typography } from "../Typography";

type SummaryProps = {
    children?: ReactNode;
    title?: string;
    className?: string;
}

const Summary = ({
    children,
    title = "Summary",
    className = '',
}:SummaryProps) => {

    const ariaId = React.useId();

    return (
        <nav className={`mds-summary ${className}`} role="navigation" aria-labelledby={ariaId}>
            <Typography variant="h4" component="p" role="heading" aria-level={2} id={ariaId}>{title}</Typography>
            <ul className="mds-list">
                {Children.map(children, child => {
                    return <li>{child}</li>
                })}
            </ul>
        </nav>
    )
}

export default Summary;