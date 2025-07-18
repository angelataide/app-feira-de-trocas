import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ExplorarHeader() {
    return (
        <header className="bg-white/80 backdrop-blur-sm border-b border-neutral-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-neutral-800 hover:text-primary-600 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Voltar ao início
                    </Link>
                </div>
            </div>
        </header>
    );
}
