import React from 'react';
import "./styles/style.css";

import Anuncio from "./components/anuncio"
import Data from "./components/data"
import Logo from "./components/logo"

function App() {
  return (
      <div className="pagina">
          <Anuncio/>
          <Logo/>
          <Data/>
      </div>
  );
}

export default App;
