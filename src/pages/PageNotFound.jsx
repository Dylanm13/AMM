import React from "react"; /* importation de react */
import { Link } from "react-router-dom"; /* importation de Link de react router afin de pouvoir faire des lien entre les pages*/

function PageNotFound() { /* initialisation de la function PageNotFound */
  return (
    <div className="error"> 
      <div className="error__content">
        <p className="error__number">404</p> {/* affichage du nombre de l'erreur */}
        <p className="error__text">
          Oops ! The page that you looking for doesn't exist or is not available. {/* affichage du texte qui définit l'erreur */}
        </p>
      </div>
      <Link to="/AMM" className="error__link">
        Back to home page {/* texte qui invite à retourner sur la page d'accueil entouré d'un Link qui mène à la page Home */}
      </Link>
    </div>
  );
}

export default PageNotFound;