import * as React from 'react';
import "../styles/style.css"

class Noticia extends React.PureComponent{

  render() {
    return(
      <div>
        <div className={"containerNewsImagem"}>
            Imagem da noticia
        </div>
        <div className={"noticia containerNews"}>
          <h1>Cinco suspeitos de roubo são mortos durante tiroteio com PM em Gravatá</h1>
        </div>

      </div>
    )
  }
}

export default Noticia;