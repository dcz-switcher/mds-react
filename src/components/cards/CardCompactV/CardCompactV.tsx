import React, { ReactNode } from 'react';


type CardProps = {
    title?: string;
    icon?: string;
    href?: string;
    target?: string;
}

export default function CardCompactV({
    title = "title",
    icon = "auto",
    href = "#",
    target = "_self"
}: CardProps){

    return (
        <div className="mds-card mds-card--compact-v">
            <span className="mds-icon__arrow-forward" aria-hidden="true"></span>
            <div className="mds-card__content">
                <p className="mds-card__title">
                    <a href={href} className="mds-card__link" target={target}>{title}</a>
                </p>
            </div>
            <span className={`mds-icon mds-picto__${icon}`} aria-hidden="true"></span>
        </div>
    )
}