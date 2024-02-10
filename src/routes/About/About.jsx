import React from 'react';
import './About.css';
import aventuraImg from '../../assets/concept-art.png';
import culturaImg from '../../assets/noa.jpg';
import carnavalImg from '../../assets/carnaval.jpg';
import bgImg from '../../assets/about/bg001.png'
import { Link } from 'react-router-dom';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');
</style>

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

        <div className="feature" style={{ backgroundImage: `url(${bgImg})` }}>
          <Link to="/feature-1" style={{ textDecoration: 'none' }}>
            <div className="content-container">
              <div className="text-content">
                <h2>Feature 1</h2>
                <p>Descripción de la primera característica. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo ipsum alias aut inventore accusamus, commodi molestiae distinctio ex magni quia. Eligendi aspernatur error eaque fuga velit eos minus placeat!
                </p>
              </div>
              <figure className="img-content">
                <img className="overlay-image" src={aventuraImg} alt="Aventura" />
              </figure>
            </div>
          </Link>
        </div>

        <div className="feature" style={{ backgroundImage: `url(${bgImg})` }}>
          <Link to="/feature-2" style={{ textDecoration: 'none' }}>
            <div className="content-container">
              <div className="text-content">
                <h2>Feature 2</h2>
                <p>Descripción de la segunda característica.quasi voluptates voluptatum exercitationem qui natus culpa vitae. Provident?Descripción de la primera característica. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, explicabo ipsum alias aut inventore accusamus, commodi molestiae distinctio ex magni quia.  </p>
              </div>
              <figure className="img-content">
                <img className="overlay-image" src={culturaImg} alt="Cultura" />
              </figure>
            </div>
          </Link>
        </div>

        <div className="feature" style={{ backgroundImage: `url(${bgImg})` }}>
          <Link to="/feature-3" style={{ textDecoration: 'none' }}>
            <div className="content-container">
              <div className="text-content">
                <h2>Feature 3</h2>
                <p>Descripción de la tercera característica. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eos dolor totam cum ea magni, consequuntur recusandae debitis odit, at cumque ullam corrupti nesciunt. Expedita atque vel fugiat eaque quae.</p>
              </div>
              <figure className="img-content">
                <img className="overlay-image" src={carnavalImg} alt="Carnaval" />
              </figure>
            </div>
          </Link>
        </div>

      </section>
    </div>
  );
};

export default About;