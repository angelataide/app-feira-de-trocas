import { Waves } from "lucide-react";
import { Link } from "react-router-dom";

export default function AuthHeader() {
    return (
        <div className="text-center mb-6">
            <Link
                to="/"
                className="inline-flex items-center gap-3 mb-2 hover:scale-105 transition-transform"
            >
                <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Waves className="w-7 h-7 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-neutral-800">TrocAí</h1>
            </Link>
            <p className="text-neutral-500">
                Entre ou cadastre-se para começar a trocar ✨
            </p>
        </div>
    );
}
