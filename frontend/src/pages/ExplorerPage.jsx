import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Waves,
    Search,
    Heart,
    Star,
    MapPin,
    Clock,
    ArrowLeft,
    BookOpen,
    Bike,
    Shirt,
} from "lucide-react";

const categorias = ["Todas", "Livros", "Brinquedos", "Roupas"];
const itensDisponiveis = [
    {
        id: 1,
        titulo: "Livros de Romance",
        descricao: "Coleção de 15 livros de romance em ótimo estado.",
        categoria: "Livros",
        imagem: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2574&auto=format&fit=crop",
        usuario: "Maria Silva",
        bairro: "Centro",
        dataPublicacao: "2 dias atrás",
        rating: 4.5,
        likes: 12,
    },
    {
        id: 2,
        titulo: "Bicicleta Infantil",
        descricao: "Bicicleta aro 16, cor rosa, pouco usada.",
        categoria: "Brinquedos",
        imagem: "https://images.unsplash.com/photo-1559348344-3e9d35a35054?q=80&w=2574&auto=format&fit=crop",
        usuario: "João Santos",
        bairro: "Vila Nova",
        dataPublicacao: "1 dia atrás",
        rating: 4.9,
        likes: 8,
    },
    {
        id: 3,
        titulo: "Roupas Femininas Tam M",
        descricao: "Lote com 10 peças de roupas femininas tamanho M.",
        categoria: "Roupas",
        imagem: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2574&auto=format&fit=crop",
        usuario: "Ana Costa",
        bairro: "Jardim das Flores",
        dataPublicacao: "3 dias atrás",
        rating: 4.7,
        likes: 21,
    },
    {
        id: 4,
        titulo: "Box Sherlock Holmes",
        descricao: "Edição de luxo com todos os contos e romances.",
        categoria: "Livros",
        imagem: "https://images.unsplash.com/photo-1600185949520-e925c3c0d80a?q=80&w=2574&auto=format&fit=crop",
        usuario: "Pedro Martins",
        bairro: "Centro",
        dataPublicacao: "5 dias atrás",
        rating: 4.8,
        likes: 15,
    },
];

const categoriaIcones = {
    Livros: <BookOpen className="w-4 h-4" />,
    Brinquedos: <Bike className="w-4 h-4" />,
    Roupas: <Shirt className="w-4 h-4" />,
};

const ItemCard = ({ item }) => (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden group border border-neutral-100 hover:border-primary-500/50 hover:shadow-lg transition-all duration-300">
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
                <div className="bg-green-100/70 text-green-600 px-2 py-1 rounded-full font-semibold">
                    Disponível
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
                            {item.usuario
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </div>
                        <span className="text-sm font-medium text-neutral-800">
                            {item.usuario}
                        </span>
                    </div>
                    <div className="flex items-center gap-1 text-neutral-400">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs font-medium">
                            {item.likes}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-neutral-400 mb-4">
                    <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {item.bairro}
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {item.dataPublicacao}
                    </div>
                </div>

                <button className="w-full h-10 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                    Ver Detalhes e Propor Troca
                </button>
            </div>
        </div>
    </div>
);

export default function ExplorarPage() {
    const [busca, setBusca] = useState("");
    const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");

    const itensFiltrados = itensDisponiveis.filter((item) => {
        const matchBusca = item.titulo
            .toLowerCase()
            .includes(busca.toLowerCase());
        const matchCategoria =
            categoriaFiltro === "Todas" || item.categoria === categoriaFiltro;
        return matchBusca && matchCategoria;
    });

    return (
        <div className="min-h-screen bg-neutral-50 font-sans">
            {/* O Header aqui poderia ser um componente reutilizável, por enquanto está direto */}
            <header className="bg-white/80 backdrop-blur-sm border-b border-neutral-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link to="/" className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" /> Voltar ao início
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-2">
                        Explorar Itens Disponíveis
                    </h2>
                    <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                        Descubra tesouros incríveis na sua comunidade e encontre
                        exatamente o que você precisa.
                    </p>
                </div>

                <div className="bg-white backdrop-blur-lg rounded-xl p-4 shadow-md border border-neutral-100 mb-8 sticky top-20 z-40">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Buscar itens incríveis..."
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                                className="w-full h-12 pl-12 pr-4 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <select
                            value={categoriaFiltro}
                            onChange={(e) => setCategoriaFiltro(e.target.value)}
                            className="w-full md:w-48 h-12 px-4 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
                        >
                            {categorias.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="mb-6">
                    <p className="text-neutral-800 text-lg font-semibold flex items-center gap-2">
                        <Waves className="w-5 h-5 text-primary-500" />
                        {itensFiltrados.length}{" "}
                        {itensFiltrados.length === 1
                            ? "tesouro encontrado"
                            : "tesouros encontrados"}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {itensFiltrados.map((item) => (
                        <ItemCard key={item.id} item={item} />
                    ))}
                </div>
            </main>
        </div>
    );
}
