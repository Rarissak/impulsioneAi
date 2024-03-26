import React from 'react';
import ReactDOM from 'react-dom/client';
// import '././././index.css';
import './vitrine.css';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import Carrossel from '../../../components/carrossel/carrossel';
import BarraLinkExterno from '../../../components/barraLinkExterno/BarraLinkExterno';
import BoxInfo from '../../../components/boxInfo/boxInfo';

import Produto from '../../../components/produto/produto';
import Trufa from './image 1.jpg';
import SendMensage from '../../../assets/sendMensageIcon.svg';
import HeartLine from '../../../assets/heratLineIcon.svg';
import Favoritar from '../../../utils/favoritar';


//Imagens do carrossel
import Artesanado from '../../../assets/artesanato.png'
import Educacao from '../../../assets/educacaoAula.png'
import Gastronomia from '../../../assets/gastronomiaTrufa.png'
import Saude01 from '../../../assets/saudeFisio.png'
import Saude02 from '../../../assets/saudeEstetica.png'
import Tecnologia from '../../../assets/tecnologia.png'
import Propaganda from '../../../assets/propagandaImpulsioneAi.png'

function Vitrine(){
    return (
        <>
        <Header></Header>
        <body>
            <div className='blocoRoxo'>

                <nav id='barraLinks'>
                    <BarraLinkExterno id='fundoRoxoClaro' name={'GATRONOMIA'} link={''}></BarraLinkExterno>
                    <BarraLinkExterno id='fundoRoxoClaro' name={'MODA'} link={''}></BarraLinkExterno>
                    <BarraLinkExterno id='fundoRoxoClaro' name={'ARTESANATO'} link={''}></BarraLinkExterno>
                    <BarraLinkExterno id='fundoRoxoClaro' name={'TECNOLOGIA'} link={''}></BarraLinkExterno>
                    <BarraLinkExterno id='fundoRoxoClaro' name={'EDUCAÇÃO'} link={''}></BarraLinkExterno>
                    <BarraLinkExterno id='fundoRoxoClaro' name={'SAÚDE'} link={''}></BarraLinkExterno>
                    <BarraLinkExterno id='fundoRoxoClaro' name={'ESTÉTICA'} link={''}></BarraLinkExterno>
                    <BarraLinkExterno id='fundoRoxoClaro' name={'DIVERSOS'} link={''}></BarraLinkExterno>
                </nav>

                <section id="bloco1">
                    <div id="infoBloco1">
                        <button id='favoritos' onClick={Favoritar}>
                            <img id='botaoFavoritar' src={HeartLine}/>
                        </button>
                        <h1 className='title'>Trufas do Sim</h1>
                        <p>Nosso propósito é juntar todos os recursos para nosso casamento, então além de você comer uma trufa deliciosa e feita com muito amor & oração, você ainda vai tá ajudando a investir no nosso dia do sim!!!</p>
                        <a href='#bloco2' className='buttonInfo'>VER PRODUTOS</a>
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
                        <h2 id="textBranco">Nossos Produtos</h2>
                    </div>
                    <div id="gradeProdutos">
                        <div className='produto'>
                            <img alt='produto' src={Trufa}></img>
                            <div className='infoProduto'>
                                <h3>NOME DO PRODUTO bem grande pra ocupar muito espaço</h3>
                                <p>R$ 0,00</p>
                            </div>
                        </div>
                        <div className='produto'>
                            <img alt='produto' src={Trufa}></img>
                            <div className='infoProduto'>
                                <h3>NOME DO PRODUTO</h3>
                                <p>R$ 0,00</p>
                            </div>
                        </div> 
                        <div className='produto'>
                            <img alt='produto' src={Trufa}></img>
                            <div className='infoProduto'>
                                <h3>NOME DO PRODUTO</h3>
                                <p>R$ 0,00</p>
                            </div>
                        </div> 
                        <div className='produto'>
                            <img alt='produto' src={Trufa}></img>
                            <div className='infoProduto'>
                                <h3>NOME DO PRODUTO</h3>
                                <p>R$ 0,00</p>
                            </div>
                        </div> 
                        <div className='produto'>
                            <img alt='produto' src={Trufa}></img>
                            <div className='infoProduto'>
                                <h3>NOME DO PRODUTO</h3>
                                <p>R$ 0,00</p>
                            </div>
                        </div> 
                        <div className='produto'>
                            <img alt='produto' src={Trufa}></img>
                            <div className='infoProduto'>
                                <h3>NOME DO PRODUTO</h3>
                                <p>R$ 0,00</p>
                            </div>
                        </div>                
                    </div>
                </section>
            </div>

            <section id="bloco3">
                <BoxInfo title={"Avaliações"} idBox={'titleBoxLaranja'} idDivisor={'divisorLaranja'}></BoxInfo>
                <div className='teste' id="boxLaranja">
                    <div className='boxAvaliacoes'>
                        <div className='caixaAvaliacao'>
                            <h3>Keylane Cardoso</h3>
                            <p>Fusce nibh nibh, scelerisque vitae libero in, fermentum condimentum ligula. Nullam lobortis ullamcorper sapien, quis euismod tellus porta non.</p>
                        </div>
                        <div className='caixaAvaliacao'>
                            <h3>Nome da Pessoa</h3>
                            <p>Fusce nibh nibh, scelerisque vitae libero in, fermentum condimentum ligula. Nullam lobortis ullamcorper sapien, quis euismod tellus porta non.</p>
                        </div>
                        <div className='caixaAvaliacao'>
                            <h3>Nome da Pessoa</h3>
                            <p>Fusce nibh nibh, scelerisque vitae libero in, fermentum condimentum ligula. Nullam lobortis ullamcorper sapien, quis euismod tellus porta non.</p>
                        </div>
                        <div className='caixaAvaliacao'>
                            <h3>Nome da Pessoa</h3>
                            <p>Fusce nibh nibh, scelerisque vitae libero in, fermentum condimentum ligula. Nullam lobortis ullamcorper sapien, quis euismod tellus porta non.</p>
                        </div>
                    </div>
                    <div id='inputAvaliacao'>
                        <input type='text'
                                placeholder="Insira sua avaliação"
                                placeholderTextColor="#8b9cb5"
                                maxLength={100}>        
                        </input>
                        <img src={SendMensage} alt='icon de enviar mensagem'></img>
                    </div>
                </div>
            </section>
        </body>
        <Footer></Footer>
        </>
    )
}

export default Vitrine;