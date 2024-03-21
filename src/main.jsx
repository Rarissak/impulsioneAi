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
import Featured from './components/featured/featured.jsx'
import LogoColorida from './assets/logoColorida.svg'
import Depoimentos from './components/despoimentos/depoimentos.jsx'
import PerfilIcon from './assets/profileIcon.svg'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>

    <BarraLinks></BarraLinks>

    <div className="carrossel">
      <Carrossel></Carrossel>
      <div className='carrossel_texto'>
        <img src={LogoColorida} alt="Logo" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate optio quisquam, beatae eligendi nesciunt architecto distinctio molestiae tenetur in aperiam! Facere, et hic. Doloribus, sit ea nemo nihil itaque ab.</p>
      </div>
    </div>

    <div id='boxInfos'>
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
      <BoxInfo></BoxInfo>
      <div id='vantagens'>
        <p>Torne-se um parceiro! <a href=''><strong>Conheça nossas vantagens</strong></a></p>
      </div>
    </div>

    <div id='destaques'>
      <Featured title={"NOSSOS DESTAQUES"}></Featured>
    </div>

    <div id='tituloDepoimentos'>
      <h2 className='title'>DEPOIMENTOS DOS PARCEIROS</h2>
    </div>
    <div  id='depoimentos'>
        <Depoimentos  imagemSrc={PerfilIcon} nome='Catia' nicho='Bolos' review='Proin sed consequat metus, eu posuere lectus. Etiam id sem nec sem dictum blandit. Cras ut massa porttitor, malesuada sem eget, placerat nisl.' />
        <Depoimentos  imagemSrc={PerfilIcon} nome='Fernanda' nicho='Artezanato' review='Proin sed consequat metus, eu posuere lectus. Etiam id sem nec sem dictum blandit. Cras ut massa porttitor, malesuada sem eget, placerat nisl.' />
        <Depoimentos  imagemSrc={PerfilIcon} nome='Catia' nicho='Web' review='Proin sed consequat metus, eu posuere lectus. Etiam id sem nec sem dictum blandit. Cras ut massa porttitor, malesuada sem eget, placerat nisl.' />
    </div>

    <Footer></Footer>

  </React.StrictMode>,
)
