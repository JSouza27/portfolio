import React from 'react';
import MobileNavBar from './MobileNavBar';
import Navigation from './Navigation';

function NavBar() {
  return (
    <div>
      <Navigation />
      <MobileNavBar />
    </div>
  );
}

export default NavBar;
