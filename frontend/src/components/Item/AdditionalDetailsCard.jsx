export default function AdditionalDetailsCard({ item }) {
    if (!item.condicao && !item.observacoes) {
        return null;
    }

    return (
        <div className="bg-white border border-neutral-100 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-neutral-800 mb-4">
                Detalhes Adicionais
            </h3>
            <div className="space-y-3 text-sm">
                {item.condicao && (
                    <div>
                        <span className="font-semibold text-neutral-800">
                            Estado de conservação:
                        </span>
                        <span className="ml-2 text-neutral-500">
                            {item.condicao}
                        </span>
                    </div>
                )}
                {item.observacoes && (
                    <div>
                        <span className="font-semibold text-neutral-800">
                            Observações do Trocador:
                        </span>
                        <p className="mt-1 text-neutral-500 leading-relaxed">
                            {item.observacoes}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
