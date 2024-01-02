import { RoadmapCard } from '../../components/Card/RoadmapCard/RoadmapCard';
import { cards } from '../../utils/roadmapCards';
import './Roadmap.css';
import imgrocas from '../../assets/Roadmap/Rocas-Silueta.png';
import React from 'react';

const Roadmap = () => {
  return (
    <>
      <div className='roadmap-container'>
        <section className='roadmap-title-container'>
          <h1 className="roadmap-title">ROADMAP</h1>
        </section>

        <section className='roadmap-content-container'>
          <div className='roadmap-content-poste-left'></div>
          <div className='roadmap-content-poste-right'></div>

          <div className='roadmap-content-cards'>
            {cards.map((card) => (
              <RoadmapCard key={card.id}                
                title={card.title}
                date={card.date}
                description={card.description}
                images={card.images} />
            ))}
          </div>

          <img src={imgrocas} alt="Rocas Siluetas" className='img-rocas' />
        </section>
      </div>
    </>
  )
}

export default Roadmap;
