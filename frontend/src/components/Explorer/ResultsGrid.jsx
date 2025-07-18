import ItemCard from "./ItemCard";
import { Waves } from "lucide-react";

export default function ResultsGrid({ itens }) {
    return (
        <div>
            <div className="mb-6">
                <p className="text-neutral-800 text-lg font-semibold flex items-center gap-2">
                    <Waves className="w-5 h-5 text-primary-500" />
                    {itens.length}{" "}
                    {itens.length === 1
                        ? "tesouro encontrado"
                        : "tesouros encontrados"}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {itens.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
