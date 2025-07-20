import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function PrivateRoute() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        // Se o usuário não estiver autenticado, redireciona para a página de login
        return <Navigate to="/login" replace />;
    }

    // Se estiver autenticado, renderiza a página solicitada (HomePage, PropostasPage, etc.)
    return <Outlet />;
}
