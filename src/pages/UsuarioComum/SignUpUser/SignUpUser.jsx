import React from "react";
import Header from '../../../components/header/header.jsx';
import FormUser from '../SignUpUser/ComponentesAltPagSignUpUser/formUser/formUser.jsx';
import Footer from '../../Parceiro/SignUpPartner/ComponenteAlteradosParaPagina/footer/footer.jsx';
import Buttons from "../../Parceiro/SignUpPartner/ComponenteAlteradosParaPagina/buttonsPartnerUser/buttons.jsx"

function SignUpUser()
{
    return(
        <div>
            <Header/>
            <Buttons/>
            <FormUser/>
            <Footer/>
        </div>
    );
}

export default SignUpUser;