import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InfoContext from './InfoContext';
import getInfo from '../services/GitConnected';

const InfoProvider = ({ children }) => {
  const [basics, setBasics] = useState({});
  const [skills, setSkills] = useState([]);

  const fetchData = async () => {
    const res = await getInfo();

    setBasics(res.basics);
    setSkills(res.skills);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <InfoContext.Provider value={ { basics, skills } }>
      {children}
    </InfoContext.Provider>
  );
};

InfoProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default InfoProvider;
