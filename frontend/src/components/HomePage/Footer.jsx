import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Logo from "../../assets/Blue_Modern_Business_Corporate_Logo.png";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <p className="text-neutral-400 mb-4 leading-relaxed max-w-md">
                            Conectando comunidades através da troca consciente e
                            sustentável. Promovendo um futuro mais verde, uma
                            troca por vez.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-neutral-400">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>100% Gratuito</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Seguro e Confiável</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4">
                            Links Rápidos
                        </h4>
                        <ul className="space-y-2 text-neutral-400">
                            <li>
                                <Link
                                    to="/explorer"
                                    className="hover:text-white transition-colors"
                                >
                                    Explorar Itens
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/login/?mode=register"
                                    className="hover:text-white transition-colors"
                                >
                                    Cadastrar Item
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/proposals"
                                    className="hover:text-white transition-colors"
                                >
                                    Minhas Propostas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/login/?mode=login"
                                    className="hover:text-white transition-colors"
                                >
                                    Entrar
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4">Suporte</h4>
                        <ul className="space-y-2 text-neutral-400">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-white transition-colors"
                                >
                                    Central de Ajuda
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-white transition-colors"
                                >
                                    Termos de Uso
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-white transition-colors"
                                >
                                    Privacidade
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-white transition-colors"
                                >
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 text-center">
                    <p className="text-neutral-500 text-sm">
                        © {new Date().getFullYear()} TrocAí. Todos os direitos
                        reservados. Feito com ❤️ para um mundo mais conciente.
                    </p>
                </div>
            </div>
        </footer>
    );
}
