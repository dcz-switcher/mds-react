import React from "react";

export type QuoteProps = {
    autor?: string;
    avatar?: string;
    children?: string;
    className?: string;
    reverse?: boolean;
};

const Quote = ({
    autor,
    avatar,
    children,
    className,
    reverse = false,
}:QuoteProps) => {

    const componentClassName = (reverse) ? "mds-quote mds-quote--reverse" : "mds-quote";

    return (
        <blockquote className={`${componentClassName} ${className}`}>
            <p className="mds-quote__text">
                {children}
            </p>
            {autor ?
                <p className="mds-quote__legendary">
                    {avatar ?
                        <img alt="" src={avatar} aria-hidden="true"/>
                    : ''}
                    {autor}
                </p>
            :''}
        </blockquote>
    )
};

export default Quote;