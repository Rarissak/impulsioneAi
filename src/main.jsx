import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Carrossel from './components/carrossel/carrossel.jsx'
import Header from './components/header/header.jsx'
import BarraLinks from './components/barraLinks/BarraLinks.jsx'
import Footer from './components/footer/footer.jsx'
import BoxInfo from './components/boxInfo/boxInfo.jsx'
import GrowIcon from './assets/growIcon.svg';
import StoreIcon from './assets/storeIcon.svg';
import PuzzleIcon from './assets/puzzleIcon.svg'; 
import Informations from './components/informations/informations.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <BarraLinks></BarraLinks>
    <div>
      <br></br>
    </div>
    <Carrossel></Carrossel>
    <BoxInfo title={"NOSSO OBJETIVO"}></BoxInfo>
    <div>
      <div id="boxInformations">                
                <Informations icon={GrowIcon} 
                            titulo={"Alavancar a carreira dos pequenos empreendedores"}
                            texto={"Oferecemos uma plataforma que ajuda os pequenos e microempreendedores a aumentar sua visibilidade no mercado, alcançando mais clientes e impulsionando suas vendas."}
                ></Informations>
                <Informations icon={StoreIcon} 
                            titulo={"Promover o comércio local"}
                            texto={"Facilitando a conexão entre os empreendedores locais e os consumidores que desejam produtos e serviços de qualidade a preços acessíveis, incentivando o apoio ao comércio local e fortalecendo a economia da comunidade."}
                ></Informations>
                <Informations icon={PuzzleIcon} 
                            titulo={"Fomentar parcerias e colaborações"}
                            texto={"Estabelecendo parcerias estratégicas, como a colaboração com o Sebrae para capacitar novos empreendedores, a fim de oferecer suporte adicional e recursos educacionais para o crescimento e desenvolvimento dos negócios."}
                ></Informations>
            </div>
    </div>

    <Footer></Footer>
  </React.StrictMode>,
)
