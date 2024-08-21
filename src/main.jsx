import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './Home'
import Oferta from './Oferta'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
    <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/produtos" element={<Produtos/>}/>
    <Route path="/ofertas" element={<Oferta/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)



