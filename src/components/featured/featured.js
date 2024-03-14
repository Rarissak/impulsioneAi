import React from "react";
import './featured.css'
import Photo from './cat.jpg'

function Featured()
{
    return(
        
        <div id="featuredContainer">  {/*<- Vai centralizar todo o componente*/}
            
             {/*  Botão */}
            <button id="featuredButton">NOSSOS DESTAQUES</button>

             {/*  Caixa que vai conter os destaques*/}
            <div id="featured">

                 {/*  Caixa contendo foto, nome e nicho, usado para centralizar todos os destaques no centro da tela*/}
                <div className="featuredSquare">
                    <img src={Photo} alt="Cat laughing"/> 
                    <span className="featuredName">NOME</span>
                    <span className="featuredNiche">Nicho</span>
                </div>

                <div className="featuredSquare">
                    <img src={Photo} alt="Cat laughing"/>
                    <span className="featuredName">NOME</span>
                    <span className="featuredNiche">Nicho</span>
                </div>

                <div className="featuredSquare">
                    <img src={Photo} alt="Cat laughing"/>
                    <span className="featuredName">NOME</span>
                    <span className="featuredNiche">Nicho</span>
                </div>

                <div className="featuredSquare">
                    <img src={Photo} alt="Cat laughing"/>
                    <span className="featuredName">NOME</span>
                    <span className="featuredNiche">Nicho</span>
                </div>

                <div className="featuredSquare">
                    <img src={Photo} alt="Cat laughing"/>
                    <span className="featuredName">NOME</span>
                    <span className="featuredNiche">Nicho</span>
                </div>

            </div>
        
        </div>

    );
}


export default Featured;