import { useState } from "react";
import { itensDisponiveis } from "../constants/itensMock";
import ExplorarHeader from "../components/Explorer/ExplorerHeader";
import FilterBar from "../components/Explorer/FilterBar";
import ResultsGrid from "../components/Explorer/ResultsGrid";

export default function ExplorerPage() {
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
            <ExplorarHeader />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-2">
                        Explorar Itens Disponíveis
                    </h2>
                    <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                        Descubra tesouros incríveis na sua comunidade.
                    </p>
                </div>

                <FilterBar
                    busca={busca}
                    setBusca={setBusca}
                    categoriaFiltro={categoriaFiltro}
                    setCategoriaFiltro={setCategoriaFiltro}
                />

                <ResultsGrid itens={itensFiltrados} />
            </main>
        </div>
    );
}
