import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/Blue_Modern_Business_Corporate_Logo.png";
import { LogOut } from "lucide-react";

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { isAuthenticated, user, logout } = useAuth();

    const isHome = location.pathname === "/";

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <header className="bg-white/80 backdrop-blur-sm border-b border-neutral-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo aparece só na home */}
                    {isHome && (
                        <Link to="/" className="flex items-center gap-3">
                            <img
                                src={logo}
                                alt="TrocAí Logo"
                                className="h-12 w-auto"
                            />
                        </Link>
                    )}

                    {/* Se estiver logado e NÃO for home, mostra só o "bem vindo" do lado esquerdo */}
                    {isAuthenticated && !isHome && (
                        <h2
                            className="bg-gradient-to-r from-blue-700 via-blue-300 to-blue-800 bg-clip-text text-transparent text-xl font-bold mr-4 hidden sm:block"
                            title="Bem-vindo"
                        >
                            Olá, {user?.nome?.split(" ")[0] || "Usuário"}!
                        </h2>
                    )}

                    <nav className="flex items-center gap-2">
                        {isAuthenticated ? (
                            <>
                                {/* Se não for home, mostra os botões */}
                                {!isHome && (
                                    <>
                                        <Link to="/proposals">
                                            <button className="px-4 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-100 rounded-md transition-colors">
                                                Minhas Propostas
                                            </button>
                                        </Link>
                                        <Link to="/item/create">
                                            <button className="px-4 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-100 rounded-md transition-colors">
                                                Adicionar Item
                                            </button>
                                        </Link>
                                        <Link to="/explorer">
                                            <button className="px-4 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-100 rounded-md transition-colors">
                                                Explorar Itens
                                            </button>
                                        </Link>
                                    </>
                                )}
                                <button
                                    onClick={handleLogout}
                                    title="Sair"
                                    className="p-2 text-neutral-600 hover:text-red-500 hover:bg-neutral-100 rounded-md transition-colors"
                                >
                                    <LogOut className="w-5 h-5" />
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login?mode=login">
                                    <button className="px-4 py-2 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-md transition-colors">
                                        Entrar
                                    </button>
                                </Link>
                                <Link to="/login?mode=register">
                                    <button className="px-4 py-2 text-sm font-semibold text-primary-600 bg-white border border-primary-600 hover:bg-primary-50 rounded-md transition-colors">
                                        Cadastrar
                                    </button>
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}
