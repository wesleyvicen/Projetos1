import React from 'react';
import "./styles/style.css";

import Anuncio from "./components/anuncio"
import Data from "./components/data"
import Logo from "./components/logo"
import Noticia from "./components/noticia";
import Imagem from "./components/imagemNoticia";

function App() {
  return (
      <div className="container">
        <div className={"left"}>
          <Anuncio/>
          <Noticia/>
        </div>
        <div className={"right"}>
          <Logo/>
          <Data/>
          <Imagem/>
        </div>
      </div>
  );
}

export default App;
