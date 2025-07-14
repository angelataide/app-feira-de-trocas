import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage.jsx'
import Login from './pages/Login.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Itens from './pages/itens.jsx'

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
