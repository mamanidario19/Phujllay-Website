import React, { useState } from "react";
import "./Team.css";
import {
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import teamData from "../../utils/teamData.js";

const TeamMember = ({ member }) => (
  <div className="member-container">
    <div className="member-card">
      {/* Muestra la imagen del miembro */}
      <img
        className="image_perfil"
        src={member.img}
        alt={member.nombreCompleto}
      />

      {/* Muestra los enlaces de contacto */}
      <div className="contact-card">
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        )}
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
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
    {/* Muestra los detalles del miembro */}
    <div className="member-details">
      <h2>{member.nombreCompleto}</h2>
      {/* Muestra multiples roles */}
      <p>{member.roles.join(", ")}</p>
    </div>
  </div>
);

const Team = () => {
  // Estado para almacenar el rol seleccionado
  const [selectedRoles, setSelectedRoles] = useState([]);

  // Funcion para manejar la seleccion de roles
  const handleRoleSelect = (role) => {
    // Si se ha seleccionado "Todos"
    if (role === null) {
      // Mostrar a todos los miembros
      setSelectedRoles([]);
      return;
    }

    // Si el rol ya esta seleccionado
    if (selectedRoles.includes(role)) {
      // Y Si se hace clic nuevamente en un rol seleccionado, no hacemos nada
      return;
    }

    // Si no hay roles seleccionados, rol actual "Todos"
    setSelectedRoles([role]);
  };

  // Filtra los datos del equipo segun el rol seleccionado
  const filteredTeamData =
    selectedRoles.length > 0
      ? teamData.filter((member) =>
          selectedRoles.some((selectedRole) =>
            member.roles.includes(selectedRole)
          )
        )
      : teamData;

  //Renderizar el componente Team
  return (
    <>
      {/* Seccion del titulo Team */}
      <div className="team-title-container">
        <h1 className="team-title">TEAM</h1>
      </div>

      {/* Botones de filtro */}
      <div className="filter-buttons-container">
        <button onClick={() => handleRoleSelect(null)}>Todos</button>
        <button onClick={() => handleRoleSelect("Narrador")}>Narradores</button>
        <button onClick={() => handleRoleSelect("Animador")}>Animadores</button>
        <button onClick={() => handleRoleSelect("Sonidista")}>
          Sonidistas
        </button>
        <button onClick={() => handleRoleSelect("Programador")}>
          Programadores
        </button>
        <button onClick={() => handleRoleSelect("Productor")}>Productor</button>
        <button onClick={() => handleRoleSelect("Director")}>Director</button>
      </div>

      {/* Seccion de tarjetas */}
      <div className="members-section">
        <div className="member-cards">
          {/* Busca o mapea y renderiza tarjetas de los miembros*/}
          {filteredTeamData.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Team;
