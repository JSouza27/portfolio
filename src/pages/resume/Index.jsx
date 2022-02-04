import React from 'react';
import Content from '../../components/resume_content/Content';
import { Wrapper, Cotainer, ContentDivision, SubWrapper } from './Style';
import experiences from '../../utils/WorkExperience';
import education from '../../utils/Education';
import skills from '../../utils/Skills';

function Resume() {
  return (
    <Wrapper>
      <SubWrapper>
        <h2>Resumo</h2>
        <Cotainer>
          <h3>Experiência<br/>Proficional</h3>
          <div>
            {
              experiences.map(({ timeCourse, office, company, descriptions }, index) => (
              <Content
                key={ office + index }
                timeCourse={ timeCourse }
                office={ office }
                company={ company }
                descriptions={ descriptions }
              />
              ))
            }
          </div>
        </Cotainer>
      </SubWrapper>
      
      <ContentDivision />

      <SubWrapper>
        <Cotainer>
          <h3>Formação</h3>
          <div>
          {
            education.map(({ timeCourse, office, company, descriptions }, index) => (
              <Content
                key={ office + index }
                timeCourse={ timeCourse }
                office={ office }
                company={ company }
                descriptions={ descriptions }
              />
              ))
            }
          </div>
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
}

export default Resume;
