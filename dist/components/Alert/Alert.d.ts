import { default as React, ReactNode } from 'react';
type AlertProps = {
    children?: ReactNode;
    severity?: "info" | "success" | "warning" | "danger";
    title?: string;
    icon?: string;
    onClose?: any;
    className?: string;
};
export default function Alert({ children, severity, title, icon, onClose, className, }: AlertProps): React.JSX.Element;
export {};
