import { Lock, Mail, User } from "lucide-react";
import InputField from "./InputField";

export default function RegisterForm() {
    return (
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
    );
}
