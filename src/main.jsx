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
import Form from './components/form/form.jsx';
import Featured from './components/featured/featured.jsx';
import BoxVideo from './components/boxVideo/boxVideo.jsx';

import AreaParceiro from './pages/UsuarioComum/AreaParceiro/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AreaParceiro></AreaParceiro>

    
  </React.StrictMode>,
)
