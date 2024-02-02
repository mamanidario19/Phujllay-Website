import './Carousel.css';
import React, { useRef, useState } from 'react';
import { MdOutlineArrowBackIos } from "react-icons/md"
import { MdOutlineArrowForwardIos } from "react-icons/md";



const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  /**
   * Boton izquierdo
   */
  const handlePrevClick = () => {
    if (sliderRef.current && activeIndex > 0) {
      sliderRef.current.scrollBy({ left: -sliderRef.current.clientWidth, behavior: 'smooth' });
      setActiveIndex(activeIndex - 1);
    }
  };

  /**
   * Boton derecho
   */
  const handleNextClick = () => {
    if (sliderRef.current && activeIndex < images.length - 1) {
      sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth, behavior: 'smooth' });
      setActiveIndex(activeIndex + 1);
    }
  };

  /**
   * Slider-nav click
   * @param {*} index 
   */
  const handleNavClick = (index) => {
    if (sliderRef.current) {
      const distance = index * sliderRef.current.clientWidth;
      sliderRef.current.scrollTo({ left: distance, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  return (
    <section className='carousel-container'>
      <div className='slider-wrapper'>
        <div className='slider-container'>
          <button className="carousel-prev" onClick={handlePrevClick}><MdOutlineArrowBackIos /></button>

          <div className="slider" ref={sliderRef}>
            {images.map((imageUrl, index) => (
              <img key={index}
                src={imageUrl}
                alt={`Slide-${index}`}
                id={`slide-${index}`} />
            ))}
          </div>

          <button className="carousel-next" onClick={handleNextClick}><MdOutlineArrowForwardIos /></button>
        </div>

        <div className='slider-nav'>
          {images.map((_, index) => (
            <a key={index}
              href={`#slide-${index}`}
              className={index === activeIndex ? 'active' : ''}
              onClick={() => handleNavClick(index)}> </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel;