import { RoadmapCard } from '../../components/Card/RoadmapCard/RoadmapCard';
import { cards } from '../../utils/roadmapCards';
import './Roadmap.css';
import imgrocas from '../../assets/Roadmap/Rocas-Silueta.png';
import React from 'react';
import TituloPrincipal from '../../components/Titulo/TituloPrincipal/TituloPrincipal';

const Roadmap = () => {
  return (
    <>
      <main className='roadmap-container'>
        <TituloPrincipal title="Roadmap" />

        <section className='roadmap-content-container'>
          <span className='roadmap-content-poste-left'></span>
          <span className='roadmap-content-poste-right'></span>

          <div className='roadmap-content-cards'>
            {cards.map((card) => (
              <RoadmapCard key={card.id}
                id={card.id}
                title={card.title}
                date={card.date} />
            ))}
          </div>

          <img src={imgrocas} alt="Rocas Siluetas" className='img-rocas' />
        </section>
      </main>
    </>
  )
}

export default Roadmap;
