import './home.css'
import Carrossel from '../../../components/carrossel/carrossel.jsx'
import Header from '../../../components/header/header.jsx'
import BarraLinkExterno from '../../../components/barraLinkExterno/BarraLinkExterno.jsx'
import Footer from '../../../components/footer/footer.jsx'
import BoxInfo from '../../../components/boxInfo/boxInfo.jsx'
import GrowIcon from '../../../assets/growIcon.svg';
import StoreIcon from '../../../assets/storeIcon.svg';
import PuzzleIcon from '../../../assets/puzzleIcon.svg'; 
import Informations from '../../../components/informations/informations.jsx';
import Featured from '../../../components/featured/featured.jsx'
import LogoColorida from '../../../assets/logoColorida.svg'
import Depoimentos from '../../../components/despoimentos/depoimentos.jsx'
import PerfilIcon from '../../../assets/profileIcon.svg'

//Imagens do carrossel
import Artesanado from '../../../assets/artesanato.png'
import Educacao from '../../../assets/educacaoAula.png'
import Gastronomia from '../../../assets/gastronomiaTrufa.png'
import Saude01 from '../../../assets/saudeFisio.png'
import Saude02 from '../../../assets/saudeEstetica.png'
import Tecnologia from '../../../assets/tecnologia.png'
import Propaganda from '../../../assets/propagandaImpulsioneAi.png'

function Home(){
    return (
        <>
        <Header></Header>

        <nav id='barraLinks'>
            <BarraLinkExterno id='fundoLaranja' name={'GASTRONOMIA'} link={''}></BarraLinkExterno>
            <BarraLinkExterno id='fundoLaranja' name={'MODA'} link={''}></BarraLinkExterno>
            <BarraLinkExterno id='fundoLaranja' name={'ARTESANATO'} link={''}></BarraLinkExterno>
            <BarraLinkExterno id='fundoLaranja' name={'TECNOLOGIA'} link={''}></BarraLinkExterno>
            <BarraLinkExterno id='fundoLaranja' name={'EDUCAÇÃO'} link={''}></BarraLinkExterno>
            <BarraLinkExterno id='fundoLaranja' name={'SAÚDE'} link={''}></BarraLinkExterno>
            <BarraLinkExterno id='fundoLaranja' name={'ESTÉTICA'} link={''}></BarraLinkExterno>
            <BarraLinkExterno id='fundoLaranja' name={'DIVERSOS'} link={''}></BarraLinkExterno>
        </nav>
        

        <div className="carrossel">
            <Carrossel
                img1={Artesanado}
                img2={Saude01}
                img3={Gastronomia}
                img4={Tecnologia}
                img5={Saude02}
                img6={Educacao}
                img7={Propaganda}
            />
            <div className='carrossel_texto'>
                <img src={LogoColorida} alt="Logo" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate optio quisquam, beatae eligendi nesciunt architecto distinctio molestiae tenetur in aperiam! Facere, et hic. Doloribus, sit ea nemo nihil itaque ab.</p>
            </div>
        </div>

        <div id='boxInfos'>
            {/* <BoxInfo id="tituloBloco" title={"NOSSO OBJETIVO"}></BoxInfo> */}
            <BoxInfo title={"NOSSO OBJETIVO"} idBox={'titleBoxRoxo'} idDivisor={'divisorRoxo'}></BoxInfo>
            <div>
                <div className="boxInformations">                
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
            <div id='chamada'>
                <p>Torne-se um parceiro! <a href=''><strong>Conheça nossas vantagens</strong></a></p>
            </div>
        </div>

        <div id='destaques'>
            <Featured title={"NOSSOS DESTAQUES"}></Featured>
        </div>

        <div id='tituloDepoimentos'>
            <h2>DEPOIMENTOS DOS PARCEIROS</h2>
        </div>
        <div  id='depoimentos'>
            <Depoimentos  imagemSrc={PerfilIcon} nome='Catia' nicho='Bolos' review='Proin sed consequat metus, eu posuere lectus. Etiam id sem nec sem dictum blandit. Cras ut massa porttitor, malesuada sem eget, placerat nisl.' />
            <Depoimentos  imagemSrc={PerfilIcon} nome='Fernanda' nicho='Artezanato' review='Proin sed consequat metus, eu posuere lectus. Etiam id sem nec sem dictum blandit. Cras ut massa porttitor, malesuada sem eget, placerat nisl.' />
            <Depoimentos  imagemSrc={PerfilIcon} nome='Catia' nicho='Web' review='Proin sed consequat metus, eu posuere lectus. Etiam id sem nec sem dictum blandit. Cras ut massa porttitor, malesuada sem eget, placerat nisl.' />
        </div>

        <Footer></Footer>
        </>
    )
}

export default Home