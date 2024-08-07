import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="head-intro">
          <h1>Bienvenue sur mon portfolio</h1>
          <h2>
            Je suis Ayena TCHIKPE, Développeur front-end JavaSrcipt spécilisé en
            Réact et Next.js
          </h2>
          <p>
            Découvrez mes projets, compétences et réalisations en développement
            web. Explorez mon parcours et contactez-moi pour toute collaboration
            ou opportunité professionnelle. Bonne visite !
            <a href="/ayenaCV.pdf" download>
              <button>Télécharger mon CV</button>
            </a>
          </p>
        </div>
        <div className="photo">
          <img src="./ay.webp" alt="Ayena TCHIKPE" />
        </div>
      </div>
    </div>
  );
};

export default Header;
