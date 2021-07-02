import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`




* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   font-family: 'Open Sans Hebrew', serif;
   user-select: none;
 
}
.App {
  background-color: #A4AAE0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.main {

 position: relative;
  
    height: 100vh;
    width: 100vw;
    
   display: flex;
   flex-direction: column;
  //justify-content: center;
    align-items: center;
    overflow: hidden;
}


`;

export default GlobalStyles;
