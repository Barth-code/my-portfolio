import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Référence au menu burger

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    // Vérifie si le clic se fait en dehors du menu burger
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Ajoute un écouteur d'événement global pour les clics
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Nettoie l'écouteur d'événement lors du démontage du composant
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navigation">
      <NavLink to="/">
        <img src="./logo.webp" alt="Ayena" />
      </NavLink>
      <div className="burger" onClick={toggleMenu}>
        ☰
      </div>
      <ul ref={menuRef} className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/compétances"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Compétences</li>
        </NavLink>
        <NavLink
          to="/projets"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Projets</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
