import React from 'react';
import { Summary } from './Style';

function Content({ timeCourse, office, company, descriptions }) {
  return (
    <Summary>
      <span>{ timeCourse }</span>
      <h4>{ office } | { company }</h4>
      <ul>
        {
          !descriptions ? null : descriptions.map((description) => <li>{ description }</li>)
        }
      </ul>
    </Summary>
  );
}

export default Content;
