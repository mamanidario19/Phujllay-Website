import React, { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import './Parallax.css';

import imagen1 from '../../assets/Home/nube_cielo.png';
import imagen2 from '../../assets/Home/montanas.png';
import imagen3 from '../../assets/Home/arboles_suelo.png';
import imagen4 from '../../assets/Home/titulo.png';
import imagen5 from '../../assets/Home/piedras.png';

const Parallax = () => {
    const scrollY = useMotionValue(0);
  
    useEffect(() => {
      const onScroll = () => {
        scrollY.set(window.scrollY);
      };
  
      window.addEventListener('scroll', onScroll);
  
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }, [scrollY]);
  
    const speed1 = 0.5;
    const speed2 = 0.3;
    const speed3 = 0.2;
    const speed4 = 0.1;
    const speed5 = 0.05;
  
    const translateY1 = useMotionValue(0);
    const translateY2 = useMotionValue(0);
    const translateY3 = useMotionValue(0);
    const translateY4 = useMotionValue(0);
    const translateY5 = useMotionValue(0);
  
    useEffect(() => {
      const updateTransforms = () => {
        translateY1.set(-scrollY.get() * speed1);
        translateY2.set(-scrollY.get() * speed2);
        translateY3.set(-scrollY.get() * speed3);
        translateY4.set(-scrollY.get() * speed4);
        translateY5.set(-scrollY.get() * speed5);
      };
  
      const onScroll = () => {
        requestAnimationFrame(updateTransforms);
      };
  
      window.addEventListener('scroll', onScroll);
  
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }, [scrollY, speed1, speed2, speed3, speed4, speed5, translateY1, translateY2, translateY3, translateY4, translateY5]);
  
    return (
      <div className='parallax-container'>
        {/*_____________ Imagen _____________ */}
        <motion.div
          className='parallax-image'
          style={{
            backgroundImage: `url(${imagen1})`,
            translateY: translateY1,
          }}
        ></motion.div>
  
       {/*_____________ Imagen _____________ */}
        <motion.div
          className='parallax-image'
          style={{
            backgroundImage: `url(${imagen2})`,
            translateY: translateY2,
          }}
        ></motion.div>
  
        {/*_____________ Imagen _____________ */}
        <motion.div
          className='parallax-image'
          style={{
            backgroundImage: `url(${imagen3})`,
            translateY: translateY3,
          }}
        ></motion.div>
  
        {/*_____________ Imagen _____________ */}
        <motion.div
          className='parallax-image'
          style={{
            backgroundImage: `url(${imagen4})`,
            translateY: translateY4,
          }}
        ></motion.div>
  
        {/*_____________ Imagen _____________ */}
        <motion.div
          className='parallax-image'
          style={{
            backgroundImage: `url(${imagen5})`,
            translateY: translateY5,
          }}
        ></motion.div>
      </div>
    );
  };
  export default Parallax;
