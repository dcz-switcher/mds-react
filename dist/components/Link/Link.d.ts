import { default as React } from 'react';
export type LinkProps = {
    children?: string;
    variant?: "body1" | "body2" | "body3" | "body4";
    underline?: boolean;
    reverse?: boolean;
    href?: string;
    target?: string;
    startIcon?: string;
    endIcon?: string;
};
declare const Link: ({ children, variant, underline, reverse, href, target, startIcon, endIcon, }: LinkProps) => React.JSX.Element;
export default Link;
