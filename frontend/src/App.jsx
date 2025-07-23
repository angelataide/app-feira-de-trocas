import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ExplorarPage from "./pages/ExplorerPage.jsx";
import ItemPage from "./pages/ItemPage.jsx";
import ProposalPage from "./pages/ProposalPage.jsx";
import CreateItemPage from "./pages/CreateItemPage.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import MyItemsPage from "./pages/MyItensPage.jsx";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<h1>404: Página Não Encontrada</h1>} />

            <Route element={<MainLayout forceLoggedOut={true} />}>
                <Route path="/" element={<HomePage />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/item/:id" element={<ItemPage />} />
                    <Route path="/item/me" element={<MyItemsPage />} />
                    <Route path="/proposals" element={<ProposalPage />} />
                    <Route path="/item/create" element={<CreateItemPage />} />
                    <Route path="/explorer" element={<ExplorarPage />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
