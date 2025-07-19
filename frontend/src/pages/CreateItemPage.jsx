import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SuccessScreen from "../components/CreateItem/SuccessScreen";
import { Gift } from "lucide-react";
import FormField from "../components/CreateItem/FormField";
import SelectField from "../components/CreateItem/SelectField";
import { categorias } from "../constants/categoriaMock";
import { bairros, condicoes } from "../constants/createMock";
import ImageUpload from "../components/CreateItem/ImageUpload";

export default function CreateItemPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        titulo: "",
        descricao: "",
        categoria: "",
        bairro: "",
        condicao: "",
    });
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Item cadastrado:", formData);
        setIsSuccess(true);
        setTimeout(() => navigate("/explorer"), 3000); // Redireciona após 3s
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
                            <SelectField
                                id="bairro"
                                label="Bairro *"
                                placeholder="Selecione seu bairro"
                                value={formData.bairro}
                                onChange={(e) =>
                                    handleChange("bairro", e.target.value)
                                }
                                options={bairros}
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

                        <ImageUpload />

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
                                className="w-full h-12 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                            >
                                ✨ Cadastrar Item
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
