import React from "react";
import './featured.css';
import Photo from './cat.jpg';
import '../../index.css';


function Featured({title})
{
    return(
        
        <div id="featuredContainer">  {/*<- Vai centralizar todo o componente*/}
            
             {/*  Botão */}
            <button id="featuredButton" className="title">{title}</button>

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

// function Featured({titleBox,
//     name1, nincho1,
//     name2, nincho2,
//     name3, nincho3,
//     name4, nincho4,
//     name5, nincho5}){
// return(

// <div id="featuredContainer">  {/*<- Vai centralizar todo o componente*/}

// {/*  Botão */}
// <button id="featuredButton">{titleBox}</button>

// {/*  Caixa que vai conter os destaques*/}
// <div id="featured">

//  {/*  Caixa contendo foto, nome e nicho, usado para centralizar todos os destaques no centro da tela*/}
// <div className="featuredSquare">
//     <img src={Photo} alt="Cat laughing"/> 
//     <span className="featuredName">{name1}</span>
//     <span className="featuredNiche">{nincho1}</span>
// </div>

// <div className="featuredSquare">
//     <img src={Photo} alt="Cat laughing"/>
//     <span className="featuredName">{name2}</span>
//     <span className="featuredNiche">{nincho2}</span>
// </div>

// <div className="featuredSquare">
//     <img src={Photo} alt="Cat laughing"/>
//     <span className="featuredName">{name3}</span>
//     <span className="featuredNiche">{nincho3}</span>
// </div>

// <div className="featuredSquare">
//     <img src={Photo} alt="Cat laughing"/>
//     <span className="featuredName">{name4}</span>
//     <span className="featuredNiche">{nincho4}</span>
// </div>

// <div className="featuredSquare">
//     <img src={Photo} alt="Cat laughing"/>
//     <span className="featuredName">{name5}</span>
//     <span className="featuredNiche">{nincho5}</span>
// </div>

// </div>

// </div>

// );
// }


// export default Featured