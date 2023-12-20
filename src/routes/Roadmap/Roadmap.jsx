import { Card } from '../../components/Card/RoadmapCard/RoadmapCard';
import { cards } from '../../utils/roadmapCards';
import './Roadmap.css';
import React from 'react';

const Roadmap = () => {
  return (
    <>
      <div className='contenedor'>
        <div className="title_box">
          <hr className="line_left hr_roadmap" />
          <h1 className="title">ROADMAP</h1>
          <hr className="line_right hr_roadmap" />
        </div>

        <div className='roadmap'>
          <div className="vertical-line"></div>

          {cards.map((card) => (
            <Card key={card.id}
              image={card.image}
              title={card.title}
              date={card.date}
              description={card.description} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Roadmap;
