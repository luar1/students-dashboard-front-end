import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }
  html {
    font-size: 1rem;
    --color-primary: #12284C;
    --color-secondary:#FF5C35;
  }
  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

 .ctd-logo{ 
   display: flex;
  width: 170px;
  padding: 0;
 }

`;
export default GlobalStyles;
