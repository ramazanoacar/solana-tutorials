import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #1a1a2e;
    color: #e94560;
  }

  * {
    box-sizing: border-box;
  }
`;