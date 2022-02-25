import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import InfoContext from '../../context/InfoContext';
import {
  Text,
  Title,
  Content,
  SubMenu,
  ImageProfile,
  Resume,
  Wrapper,
} from './Style';

const Home = () => {
  const { basics } = useContext(InfoContext);
  const { summary, image } = basics;

  return (
    <Wrapper>
      <Content>
        <div>
          <Resume>
            <Title>{'<Hello World />'}</Title>
            <Text>{summary}</Text>
            <Text>
              GitHub: github.com/JSouza27
            </Text>
          </Resume>

          <SubMenu>
            <Link to="/Resume">
              Resumo
            </Link>
            <Link to="/Projects">
              Projetos
            </Link>
            <Link to="/Contact">
              Contato
            </Link>
          </SubMenu>
        </div>

        <ImageProfile>
          <img src={ image } alt="avatar" />
        </ImageProfile>
      </Content>
    </Wrapper>
  );
};

export default Home;
