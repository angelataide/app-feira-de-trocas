import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/Blue_Modern_Business_Corporate_Logo.png";
import useAuth from "../../hooks/useAuth";
import {
    LogOut,
    Menu,
    X,
    Package,
    PlusCircle,
    Search,
    FileText,
} from "lucide-react";

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { isAuthenticated, user, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const isHome = location.pathname === "/";

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const greetingGradient =
        "bg-[linear-gradient(135deg,_#38B2AC_0%,_#3B82F6_100%)] bg-clip-text text-transparent font-bold";

    return (
        <header className="bg-white/90 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <div className="flex items-center gap-3 min-w-[150px]">
                    {isHome ? (
                        <Link to="/">
                            <img
                                src={Logo}
                                alt="TrocAí Logo"
                                className="h-42 w-auto"
                            />
                        </Link>
                    ) : (
                        isAuthenticated && (
                            <span className={`${greetingGradient} text-xl`}>
                                Olá, {user?.nome?.split(" ")[0] || "Usuário"}!
                            </span>
                        )
                    )}
                </div>

                <button
                    className="md:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100 transition-colors"
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label="Abrir menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav
                    className={`${
                        menuOpen ? "block" : "hidden"
                    } md:flex md:items-center md:gap-6 w-full md:w-auto absolute md:static top-16 left-0 bg-white md:bg-transparent border-t md:border-none border-neutral-200 md:pt-0 pt-4 md:pb-0 pb-4 md:px-0 px-6`}
                >
                    {isAuthenticated ? (
                        <>
                            {!isHome && (
                                <>
                                    <Link
                                        to="/proposals"
                                        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-neutral-100 transition-colors text-neutral-800"
                                    >
                                        <FileText size={18} />
                                        Minhas Propostas
                                    </Link>
                                    <Link
                                        to="/item/me"
                                        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-neutral-100 transition-colors text-neutral-800"
                                    >
                                        <Package size={18} />
                                        Meus Itens
                                    </Link>
                                    <Link
                                        to="/item/create"
                                        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-neutral-100 transition-colors text-neutral-800"
                                    >
                                        <PlusCircle size={18} />
                                        Adicionar Item
                                    </Link>
                                    <Link
                                        to="/explorer"
                                        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-neutral-100 transition-colors text-neutral-800"
                                    >
                                        <Search size={18} />
                                        Explorar Itens
                                    </Link>
                                </>
                            )}

                            <button
                                onClick={handleLogout}
                                title="Sair"
                                className="flex items-center gap-1 p-2 text-primary-700 hover:text-primary-900 hover:bg-primary-100 rounded-md transition-colors font-semibold"
                            >
                                <LogOut
                                    size={20}
                                    className="text-primary-700"
                                />
                                <span className="hidden md:inline">Sair</span>
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login?mode=login"
                                className="px-4 py-2 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-md transition-colors"
                            >
                                Entrar
                            </Link>
                            <Link
                                to="/login?mode=register"
                                className="px-4 py-2 text-sm font-semibold text-primary-600 bg-white border border-primary-600 hover:bg-primary-50 rounded-md transition-colors"
                            >
                                Cadastrar
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}
