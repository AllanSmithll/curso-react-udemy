import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Contato from './pages/Contato/Contato';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home />}/>
                <Route path='/sobre' element={ <Sobre />}/>
                <Route path='/contato' element={<Contato />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;