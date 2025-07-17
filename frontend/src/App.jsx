import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<h1>404: Página Não Encontrada</h1>} />
            </Routes>
        </>
    );
}

export default App;
