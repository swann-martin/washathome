import React from 'react';
import { Link } from 'react-router-dom';
import errormachine from 'src/assets/errormachine.webp';

import './styles.scss';

const ErrorPage = () => (
  <div className="errorpage">
    <h2 className="errorpage-title">Error 404</h2>
    <h2 className="errorpage-title errorpage-title--sub">Sorry, I cannot wash !</h2>
    <Link
      to="/"
      className="errorpage-link"
      title="aller sur la page principale"
    ><i className="fas fa-arrow-circle-left"> Retourner à la page principale</i>
    </Link>
    <img className="errorpage-picture" src={errormachine} alt="error404" />
  </div>
);

export default ErrorPage;
