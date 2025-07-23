import { useState, useEffect } from "react";
// ajuste o caminho do seu hook

import useAuth from "../hooks/useAuth";
import MyItemCard from "../components/MyItemCard/MyItemCard";

function EditItemModal({ item, onClose, onUpdate, onRemove }) {
    const { token } = useAuth();
    const [titulo, setTitulo] = useState(item.titulo);
    const [descricao, setDescricao] = useState(item.descricao || "");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Função de update
    async function handleSave() {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(
                `http://localhost:3000/api/items/${item.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ titulo, descricao }),
                }
            );
            if (!res.ok) throw new Error("Falha ao atualizar item.");
            const updated = await res.json();
            onUpdate(updated);
            onClose();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    // Função de delete
    async function handleDelete() {
        if (!confirm("Quer mesmo excluir este item?")) return;
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(
                `http://localhost:3000/api/items/${item.id}`,
                {
                    method: "DELETE",
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            if (!res.ok) throw new Error("Falha ao excluir item.");
            onRemove(item.id);
            onClose();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                    aria-label="Fechar"
                >
                    ✕
                </button>
                <h2 className="text-xl font-bold mb-4">Editar Item</h2>

                <label className="block mb-2 font-semibold">
                    Título
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                        disabled={loading}
                    />
                </label>

                <label className="block mb-4 font-semibold">
                    Descrição
                    <textarea
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1 resize-none"
                        rows={4}
                        disabled={loading}
                    />
                </label>

                {error && <p className="mb-4 text-red-600">{error}</p>}

                <div className="flex justify-between gap-4">
                    <button
                        onClick={handleDelete}
                        disabled={loading}
                        className="flex-1 bg-red-600 text-white rounded px-4 py-2 font-semibold hover:bg-red-700 disabled:opacity-50"
                    >
                        {loading ? "Excluindo..." : "Excluir"}
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={loading}
                        className="flex-1 bg-primary-600 text-white rounded px-4 py-2 font-semibold hover:bg-primary-700 disabled:opacity-50"
                    >
                        {loading ? "Salvando..." : "Salvar"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function MyItemsPage() {
    const { token } = useAuth();
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [modalOpen, setModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);

    useEffect(() => {
        if (!token) {
            setError("Você precisa estar logado.");
            setIsLoading(false);
            return;
        }
        async function fetchMyItems() {
            try {
                const res = await fetch("http://localhost:3000/api/items/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!res.ok) throw new Error("Erro ao carregar seus itens.");
                const data = await res.json();
                setItems(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchMyItems();
    }, [token]);

    function openModal(item) {
        setCurrentItem(item);
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
        setCurrentItem(null);
    }

    function updateItem(updatedItem) {
        setItems((prev) =>
            prev.map((item) =>
                item.id === updatedItem.id
                    ? { ...item, ...updatedItem } // preserva o usuário
                    : item
            )
        );
    }

    function removeItem(id) {
        setItems((prev) => prev.filter((item) => item.id !== id));
    }

    if (isLoading)
        return (
            <p className="text-center mt-10 text-gray-500">
                Carregando seus itens...
            </p>
        );
    if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
    if (items.length === 0)
        return (
            <p className="text-center mt-10 text-gray-600">
                Você ainda não cadastrou nenhum item.
            </p>
        );

    return (
        <div className="min-h-screen bg-neutral-50 font-sans">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                    Meus Itens
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                        <MyItemCard
                            key={item.id}
                            item={item}
                            onEdit={() => openModal(item)}
                            onDelete={async (id) => {
                                if (!confirm("Quer mesmo excluir esse item?"))
                                    return;
                                try {
                                    const res = await fetch(
                                        `http://localhost:3000/api/items/${id}`,
                                        {
                                            method: "DELETE",
                                            headers: {
                                                Authorization: `Bearer ${token}`,
                                            },
                                        }
                                    );
                                    if (!res.ok)
                                        throw new Error(
                                            "Falha ao deletar item."
                                        );
                                    removeItem(id);
                                } catch (err) {
                                    alert(err.message);
                                }
                            }}
                        />
                    ))}
                </div>

                {modalOpen && currentItem && (
                    <EditItemModal
                        item={currentItem}
                        onClose={closeModal}
                        onUpdate={updateItem}
                        onRemove={removeItem}
                    />
                )}
            </main>
        </div>
    );
}
