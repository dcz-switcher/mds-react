import { default as React, ReactNode } from 'react';
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    component?: string;
    children?: ReactNode;
    variant?: "primary" | "secondary" | "tertiary";
    size?: "small" | "medium";
    fullWidth?: boolean;
    startIcon?: string;
    endIcon?: string;
    disabled?: boolean;
    reverse?: boolean;
}
export default function Button({ component, children, variant, size, fullWidth, startIcon, endIcon, disabled, reverse, ...buttonProps }: ButtonProps): React.JSX.Element;
