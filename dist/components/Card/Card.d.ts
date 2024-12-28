import { default as React, ReactNode, HTMLProps } from 'react';
export interface CardProps extends HTMLProps<HTMLAnchorElement> {
    variant?: 'basic1' | 'basic2' | 'compactV' | 'compactH' | 'highlight' | 'modulable';
    title?: string;
    titleLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    subTitle?: string;
    cardMedia?: ReactNode;
    cardHeader?: ReactNode;
    children?: ReactNode;
    className?: string;
}
declare const Card: ({ variant, title, titleLevel, subTitle, cardMedia, cardHeader, children, className, ...props }: CardProps) => React.JSX.Element;
export default Card;
