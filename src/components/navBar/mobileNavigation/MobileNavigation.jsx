import React, { useContext } from 'react';
import HambugerButton from '../../hamburgerButton/Index';

import NavLinks from '../navLinks/NavLinks';
import MobileNav from './Style';
import MenuContext from '../../../context/MenuContext';

const MobileNavigation = () => {
  const { open } = useContext(MenuContext);

  return (
    <MobileNav className="mobile-navigation">
      {open && <NavLinks />}
      <HambugerButton />
    </MobileNav>
  );
};

export default MobileNavigation;
