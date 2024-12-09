import React, { Children, ReactNode } from "react";
import { Typography } from "../Typography";

type SummaryProps = {
    children?: ReactNode;
    title?: string;
}

const Summary = ({
    children,
    title = "Summary",
}:SummaryProps) => {

    const ariaId = React.useId();

    return (
        <nav className="mds-summary" role="navigation" aria-labelledby={ariaId}>
            <Typography variant="h4" component="p" role="heading" aria-level={2} id={ariaId}>{title}</Typography>
            <ul className="mds-list">
                {Children.map(children, child => {
                    return <li>{child}</li>
                })}
                <li><a className="active" href="#section1">Accident de travail : la définition</a></li>
                <li><a href="#section2">Accident de travail : que faire ?</a></li>
                <li><a href="#section3">Accident de travail et salaire : comment ça marche ?</a></li>
                <li><a href="#section4">La rente d'accident du travail : c'est quoi ?</a></li>
            </ul>
        </nav>
    )
}

export default Summary;