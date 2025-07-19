import { CheckCircle } from "lucide-react";

export default function SuccessScreen() {
    return (
        <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md text-center bg-white rounded-2xl shadow-xl p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-green-600 mb-3">
                    Item Cadastrado! 🎉
                </h2>
                <p className="text-neutral-500 mb-6 text-lg">
                    Seu item já está disponível para troca na comunidade!
                </p>
                <div className="flex items-center justify-center gap-2 text-primary-600">
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" />
                    <div
                        className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                    />
                    <div
                        className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                    />
                    <span className="ml-2 text-sm font-medium">
                        Redirecionando...
                    </span>
                </div>
            </div>
        </div>
    );
}
