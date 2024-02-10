import React, { useState } from "react";
import "./Team.css";
import TituloPrincipal from '../../components/Titulo/TituloPrincipal/TituloPrincipal';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import teamData from "../../utils/teamData.js";

const SocialIcon = ({ href, icon: Icon }) => (
  <div className="social-icon">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="icon" />
    </a>
  </div>
);

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
        {member.linkedin && <SocialIcon href={member.linkedin} icon={FaLinkedin} />}
        {member.github && <SocialIcon href={member.github} icon={FaGithub} />}
        {member.instagram && <SocialIcon href={member.instagram} icon={FaInstagram} />}
        {member.facebook && <SocialIcon href={member.facebook} icon={FaFacebook} />}
        {member.twitter && <SocialIcon href={member.twitter} icon={FaTwitter} />}
      </div>
    </div>
    {/* Muestra los detalles del miembro */}
    <div className="member-details">
      <h3>{member.nombreCompleto}</h3>
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
        {/* <h1 className="team-title">TEAM</h1> */}
        <TituloPrincipal title="equipo" />
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
