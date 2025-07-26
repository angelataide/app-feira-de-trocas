import {
    Bike,
    BookOpen,
    Boxes,
    Clock,
    Dog,
    Footprints,
    Guitar,
    Heart,
    Lamp,
    MapPin,
    Monitor,
    PenTool,
    Shirt,
    Star,
    Utensils,
    Volleyball,
    Watch,
} from "lucide-react";
import { Link } from "react-router-dom";

const categoriaIcones = {
    Livros: <BookOpen className="w-4 h-4" />,
    Brinquedos: <Bike className="w-4 h-4" />,
    Roupas: <Shirt className="w-4 h-4" />,
    Eletrônicos: <Monitor className="w-4 h-4" />,
    Decoração: <Lamp className="w-4 h-4" />,
    Calçados: <Footprints className="w-4 h-4" />,
    Esportes: <Volleyball className="w-4 h-4" />,
    Acessórios: <Watch className="w-4 h-4" />,
    Cozinha: <Utensils className="w-4 h-4" />,
    Papelaria: <PenTool className="w-4 h-4" />,
    Instrumentos: <Guitar className="w-4 h-4" />,
    Pets: <Dog className="w-4 h-4" />,
    Outros: <Boxes className="w-4 h-4" />,
};

export default function ItemCard({ item }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden group border border-neutral-100 hover:border-primary-500/50 hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={item.imagem}
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
                    <Link to={`/item/${item.id}`}>
                        <button className="w-full h-10 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                            Ver Detalhes e Propor Troca
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
