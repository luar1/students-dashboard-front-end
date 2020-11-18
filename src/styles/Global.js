/** @format */

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }
  :root{
    --font: 1rem;
    --navy: #12284C;
    --orange: #FF5C35;
    --white: #ffffff;
    --display:flex;
    --flow-column:column nowrap;
    --flow-row:column nowrap;
  }
  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background: var(--white);
  }

 .ctd-logo{ 
  display: var(--display);
  width: 170px;
  padding: 0;
 }

 .container-fluid {
  margin: 0 auto;
}

p {
  line-height: 1.6;
}
.site-layout-background{
  background-color: var(--white);
}
.shadow{
  box-shadow: 7px 7px 19px -12px rgba(0, 0, 0, 0.32);
}

.site-layout-right{
    display:flex;
    justify-content:center;
    align-items:top;
    width:100%;
    border:1px solid blue;
    padding:0;
    margin:0 auto;
}
.center{
     display: var(--display);
    justify-content:center;
    align-items:center;
}
@media all and (max-width:450px){

}
}

`;
export default GlobalStyles;
