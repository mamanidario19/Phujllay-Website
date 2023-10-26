import { Card } from '../../components/Card/Card';
import { cards } from '../../utils/cards';
import './Roadmap.css';
import React from 'react';

const Roadmap = () => {
  return (
    <>
      <div className='contenedor'>
        <div className="title-box">
          <hr className="line_left" />
          <h1 className="title">ROADMAP</h1>
          <hr className="line_right" />
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
