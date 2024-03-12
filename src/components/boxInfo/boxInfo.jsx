import './boxInfo.css';
import '../../index.css';
import GrowIcon from '../../assets/growIcon.svg';
import StoreIcon from '../../assets/storeIcon.svg';
import PuzzleIcon from '../../assets/puzzleIcon.svg'; 
import Informations from '../informations/informations.jsx';

function BoxInfo() {
    return(
        <section>
            <div id="titleBox">
                <h1 className="title">NOSSO OBJETIVO</h1>
            </div>
        
            <div id="boxPrincipal">                
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
        </section>
    )
}
export default BoxInfo