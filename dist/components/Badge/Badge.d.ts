import { default as React } from 'react';
export type BadgeProps = {
    ariaLabel?: string;
    label?: string;
    size?: "small" | "big";
    severity?: "neutral" | "success" | "warning" | "danger" | "new";
    color?: string;
    icon?: string;
    variant?: "default" | "dot";
    className?: string;
};
export default function Badge({ ariaLabel, label, size, severity, icon, color, variant, className, }: BadgeProps): React.JSX.Element;
