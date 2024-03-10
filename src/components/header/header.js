import React from 'react';
import './header.css';
import LogoIconSvg from '../../icons/logoIcon.svg';
import HandshakeIconSvg from '../../icons/handshakeIcon.svg';
import SearchIconSvg from '../../icons/searchIcon.svg';
import UserIconSvg from '../../icons/userIcon.svg';

function Header()
{
    return (
        <div>
            // Parte da logo e butões acima da listra
             <div id='headerUpper'>

                <div id='logo'>
                    <h1 id="headerSiteName" color='#ff7d1e' className='centralizeItems'> 
                    <img src={LogoIconSvg} alt="Logo, em forma de mola" /> 
                    <div>
                        <span>mpulsione</span>
                        <span className='roxo'>aí</span>
                    </div>
                    </h1>
                </div>

                // Div para alinhar os elementos com a altura da logo
                <div id='align'>
                    
                    // Botão Home
                    <button 
                    className="headerScreenButtons, headerButtonSelected"
                    >Home</button>

                    // Botão Sobre
                    <button 
                    className="headerScreenButtons"
                    >Sobre</button>
                    
                    // Barra de pesquisa 
                    <div
                    className='centralizeItems' id="headerSearch">
                        <input
                        type="text"
                        placeholder='Inicie aqui sua busca'
                        />
                        
                        <img src={SearchIconSvg} alt="Icone de Lupa, com o sentido de buscar informações" />
                    </div>
                    
                    // Botão Login
                    <button 
                    id='headerLogin'
                    className='centralizeItems, headerScreenButtons'>
                        <img src={UserIconSvg} alt="Icone, para informar login" className='headerIcon'/>
                        <span>Login</span>  
                    </button>

                    // Botão Área Páceiros
                    <button
                    id='headerParceiros'
                    className='centralizeItems, headerScreenButtons'> 
                        <img src={HandshakeIconSvg} alt="Icon da área de parceria, duas mãos se apertando." className='headerIcon'/>
                        <span>Área Páceiros</span> 
                    </button>
            
                </div>

            </div>

            // Listra
            <hr id='headerHR' 
                style={{ 
                        width: '100%', // Largura da linha horizontal
                        height: '5px', // Espessura da linha horizontal
                        backgroundColor: '#7900c3' // Cor de fundo da linha horizontal
                    }} />

            // Botões das Categórias/Nichos do site
            <div id='headerCategory'>
                <button 
                className='headerCategoryButtons'
                >GASTRONOMIA</button>

                <button 
                className='headerCategoryButtons'
                >MODA</button>

                <button 
                className='headerCategoryButtons'
                >ARTESANATO</button>

                <button 
                className='headerCategoryButtons'
                >TECNOLOGIA</button>

                <button 
                className='headerCategoryButtons'
                >EDUCAÇÃO</button>

                <button 
                className='headerCategoryButtons'
                >SAÚDE</button>

                <button 
                className='headerCategoryButtons'
                >ESTÉTICA</button>

                <button 
                className='headerCategoryButtons'
                >DIVERSOS</button>
            </div>
            
        </div>
       


      );
}

export default Header;