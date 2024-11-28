import { default as React, ReactNode } from 'react';
export type HeroProps = {
    upTitle?: ReactNode;
    title: ReactNode;
    subTitle?: ReactNode;
    heroActions?: ReactNode;
    image?: string;
};
declare const Hero: ({ upTitle, title, subTitle, heroActions, image }: HeroProps) => React.JSX.Element;
export default Hero;
