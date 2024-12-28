import { default as React, HTMLAttributes, ReactNode } from 'react';
export interface typographyProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode;
    variant?: "body1" | "body2" | "body3" | "body4" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "underline";
    component?: string;
    align?: "center" | "inherit" | "justify" | "left" | "right";
    underlineColor?: string;
    framed?: boolean;
    color?: 'primary' | 'text';
    className?: string;
}
export default function Typography({ children, variant, component, align, underlineColor, framed, color, className, ...props }: typographyProps): React.JSX.Element;
