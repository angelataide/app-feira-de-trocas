import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import StatusBadge from "./StatusBadge";
import ConversationThread from "./ConversationThread";

export default function ProposalCard({
    proposta,
    isRecebida,
    onUpdateConversa,
    onStatusChange,
}) {
    const { token } = useAuth();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleStatusUpdate = async (newStatus) => {
        setIsLoading(true);
        setError("");
        const action = newStatus === "ACEITA" ? "aceitar" : "recusar";

        try {
            const response = await fetch(
                `http://localhost:3000/api/propostas/${proposta.id}/${action}`,
                {
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message || `Falha ao ${action} a proposta.`
                );
            }

            const propostaAtualizada = await response.json();
            onStatusChange(proposta.id, propostaAtualizada);
        } catch (err) {
            setError(err.message);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const oponente = isRecebida ? proposta.solicitante : proposta.receptor;
    const nomeOponente = oponente?.nome || "Usuário Deletado";
    const iniciais = nomeOponente
        .split(" ")
        .map((n) => n[0])
        .join("");

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md border border-neutral-100">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-bold text-neutral-800">
                        {isRecebida
                            ? `Interesse em: ${proposta.itemDesejado?.titulo}`
                            : `Proposta para: ${proposta.itemDesejado?.titulo}`}
                    </h3>
                    <p className="text-neutral-500">
                        {isRecebida
                            ? `Oferece: ${proposta.itemOfertado?.titulo}`
                            : `Você ofereceu: ${proposta.itemOfertado?.titulo}`}
                    </p>
                </div>
                <StatusBadge status={proposta.status.toLowerCase()} />
            </div>
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center font-bold text-primary-600">
                    {iniciais}
                </div>
                <div>
                    <p className="font-semibold text-neutral-800">
                        {nomeOponente}
                    </p>
                    <p className="text-sm text-neutral-400">
                        {new Date(proposta.createdAt).toLocaleDateString(
                            "pt-BR"
                        )}
                    </p>
                </div>
            </div>
            <div className="bg-neutral-100/70 p-3 rounded-lg mb-4 text-sm text-neutral-800">
                <p>{proposta.mensagemInicial || "Nenhuma mensagem inicial."}</p>
            </div>
            <div className="flex flex-wrap gap-2">
                {isRecebida && proposta.status === "PENDENTE" && (
                    <>
                        <button
                            onClick={() => handleStatusUpdate("ACEITA")}
                            disabled={isLoading}
                            className="h-10 px-4 flex-1 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 disabled:bg-neutral-400 transition-colors"
                        >
                            {isLoading ? "..." : "Aceitar"}
                        </button>
                        <button
                            onClick={() => handleStatusUpdate("RECUSADA")}
                            disabled={isLoading}
                            className="h-10 px-4 flex-1 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 disabled:bg-neutral-400 transition-colors"
                        >
                            {isLoading ? "..." : "Recusar"}
                        </button>
                    </>
                )}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="h-10 px-4 flex-1 flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold rounded-lg transition-colors"
                >
                    <MessageCircle className="w-4 h-4" />
                    Conversar
                    {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                    ) : (
                        <ChevronDown className="w-4 h-4" />
                    )}
                </button>
            </div>
            {error && (
                <p className="text-sm text-red-500 mt-2 text-center">{error}</p>
            )}

            {isExpanded && (
                <ConversationThread
                    propostaId={proposta.id}
                    conversa={proposta.conversa || []}
                    onUpdateConversa={onUpdateConversa}
                />
            )}
        </div>
    );
}
