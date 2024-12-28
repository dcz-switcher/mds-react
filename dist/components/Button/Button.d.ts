import { default as React, ReactNode } from 'react';
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    component?: string;
    children?: ReactNode;
    color?: 'default' | 'conversion' | 'alert';
    disabled?: boolean;
    endIcon?: string;
    size?: "small" | "medium";
    fullWidth?: boolean;
    href?: string;
    reverse?: boolean;
    startIcon?: string;
    target?: string;
    variant?: "primary" | "secondary" | "tertiary";
    className?: string;
}
export default function Button({ component, children, color, variant, size, fullWidth, startIcon, endIcon, disabled, reverse, href, target, className, ...buttonProps }: ButtonProps): React.JSX.Element;
