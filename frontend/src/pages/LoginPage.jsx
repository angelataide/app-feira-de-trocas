import { Link } from "react-router-dom";
import { Waves, ArrowLeft, Mail, Lock, Eye, User, Heart } from "lucide-react";

const InputField = ({ id, type, placeholder, icon }) => (
    <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-500/70">
            {icon}
        </div>
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className="w-full h-12 pl-10 pr-4 border rounded-lg bg-white/70 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 border-neutral-200"
        />
    </div>
);

const InfoFooterCard = () => (
    <div className="mt-8 text-center">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/80 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-3">
                {/* Mantive as cores rosa e roxo do seu design original para dar um charme */}
                <Heart className="w-5 h-5 text-pink-500" />
                <Waves className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-neutral-500 leading-relaxed">
                Ao se cadastrar, você se junta a uma comunidade que valoriza a{" "}
                <span className="font-semibold text-purple-600">
                    sustentabilidade
                </span>{" "}
                e o{" "}
                <span className="font-semibold text-pink-600">
                    compartilhamento consciente
                </span>
                .
            </p>
        </div>
    </div>
);

export default function LoginPage() {
    const activeTab = "register";
    const showPassword = false;

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
                {/* Logo */}
                <div className="text-center mb-6">
                    <a
                        href="/"
                        className="inline-flex items-center gap-3 mb-2 hover:scale-105 transition-transform"
                    >
                        <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <Waves className="w-7 h-7 text-white" />
                        </div>
                        <h1 className="text-4xl font-bold text-neutral-800">
                            TrocAí
                        </h1>
                    </a>
                    <p className="text-neutral-500">
                        Entre ou cadastre-se para começar a trocar ✨
                    </p>
                </div>

                <div className="bg-white/80 backdrop-blur-lg border border-neutral-200/80 rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-6 sm:p-8">
                        {/* Sistema de Abas (Tabs) */}
                        <div className="grid grid-cols-2 gap-2 mb-6 bg-neutral-100 p-1 rounded-xl">
                            <button
                                className={`w-full p-2 rounded-lg text-sm font-semibold transition-all duration-300
                            ${
                                activeTab === "login"
                                    ? "bg-white shadow text-primary-600"
                                    : "text-neutral-500 hover:bg-neutral-200/50"
                            }`}
                            >
                                Entrar
                            </button>
                            <button
                                className={`w-full p-2 rounded-lg text-sm font-semibold transition-all duration-300
                            ${
                                activeTab === "register"
                                    ? "bg-white shadow text-primary-600"
                                    : "text-neutral-500 hover:bg-neutral-200/50"
                            }`}
                            >
                                Cadastrar
                            </button>
                        </div>

                        {activeTab === "login" && (
                            <form className="space-y-4">
                                <InputField
                                    id="login-email"
                                    type="email"
                                    placeholder="seu@email.com"
                                    icon={<Mail className="w-5 h-5" />}
                                />
                                <InputField
                                    id="login-password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Sua senha"
                                    icon={<Lock className="w-5 h-5" />}
                                />

                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-neutral-500">
                                        Mostrar senha
                                    </span>
                                    <Link
                                        to="/recuperar-senha"
                                        className="font-semibold text-primary-600 hover:underline"
                                    >
                                        Esqueceu a senha?
                                    </Link>
                                </div>

                                <button
                                    type="button"
                                    className="w-full h-12 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                                >
                                    Entrar na conta
                                </button>
                            </form>
                        )}

                        {activeTab === "register" && (
                            <form className="space-y-4">
                                <InputField
                                    id="reg-name"
                                    type="text"
                                    placeholder="Nome completo"
                                    icon={<User className="w-5 h-5" />}
                                />
                                <InputField
                                    id="reg-email"
                                    type="email"
                                    placeholder="seu@email.com"
                                    icon={<Mail className="w-5 h-5" />}
                                />
                                <InputField
                                    id="reg-password"
                                    type="password"
                                    placeholder="Crie uma senha"
                                    icon={<Lock className="w-5 h-5" />}
                                />

                                <button
                                    type="button"
                                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-300 hover:opacity-90 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                                >
                                    🎉 Criar Conta Gratuita
                                </button>
                            </form>
                        )}
                    </div>
                </div>
                <InfoFooterCard />
            </div>
        </div>
    );
}
