export default function ItemInfo({ item }) {
    return (
        <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-primary-600 bg-primary-600/10 px-3 py-1 rounded-full">
                    {item.categoria}
                </span>
                <span className="text-sm font-semibold text-green-600 bg-green-600/10 px-3 py-1 rounded-full">
                    {item.status === "disponivel"
                        ? "Disponível"
                        : "Indisponível"}
                </span>
            </div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-4">
                {item.titulo}
            </h1>
            <p className="text-neutral-500 text-base leading-relaxed">
                {item.descricao}
            </p>
        </div>
    );
}
