import './Team.css';
import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithub, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';  
import teamData from '../../utils/teamData.js';


const TeamMember = ({ member }) => (
  <div className="member-card">
    <img className="image_perfil" src={member.img} alt={member.nombreCompleto} />
    <h2>{member.nombreCompleto}</h2>
    <p>{member.rol}</p>

    <div className="contact-card">

    {member.linkedin && (
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      )}
      {member.email && (
        <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      )}
      {member.github && (
        <a href={member.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      )}
      {member.instagram && (
        <a href={member.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      )}
      {member.facebook && (
        <a href={member.facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      )}
      {member.twitter && (
        <a href={member.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      )}
      
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
