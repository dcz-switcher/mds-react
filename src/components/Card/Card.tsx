import React, { ReactNode, HTMLProps } from "react";
import { Typography } from "../Typography";

export interface CardProps extends HTMLProps<HTMLAnchorElement> {
    variant?: 'basic1' | 'basic2' | 'compactV' | 'compactH' | 'highlight' | 'modulable';
    title?: string;
    titleLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    subTitle?: string;
    cardMedia?: ReactNode;
    cardHeader?: ReactNode;
    children?: ReactNode;
    className?: string;
}

const cardMappingClass = {
    'basic1' : 'mds-card--basic-1 mds-card--default',
    'basic2' : 'mds-card--basic-2 mds-card--default',
    'compactV' : 'mds-card--compact-v',
    'compactH' : 'mds-card--compact-h',
    'highlight': 'mds-card--highlight',
    'modulable': 'mds-card--modulable mds-card--default',
}

const Card = ({
    variant = 'basic1',
    title,
    titleLevel = 'h3',
    subTitle,
    cardMedia,
    cardHeader,
    children,
    className = '',
    ...props
}:CardProps) => {
    const cardClass = 'mds-card ' + cardMappingClass[variant];

    return (
        <div className={`${cardClass} ${className}`}>
            <span className="mds-icon__arrow-forward" aria-hidden="true"></span>
            <div className="mds-card__content">
                <Typography className="mds-card__title" variant="h3" component={titleLevel}><a className="mds-card__link" {...props}>{title}</a></Typography>
            
                {subTitle ? 
                    <p className="mds-card__desc">{subTitle}</p>
                : ''}
            
                {variant == 'modulable' ? 
                    children
                : ''}
            </div>

            {variant == 'modulable' && cardHeader ?
                cardHeader
            : ''}

            {cardMedia}
        </div>
    )
}

export default Card;