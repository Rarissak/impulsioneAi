import './boxInfo.css';
import '../../index.css';
// import GrowIcon from '../../assets/growIcon.svg';
// import StoreIcon from '../../assets/storeIcon.svg';
// import PuzzleIcon from '../../assets/puzzleIcon.svg'; 
// import Informations from '../informations/informations.jsx';

function BoxInfo({title}) {
    return(
        <section>
            <div id="titleBox">
                <h1 className="title">{title}</h1>
            </div>

            <div id="divisor"></div>
        
            
        </section>
    )
}
export default BoxInfo