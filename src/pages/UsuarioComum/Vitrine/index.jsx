import React from 'react';
import ReactDOM from 'react-dom/client';
// import '././././index.css';
import './vitrine.css';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import Carrossel from '../../../components/carrossel/carrossel';
import BarraLinks from '../../../components/barraLinks/BarraLinks';
import BoxInfo from '../../../components/boxInfo/boxInfo';

import Produto from '../../../components/produto/produto';
import Trufa from './image 1.jpg';
import SendMensage from '../../../assets/sendMensageIcon.svg';
import HeartLine from '../../../assets/heratLineIcon.svg';
import FullHeart from '../../../assets/fullHeartIcon.svg';
import Favoritar from '../../../utils/favoritar';

function Vitrine(){
    return (
        <>
        {/* <h1>Teste</h1> */}
        <Header></Header>
        <body>
            <div className='blocoRoxo'>
                <BarraLinks></BarraLinks>
                <img src={FullHeart}></img>
                <img src={HeartLine}></img>

                <section id="bloco1">
                <div id="infoBloco1">
                    <button id='favoritos' onClick={Favoritar}>
                        <img id='botaoFavoritar' src={HeartLine}/>
                    </button>
                    <h1 className='title'>Trufas do Sim</h1>
                    <p>Nosso propósito é juntar todos os recursos para nosso casamento, então além de você comer uma trufa deliciosa e feita com muito amor & oração, você ainda vai tá ajudando a investir no nosso dia do sim!!!</p>
                    <button className='buttonInfo'>VER PRODUTOS</button>
                </div>
                <Carrossel></Carrossel>
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
                <BoxInfo className='title' title={"Avaliações"}></BoxInfo>
                <div className='boxInformations' id="boxLaranja">
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