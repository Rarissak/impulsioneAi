import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Login from './pages/UsuarioComum/Login/index.jsx';
import AreaParceiro from './pages/UsuarioComum/AreaParceiro/index.jsx';
import Vitrine from './pages/UsuarioComum/Vitrine/index.jsx';

// Configurando o router
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'

// Aqui a gente coloca todas as pages que vão ter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Vitrine></Vitrine>
  },
  {
    path: "areaParceiro",
    element: <AreaParceiro></AreaParceiro>,
  },
  {
    path: "vitrine",
    elements: <Vitrine></Vitrine>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>

    {/* <AreaParceiro></AreaParceiro> */}

    
  </React.StrictMode>,
)
