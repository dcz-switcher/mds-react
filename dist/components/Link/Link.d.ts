import { default as React, HTMLProps } from 'react';
export declare const LinkColorMappingClass: {
    link: string;
    primary: string;
    text: string;
};
export interface LinkProps extends HTMLProps<HTMLAnchorElement> {
    children?: string;
    variant?: "body1" | "body2" | "body3" | "body4";
    underline?: boolean;
    reverse?: boolean;
    startIcon?: string;
    endIcon?: string;
    color?: "link" | "primary" | "text";
}
declare const Link: ({ children, variant, underline, reverse, startIcon, endIcon, color, ...props }: LinkProps) => React.JSX.Element;
export default Link;
