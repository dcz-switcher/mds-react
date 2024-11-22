import { default as React, ReactNode } from 'react';
interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
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
declare const Button: ({ component, children, variant, size, fullWidth, startIcon, endIcon, disabled, reverse, ...buttonProps }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
