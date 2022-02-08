import React, { useContext, useEffect } from 'react';
import noScroll from 'no-scroll';
import HambugerButton from '../../hamburgerButton/Index';

import NavLinks from '../navLinks/NavLinks';
import MobileNav from './Style';
import MenuContext from '../../../context/MenuContext';

const MobileNavigation = () => {
  const { open } = useContext(MenuContext);

  const toggleScroll = (bool) => {
    if (bool) {
      return noScroll.on();
    }

    return noScroll.off();
  };

  useEffect(() => {
    toggleScroll(open);
  }, [open]);

  return (
    <MobileNav className="mobile-navigation">
      {open && <NavLinks />}
      <HambugerButton />
    </MobileNav>
  );
};

export default MobileNavigation;
