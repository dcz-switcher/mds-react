import React, { ReactNode } from "react";

export type ShowMoreProps = {
    children?: ReactNode;
    className?: string;
    labelClosed?: string;
    labelOpened?: string;
};

const ShowMore = ({
    children,
    className = '',
    labelClosed = "Afficher plus",
    labelOpened = "Afficher moins",
}:ShowMoreProps) => {
    return (
        <>
            <button type="button" className={`mds-show-more__btn mds-text--2 mds-collapse ${className}`}>
                <span className="mds-visible">{labelClosed}</span>
                <span className="mds-hidden">{labelOpened}</span> 
                <span className="mds-icon__expand-more" aria-hidden="true"></span>
            </button>
            <div className="mds-collapse__content">
                {children}
            </div>
        </>
    )
};

export default ShowMore;