import * as React from 'react';
import "../styles/style.css"

class Noticia extends React.PureComponent{

  render() {
    return(
      <div>
        <div className={"noticia containerNews"}>
          Cinco suspeitos de roubo são mortos durante tiroteio com PM em Gravatá
        </div>
        
      </div>
    )
  }
}

export default Noticia;