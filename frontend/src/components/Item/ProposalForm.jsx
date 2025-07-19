import { useState } from "react";
import { meusItens } from "../../constants/meusItens";

export default function ProposalForm({ onCancel, onSubmit }) {
    const [itemOferecido, setItemOferecido] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ itemOferecido, mensagem });
    };

    return (
        <div className="bg-white border border-neutral-100 rounded-lg p-6">
            <h3 className="text-xl font-bold text-neutral-800 mb-1">
                Fazer Proposta de Troca
            </h3>
            <p className="text-neutral-500 mb-4">
                Escolha um item seu para oferecer em troca.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label
                        htmlFor="item-oferecido"
                        className="block text-sm font-medium text-neutral-800 mb-1"
                    >
                        Item que você oferece *
                    </label>
                    <select
                        id="item-oferecido"
                        value={itemOferecido}
                        onChange={(e) => setItemOferecido(e.target.value)}
                        className="w-full h-12 px-4 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                    >
                        <option value="" disabled>
                            Selecione um dos seus itens
                        </option>
                        {meusItens.map((item) => (
                            <option key={item.id} value={item.titulo}>
                                {item.titulo} ({item.categoria})
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="mensagem"
                        className="block text-sm font-medium text-neutral-800 mb-1"
                    >
                        Mensagem (opcional)
                    </label>
                    <textarea
                        id="mensagem"
                        placeholder="Conte mais sobre seu item ou deixe uma mensagem..."
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        rows={3}
                        className="w-full p-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                </div>
                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="flex-1 h-12 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold rounded-lg transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        disabled={!itemOferecido}
                        className="flex-1 h-12 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors disabled:bg-neutral-300"
                    >
                        Enviar Proposta
                    </button>
                </div>
            </form>
        </div>
    );
}
