import { default as React } from 'react';
export type CardProps = {
    title?: string;
    icon?: string;
    href?: string;
    target?: string;
    role?: string;
    className?: string;
};
export default function CardCompactV({ title, icon, href, target, role, className, }: CardProps): React.JSX.Element;
