import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <Link to="/techno">
          <li>Techno</li>
        </Link>
        <Link to="/projets">
          <li>Projets</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
