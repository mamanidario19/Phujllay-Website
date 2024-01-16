import './TituloPrincipal.css';
import React from 'react';

const TituloPrincipal = ({ title }) => {
  const colors = ['#FF0000', '#FFA500', '#FFFF00', '#FFFFFF', '#008000', '#0000FF', '#800080'];

  let nonWhitespaceCharIndex = 0; // Indice para caracteres no especiales

  return (
    <h1 className='titulo-principal'>
      {title.split('').map((char, index) => {
        if (char.trim() === '') {
          // Retorna el espacio en blanco          
          return char;
        } else {          
          // Asigna el color y retorna el caracter no especial
          const color = colors[nonWhitespaceCharIndex % colors.length];          
          nonWhitespaceCharIndex++;
          return <span key={index} style={{ color }}>{char}</span>;
        }
      })}
    </h1>
  );
};

export default TituloPrincipal;