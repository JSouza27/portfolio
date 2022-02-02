import React from 'react';
import Experiences from '../../utils/WorkExperience';
import Content from '../../components/resume_content/Content';
import { Wrapper, Cotainer } from './Style';

function Resume() {
  return (
    <Wrapper>
      <h2>Resumo</h2>
      <Cotainer>
        <h3>Experiência Proficional</h3>
        {/* {
          Experiences.map(({ timeCourse, office, description, company }, index) => 
            <Content
              key={ office + index }
              timeCourse={ timeCourse }
              office={ office }
              company={ company }
              description={ description }
            />
          )
        } */}
      </Cotainer>
    </Wrapper>
  );
}

export default Resume;
