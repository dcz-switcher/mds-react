import React, { HTMLProps } from "react";

const variantMappingClass = {
    body1: 'mds-text--1',
    body2: 'mds-text--2',
    body3: 'mds-text--3',
    body4: 'mds-text--4',
}

export const LinkColorMappingClass = {
    link   : "color-use--9",
    primary: "color-macif--1",
    text   : "color-grey--80",
}

export interface LinkProps extends HTMLProps<HTMLAnchorElement> {
    children? : string;
    variant? : "body1" | "body2" | "body3" | "body4";
    underline?: boolean;
    reverse?: boolean;
    startIcon?: string;
    endIcon?: string;
    color?: "link" | "primary" | "text";
    className?: string;
}

const Link = ({
    children,
    variant = 'body2',
    underline = true,
    reverse = false,
    startIcon,
    endIcon,
    color = "link",
    className,
    ...props
}:LinkProps) => {
    const classBuilder = `mds-link ${variantMappingClass[variant]} ${!underline ? "mds-link--standalone" : ""} ${reverse ? "mds-link--reverse" : "mds-color__"+LinkColorMappingClass[color] } ${className}`;

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