import { default as React } from 'react';
export interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    icon: string;
    label: string;
    reverse?: boolean;
    size?: "small" | "medium";
    variant?: "primary" | "secondary" | "tertiary";
}
declare const IconButton: ({ icon, label, reverse, size, variant, ...buttonProps }: IconButtonProps) => React.JSX.Element;
export default IconButton;
