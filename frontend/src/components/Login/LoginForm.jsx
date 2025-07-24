import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js"; // <-- ESTA LINHA ESTAVA FALTANDO
import InputField from "./InputField";
import { Lock, Mail } from "lucide-react";

export default function LoginForm() {
    const navigate = useNavigate();
    const { login } = useAuth(); // Agora esta linha funcionará
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Falha no login");
            }

            login(data.user, data.token);

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
            {error && (
                <p className="text-sm text-red-600 text-center">{error}</p>
            )}
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
                className="w-full h-12 bg-gradient-to-r from-indigo-500 to-blue-500 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all disabled:bg-neutral-400"
            >
                {isLoading ? "Entrando..." : "Entrar na conta"}
            </button>
        </form>
    );
}
