import { default as React } from 'react';
export type BadgeProps = {
    label?: string;
    size?: "small" | "big";
    severity?: "neutral" | "success" | "warning" | "danger" | "new";
    color?: string;
    icon?: string;
    className?: string;
};
export default function Badge({ label, size, severity, icon, color, className, }: BadgeProps): React.JSX.Element;
