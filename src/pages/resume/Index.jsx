import React from 'react';
import Content from '../../components/resumeContent/Content';
import { Wrapper, Cotainer, ContentDivision, SubWrapper } from './Style';
import experiences from '../../utils/WorkExperience';
import education from '../../utils/Education';
import skills from '../../utils/Skills';

const Resume = () => {
  const renderContent = (array) => (
    array.map(({ timeCourse, office, company, descriptions }, index) => (
      <Content
        key={ office + index }
        timeCourse={ timeCourse }
        office={ office }
        company={ company }
        descriptions={ descriptions }
      />
    ))
  );

  return (
    <Wrapper>
      <SubWrapper>
        <h1>Resumo</h1>
        <Cotainer>
          <h3>
            Experiência
            <br />
            Profissional
          </h3>
          <div>{ renderContent(experiences) }</div>
        </Cotainer>
      </SubWrapper>

      <ContentDivision />

      <SubWrapper>
        <Cotainer>
          <h3>Formação</h3>
          <div>{ renderContent(education) }</div>
        </Cotainer>
      </SubWrapper>

      <ContentDivision />

      <SubWrapper>
        <Cotainer>
          <h3>Skills</h3>
          <div>
            <ul>
              {
                !skills ? null : skills.map((skill, index) => (
                  <li key={ skill + index }>{ skill }</li>
                ))
              }
            </ul>
          </div>
        </Cotainer>
      </SubWrapper>
    </Wrapper>
  );
};

export default Resume;
