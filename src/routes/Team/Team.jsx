import './Team.css';
import React from 'react';
import teamData from '../../utils/teamData.js';


const TeamMember = ({ member }) => (
  <div className="member-card">
    <img className="image_perfil" src={member.img} alt={member.nombreCompleto} />
    <h2>{member.nombreCompleto}</h2>
    <p>{member.rol}</p>
    <p>{member.descripcion}</p>
    <div className="contact-card">
      {member.linkedin && <a href={member.linkedin}>LinkedIn</a>}
      {member.email && <a href={`mailto:${member.email}`}>Email</a>}
      {member.github && <a href={member.github}>GitHub</a>}
    </div>
  </div>
);
  
const Team = () => (
  <>
    <div className="members-section">
      <div className="member-cards">
        {teamData.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </div>
  </>
);

export default Team;
