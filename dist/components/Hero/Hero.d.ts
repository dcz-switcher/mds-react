import { default as React, ReactNode } from 'react';
export type HeroProps = {
    upTitle?: ReactNode;
    title: ReactNode;
    subTitle?: ReactNode;
    heroActions?: ReactNode;
    image?: string;
    className?: string;
};
declare const Hero: ({ upTitle, title, subTitle, heroActions, image, className, }: HeroProps) => React.JSX.Element;
export default Hero;
