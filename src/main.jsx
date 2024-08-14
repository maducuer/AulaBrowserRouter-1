import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './Home'
import Oferta from './Oferta'
=======
import { BrowserRauter , Routes } from 'react-router-dom'
import Home from "./home"
>>>>>>> 297190b7c5db3d96497bb79c9be865f73adcd61f


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/oferta" element={<Oferta/>}/>
    </Routes>
    </BrowserRouter>

=======
    <BrowserRauter>
    <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/produtos" element={<Produtos/>}/>
    <Route path="/ofertas" element={<Ofertas/>}/>
    </Routes>
    </BrowserRauter>
>>>>>>> 297190b7c5db3d96497bb79c9be865f73adcd61f
  </React.StrictMode>,
)



