import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export default function EmptyState({ isRecebida }) {
    return (
        <div className="bg-white p-12 rounded-2xl shadow-md border border-neutral-100 text-center">
            <MessageCircle className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                {isRecebida
                    ? "Nenhuma proposta recebida ainda"
                    : "Nenhuma proposta enviada"}
            </h3>
            <p className="text-neutral-500 mb-4">
                {isRecebida
                    ? "Quando alguém se interessar, as propostas aparecerão aqui."
                    : "Explore itens e faça sua primeira proposta!"}
            </p>
            <Link to={isRecebida ? "/item/create" : "/explorer"}>
                <button className="h-10 px-5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700">
                    {isRecebida ? "Cadastrar Primeiro Item" : "Explorar Itens"}
                </button>
            </Link>
        </div>
    );
}
