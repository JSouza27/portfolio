import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from './Style';

function NavLinks() {
  return (
    <LinkContainer>
      <Link to="/Resume">Resumo</Link>
      <Link to="/Projects">Projetos</Link>
      <Link to="/Contact">Contato</Link>
    </LinkContainer>
  );
}

export default NavLinks;
