import { ArrowRight, Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <section className="bg-[linear-gradient(135deg,_#38B2AC_0%,_#3B82F6_100%)] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
                    Troque, Reutilize, Conecte-se
                </h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 mb-8">
                    Encontre itens que você precisa e ofereça o que não usa
                    mais. Fortaleça sua comunidade através da troca consciente e
                    sustentável.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/explorar">
                        <button className="flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 font-semibold bg-white text-primary-600 rounded-lg hover:bg-neutral-100 transition-colors">
                            <Search className="w-4 h-4" />
                            Explorar Itens
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                    <Link to="/cadastrar-item">
                        <button className="flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 font-semibold bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors">
                            <Plus className="w-4 h-4" />
                            Cadastrar Item
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
