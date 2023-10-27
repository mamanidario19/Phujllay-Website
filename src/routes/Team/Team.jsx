import './Team.css';
import React from 'react';
import adolfo from '../../assets/Fotos_Perfil/Adolfo.JPG'
import agustin from '../../assets/Fotos_Perfil/Agustin.JPG'
import aylen from '../../assets/Fotos_Perfil/Aylen.JPG'
import dario from '../../assets/Fotos_Perfil/Dario.JPG'
import evelyn from '../../assets/Fotos_Perfil/Evelyn.JPG'
import gabriel from '../../assets/Fotos_Perfil/Gabriel.JPG'
import guillermo from '../../assets/Fotos_Perfil/Guillermo.JPG'
import jonathan from '../../assets/Fotos_Perfil/Jonathan.JPG'
import nataniel from '../../assets/Fotos_Perfil/Nataniel.JPG'
import ariel from '../../assets/Fotos_Perfil/Vega.JPG'
import ezequiel from '../../assets/Fotos_Perfil/Ezequiel.png'

const Team = () => {

  const teamMembers = [
    {
      img: adolfo,
      nombreCompleto: 'Adolfo Agostini',
      rol: 'Animador',
      descripcion: 'Descripcion',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: agustin,
      nombreCompleto: 'Agustin Ponce',
      rol: 'Sonidista',
      descripcion: 'Descripcion',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: aylen,
      nombreCompleto: 'Aylén Rodriguez',
      rol: 'Animadora',
      descripcion: 'Descripcion',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: dario,
      nombreCompleto: 'Dario Mamani',
      rol: 'Programador',
      descripcion: 'Descripcion',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: evelyn,
      nombreCompleto: 'Evelyn Ramos',
      rol: 'Programadora',
      descripcion: 'Descripcion',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: gabriel,
      nombreCompleto: 'Gabriel Flores',
      rol: 'Sonidista',
      descripcion: 'Descripcion',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: guillermo,
      nombreCompleto: 'Guillermo Arostegui',
      rol: 'Sonidista',
      descripcion: 'Descripcion',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: jonathan,
      nombreCompleto: 'Jonatan Calapeña',
      rol: 'Sonidista',
      descripcion: 'Descripcion',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: nataniel,
      nombreCompleto: 'Nataniel Cazon',
      rol: 'Programador',
      descripcion: 'Descripcion',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: ariel,
      nombreCompleto: 'Ariel Vega',
      rol: 'Programador',
      descripcion: 'Descripcion',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: ezequiel,
      nombreCompleto: 'Ezequiel Ozan',
      rol: 'Sonido',
      descripcion: 'Descripcion',
      linkedin: '',
      email: '',
      github: '',
    },

  ];











  return (
    <>
      <div className="title_box">
        <hr className="line_left hr_roadmap" />
        <h1 className="title">EQUIPO</h1>
        <hr className="line_right hr_roadmap" />
      </div>

      <div className="team">
        <div className="member-cards">
          {teamMembers.map((member, index) => (
            <div className="member-card" key={index}>
              <img className='image_perfil' src={member.img} alt={member.nombreCompleto} />
              <h2>{member.nombreCompleto}</h2>
              <p>{member.rol}</p>
              <p>{member.descripcion}</p>
              <div className="contact-card">
                <a href={member.linkedin}>LinkedIn</a>
                <a href={`mailto:${member.email}`}>Email</a>
                <a href={member.github}>GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Team;
