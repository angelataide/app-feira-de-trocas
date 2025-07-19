import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

export default function ConversationThread({ conversa, onSendMessage }) {
    const [newMessage, setNewMessage] = useState("");

    const handleSend = () => {
        if (newMessage.trim()) {
            onSendMessage(newMessage);
            setNewMessage("");
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
                                <p className="text-sm">{msg.mensagem}</p>
                                <p
                                    className={`text-xs mt-1 ${
                                        msg.isOwner
                                            ? "text-blue-200"
                                            : "text-neutral-400"
                                    }`}
                                >
                                    {msg.autor} • {msg.data}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <textarea
                        placeholder="Digite sua mensagem..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        rows={1}
                        className="flex-1 p-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    />
                    <button
                        onClick={handleSend}
                        className="h-10 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-neutral-300"
                        disabled={!newMessage.trim()}
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
