import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import ProposalCard from "../components/Proposal/ProposalCard";
import EmptyState from "../components/Proposal/EmptyState";
//import ProposalCard from "../components/propostas/ProposalCard";
//import EmptyState from "../components/propostas/EmptyState";

export default function PropostasPage() {
    const { token } = useAuth();
    const [activeTab, setActiveTab] = useState("recebidas");

    const [propostasRecebidas, setPropostasRecebidas] = useState([]);
    const [propostasEnviadas, setPropostasEnviadas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPropostas = async () => {
            if (!token) return;

            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    "http://localhost:3000/api/propostas",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Falha ao buscar suas propostas.");
                }

                const data = await response.json();
                setPropostasRecebidas(data.propostasRecebidas || []);
                setPropostasEnviadas(data.propostasEnviadas || []);
            } catch (err) {
                setError(err.message);
                console.error("Erro detalhado:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPropostas();
    }, [token]);

    const updateConversa = (propostaId, novaConversa) => {
        if (activeTab === "recebidas") {
            setPropostasRecebidas((prev) =>
                prev.map((p) =>
                    p.id === propostaId ? { ...p, conversa: novaConversa } : p
                )
            );
        } else {
            setPropostasEnviadas((prev) =>
                prev.map((p) =>
                    p.id === propostaId ? { ...p, conversa: novaConversa } : p
                )
            );
        }
    };

    const handleStatusChange = (propostaId, propostaAtualizada) => {
        const updateUserInterface = (prevState) =>
            prevState.map((p) =>
                p.id === propostaId
                    ? { ...p, status: propostaAtualizada.status }
                    : p
            );

        // Atualiza a lista correta dependendo da aba ativa
        if (propostasRecebidas.some((p) => p.id === propostaId)) {
            setPropostasRecebidas(updateUserInterface);
        }
        if (propostasEnviadas.some((p) => p.id === propostaId)) {
            setPropostasEnviadas(updateUserInterface);
        }
    };

    const renderContent = () => {
        if (isLoading) {
            return (
                <p className="text-center text-neutral-500">
                    Carregando propostas...
                </p>
            );
        }
        if (error) {
            return <p className="text-center text-red-500">{error}</p>;
        }

        const propostasAtuais =
            activeTab === "recebidas" ? propostasRecebidas : propostasEnviadas;
        const isRecebidaTab = activeTab === "recebidas";

        return propostasAtuais.length > 0 ? (
            propostasAtuais.map((p) => (
                <ProposalCard
                    key={p.id}
                    proposta={p}
                    isRecebida={isRecebidaTab}
                    onUpdateConversa={updateConversa}
                    onStatusChange={handleStatusChange}
                />
            ))
        ) : (
            <EmptyState isRecebida={isRecebidaTab} />
        );
    };

    return (
        <div className="min-h-screen bg-neutral-50 font-sans">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-2">
                        Minhas Propostas
                    </h2>
                    <p className="text-neutral-500">
                        Gerencie as propostas de troca recebidas e enviadas.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6 bg-white p-1 rounded-xl shadow-md border border-neutral-100 sticky top-20 z-40">
                    <button
                        onClick={() => setActiveTab("recebidas")}
                        className={`w-full p-2 rounded-lg font-semibold transition-all duration-300 ${
                            activeTab === "recebidas"
                                ? "bg-primary-600 text-white"
                                : "text-neutral-500 hover:bg-neutral-100"
                        }`}
                    >
                        Recebidas (
                        {isLoading ? "..." : propostasRecebidas.length})
                    </button>
                    <button
                        onClick={() => setActiveTab("enviadas")}
                        className={`w-full p-2 rounded-lg font-semibold transition-all duration-300 ${
                            activeTab === "enviadas"
                                ? "bg-primary-600 text-white"
                                : "text-neutral-500 hover:bg-neutral-100"
                        }`}
                    >
                        Enviadas ({isLoading ? "..." : propostasEnviadas.length}
                        )
                    </button>
                </div>

                <div className="space-y-6">{renderContent()}</div>
            </main>
        </div>
    );
}
