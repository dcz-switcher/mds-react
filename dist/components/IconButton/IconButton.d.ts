import { default as React } from 'react';
export interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    icon: string;
    label: string;
    reverse?: boolean;
    size?: "small" | "medium";
    variant?: "primary" | "secondary" | "tertiary";
    className?: string;
}
declare const IconButton: ({ icon, label, reverse, size, variant, className, ...buttonProps }: IconButtonProps) => React.JSX.Element;
export default IconButton;
