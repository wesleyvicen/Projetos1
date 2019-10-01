import * as React from 'react';
import "../styles/style.css"

import CardBg01 from "../img/img1.png";
import CardBg02 from "../img/anuncio-publicitario-1200x675.jpg";

class Anuncio extends React.PureComponent{

render() {
    return(
        <div className={"anuncio"}>
            <img className={"anuncio"} src={CardBg02} alt={'Mulher de vestido longo branco sentada ao lado de uma árvore'} />
        </div>
    )
}
}

export default Anuncio;