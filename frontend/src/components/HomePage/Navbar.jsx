import { Waves } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="bg-white/80 backdrop-blur-sm border-b border-neutral-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                            <Waves className="w-5 h-5 text-white" />
                        </div>
                        <h1 className="text-xl font-bold text-neutral-800">
                            TrocAí
                        </h1>
                    </a>
                    <nav className="flex items-center gap-2">
                        <Link to="/login">
                            <button className="px-4 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-100 rounded-md transition-colors">
                                Entrar
                            </button>
                        </Link>
                        <Link to="/cadastrar">
                            <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-md transition-colors">
                                Cadastrar
                            </button>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
