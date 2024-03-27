import React from 'react';
import ReactDOM from 'react-dom/client';
// import '././././index.css';
import './areaParceiro.css';
import Header from '../../../components/header/header';
import Featured from '../../../components/featured/featured';
import Footer from '../../../components/footer/footer';
import Carrossel from '../../../components/carrossel/carrossel';
import BarraLinkInterno from '../../../components/barraLinkInterno/barraLinkInterno';
import BoxInfo from '../../../components/boxInfo/boxInfo';
import BoxVideo from '../../../components/boxVideo/boxVideo';
import Informations from '../../../components/informations/informations';

import IconAlcance from '../../../assets/iconAlcance.svg';
import IconParceria from '../../../assets/iconParceria.svg';
import IconSuporte from '../../../assets/iconSuporte.svg';
import IconVerificacao from '../../../assets/verificacaoIcon.svg';

//Imagens do carrossel
import Artesanado from '../../../assets/artesanato.png'
import Educacao from '../../../assets/educacaoAula.png'
import Gastronomia from '../../../assets/gastronomiaTrufa.png'
import Saude01 from '../../../assets/saudeFisio.png'
import Saude02 from '../../../assets/saudeEstetica.png'
import Tecnologia from '../../../assets/tecnologia.png'
import Propaganda from '../../../assets/propagandaImpulsioneAi.png'
import { Link } from 'react-router-dom';
    


// import Produto from '../../../components/produto/produto';

function AreaParceiro(){

    return (
        <>
        <Header></Header>
        
        <body>
            <div className='blocoRoxo'>
                <nav id='barraLinks'>
                    <BarraLinkInterno id='fundoRoxoClaro' name={'VANTAGENS'} idElemento={'#bloco2'}></BarraLinkInterno>
                    <BarraLinkInterno id='fundoRoxoClaro' name={'PARCEIROS'} idElemento={'#bloco3'}></BarraLinkInterno>
                    <BarraLinkInterno id='fundoRoxoClaro' name={'SEBRAE'} idElemento={'#bloco4'}></BarraLinkInterno>
                    <BarraLinkInterno id='fundoRoxoClaro' name={'PLANOS'} idElemento={'#bloco5'}></BarraLinkInterno>
                </nav>

                <section id="bloco1">
                <div id="infoBloco1">
                    <h1 className='title'>Dê um salto no seu negócio!</h1>
                    <p>Use nossa plataforma como uma forma de impulsionar ai, aqui, aonde você estiver!</p>
                    <Link
                    to='/cadastroParceiro'>
                        <button className='botaoInfo' id='linkCadastro'>TORNE-SE UM PARCEIRO</button>
                    </Link>
                </div>
                <Carrossel
                    img1={Artesanado}
                    img2={Saude01}
                    img3={Gastronomia}
                    img4={Tecnologia}
                    img5={Saude02}
                    img6={Educacao}
                    img7={Propaganda}
                />
                </section>

                <section id="bloco2">
                    <div id="titleText">
                        <h2 id="textBranco">Vantagens de</h2>
                        <h2 id="textLaranja">Impulsionar seu Negócio</h2>
                    </div>
                    <div id="info">                
                        <Informations icon={IconAlcance} 
                                    titulo={"MAIOR VISIBILIDADE E AUMENTO DO PÚBLICO"}
                                    texto={"Na plataforma os empreendedores ganham uma presença online robusta, o que aumenta a visibilidade no mercado."}
                        ></Informations>
                        <Informations icon={IconParceria} 
                                    titulo={"OPORTUNIDADES DE NEGÓCIOS ADICIONAIS"}
                                    texto={"A plataforma possui recursos de destaque e anúncios que aumentam a visibilidade do seu negócio. Gerando oportunidades adicionais, como parcerias comerciais e colaborações com outros empreendedores da plataforma."}
                        ></Informations>
                        <Informations icon={IconSuporte} 
                                    titulo={"SUPORTE E RECURSOS PARA CRESCIMENTO"}
                                    texto={"Proporcionamos suporte e recursos para ajudar os empreendedores a crescerem e prosperarem. Isso inclui acesso a artigos educacionais, treinamentos e colaborações com o Sebrae."}
                        ></Informations>
                    </div>
                </section>
            </div>

            <section id="bloco3">
                <BoxInfo title={"Empreendedores que indicam o Impulsione Aí"} idBox={'titleBoxLaranja'} idDivisor={'divisorLaranja'}></BoxInfo>
                <div className='boxInformations' id="boxLaranja">
                    <Featured title={""} 
                                nameOne={"TRUFAS DO SIM"} nicheOne={"Gastronomia"}
                                nameTwo={"TESTE"} nicheTwo={"Teste"}
                                nameThree={"FISIOTERAPIA"} nicheThree={"Saúde"}
                                nameFour={"TESTE"} nicheFour={"Artesanato"}
                                nameFive={"Logicando"} nicheFive={"Educação"}>
                    </Featured>
                </div>
            </section>

            <section id="bloco4">
                <BoxVideo video={"https://www.youtube.com/embed/CxwjOwNgx30?si=LCEVyJluPePxyanL"} 
                        title={"Sebrae"} 
                        text={"Veja algumas dicas do nosso colaborador para impulsionar ainda mais seu negócio."}>
                </BoxVideo>
            </section>

            <section id="bloco5">
                <h1 className='title'>NOSSOS PLANOS</h1>
                <div id="boxPlanos">
                    <div className='plano'>
                        <div className='vantagem'>
                            <img src={IconVerificacao} alt="Icon de verificado"/> 
                            <p>Acesso completo à Área do Parceiro;</p>
                        </div>
                        <div className='vantagem'>
                            <img src={IconVerificacao} alt="Icon de verificado"/>
                            <p>Exposição dos seus produtos na Vitrine;</p>
                        </div>
                        <button className='buttonPlanos'>Começar GRÁTIS</button>
                    </div>
                    <div className='plano'>
                        <div className='vantagem'>
                            <img src={IconVerificacao} alt="Icon de verificado"/> 
                            <p>Acesso completo à Área do Parceiro;</p>
                        </div>
                        <div className='vantagem'>
                            <img src={IconVerificacao} alt="Icon de verificado"/> 
                            <p>Exposição dos seus produtos na Vitrine;</p>
                        </div>
                        <div className='vantagem'>
                            <img src={IconVerificacao} alt="Icon de verificado"/> 
                            <p>Anúncios do seu negócio na plataforma;</p>
                        </div>
                        <div className='vantagem'>
                            <img src={IconVerificacao} alt="Icon de verificado"/> 
                            <p>Seus produtos serão priorizados nas pesquisas dos usuários;</p>
                        </div>
                        <button className='buttonPlanos'>Plano SILVER</button>
                    </div>
                    <div className='plano'>
                        <div className='vantagem'>
                            <img src={IconVerificacao} alt="Icon de verificado"/> 
                            <p>Acesso completo à Área do Parceiro;</p>
                        </div>
                        <div className='vantagem'>
                            <img src={IconVerificacao} alt="Icon de verificado"/> 
                            <p>Exposição dos seus produtos na Vitrine;</p>
                        </div>
                        <div className='vantagem'>
                            <img src={IconVerificacao} alt="Icon de verificado"/> 
                            <p>Anúncios do seu negócio na plataforma;</p>
                        </div>
                        <div className='vantagem'>
                            <img src={IconVerificacao} alt="Icon de verificado"/> 
                            <p>Seus produtos serão priorizados nas pesquisas dos usuários;</p>
                        </div>
                        <div className='vantagem'>
                            <img src={IconVerificacao} alt="Icon de verificado"/> 
                            <p>Seu negócio será exposto nos destaques;</p>
                        </div>
                        <div className='vantagem'>
                            <img src={IconVerificacao} alt="Icon de verificado"/> 
                            <p>Seu negócio será recomendado para outros usuários;</p>
                        </div>
                        <button className='buttonPlanos'>Plano GOLD</button>
                    </div>
                
                </div>    

            </section>
                


        </body>

        <Footer></Footer>
        </>
    )    
}

export default AreaParceiro;

  