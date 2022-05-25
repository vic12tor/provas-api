import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import CorPrimaria  from './pages/corprimaria'
import Ingressos from './pages/ingresso'
import MaiorNumero from './pages/maiornumero'
import Frequencia from './pages/frequencia'

export default function SiteRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element ={<Home />}  />
                <Route path='/CorPrimaria' element ={<CorPrimaria />}  />
                <Route path='/Ingressos' element ={<Ingressos />}  />
                <Route path='/MaiorNumero' element ={<MaiorNumero />}  />
                <Route path='/Frequencia' element ={<Frequencia />}  />
            </Routes>
        </BrowserRouter>
    )

}