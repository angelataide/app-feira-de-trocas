import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage.jsx'
import Login from './pages/Login/Login.jsx'
import Cadastro from './pages/Cadastro/Cadastro.jsx'
import Itens from './pages/Itens/Itens.jsx'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/itens" element={<Itens />} />
                <Route
                    path="*"
                    element={<h1>404 - Página não encontrada</h1>}
                />
            </Routes>
        </Router>
    )
}

export default App
