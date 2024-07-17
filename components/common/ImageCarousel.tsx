import React, { useState, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface MySliderProps {
  images: string[];
}

const MySlider: React.FC<MySliderProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    afterChange: (index: number) => setActiveIndex(index),
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <div className="sliderContainer">
      <div className="mainSliderWrapper">
        <button className="prevButton" onClick={goToPrev}>{'<'}</button>
        <Slider ref={sliderRef} {...settings} className="mainSlider">
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index + 1}`} className="mainImage" />
            </div>
          ))}
        </Slider>
        <button className="nextButton" onClick={goToNext}>{'>'}</button>
      </div>
      <div className="thumbnailContainer">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} className="thumbnailImage" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySlider;