import React from 'react';
import './header.css';
import '../../index.css';
import HandshakeIconSvg from '../../assets/handshakeIcon.svg';
import SearchIconSvg from '../../assets/searchIcon.svg';
import UserIconSvg from '../../assets/userIcon.svg';
import LogoDescritivaIcon from '../../assets/logoDescritivaIcon.svg';

import {Link} from "react-router-dom";


function Header()
{
    return (
        <div>

            <div id='headerUpper'>

                <div id="headerSiteName">
                    <Link
                    to='/'>
                        <img id='logo' src={LogoDescritivaIcon} alt="Logo do Impulsione Ai, onde a letra i é no formato de uma mola" /> 
                    </Link>
                </div>

                <div id='align'>
                    
                    <Link 
                    id='headerHome'
                    className="headerScreenLinks"
                    to='/'
                    >Home</Link>

                    <button 
                    id='headerSobre'
                    className="headerScreenLinks"
                    >Sobre</button>
                    
                    <div
                    className='centralizeItems' id="headerSearch">
                        <input
                        type="text"
                        placeholder='Inicie aqui sua busca'
                        />
                        
                        <img src={SearchIconSvg} alt="Icone de Lupa, com o sentido de buscar informações" />
                    </div>
                    
                    {/* Esse link está com problemas */}
                    <Link 
                    id='headerLogin'
                    className='centralizeItems, headerScreenLinks'
                    to='/login'>
                        <img src={UserIconSvg} alt="Icone, para informar login" className='headerIcon'/>
                        <span>Login</span>  
                    </Link>


                    <Link
                    id='headerParceiros'
                    className='centralizeItems, headerScreenLinks'
                    to='/areaParceiro'> 
                        <img src={HandshakeIconSvg} alt="Icon da área de parceria, duas mãos se apertando." className='headerIcon' id="headerIconParceiros"/>
                        <span>Área Parceiros</span> 
                    </Link>
            
                </div>

            </div>

            <hr id='headerHR' 
                style={{ 
                        width: '100%', // Largura da linha horizontal
                        height: '5px', // Espessura da linha horizontal
                        backgroundColor: '#7900c3', // Cor de fundo da linha horizontal
                        margin: 0
                    }} />

            {/* <div id='headerCategory'>
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
            </div> */}
            
        </div>
       


    );
}

export default Header;