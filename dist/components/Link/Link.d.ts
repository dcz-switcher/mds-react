import { default as React, HTMLProps } from 'react';
export interface LinkProps extends HTMLProps<HTMLAnchorElement> {
    children?: string;
    variant?: "body1" | "body2" | "body3" | "body4";
    underline?: boolean;
    reverse?: boolean;
    startIcon?: string;
    endIcon?: string;
}
declare const Link: ({ children, variant, underline, reverse, startIcon, endIcon, ...props }: LinkProps) => React.JSX.Element;
export default Link;
