import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AuthHeader from "../components/Login/AuthHeader";
import AuthCard from "../components/Login/AuthCard";
import InfoFooterCard from "../components/Login/InfoFooterCard";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
            <div className="absolute top-6 left-6 z-10">
                <Link to="/">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white/80 backdrop-blur-sm border border-neutral-200/80 rounded-lg shadow-sm hover:bg-neutral-100 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Voltar ao Início
                    </button>
                </Link>
            </div>

            <div className="w-full max-w-md">
                <AuthHeader />
                <AuthCard />
                <InfoFooterCard />
            </div>
        </div>
    );
}
