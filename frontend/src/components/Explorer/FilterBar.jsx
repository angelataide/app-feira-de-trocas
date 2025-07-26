import { Search } from "lucide-react";
import { categorias } from "../../constants/categoriaMock";

export default function FilterBar({
    busca,
    setBusca,
    categoriaFiltro,
    setCategoriaFiltro,
}) {
    return (
        <div className="bg-white backdrop-blur-lg rounded-xl p-4 shadow-md border border-neutral-100 mb-8 z-40">
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
    );
}
