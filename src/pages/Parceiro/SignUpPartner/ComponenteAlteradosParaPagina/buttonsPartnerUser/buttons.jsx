import React from "react";
import "./buttons.css";

import { Link } from "react-router-dom";

function ButtonsPartnerUser({idParceiro, idUsuario})
{
    return(
        // centralizando e botando fundo
        <div id="buttonCentralize">

            {/* Uso do Link para linkar as páginas */}
            <Link
            to='/cadastroParceiro'>
                <button className="buttons title" id={idParceiro}>PARCEIRO</button>
            </Link>
            <Link
            to='/cadastroUsuario'>
                <button className="buttons title" id={idUsuario}>USUÁRIO</button>
            </Link>
        </div>
    );
}

export default ButtonsPartnerUser;


// // Função que direciona para a tela de Cadastro de Parceiros
// function GoSignUpPartner()
// {
//     window.location.href = '/SignUpPartner';
// }

// // Função que direciona para a tela de Cadastro de Usuários
// function GoSignUpUser()
// {
//     window.location.href = '/SignUpUser';
// }


// function ButtonsPartnerUser()
// {
//     return(
//         // centralizando e botando fundo
//         <div id="buttonCentralize">
//             <button id="partnerButton" onClick={GoSignUpPartner}>PARCEIRO</button>
//             <button id="userButton" onClick={GoSignUpUser}>USUÁRIO</button>
//         </div>
//     );
// }

// export default ButtonsPartnerUser;