import { useState } from "react";
import {
    Heart,
    Star,
    MapPin,
    Clock,
    BookOpen,
    Bike,
    Shirt,
    Edit2,
    Trash2,
} from "lucide-react";

const categoriaIcones = {
    Livros: <BookOpen className="w-4 h-4" />,
    Brinquedos: <Bike className="w-4 h-4" />,
    Roupas: <Shirt className="w-4 h-4" />,
};

export default function MyItemCard({ item, onEdit, onDelete }) {
    const [loadingDelete, setLoadingDelete] = useState(false);

    const isEditable = item.status === "DISPONIVEL";

    const handleDelete = async () => {
        if (!isEditable) return;
        setLoadingDelete(true);
        try {
            await onDelete(item.id);
        } finally {
            setLoadingDelete(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden group border border-neutral-100 hover:border-primary-500/50 hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={`http://localhost:3000/api/upload/${encodeURIComponent(
                        item.imagemUrl
                    )}`}
                    alt={item.titulo}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800">
                        {categoriaIcones[item.categoria]}
                        <span>{item.categoria}</span>
                    </div>
                    <button className="text-neutral-400 hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                    </button>
                </div>
                <div className="flex items-start gap-2 text-xs text-neutral-400 mb-4">
                    <div className="flex items-center gap-1 bg-sky-100/70 text-sky-600 px-2 py-1 rounded-full">
                        <Star className="w-3 h-3" />
                        <span className="font-bold">{item.rating}</span>
                    </div>
                    <div
                        className={`px-2 py-1 rounded-full font-semibold ${
                            item.status === "DISPONIVEL"
                                ? "bg-green-100/70 text-green-600"
                                : "bg-gray-200 text-gray-400"
                        }`}
                    >
                        {item.status.toLowerCase()}
                    </div>
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-1">
                    {item.titulo}
                </h3>
                <p className="text-sm text-neutral-500 line-clamp-2 mb-4">
                    {item.descricao}
                </p>
                <div className="border-t border-neutral-100 pt-3">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center font-bold text-primary-600 text-sm">
                                {item.usuario.nome
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                            </div>
                            <span className="text-sm font-medium text-neutral-800">
                                {item.usuario.nome}
                            </span>
                        </div>
                        <div className="flex items-center gap-1 text-neutral-400">
                            <Heart className="w-4 h-4" />
                            <span className="text-xs font-medium">
                                {item.likes}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-neutral-400 mb-4"></div>
                    <div className="flex gap-2">
                        <button
                            disabled={!isEditable}
                            onClick={() => isEditable && onEdit(item)}
                            className={`flex-1 h-10 rounded-lg font-semibold text-white transition-colors ${
                                isEditable
                                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-primary-700"
                                    : "bg-gray-300 cursor-not-allowed"
                            }`}
                        >
                            <Edit2 className="inline w-5 h-5 mr-2" />
                            Editar
                        </button>
                        <button
                            disabled={!isEditable || loadingDelete}
                            onClick={handleDelete}
                            className={`flex-1 h-10 rounded-lg font-semibold text-white transition-colors ${
                                isEditable
                                    ? "bg-gradient-to-r from-pink-500 to-red-500 hover:bg-red-700"
                                    : "bg-gray-300 cursor-not-allowed"
                            }`}
                        >
                            <Trash2 className="inline w-5 h-5 mr-2" />
                            {loadingDelete ? "Excluindo..." : "Excluir"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
