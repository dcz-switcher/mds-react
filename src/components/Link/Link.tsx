import React, { ReactNode } from "react";
import { Typography } from "../Typography";


const variantMappingClass = {
    body1: 'mds-text--1',
    body2: 'mds-text--2',
    body3: 'mds-text--3',
    body4: 'mds-text--4',
}

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

const Link = ({
    children,
    variant = 'body2',
    underline = true,
    reverse = false,
    href = "#",
    target = "_self",
    startIcon,
    endIcon,
}:LinkProps) => {
    const classBuilder = `mds-link ${variantMappingClass[variant]} ${!underline ? "mds-link--standalone" : ""} ${reverse ? "mds-link--reverse" : ""}`;

    return (
        <a className={classBuilder} href={href} target={target}>
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