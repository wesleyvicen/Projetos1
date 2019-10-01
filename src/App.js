import React from 'react';
import "./styles/style.css";

import * as moment from 'moment';
import 'moment/locale/pt-br';

import Anuncio from "./components/anuncio"

import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col} from 'react-bootstrap'

function App() {
    moment.locale('pt-br')
  return (
      <div className="pagina">
          <div className="conteudo containerConteudo">Anúncio</div>
          <div className="lateral containerLogo"> LED Marketing</div>
          <div className="lateral2 containerHora">
              {moment().format('Do MMMM YYYY')}
              <br/>
              {moment().format('h:mm:ss a')}
          </div>
      </div>
  );
}

export default App;
