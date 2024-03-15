import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Carrossel from './components/carrossel/carrossel.jsx'
import Header from './components/header/header.jsx'
import BarraLinks from './components/barraLinks/BarraLinks.jsx'
import Footer from './components/footer/footer.jsx'
import BoxInfo from './components/boxInfo/boxInfo.jsx'
import Featured from './components/featured/featured.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <BarraLinks></BarraLinks>
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
    <BoxInfo></BoxInfo>
    <Footer></Footer>
  </React.StrictMode>,
)
