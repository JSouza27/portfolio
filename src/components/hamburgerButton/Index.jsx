import React, { useContext } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import MenuContext from '../../context/MenuContext';
import Button from './style';

const HambugerButton = () => {
  const { open, toggleMenu } = useContext(MenuContext);

  return (
    <Button
      type="button"
      onClick={ () => toggleMenu() }
    >
      {
        open ? <AiOutlineClose size={ 24 } /> : <AiOutlineMenu size={ 24 } />
      }
    </Button>
  );
};

export default HambugerButton;
