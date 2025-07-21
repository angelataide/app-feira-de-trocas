import { useState, useEffect, useRef } from "react";
import useAuth from "../../hooks/useAuth";
import { MessageCircle, Send } from "lucide-react";

const COOLDOWN_SECONDS = 30;

export default function ConversationThread({
    propostaId,
    conversa,
    onUpdateConversa,
}) {
    const { user, token } = useAuth();
    const [newMessage, setNewMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [cooldown, setCooldown] = useState(0);
    const endRef = useRef(null);

    // Busca mensagens a cada 15s, e na montagem
    useEffect(() => {
        if (!propostaId || !token) return;

        fetchMessages();

        const interval = setInterval(() => {
            fetchMessages();
        }, 15000); // 15 segundos

        return () => clearInterval(interval);
    }, [propostaId, token]);

    // Decrementa cooldown a cada segundo
    useEffect(() => {
        if (cooldown <= 0) return;
        const timer = setInterval(() => {
            setCooldown((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [cooldown]);

    // Scroll automático sempre que conversa mudar
    useEffect(() => {
        if (endRef.current) {
            endRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [conversa]);

    const fetchMessages = async () => {
        if (!token || !propostaId) return;
        try {
            const response = await fetch(
                `http://localhost:3000/api/propostas/${propostaId}/mensagens`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            if (!response.ok) throw new Error("Falha ao buscar mensagens");

            const data = await response.json();

            const mensagensFormatadas = data.map((msg) => ({
                ...msg,
                isOwner: String(msg.autor.id) === String(user.id),
            }));
            onUpdateConversa(propostaId, mensagensFormatadas);
        } catch (error) {
            console.error("Falha ao buscar novas mensagens:", error);
        }
    };

    const handleSendMessage = async (e) => {
        if (e) e.preventDefault();
        if (!newMessage.trim() || cooldown > 0 || !token || !propostaId) return;

        setIsLoading(true);
        try {
            const payload = { conteudo: newMessage };
            const response = await fetch(
                `http://localhost:3000/api/propostas/${propostaId}/mensagens`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(payload),
                }
            );
            if (!response.ok) throw new Error("Falha ao enviar mensagem");

            const novaMensagemApi = await response.json();
            const novaMensagem = { ...novaMensagemApi, isOwner: true };
            onUpdateConversa(propostaId, [...conversa, novaMensagem]);

            setNewMessage("");
            setCooldown(COOLDOWN_SECONDS);

            // Opcional: busca mensagens logo após enviar, pra garantir atualização
            await fetchMessages();
        } catch (error) {
            console.error("Falha ao enviar mensagem:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="border-t border-neutral-200 pt-4 mt-4">
            <div className="bg-neutral-100/70 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-800 mb-3 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary-500" />
                    Conversa
                </h4>
                <div className="space-y-3 max-h-60 overflow-y-auto mb-4 pr-2">
                    {conversa.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${
                                msg.isOwner ? "justify-end" : "justify-start"
                            }`}
                        >
                            <div
                                className={`max-w-xs p-3 rounded-lg ${
                                    msg.isOwner
                                        ? "bg-primary-600 text-white"
                                        : "bg-white text-neutral-800 border border-neutral-200"
                                }`}
                            >
                                <p className="text-sm">{msg.conteudo}</p>
                                <p
                                    className={`text-xs mt-1 text-right ${
                                        msg.isOwner
                                            ? "text-blue-200"
                                            : "text-neutral-400"
                                    }`}
                                >
                                    {msg.autor?.nome} •{" "}
                                    {new Date(msg.createdAt).toLocaleTimeString(
                                        "pt-BR",
                                        { hour: "2-digit", minute: "2-digit" }
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                    {conversa.length === 0 && (
                        <p className="text-center text-sm text-neutral-400 py-4">
                            Nenhuma mensagem ainda. Seja o primeiro a conversar!
                        </p>
                    )}
                    <div ref={endRef} />
                </div>

                <form
                    onSubmit={handleSendMessage}
                    className="flex items-center gap-2"
                >
                    <textarea
                        placeholder="Digite sua mensagem..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                handleSendMessage();
                            }
                        }}
                        rows={1}
                        className="flex-1 p-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    />
                    <button
                        type="submit"
                        disabled={isLoading || cooldown > 0}
                        className="h-10 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-neutral-400 transition-colors"
                    >
                        {isLoading ? (
                            "..."
                        ) : cooldown > 0 ? (
                            `${cooldown}s`
                        ) : (
                            <Send className="w-4 h-4" />
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
