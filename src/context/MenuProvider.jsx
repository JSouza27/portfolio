import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuContext from './MenuContext';

const MenuProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <MenuContext.Provider value={ { open, toggleMenu, closeMenu } }>
      {children}
    </MenuContext.Provider>
  );
};

MenuProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MenuProvider;
