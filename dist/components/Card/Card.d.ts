import { default as React, ReactNode } from 'react';
export type CardProps = {
    variant?: 'basic1' | 'basic2' | 'compactV' | 'compactH';
    title?: string;
    titleLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    subTitle?: string;
    media?: ReactNode;
};
declare const Card: ({ variant, title, titleLevel, subTitle, media, }: CardProps) => React.JSX.Element;
export default Card;
