import React from 'react';
import Head from 'next/head';

// Componentes Estilizados
import {
  Container,
  WelcomeContainer,
  LoginContainer,
  LogoWrapper,
  WelcomeWrapper,
  FormLogin,
} from '../styles/pages/home';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Cardápio Digital</title>
      </Head>

      <Container>
        <WelcomeContainer>
          <LogoWrapper>
            <h1>Logo</h1>
          </LogoWrapper>

          <WelcomeWrapper>
            <h1>Bem vindo!</h1>
          </WelcomeWrapper>
        </WelcomeContainer>

        <LoginContainer>
          <h1>
            Login/
            <br />
            Cadastro
          </h1>

          <FormLogin>
            <input placeholder="E-mail" />
            <input placeholder="Senha" type="password" />
            <p>Esqueci minha senha</p>
            <br />
            <button>Acessar</button>

            <button>Acessar com sua conta Google</button>
            <button>Acessar com sua conta Facebook</button>

            <br />
            <br />

            <div>
              <input id="id-politica-privacidade" type="checkbox" />
              <label htmlFor="id-politica-privacidade">Li e concordo</label>
            </div>
          </FormLogin>
        </LoginContainer>
      </Container>
    </>
  );
};

export default Home;
