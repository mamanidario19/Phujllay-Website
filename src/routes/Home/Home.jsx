import './Home.css';
import React from 'react';
import backimg from '../../assets/placeholder_home-image.png';

const Home = () => {
  return (
    <div className="home-container">

      <div className="background-image">
        <img src={backimg} alt="Imagen principal de Inicio" />
      </div>

      <div className="sinopsis">
        <h2>Sinopsis del Videojuego</h2>
        <p>
          Rumi es un adolescente introvertido, que pasa la mayor parte de su tiempo frente a una pantalla. Tiene pocos amigos y apenas se comunica con sus padres. Pero su vida cambiará cuando una serie de eventos lo obligarán a ser el “elegido” por la Pachamama para que, mediante un chascha mágico, purifique a los espíritus rebeldes del carnaval que se niegan a volver a su plano espiritual.
          Así comenzan sus emocionantes aventuras, a través de mágicos desafíos. Un viaje por la cultura e historia de un pueblo del norte argentino a través de sus espíritus y sus mitos. ¿Podrá encontrarse consigo mismo y crecer a través del contacto con sus raíces gracias a la alegría que contagia el carnaval? Esta es una historia de crecimiento personal, en la que la familia y la tradición juegan un papel fundamental. Rumi pasará de ser un adolescente sin interés por el mundo que le rodea a un joven que entiende su herencia cultural y que participa en la vida de su familia.
        </p>
      </div>
    </div>
  );
};

export default Home;
