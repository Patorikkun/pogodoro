import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`




* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   font-family: 'Open Sans Hebrew', serif;
   user-select: none;
}

.main {
    background-color: #A4AAE0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}


`;

export default GlobalStyles;
