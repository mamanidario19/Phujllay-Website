import Carousel from '../../components/Carousel/Carousel';
import TituloPrincipal from '../../components/Titulo/TituloPrincipal/TituloPrincipal';
import { carousels } from '../../utils/developmentData';
import './Development.css';
import React from 'react';

const Development = () => {
  return (
    <>
      <main className='development-container'>
        <TituloPrincipal title="desarrollo" />

        <div className="development-carousels">
          {carousels.map((carousel) => (
            <div key={carousel.id} className='carrousel-container'>
              <div className="carousel-title-container">
                <h3 className="carousel-title">{carousel.title}</h3>
              </div>
              
              <Carousel images={carousel.images} />
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
export default Development;
