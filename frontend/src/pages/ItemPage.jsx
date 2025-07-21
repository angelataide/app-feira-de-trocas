import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

// Componentes
import { MessageCircle, ArrowLeft, Home } from "lucide-react";
import useAuth from "../hooks/useAuth";
import ItemImage from "../components/Item/ItemImage";
import ItemInfo from "../components/Item/ItemInfo";
import UserCard from "../components/Item/UserCard";
import AdditionalDetailsCard from "../components/Item/AdditionalDetailsCard";
import ProposalSuccess from "../components/Item/ProposalSuccess";
import ProposalForm from "../components/Item/ProposalForm";

export default function ItemDetalhePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, isAuthenticated, token } = useAuth();

    const [item, setItem] = useState(null);
    const [meusItens, setMeusItens] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showPropostaForm, setShowPropostaForm] = useState(false);
    const [propostaEnviada, setPropostaEnviada] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const itemResponse = await fetch(
                    `http://localhost:3000/api/items/${id}`
                );
                if (!itemResponse.ok) throw new Error("Item não encontrado.");
                const itemData = await itemResponse.json();
                setItem(itemData);

                if (isAuthenticated) {
                    const meusItensResponse = await fetch(
                        "http://localhost:3000/api/items/me",
                        {
                            headers: { Authorization: `Bearer ${token}` },
                        }
                    );
                    if (!meusItensResponse.ok)
                        throw new Error("Falha ao buscar seus itens.");
                    const meusItensData = await meusItensResponse.json();
                    setMeusItens(meusItensData);
                }
            } catch (err) {
                setError(err.message);
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [id, isAuthenticated, token]);

    const handleEnviarProposta = async (formData) => {
        try {
            const payload = {
                itemDesejadoId: parseInt(id),
                itemOfertadoId: parseInt(formData.itemOferecidoId),
                mensagemInicial: formData.mensagemInicial,
            };

            if (!payload.itemOfertadoId) {
                alert("Por favor, selecione um item para oferecer.");
                return;
            }

            const response = await fetch(
                "http://localhost:3000/api/propostas",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(payload),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message || "Falha ao enviar proposta."
                );
            }

            setPropostaEnviada(true);
            setShowPropostaForm(false);
        } catch (err) {
            console.error("Erro ao criar proposta:", err);
            alert(`Erro: ${err.message}`);
        }
    };

    // Renderização de Loading e Erro
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
                        to="/explorar"
                        className="font-semibold text-primary-600 hover:underline"
                    >
                        Voltar para a exploração
                    </Link>
                </div>
            </div>
        );
    }

    // Se a proposta foi enviada com sucesso
    if (propostaEnviada) {
        return <ProposalSuccess userName={item?.usuario} />;
    }

    // Se o item não foi encontrado após o loading
    if (!item) {
        return null;
    }

    // Variáveis definidas DEPOIS de ter certeza que 'item' não é nulo
    const isOwner = isAuthenticated && user?.id === item.usuarioId;
    const itensOfertados = meusItens.filter(
        (meuItem) => meuItem.id !== item.id
    );

    console.group("Debug Dono do Item");
    console.log("ID do Usuário Logado (do Contexto):", user?.id);
    console.log("Tipo do user.id:", typeof user?.id);
    console.log("ID do Dono do Item (da API):", item.usuarioId);
    console.log("Tipo do item.usuarioId:", typeof item.usuarioId);
    console.groupEnd();

    return (
        <div className="min-h-screen bg-neutral-50 font-sans">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                    <Link
                        to="/explorar"
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

                        {isOwner ? (
                            <button
                                onClick={() => navigate("/explorer")}
                                className="w-full h-12 flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold rounded-lg transition-colors"
                            >
                                <Home className="w-5 h-5" />
                                Este item é seu! Voltar
                            </button>
                        ) : showPropostaForm ? (
                            <ProposalForm
                                meusItens={itensOfertados}
                                onCancel={() => setShowPropostaForm(false)}
                                onSubmit={handleEnviarProposta}
                            />
                        ) : (
                            <button
                                onClick={() => setShowPropostaForm(true)}
                                className="w-full h-12 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Propor Troca
                            </button>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
