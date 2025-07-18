import { Link } from "react-router-dom";
import InputField from "./InputField";
import { Lock, Mail } from "lucide-react";

export default function LoginForm() {
    return (
        <form className="space-y-4">
            <InputField
                id="login-email"
                type="email"
                placeholder="seu@email.com"
                icon={<Mail className="w-5 h-5" />}
            />
            <InputField
                id="login-password"
                type="password"
                placeholder="Sua senha"
                icon={<Lock className="w-5 h-5" />}
            />
            <div className="flex items-center justify-end text-sm">
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
    );
}
