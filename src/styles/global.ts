import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    /* background: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.common.white}; */
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    min-height: 100vh;
  }
`;
