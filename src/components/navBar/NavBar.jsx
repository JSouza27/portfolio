import React from 'react';
import MenuProvider from '../../context/MenuProvider';
import MobileNavigation from './mobileNavigation/MobileNavigation';
import Navigation from './navigation/Navigation';

import NavBarContainer from './Style';

const NavBar = () => (
  <MenuProvider>
    <NavBarContainer>
      <Navigation />
      <MobileNavigation />
    </NavBarContainer>
  </MenuProvider>
);

export default NavBar;
