import { default as React, ReactNode } from 'react';
export type CarouselProps = {
    children?: ReactNode;
    className?: string;
};
declare const Carousel: ({ children, className }: CarouselProps) => React.JSX.Element;
export default Carousel;
