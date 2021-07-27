import React from 'react';
import './styles.scss';
import logo from 'src/assets/logoWash1.png';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer">
    <ul className="footer-list">
      <li className="footer-list-element"><Link to="/register" className="footer-list-element-link">S'inscrire</Link></li>
      <li className="footer-list-element"><Link to="/addwasher" className="footer-list-element-link">Devenir washer</Link></li>
    </ul>
    <Link to="/"><img src={logo} alt="logo" className="footer-logo" /></Link>
    <ul className="footer-list">
      <li className="footer-list-element"><Link to="/team" className="footer-list-element-link">l'équipe</Link></li>
      <li className="footer-list-element"><Link to="/cgu#rgpd" className="footer-list-element-link">Rgpd</Link></li>
      <li className="footer-list-element"><Link to="/cgu" className="footer-list-element-link">CGU</Link></li>
    </ul>

  </div>
);

export default Footer;
