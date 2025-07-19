import { useState } from "react";
import { MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import StatusBadge from "./StatusBadge";
import ConversationThread from "./ConversationThread";

export default function ProposalCard({
    proposta,
    isRecebida,
    onUpdateConversa,
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSendMessage = (newMessage) => {
        const novaMensagem = {
            id: Date.now(),
            autor: "Você",
            mensagem: newMessage,
            data: "Agora",
            isOwner: true,
        };
        onUpdateConversa(proposta.id, [...proposta.conversa, novaMensagem]);
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md border border-neutral-100">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-bold text-neutral-800">
                        {isRecebida
                            ? `Interesse em: ${proposta.itemSolicitado}`
                            : `Proposta para: ${proposta.itemSolicitado}`}
                    </h3>
                    <p className="text-neutral-500">
                        {isRecebida
                            ? `Oferece: ${proposta.itemOferecido}`
                            : `Você ofereceu: ${proposta.itemOferecido}`}
                    </p>
                </div>
                <StatusBadge status={proposta.status} />
            </div>
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center font-bold text-primary-600">
                    {proposta.usuario
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                </div>
                <div>
                    <p className="font-semibold text-neutral-800">
                        {proposta.usuario}
                    </p>
                    <p className="text-sm text-neutral-400">
                        {proposta.bairro} • {proposta.data}
                    </p>
                </div>
            </div>
            <div className="bg-neutral-100/70 p-3 rounded-lg mb-4 text-sm text-neutral-800">
                <p>{proposta.mensagem}</p>
            </div>
            <div className="flex gap-2">
                {isRecebida && proposta.status === "pendente" && (
                    <>
                        <button className="h-10 px-4 flex-1 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700">
                            Aceitar
                        </button>
                        <button className="h-10 px-4 flex-1 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600">
                            Recusar
                        </button>
                    </>
                )}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="h-10 px-4 flex-1 flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold rounded-lg"
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
            {isExpanded && (
                <ConversationThread
                    conversa={proposta.conversa}
                    onSendMessage={handleSendMessage}
                />
            )}
        </div>
    );
}
