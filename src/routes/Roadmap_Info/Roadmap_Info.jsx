import { useParams } from 'react-router-dom';
import './Roadmap_Info.css';
import React from 'react';
import { cards } from '../../utils/roadmapCards';
import Carrousel from '../../components/Carrousel/Carrousel';
import TituloPrincipal from '../../components/Titulo/TituloPrincipal/TituloPrincipal';

const Roadmap_Info = () => {
  const params = useParams();
  const item = cards.find((item) => item.id === Number(params.id));

  return (
    <>
      <main className='roadmap-info'>
        <TituloPrincipal title={item.title} />

        <Carrousel images={item.images} />

        <article className='roadmap-info-description'>
          <p>{item.description}</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptate sed necessitatibus quae ut. Laudantium asperiores quo ullam voluptates incidunt quia repellat aliquam, deleniti id maxime quae dignissimos aperiam earum.</p>
        </article>
      </main>
    </>
  )
}

export default Roadmap_Info;