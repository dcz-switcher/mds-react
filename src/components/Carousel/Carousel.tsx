import React, { ReactNode } from "react";

export type CarouselProps = {
    children?: ReactNode,
    className?: string
}


const Carousel = ({children, className = ''}:CarouselProps) => {
    return (
    <section id="carousel-id" aria-label="label-id">
        <div className={`mds-carousel--component ${className}`}>
            <div className="mds-carousel__container">
                <div className="mds-carousel__track">
                    {children}
                </div>
                <div className="mds-carousel__navigation">
                    <button className="mds-carousel__btn--prev">
                        <span className="mds-icon__chevron-left" aria-hidden="true"></span>
                        <span className="mds-sr-only">Panneau précédent</span>
                    </button>
                    <ul className="mds-carousel__indicators"></ul>
                    <button className="mds-carousel__btn--next">
                        <span className="mds-sr-only">Panneau suivant</span>
                        <span className="mds-icon__chevron-right" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        </div>
    </section>
    )
};

export default Carousel;