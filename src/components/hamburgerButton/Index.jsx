import React, { useContext } from 'react';
import Path from './Path/Path';

import MenuContext from '../../context/MenuContext';
import Button from './style';

const HambugerButton = () => {
  const { open, toggleMenu } = useContext(MenuContext);
  const transition = { duration: 0.33 };
  const color = 'hsl(0, 0%, 18%)';

  return (
    <Button
      type="button"
      onClick={ () => toggleMenu() }
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          animate={ open ? 'open' : 'closed' }
          initial={ false }
          variants={ {
            closed: { d: 'M 2 2.5 L 20 2.5', stroke: color },
            open: { d: 'M 3 16.5 L 17 2.5', stroke: color },
          } }
          transition={ transition }
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke={ color }
          animate={ open ? 'open' : 'closed' }
          initial={ false }
          variants={ {
            closed: { opacity: 1 },
            open: { opacity: 0 },
          } }
          transition={ transition }
        />
        <Path
          animate={ open ? 'open' : 'closed' }
          initial={ false }
          variants={ {
            closed: { d: 'M 2 16.346 L 20 16.346', stroke: color },
            open: { d: 'M 3 2.5 L 17 16.346', stroke: color },
          } }
          transition={ transition }
        />
      </svg>
    </Button>
  );
};

export default HambugerButton;
