import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  useCarouseButtons,
  CarouselNextButton,
  CarouselPreviousButton,
} from './CarouselButtons';
import './Carousel.css';

export default function Carousel({ slides: Slides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const {
    previousButtonDisabled,
    nextButtonDisabled,
    onPreviousButtonClick,
    onNextButtonClick,
  } = useCarouseButtons(emblaApi);

  const renderSlides = () => {
    return Slides.map((Slide, index) => (
      <div className="carousel__slide-wrapper" key={index}>
        {Slide}
      </div>
    ));
  };

  return (
    <div className="carousel">
      <CarouselPreviousButton
        onClick={onPreviousButtonClick}
        disabled={previousButtonDisabled}
      ></CarouselPreviousButton>

      <div className="carousel__viewport" ref={emblaRef}>
        <div className="carousel__container">{renderSlides()}</div>
      </div>

      <CarouselNextButton
        onClick={onNextButtonClick}
        disabled={nextButtonDisabled}
      ></CarouselNextButton>
    </div>
  );
}