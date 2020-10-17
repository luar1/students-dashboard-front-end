import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,800&display=swap');;
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }
  html {
    font-size: 1rem;
  }
  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;
export default GlobalStyles;
