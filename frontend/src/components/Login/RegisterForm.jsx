import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Lock, Mail, User } from "lucide-react";
import InputField from "./InputField";

export default function RegisterForm() {
    const navigate = useNavigate();
    const { login } = useAuth(); // Usamos o login para autenticar o usuário após o cadastro

    const [name, setName] = useState("");
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
            // Substitua pela URL do seu endpoint de cadastro
            const response = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome: name, email, senha: password }), // Ajuste os nomes dos campos se necessário
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Falha no cadastro.");
            }

            // Após o cadastro, logamos o usuário automaticamente
            login(data.user, data.token);

            // E redirecionamos
            navigate("/explorar");
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
                id="reg-name"
                type="text"
                placeholder="Nome completo"
                icon={<User className="w-5 h-5" />}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <InputField
                id="reg-email"
                type="email"
                placeholder="seu@email.com"
                icon={<Mail className="w-5 h-5" />}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
                id="reg-password"
                type="password"
                placeholder="Crie uma senha"
                icon={<Lock className="w-5 h-5" />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-300 hover:opacity-90 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-50"
            >
                {isLoading ? "Criando conta..." : "🎉 Criar Conta Gratuita"}
            </button>
        </form>
    );
}
