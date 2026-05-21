import React from 'react';
import type { Meta } from '@storybook/react';

import Carousel from './Carousel';
import CarouselSlide from './CarouselSlide';

const meta = {
  component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;


//export const Default: Story = {};
export const Default = () => {


  setTimeout(() => {
    window.document.dispatchEvent(new Event('DOMContentLoaded', {
        bubbles: true,
        cancelable: true
      }));
    }, 1000);

  return (
    <Carousel>
      <CarouselSlide>
        <img src="https://composants-design.macif.fr/assets/component-img/card-snap-v2.webp" style={{height: '404px'}} />
      </CarouselSlide>
      <CarouselSlide>
 
        <div className="mds-carousel__item mds-card mds-card--immersive">
          <span className="mds-icon__arrow-forward" aria-hidden="true"></span>
              <div className="mds-card__content">
                  <h3 className="mds-card__title">
                      <a href="#" className="mds-card__link">Je suis le titre de la card</a>
                  </h3>
              </div>
              <div className="mds-card__img">
                  <img src="https://composants-design.macif.fr/assets/component-img/card-highlight.webp" alt="" />
              </div>
          </div>
 
        <div className="mds-carousel__item mds-card mds-card--immersive">
          <span className="mds-icon__arrow-forward" aria-hidden="true"></span>
              <div className="mds-card__content">
                  <h3 className="mds-card__title">
                      <a href="#" className="mds-card__link">Je suis le titre de la card</a>
                  </h3>
              </div>
              <div className="mds-card__img">
                  <img src="https://composants-design.macif.fr/assets/component-img/card-highlight.webp" alt="" />
              </div>
          </div>
 
      </CarouselSlide>
    </Carousel>
  )
}