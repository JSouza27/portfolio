import React from 'react';

function Content({ timeCourse, office, company, description }) {
  return (
    <Content>
      <span>{ timeCourse }</span>
      <h4>{ office } | { company }</h4>
      <span>{ description }</span>
    </Content>
  );
}

export default Content;
