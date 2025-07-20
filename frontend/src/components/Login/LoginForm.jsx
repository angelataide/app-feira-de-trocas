import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import InputField from "./InputField";
import { Lock, Mail } from "lucide-react";

export default function LoginForm() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            // **PONTO DE INTEGRAÇÃO COM SEU BACKEND**
            // Substitua 'http://localhost:3000/api/login' pela URL do seu endpoint de login
            const response = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Falha no login.");
            }

            // Se o login for bem-sucedido, chame a função 'login' do AuthContext
            login(data.user, data.token); // Supondo que sua API retorna { user: {...}, token: "..." }

            // Redirecione para uma página protegida
            navigate("/explorer");
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
                id="login-email"
                type="email"
                placeholder="seu@email.com"
                icon={<Mail className="w-5 h-5" />}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
                id="login-password"
                type="password"
                placeholder="Sua senha"
                icon={<Lock className="w-5 h-5" />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-sm text-red-600">{error}</p>}

            <div className="flex items-center justify-end text-sm">
                <Link
                    to="/recuperar-senha"
                    className="font-semibold text-primary-600 hover:underline"
                >
                    Esqueceu a senha?
                </Link>
            </div>
            <button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all disabled:bg-neutral-400"
            >
                {isLoading ? "Entrando..." : "Entrar na conta"}
            </button>
        </form>
    );
}
