import { default as React, ReactNode } from 'react';
export type HeroProps = {
    title: ReactNode;
    subTitle?: ReactNode;
    heroActions?: ReactNode;
    image?: string;
};
declare const Hero: ({ title, subTitle, heroActions, image }: HeroProps) => React.JSX.Element;
export default Hero;
