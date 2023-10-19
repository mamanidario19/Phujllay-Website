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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis ipsa maiores sint quibusdam? Placeat, recusandae perspiciatis mollitia illum, delectus vel nesciunt accusamus corporis soluta consectetur, vitae culpa fuga eveniet ipsum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facere, mollitia atque rem quibusdam odit, sequi officiis tenetur alias aspernatur sint veritatis, amet vel harum molestiae fugit ipsum eos assumenda?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi repellendus earum perspiciatis perferendis alias cumque tempore atque delectus ipsum, iure rem ab itaque nihil, rerum quaerat minima ea, vitae quasi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quod quos nobis quibusdam possimus quidem ab provident. Sequi, iste totam vitae nobis, corporis voluptates dolorum, id ipsum fuga consequuntur similique?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur totam illo pariatur, iste ipsa possimus dicta consequuntur fuga eaque unde odit qui harum, blanditiis nemo accusantium, veniam ex suscipit?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi distinctio fuga porro odit corporis eius minima consequatur minus. Laudantium, temporibus sapiente totam quasi mollitia nihil natus commodi. Quasi, dicta.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, possimus mollitia provident officiis sunt incidunt dolore rerum voluptate temporibus est, reiciendis sapiente fuga in nihil similique? Vel eos fuga magnam?
        </p>
      </div>
    </div>
  );
};

export default Home;
