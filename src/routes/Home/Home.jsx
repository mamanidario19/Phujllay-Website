import './Home.css';
import React from 'react';
//import backimg from '../../assets/Phujllay.png';
import Parallax from '../../components/Parallax/Parallax.jsx';

const Home = () => {
  return (
    <div>
      <Parallax />
      <div className="home-container"> 
        <div className="sinopsis">
          <h2>Sinopsis del Videojuego</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, asperiores omnis soluta culpa perspiciatis debitis sunt neque, reprehenderit, ad iste iure vel nemo. Molestiae atque id accusantium recusandae? Autem, sunt.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia eos tempora dolorem consequatur aliquid quisquam esse nulla expedita aperiam eveniet mollitia commodi repellat voluptate, nam nesciunt velit, obcaecati minus quae.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem nemo sequi ipsam nostrum fuga quo alias eligendi repudiandae iste recusandae voluptas nulla, laudantium, eius iusto necessitatibus hic adipisci, expedita dignissimos!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rem sint eum quisquam blanditiis? Officia neque at deleniti rerum voluptatibus placeat sapiente exercitationem amet optio, excepturi, aut, in nam fugiat!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At cum quae dolorum consequatur, natus tenetur cupiditate possimus minus, laborum sint harum perferendis pariatur quod magnam cumque, ducimus consequuntur totam maxime!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
