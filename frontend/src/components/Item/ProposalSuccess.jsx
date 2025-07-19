import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { itemDetalhes } from "../../constants/itemDetalhe";

export default function ProposalSuccess() {
    return (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-white border border-neutral-100 rounded-lg p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                    Proposta Enviada!
                </h2>
                <p className="text-neutral-500 mb-6">
                    Sua proposta foi enviada para {itemDetalhes.usuario}. Você
                    receberá uma notificação quando ela for respondida.
                </p>
                <div className="flex gap-4 justify-center">
                    <Link to="/">
                        <button className="h-12 px-6 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold rounded-lg transition-colors">
                            Voltar ao Início
                        </button>
                    </Link>
                    <Link to="/proposals">
                        <button className="h-12 px-6 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors">
                            Ver Minhas Propostas
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
