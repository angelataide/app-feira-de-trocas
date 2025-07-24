import ItemCard from "./ItemCard";
import { Coins, Lightbulb, Waves } from "lucide-react";

export default function ResultsGrid({ itens }) {
    console.log("itens:", itens);

    return (
        <div>
            <div className="mb-6">
                <p className="text-neutral-800 text-lg font-semibold flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl border border-neutral-100 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1" />
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
