import React from "react";
import './form.css';
import axios from 'axios';
import { useState } from "react";
import facebookRoxo from '../../assets/facebookRoxo.svg';
import instagramRoxo from '../../assets/instagramRoxo.svg';


function Form()

{

    const [dados, setDadosEmpreendedor] = useState({
        nomeCompleto: '',
        dataNascimento: '',
        cpf: '',
        mei: '',
        senha: '',
        nomeEmpreendimento: '',
        site: '',
        telefone: '',
        email: '',
        planoEscolhido: '',
        instagram: '',
        facebook: '',
        nicho: '',
        modalidade: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const resposta = await axios.post('http://localhost:8080/empreendedores', dados);
            console.log(resposta.data);
            
           handleSubmitEndereco();
           alert("Cadastro realizado com sucesso!");
           window.location.href='./login';
        } catch (erro) {
            console.error('Ocorreu um erro ao enviar o formulário:', erro);
            alert("Desculpe, ocorreu um erro no cadastro :(  Tente novamente mais tarde.");
        }
    };

    const handleChange = (event) => {
        setDadosEmpreendedor({ ...dados, [event.target.name]: event.target.value });
    };



    const [dadosEndereco, setDadosEndereco] = useState({
        uf: '',
        cidade: '',
        bairro: '',
        logadouro: '',
        numero: '',
        cpfEmpreendedor: localStorage.getItem('cpf')
    });

    const handleSubmitEndereco = async () => {
        event.preventDefault();

        try {
            const resposta = await axios.post('http://localhost:8080/endereco', dadosEndereco);
            console.log(resposta.data);
            
        } catch (erro) {
            console.error('Ocorreu um erro ao enviar o formulário:', erro);
        }
    };

    const handleChangeEndereco = (event) => {
        setDadosEndereco({ ...dadosEndereco, [event.target.name]: event.target.value });
    };



    return(
        
        // Centraliza o formulário no centro da tela.
      <div id="form"> 

        {/*Contém todo o formulário e seus campos*/}
        <form id="formContainer" onSubmit={handleSubmit}>

            {/*Campo das informações pessoais*/}
            <fieldset className = "fieldSetConfig">
                        {/*NOME COMPLETO*/}
                        <div className="fieldType1">
                            <span className="nameField">Nome Completo</span>
                            <input 
                                type="text" 
                                size={47}
                                required
                                name="nomeCompleto"
                                value={dados.nomeCompleto}
                                onChange={handleChange}/>
                        </div>

                        {/*DATA DE NASCIMENTO*/}
                        <div className="fieldType1">
                            <span className="nameField">Data de Nascimento</span>
                            <input 
                                type="date"
                                size={6}
                                required
                                name="dataNascimento"
                                value={dados.dataNascimento}
                                onChange={handleChange}/>
                        </div> 

                        {/*CPF*/}
                        <div className="fieldType2">
                            <span className="nameField">CPF</span>
                            <input 
                                type="text"
                                pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"  
                                maxLength="14" 
                                required
                                size={24}
                                name="cpf"
                                value={dados.cpf}
                                onBlur={localStorage.setItem('cpf', dados.cpf)}
                                onChange={handleChange}/> 
                        </div>
                   
                        {/*MEI*/}
                        <div className="optionalField">
                            <span className="nameField">MEI</span>
                            <div id="inputOptional">
                                <input 
                                    type="text"  
                                    pattern="[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}-[0-9]{2}" 
                                    maxLength="18"
                                    size={25}
                                    name="mei"
                                    value={dados.mei}
                                    onChange={handleChange}/> 
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
                        name="uf"
                        value={dadosEndereco.uf}
                        onChange={handleChangeEndereco}
                        required
                        size={4}/>
                    </div>

                    {/*CIDADE*/}
                    <div className="fieldType2">
                        <span className="nameField">Cidade</span>
                        <input 
                        type="text"
                        name="cidade"
                        value={dadosEndereco.cidade}
                        onChange={handleChangeEndereco}
                        required
                        size={13.5}/>
                    </div>

                    {/*BAIRRO*/}
                    <div className="fieldType2">
                        <span className="nameField">Bairro</span>
                        <input 
                        type="text"
                        name="bairro"
                        value={dadosEndereco.bairro}
                        onChange={handleChangeEndereco}
                        required
                        size={13.5}/>
                    </div>
                    
                    {/*LOGADOURO*/}
                    <div className="fieldType2">
                        <span className="nameField">Logadouro</span>
                        <input 
                        type="text"
                        name="logadouro"
                        value={dadosEndereco.logadouro}
                        onChange={handleChangeEndereco}
                        required
                        size={38}/>
                    </div>

                    {/*NÚMERO DA CASA OU APARTAMENTO*/}
                    <div className="fieldType2">
                        <span className="nameField">N°</span>
                        <input 
                        type="text"
                        name="numero"
                        value={dadosEndereco.numero}
                        onChange={handleChangeEndereco}
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
                        name="senha"
                        value={dados.senha}
                        onChange={handleChange}
                        size={29}/>
                        {/*Orientação de preenchimento de senha*/}
                        <br></br>
                        <div id="passwordRequery">
                            <span>*Mínimo de 8 caracteres</span>
                            <span>*Letras minusculas</span>
                            <span>*Letras Maiúsculas</span>
                            <span>*Números</span>
                            <span>*Caracteres especiais</span>
                        </div>
                    </div>

                    {/*CONFIRMAR SENHA*/}
                    <div className="fieldType1">
                        <span className="nameField">Reescreva a Senha</span>
                        <input 
                        type="text"
                        // required
                        size={30}
                        />
                    </div>

                    {/* Orientação de preenchimento de senha
                    <div id="passwordRequery">
                        <span>*Mínimo de 8 caracteres</span>
                        <span>*Letras minusculas</span>
                        <span>*Letras Maiúsculas</span>
                        <span>*Números</span>
                        <span>*Caracteres especiais</span>
                    </div> */}

                </fieldset>

                {/*CAMPO PROFISSIONAL*/}
                <fieldset className = "fieldSetConfig">

                    {/*NICHO*/}
                    <div className="fieldType1">
                        <span className="nameField">Qual nicho seu de trabalho?</span>
                        <input 
                        type="text"
                        required
                        name="nicho"
                        value={dados.nicho}
                        onChange={handleChange}
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
                            name="nomeEmpreendimento"
                            value={dados.nomeEmpreendimento}
                            onChange={handleChange}
                            size={32}/>
                    </div>

                    {/*SITE DO NEGÓCIO*/}
                    <div className="fieldType1">
                        <span className="nameField">Site do seu negócio</span>
                        <input 
                            type="text"
                            required
                            name="site"
                            value={dados.site}
                            onChange={handleChange}
                            size={27}/>
                    </div>
                </fieldset>

                {/*PLANO ESCOLHIDO*/}
                <div id="selectField">
                    <label htmlFor="membership">Plano Escolhido</label>
                    <select id="membership" /*required*/>
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
                        name="telefone"
                        value={dados.telefone}
                        onChange={handleChange}
                        size={17}/>
                </div>

                {/*EMAIL*/}
                <div className="fieldType1">
                    <span className="nameField">Email</span>
                    <input 
                        type="text"
                        required
                        name="email"
                        value={dados.email}
                        onChange={handleChange}
                        size={42.5}/>
                </div>

                {/*INSTAGRAM*/}
                <div className="iconField">
                    <img src={instagramRoxo} alt="Icone do Instragram" />
                    <input 
                        type="text"
                        required
                        name="instagram"
                        value={dados.instagram}
                        onChange={handleChange}
                        size={66}/>
                </div>

                {/*FACEBOOK*/}
                <div className="iconField">
                    <img src={facebookRoxo} alt="Icone do facebook" />
                    <input 
                        type="text"
                        required
                        name="facebook"
                        value={dados.facebook}
                        onChange={handleChange}
                        size={66}/>
                </div>
            </fieldset>
        
            <input type="submit" value="Enviar"/>
        </form>
        
      </div>

    );
}


export default Form;