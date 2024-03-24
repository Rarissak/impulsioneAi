import React from "react";
import Header from '../../../components/header/header.jsx';
import FormParceiro from '../SignUpPartner/ComponenteAlteradosParaPagina/formParceiro/formParceiro.jsx';
import Footer from '../SignUpPartner/ComponenteAlteradosParaPagina/footer/footer.jsx';
import Buttons from "../SignUpPartner/ComponenteAlteradosParaPagina/buttonsPartnerUser/buttons.jsx"

function SignUpPartner()
{
    return(
        <div>
            <Header/>
            <Buttons/>
            <FormParceiro/>
            <Footer/>
        </div>
    );
}

export default SignUpPartner;