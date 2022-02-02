import React from 'react';
import NavLinks from './NavLinks';
import { MobileNavigation } from './Style';

function MobileNavBar() {
  return (
    <MobileNavigation>
      <NavLinks />
    </MobileNavigation>
  );
}

export default MobileNavBar;
