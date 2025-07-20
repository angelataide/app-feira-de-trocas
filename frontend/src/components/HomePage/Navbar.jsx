import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/Blue_Modern_Business_Corporate_Logo.png";
import { LogOut } from "lucide-react";

export default function Navbar() {
    const navigate = useNavigate();

    const { isAuthenticated, user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    console.log(user);

    return (
        <header className="bg-white/80 backdrop-blur-sm border-b border-neutral-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="TrocAí Logo"
                            className="h-12 w-auto"
                        />
                    </Link>

                    <nav className="flex items-center gap-2">
                        {isAuthenticated ? (
                            <>
                                <span className="text-sm font-semibold text-neutral-800 hidden md:block">
                                    Olá, {user?.nome || "Usuário"}!
                                </span>
                                <Link to="/proposals">
                                    <button className="px-4 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-100 rounded-md transition-colors">
                                        Minhas Propostas
                                    </button>
                                </Link>
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
                                <Link to="/explorer">
                                    <button className="px-4 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-100 rounded-md transition-colors">
                                        Explorar
                                    </button>
                                </Link>
                                <Link to="/login">
                                    <button className="px-4 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-100 rounded-md transition-colors">
                                        Entrar
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
