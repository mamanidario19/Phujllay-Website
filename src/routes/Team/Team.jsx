import './Team.css';
import React from 'react';

const Team = () => {

  const teamMembers = [
    {
      img: 'img.jpg',
      nombreCompleto: 'Integrante 1',
      rol: 'Programadora',
      descripcion: 'lorem dasfasdf asfasf asfasfasfasf',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: 'img.jpg',
      nombreCompleto: 'Integrante 2',
      rol: '',
      descripcion: 'lorem dasfasdf asfasf asfasfasfasf',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: 'img.jpg',
      nombreCompleto: 'Integrante 3',
      rol: '',
      descripcion: 'lorem dasfasdf asfasf asfasfasfasf',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: 'img.jpg',
      nombreCompleto: 'Integrante 4',
      rol: '',
      descripcion: 'lorem dasfasdf asfasf asfasfasfasf',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: 'img.jpg',
      nombreCompleto: 'Integrante 5',
      rol: '',
      descripcion: 'lorem dasfasdf asfasf asfasfasfasf',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: 'img.jpg',
      nombreCompleto: 'Integrante 6',
      rol: '',
      descripcion: 'lorem dasfasdf asfasf asfasfasfasf',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: 'img.jpg',
      nombreCompleto: 'Integrante 7',
      rol: '',
      descripcion: 'lorem dasfasdf asfasf asfasfasfasf',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: 'img.jpg',
      nombreCompleto: 'Integrante 8',
      rol: '',
      descripcion: 'lorem dasfasdf asfasf asfasfasfasf',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: 'img.jpg',
      nombreCompleto: 'Integrante 9',
      rol: '',
      descripcion: 'lorem dasfasdf asfasf asfasfasfasf',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: 'img.jpg',
      nombreCompleto: 'Integrante 10',
      rol: '',
      descripcion: 'lorem dasfasdf asfasf asfasfasfasf',
      linkedin: '',
      email: '',
      github: '',
    },
    {
      img: 'img.jpg',
      nombreCompleto: 'Integrante 11',
      rol: '',
      descripcion: 'lorem dasfasdf asfasf asfasfasfasf',
      linkedin: '',
      email: '',
      github: '',
    },

  ];











  return (
    <div className="team">
      <div className="member-cards">
        {teamMembers.map((member, index) => (
          <div className="member-card" key={index}>
            <img src={member.img} alt={member.nombreCompleto} />
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
  );
};
export default Team;
