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
import Form from './components/form/form.jsx'
import Featured from './components/featured/featured.jsx'
import BoxVideo from './components/boxVideo/boxVideo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <BarraLinks></BarraLinks>
    <div>
      <br></br>

    </div>
    <Form></Form>
    <div>
      <br></br>

    </div>
    <Featured title={"NOSSOS DESTAQUES"}></Featured>
        {/* <Featured titleBox={"NOSSOS DETAQUES"}
              name1={Teste}
              nincho1={teste}
              name2={Teste}
              nincho2={teste}
              name3={Teste}
              nincho3={teste}
              name4={Teste}
              nincho4={teste}
              name5={Teste}
              nincho5={teste}></Featured> */}
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

    <BoxInfo></BoxInfo>
    <BoxVideo video={"https://www.youtube.com/embed/FqnAV6tkwzA"} 
              title={"Como usar nossa plataforma?"} 
              text={"Para que você consiga usufruir de todos os benefícios da nossa plataforma, criamos um tutorial que irá explicar de maneira breve como navegar na nossa plataforma."}>
    </BoxVideo> 
    <Footer></Footer>
  </React.StrictMode>,
)
