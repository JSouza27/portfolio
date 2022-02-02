import React from 'react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Content } from './Style';

function Footer() {
  return (
    <Content>
      <div>
        <h2>Contato</h2>
        <span>(21) 9 7001-6955</span>
      </div>
      <div>
        <h2>Email</h2>
        <span>souzajonathan570@gmail.com</span>
      </div>
      <div>
        <h2>Siga me</h2>
        <a href='https://www.linkedin.com/in/jsouzap/' alt='linkedin'>
          <FaLinkedinIn />
        </a>
        <a href='https://github.com/JSouza27' alt='GitHub'>
          <FaGithub />
        </a>
      </div>
      <div>
        <span>Pagina feita usando as tecnologias React e Styled Conponent</span>
      </div>
    </Content>
  );
}

export default Footer;
