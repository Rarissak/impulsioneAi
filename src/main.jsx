import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Carrossel from './components/carrossel/carrossel.jsx'
import Header from './components/header/header.jsx'
import BarraLinks from './components/barraLinks/BarraLinks.jsx'
import Footer from './components/footer/footer.jsx'
import BoxInfo from './components/boxInfo/boxInfo.jsx'
import BoxVideo from './components/boxVideo/boxVideo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <BarraLinks></BarraLinks>
    <div>
      <br></br>
    </div>
    <Carrossel></Carrossel>
    <BoxInfo></BoxInfo>
    <BoxVideo video={"https://www.youtube.com/embed/FqnAV6tkwzA"} 
              title={"Como usar nossa plataforma?"} 
              text={"Para que você consiga usufruir de todos os benefícios da nossa plataforma, criamos um tutorial que irá explicar de maneira breve como navegar na nossa plataforma."}>
    </BoxVideo> 
    <Footer></Footer>
  </React.StrictMode>,
)
