import React from "react";
import './form.css'
import FacebookIcon from "../../icons/iconFacebook.svg";
import InstagramIcon from "../../icons/iconInstagram.svg";
function Form()
{
    return(
        
        // Centraliza o formulário no centro da tela.
      <div id="form"> 

        {/*Contém todo o formulário e seus campos*/}
        <div id="formContainer">

            {/*Campo das informações pessoais*/}
            <fieldset className = "fieldSetConfig">
                        {/*NOME COMPLETO*/}
                        <div className="fieldType1">
                            <span className="nameField">Nome Completo</span>
                            <input 
                                type="text" 
                                size={47} 
                                required/>
                        </div>

                        {/*DATA DE NASCIMENTO*/}
                        <div className="fieldType1">
                            <span className="nameField">Data de Nascimento</span>
                            <input 
                             type="date"
                             size={6}
                             required/>
                        </div> 

                        {/*CPF*/}
                        <div className="fieldType2">
                            <span className="nameField">CPF</span>
                            <input 
                                type="text"
                                pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"  
                                maxLength="14" 
                                required
                                size={24}/> 
                        </div>
                   
                        {/*MEI*/}
                        <div className="optionalField">
                            <span className="nameField">MEI</span>
                            <div id="inputOptional">
                                <input 
                                    type="text"  
                                    pattern="[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}-[0-9]{2}" 
                                    maxLength="18"
                                    size={25}/> 
                                    <span className="optional">Não é obrigatório</span>
                            </div>
                        </div>
                       
                </fieldset>
            

                {/*Campos da localização do usuário*/}
                <span id="alertLocationField">*Insira o endereo do seu estabelecimento, caso não tenha um estabelecumento comercial complete as informações com seu endereço privado.</span>
                <fieldset className = "fieldSetConfig">
                    {/*UF*/}
                    <div className="fieldType2">
                        <span className="nameField">UF</span>
                        <input 
                        type="text"
                        required
                        size={4}/>
                    </div>

                    {/*CIDADE*/}
                    <div className="fieldType2">
                        <span className="nameField">Cidade</span>
                        <input 
                        type="text"
                        required
                        size={13.5}/>
                    </div>

                    {/*BAIRRO*/}
                    <div className="fieldType2">
                        <span className="nameField">Bairro</span>
                        <input 
                        type="text"
                        required
                        size={13.5}/>
                    </div>
                    
                    {/*LOGADOURO*/}
                    <div className="fieldType2">
                        <span className="nameField">Logadouro</span>
                        <input 
                        type="text"
                        required
                        size={38}/>
                    </div>

                    {/*NÚMERO DA CASA OU APARTAMENTO*/}
                    <div className="fieldType2">
                        <span className="nameField">N°</span>
                        <input 
                        type="text"
                        required
                        size={6}/>
                    </div>
                
                    

                </fieldset>
                

                {/*CAMPO DA SENHA*/}
                <fieldset className="fieldSetConfig">

                    {/*SENHA*/}
                    <div className="fieldType1">
                        <span className="nameField">Senha</span>
                        <input 
                        type="text"
                        required
                        size={29}/>
                    </div>

                    {/*CONFIRMAR SENHA*/}
                    <div className="fieldType1">
                        <span className="nameField">Reescreva a Senha</span>
                        <input 
                        type="text"
                        required
                        size={30}
                        />
                    </div>

                    {/*Orientação de preenchimento de senha*/}
                    <div id="passwordRequery">
                        <span>*Mínimo de 8 caracteres</span>
                        <span>*Letras minusculas</span>
                        <span>*Letras Maiúsculas</span>
                        <span>*Números</span>
                        <span>*Caracteres especiais</span>
                    </div>

                </fieldset>

                {/*CAMPO PROFISSIONAL*/}
                <fieldset className = "fieldSetConfig">

                    {/*NICHO*/}
                    <div className="fieldType1">
                        <span className="nameField">Qual nicho seu de trabalho?</span>
                        <input 
                        type="text"
                        required
                        size={10}/>
                    </div>
                    
                    {/*MODALIDADE*/}
                    <div id="radioContainer">

                        <span className="nameField">Modalidade do serviço</span> <br/>

                        <div id="fieldRadio">
                       
                            <div className="radioOption">
                                <input type="radio" name="modalidade"/> <span>Presencial</span>
                            </div>
                            <div className="radioOption">
                                <input type="radio" name="modalidade"/> <span>Online</span>
                            </div>
                            <div className="radioOption">
                                <input type="radio" name="modalidade"/> <span>Híbrido</span>
                            </div>
                        </div>

                    </div>
                    
                    {/*NOME DO EMPREENDIMENOT*/}
                    <div className="fieldType1">
                        <span className="nameField">Nome do Empreendimento</span>
                        <input 
                            type="text"
                            required
                            size={32}/>
                    </div>

                    {/*SITE DO NEGÓCIO*/}
                    <div className="fieldType1">
                        <span className="nameField">Site do seu negócio</span>
                        <input 
                            type="text"
                            required
                            size={27}/>
                    </div>
                </fieldset>

                {/*PLANO ESCOLHIDO*/}
                <div id="selectField">
                    <label htmlFor="membership">Plano Escolhido</label>
                    <select id="membership" required>
                        <option value="">Selecione</option>
                        <option value="bronze">Bronze</option>
                        <option value="silver">Silver</option>
                        <option value="gold">Gold</option>
                        <option value="platinum">Platinum</option>
                    </select>
                </div>

               
              
            {/*CAMPO FORMAS DE CONTATO*/} 
            <h1 id="contactFormsH1">FORMAS DE CONTATO</h1>
            <fieldset className = "fieldSetConfig" id="contactFormsFields">
                
              {/*NÚMERO DE TELEFONE*/}
                <div className="fieldType1">
                    <span className="nameField">Número de Telefone</span>
                    <input 
                        type="text"
                        required
                        size={17}/>
                </div>

                {/*EMAIL*/}
                <div className="fieldType1">
                    <span className="nameField">Email</span>
                    <input 
                        type="text"
                        required
                        size={42.5}/>
                </div>

                {/*INSTAGRAM*/}
                <div className="iconField">
                    <img src={InstagramIcon} alt="Icone do Instragram" />
                    <input 
                        type="text"
                        required
                        size={66}/>
                </div>

                {/*FACEBOOK*/}
                <div className="iconField">
                    <img src={FacebookIcon} alt="Icone do facebook" />
                    <input 
                        type="text"
                        required
                        size={66}/>
                </div>
            </fieldset>
        
         
        </div>

      </div>

    );
}


export default Form;