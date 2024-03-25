
import React from "react";
import './login.css';
// Importando o icon do botão de fechar o modal.
import iconModalClose from '../../assets/iconLoginModalClose.svg';

 {/*Função de fechar o modal. Ele vai adicionar a classe hide na div loginCentralize, 
que vai fazer a div sumir e aparecer, quando o botão escolhido for clicado.*/}
function ToggleModal()
{
    const loginCentralize = document.querySelector("#loginCentralize");
    loginCentralize.classList.toggle("hide");
}


function Login()
{
   
    return(
        // Fundo do componente, que será responsável por fixar o componente na tela.
        <div id="back">
             {/*Botão responsável por abrir o modal, Por a função ToggleModal no botão que for desajável mais tarde.*/}
            <button id="openModal" onClick={ToggleModal}>Abrir Modal</button>

             {/*Div responsável pela centralização do container do login e adição da cor do fundo*/}
            <div id="loginCentralize" className="hide">

                 {/*Div que vai conter todos os elementos principais do login. Ex: inputs de email e senha*/}
                <div id="loginContainer">

                    {/*Botão de fechar o modal*/}
                    <div>
                         {/*Já está com a função de fechar o modal*/}
                        <button id = "closeModal" onClick={ToggleModal}>
                            <img src={iconModalClose} alt="icone para fechar o modal, tem formato de X"/>
                        </button>
                    </div>
                    
                     {/*Titulo do componente login*/}
                    <div id="loginHeader">
                        <span>Login</span>
                    </div>

                     {/*Div contendo os elementos do login*/}
                    <div id="loginBody">

                         {/*Input de email*/}
                        <div className="loginInputs">
                            <span className="nameInput">Usuário</span>
                            <input type="email"/>
                        </div>

                         {/*Input Senha*/}
                        <div className="loginInputs">
                            <span className="nameInput">Senha</span>
                            <input type="password"/>
                            <span className="forgotPassword">Esqueci minha senha</span> 
                        </div>

                         {/*Botões de logar e ir para cadastro*/}
                        <div id="loginButtons">
                            <button id="loginButtonSignIn">ENTRAR</button>
                            <button id="loginButtonSignUp">Não possuo cadastro</button>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
        
      

    );
}






export default Login;