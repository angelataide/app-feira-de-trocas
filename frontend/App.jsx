import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './src/pages/HomePage.jsx';
import Login    from './src/pages/login.jsx';
import Cadastro from './src/pages/Cadastro.jsx';
import Itens    from './src/pages/itens.jsx';
import "./src/pages/app.css"; // css do login

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"        element={<HomePage />} />
        <Route path="/login"   element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/itens"   element={<Itens />} />
        <Route path="*"        element={<h1>404 - Página não encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
