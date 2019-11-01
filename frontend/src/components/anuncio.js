import * as React from 'react';
import "../styles/style.css"

class Anuncio extends React.PureComponent{

    render() {
        return(
            <div className={"ad"}>
            <img className={'adImg'} src={'http://lithoralnews.com.br/images/1-janeiro18/acai-concept.png'} alt="Minha Figura"/>
            </div>
        )
    }
}

export default Anuncio;