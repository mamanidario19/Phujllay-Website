import React from 'react';
import './About.css';
import aventuraImg from '../../assets/concept-art.png';
import culturaImg from '../../assets/noa.jpg';
import carnavalImg from '../../assets/carnaval.jpg';
import bgImg from '../../assets/about/bg001.png'

const About = () => {
  return (
    <div className="about-container">

      <section className="synopsis-section">
        <h1>SINOPSIS</h1>
        <p>Rumi es un adolescente introvertido, que pasa la mayor parte de su tiempo frente a una pantalla. Tiene pocos amigos y apenas se comunica con sus padres. Pero su vida cambiará cuando una serie de eventos lo obligarán a ser el “elegido” por la Pachamama para que, mediante un chascha mágico, purifique a los espíritus rebeldes del carnaval que se niegan a volver a su plano espiritual.
          Así comienzan sus emocionantes aventuras, a través de mágicos desafíos. Un viaje por la cultura e historia de un pueblo del norte argentino a través de sus espíritus y sus mitos. ¿Podrá encontrarse consigo mismo y crecer a través del contacto con sus raíces gracias a la alegría que contagia el carnaval? Esta es una historia de crecimiento personal, en la que la familia y la tradición juegan un papel fundamental. Rumi pasará de ser un adolescente sin interés por el mundo que le rodea a un joven que entiende su herencia cultural y que participa en la vida de su familia.
        </p>
      </section>

      <section className="features-section">

        <div className="feature">
          <div className="background-image" style={{ backgroundImage: `url(${bgImg})` }}></div>
          <div className="content-container">
            <div className="text-content">
              <h2>Feature 1</h2>
              <p>Descripción de la primera característica.</p>
            </div>
            <img className="overlay-image" src={aventuraImg} alt="Aventura" />
          </div>
        </div>

        <div className="feature">
          <div className="background-image" style={{ backgroundImage: `url(${bgImg})` }}></div>
          <div className="content-container">
            <div className="text-content">
              <h2>Feature 2</h2>
              <p>Descripción de la segunda característica.</p>
            </div>
            <img className="overlay-image" src={culturaImg} alt="Cultura" />
          </div>
        </div>

        <div className="feature">
          <div className="background-image" style={{ backgroundImage: `url(${bgImg})` }}></div>
          <div className="content-container">
            <div className="text-content">
              <h2>Feature 3</h2>
              <p>Descripción de la tercera característica.</p>
            </div>
            <img className="overlay-image" src={carnavalImg} alt="Carnaval" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;