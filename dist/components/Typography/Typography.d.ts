import { default as React, ReactNode } from 'react';
export type typographyProps = {
    children?: ReactNode;
    variant?: "body1" | "body2" | "body3" | "body4" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "underline";
    component?: string;
    align?: "center" | "inherit" | "justify" | "left" | "right";
    underlineColor?: string;
    framed?: boolean;
};
export default function Typography({ children, variant, component, align, underlineColor, framed }: typographyProps): React.JSX.Element;
