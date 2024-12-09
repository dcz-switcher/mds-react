import React, { HTMLProps } from "react";

const variantMappingClass = {
    body1: 'mds-text--1',
    body2: 'mds-text--2',
    body3: 'mds-text--3',
    body4: 'mds-text--4',
}

export interface LinkProps extends HTMLProps<HTMLAnchorElement> {
    children? : string;
    variant? : "body1" | "body2" | "body3" | "body4";
    underline?: boolean;
    reverse?: boolean;
    startIcon?: string;
    endIcon?: string;
}
/*
export type LinkProps = {
    children? : string;
    variant? : "body1" | "body2" | "body3" | "body4";
    underline?: boolean;
    reverse?: boolean;
    href?: string;
    target?: string;
    startIcon?: string;
    endIcon?: string;
}
*/

const Link = ({
    children,
    variant = 'body2',
    underline = true,
    reverse = false,
    startIcon,
    endIcon,
    ...props
}:LinkProps) => {
    const classBuilder = `mds-link ${variantMappingClass[variant]} ${!underline ? "mds-link--standalone" : ""} ${reverse ? "mds-link--reverse" : ""}`;

    return (
        <a className={classBuilder} {...props}>
            {startIcon &&
                <span className={`mds-icon__${startIcon}--right`} aria-hidden="true"></span>
            }
            {children}
            {endIcon &&
                <span className={`mds-icon__${endIcon}--right`} aria-hidden="true"></span>
            }
        </a>
    )
}

export default Link;