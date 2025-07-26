import { useState, useEffect } from "react";

import ExplorarHeader from "../components/Explorer/ExplorerHeader";
import FilterBar from "../components/Explorer/FilterBar";
import ResultsGrid from "../components/Explorer/ResultsGrid";

export default function ExplorerPage() {
    const [busca, setBusca] = useState("");
    const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");

    const [allItems, setAllItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/items");
                if (!response.ok) {
                    throw new Error("Não foi possível carregar os itens.");
                }
                const data = await response.json();
                setAllItems(data);
            } catch (err) {
                setError(err.message);
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchItems();
    }, []);

    const itensFiltrados = allItems.filter((item) => {
        const matchBusca = item.titulo
            .toLowerCase()
            .includes(busca.toLowerCase());
        const matchCategoria =
            categoriaFiltro === "Todas" || item.categoria === categoriaFiltro;
        return matchBusca && matchCategoria;
    });

    const renderContent = () => {
        if (isLoading) {
            return (
                <p className="text-center text-neutral-500">
                    Carregando tesouros...
                </p>
            );
        }
        if (error) {
            return <p className="text-center text-red-500">{error}</p>;
        }
        return <ResultsGrid itens={itensFiltrados} />;
    };

    return (
        <div className="min-h-screen bg-neutral-50 font-sans">
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

                {renderContent()}
            </main>
        </div>
    );
}
