import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRauter , Routes } from 'react-router-dom'
import Home from "./home"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRauter>
    <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/produtos" element={<Produtos/>}/>
    <Route path="/ofertas" element={<Ofertas/>}/>
    </Routes>
    </BrowserRauter>
  </React.StrictMode>,
)



