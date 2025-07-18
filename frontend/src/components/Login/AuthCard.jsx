import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthCard() {
    const [activeTab, setActiveTab] = useState("register");
    return (
        <div className="bg-white/80 backdrop-blur-lg border border-neutral-200/80 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8">
                <div className="grid grid-cols-2 gap-2 mb-6 bg-neutral-100 p-1 rounded-xl">
                    <button
                        onClick={() => setActiveTab("login")}
                        className={`w-full p-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                            activeTab === "login"
                                ? "bg-white shadow text-primary-600"
                                : "text-neutral-500 hover:bg-neutral-200/50"
                        }`}
                    >
                        Entrar
                    </button>
                    <button
                        onClick={() => setActiveTab("register")}
                        className={`w-full p-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                            activeTab === "register"
                                ? "bg-white shadow text-primary-600"
                                : "text-neutral-500 hover:bg-neutral-200/50"
                        }`}
                    >
                        Cadastrar
                    </button>
                </div>
                {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
            </div>
        </div>
    );
}
