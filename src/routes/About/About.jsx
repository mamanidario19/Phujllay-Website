import React from 'react';
import './About.css';
import aventuraImg from '../../assets/concept-art.png';
import culturaImg from '../../assets/noa.jpg';
import carnavalImg from '../../assets/carnaval.jpg';

const About = () => {
  return (
    <div className="about-container">

      <section className="synopsis-section">

        <p>Rumi es un adolescente introvertido, que pasa la mayor parte de su tiempo frente a una pantalla. Tiene pocos amigos y apenas se comunica con sus padres. Pero su vida cambiará cuando una serie de eventos lo obligarán a ser el “elegido” por la Pachamama para que, mediante un chascha mágico, purifique a los espíritus rebeldes del carnaval que se niegan a volver a su plano espiritual.
          Así comienzan sus emocionantes aventuras, a través de mágicos desafíos. Un viaje por la cultura e historia de un pueblo del norte argentino a través de sus espíritus y sus mitos. ¿Podrá encontrarse consigo mismo y crecer a través del contacto con sus raíces gracias a la alegría que contagia el carnaval? Esta es una historia de crecimiento personal, en la que la familia y la tradición juegan un papel fundamental. Rumi pasará de ser un adolescente sin interés por el mundo que le rodea a un joven que entiende su herencia cultural y que participa en la vida de su familia.
        </p>
      </section>
      <section className="features-section">
        <h2>Características principales</h2>
        <div className="feature-box">
          <div className="feature-content">
            <img src={aventuraImg} alt="Imagen de Aventura" />
            <p>Aventura: Explora cada rincón del mapa y embarcate en la historia de Rumi, superando obstáculos y viviendo increíbles historias mientras purificas los espíritus del carnaval.
              Plataformas y puzzles: A lo largo del juego, cada espíritu te presentará un reto diferente y único, basado en su trasfondo y mitología. Para capturarlos, deberás superar estos desafíos y avanzar en la historia.
              Rol: Podrás experimentar la aventura y la historia mágica desde la perspectiva de Rumi, ayudándola en su misión de salvar a sus padres y recuperar su valioso celular, viendola crecer emocinal y socialmente.
            </p>
          </div>
        </div>
        <div className="feature-box">
          <div className="feature-content">
            <img src={culturaImg} alt="Imagen de Cultura" />
            <p>Basado en la cultura del NOA: Tanto el equipo artístico como el narrativo se han sumergido en la cultura del norte argentino para ofrecer una experiencia única y tradicional de los pueblos y comunidades del NOA.</p>
          </div>
        </div>
        <div className="feature-box">
          <div className="feature-content">
            <img src={carnavalImg} alt="Imagen de Carnaval" />
            <p>Historia del carnaval: Durante generaciones, la historia del carnaval ha sido transmitida de generación en generación. Hemos basado nuestro juego en esas historias y leyendas para proporcionar un contexto conocido y familiar a las personas que viven esta festividad, transmitiendo así la alegría y el significado de esta hermosa celebración del norte de Argentina.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
