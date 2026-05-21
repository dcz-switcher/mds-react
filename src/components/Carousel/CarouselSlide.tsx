import React, { ReactNode } from "react";

export type CarouselSlideProps = {
    children?: ReactNode,
    className?: string
}

const CarouselSlide = ({children, className = ''}:CarouselSlideProps) => {
    return (
        <div className={`mds-carousel__slide ${className}`}>
            {children}
        </div>
    )
};

export default CarouselSlide;