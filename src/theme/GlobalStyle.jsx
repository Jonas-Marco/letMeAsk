import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ${normalize}
  
  /* Full height layout */
  html, body {
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
    font-family: sans-serif;
  }
  h1, h2, p {
    margin: 0;
    padding: 0;
  }
`;
