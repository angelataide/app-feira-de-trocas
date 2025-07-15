import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { ThemeProvider } from './context/ThemeContext'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastrar from './pages/Cadastrar'
import Propostas from './pages/Propostas'
import ItemDetalhes from './pages/ItemDetalhes'
import Chat from './pages/Chat'

function App() {
    return (
        <ThemeProvider>
            <AppProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/cadastrar" element={<Cadastrar />} />
                        <Route path="/propostas" element={<Propostas />} />
                        <Route path="/item/:id" element={<ItemDetalhes />} />
                        <Route path="/chat/:chatId?" element={<Chat />} />
                    </Routes>
                </Router>
            </AppProvider>
        </ThemeProvider>
    )
}

export default App
