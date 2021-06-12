import React from "react";

import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <section className="main">
        <Timer></Timer>
      </section>
    </div>
  );
}

export default App;
