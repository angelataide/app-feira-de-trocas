import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// <-- 1. IMPORTAMOS O HOOK DE AUTENTICAÇÃO
// Verifique os nomes dos seus arquivos de mock

import { Gift } from "lucide-react";
import { condicoes } from "../constants/createMock";
import useAuth from "../hooks/useAuth";
import { categorias } from "../constants/categoriaMock";
import FormField from "../components/CreateItem/FormField";
import SelectField from "../components/CreateItem/SelectField";
import ImageUpload from "../components/CreateItem/ImageUpload";
import SuccessScreen from "../components/CreateItem/SuccessScreen";

export default function CreateItemPage() {
    const navigate = useNavigate();
    const { user, token } = useAuth();

    const [formData, setFormData] = useState({
        titulo: "",
        descricao: "",
        categoria: "",
        condicao: "",
        observacoes: "",
        imagemUrl:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Adicionado URL de imagem de exemplo
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const payload = {
            ...formData,
            usuarioId: user.id,
        };

        try {
            const response = await fetch("http://localhost:3000/api/items", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message || "Falha ao cadastrar o item."
                );
            }

            setIsSuccess(true);
            setTimeout(() => navigate("/explorer"), 3000);
        } catch (err) {
            setError(err.message);
            console.error("Erro ao cadastrar item:", err);
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return <SuccessScreen />;
    }

    return (
        <div className="min-h-screen bg-neutral-50 font-sans py-12">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white/80 backdrop-blur-lg border border-neutral-100 rounded-2xl shadow-xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                            <Gift className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-neutral-900">
                                Cadastrar Novo Item
                            </h2>
                            <p className="text-neutral-500">
                                Preencha as informações do item que você
                                gostaria de trocar.
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <FormField
                            id="titulo"
                            label="Título do Item *"
                            placeholder="Ex: Livros de Romance..."
                            value={formData.titulo}
                            onChange={(e) =>
                                handleChange("titulo", e.target.value)
                            }
                            required
                        />
                        <FormField
                            id="descricao"
                            label="Descrição *"
                            type="textarea"
                            rows={4}
                            placeholder="Descreva o item, seu estado de conservação, etc."
                            value={formData.descricao}
                            onChange={(e) =>
                                handleChange("descricao", e.target.value)
                            }
                            required
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <SelectField
                                id="categoria"
                                label="Categoria *"
                                placeholder="Selecione uma categoria"
                                value={formData.categoria}
                                onChange={(e) =>
                                    handleChange("categoria", e.target.value)
                                }
                                options={categorias}
                            />
                        </div>
                        <SelectField
                            id="condicao"
                            label="Estado de Conservação *"
                            placeholder="Como está o estado do item?"
                            value={formData.condicao}
                            onChange={(e) =>
                                handleChange("condicao", e.target.value)
                            }
                            options={condicoes}
                        />
                        <FormField
                            id="observacoes"
                            label="Observações (opcional)"
                            type="textarea"
                            rows={3}
                            placeholder="Preferências para troca, horários disponíveis, etc."
                            value={formData.observacoes}
                            onChange={(e) =>
                                handleChange("observacoes", e.target.value)
                            }
                        />

                        <ImageUpload />

                        {error && (
                            <p className="text-sm text-red-600 text-center">
                                {error}
                            </p>
                        )}

                        <div className="flex gap-4 pt-6">
                            <Link to="/explorer" className="w-full">
                                <button
                                    type="button"
                                    className="w-full h-12 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold rounded-lg transition-colors"
                                >
                                    Cancelar
                                </button>
                            </Link>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full h-12 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all disabled:bg-neutral-400"
                            >
                                {isLoading
                                    ? "Cadastrando..."
                                    : "✨ Cadastrar Item"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
