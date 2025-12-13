import { default as React } from 'react';
type BadgeSize = "small" | "big";
type BadgeSeverity = "neutral" | "success" | "warning" | "danger" | "new";
type BadgeVariant = "default" | "dot";
interface OverridableComponentProps {
    className?: string;
    [key: string]: any;
}
export type BadgeProps = {
    ariaLabel?: string;
    label?: string;
    size?: BadgeSize;
    severity?: BadgeSeverity;
    color?: string;
    icon?: string;
    variant?: BadgeVariant;
    component?: 'p' | 'div' | 'span';
} & OverridableComponentProps;
export default function Badge({ ariaLabel, label, size, severity, icon, color, variant, className, component, ...rest }: BadgeProps): React.JSX.Element;
export {};
