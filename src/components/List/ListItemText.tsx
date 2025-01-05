import React, { ReactNode } from "react";

export type ListItemText = {
    headline?: ReactNode;
    title?: ReactNode;
    supportingText?: string;
    className?: string;
    href?: string;
};

const ListItemText = ({
    headline,
    title,
    supportingText,
    className = '',
    href,
}:ListItemText) => {
    return (
        <div className={`mds-action-list__item-container-content ${className}`}>
            <div className="mds-action-list__item-text-content">
                {headline ?
                    <span className="mds-action-list__item-headline">{headline}</span>
                : ''}
                {title ? 
                    href ?
                        <span className="mds-action-list__item-title"><a className="mds-action-list__item-link" href={href}>{title}</a></span>
                        :
                        <span className="mds-action-list__item-title">{title}</span>
                : ''}
                {supportingText ?
                    <span className="mds-action-list__item-desc">{supportingText}</span>
                :''}
            </div>
        </div>
    )
};

export default ListItemText;