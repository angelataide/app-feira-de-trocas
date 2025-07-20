import { useEffect, useState } from "react";
import ProposalSuccess from "../components/Item/ProposalSuccess";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import ItemImage from "../components/Item/ItemImage";
import ItemInfo from "../components/Item/ItemInfo";
import UserCard from "../components/Item/UserCard";
import ProposalForm from "../components/Item/ProposalForm";
import AdditionalDetailsCard from "../components/Item/AdditionalDetailsCard";

export default function ItemPage() {
    const { id } = useParams();

    // 2. Novos estados para gerenciar a busca de dados e o item
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [showPropostaForm, setShowPropostaForm] = useState(false);
    const [propostaEnviada, setPropostaEnviada] = useState(false);

    // 3. useEffect para buscar os dados do item na API
    useEffect(() => {
        const fetchItem = async () => {
            try {
                // Usamos o 'id' da URL para buscar o item específico
                const response = await fetch(
                    `http://localhost:3000/api/items/${id}`
                );
                if (!response.ok) {
                    throw new Error("Item não encontrado.");
                }
                const data = await response.json();
                setItem(data);
            } catch (err) {
                setError(err.message);
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchItem();
    }, [id]); // O efeito roda novamente se o ID na URL mudar

    const handleEnviarProposta = (formData) => {
        console.log("Proposta enviada:", formData);
        // Aqui iria a lógica para POST /api/propostas
        setTimeout(() => {
            setPropostaEnviada(true);
            setShowPropostaForm(false);
        }, 1000);
    };

    // 4. Renderização condicional para os estados de carregamento e erro
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Carregando item...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center text-center">
                <div>
                    <h1 className="text-2xl font-bold text-red-500 mb-4">
                        Oops! {error}
                    </h1>
                    <Link
                        to="/explorer"
                        className="font-semibold text-primary-600 hover:underline"
                    >
                        Voltar para a exploração
                    </Link>
                </div>
            </div>
        );
    }

    if (propostaEnviada) {
        return <ProposalSuccess userName={item.usuario} />;
    }

    return (
        <div className="min-h-screen bg-neutral-50 font-sans">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                    <Link
                        to="/explorer"
                        className="flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-primary-600 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Voltar para a exploração
                    </Link>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ItemImage src={item.imagem} alt={item.titulo} />
                    <div>
                        <ItemInfo item={item} />
                        <UserCard item={item} />
                        <AdditionalDetailsCard item={item} />
                        {!showPropostaForm ? (
                            <button
                                onClick={() => setShowPropostaForm(true)}
                                className="w-full h-12 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Propor Troca
                            </button>
                        ) : (
                            <ProposalForm
                                onCancel={() => setShowPropostaForm(false)}
                                onSubmit={handleEnviarProposta}
                            />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
