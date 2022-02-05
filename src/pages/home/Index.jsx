import React from 'react';
import { Link } from 'react-router-dom';
import {
  Text,
  Title,
  Content,
  SubMenu,
  ImageProfile,
  Resume,
  Wrapper,
} from './Style';

const Home = () => (
  <Wrapper>
    <Content>
      <div>
        <Resume>
          <Title>{'<Hello World />'}</Title>
          <Text>
            Sou um estudante de Desenvolvimento Web na Trybe e apaixonado
            por tecnologia e além de gostar de livros, boas músicas gosto
            também de desenvolvimento e marcas que trabalham para contribuir
            com a interação digital.
          </Text>
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
        {/* <img /> */}
      </ImageProfile>
    </Content>
  </Wrapper>
);

export default Home;
