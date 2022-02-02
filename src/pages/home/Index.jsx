import React from 'react';
import { Link } from 'react-router-dom';
import {
  Text,
  Title,
  Content,
  SubMenu,
  ImageProfile,
  Footer,
  Resume,
  Wrapper,
} from './Style';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Home() {
  return (
    <Wrapper>
      <Content>
        <div>
          <Resume>
            <Title>{`<Hello World />`}</Title>
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

        <Footer>
          <div>
            <h2>Contato</h2>
            <span>(21) 9 7001-6955</span>
          </div>
          <div>
            <h2>Email</h2>
            <span>souzajonathan570@gmail.com</span>
          </div>
          <div>
            <h2>Siga me</h2>
            <a target='_blank' href='https://www.linkedin.com/in/jsouzap/' alt='linkedin'>
              <FaLinkedinIn />
            </a>
            <a target='_blank' href='https://github.com/JSouza27' alt='GitHub'>
              <FaGithub />
            </a>
          </div>
          <div>
            <span>Pagina feita usando as tecnologias React e Styled Conponent</span>
          </div>
        </Footer>
      </Content>
    </Wrapper>
  );
}

export default Home;
