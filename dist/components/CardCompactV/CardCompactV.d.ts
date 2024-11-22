import { default as React } from 'react';
export type CardProps = {
    title?: string;
    icon?: string;
    href?: string;
    target?: string;
};
export default function CardCompactV({ title, icon, href, target }: CardProps): React.JSX.Element;
