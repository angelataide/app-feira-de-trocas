import { useState, useEffect } from "react"; // <-- 1. Adicionado useEffect
// import { itensDisponiveis } from "../constants/itensMock"; // <-- 2. REMOVIDO: Não usaremos mais dados de exemplo
import ExplorarHeader from "../components/Explorer/ExplorerHeader";
import FilterBar from "../components/Explorer/FilterBar";
import ResultsGrid from "../components/Explorer/ResultsGrid";

export default function ExplorerPage() {
    // Estados para os filtros (continuam iguais)
    const [busca, setBusca] = useState("");
    const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");

    // <-- 3. NOVOS ESTADOS para gerenciar os dados da API
    const [allItems, setAllItems] = useState([]); // Guarda a lista completa de itens vinda do backend
    const [isLoading, setIsLoading] = useState(true); // Começa como true para mostrar o feedback de carregamento
    const [error, setError] = useState(null); // Guarda mensagens de erro

    // <-- 4. EFEITO para buscar os dados da API quando a página carrega
    useEffect(() => {
        const fetchItems = async () => {
            try {
                // Lembre-se que seu backend tem o prefixo /api
                const response = await fetch("http://localhost:3000/api/items");
                if (!response.ok) {
                    throw new Error("Não foi possível carregar os itens.");
                }
                const data = await response.json();
                setAllItems(data); // Guarda os itens no nosso estado
            } catch (err) {
                setError(err.message); // Em caso de erro, guarda a mensagem
                console.error(err);
            } finally {
                setIsLoading(false); // Termina o carregamento, seja com sucesso ou erro
            }
        };

        fetchItems();
    }, []); // O array vazio [] faz com que este efeito rode apenas uma vez, quando a página monta

    // <-- 5. FILTRO agora opera sobre a lista 'allItems' que veio da API
    const itensFiltrados = allItems.filter((item) => {
        const matchBusca = item.titulo
            .toLowerCase()
            .includes(busca.toLowerCase());
        const matchCategoria =
            categoriaFiltro === "Todas" || item.categoria === categoriaFiltro;
        return matchBusca && matchCategoria;
    });

    // <-- 6. RENDERIZAÇÃO CONDICIONAL para Carregamento e Erro
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
