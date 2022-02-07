import React from 'react';
import { Link } from 'react-router-dom';

import LinkContainer from './Style';

const NavLinks = () => (
  <LinkContainer>
    <Link to="/">Home</Link>
    <Link to="/Resume">Resumo</Link>
    <Link to="/Projects">Projetos</Link>
    <Link to="/Contact">Contato</Link>
  </LinkContainer>
);

export default NavLinks;
