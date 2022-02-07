import React from 'react';
import PropTypes from 'prop-types';
import SummaryBlock from './Style';

function Content({ timeCourse, office, company, descriptions }) {
  return (
    <SummaryBlock>
      <span>{ timeCourse }</span>
      <h4>{ `${office} | ${company}` }</h4>
      <ul>
        {
          !descriptions ? null : descriptions.map((description, index) => (
            <li key={ index }>{ description }</li>
          ))
        }
      </ul>
    </SummaryBlock>
  );
}

Content.propTypes = {
  timeCourse: PropTypes.string.isRequired,
  office: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Content;
