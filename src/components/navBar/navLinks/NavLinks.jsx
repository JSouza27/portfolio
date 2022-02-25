import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MenuContext from '../../../context/MenuContext';

import LinkContainer from './Style';

const NavLinks = () => {
  const { open, closeMenu } = useContext(MenuContext);

  return (
    <LinkContainer>
      <Link to="/" onClick={ () => open && closeMenu() }>Home</Link>
      <Link to="/Resume" onClick={ () => open && closeMenu() }>Resumo</Link>
      <Link to="/Projects" onClick={ () => open && closeMenu() }>Projetos</Link>
      <Link to="/Contact" onClick={ () => open && closeMenu() }>Contato</Link>
    </LinkContainer>
  );
};

export default NavLinks;
