import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ExplorarPage from "./pages/ExplorerPage.jsx";
import ItemPage from "./pages/ItemPage.jsx";
import ProposalPage from "./pages/ProposalPage.jsx";
import CreateItemPage from "./pages/CreateItemPage.jsx";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/explorer" element={<ExplorarPage />} />
                <Route path="/item/:id" element={<ItemPage />} />
                <Route path="/proposals" element={<ProposalPage />} />
                <Route path="/item/create" element={<CreateItemPage />} />
                <Route path="*" element={<h1>404: Página Não Encontrada</h1>} />
            </Routes>
        </>
    );
}

export default App;
