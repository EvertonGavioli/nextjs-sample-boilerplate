import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex: 1;
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 60%;
  height: 100vh;

  background-color: #c1c2c3;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 40%;
  height: 100vh;

  background-color: #fff;

  align-items: center;
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  height: 120px;

  align-items: center;
  justify-content: center;
`;

export const WelcomeWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: -120px;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
`;
