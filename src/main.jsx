import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Carrossel from './components/carrossel/carrossel.jsx'
import Header from './components/header/header.jsx'
import BarraLinks from './components/barraLinks/BarraLinks.jsx'
import BoxInfo from './components/boxInfo/boxInfo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <BarraLinks></BarraLinks>
    <div>
      <br></br>
    </div>
    <Carrossel></Carrossel>
    <BoxInfo></BoxInfo>
  </React.StrictMode>,
)
