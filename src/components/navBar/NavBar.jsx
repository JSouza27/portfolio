import React from 'react';
import MobileNavigation from './mobileNavigation/MobileNavigation';
import Navigation from './navigation/Navigation';

import NaBarContainer from './Style';

const NavBar = () => (
  <NaBarContainer>
    <Navigation />
    <MobileNavigation />
  </NaBarContainer>
);

export default NavBar;
