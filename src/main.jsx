import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Carrossel from './components/carrossel/carrossel.jsx'
import Header from './components/header/header.jsx'
import BarraLinks from './components/barraLinks/BarraLinks.jsx'
import Footer from './components/footer/footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <BarraLinks></BarraLinks>
    <Carrossel></Carrossel>
    <div>
      <h1>TESTE</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laudantium maxime aliquam. Sunt repellendus, reprehenderit error architecto iste nemo sed, deleniti voluptas quaerat dolorum quia ducimus asperiores impedit vitae beatae!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius eveniet fugiat tenetur mollitia cumque sunt quisquam cupiditate unde libero non, rerum numquam blanditiis explicabo. Molestiae exercitationem maiores velit assumenda alias?<br/>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde inventore totam rerum nostrum enim tempora aliquam minima necessitatibus natus accusantium quia eos recusandae quam distinctio impedit magni, sed fugiat aperiam.<br/>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse delectus aspernatur magnam recusandae harum at perspiciatis eaque labore nulla impedit est, voluptate officiis fuga dolorem doloremque molestiae nihil praesentium.<br/>
      </p>
    </div>
    <Footer></Footer>
  </React.StrictMode>,
)
