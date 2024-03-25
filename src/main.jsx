import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, RouterProvider, Route, Routes } from 'react-router-dom';


import './index.css'

import AreaParceiro from './pages/UsuarioComum/AreaParceiro/index.jsx';
import Vitrine from './pages/UsuarioComum/Vitrine/index.jsx';
import Home from './pages/UsuarioComum/Home/index.jsx';
import Login from './pages/UsuarioComum/login/login.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/vitrine' Component={Vitrine} />
        <Route path='/areaParceiro' Component={AreaParceiro} />
        <Route path='/' Component={Home} />
        <Route path='/login' Component={Login} />
      </Routes>
    </Router>
  );
}
// export default App


// Aqui a gente coloca todas as pages que vão ter
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home></Home>
//   },
//   {
//     path: "areaParceiro",
//     element: <AreaParceiro></AreaParceiro>,
//   },
//   {
//     path: "vitrine",
//     elements: <Vitrine></Vitrine>,
//   },
//   {
//     path: "login",
//     elements: <Login></Login>
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
    {/* <RouterProvider router={router}></RouterProvider> */}

    {/* <AreaParceiro></AreaParceiro> */}

    </React.StrictMode>,
)
