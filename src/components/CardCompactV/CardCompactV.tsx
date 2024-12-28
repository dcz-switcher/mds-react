import React from 'react';


export type CardProps = {
    title?: string;
    icon?: string;
    href?: string;
    target?: string;
    role?: string;
    className?: string;
}

export default function CardCompactV({
    title = "title",
    icon = "auto",
    href = "#",
    target = "_self",
    role,
    className,
}: CardProps){

    return (
        <div className={`mds-card mds-card--compact-v ${className}`} role={role}>
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